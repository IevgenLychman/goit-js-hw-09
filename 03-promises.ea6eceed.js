!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o),o("iU1Pc");var r={delay:document.querySelector("input[name=delay]"),step:document.querySelector("input[name=step]"),amount:document.querySelector("input[name=amount]"),submitBtn:document.querySelector("button")};r.submitBtn.addEventListener("click",(function(e){e.preventDefault();var n=Number(r.delay.value),t=Number(r.step.value),o=Number(r.amount.value),i=setInterval((function(){u>o&&clearInterval(i),u<=o&&(!function(e,n){var t=Math.random()>.3;new Promise((function(o,r){setTimeout((function(){t&&o({position:e,delay:n}),r({position:e,delay:n})}),n)}))}(u,n),u+=1,console.log("numbers ",o),console.log("position ",u))}),t)}));var u=0}();
//# sourceMappingURL=03-promises.ea6eceed.js.map
