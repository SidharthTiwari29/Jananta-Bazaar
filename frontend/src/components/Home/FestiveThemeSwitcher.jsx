import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const FESTIVAL_THEMES = [
  { name: 'diwali', date: '11-12', color: 'bg-yellow-100' },
  { name: 'eid', date: '04-10', color: 'bg-green-100' },
  { name: 'pongal', date: '01-15', color: 'bg-orange-100' },
];

const getTodayMMDD = () => {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${month}-${day}`;
};

const FestiveThemeSwitcher = () => {
  const [theme, setTheme] = useState('normal');

  useEffect(() => {
    const today = getTodayMMDD();
    const activeTheme = FESTIVAL_THEMES.find(f => f.date === today);
    const themeToApply = activeTheme ? activeTheme.name : 'normal';
    setTheme(themeToApply);
    document.documentElement.setAttribute('data-theme', themeToApply);
  }, []);

  return (
    <div className="fixed top-3 right-3 z-50 animate-pulse">
      {theme !== 'normal' && (
        <div className="flex items-center gap-2 px-3 py-1 rounded-full shadow-lg bg-white border border-gray-200">
          <Sparkles className="text-yellow-500" />
          <span className="text-sm font-semibold text-gray-800">
            {theme.charAt(0).toUpperCase() + theme.slice(1)} Mode On!
          </span>
        </div>
      )}
    </div>
  );
};

export default FestiveThemeSwitcher;
