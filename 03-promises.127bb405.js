function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("eWCmQ");const l={delay:document.querySelector("input[name=delay]"),step:document.querySelector("input[name=step]"),amount:document.querySelector("input[name=amount]"),submitBtn:document.querySelector("button")};l.submitBtn.addEventListener("click",(function(t){t.preventDefault();const n=Number(l.delay.value),o=Number(l.step.value);let r=Number(l.amount.value);const s=setInterval((()=>{i>r&&clearInterval(s),i<=r&&(!function(t,n){const o=Math.random()>.3;new Promise(((r,l)=>{setTimeout((()=>{o?r(e(u).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)):l(e(u).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`))}),n)}))}(i,n),i+=1,console.log("numbers ",r),console.log("position ",i))}),o)}));let i=1;
//# sourceMappingURL=03-promises.127bb405.js.map