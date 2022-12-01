import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  input: document.querySelector('input#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;

let settedDate;

const flatPicker = new flatpickr(refs.input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    settedDate = selectedDates[0];
    let currentTime = Date.now();
    if (selectedDates[0] < currentTime) {
      Notiflix.Notify.failure('Please choose a date in the future');
      refs.startBtn.disabled = true;
      return;
    }
    refs.startBtn.disabled = false;
  },
});

let intervalId = null;
let timePeriod = null;

refs.startBtn.addEventListener('click', () => {
  intervalId = setInterval(() => {
    const startTime = settedDate.getTime();
    timePeriod = startTime - Date.now();

    inputTime();

    if (timePeriod <= 1000 || timePeriod <= 0) {
      refs.startBtn.disabled = true;
      clearInterval(intervalId);
    }
  }, 1000);
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

function inputTime() {
  const milliseconds = convertMs(timePeriod);
  const { days, hours, minutes, seconds } = milliseconds;
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}
