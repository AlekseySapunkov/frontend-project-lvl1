export default function getRandomInt(min = 0, max = 50) {
  const minimal = Math.ceil(min);
  const maximal = Math.floor(max);
  return Math.floor(Math.random() * (maximal - minimal)) + minimal;
}
