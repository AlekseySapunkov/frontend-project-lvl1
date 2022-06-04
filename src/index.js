import readlineSync from 'readline-sync';

export default function start(question, answer, exercise) {
  console.log('Welcome to the Brain Games!');// Приветствие
  const userName = readlineSync.question('May I have your name? ');// Спрашиваем имя игрока
  console.log(`Hello, ${userName}!`);
  console.log(exercise);
  for (let i = 0; i < question.length; i += 1) {
    console.log(`Question: ${question[i]}`);// Записываем условие первой задачи
    const userAnswer = (readlineSync.question('Your answer: '));// Считываем ответ игрока
    if (String(answer[i]) !== userAnswer) { // проверяем правильность ответа игрока
      console.log(`'${(userAnswer)}' is wrong answer ;(. Correct answer was '${answer[i]}'.\nLet's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
