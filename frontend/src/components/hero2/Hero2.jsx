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
      subtitle:
        "From Cox’s Bazar to Sylhet – discover hidden gems, lush tea gardens, and natural wonders of Bangladesh.",
      image:
        "https://images.unsplash.com/photo-1544750040-4ea9b8a27d38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      button: "Start Your Journey",
    },
    {
      title: "Adventure Awaits in Bandarban",
      subtitle:
        "Trek the misty hills, discover hidden waterfalls, and embrace the serenity of nature in Bandarban.",
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQHjTPqKnYvkGg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1667450386034?e=1762992000&v=beta&t=pU5Ig8_VTKC3PhIrTDgtFZcNQHY_PodPoA3JkhXgzP8",
      button: "Discover Now",
    },
    {
      title: "Cultural Heritage of Dhaka",
      subtitle:
        "Experience the heartbeat of Bangladesh — vibrant streets, ancient architecture, and authentic flavors.",
      image:
        "https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/dten/2023/04/13/dt-165.jpeg",
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
        transitionTime={1200}
        swipeable
        emulateTouch
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[85vh]">
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-full brightness-[0.6]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-24 text-white">
              <div
                className="backdrop-blur-sm bg-white/10 p-8 md:p-12 rounded-3xl max-w-2xl animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h1 className=" text-gray-200 text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight drop-shadow-xl">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-200 drop-shadow-md">
                  {slide.subtitle}
                </p>
                <Link to="/tours/home" className="bg-[#41A4FF] hover:bg-white hover:text-[#41A4FF] text-white font-semibold px-8 py-4 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105">
                  {slide.button}
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
