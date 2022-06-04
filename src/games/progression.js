import { amountOfRound, start } from '../index.js';
import getRandomInt from '../utils.js';// логика вычислений рандомных величин

export default function playGame() {
  const getRandomMis = (array, len) => { // замена элемента массива на '..' в рандомном месте
    const mis = '..';
    const arrayMis = array;
    const i = getRandomInt(1, (len - 1));
    arrayMis[i] = mis;
    return arrayMis;
  };
  const task = 'What number is missing in the progression?';// задание игры
  const result = [];// массив для результатов вычислений, понадобится при проверке
  let question;
  let answer;
  for (let i = 0; i < amountOfRound; i += 1) { // генерирую 3 вопроса
    const len = getRandomInt(5, 10);// устанавливаю длину прогрессии
    const firstElement = getRandomInt(0, 50);// первый элемент прогрессии
    const progress = getRandomInt(1, 10);// шаг прогрессии
    const array = [];// массив прогрессии без скрытого элемента
    array[0] = firstElement;
    const arrayModified = [];// массив прогрессии в котором скрою элемент
    arrayModified[0] = firstElement;
    for (let k = 0; k < len - 1; k += 1) {
      array.push(array[k] + progress);
      arrayModified.push(arrayModified[k] + progress);
    }
    question = getRandomMis(arrayModified, len);// скрываю элемент в массиве
    for (let j = 0; j < question.length; j += 1) { // цикл для расскрытия элемента
      if (question[j] === '..') {
        answer = array[j];
        result.push([question.join(' '), answer]);
      }
    }
  }
  start(result, task);
}
