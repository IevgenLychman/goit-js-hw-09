import Notiflix from 'notiflix';

const refs = {
  delay: document.querySelector('input[name=delay]'),
  step: document.querySelector('input[name=step]'),
  amount: document.querySelector('input[name=amount]'),
  submitBtn: document.querySelector('button'),
};

refs.submitBtn.addEventListener('click', onSubmit);

let position = 0;

function onSubmit(e) {
  e.preventDefault();
  let delay = Number(refs.delay.value);
  const step = Number(refs.step.value);
  let numbers = Number(refs.amount.value);
  const intervalId = setInterval(() => {
    if (position > numbers) {
      clearInterval(intervalId);
    }
    if (position <= numbers) {
      createPromise(position, delay);
      position += 1;
      console.log('numbers ', numbers);
      console.log('position ', position);
    }
  }, step);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
}

function onSucces({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}
