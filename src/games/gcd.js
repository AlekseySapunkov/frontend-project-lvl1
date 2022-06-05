import { amountOfRounds, start } from '../index.js';
import getRandomInt from '../utils.js';

export default function startGame() {
  const task = 'Find the greatest common divisor of given numbers.';
  const result = [];
  let question;
  let answer;
  for (let i = 0; i < amountOfRounds; i += 1) {
    let firstNumber = getRandomInt(1, 50);
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
