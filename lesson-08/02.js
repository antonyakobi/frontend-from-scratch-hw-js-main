/*
Задание: Реализация интерактивного отсчёта запуска ракеты

Цель задания: Написать код для обработки событий нажатия на кнопки "Старт" и "Отмена", реализуя обратный отсчёт с помощью JavaScript.

Задача:

1. Добавить обработчик событий для кнопки "Старт":

- При нажатии на кнопку "Старт" должен начаться обратный отсчёт с 3 до 1. Значение счётчика должно отображаться в элементе countdownDisplay. Цифра 3 должна отобразиться немедленно.
- Каждую секунду значение счётчика должно уменьшаться на 1.
- Когда счётчик достигнет 0, вместо 0 должен отображаться эмодзи ракеты "🚀" и таймер должен быть остановлен. Пользователь видит: 3 -> 2 -> 1 -> 🚀


2. Добавить обработчик событий для кнопки "Отмена":

- При нажатии на кнопку "Отмена" таймер должен быть остановлен
- В элементе отображения счётчика (countdownDisplay) должно появиться сообщение "Отменено".
- Отмена таймера возможна только во время его работы
- После отмены таймера возможен повторный запуск ракеты

Обратите внимание на корректность работы таймера: повторное нажатие на "Старт" не должно приводить к нескольким одновременно работающим таймерам.

Подсказки:
- 🧙‍♂️ Для выполнения этого задания нужно познакомиться с браузерными функциями setInterval (https://doka.guide/js/setinterval/) и clearInterval(https://doka.guide/js/clearinterval/). Они очень похоже на setTimeout и clearTimeout.
 */

const startButton = document.getElementById('start')
const cancelButton = document.getElementById('cancel')
const countdownDisplay = document.getElementById('countdown')

let isTimerStarted = false
let timerId

startButton.addEventListener('click', () => {
  let counter = 3
  // your code
  if (isTimerStarted) {
    return
    // При нажатии на кнопку "start" проверяется, запущен ли уже таймер с помощью `isTimerStarted`. Если он уже работает, дальнейшие действия не выполняются (функция `return` выходит из обработчика)
  } else { //Если таймер еще не запущен
    countdownDisplay.textContent = counter // в переменной `counter` устанавливаем значение 3, которое будет отображаться на экране.
    isTimerStarted = true
    // Изменяем текстовое содержимое элемента, отображающего обратный отсчет, на текущее значение `counter`, и устанавливаем `isTimerStarted` в `true`, что сигнализирует о запуске таймера.
    timerId = setInterval(function () { // Запускаем интервал с помощью `setInterval`, который будет выполняться каждую секунду (1000 миллисекунд).
      counter-- // Уменьшаем значение `counter` на 1.
      countdownDisplay.textContent = counter //Обновляем текстовое содержимое элемента с обратным отсчетом.

      if (counter === 0) { //Когда `counter` достигает 0
        countdownDisplay.textContent = "🚀" //еняем текст на 🚀
        clearInterval(timerId) //очищаем интервал
        isTimerStarted = false //сбрасываем `isTimerStarted` обратно в `false`
      }
    }, 1000)
  }

})

cancelButton.addEventListener('click', () => {
  // your code
  if (isTimerStarted) { //Сначала проверяем, действительно ли таймер был запущен
    clearInterval(timerId) //отменяет выполнение ранее установленного интервала
    countdownDisplay.textContent = "Отменено"
    isTimerStarted = false
  }
})
