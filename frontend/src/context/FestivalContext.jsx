import { createContext, useContext, useEffect, useState } from "react";

// You can later replace this logic with an API or dynamic date check
const isFestivalToday = () => {
  const today = new Date();
  const festivalDates = [
    { month: 10, day: 12 }, // Diwali example: November 12
    { month: 0, day: 14 },  // Makar Sankranti: January 14
  ];
  return festivalDates.some(
    (f) => today.getMonth() === f.month && today.getDate() === f.day
  );
};

const FestivalContext = createContext(false);

export const useFestival = () => useContext(FestivalContext);

export const FestivalProvider = ({ children }) => {
  const [isFestival, setIsFestival] = useState(false);

  useEffect(() => {
    setIsFestival(isFestivalToday());
  }, []);

  return (
    <FestivalContext.Provider value={isFestival}>
      {children}
    </FestivalContext.Provider>
  );
};
