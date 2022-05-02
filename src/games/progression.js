import gameBody from '../index.js';
import getRandom from '../random.js';

const progressionLength = 10;

const guide = 'What number is missing in the progression?';

const getProgression = (progressionFirstElement, progressionStep) => {
  const progressionArray = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progressionArray.push(progressionFirstElement + (progressionStep * i));
  }
  return progressionArray;
};

const generateRound = () => {
  const progresStep = getRandom(1, 5);
  const progresFirstNum = getRandom(0, 20);
  const taskProgression = getProgression(progresFirstNum, progresStep);
  const indexTaskNum = getRandom(0, 10);
  const answer = String(taskProgression[indexTaskNum]);
  taskProgression[indexTaskNum] = '..';
  const task = taskProgression.join(' ');
  return [task, answer];
};

export default () => gameBody(guide, generateRound);
