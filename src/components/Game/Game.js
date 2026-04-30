import React from 'react';

import GuessInput from '../GuessInput';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const onSubmit = (value) => {
    console.log(value);
  }

  return (
    <main>
      <GuessInput onSubmit={onSubmit} />
    </main>
  );
}

export default Game;
