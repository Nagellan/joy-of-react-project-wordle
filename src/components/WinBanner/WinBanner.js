import React from 'react';

import Banner from '../Banner';

function WinBanner({ guessesCount }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in
        {' '}
        <strong>
          {guessesCount === 1 ? '1 guess' : `${guessesCount} guesses`}
        </strong>.
      </p>
    </Banner>
  );
}

export default WinBanner;
