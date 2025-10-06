import React from "react";

const Hero3 = () => {
  const places = [
    {
      title: "Cox's Bazar Beach",
      description:
        "Relax on Bangladesh’s longest sandy beach and enjoy the scenic sunrise and sunset.",
      img: "https://images.unsplash.com/photo-1627895457805-c7bf42cb9873?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
    },
    {
      title: "Sylhet Tea Gardens",
      description:
        "Walk through lush green tea plantations and breathe in the fresh mountain air.",
      img: "https://images.unsplash.com/photo-1544750040-4ea9b8a27d38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
    },
    {
      title: "Historical Dhaka",
      description:
        "Explore Dhaka’s rich history, vibrant markets, and cultural landmarks.",
      img: "https://images.unsplash.com/photo-1594993877167-a08f13013dc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=388&q=80",
    },
    {
      title: "Sundarbans Mangrove Forest",
      description:
        "Experience the largest mangrove forest and spot the majestic Royal Bengal Tiger.",
      img: "https://media.istockphoto.com/id/1890258882/photo/the-bengal-tiger-from-mangroves-of-sundarbans.jpg?s=612x612&w=0&k=20&c=8DegBp1rzYDNFCsP4mPm9mV7X1mJvT6DQ_8ZnatMlpA=",
    },
  ];

  return (
    <div className="lg:px-36 md:py-16 px-5 bg-gradient-to-r from-blue-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#41A4FF] mb-3 block text-lg font-semibold tracking-wide uppercase">
            Travel Bangladesh
          </span>
          <h2 className="text-gray-900 mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold">
            TAKE ONLY MEMORIES, LEAVE ONLY FOOTPRINTS
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto">
            Discover Bangladesh's most beautiful destinations with our curated travel packages. Every journey promises comfort, adventure, and memories to cherish.
          </p>
        </div>

        {/* Places Section */}
        <div className="flex flex-col gap-12">
          {places.map((place, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-6`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px] overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={place.img}
                  alt={place.title}
                  className="w-full h-full object-cover hover:scale-105 transform transition duration-500"
                />
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900">
                  {place.title}
                </h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {place.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero3;
