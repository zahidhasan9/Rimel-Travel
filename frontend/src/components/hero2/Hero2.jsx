import React from "react";

const Hero2 = () => {
  return (
    <>
      <div className="md:px-36 px-8 md:py-28 py-5">
        <div className="flex lg:flex-row flex-col gap-10">
          {/* Text Section */}
          <div className="flex flex-col gap-5 justify-center p-5">
            <h1 className="text-4xl md:text-5xl font-bold">Explore</h1>
            <h1 className="text-4xl md:text-5xl font-bold">the Beauty of</h1>
            <h1 className="text-4xl md:text-6xl font-bold text-[#41A4FF]">
              Bangladesh
            </h1>
            <p className="mt-4 text-gray-700">
              Discover the lush green tea gardens of Sylhet, the serene beaches of Cox's Bazar, 
              and the vibrant culture across Bangladesh. Plan your perfect getaway with us!
            </p>
            <button className="bg-black text-white px-4 py-3 rounded-lg hover:bg-white hover:border hover:text-black hover:font-bold mt-4">
              Get Started
            </button>
          </div>

          {/* Image Section */}
          <div className="">
            <img
              src="https://www.laurewanders.com/wp-content/uploads/2023/02/Backpacking-in-Bangladesh-00009-768x526.jpg"
              alt="Bangladesh Travel"
              className="rounded-3xl h-[100%] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
