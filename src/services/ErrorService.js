// src/services/ErrorService.js
import { TRANSLATION_ERRORS, CONFIG } from "../config.js";
import NotificationManager from "../managers/NotificationManager.js";

export class ErrorTypes {
  static API = "API";
  static NETWORK = "NETWORK";
  static SERVICE = "SERVICE";
  static VALIDATIONMODEL = "VALIDATIONMODEL";
  static CONTEXT = "CONTEXT";
  static UI = "UI";
  static INTEGRATION = "INTEGRATION";
}

export class ErrorHandler {
  constructor(notificationManager = new NotificationManager()) {
    this.notifier = notificationManager;
    this.displayedErrors = new Set();
    this.isHandling = false; // فلگ برای جلوگیری از هندلینگ چندباره در یک چرخه
  }

  handle(error, meta = {}) {
    if (this.isHandling) {
      console.debug(
        "[ErrorHandler] Ignoring subsequent error in the same flow:",
        error
      );
      return error;
    }
    this.isHandling = true;

    // نرمال‌سازی خطا در صورتی که از نوع Error نباشد
    if (!(error instanceof Error)) {
      error = new Error(String(error));
    }

    // بررسی و بازبینی نوع خطا بر اساس محتوای خطا
    let { type, statusCode } = meta;
    type = this._reviewErrorTypeBasedOnContent(error, type, meta);

    const message = this._getErrorMessage(error, type, statusCode);

    this._logError(error, meta);

    this._notifyUser(message, type);

    this.isHandling = false; // ریست کردن فلگ بعد از هندلینگ
    return error;
  }

  _reviewErrorTypeBasedOnContent(error, currentType, meta) {
    let type = currentType;
    if (error.message.includes("Extension context invalidated")) {
      type = ErrorTypes.CONTEXT;
    }

    if (
      error.message.includes("reading 'handle'") &&
      meta.context === "ctrl-slash"
    ) {
      type = ErrorTypes.INTEGRATION;
    }

    // می‌توانید بررسی‌های مشابهی برای سایر شرایط خاص اضافه کنید
    return type;
  }

  _getErrorMessage(error, type, statusCode, meta) {
    const errorMap = {
      [ErrorTypes.API]: {
        400: `400: ${TRANSLATION_ERRORS.API_KEY_WRONG}`,
        401: `401: ${TRANSLATION_ERRORS.API_KEY_MISSING}`,
        403: `403: ${TRANSLATION_ERRORS.API_KEY_WRONG}`,
        429: `429: ${TRANSLATION_ERRORS.SERVICE_OVERLOADED}`,
        500: "500: خطای داخلی سرور",
        default: "خطای سرویس API",
      },
      [ErrorTypes.NETWORK]: {
        default: TRANSLATION_ERRORS.NETWORK_FAILURE,
      },
      [ErrorTypes.SERVICE]: {
        503: "سرویس موقتاً در دسترس نیست",
        default: "خطای سرویس ترجمه",
      },
      [ErrorTypes.CONTEXT]: {
        default: "لطفا صفحه را رفرش کنید.",
      },
      [ErrorTypes.UI]: {
        default: "خطای سیستمی رخ داده است",
      },
      [ErrorTypes.VALIDATIONMODEL]: {
        default: "خطا در مدلِ انتخاب شده",
      },
      [ErrorTypes.INTEGRATION]: {
        ctrl_slash: "⚠️ خطا در اتصال شورتکات به صفحه",
        "invalid-tab": "⚠️ تب جاری معتبر نیست",
        "invalid-protocol":
          "❌ این قابلیت فقط در آدرس‌های وب معمولی (http/https) کار می‌کند",
        "content-injection": "⚠️ خطا در تزریق کد ترجمه به صفحه",
        default: "⚠️ خطا در اتصال به این صفحه",
      },
    };

    if (type && errorMap[type]) {
      const typeError = errorMap[type];
      if (
        type === ErrorTypes.INTEGRATION &&
        error.message.includes("reading 'handle'")
      ) {
        return typeError.ctrl_slash;
      }
      return typeError[statusCode] || typeError.default;
    }

    // در صورت نداشتن نوع مشخص، از پیامِ اصلیِ خطا استفاده می‌شود
    return error.message || "خطای ناشناخته رخ داده است";
  }

  _logError(error, meta) {
    const isProduction = process.env.NODE_ENV === "production";
    const isKnownErrorType = Object.values(ErrorTypes).includes(meta.type);

    const errorDetails = {
      name: error.name,
      message: error.message,
      type: meta.type || error.type,
      statusCode: meta.statusCode || error.statusCode,
      context: meta.context,
      stack: error.stack,
    };

    if (!isProduction || !isKnownErrorType) {
      // استفاده از console.dir برای نمایش ساختار کامل آبجکت
      // نمایش تمام سطوح آبجکت با عمق نامحدود
      // console.error("[ErrorHandler] Error Details:");
      // console.dir(errorDetails, { depth: null, colors: true });

      // نمایش نسخه متنی برای محیط‌هایی که آبجکت را کامل نشان نمی‌دهند
      console.error(
        `[ErrorHandler] ${errorDetails.name}: ${errorDetails.message}\n` +
          `Type: ${errorDetails.type}\n` +
          `Status: ${errorDetails.statusCode}\n` +
          `Context: ${errorDetails.context}`
      );

      if (error.stack) {
        console.error("Stack Trace:", error.stack);
      }
    } else if (isProduction && isKnownErrorType) {
      // می‌توانید لاگ کردن خطاهای شناخته شده در حالت production را در صورت نیاز اضافه کنید
      // برای مثال، می‌توانید فقط خطاهای نوع خاصی را لاگ کنید.
      // console.debug(`[ErrorHandler] (Production) Known Error: ${error.message}`, meta);
    } else if (isProduction && !isKnownErrorType) {
      console.debug(
        `[ErrorHandler] (Production) Unknown Error: ${error.message}`,
        meta
      );
    }
  }

  _notifyUser(message, type) {
    if (!this.notifier) {
      console.error(
        "[ErrorHandler] Notifier is undefined. Cannot notify user."
      );
      return;
    }

    // جلوگیری از نمایش خطاهای تکراری به مدت زمان مشخص
    if (this.displayedErrors.has(message)) return;

    const notificationType = this._getNotificationType(type);
    this.notifier.show(message, notificationType, true, 5000);
    this.displayedErrors.add(message);

    setTimeout(() => this.displayedErrors.delete(message), 5000);
  }

  _getNotificationType(errorType) {
    const typeMap = {
      [ErrorTypes.UI]: "error",
      [ErrorTypes.API]: "error",
      [ErrorTypes.NETWORK]: "warning",
      [ErrorTypes.SERVICE]: "error",
      [ErrorTypes.CONTEXT]: "warning",
      [ErrorTypes.VALIDATIONMODEL]: "warning",
      [ErrorTypes.INTEGRATION]: "warning",
    };

    return typeMap[errorType] || "error";
  }
}
