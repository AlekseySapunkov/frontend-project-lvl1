import { roundsCount, start } from '../index.js';
import getRandomInt from '../utils.js';

export default function startGame() {
  const task = 'Answer "yes" if the number is even, otherwise answer "no"';
  const result = [];
  let question;
  let answer;
  for (let i = 0; i < roundsCount; i += 1) {
    question = getRandomInt(0, 100);
    let isPrime = true;
    if (question % 2 !== 0) { // Проверяем четность числа
      isPrime = false;
    }
    answer = isPrime ? 'yes' : 'no';
    result.push([question, answer]);
  }
  start(result, task);
}
