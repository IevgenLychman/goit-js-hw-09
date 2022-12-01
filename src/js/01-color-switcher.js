const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

refs.startBtn.addEventListener('click', startColorChange);
refs.stopBtn.addEventListener('click', stopColorChange);

refs.stopBtn.setAttribute('disabled', true);

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startColorChange() {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  setDisabled(refs.startBtn);
  removeDisabled(refs.stopBtn);
}

function stopColorChange() {
  clearInterval(timerId);
  removeDisabled(refs.startBtn);
  setDisabled(refs.stopBtn);
}

function removeDisabled(btnType) {
  btnType.removeAttribute('disabled', true);
}

function setDisabled(btnType) {
  btnType.setAttribute('disabled', true);
}
