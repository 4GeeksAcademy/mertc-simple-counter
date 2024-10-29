import React, { useEffect, useState } from 'react';
import '../../styles/SecondCounter.css';

const SecondCounter = () => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % 100000); // Reset to 0 after 99999
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  // Format count to always show 5 digits
  const formattedCount = String(count).padStart(5, '0').split('');

  return (
    <div className="counter" role="timer" aria-live="polite">
      <div className="icon" aria-label="clock">
        <span role="img" aria-label="clock">🕒</span>
      </div>
      {formattedCount.map((digit, index) => (
        <div key={index} className="digit"  >
          {digit}
        </div>
      ))}
    </div>
  );
};

export default SecondCounter;
