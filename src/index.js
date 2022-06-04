import readlineSync from 'readline-sync';

export default function start(quest, answer, task) {
  console.log('Welcome to the Brain Games!');// Приветствие
  const userName = readlineSync.question('May I have your name? ');// Спрашиваем имя игрока
  console.log(`Hello, ${userName}!`);
  console.log(task);
  for (let i = 0; i < quest.length; i += 1) {
    console.log(`Question: ${quest[i]}`);// Записываем условие первой задачи
    const userAnswer = (readlineSync.question('Your answer: '));// Считываем ответ игрока
    if (String(answer[i]) !== String(userAnswer)) { // проверяем правильность ответа игрока
      console.log(`'${(userAnswer)}' is wrong answer ;(. Correct answer was '${answer[i]}'.\nLet's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
    }
    if (i >= 2) { // Если выиграны 3 раунда обьявляем победителя
      console.log(`Congratulations, ${userName}!`);
    }
  }
}
