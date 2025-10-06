// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { Link } from "react-router-dom";
// import { AiOutlineRight } from "react-icons/ai";
// import TourNav from "../../components/navbar/TourNav";
// import axios from "axios";

// const image = {
//   backgroundImage:
//     "url('https://i.pinimg.com/736x/a8/c5/b0/a8c5b0ba027fb79a93176f80bd8e31e1.jpg')",
//   height: "300px",
//   backgroundPosition: "50%",
// };

// const SerachResults = () => {
//   const { destination, duration, maxsize } = useParams();

//   const [loading, setLoading] = useState(true);
//   const [filteredTours, setTour] = useState([]);
//   useEffect(() => {
//     const getTours = async () => {
//       try {
//         const response = await axios.get("/tours");
//         const tours = response.data.filter((tour) => {
//           return (
//             tour.cities.split(",").includes(destination) ||
//             tour.duration == duration ||
//             tour.groupCount == maxsize
//           );
//         });
//         console.log(tours);
//         setTour(tours);
//       } catch (err) {
//         console.log(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getTours();
//   }, []);
//   console.log("filtered tours:", filteredTours);
//   return (
//     // <!-- Container for demo purpose -->
//     <div>
//       <div className="">
//         <div
//           class="relative overflow-hidden bg-no-repeat bg-cover "
//           style={image}
//         >
//           <div class="flex h-full items-center justify-center text-center">
//             <div>
//               <h2
//                 class="mb-5  text-6xl font-bold text-white "
//                 style={{
//                   fontFamily: "Poppins, sans-serif",
//                   fontWeight: "bolder",
//                 }}
//               >
//                 Search Results
//               </h2>
//               <div>
//                 <div className="mt-12 w-1/2 mr-auto ml-auto">
//                   <h4
//                     class="mt-5 mb-6 text-xl  uppercase animate-bounce text-black text-center"
//                     style={{
//                       fontFamily: "Poppins, sans-serif",
//                       fontWeight: "normal",
//                       border: "solid 1px  white",
//                       textShadow: "3px 1px black",
//                     }}
//                   >
//                     an island awaits you <br />
//                     Discover sri Lanka
//                   </h4>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Navigated menu start*/}
//       <nav class="bg-grey-light w-full rounded-md pl-20 pt-10">
//         <ol class="list-reset flex">
//           <li>
//             <Link
//               to={"/"}
//               class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <AiOutlineRight className="mt-1 mx-2" />
//           </li>
//           <li>
//             <Link
//               to={"#"}
//               class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
//             >
//               Tour Packages
//             </Link>
//           </li>
//           <li>
//             <AiOutlineRight className="mt-1 mx-2" />
//           </li>
//           <li class="text-neutral-500 dark:text-neutral-400">
//             Explore Sri Lanka
//           </li>
//         </ol>
//       </nav>
//       {/* Navigated menu end*/}
//       <TourNav />

//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <h1 className="text-4xl mb-10 ml-2">
//           Results Found : {filteredTours.length}
//         </h1>
//         {loading ? (
//           <div className="text-center text-lg">
//             <div
//               class="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
//               role="status"
//             >
//               <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
//                 Loading...
//               </span>
//             </div>
//           </div>
//         ) : (
//           <div className="bg-white ">
//             {filteredTours.length !== 0 ? (
//               <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
//                 {filteredTours.map((tours) => (
//                   <div
//                     key={tours._id}
//                     className="group relative  rounded-t-3xl shadow-2xl rounded-b-xl border-2 "
//                   >
//                     <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-gray-200 lg:aspect-none group-hover:opacity-40 lg:h-80">
//                       <img
//                         src={tours.img}
//                         alt="Tour"
//                         className="h-full w-full object-cover object-center rounded-3xl lg:h-full lg:w-full"
//                       />
//                     </div>
//                     <div className="mt-4 flex justify-between p-3">
//                       <h3 className="text-2xl font-bold text-gray-700">
//                         <Link to={`/tours/${tours._id}`}>
//                           <span
//                             aria-hidden="true"
//                             className="absolute inset-0 rounded-t-3xl "
//                           />
//                           {tours.name}
//                         </Link>
//                         <p className="text-lg font-medium text-gray-900">
//                           {tours.duration} days
//                         </p>
//                       </h3>
//                       {/* <div className=" flex flex-row mr-2 space-x-3">
//                 <p className="mt-1 text-lg text-gray-500 ">{tours.avgRating}</p>
//                 <AiFillStar className="text-xl mt-2 text-yellow-500 " />
//                 <p className="mt-1 text-lg">({tours.reviews.length})</p>
//               </div> */}
//                     </div>
//                     <div className="flex flex-row mr-2 space-x-3 justify-between">
//                       <p className="text-sm text-left p-2 font-bold">
//                         From ${tours.price}
//                       </p>
//                       <button
//                         type="button"
//                         data-te-ripple-init
//                         data-te-ripple-color="light"
//                         class="mb-2 inline-block rounded bg-primary px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//                         onClick={console.log(tours._id)}
//                       >
//                         <Link to={`/tours/${tours._id}`}>View Details</Link>
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center text-lg">No Matching Items Found</div>
//             )}
//           </div>
//         )}
//         <div className="flex justify-center items-center"></div>
//       </div>
//     </div>
//     // <!-- Container for demo purpose -->
//   );
// };

