import { roundsCount, start } from '../index.js';
import getRandomInt from '../utils.js';

export default function playGame() {
  const getRandomMis = (array, len) => {
    const mis = '..';
    const arrayMis = array;
    const i = getRandomInt(1, (len - 1));
    arrayMis[i] = mis;
    return arrayMis;
  };
  const description = 'What number is missing in the progression?';
  const rounds = [];// массив для результатов вычислений, понадобится при проверке
  let question;
  let answer;
  for (let i = 0; i < roundsCount; i += 1) {
    const lengthOfProgression = getRandomInt(5, 10);
    const firstElement = getRandomInt(0, 50);
    const progress = getRandomInt(1, 10);// шаг прогрессии
    const array = [];// массив прогрессии без скрытого элемента
    array[0] = firstElement;
    const arrayModified = [];// массив прогрессии в котором скрою элемент
    arrayModified[0] = firstElement;
    for (let k = 0; k < lengthOfProgression - 1; k += 1) {
      array.push(array[k] + progress);
      arrayModified.push(arrayModified[k] + progress);
    }
    question = getRandomMis(arrayModified, lengthOfProgression);// скрываю элемент в массиве
    for (let j = 0; j < question.length; j += 1) { // цикл для расскрытия элемента
      if (question[j] === '..') {
        answer = String(array[j]);
        rounds.push([question.join(' '), answer]);
      }
    }
  }
  start(rounds, description);
}
