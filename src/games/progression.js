import questAnswer from '../index.js';// алгоритм  всей игры
import { getRandomInt, getRandomMis } from '../random.js';// логика вычислений рандомных величин

export default function progression() {
  const task = 'What number is missing in the progression?';// задание игры
  const result = [];// массив для результатов вычислений, понадобится при проверке
  const question = [];// массив для условий задач
  let elementOfResult;// переменная для решения задачи
  let elementOfQuestion = [];// переменная для условия задачи
  for (let i = 0; i < 3; i += 1) {// генерирую 3 вопроса
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
    elementOfQuestion = getRandomMis(arrayModified, len);// скрываю элемент в массиве
    question.push(elementOfQuestion.join(' '));// преобразовываю массив в строку
    for (let j = 0; j < elementOfQuestion.length; j += 1) {// цикл для расскрытия элемента
      if (elementOfQuestion[j] === '..') {
        elementOfResult = array[j];
        result.push(elementOfResult);
      }
    }
  }
  questAnswer(question, result, task);// запускаю игру
}
