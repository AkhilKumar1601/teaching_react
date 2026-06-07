import { useEffect, useState } from "react";

function WindowWidthTracker() {
  const [windowWidth, setWindowWidth] = useState(
    window.innerWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  return (
    <div>
      <h1>Window Width Tracker</h1>

      <h2>Width: {windowWidth}px</h2>
    </div>
  );
}

export default WindowWidthTracker;
