// src/strategies/TwitterStrategy.js
import { ErrorHandler, ErrorTypes } from "../services/ErrorService.js";
import PlatformStrategy from "./PlatformStrategy";
import { delay } from "../utils/helpers";
import { CONFIG } from "../config";

export default class TwitterStrategy extends PlatformStrategy {
  isTwitterElement(target) {
    return !!target.closest(
      '[data-testid="tweetTextarea_0"], [data-testid="tweetTextarea"], [role="textbox"]'
    );
  }

  /**
   * پاک کردن فیلد متنی از طریق ClipboardEvent
   * @param {HTMLElement} tweetField - فیلد هدف
   */
  clearTweetField(tweetField) {
    if (!tweetField) return;

    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(tweetField);
    selection.removeAllRanges();
    selection.addRange(range);

    const dt = new DataTransfer();
    dt.setData("text/plain", "");
    const pasteEvent = new ClipboardEvent("paste", {
      bubbles: true,
      cancelable: true,
      clipboardData: dt,
    });
    tweetField.dispatchEvent(pasteEvent);
  }

  /**
   * درج متن تمیزشده در فیلد، با استفاده از DataTransfer برای ناسازگارنشدن با Draft.js
   */
  pasteText(tweetField, text) {
    if (!tweetField) return;

    try {
      if (text !== undefined && text !== null) {
        const dt = new DataTransfer();
        dt.setData("text/plain", text);
        dt.setData("text/html", text.replace(/\n/g, "<br>"));

        const pasteEvent = new ClipboardEvent("paste", {
          bubbles: true,
          cancelable: true,
          clipboardData: dt,
        });
        tweetField.dispatchEvent(pasteEvent);
      }
    } catch (error) {
      error.context = "Twitter-strategy-Text";
      throw error;
    }
  }

