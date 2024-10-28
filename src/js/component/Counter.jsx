import React, { useEffect, useState } from 'react';

function Counter() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []); // Runs once on mount

  return (
    <div>
      <h1>Seconds since page loaded: {seconds}</h1>
    </div>
  );
}

export default Counter;
