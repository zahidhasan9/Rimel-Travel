
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
//         setTour(response.data);
//       } catch (err) {
//         console.log(err.message);
//       }
//     };
//     getTours();
//   }, []);


//   const user = JSON.parse(localStorage.getItem("user"));
// console.log(user);

//   return (
//     <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {allTours.map((tour) => (
//           <div
//             key={tour._id}
//             className="group relative bg-white rounded-3xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
//           >
//             {/* Image */}
//             <div className="relative w-full h-64 overflow-hidden">
//               <img
//                 src={tour.img}
//                 alt={tour.name}
//                 className="w-full h-full object-cover object-center transition duration-300 group-hover:opacity-80"
//               />
//             </div>

//             {/* Content */}
//          {/* Content */}
// <div className="p-5 flex flex-col">
//   <div className="mb-4">
//     <h3 className="text-2xl font-bold text-gray-800 mb-1">
//       <Link to={`/tours/${tour._id}`} className="hover:text-blue-600 transition">
//         {tour.name}
//       </Link>
//     </h3>
//     <p className="text-gray-600 mb-2">{tour.duration} days</p>
//     <p className="text-gray-700 font-semibold mt-2">From Tk {tour.price}</p>
//   </div>

//   <div className="mt-auto w-full flex items-center gap-3">

//   <Link
//     to={`/tours/${tour._id}`}
//     className="flex-1 text-center bg-gradient-to-r from-blue-500 to-blue-700 
//     hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3 
//     rounded-xl shadow-lg transition duration-300"
//   >
//     View Details
//   </Link>

//   <Link
//     to={`/tours/${tour._id}`}
//     className="flex-1 text-center bg-gradient-to-r from-green-500 to-green-700 
//     hover:from-green-600 hover:to-green-800 text-white font-semibold py-3 
//     rounded-xl shadow-lg transition duration-300"
//   >
//     Add to Wish
//   </Link>

// </div>
  
// </div>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ServiceCard = () => {
  const [allTours, setTour] = useState([]);
  const [showModal, setShowModal] = useState(false);

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

  const handleAddToWishlist = (tour) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user?._id) {
      return alert("Please login first!");
    }

    const existing = JSON.parse(localStorage.getItem("wishlist")) || [];

    const alreadyAdded = existing.some(
      (item) => item.tourId === tour._id && item.userId === user._id
    );

    if (alreadyAdded) {
      return alert("Already added to wishlist!");
    }

    const newItem = {
      userId: user._id,
      tourId: tour._id,
      name: tour.name,
      price: tour.price,
      img: tour.img,
      link:`/tours/${tour._id}`
    };

    const updatedList = [...existing, newItem];
    localStorage.setItem("wishlist", JSON.stringify(updatedList));

    // 🔥 Alert এর বদলে Modal দেখানো হবে
    setShowModal(true);
  };

  return (
    <>
      {/* ==== Main Service Card ==== */}
      <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {allTours.map((tour) => (
            <div
              key={tour._id}
              className="group relative bg-white rounded-3xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <img src={tour.img} alt={tour.name} className="w-full h-full object-cover" />
              </div>

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

                {/* Buttons */}
                <div className="mt-auto w-full flex items-center gap-3">
                  <Link
                    to={`/tours/${tour._id}`}
                    className="flex-1 text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-xl shadow-lg"
                  >
                    View Details
                  </Link>

                  <button
                    onClick={() => handleAddToWishlist(tour)}
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-700 text-white py-3 rounded-xl shadow-lg"
                  >
                    Add to Wish
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ==== Success Modal ==== */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white px-8 py-6 rounded-2xl shadow-xl transform transition-all scale-100">
            <h2 className="text-2xl font-bold text-green-600 text-center">
              Wishlist Added!
            </h2>
            <p className="text-gray-700 mt-2 text-center">
              Tour added to your wishlist successfully.
            </p>

            <div className="mt-5 flex justify-center">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceCard;
