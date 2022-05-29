import questAnswer from '../index.js';// алгоритм  всей игры
import { getRandomInt } from '../random.js';// логика вычислений рандомных величин

export default function greatComDiv() {
  const task = 'Find the greatest common divisor of given numbers.';
  const result = [];
  const question = [];
  let elementOfResult;
  let elementOfQuestion;
  for (let i = 0; i < 3; i += 1) {
    let firstNumber = getRandomInt(1, 50);// ранодомно выбираем первое число
    let secondNumber = getRandomInt(1, 50);
    elementOfQuestion = `${firstNumber} ${secondNumber}`;
    question.push(elementOfQuestion);
    if (firstNumber === 1 || secondNumber === 1) {
      elementOfResult = 1;
      result.push(elementOfResult);
    } else if (firstNumber === secondNumber) {
      elementOfResult = firstNumber;
      result.push(elementOfResult);
    } else {
      while (firstNumber && secondNumber) {// нахождение наивысшего общего делителя
        if (firstNumber > secondNumber) {
          firstNumber %= secondNumber;
        } else {
          secondNumber %= firstNumber;
        }
      }
      elementOfResult = firstNumber + secondNumber;
      result.push(elementOfResult);
    }
  }
  questAnswer(question, result, task);
}
