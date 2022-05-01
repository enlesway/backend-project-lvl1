import gameBody from '../index.js';
import getRandom from '../random.js';

const guide = 'What number is missing in the progression?';

const getProgression = (progressionLength, progressionStep, progressionFirstNum) => {
  const progressionArray = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progressionArray.push(progressionFirstNum + (progressionStep * i));
  }
  return progressionArray;
};

const generateRound = () => {
  const progresLength = 10;
  const progresStep = getRandom(5, 1);
  const progresFirstNum = getRandom(20, 0);
  const taskProgression = getProgression(progresLength, progresStep, progresFirstNum);
  const indexTaskNum = getRandom(10, 0);
  const answer = taskProgression[indexTaskNum];
  taskProgression[indexTaskNum] = '..';
  const task = taskProgression.join(' ');
  return [task, answer];
};

export default () => gameBody(guide, generateRound);
