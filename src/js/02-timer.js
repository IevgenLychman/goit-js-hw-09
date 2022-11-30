import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

refs = {
  input: document.querySelector('input#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;

const flatPicker = new flatpickr(refs.input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      refs.startBtn.disabled = true;
    }
    refs.startBtn.disabled = false;
  },
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

refs.startBtn.addEventListener('click', () => {
  let timerId = null;
  function countdownTimer() {
    const setTime = new Date(refs.input.value) - new Date();
    if (setTime < 0) {
      clearInterval(timerId);
      refs.startBtn.disabled = false;
      return;
    }

    let timerObject = convertMs(setTime);
    refs.days.textContent = addLeadingZero(timerObject.days);
    refs.hours.textContent = addLeadingZero(timerObject.hours);
    refs.minutes.textContent = addLeadingZero(timerObject.minutes);
    refs.seconds.textContent = addLeadingZero(timerObject.seconds);
  }

  timerId = setInterval(countdownTimer, 1000);
});
