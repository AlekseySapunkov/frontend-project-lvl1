import start from '../index.js';
import getRandomInt from '../utils.js';

const item = '..';
const itemsCount = 1;

const description = 'What number is missing in the progression?';

const makeProgression = (firstElement, lengthOfProgression, step, position) => {
  const array = [];
  for (let i = 0, k = 0; i < lengthOfProgression; k += step, i += 1) {
    array.push(firstElement + k);
  }
  const answer = String(array.splice(position, itemsCount, item));
  const question = array.join(' ');
  return [question, answer];
};

const generateRound = () => {
  const lengthOfProgression = getRandomInt(5, 10);
  const position = getRandomInt(1, (lengthOfProgression - 1));
  const firstElement = getRandomInt(0, 50);
  const step = getRandomInt(1, 10);// шаг прогрессии
  const round = makeProgression(firstElement, lengthOfProgression, step, position);
  return round;
};

export default function playGame() {
  start(generateRound, description);
}
