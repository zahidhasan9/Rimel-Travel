// import React from "react";

// const Hero2 = () => {
//   return (
//     <>
//       <div className="md:px-36 px-8 md:py-28 py-5">
//         <div className="flex lg:flex-row flex-col gap-10">
//           {/* Text Section */}
//           <div className="flex flex-col gap-5 justify-center p-5">
//             <h1 className="text-4xl md:text-5xl font-bold">Explore</h1>
//             <h1 className="text-4xl md:text-5xl font-bold">the Beauty of</h1>
//             <h1 className="text-4xl md:text-6xl font-bold text-[#41A4FF]">
//               Bangladesh
//             </h1>
//             <p className="mt-4 text-gray-700">
//               Discover the lush green tea gardens of Sylhet, the serene beaches of Cox's Bazar, 
//               and the vibrant culture across Bangladesh. Plan your perfect getaway with us!
//             </p>
//             <button className="bg-black text-white px-4 py-3 rounded-lg hover:bg-white hover:border hover:text-black hover:font-bold mt-4">
//               Get Started
//             </button>
//           </div>

//           {/* Image Section */}
//           <div className="">
//             <img
//               src="https://www.laurewanders.com/wp-content/uploads/2023/02/Backpacking-in-Bangladesh-00009-768x526.jpg"
//               alt="Bangladesh Travel"
//               className="rounded-3xl h-[100%] w-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero2;


import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const Hero2 = () => {
  const slides = [
    {
      title: "Explore the Beauty of Bangladesh",
      subtitle: "From Cox’s Bazar to Sylhet – discover hidden gems, lush tea gardens, and natural wonders of Bangladesh.",
      image: "https://live.staticflickr.com/3526/4063504896_5a36aeebd9_b.jpg",
      button: "Start Your Journey",
    },
    {
      title: "Adventure Awaits in Bandarban",
      subtitle: "Trek the misty hills, discover hidden waterfalls, and embrace the serenity of nature in Bandarban.",
      image: "https://greenbelt.com.bd/wp-content/uploads/2025/08/Bandarban-Tour-Package-1.jpg",
      button: "Discover Now",
    },
    {
      title: "Cultural Heritage of Dhaka",
      subtitle: "Experience the heartbeat of Bangladesh — vibrant streets, ancient architecture, and authentic flavors.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Mangal_Shobhajatra_in_Dhaka.jpg/1280px-Mangal_Shobhajatra_in_Dhaka.jpg",
      button: "Explore Culture",
    },
  ];

  return (
    <div className="w-full">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={6000}
        transitionTime={1000}
        swipeable
        emulateTouch
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[85vh] overflow-hidden">
            {/* ছবি - কোনো darkness নাই */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            
            <div className="absolute inset-0 bg-black/20"></div>

            
            <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-24 text-white">
              <div className="max-w-3xl">
                {/* সাদা টেক্সট + মোটা বোল্ড + strong shadow যাতে ১০০% পড়া যায় */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 drop-shadow-2xl text-white">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-10 font-medium drop-shadow-2xl text-white/90">
                  {slide.subtitle}
                </p>

                <Link
                  to="/tours/home"
                  className="inline-block bg-[#41A4FF] hover:bg-white text-white hover:text-[#41A4FF] font-bold px-10 py-5 rounded-full text-lg shadow-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
                >
                  {slide.button} →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero2;
