// HeroTour.jsx
import React from "react";
import SearchBar from "./SearchBar";

const image = {
  backgroundImage:
    "url('https://media1.thrillophilia.com/filestore/tqoi06pkedw6xqpbapzvkhgylfu8_28849d88548b64a6f18ef8dd65b07539.jpg?w=1440&dpr=2')",
  height: "600px",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const HeroTour = () => {
  return (
    <div className="relative">
      {/* Background image with soft overlay */}
      <div style={image} className="relative">
        <div className="absolute inset-0 bg-black/5"></div>

        {/* Centered content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-xl mb-4">
            Discover the Beauty of Bangladesh
          </h1>

          <p className="mt-2 md:mt-4 text-lg md:text-xl text-gray-200 uppercase tracking-wide">
            Rivers, hills, and endless greenery <br />
            Experience a unique adventure
          </p>

          {/* Search bar with soft UI */}
          <div className="mt-8 w-full">
            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-4 max-w-5xl mx-auto">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTour;
