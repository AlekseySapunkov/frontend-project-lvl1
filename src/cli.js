import readlineSync from 'readline-sync';

export default function startGame() {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${readlineSync.question('May I have your name? ')}!`);
}
