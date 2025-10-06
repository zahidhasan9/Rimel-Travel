// import React, { useEffect, useState, useContext } from "react";
// import { useParams } from "react-router-dom";
// import HeroTour from "./HeroTour";
// import TourNav from "../../components/navbar/TourNav";
// import { AiFillStar } from "react-icons/ai";
// import { Stepper, initTE, Ripple, Input, Datepicker } from "tw-elements";
// import DaysShow from "../../components/Tour/DaysShow";
// import InclusionExclusion from "../../components/Tour/InclusionExclusion";
// import { AuthContext } from "../../context/authContext";
// import Swal from "sweetalert2";
// import axios from "axios";

// const TourDetails = () => {
//   const { id } = useParams();

//   const [firstName, setFname] = useState("");
//   const [lastName, setLname] = useState("");
//   const [date, setDate] = useState("");
//   const [phone, setPhone] = useState(0);
//   const [guestCount, setGuests] = useState("");

//   const [allTours, setTour] = useState([]);
//   useEffect(() => {
//     const getTours = async () => {
//       try {
//         const response = await axios.get(`/tours/${id}`);
//         console.log(response.data.data.oneTour);
//         setTour(response.data.data.oneTour);
//       } catch (err) {
//         console.log(err.message);
//       }
//     };
//     getTours();
//     initTE({ Stepper, initTE, Ripple, Input, Datepicker });
//   }, [id]);
//   //get email of current user
//   const { user } = useContext(AuthContext);
//   const currentUser = user.email;

//   const inputHandler = async (e) => {
//     e.preventDefault();

//     if (
//       firstName === "" ||
//       lastName === "" ||
//       date === "" ||
//       phone === "" ||
//       guestCount === ""
//     ) {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "missing required fields!",
//       });
//       return;
//     }

//     if (phone.length !== 10) {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "enter valid mobile number",
//       });
//       return;
//     }

//     if (guestCount > allTours.groupCount) {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: `This tour can have maximum of ${allTours.groupCount} members`,
//       });
//       return;
//     }
//     const tourReservation = {
//       currentUser,
//       firstName,
//       lastName,
//       date,
//       phone,
//       guestCount,
//     };

//     try {
//       const result = await Swal.fire({
//         title: "Do you want to Book this tour?",
//         showDenyButton: true,
//         showCancelButton: true,
//         confirmButtonText: "Book",
//         denyButtonText: `Don't Book`,
//       });

//       if (result.isConfirmed) {
//         const response = await axios.post(
//           "/tours/tourReservations",
//           tourReservation
//         );
//         Swal.fire(response.data.message, "", "success");
//       } else if (result.isDenied) {
//         Swal.fire("Tour Booking Cancelled", "", "error");
//       }
//     } catch (err) {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: err.message,
//       });
//     }
//   };

//   return (
//     <div>
//       {/* import upper section */}
//       <HeroTour />
//       <TourNav />
//       {/* details brief */}
//       <div className="mx-auto max-w-2xl px-4 py-10 sm:px-4 sm:py-15 lg:max-w-7xl lg:px-8">
//         {/* title */}
//         <div className="mb-20">
//           {/* Title */}
//           <p className="text-5xl font-bold ">{allTours.name}</p>
//         </div>

//         {/* brief */}
//         <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
//           <div>
//             <p className="text-3xl font-bold mb-6  text-gray-500">Category</p>
//             <p className="text-2xl mb-6">{allTours.category}</p>
//           </div>
//           <div>
//             <p className="text-3xl font-bold mb-6  text-gray-500">Duration</p>
//             <p className="text-2xl mb-6">{allTours.duration} days</p>
//           </div>
//           <div>
//             <p className="text-3xl font-bold mb-6  text-gray-500">Ranking</p>
//             <div className="flex flex-row mr-2 space-x-2">
//               <p className="text-2xl mb-6">{}</p>
//               <AiFillStar className="text-3xl text-yellow-500 " />
//             </div>
//           </div>
//           <div>
//             <p className="text-3xl font-bold mb-6  text-gray-500">Group Size</p>
//             <p className="text-2xl mb-6">{allTours.groupCount}</p>
//           </div>
//           <div>
//             <p className="text-3xl font-bold mb-6  text-gray-500">Languages</p>
//             <p className="text-2xl mb-6">{allTours.languages}</p>
//           </div>
//         </div>
//         {/* image and details brief */}
//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
//           {/* image left */}
//           <div className="">
//             <div>
//               <img
//                 src={allTours.img}
//                 alt={""}
//                 class="h-auto max-w-full rounded-3xl"
//               />
//             </div>
//             {/* below map */}
//             <div className="mt-5 grid grid-cols-2 gap-2">
//               {/* left */}
//               <div>
//                 <img
//                   src="https://firebasestorage.googleapis.com/v0/b/travely-7264c.appspot.com/o/route1.png?alt=media&token=99974a15-ffab-4900-b805-5da493d16d73"
//                   alt=""
//                 />
//               </div>
//               {/* right */}
//               <div className="flex flex-col gap-6 ">
//                 {/* Download Brochure */}
//                 <button
//                   type="button"
//                   data-te-ripple-init
//                   data-te-ripple-color="light"
//                   class="flex items-center rounded-xl bg-black px-6 pb-2 pt-2.5 text-md font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//                 >
//                   <svg
//                     fill="currentColor"
//                     viewBox="0 0 16 16"
//                     class=" h-4 w-4 mr-5"
//                   >
//                     <path d="M.5 9.9a.5.5 0 01.5.5v2.5a1 1 0 001 1h12a1 1 0 001-1v-2.5a.5.5 0 011 0v2.5a2 2 0 01-2 2H2a2 2 0 01-2-2v-2.5a.5.5 0 01.5-.5z" />
//                     <path d="M7.646 11.854a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V1.5a.5.5 0 00-1 0v8.793L5.354 8.146a.5.5 0 10-.708.708l3 3z" />
//                   </svg>
//                   Download Brochure
//                 </button>

