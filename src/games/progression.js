import start from '../index.js';
import getRandomInt from '../utils.js';

const item = '..';
const itemsCount = 1;

const description = 'What number is missing in the progression?';

const makeProgression = (firstElement, lengthOfProgression, step) => {
  const array = [];
  for (let i = 0, k = 0; i < lengthOfProgression; k += step, i += 1) {
    array.push(firstElement + k);
  }
  return array;
};

const generateRound = () => {
  const lengthOfProgression = getRandomInt(5, 10);
  const position = getRandomInt(1, (lengthOfProgression - 1));
  const firstElement = getRandomInt(0, 50);
  const step = getRandomInt(1, 10);// шаг прогрессии
  const progressionForRound = makeProgression(firstElement, lengthOfProgression, step);
  const answer = String(progressionForRound.splice(position, itemsCount, item));
  const question = progressionForRound.join(' ');
  return [question, answer];
};

export default function playGame() {
  start(generateRound, description);
}
