import React, { useState } from 'react';

function GuessInput({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!/^[A-Z]{5}$/.test(value)) {
      window.alert('This must be a 5 capital letter word!');
      return;
    }

    onSubmit(value);
    setValue('');
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={value}
        minLength={5}
        maxLength={5}
        pattern="[A-Z]{5}"
        title="5 letter word"
        required
        onChange={(event) => {
          setValue(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
