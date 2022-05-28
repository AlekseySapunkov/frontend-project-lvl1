import questAnswer from '../index.js';
import { getRandomInt } from '../random.js';

export default function greatComDiv() {
  const task = 'Find the greatest common divisor of given numbers.';
  const result = [];
  const question = [];
  let elementOfResult;
  let elementOfQuestion;
  for (let i = 0; i < 3; i += 1) {
    let firstOperand = getRandomInt(1, 50);
    let secondOperand = getRandomInt(1, 50);
    elementOfQuestion = `${firstOperand} ${secondOperand}`;
    question.push(elementOfQuestion);
    if (firstOperand === 1 || secondOperand === 1) {
      elementOfResult = 1;
      result.push(elementOfResult);
    }
    else if (firstOperand === secondOperand) {
      elementOfResult = firstOperand;
      result.push(elementOfResult);
    } else {
      while (firstOperand && secondOperand) {
        firstOperand > secondOperand ? firstOperand %= secondOperand : secondOperand %= firstOperand;
        }
        elementOfResult = firstOperand + secondOperand;
        result.push(elementOfResult);
    }
  }
  questAnswer(question, result, task);
};
