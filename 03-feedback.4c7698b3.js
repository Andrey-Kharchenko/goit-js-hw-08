!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,p=function(){return s.Date.now()};function g(e,t,n){var o,r,a,u,f,l,c=0,s=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError(i);function j(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function S(e){return c=e,f=setTimeout(w,t),s?j(e):u}function h(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function w(){var e=p();if(h(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-l);return d?m(n,a-(e-c)):n}(e))}function O(e){return f=void 0,g&&o?j(e):(o=r=void 0,u)}function T(){var e=p(),n=h(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return S(l);if(d)return f=setTimeout(w,t),j(l)}return void 0===f&&(f=setTimeout(w,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(b(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},T.flush=function(){return void 0===f?u:O(p())},T}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const j=document.querySelector(".feedback-form"),S=j.querySelector('input[name="email"]'),h=j.querySelector('textarea[name="message"]'),w="feedback-form-state",O=()=>{const e={email:S.value,message:h.value};localStorage.setItem(w,JSON.stringify(e))};S.addEventListener("input",e(t)(O,500)),h.addEventListener("input",e(t)(O,500));(()=>{const e=localStorage.getItem(w);if(e){const t=JSON.parse(e);S.value=t.email,h.value=t.message}})(),j.addEventListener("submit",(e=>{e.preventDefault(),localStorage.removeItem(w),S.value="",h.value="";console.log("Form Data:",{email:"",message:""})}))}();
//# sourceMappingURL=03-feedback.4c7698b3.js.map
