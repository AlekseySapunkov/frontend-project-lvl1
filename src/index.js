import readlineSync from 'readline-sync';

export const amountOfRound = 3;
export function start(result, exercise) {
  console.log('Welcome to the Brain Games!');// Приветствие
  const userName = readlineSync.question('May I have your name? ');// Спрашиваем имя игрока
  console.log(`Hello, ${userName}!`);
  console.log(exercise);
  for (let i = 0; i < amountOfRound; i += 1) {
    console.log(`Question: ${result[i][0]}`);// Записываем условие первой задачи
    const userAnswer = (readlineSync.question('Your answer: '));// Считываем ответ игрока
    if (String(result[i][1]) !== userAnswer) { // проверяем правильность ответа игрока
      console.log(`'${(userAnswer)}' is wrong answer ;(. Correct answer was '${result[i][1]}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}
