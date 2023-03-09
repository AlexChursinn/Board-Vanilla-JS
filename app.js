const board = document.querySelector('#board') /* 4) Достаем нашу доску из html */
const colors = ['#e27D60', '#85DCB', '#E8A87C', '#C38D9E', '#41B3A3'] /* 15) Создаю массив с цветами */
const SQUARES_NUMBER = 1200 /* 5)задаем колличество наших квдратов */

for (let i = 0; i < SQUARES_NUMBER; i++) {  /* 6) задаем цикл и создаем див для нагих квадратов */
  const square = document.createElement('div')
  square.classList.add('square') /* 7) чтобы квадрат стал квадратом)) */


  square.addEventListener('mouseover', () => 
    setColor(square))/* 10) добавляем событие когда мы наводим мышт на определенный квадрат и дабвили туда наш квадрат*/

  square.addEventListener('mouseleave', () => 
  removeColor(square))/* 13) добавляем событие когда мы убираем мышь*/

  board.append(square) /* 8) добавляем наши квдраты в борд */
}

function setColor(element) {  /* 17) добавили конст колор и наш рандомный массив и ниже в бэкгрануд прописали колор */
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` /* 18) добавили для нашего стиля квадрата также рандомный боксшадоу 20) 0 0 10px ${color} добавили чтобы подсвечивался квадрат круто)) */
}/* 11) задаем функцию для нашего квадрата и присваиваем красный цвет */

function removeColor(element) { 
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000` /* 19) Возвращаем наш стандарный черный цвет с цсс чтобы после наведения на квадрат цвет сбрасывался до стокового */
} /* 14) задаем функцию для нашего квадрата и убираем на стоковый цвет когда убираем мышь с квадрата */

function getRandomColor() { /* 16) Создали функцию для вызова рандомного цвета из нашего массива */
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}