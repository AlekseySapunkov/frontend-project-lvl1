import questAnswer from '../index.js';// алгоритм  всей игры
import { getRandomInt } from '../random.js';// логика вычислений рандомных величин

export default function evenCalculate() {
  const task = 'Answer "yes" if the number is even, otherwise answer "no"';
  const result = [];
  const question = [];
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInt(0, 100);
    question.push(randomNumber);
    let isPrime = true;
    if (randomNumber % 2 !== 0) { // Проверяем четность числа
      isPrime = false;
    }
    const answer = isPrime ? 'yes' : 'no';// выбираем что записать в ответ
    result.push(answer);
  }
  start(question, result, task);// запускаю игру
}
