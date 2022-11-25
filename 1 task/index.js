const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const transfromNumber = (number) => {
  if (number < 0) {
    return "00";
  }
  return number.toString().padStart(2, "0");
};

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    //Если пустой input, то выйти из ф-ии
    if (!seconds) return;
    //Рассчитать изначальные значения таймера
    let timerHours = Math.floor(seconds / 3600);
    let timerMinutes = Math.floor((seconds - 3600 * timerHours) / 60);
    let timerSeconds = seconds - 3600 * timerHours - 60 * timerMinutes;
    //Обновить интерфейс с изначальными значениями
    timerEl.innerText = `${transfromNumber(timerHours)}:${transfromNumber(
      timerMinutes
    )}:${transfromNumber(timerSeconds)}`;
    //добавить интервал, который каждую секунду
    //рассчитывает оставшееся время и обновляет
    //интерфейс
    const interval = setInterval(() => {
      seconds--;

      timerHours = Math.floor(seconds / 3600);
      timerMinutes = Math.floor((seconds - 3600 * timerHours) / 60);
      timerSeconds = seconds - 3600 * timerHours - 60 * timerMinutes;

      timerEl.innerText = `${transfromNumber(timerHours)}:${transfromNumber(
        timerMinutes
      )}:${transfromNumber(timerSeconds)}`;
    }, 1000);
    //Сохранить ID интервала в локальную память
    localStorage.setItem("interval_id", interval);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа

  // Превратить строку в массив
  const stringArray = inputEl.value.split("");
  // Отфильтровать массив так, чтобы в значении
  // оставались только числа
  const filteredArray = stringArray.filter((val) => +val || val == 0);
  inputEl.value = filteredArray.join("");
});

buttonEl.addEventListener("click", (e) => {
  const seconds = Number(inputEl.value);
  // Проверить, есть ли уже активный интервал
  // Если есть, то удалить
  clearInterval(localStorage.getItem("interval_id"));
  animateTimer(seconds);

  inputEl.value = "";
});