// export default SerachResults;












import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import TourNav from "../../components/navbar/TourNav";
import axios from "axios";

const headerStyle = {
  backgroundImage:
    "url('https://i.pinimg.com/736x/a8/c5/b0/a8c5b0ba027fb79a93176f80bd8e31e1.jpg')",
  height: "300px",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const SerachResults = () => {
  const { destination, duration, maxsize } = useParams();
  const [loading, setLoading] = useState(true);
  const [filteredTours, setTour] = useState([]);

  useEffect(() => {
    const getTours = async () => {
      try {
        const response = await axios.get("/tours");
        const tours = response.data.filter((tour) => {
          return (
            tour.cities.split(",").includes(destination) ||
            tour.duration == duration ||
            tour.groupCount == maxsize
          );
        });
        setTour(tours);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    getTours();
  }, [destination, duration, maxsize]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="relative">
        <div className="h-72 w-full" style={headerStyle}>
          <div className="flex h-full items-center justify-center text-center bg-black/40">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
                Search Results
              </h2>
              <p className="mt-6 text-xl md:text-2xl font-medium text-white animate-bounce drop-shadow-md">
                An island awaits you <br />
                Discover Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="w-full bg-gradient-to-r from-green-100 via-blue-50 to-teal-100 py-6 shadow-sm">
         <div className="max-w-7xl mx-auto px-6 flex items-center">
           <ol className="flex flex-wrap items-center text-gray-700 text-lg">
             <li>
               <Link
                 to="/"
                 className="text-green-700 font-semibold hover:text-green-900 transition-all duration-200"
               >
                 🏠 Home
               </Link>
             </li>
   
             <li>
               <AiOutlineRight className="mx-2 text-gray-400" />
             </li>
   
             <li>
               <Link
                 to="/tours"
                 className="text-blue-600 font-semibold hover:text-blue-800 transition-all duration-200"
               >
                 Tour Packages
               </Link>
             </li>
   
             <li>
               <AiOutlineRight className="mx-2 text-gray-400" />
             </li>
   
             <li className="text-gray-500 font-semibold">
               Explore Bangladesh
             </li>
           </ol>
         </div>
       </nav>

      <TourNav />

      {/* Results */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
          Results Found: {filteredTours.length}
        </h1>

        {loading ? (
          <div className="text-center text-lg text-gray-600">Loading...</div>
        ) : filteredTours.length === 0 ? (
          <div className="text-center text-lg text-gray-600">
            No Matching Items Found
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <div
                key={tour._id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300"
              >
                <div className="overflow-hidden rounded-t-3xl">
                  <img
                    src={tour.img}
                    alt={tour.name}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    <Link to={`/tours/${tour._id}`}>{tour.name}</Link>
                  </h3>
                  <p className="text-gray-500 font-medium mb-4">
                    Duration: {tour.duration} days
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-blue-600">
                      From ${tour.price}
                    </span>
                    <Link
                      to={`/tours/${tour._id}`}
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-medium shadow hover:scale-105 transition transform"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SerachResults;
