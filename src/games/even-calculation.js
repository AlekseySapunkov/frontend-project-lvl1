import { roundsCount, start } from '../index.js';
import getRandomInt from '../utils.js';

export default function startGame() {
  const description = 'Answer "yes" if the number is even, otherwise answer "no"';
  const rounds = [];
  let question;
  let answer;
  for (let i = 0; i < roundsCount; i += 1) {
    question = getRandomInt(0, 100);
    let isPrime = true;
    if (question % 2 !== 0) { // Проверяем четность числа
      isPrime = false;
    }
    answer = isPrime ? 'yes' : 'no';
    rounds.push([question, answer]);
  }
  start(rounds, description);
}
