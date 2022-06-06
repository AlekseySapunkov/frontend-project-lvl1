import { roundsCount, start } from '../index.js';
import getRandomInt from '../utils.js';

export default function startGame() {
  const description = 'Find the greatest common divisor of given numbers.';
  const rounds = [];
  let question;
  let answer;
  for (let i = 0; i < roundsCount; i += 1) {
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
    answer = String(firstNumber + secondNumber);
    rounds.push([question, answer]);
  }
  start(rounds, description);
}
