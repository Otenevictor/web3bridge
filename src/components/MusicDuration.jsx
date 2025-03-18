import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ duration, isPlaying, onComplete }) => {
  const [timeRemaining, setTimeRemaining] = useState(duration);
  
  useEffect(() => {
    // Reset the timer when duration changes
    setTimeRemaining(duration);
  }, [duration]);
  
  useEffect(() => {
    let interval = null;
    
    if (isPlaying && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prevTime => {
          const newTime = prevTime - 1;
          if (newTime <= 0) {
            clearInterval(interval);
            if (onComplete) onComplete();
            return 0;
          }
          return newTime;
        });
      }, 1000);
    } else if (!isPlaying) {
      clearInterval(interval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, timeRemaining, onComplete]);
  
  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`;
  };
  
  return (
    <div className="flex items-center text-[#f1be32] font-mono">
      <span>{formatTime(timeRemaining)}</span>
      <span className="mx-2">/</span>
      <span>{formatTime(duration)}</span>
    </div>
  );
};

export default CountdownTimer;