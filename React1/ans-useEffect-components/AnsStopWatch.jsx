import { useEffect, useState } from "react";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const startWatch = () => {
    setIsRunning(true);
  };

  const stopWatch = () => {
    setIsRunning(false);
  };

  const resetWatch = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      <h1>Stop Watch</h1>

      <h2>{time} Seconds</h2>

      <button onClick={startWatch}>
        Start
      </button>

      <button onClick={stopWatch}>
        Stop
      </button>

      <button onClick={resetWatch}>
        Reset
      </button>
    </div>
  );
}

export default StopWatch;

