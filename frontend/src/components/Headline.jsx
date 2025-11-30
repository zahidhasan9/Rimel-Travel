import React, { useEffect, useState } from "react";

const HeadlineSlider = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("headlines")) || [];
    setHeadlines(saved);
  }, []);

  if (headlines.length === 0) {
    return (
      <p className="text-center text-gray-500 text-lg py-3">
        No headlines available...
      </p>
    );
  }

  return (
  <div className="relative w-full overflow-hidden py-3 
                bg-gradient-to-r from-[#0084ff] via-[#00c8ff] to-[#00ffcc] 
                shadow-[0_0_20px_rgba(0,200,255,0.6)]">

  <div className="absolute inset-0 bg-white/10 backdrop-blur-md opacity-40"></div>

  <div className="flex whitespace-nowrap animate-scroll-left relative z-10">
    {[...headlines, ...headlines].map((text, index) => (
      <span
        key={index}
        className="mx-10 text-xl md:text-2xl font-bold 
                   text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]
                   tracking-wide"
      >
        ✈️ {text}
      </span>
    ))}
  </div>
</div>


  );
};

export default HeadlineSlider;
