!function(){var t={body:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};t.startBtn.addEventListener("click",(function(){e=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.startBtn.setAttribute("disabled",!0),t.stopBtn.removeAttribute("disabled",!0)})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.startBtn.removeAttribute("disabled",!0),t.stopBtn.setAttribute("disabled",!0)})),t.stopBtn.setAttribute("disabled",!0);var e=null}();
//# sourceMappingURL=01-color-switcher.bf89d64f.js.map
