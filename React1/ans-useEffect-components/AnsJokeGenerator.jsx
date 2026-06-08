import { useEffect, useState } from "react";

function JokeGenerator() {
  const [joke, setJoke] = useState({});

  const fetchJoke = async () => {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );

    const json = await response.json();

    setJoke(json);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <h1>Random Joke Generator</h1>

      <h3>{joke.setup}</h3>

      <p>{joke.punchline}</p>

      <button onClick={fetchJoke}>
        Generate New Joke
      </button>
    </div>
  );
}

export default JokeGenerator;
