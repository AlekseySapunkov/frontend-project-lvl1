import questAnswer from '../index.js';
import { getRandomInt } from '../random.js';

export default function gameIsPrime() {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const result = [];
  const question = [];
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInt(2, 100);
    let isPrime = true;
    question.push(`Question: ${randomNumber}`);
    if (randomNumber !== 2) {
      for (let j = 2; j < Math.sqrt(randomNumber); j += 1) {
        if (randomNumber % j === 0) {
          isPrime = false;
          break;
        }
      }
      const answer = isPrime ? 'yes' : 'no';
      result.push(answer);
    }
  }
  questAnswer(question, result, task);
}