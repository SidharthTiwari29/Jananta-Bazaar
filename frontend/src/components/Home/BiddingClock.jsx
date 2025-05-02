// src/components/home/BiddingClock.jsx
import React, { useState, useEffect } from 'react';

const BiddingClock = ({ endTime, onTimeUp }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(endTime) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      if (Object.keys(newTimeLeft).length === 0 && onTimeUp) {
        onTimeUp();
      }
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="text-center text-xl font-semibold text-orange-600">
      {timeLeft.hours !== undefined ? (
        <span>
          Deal ends in: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </span>
      ) : (
        <span>Deal closed</span>
      )}
    </div>
  );
};

export default BiddingClock;

