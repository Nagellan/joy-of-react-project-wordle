import React, { useState } from 'react';

import GuessResults from '../GuessResults';
import GuessInput from '../GuessInput';
import Keyboard from '../Keyboard';
import WinBanner from '../WinBanner';
import LoseBanner from '../LoseBanner';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Game() {
  const [answer, setAnswer] = useState(() => {
    const ans = sample(WORDS);
    console.info({ answer: ans });
    return ans;
  });
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

  const onRestart = () => {
    const nextAnswer = sample(WORDS);
    console.info({ answer: nextAnswer });
    setAnswer(nextAnswer);
    setGuesses([]);
    setGameStatus('playing');
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
        <WinBanner guessesCount={guesses.length} onRestart={onRestart} />
      )}
      {gameStatus === 'lose' && (
        <LoseBanner answer={answer} onRestart={onRestart} />
      )}
    </>
  );
}

export default Game;
