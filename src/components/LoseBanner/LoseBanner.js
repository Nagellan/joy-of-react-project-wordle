import React from 'react';

import Banner from '../Banner';

function LoseBanner({ answer, onRestart }) {
  return (
    <Banner status="sad">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      <button onClick={onRestart}>Restart the game</button>
    </Banner>
  );
}

export default LoseBanner;
