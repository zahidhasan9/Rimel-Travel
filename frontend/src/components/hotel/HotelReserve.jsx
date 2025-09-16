// import React, { useContext, useEffect, useState } from "react";
// import { FaWindowClose } from "react-icons/fa";
// import useFetch from "../../hooks/useFetch";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../context/authContext";

// const HotelReserve = ({ setOpen, hotelId, checkInDate, checkOutDate, date_difference }) => {
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [selectedRooms, setSelectedRooms] = useState([]);
//   const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
//   const [totalPrice, setTotalPrice] = useState(0);

//   // Fallback values
//   const userName = user?.name || "Guest";
//   const totalDays = date_difference || 1;

//   // ✅ Date range generator
//   const getDatesInRange = (startDate, endDate) => {
//     const start = new Date(startDate);
//     const end = new Date(endDate);

//     const date = new Date(start.getTime());
//     const dates = [];

//     while (date <= end) {
//       dates.push(new Date(date).getTime());
//       date.setDate(date.getDate() + 1);
//     }
//     return dates;
//   };

//   const alldates = getDatesInRange(checkInDate, checkOutDate);

//   // ✅ Room availability checker
//   const isAvailable = (roomNumber) => {
//     const isFound = roomNumber.unavailableDates.some((date) =>
//       alldates.includes(new Date(date).getTime())
//     );
//     return !isFound;
//   };

//   // ✅ Handle checkbox select
//   const handleSelect = (e) => {
//     const checked = e.target.checked;
//     const value = e.target.value;
//     setSelectedRooms((prev) =>
//       checked ? [...prev, value] : prev.filter((item) => item !== value)
//     );
//   };

//   // ✅ Price calculation
//   useEffect(() => {
//     if (data?.length > 0 && selectedRooms.length > 0) {
//       const price = data.reduce((acc, item) => {
//         const roomCount = item.roomNumbers.filter((r) =>
//           selectedRooms.includes(r._id)
//         ).length;
//         return acc + roomCount * item.price;
//       }, 0);
//       setTotalPrice(price * totalDays);
//     } else {
//       setTotalPrice(0);
//     }
//   }, [selectedRooms, data, totalDays]);

//   // ✅ Save reservation to DB
//   const sendData = async () => {
//     const newReservation = {
//       hotelId,
//       checkInDate,
//       checkOutDate,
//       userName,
//       totalPrice,
//       totalDays,
//     };

//     try {
//       await axios.post(`/hotelreservation/reservation`, newReservation);
//       Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: "Rooms reserved successfully!",
//         showConfirmButton: false,
//         timer: 2000,
//       });
//     } catch (err) {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Something went wrong!",
//         footer: err?.message || "",
//       });
//     }
//   };

//   // ✅ Final Reserve Click
//   const handleClick = async () => {
//     try {
//       await Promise.all(
//         selectedRooms.map(async (roomId) => {
//           await axios.put(`/rooms/availability/${roomId}`, { dates: alldates });
//         })
//       );

//       await sendData();
//       setOpen(false);
//       navigate("/hotelhome");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center">
//       <div className="bg-white rounded-md p-8 max-w-md w-full h-[600px] overflow-y-auto">
//         {/* Close Button */}
//         <div className="flex justify-end">
//           <FaWindowClose
//             className="text-gray-600 text-2xl cursor-pointer hover:text-red-500 transition-all duration-200"
//             onClick={() => setOpen(false)}
//           />
//         </div>

//         <div className="font-bold text-xl mb-4">Select your rooms:</div>

//         {loading && <p className="text-blue-500">Loading rooms...</p>}
//         {error && <p className="text-red-500">Failed to load rooms!</p>}

//         {!loading &&
//           data?.map((item) => (
//             <div className="mb-6" key={item._id}>
//               <div className="font-bold mb-2">{item.title}</div>
//               <div className="text-gray-600 mb-4">{item.description}</div>

//               <div className="flex items-center mb-4">
//                 <div className="font-semibold mr-2">Max people:</div>
//                 <div className="text-gray-600">{item.maxPeople}</div>
//               </div>

//               <div className="flex items-center mb-4">
//                 <div className="font-semibold mr-2">Price per day:</div>
//                 <div className="text-gray-600">Rs.{item.price}</div>
//               </div>

//               <div className="grid grid-cols-3 gap-4">
//                 {item.roomNumbers.map((roomNumber) => (
//                   <div
//                     className="flex flex-col items-center"
//                     key={roomNumber._id}
//                   >
//                     <div className="font-bold mb-2">{roomNumber.number}</div>
//                     <div className="flex items-center">
//                       <input
//                         type="checkbox"
//                         value={roomNumber._id}
//                         onChange={handleSelect}
//                         disabled={!isAvailable(roomNumber)}
//                         className="mr-2 cursor-pointer"
//                       />
//                       <div
//                         className={
//                           isAvailable(roomNumber)
//                             ? "text-green-600 font-semibold"
//                             : "text-red-600 font-semibold"
//                         }
//                       >
//                         {isAvailable(roomNumber) ? "Available" : "Unavailable"}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}

