// src/components/home/FestiveThemeSwitcher.jsx
import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/utils/utils'; // <-- corrected import

const themes = ['normal', 'diwali', 'eid', 'pongal'];

const FestiveThemeSwitcher = ({ onThemeChange }) => {
  const [theme, setTheme] = useState('normal');

  useEffect(() => {
    onThemeChange && onThemeChange(theme);
  }, [theme, onThemeChange]);

  const handleSwitch = () => {
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
  };

  return (
    <div className="flex items-center justify-center mt-6">
      <button
        onClick={handleSwitch}
        className={cn(
          'bg-gradient-to-r from-orange-400 to-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-md hover:scale-105 transition-transform duration-200',
          theme !== 'normal' && 'ring-2 ring-yellow-300'
        )}
      >
        <Sparkles className="w-4 h-4" />
        {theme === 'normal' ? 'Normal Mode' : `Theme: ${theme.toUpperCase()}`}
      </button>
    </div>
  );
};

export default FestiveThemeSwitcher;