//                 <button
//                   type="button"
//                   data-te-ripple-init
//                   data-te-ripple-color="light"
//                   class="flex items-center rounded-xl bg-black px-6 pb-2 pt-2.5 text-md font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//                 >
//                   <svg
//                     fill="currentColor"
//                     viewBox="0 0 16 16"
//                     class=" h-4 w-4 mr-5"
//                   >
//                     <path d="M16 8A8 8 0 110 8a8 8 0 0116 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 00.25.246h.811a.25.25 0 00.25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 00.241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
//                   </svg>
//                   Ask A Question
//                 </button>

//                 <button
//                   type="button"
//                   data-te-ripple-init
//                   data-te-ripple-color="light"
//                   class="flex items-center rounded-xl bg-black px-6 pb-2 pt-2.5 text-md font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//                 >
//                   <svg fill="none" viewBox="0 0 16 16" class=" h-4 w-4 mr-5">
//                     <path
//                       fill="currentColor"
//                       d="M2 8a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM2 12a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM3 15a1 1 0 100 2h12a1 1 0 100-2H3z"
//                     />
//                   </svg>
//                   Check FAQ
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* details -right*/}
//           <div className="shadow-2xl rounded-xl border-dotted border-2 border-sky-500 grid grid-cols-1 px-4">
//             <div>
//               {/* first row */}
//               <div className="grid grid-cols-2">
//                 {/* left col */}
//                 <div>
//                   <p className="text-lg p-2 font-bold ">Starting From</p>
//                   <p className="p-3 ml-10 text-blue-600  text-5xl">
//                     <span className="font-semibold">${allTours.price}</span>
//                     <span className="text-sm text-black">/Per Person</span>
//                   </p>
//                 </div>
//                 {/* right col */}
//                 <div className="flex flex-row-reverse space-x-2 float-right pt-3 ">
//                   {/* <p className="text-lg">({reviews.length} Reviews)</p> */}
//                   <AiFillStar className="text-2xl text-yellow-500 " />
//                   <p className="text-lg mb-6">{}</p>
//                 </div>
//               </div>

//               {/* second row */}
//               <div className="flex flex-row pl-10 pt-2 pr-2 space-x-3 mb-4">
//                 <p className="text-xl font-bold">Cities:</p>
//                 <p className="text-xl  mb-0   text-blue-500">
//                   {allTours.cities}
//                 </p>
//               </div>

