import readlineSync from 'readline-sync';

export const amountOfRounds = 3;
export function start(result, exercise) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(exercise);
  for (let i = 0; i < amountOfRounds; i += 1) {
    console.log(`Question: ${result[i][0]}`);
    const userAnswer = (readlineSync.question('Your answer: '));
    if (String(result[i][1]) !== userAnswer) { // проверяем правильность ответа игрока
      console.log(`'${(userAnswer)}' is wrong answer ;(. Correct answer was '${result[i][1]}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}
