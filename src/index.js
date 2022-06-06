import readlineSync from 'readline-sync';

export const roundsCount = 3;
export function start(rounds, description) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 0; i < roundsCount; i += 1) {
    console.log(`Question: ${rounds[i][0]}`);
    const userAnswer = (readlineSync.question('Your answer: '));
    if (String(rounds[i][1]) !== userAnswer) { // проверяем правильность ответа игрока
      console.log(`'${(userAnswer)}' is wrong answer ;(. Correct answer was '${rounds[i][1]}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}
