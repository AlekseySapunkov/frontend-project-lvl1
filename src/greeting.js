import readlineSync from 'readline-sync';

export default function questAnswer (quest, answer, task) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  const greetingOfUser = `Hello, ${userName}!`;
  console.log(greetingOfUser);
  console.log(task);
  let counter = 0;
  while (counter < 3) {
    console.log(`Question: ${quest}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
      counter += 1;
    }
    if (counter >= 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
}