//         {/* Total Payment */}
//         <div className="flex justify-between items-center mt-6">
//           <div className="font-bold text-lg">Total Payment: Rs.{totalPrice}</div>
//         </div>

//         {/* Reserve Button */}
//         <button
//           onClick={handleClick}
//           className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-200 mt-6 disabled:bg-gray-400"
//           disabled={selectedRooms.length === 0}
//         >
//           Reserve now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HotelReserve;





// import React, { useContext, useEffect, useState } from 'react'
// import { FaFontAwesome, FaMinusCircle, FaWind, FaWindowClose } from 'react-icons/fa'
// import useFetch from '../../hooks/useFetch'
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { AuthContext } from '../../context/authContext';


// const HotelReserve = ({setOpen,hotelId,checkInDate,checkOutDate,date_difference}) => {

//   const { user } = useContext(AuthContext);
//   console.log(user.name);

//   const navigate = useNavigate();
//   const [selectedRooms, setSelectedRooms] = useState([]);
//   const {data,loading,error} =useFetch(`/hotels/room/${hotelId}`)
  
//   console.log(data)
//   const { data: HotelData } = useFetch(`http://localhost:5000/api/hotels/find/${hotelId}`);
  
//   const [totalPrice, setTotalPrice] = useState(0);
//   const hotelName=HotelData.name;
//   const phone =user.mobile;
//   const userName=user.name;
//   const totalDays=date_difference;

//   useEffect(() => {
//     console.log("hehe1")
//     if (data.length > 0) {
//       let price = 0;
//       data.forEach((item) => {
//         item.roomNumbers.forEach((roomNumber) => {
//           if (selectedRooms.includes(roomNumber._id)) {
//             console.log( item.price)
//             price += item.price;
//           }
//         });
//       });
//       setTotalPrice(price * date_difference);
//     }
//   }, [selectedRooms, data, date_difference]);

  


   
      
      
   
  
//   const getDatesInRange = (startDate, endDate) => {
//     const start = new Date(startDate);
//     const end = new Date(endDate);

//     const date = new Date(start.getTime());

//     const dates = [];

//     while (date <= end) {
//       dates.push(new Date(date).getTime());
//       date.setDate(date.getDate() + 1);
//     }
//     return dates;
//   };


//   const alldates = getDatesInRange(checkInDate,checkOutDate );


//   const isAvailable = (roomNumber) => {
//     const isFound = roomNumber.unavailableDates.some((date) =>
//       alldates.includes(new Date(date).getTime())
//     );

//     return !isFound;
//   };

//   const handleSelect = (e) => {
//     const checked = e.target.checked;
//     const value = e.target.value;
//     setSelectedRooms(
//       checked
//         ? [...selectedRooms, value]
//         : selectedRooms.filter((item) => item !== value)
//     );
//   };
//   console.log(selectedRooms)


//   function sendData() {

//     const newReservation = {
//       hotelName,
//       checkInDate,
//       checkOutDate,
//       userName,
//       totalPrice,
//       totalDays,
//       phone,
//       roomIds: selectedRooms,
//     };

//     axios
//       .post(`/hotelreservation/reservation`, newReservation)

//       .then(() => {
//         Swal.fire({
//           position: 'top-end',
//           icon: 'success',
//           title: 'Rooms reserved Successfully',
//           showConfirmButton: false,
//           timer: 2000
//         }) 
//       })
//       .catch((err) => {
//         Swal.fire({
//           icon: 'error',
//           title: 'Oops...',
//           text: 'Something went wrong!',
//           footer: err 
//         })
//       });
     
//   }

  

//   const handleClick = async () => {
//     try {
//       await Promise.all(
//         selectedRooms.map((roomId) => {
//           const res = axios.put(`/rooms/availability/${roomId}`, {
//             dates: alldates,
//           });
//           return res.data;
//         })
//       );

//       sendData();
//       setOpen(false);
//       navigate("/hotelhome");
//     } catch (err) {}
//   };

//   return (
//     <div class="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center">
//   <div class="bg-white rounded-md p-8 max-w-md w-full h-[600px] overflow-y-auto">
//     <div class="flex justify-end">
//       <FaWindowClose
//         class="text-gray-600 text-2xl cursor-pointer hover:text-red-500 transition-all duration-200"
//         onClick={() => setOpen(false)}
//       />
//     </div>
//     <div class="font-bold text-xl mb-4">Select your rooms:</div>
//     {data && data.length > 0 ? (
//   data.map((item) => (
//     <div className="mb-6" key={item._id}>
//       <div className="font-bold mb-2">{item?.title}</div>
//       <div className="text-gray-600 mb-4">{item?.description}</div>
//       <div className="flex items-center mb-4">
//         <div className="font-semibold mr-2">Max people:</div>
//         <div className="text-gray-600">{item?.maxPeople}</div>
//       </div>

