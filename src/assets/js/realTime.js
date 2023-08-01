import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Format time to hh:mm:ss
  const formatTime = (time) => {
    return time.toLocaleTimeString([], { hour12: false });
  };

  return (
    <div className="digital-clock">
      <h1>{formatTime(currentTime)}</h1>
    </div>
  );
};

export default DigitalClock;