  /**
   * قراردادن کرسر در انتهای فیلد متنی (الگوبرداری از userscript)
   * @param {HTMLElement} tweetField - فیلد هدف
   */
  setCursorToEnd(tweetField) {
    if (!tweetField) return;

    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(tweetField);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  isInputElement(el) {
    return el.tagName === "INPUT" || el.tagName === "TEXTAREA";
  }

  async updateElement(element, translatedText) {
    try {
      let tweetField = null;
      const searchInput = document.querySelector(
        '[data-testid="SearchBox_Search_Input"]'
      );
      if (
        searchInput &&
        this.validateField(searchInput) &&
        (element === searchInput ||
          element?.contains(searchInput) ||
          document.activeElement === searchInput)
      ) {
        tweetField = searchInput;
        tweetField.value = translatedText;
        tweetField.dispatchEvent(new Event("input", { bubbles: true }));
        console.info("Translation applied to Twitter search field.");
        return;
      }
      if (this.isTwitterElement(document.activeElement)) {
        tweetField = document.activeElement;
      } else if (this.isTwitterElement(element)) {
        tweetField = element;
      } else {
        const SELECTORS =
          '[data-testid="tweetTextarea_0"], [data-testid="tweetTextarea"], [role="textbox"]';
        tweetField = this.findField(element, SELECTORS);
      }
      if (!tweetField) {
        console.warn("فیلد توییت برای ترجمه یافت نشد.");
        return;
      }
      if (!this.validateField(tweetField)) {
        return;
      }
      const isSearchField =
        tweetField.getAttribute("data-testid") === "SearchBox_Search_Input";
      if (!isSearchField) {
        tweetField.focus();
        this.clearTweetField(tweetField);
        await delay(50);
        this.pasteText(tweetField, translatedText);
        tweetField.style.transition = "background-color 0.5s ease";
        tweetField.style.backgroundColor = "#d4f8d4";
        requestAnimationFrame(() => {
          setTimeout(
            () => (tweetField.style.backgroundColor = "transparent"),
            1000
          );
        });
        await delay(100);
        this.setCursorToEnd(tweetField);
      }
    } catch (error) {
      error.context = "twitter-strategy-updateElement";
      throw new ErrorHandler(this.notifier).handle(error, {
        type: ErrorTypes.SERVICE,
        context: "twitter-strategy-updateElement",
      });
    }
  }

  extractText(target) {
    let tweetField = null;

    // اولویت اول: بررسی فیلد جستجو
    const searchInput = document.querySelector(
      '[data-testid="SearchBox_Search_Input"]'
    );
    if (
      searchInput &&
      this.validateField(searchInput) &&
      (target === searchInput || target?.contains(searchInput))
    ) {
      return searchInput.value || "";
    }

    // اگر فیلد جستجو نبود، به بررسی فیلدهای توییت‌نویسی بپردازید
    if (this.isTwitterElement(document.activeElement)) {
      tweetField = document.activeElement;
    } else if (this.isTwitterElement(target)) {
      tweetField = target;
    } else {
      const SELECTORS =
        '[data-testid="tweetTextarea_0"], [data-testid="tweetTextarea"], [role="textbox"]';
      tweetField = this.findField(target, SELECTORS);
    }

    if (!tweetField) {
      console.warn("فیلد توییت برای استخراج متن یافت نشد.");
      return "";
    }

    const isSearchField =
      tweetField.getAttribute("data-testid") === "SearchBox_Search_Input";

    if (isSearchField) {
      return tweetField.value || "";
    }

    if (tweetField?.tagName === "DIV") {
      return tweetField.textContent.trim();
    }

    return tweetField.value || tweetField.textContent.trim();
  }

  extractText(target) {
    let tweetField = null;

    // اولویت اول: استفاده از المان فوکوس شده اگر یک فیلد توییتر باشد
    if (this.isTwitterElement(document.activeElement)) {
      tweetField = document.activeElement;
    }
    // اگر المان فوکوس شده فیلد توییتر نیست، از المان ارائه شده استفاده کنید
    else if (this.isTwitterElement(target)) {
      tweetField = target;
    }
    // تلاش برای یافتن فیلد جستجو با استفاده از data-testid
    else {
      const searchInput = document.querySelector(
        '[data-testid="SearchBox_Search_Input"]'
      );
      if (searchInput && this.validateField(searchInput)) {
        tweetField = searchInput;
      } else {
        const SELECTORS =
          '[data-testid="tweetTextarea_0"], [data-testid="tweetTextarea"], [role="textbox"]';
        tweetField = this.findField(target, SELECTORS);
      }
    }

    if (!tweetField) {
      console.warn("فیلد توییت برای استخراج متن یافت نشد.");
      return "";
    }

    const isSearchField =
      tweetField.getAttribute("data-testid") === "SearchBox_Search_Input";

    if (isSearchField) {
      return tweetField.value || "";
    }

    if (tweetField?.tagName === "DIV") {
      return tweetField.textContent.trim();
    }

    return tweetField.value || tweetField.textContent.trim();
  }

  extractText(target) {
    let tweetField = null;

    // اولویت اول: استفاده از المان فوکوس شده اگر یک فیلد توییتر باشد
    if (this.isTwitterElement(document.activeElement)) {
      tweetField = document.activeElement;
    }
    // اگر المان فوکوس شده فیلد توییتر نیست، از المان ارائه شده استفاده کنید
    else if (this.isTwitterElement(target)) {
      tweetField = target;
    }
    // اگر هیچ کدام از موارد بالا نبود، به دنبال فیلد بگردید
    else {
      const SELECTORS =
        '[data-testid="tweetTextarea_0"], [data-testid="tweetTextarea"], [role="textbox"]';
      tweetField = this.findField(target, SELECTORS);
    }

    if (!tweetField) {
      console.warn("فیلد توییت برای استخراج متن یافت نشد.");
      return "";
    }

    // بررسی دقیق‌تر برای تشخیص فیلد جستجو در هنگام استخراج متن (اگرچه در اینجا کمتر محتمل است مشکل ایجاد کند)
    const placeholder = tweetField.getAttribute("placeholder") || "";
    const ariaLabel = tweetField.getAttribute("aria-label") || "";
    const isSearchField =
      placeholder.toLowerCase().includes("search") ||
      ariaLabel.toLowerCase().includes("search");

    if (isSearchField) {
      return tweetField.value || "";
    }

    if (tweetField?.tagName === "DIV") {
      return tweetField.textContent.trim();
    }

    return tweetField.value || tweetField.textContent.trim();
  }

  applyTextDirection(element, translatedText) {
    const paragraphs = element.querySelectorAll('[data-text="true"]');
    paragraphs.forEach((p) => {
      const isRtl = CONFIG.RTL_REGEX.test(p.textContent);
      p.style.direction = isRtl ? "rtl" : "ltr";
      p.style.textAlign = isRtl ? "right" : "left";
    });
  }
}
