import gameBody from '../index.js';
import getRandom from '../random.js';

const guide = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstNum, secondNum) => {
  if (secondNum === 0) return firstNum;
  return getGCD(secondNum, firstNum % secondNum);
};

const generateRound = () => {
  const firstTaskNum = getRandom(0, 100);
  const secondTaskNum = getRandom(0, 100);
  const task = `${firstTaskNum} ${secondTaskNum}`;
  const answer = getGCD(firstTaskNum, secondTaskNum);
  return [task, answer];
};

export default () => gameBody(guide, generateRound);
