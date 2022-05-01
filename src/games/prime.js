import gameBody from '../index.js';
import getRandom from '../random.js';

const guide = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 4) return 'yes';
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const task = getRandom(100, 1);
  const answer = isPrime(task) ? 'yes' : 'no';
  return [task, answer];
};

export default () => gameBody(guide, generateRound);
