import readlineSync from 'readline-sync';

export default function questAnswer(quest, answer, task) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  const greetingOfUser = `Hello, ${userName}!`;
  console.log(greetingOfUser);
  console.log(task);
  for (let i = 0; i < quest.length; i += 1) {
    console.log(`Question: ${quest[i]}`);
    const userAnswer = (readlineSync.question('Your answer: '));
    if (String(answer[i]) !== String(userAnswer)) {
      console.log(`'${(userAnswer)}' is wrong answer ;(. Correct answer was '${answer[i]}'.\nLet's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
    }
    if (i >= 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
}
