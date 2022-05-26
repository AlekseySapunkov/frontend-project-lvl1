import { getRandomOperator, getRandomInt } from './random.js';
import questAnswer from './greeting.js';

export default function randomCalculator() {
  const task = 'What is the result of the expression?';
  const firstOperand = getRandomInt(1, 50);
  const secondOperand = getRandomInt(1, 50);
  const operator = getRandomOperator();
  let result;
  let question;
  switch (operator) {
    case '+' :
      result = firstOperand+secondOperand;
      question = `${firstOperand} + ${secondOperand}`
      break;
    case '-' :
      result = firstOperand-secondOperand;
      question = `${firstOperand} - ${secondOperand}`
      break;
    case '*' :
      result = firstOperand*secondOperand;
      question = `${firstOperand} * ${secondOperand}`
      break;
    default:
      break;
}
  questAnswer(question, result, task);
}
