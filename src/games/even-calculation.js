import start from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const makeGame = () => {
  const question = getRandomInt(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default function startGame() {
  start(makeGame, description);
}
