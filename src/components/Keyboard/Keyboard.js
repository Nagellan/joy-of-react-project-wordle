import React from 'react';

import { checkGuess } from '../../game-helpers';

const LETTER_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
];

function Keyboard({ guesses, answer }) {
  const statuses = {};

  for (let guess of guesses) {
    const result = checkGuess(guess, answer);

    for (let {letter, status} of result) {
      const currentStatus = statuses[letter];
      if (
        status === 'correct'
        || status === 'misplaced' && currentStatus !== 'correct'
        || status === 'incorrect' && !currentStatus
      ) {
        statuses[letter] = status;
      }
    }
  }

  return (
    <div className="keyboard">
      {LETTER_ROWS.map((letterRow) => (
        <div className="row" key={letterRow.join(',')}>
          {letterRow.map((letter) => (
            <span
              className={statuses[letter] ? `letter ${statuses[letter]}` : 'letter'}
              key={letter}
            >
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
