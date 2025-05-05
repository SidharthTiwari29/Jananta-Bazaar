// src/components/Home/FestiveThemeSwitcher.jsx
import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const getCurrentFestival = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  // Add more festivals as needed
  if ((month === 11 && day >= 1 && day <= 10)) return 'diwali';
  if ((month === 4 && day >= 10 && day <= 20)) return 'eid';
  if ((month === 1 && day >= 13 && day <= 15)) return 'pongal';
  return 'normal';
};

const triggerFireworks = () => {
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) return clearInterval(interval);

    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2,
      },
    });
  }, 400);
};

const FestiveThemeSwitcher = () => {
  useEffect(() => {
    const festival = getCurrentFestival();
    document.documentElement.setAttribute('data-theme', festival);

    if (festival === 'diwali' || festival === 'eid') {
      triggerFireworks();
    }
  }, []);

  return null;
};

export default FestiveThemeSwitcher;
