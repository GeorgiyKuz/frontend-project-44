#!/usr/bin/env node
import { games, getRandomNumber } from '../../src/index.js';

const randomQuestionParity = () => {
  const question = getRandomNumber(100);
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';

games(rulesGame, randomQuestionParity);
