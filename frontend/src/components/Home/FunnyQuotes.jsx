import React, { useState, useEffect } from 'react';

const desiQuotes = [
  "O bhai! Itna kam bid toh meri ex ki yaadein bhi nahi deti!",
  "Arey bhai, bid kar rahe ho ya muft ka prasad baant rahe ho?",
  "Lagta hai aapka bid PayTM cashback ka intezaar kar raha hai!",
  "Yeh bid dekh ke toh Dadi bhi keh rahi — beta, thoda aur laga de!",
  "Aapka bid sunke toh Kirana waale ne bhi dukaan band kar di!",
  "Shaadi mein plate bhar ke khaate ho, bid mein itna kanjoosi?",
  "Bhai, yeh bid nahi — April Fool ka trailer lag raha!",
  "Lagta hai aapka wallet ne strike kar diya — ‘No more spending!’",
  "Yeh bid toh calculator se zyada ‘jugadu’ nikla!",
  "Bhai, aise bid doge toh sale ka system bhi resign kar dega!"
];

const FunnyQuotes = () => {
  const [quote, setQuote] = useState('');

  const getRandomQuote = () => {
    const random = Math.floor(Math.random() * desiQuotes.length);
    setQuote(desiQuotes[random]);
  };

  useEffect(() => {
    getRandomQuote();
    const interval = setInterval(getRandomQuote, 8000); // refresh every 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-yellow-50 p-4 rounded-xl shadow-md border border-yellow-300 text-center max-w-xl mx-auto my-6">
      <p className="text-lg font-semibold text-yellow-800 italic">
        {quote}
      </p>
      <button
        onClick={getRandomQuote}
        className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow"
      >
        Aur sunao!
      </button>
    </div>
  );
};

export default FunnyQuotes;
