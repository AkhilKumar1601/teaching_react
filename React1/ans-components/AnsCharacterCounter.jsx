import { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");

  const maxLimit = 100;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const remainingCharacters = maxLimit - text.length;

  return (
    <div>
      <h1>Character Counter</h1>

      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        rows="6"
        cols="40"
      />

      <h3>Total Characters: {text.length}</h3>

      <h3>Remaining Characters: {remainingCharacters}</h3>

      {remainingCharacters < 0 && (<p>Character limit exceeded!</p>)}
    </div>
  );
}

export default CharacterCounter;