//       <div className="flex items-center mb-4">
//         <div className="font-semibold mr-2">Price per day:</div>
//         <div className="text-gray-600">{item?.price}</div>
//       </div>
//       <div className="grid grid-cols-3 gap-4">
//         {item?.roomNumbers?.map((roomNumber) => (
//           <div className="flex flex-col items-center" key={roomNumber?.number}>
//             <div className="font-bold mb-2">{roomNumber?.number}</div>
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 value={roomNumber?._id}
//                 onChange={handleSelect}
//                 disabled={!isAvailable(roomNumber)}
//                 className="mr-2 cursor-pointer"
//               />
//               <div className={isAvailable(roomNumber) ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
//                 {isAvailable(roomNumber) ? "Available" : "Unavailable"}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   ))
// ) : (
//   <p className="text-gray-500">No rooms found.</p>
// )}

//     <div class="flex justify-between items-center mt-6">
//       <div class="font-bold text-lg">Total Payment: Rs.{totalPrice}</div>
//       <div class="text-xl font-bold text-green-600"></div>
//     </div>
//     <button
//       onClick={handleClick}
//       class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-200 mt-6"
//       disabled={selectedRooms.length === 0}
//     >
//       Reserve now
//     </button>
//   </div>
// </div>

//     );
    
    

// };

// export default HotelReserve




import React, { useContext, useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/authContext";

const HotelReserve = ({ setOpen, hotelId, checkInDate, checkOutDate, date_difference }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [selectedRooms, setSelectedRooms] = useState([]); // ✅ roomIds রাখবে
  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  const { data: HotelData } = useFetch(`/hotels/find/${hotelId}`);

  const [totalPrice, setTotalPrice] = useState(0);

  const hotelName = HotelData?.name || "Unknown Hotel";
  const phone = user?.mobile || "";
  const userName = user?.name || "Guest";
  const totalDays = date_difference || 1;

  // ✅ Date range generator
  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());

    const dates = [];
    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };

  const alldates = getDatesInRange(checkInDate, checkOutDate);

  // ✅ Room availability checker
  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  // ✅ Checkbox handler
  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value; // roomId (_id)

    setSelectedRooms((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  // ✅ Price calculation
  useEffect(() => {
    if (data?.length > 0 && selectedRooms.length > 0) {
      const price = data.reduce((acc, item) => {
        const roomCount = item.roomNumbers.filter((r) =>
          selectedRooms.includes(r._id)
        ).length;
        return acc + roomCount * item.price;
      }, 0);
      setTotalPrice(price * totalDays);
    } else {
      setTotalPrice(0);
    }
  }, [selectedRooms, data, totalDays]);

  // ✅ Save reservation
  const sendData = async () => {
    const newReservation = {
      hotelId,
      hotelName,
      checkInDate,
      checkOutDate,
      userName,
      totalPrice,
      totalDays,
      phone,
      roomIds: selectedRooms, // ✅ roomIds backend এ যাবে
    };

    try {
      await axios.post(`/hotelreservation/reservation`, newReservation);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Rooms reserved successfully!",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: err?.message || "",
      });
    }
  };

  // ✅ Reserve button click
  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map(async (roomId) => {
          await axios.put(`/rooms/availability/${roomId}`, { dates: alldates });
        })
      );

      await sendData();
      setOpen(false);
      navigate("/hotelhome");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-md p-8 max-w-md w-full h-[600px] overflow-y-auto">
        <div className="flex justify-end">
          <FaWindowClose
            className="text-gray-600 text-2xl cursor-pointer hover:text-red-500 transition-all duration-200"
            onClick={() => setOpen(false)}
          />
        </div>
        <div className="font-bold text-xl mb-4">Select your rooms:</div>

        {loading && <p className="text-blue-500">Loading rooms...</p>}
        {error && <p className="text-red-500">Failed to load rooms!</p>}

        {data?.length > 0 ? (
          data.map((item) => (
            <div className="mb-6" key={item._id}>
              <div className="font-bold mb-2">{item.title}</div>
              <div className="text-gray-600 mb-4">{item.description}</div>

              <div className="flex items-center mb-4">
                <div className="font-semibold mr-2">Max people:</div>
                <div className="text-gray-600">{item.maxPeople}</div>
              </div>

              <div className="flex items-center mb-4">
                <div className="font-semibold mr-2">Price per day:</div>
                <div className="text-gray-600">Rs.{item.price}</div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {item.roomNumbers.map((roomNumber) => (
                  <div className="flex flex-col items-center" key={roomNumber._id}>
                    <div className="font-bold mb-2">{roomNumber.number}</div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        value={roomNumber._id}
                        onChange={handleSelect}
                        disabled={!isAvailable(roomNumber)}
                        className="mr-2 cursor-pointer"
                      />
                      <div
                        className={
                          isAvailable(roomNumber)
                            ? "text-green-600 font-semibold"
                            : "text-red-600 font-semibold"
                        }
                      >
                        {isAvailable(roomNumber) ? "Available" : "Unavailable"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No rooms found.</p>
        )}

        {/* Total Payment */}
        <div className="flex justify-between items-center mt-6">
          <div className="font-bold text-lg">Total Payment: Rs.{totalPrice}</div>
        </div>

        <button
          onClick={handleClick}
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-200 mt-6"
          disabled={selectedRooms.length === 0}
        >
          Reserve now
        </button>
      </div>
    </div>
  );
};

export default HotelReserve;
