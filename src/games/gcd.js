import { amountOfRound, start } from '../index.js';
import getRandomInt from '../utils.js';// логика вычислений рандомных величин

export default function startGame() {
  const task = 'Find the greatest common divisor of given numbers.';
  const result = [];
  let question;
  let answer;
  for (let i = 0; i < amountOfRound; i += 1) {
    let firstNumber = getRandomInt(1, 50);// ранодомно выбираем  число
    let secondNumber = getRandomInt(1, 50);
    question = `${firstNumber} ${secondNumber}`;
    while (firstNumber && secondNumber) { // нахождение наивысшего общего делителя
      if (firstNumber > secondNumber) {
        firstNumber %= secondNumber;
      } else {
        secondNumber %= firstNumber;
      }
    }
    answer = firstNumber + secondNumber;
    result.push([question, answer]);
  }
  start(result, task);
}
