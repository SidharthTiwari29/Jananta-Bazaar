import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

const FESTIVE_DATES = [
  { name: 'New Year', start: '12-31', end: '01-02' },
  { name: 'Makar Sankranti', start: '01-13', end: '01-15' },
  { name: 'Republic Day', start: '01-26', end: '01-27' },
  { name: 'Valentine\'s Day', start: '02-13', end: '02-15' },
  { name: 'Holi', start: '03-20', end: '03-28' },
  { name: 'Eid al-Fitr', start: '04-09', end: '04-12' },
  { name: 'Raksha Bandhan', start: '08-18', end: '08-20' },
  { name: 'Independence Day', start: '08-14', end: '08-16' },
  { name: 'Ganesh Chaturthi', start: '09-06', end: '09-10' },
  { name: 'Navratri', start: '10-02', end: '10-12' },
  { name: 'Dussehra', start: '10-11', end: '10-13' },
  { name: 'Diwali', start: '11-01', end: '11-15' },
  { name: 'Christmas', start: '12-24', end: '12-26' }
];

const isDateInRange = (start, end, current) => {
  const [sMonth, sDay] = start.split('-').map(Number);
  const [eMonth, eDay] = end.split('-').map(Number);
  const year = current.getFullYear();
  const startDate = new Date(year, sMonth - 1, sDay);
  const endDate = new Date(year, eMonth - 1, eDay);

  // Handle New Year wrap-around
  if (endDate < startDate) {
    return current >= startDate || current <= endDate;
  }

  return current >= startDate && current <= endDate;
};

const FestiveThemeSwitcher = () => {
  const [festival, setFestival] = useState(null);

  useEffect(() => {
    const today = new Date();
    const currentFestival = FESTIVE_DATES.find(({ start, end }) =>
      isDateInRange(start, end, today)
    );

    if (currentFestival) {
      document.body.classList.add('festive-bg');
      setFestival(currentFestival.name);

      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
      });
    } else {
      document.body.classList.remove('festive-bg');
    }
  }, []);

  return festival ? (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-yellow-200 text-red-700 font-bold px-6 py-2 rounded-xl shadow-lg z-50 animate-bounce">
      Happy {festival} from Janata Bazaar!
    </div>
  ) : null;
};

export default FestiveThemeSwitcher;
