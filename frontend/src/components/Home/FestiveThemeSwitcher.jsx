import { useEffect, useState } from "react";
import dayjs from "dayjs";

const festivalThemes = {
  "New Year": { image: "/festivals/newyear.jpg", bgClass: "bg-[#e0f7fa]" },
  "Makar Sankranti": { image: "/festivals/sankranti.jpg", bgClass: "bg-[#fff3e0]" },
  "Republic Day": { image: "/festivals/republic.jpg", bgClass: "bg-[#f3e5f5]" },
  "Valentine's Day": { image: "/festivals/valentine.jpg", bgClass: "bg-[#fce4ec]" },
  "Holi": { image: "/festivals/holi.jpg", bgClass: "bg-[#fffde7]" },
  "Eid al-Fitr": { image: "/festivals/eid.jpg", bgClass: "bg-[#e8f5e9]" },
  "Raksha Bandhan": { image: "/festivals/raksha.jpg", bgClass: "bg-[#ede7f6]" },
  "Independence Day": { image: "/festivals/independence.jpg", bgClass: "bg-[#e3f2fd]" },
  "Ganesh Chaturthi": { image: "/festivals/ganesh.jpg", bgClass: "bg-[#fbe9e7]" },
  "Navratri": { image: "/festivals/navratri.jpg", bgClass: "bg-[#fff8e1]" },
  "Dussehra": { image: "/festivals/dussehra.jpg", bgClass: "bg-[#e8eaf6]" },
  "Diwali": { image: "/festivals/diwali.jpg", bgClass: "bg-[#fbeee6]" },
  "Christmas": { image: "/festivals/christmas.jpg", bgClass: "bg-[#e1f5fe]" },
};

const festivalRanges = [
  { name: "New Year", start: "12-31", end: "01-02" },
  { name: "Makar Sankranti", start: "01-13", end: "01-15" },
  { name: "Republic Day", start: "01-26", end: "01-27" },
  { name: "Valentine's Day", start: "02-13", end: "02-15" },
  { name: "Holi", start: "03-20", end: "03-28" },
  { name: "Eid al-Fitr", start: "04-09", end: "04-12" },
  { name: "Raksha Bandhan", start: "08-18", end: "08-20" },
  { name: "Independence Day", start: "08-14", end: "08-16" },
  { name: "Ganesh Chaturthi", start: "09-06", end: "09-10" },
  { name: "Navratri", start: "10-02", end: "10-12" },
  { name: "Dussehra", start: "10-11", end: "10-13" },
  { name: "Diwali", start: "11-01", end: "11-15" },
  { name: "Christmas", start: "12-24", end: "12-26" },
];

const detectFestival = () => {
  const now = dayjs();
  const current = now.format("MM-DD");

  for (const fest of festivalRanges) {
    const start = dayjs(`${now.year()}-${fest.start}`);
    const end = dayjs(`${now.year()}-${fest.end}`);

    // Handle cross-year festivals (e.g., New Year)
    if (start.isAfter(end)) {
      if (
        now.isAfter(start) ||
        now.isBefore(end.add(1, "year"))
      ) return fest.name;
    } else if (now.isAfter(start.subtract(1, "day")) && now.isBefore(end.add(1, "day"))) {
      return fest.name;
    }
  }

  return null;
};

export default function FestiveThemeSwitcher({ children }) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const current = detectFestival();
    if (current && festivalThemes[current]) {
      setTheme(festivalThemes[current]);
    }
  }, []);

  return (
    <div
      className={`min-h-screen w-full transition-all duration-500 ${
        theme?.bgClass || "bg-white"
      } bg-cover bg-center`}
      style={{
        backgroundImage: theme?.image ? `url(${theme.image})` : "none",
      }}
    >
      {children}
    </div>
  );
}
