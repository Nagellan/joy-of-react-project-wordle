import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  const guessResult = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((index) => (
        <span
          key={index}
          className={`cell ${guessResult ? guessResult[index].status : ''}`}
        >
          {value?.[index]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
