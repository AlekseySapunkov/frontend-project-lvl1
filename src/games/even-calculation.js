import questAnswer from '../index.js';
import { getRandomInt } from '../random.js';

export default function evenCalculate() {
  const task = 'Answer "yes" if the number is even, otherwise answer "no"';
  const result = [];
  const question = [];
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInt(0, 100);
    question.push(randomNumber);
    let isPrime = true;
    if (randomNumber % 2 !== 0) {
      isPrime = false;
    }
    const answer = isPrime ? 'yes' : 'no';
    result.push(answer);
  }
  questAnswer(question, result, task);
}
