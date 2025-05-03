// src/components/home/FunnyQuotes.jsx
import React, { useState, useEffect } from 'react';
import { Smile } from 'lucide-react';

const desiFunnyQuotes = [
  "Bhai hai tu… dil jeet liya!",
  "Aapka bid dekhke to MRP bhi sharma gaya!",
  "Yeh toh badi ‘deal’ nikli!",
  "Sasta, sundar aur tikaau – jaise aap!",
  "Itna sasta? Kirana wale bhi soch mein pad gaye!",
  "Janata Bazaar mein aapka swag high hai!",
  "Aapke bid ne toh lottery ki yaad dila di!",
  "Budget king aap ho, discount ka ring aap ho!",
  "Maa kasam, aisi deal toh sapne mein bhi nahi milti!",
  "Aapka bid – Janata ka hit!",
];

const FunnyQuotes = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    showRandomQuote();
    const interval = setInterval(showRandomQuote, 7000); // new quote every 7 seconds
    return () => clearInterval(interval);
  }, []);

  const showRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * desiFunnyQuotes.length);
    setQuote(desiFunnyQuotes[randomIndex]);
  };

  return (
    <div className="bg-yellow-100 text-yellow-900 px-4 py-3 rounded-md shadow-md flex items-center gap-3 mt-4">
      <Smile className="w-6 h-6" />
      <p className="text-md font-medium">{quote}</p>
    </div>
  );
};

export default FunnyQuotes;

