/*! For license information please see background.bundle.js.LICENSE.txt */
(()=>{"use strict";var t,e=function(){try{var t,e;return!(null===(t=chrome)||void 0===t||null===(t=t.runtime)||void 0===t||!t.id||null===(e=chrome)||void 0===e||null===(e=e.storage)||void 0===e||!e.sync)}catch(t){return!1}};t=null;function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function n(){n=function(){return e};var t,e={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),c=new j(n||[]);return a(i,"_invoke",{value:N(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var y="suspendedStart",d="suspendedYield",v="executing",g="completed",m={};function w(){}function E(){}function b(){}var L={};f(L,u,(function(){return this}));var x=Object.getPrototypeOf,_=x&&x(x(A([])));_&&_!==o&&i.call(_,u)&&(L=_);var O=b.prototype=w.prototype=Object.create(L);function T(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,a,c,u){var s=p(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==r(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}})}function N(e,r,n){var o=y;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=I(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?g:d,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function I(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,I(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function A(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(i.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(r(e)+" is not iterable")}return E.prototype=b,a(O,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:E,configurable:!0}),E.displayName=f(b,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,l,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},T(S.prototype),f(S.prototype,s,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},T(O),f(O,l,"Generator"),f(O,u,(function(){return this})),f(O,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function o(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var i={USE_MOCK:!1,API_URL:"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite-preview-02-05:generateContent",PROMPT_ENGLISH:"Please translate the following text into English, preserving the sentence structure (like new lines) and displaying only the output:",PROMPT_PERSIAN:"متن زیر را به فارسی ترجمه کنید، ساختار جمله (مانند خطوط جدید) را حفظ کرده و فقط خروجی را نمایش دهید:",HIGHLIGHT_STYLE:"2px solid red",DEBUG_TRANSLATED_ENGLISH:"This is a mock translation to English.",DEBUG_TRANSLATED_PERSIAN:"این یک ترجمه آزمایشی به فارسی است.",DEBUG_TRANSLATED_ENGLISH_With_NewLine:"This is a mock \ntranslation to English with \nnew lines.",DEBUG_TRANSLATED_PERSIAN_With_NewLine:"این یک ترجمه آزمایشی \nبرای ترجمه به فارسی \nبا خطوط جدید است.",HIGHTLIH_NEW_ELEMETN_RED:"2px solid red",TRANSLATION_ICON_TITLE:"Translate Text",ICON_TRANSLATION:"🌐",ICON_ERROR:"❌ ",ICON_SECCESS:"✅ ",ICON_STATUS:"🔄 ",ICON_WARNING:"⚠️ ",ICON_INFO:"💠 ",RTL_REGEX:/[\u0600-\u06FF]/,PERSIAN_REGEX:/^(?=.*[\u0600-\u06FF])[\u0600-\u06FF\u0660-\u0669\u06F0-\u06F9\u0041-\u005A\u0061-\u007A\u0030-\u0039\s.,:;؟!()«»@#\n\t\u200C]+$/},a=function(){var t,r=(t=n().mark((function t(){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,r){try{var n;if(!e())return void r(new Error("Extension context invalid"));if(null===(n=chrome)||void 0===n||null===(n=n.storage)||void 0===n||!n.sync)return void r(new Error("Error: The extension has not loaded correctly"));chrome.storage.sync.get(["apiKey"],(function(e){chrome.runtime.lastError?r(new Error("System error: ".concat(chrome.runtime.lastError.message))):t(e.apiKey||"")}))}catch(t){r(new Error("Access error: ".concat(t.message)))}})));case 1:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function c(t){o(a,n,i,c,u,"next",t)}function u(t){o(a,n,i,c,u,"throw",t)}c(void 0)}))});return function(){return r.apply(this,arguments)}}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,s(n.key),n)}}function s(t){var e=function(t,e){if("object"!=c(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==c(e)?e:e+""}function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function f(){f=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var i=e&&e.prototype instanceof w?e:w,a=Object.create(i.prototype),c=new j(n||[]);return o(a,"_invoke",{value:N(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var y="suspendedStart",d="suspendedYield",v="executing",g="completed",m={};function w(){}function E(){}function b(){}var L={};s(L,a,(function(){return this}));var x=Object.getPrototypeOf,_=x&&x(x(A([])));_&&_!==r&&n.call(_,a)&&(L=_);var O=b.prototype=w.prototype=Object.create(L);function T(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,i,a,c){var u=p(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==l(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function N(e,r,n){var o=y;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=I(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?g:d,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function I(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,I(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(l(e)+" is not iterable")}return E.prototype=b,o(O,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:E,configurable:!0}),E.displayName=s(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},T(S.prototype),s(S.prototype,c,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},T(O),s(O,u,"Generator"),s(O,a,(function(){return this})),s(O,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function h(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var p=new(function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),"undefined"!=typeof document?this.container=this.createContainer():this.container=null},e=[{key:"createContainer",value:function(){var t=document.getElementById("translation-notifications");return t||((t=document.createElement("div")).id="translation-notifications",Object.assign(t.style,{position:"fixed",top:"20px",right:"20px",zIndex:"10000000000",display:"flex",flexDirection:"column",gap:"8px"}),document.body.appendChild(t)),t}},{key:"show",value:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info",n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3e3,a=arguments.length>4?arguments[4]:void 0;if(!this.container)return this.showBackgroundNotification(t,r,a);var c=document.createElement("div"),u=i["ICON_".concat(r.toUpperCase())]||"💠";return c.innerHTML='\n      <span class="notification-icon">'.concat(u,'</span>\n      <span class="notification-text">').concat(t,"</span>\n    "),Object.assign(c.style,{display:"flex",alignItems:"center",gap:"8px",background:this.getBackgroundColor(r),color:"#fff",padding:"8px 12px",borderRadius:"4px",fontSize:"14px",cursor:"pointer",opacity:"1"}),a?c.addEventListener("click",a):c.addEventListener("click",(function(){return e.dismiss(c)})),this.container.appendChild(c),n&&setTimeout((function(){return e.dismiss(c)}),o),c}},{key:"dismiss",value:function(t){var e;(e=t).style.transition="opacity 0.5s",e.style.opacity="0",setTimeout((function(){return e.remove()}),500)}},{key:"getBackgroundColor",value:function(t){return{error:"rgba(255,0,0,0.8)",success:"rgba(0,128,0,0.8)",status:"rgba(0,0,0,0.7)",warning:"rgba(255,165,0,0.8)",info:"rgba(30,144,255,0.8)"}[t]||"rgba(0,0,0,0.7)"}},{key:"showBackgroundNotification",value:function(t,e,r){var n={type:"basic",iconUrl:"icons/icon.png",title:"ترجمه خودکار",message:t,priority:2};"error"===e?(n.title="خطا - ترجمه خودکار",n.priority=2):"warning"===e?(n.title="هشدار - ترجمه خودکار",n.priority=1):"success"===e&&(n.title="موفقیت - ترجمه خودکار",n.priority=0),chrome.notifications.create(void 0,n,(function(t){r&&chrome.notifications.onClicked.addListener((function e(n){n===t&&(r(),chrome.notifications.clear(t),chrome.notifications.onClicked.removeListener(e))}))}))}}],e&&u(t.prototype,e),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e,r}()),y=new Set;function d(t,e){var r,n="خطای ناشناخته",o="error";t.message.includes("API key")?(n="کلید API نامعتبر است. برای تنظیم به صفحه extension options مراجعه کنید.",r=function(){return openOptionsPage()}):"EXTENSION_RELOADED"===t.message?(n="لطفا صفحه را رفرش کنید (Ctrl+R)",o="warning"):t.message.includes("model is overloaded")||t.message.includes("size exceeded")||t.message.includes("Quota exceeded")?(n="The model is overloaded. Please try again later.",o="warning"):t.message.includes("API key is missing")?(n="API key is missing. Please set it in the extension options.",r=function(){return openOptionsPage()},o="error"):(n="خطای ارتباط با سرویس ترجمه",console.error("processErrorBackground Error:",t)),function(t,e,r,n){if(y.has(t))return;r.show(t,e,!0,5e3,n),y.add(t),setTimeout((function(){y.delete(t)}),5e3)}(n,o,e,r)}chrome.action.onClicked.addListener((function(t){null!=t&&t.id&&"complete"===t.status&&chrome.storage.local.get(["selectionActive"],(function(e){var r=!e.selectionActive;chrome.storage.local.set({selectionActive:r},(function(){chrome.tabs.sendMessage(t.id,{action:"TOGGLE_SELECTION_MODE",data:r}).catch((function(e){console.log("Retrying injection..."),chrome.scripting.executeScript({target:{tabId:t.id},files:["content.bundle.js"]}).then((function(){chrome.tabs.sendMessage(t.id,{action:"TOGGLE_SELECTION_MODE",data:r})}))}))}))}))})),chrome.runtime.onInstalled.addListener((function(t){console.log("Extension installed/updated:",t.reason),chrome.storage.sync.get(["apiKey"],(function(t){console.log("Stored API Key:",t.apiKey?"Exists":"Missing")})),"update"===t.reason&&chrome.tabs.query({},(function(t){t.forEach((function(t){t.url&&["web.whatsapp.com","web.telegram.org","instagram.com","twitter.com","youtube.com"].some((function(e){return t.url.includes(e)}))&&chrome.tabs.sendMessage(t.id,{type:"EXTENSION_RELOADED"}).catch((function(){}))}))}))})),chrome.runtime.onMessage.addListener((function(t,e,r){if("CONTEXT_INVALID"===t.action)chrome.runtime.reload();else if("fetchTranslation"===t.action)return(n=f().mark((function e(){var n,o,c,u,s;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.payload.promptText,e.next=4,a();case 4:return o=e.sent,e.next=7,fetch("".concat(i.API_URL,"?key=").concat(o),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:n}]}]}),mode:"cors"});case 7:if((c=e.sent).ok){e.next=13;break}return e.next=11,c.json().catch((function(){return{}}));case 11:throw s=e.sent,new Error((null===(u=s.error)||void 0===u?void 0:u.message)||c.statusText);case 13:return e.t0=r,e.next=16,c.json();case 16:e.t1=e.sent,e.t2={data:e.t1},(0,e.t0)(e.t2),e.next=26;break;case 21:e.prev=21,e.t3=e.catch(0),console.error("Translation error in background.js:",e.t3),d(e.t3,p),r({error:"Translation failed"});case 26:case"end":return e.stop()}}),e,null,[[0,21]])})),function(){var t=this,e=arguments;return new Promise((function(r,o){var i=n.apply(t,e);function a(t){h(i,r,o,a,c,"next",t)}function c(t){h(i,r,o,a,c,"throw",t)}a(void 0)}))})(),!0;var n}))})();