import React, { useState, useEffect } from 'react';

interface TimerProps {
    secondsCount: number;
}

const Timer: React.FC<TimerProps> = ({ secondsCount }) => {
  const [seconds, setSeconds] = useState(secondsCount);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(prev => prev - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div style={{ position: 'relative', width: '200px', height: '200px' }}>
      {seconds}
    </div>
  );
};

export default Timer;