//               {/* third row */}
//               <div className="text-xl p-2 grid grid-cols-2">
//                 <div>
//                   <span className="font-bold">Tour ID :</span> T0027
//                 </div>
//                 <div>
//                   <button
//                     type="button"
//                     class=" w-full rounded-xl bg-[#FE4D42] px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//                   >
//                     Customize Your Tour
//                   </button>
//                 </div>
//               </div>
//             </div>
//             {/* booking form */}
//             <div className="px-4 mb-6 mt-2">
//               <p className="text-3xl mb-10 text-center">Booking Details</p>
//               <div className="flex justify-center items-center">
//                 <div class=" block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
//                   <form>
//                     <div class="grid grid-cols-2 gap-4">
//                       <div class="relative mb-6" data-te-input-wrapper-init>
//                         <input
//                           type="text"
//                           class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//                           id="firstName"
//                           aria-describedby="emailHelp123"
//                           placeholder="First name"
//                           onChange={(e) => {
//                             setFname(e.target.value);
//                           }}
//                         />
//                         <label
//                           for="firstName"
//                           class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
//                         >
//                           First name
//                         </label>
//                       </div>
//                       <div class="relative mb-6" data-te-input-wrapper-init>
//                         <input
//                           type="text"
//                           class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//                           id="lastName"
//                           aria-describedby="emailHelp124"
//                           placeholder="Last name"
//                           onChange={(e) => {
//                             setLname(e.target.value);
//                           }}
//                         />
//                         <label
//                           for="lastName"
//                           class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
//                         >
//                           Last name
//                         </label>
//                       </div>
//                     </div>
//                     {/* date */}
//                     <div
//                       class="relative mb-3"
//                       id="datepicker-disable-past"
//                       data-te-input-wrapper-init
//                     >
//                       <input
//                         type="date"
//                         id="date"
//                         min={new Date().toISOString().split("T")[0]}
//                         class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//                         placeholder="Select a date"
//                         onChange={(e) => {
//                           setDate(e.target.value);
//                         }}
//                       />
//                       <label
//                         for="date"
//                         class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
//                       >
//                         Select a date
//                       </label>
//                     </div>

//                     {/* phone number */}
//                     <div class="grid grid-cols-2 gap-4">
//                       <div class="relative mb-6" data-te-input-wrapper-init>
//                         <input
//                           type="tel"
//                           class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//                           id="phone"
//                           placeholder="First name"
//                           onChange={(e) => {
//                             setPhone(e.target.value);
//                           }}
//                         />
//                         <label
//                           for="phone"
//                           class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
//                         >
//                           Phone Number
//                         </label>
//                       </div>
//                       <div class="relative mb-6" data-te-input-wrapper-init>
//                         <input
//                           type="number"
//                           class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//                           id="countGuest"
//                           placeholder="Last name"
//                           onChange={(e) => {
//                             setGuests(e.target.value);
//                           }}
//                         />
//                         <label
//                           for="countGuest"
//                           class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
//                         >
//                           No of Guests
//                         </label>
//                       </div>
//                     </div>
//                     <button
//                       type="submit"
//                       class="inline-block w-full rounded-xl bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
//                       data-te-ripple-init
//                       data-te-ripple-color="light"
//                       onClick={inputHandler}
//                     >
//                       Book Now
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mx-auto max-w-2xl px-4 py-10 sm:px-4 sm:py-15 lg:max-w-7xl lg:px-8">
//         <h1 className="text-5xl  mb-11">Description</h1>
//         <p className="text-2xl">{allTours.description}</p>
//       </div>
//       <div className="mx-auto max-w-2xl px-4 py-10 sm:px-4 sm:py-15 lg:max-w-7xl lg:px-8">
//         <h1 className="text-5xl  mb-11">Introduction</h1>
//         <p className="text-2xl">{allTours.introduction}</p>
//       </div>
//       {/* stepper */}
//       <div className="mx-auto max-w-2xl px-4 py-10 sm:px-4 sm:py-15 lg:max-w-7xl lg:px-8">
//         <DaysShow />
//       </div>
//       {/* inclustion exclution */}
//       <div className="mx-auto max-w-2xl px-4 py-10 sm:px-4 sm:py-15 lg:max-w-7xl lg:px-8">
//         <InclusionExclusion />
//       </div>
//     </div>
//   );
// };

// export default TourDetails;






import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import HeroTour from "./HeroTour";
import TourNav from "../../components/navbar/TourNav";
import { AiFillStar } from "react-icons/ai";
import { Stepper, initTE, Ripple, Input, Datepicker } from "tw-elements";
import DaysShow from "../../components/Tour/DaysShow";
import InclusionExclusion from "../../components/Tour/InclusionExclusion";
import { AuthContext } from "../../context/authContext";
import Swal from "sweetalert2";
import axios from "axios";

