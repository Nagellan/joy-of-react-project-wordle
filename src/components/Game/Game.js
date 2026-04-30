import React, { useState } from 'react';

import GuessResults from '../GuessResults';
import GuessInput from '../GuessInput';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const onSubmit = (guess) => {
    setGuesses([...guesses, guess])
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput onSubmit={onSubmit} />
    </>
  );
}

export default Game;
