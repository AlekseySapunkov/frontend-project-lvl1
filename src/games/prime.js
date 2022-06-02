import questAnswer from '../index.js';// алгоритм  всей игры
import { getRandomInt } from '../random.js';// логика вычислений рандомных величин

export default function startGame() {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const result = [];
  const question = [];
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInt(2, 100);
    let isPrime = true;
    question.push(randomNumber);
    if (randomNumber !== 2) { // логика вычисления простого числа
      for (let j = 2; j < randomNumber; j += 1) {
        if (randomNumber % j === 0) {
          isPrime = false;
          break;
        }
      }
      const answer = isPrime ? 'yes' : 'no';// выбираем что записать в ответ
      result.push(answer);
    }
  }
  start(question, result, task);// запускаем игру
}
