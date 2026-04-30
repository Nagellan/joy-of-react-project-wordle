import React, { useState } from 'react';

import GuessResults from '../GuessResults';
import GuessInput from '../GuessInput';
import Keyboard from '../Keyboard';
import WinBanner from '../WinBanner';
import LoseBanner from '../LoseBanner';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState('playing');

  const onSubmit = (guess) => {
    // game's already finished
    if (gameStatus !== 'playing') {
      return;
    }

    if (guess === answer) {
      setGameStatus('win');
    } else if (guesses.length === NUM_OF_GUESSES_ALLOWED - 1) {
      setGameStatus('lose');
    }

    setGuesses([...guesses, guess])
  }

  return (
    <>
      <GuessResults
        guesses={guesses}
        answer={answer}
      />
      <GuessInput
        onSubmit={onSubmit}
        disabled={gameStatus !== 'playing'}
      />
      <Keyboard guesses={guesses} answer={answer} />
      {gameStatus === 'win' && (
        <WinBanner guessesCount={guesses.length} />
      )}
      {gameStatus === 'lose' && (
        <LoseBanner answer={answer} />
      )}
    </>
  );
}

export default Game;
