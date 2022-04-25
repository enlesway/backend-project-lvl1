import gameBody from '../index.js';
import getRandom from '../random.js';

const guide = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const generateRound = () => {
  const task = getRandom(0, 100);
  const answer = isEven(task);
  return [task, answer];
};

export default () => gameBody(guide, generateRound);
