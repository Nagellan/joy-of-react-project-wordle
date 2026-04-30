import React from 'react';

import Banner from '../Banner';

function WinBanner({ guessesCount, onRestart }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in
        {' '}
        <strong>
          {guessesCount === 1 ? '1 guess' : `${guessesCount} guesses`}
        </strong>.
      </p>
      <button onClick={onRestart}>Restart the game</button>
    </Banner>
  );
}

export default WinBanner;
