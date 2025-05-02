import React, { useEffect, useState } from 'react';

const Timer = ({ endTime, onExpire }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = endTime - now;
    let time = {};

    if (difference > 0) {
      time = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      time = null;
    }

    return time;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (!newTimeLeft) {
        clearInterval(timer);
        onExpire?.();
      }
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  if (!timeLeft) return <span className="text-red-600">Expired</span>;

  return (
    <div className="text-sm text-gray-700">
      Time Left: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </div>
  );
};

export default Timer;

