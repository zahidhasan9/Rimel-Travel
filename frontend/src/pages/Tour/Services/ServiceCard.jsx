// import React, { useEffect, useState } from "react";
// import { AiFillStar } from "react-icons/ai";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const ServiceCard = () => {
//   const [allTours, setTour] = useState([]);
//   useEffect(() => {
//     const getTours = async () => {
//       try {
//         const response = await axios.get("/tours");
//         console.log(response.data);
//         setTour(response.data);
//       } catch (err) {
//         console.log(err.message);
//       }
//     };
//     getTours();
//   }, []);
//   return (
//     <div className="bg-white ">
//       <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
//         {allTours.map((tours) => (
//           <div
//             key={tours._id}
//             className="group relative  rounded-t-3xl shadow-2xl rounded-b-xl border-2 "
//           >
//             <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-gray-200 lg:aspect-none group-hover:opacity-40 lg:h-80">
//               <img
//                 src={tours.img}
//                 alt="Tour"
//                 className="h-full w-full object-cover object-center rounded-3xl lg:h-full lg:w-full"
//               />
//             </div>
//             <div className="mt-4 flex justify-between p-3">
//               <h3 className="text-2xl font-bold text-gray-700">
//                 <Link to={`/tours/${tours._id}`}>
//                   <span
//                     aria-hidden="true"
//                     className="absolute inset-0 rounded-t-3xl "
//                   />
//                   {tours.name}
//                 </Link>
//                 <p className="text-lg font-medium text-gray-900">
//                   {tours.duration} days
//                 </p>
//               </h3>
//               {/* <div className=" flex flex-row mr-2 space-x-3">
//                 <p className="mt-1 text-lg text-gray-500 ">{tours.avgRating}</p>
//                 <AiFillStar className="text-xl mt-2 text-yellow-500 " />
//                 <p className="mt-1 text-lg">({tours.reviews.length})</p>
//               </div> */}
//             </div>
//             <div className="flex flex-row mr-2 space-x-3 justify-between">
//               <p className="text-sm text-left p-2 font-bold">
//                 From ${tours.price}
//               </p>
//               <button
//                 type="button"
//                 data-te-ripple-init
//                 data-te-ripple-color="light"
//                 class="mb-2 inline-block rounded bg-primary px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//                 onClick={console.log(tours._id)}
//               >
//                 <Link to={`/tours/${tours._id}`}>View Details</Link>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;




import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

const ServiceCard = () => {
  const [allTours, setTour] = useState([]);

  useEffect(() => {
    const getTours = async () => {
      try {
        const response = await axios.get("/tours");
        setTour(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getTours();
  }, []);

  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {allTours.map((tour) => (
          <div
            key={tour._id}
            className="group relative bg-white rounded-3xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative w-full h-64 overflow-hidden">
              <img
                src={tour.img}
                alt={tour.name}
                className="w-full h-full object-cover object-center transition duration-300 group-hover:opacity-80"
              />
            </div>

            {/* Content */}
         {/* Content */}
<div className="p-5 flex flex-col">
  <div className="mb-4">
    <h3 className="text-2xl font-bold text-gray-800 mb-1">
      <Link to={`/tours/${tour._id}`} className="hover:text-blue-600 transition">
        {tour.name}
      </Link>
    </h3>
    <p className="text-gray-600 mb-2">{tour.duration} days</p>
    <p className="text-gray-700 font-semibold mt-2">From Tk {tour.price}</p>
  </div>

  {/* Button */}
  <Link
    to={`/tours/${tour._id}`}
    className="mt-auto w-full text-center bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3 rounded-xl shadow-lg transition duration-300"
  >
    View Details
  </Link>
</div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