const TourDetails = () => {
  const { id } = useParams();

  // Form State
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [guestCount, setGuests] = useState("");

  const [allTours, setTour] = useState({});
  const { user } = useContext(AuthContext);
  const currentUser = user?.email || "";

  useEffect(() => {
    const getTours = async () => {
      try {
        const response = await axios.get(`/tours/${id}`);
        setTour(response.data.data.oneTour);
      } catch (err) {
        console.log(err.message);
      }
    };
    getTours();
    initTE({ Stepper, Ripple, Input, Datepicker });
  }, [id]);

  // Form Submit Handler
  const inputHandler = async (e) => {
    e.preventDefault();

    // Validation
    if (!firstName || !lastName || !date || !phone || !guestCount) {
      Swal.fire("Oops...", "Missing required fields!", "error");
      return;
    }

    if (phone.length !== 10) {
      Swal.fire("Oops...", "Enter a valid 10-digit mobile number", "error");
      return;
    }

    if (guestCount > allTours.groupCount) {
      Swal.fire(
        "Oops...",
        `This tour can have a maximum of ${allTours.groupCount} members`,
        "error"
      );
      return;
    }

    const tourReservation = {
      currentUser,
      firstName,
      lastName,
      date,
      phone,
      guestCount,
    };

    try {
      const result = await Swal.fire({
        title: "Do you want to Book this tour?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Book",
        denyButtonText: `Don't Book`,
      });

      if (result.isConfirmed) {
        const response = await axios.post(
          "/tours/tourReservations",
          tourReservation
        );
        Swal.fire(response.data.message, "", "success");
      } else if (result.isDenied) {
        Swal.fire("Tour Booking Cancelled", "", "error");
      }
    } catch (err) {
      Swal.fire("Oops...", err.message, "error");
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <HeroTour />
      <TourNav />

      {/* Tour Header */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-20">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          {allTours.name}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
            <p className="text-gray-400 font-semibold mb-2">Category</p>
            <p className="text-2xl font-bold">{allTours.category}</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
            <p className="text-gray-400 font-semibold mb-2">Duration</p>
            <p className="text-2xl font-bold">{allTours.duration} Days</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
            <p className="text-gray-400 font-semibold mb-2">Ranking</p>
            <div className="flex justify-center items-center space-x-2">
              <p className="text-2xl font-bold">{allTours.rating}</p>
              <AiFillStar className="text-yellow-400 text-3xl" />
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
            <p className="text-gray-400 font-semibold mb-2">Group Size</p>
            <p className="text-2xl font-bold">{allTours.groupCount}</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
            <p className="text-gray-400 font-semibold mb-2">Languages</p>
            <p className="text-2xl font-bold">{allTours.languages}</p>
          </div>
        </div>
      </div>

      {/* Image & Booking */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:flex lg:space-x-12">
        {/* Images */}
        <div className="lg:w-1/2 space-y-6">
          <img
            src={allTours.img}
            alt={allTours.name}
            className="rounded-3xl shadow-lg w-full object-cover hover:scale-105 transition-transform"
          />
          <div className="grid grid-cols-2 gap-4">
            <img
              src={'https://www.shutterstock.com/image-vector/bangladesh-map-all-divisions-districts-600nw-2140514357.jpg'}
              alt="Route"
              className="rounded-xl shadow-md hover:scale-105 transition-transform"
            />
            <div className="flex flex-col gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition">
                Download Brochure
              </button>
              <button className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition">
                Ask A Question
              </button>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition">
                Check FAQ
              </button>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="lg:w-1/2 bg-white rounded-3xl shadow-2xl p-8 mt-10 lg:mt-0">
          <h2 className="text-3xl font-bold mb-6 text-center">Book Your Tour</h2>
          <p className="text-xl mb-4">
            Starting from{" "}
            <span className="text-blue-600 font-extrabold text-4xl">
              ${allTours.price}
            </span>
            /Person
          </p>
          <p className="text-lg mb-4">
            Cities:{" "}
            <span className="text-blue-500 font-semibold">{allTours.cities}</span>
          </p>
          <form className="space-y-4" onSubmit={inputHandler}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border rounded-xl p-3 w-full focus:ring-2 focus:ring-blue-400"
                value={firstName}
                onChange={(e) => setFname(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border rounded-xl p-3 w-full focus:ring-2 focus:ring-blue-400"
                value={lastName}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className="border rounded-xl p-3 w-full focus:ring-2 focus:ring-blue-400"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="border rounded-xl p-3 w-full focus:ring-2 focus:ring-blue-400"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="number"
                placeholder="No of Guests"
                className="border rounded-xl p-3 w-full focus:ring-2 focus:ring-blue-400"
                value={guestCount}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold shadow hover:bg-blue-700 transition"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>

      {/* Description & Introduction */}
      <div className="mx-auto max-w-7xl px-6 py-12 space-y-12">
        <div>
          <h2 className="text-4xl font-bold mb-4">Description</h2>
          <p className="text-xl text-gray-700">{allTours.description}</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-4">Introduction</h2>
          <p className="text-xl text-gray-700">{allTours.introduction}</p>
        </div>
      </div>

      {/* Stepper & Inclusion */}
      <div className="mx-auto max-w-7xl px-6 py-12 space-y-12">
        <DaysShow />
        <InclusionExclusion />
      </div>
    </div>
  );
};

export default TourDetails;
