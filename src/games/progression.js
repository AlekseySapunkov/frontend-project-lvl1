import questAnswer from '../index.js';
import { getRandomInt, getRandomMis } from '../random.js';

export default function progression() {
  const task = 'What number is missing in the progression?';
  const result = [];
  const question = [];
  let elementOfResult;
  let elementOfQuestion = [];
  for (let i = 0; i < 3; i += 1) {
    const len = getRandomInt(5, 10);
    const firstElement = getRandomInt(0, 50);
    const progress = getRandomInt(1, 10);
    const array = [];
    array[0] = firstElement;
    const arrayModified = [];
    arrayModified[0] = firstElement;
    for (let k = 0; k < len - 1; k += 1) {
      array.push(array[k] + progress);
      arrayModified.push(arrayModified[k] + progress);
    }
    elementOfQuestion = getRandomMis(arrayModified, len);
    question.push(elementOfQuestion);
    for (let j = 0; j < elementOfQuestion.length; j += 1) {
      if (elementOfQuestion[j] === '..') {
        elementOfResult = array[j];
        result.push(elementOfResult);
      }
    }
  }
  questAnswer(question, result, task);
}
