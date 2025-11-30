// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const MyReservations = () => {
//   const { id } = useParams();
//   const [user, setUser] = useState(null);
//   const [vehicleReservations, setVehicleReservations] = useState([]);
//   const [hotelReservations, setHotelReservations] = useState([]);
//   const [tourReservations, setTourReservations] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const formatDate = (dateStr) => {
//     if (!dateStr) return "N/A";
//     return new Date(dateStr).toLocaleString("en-GB", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: true,
//     });
//   };

//   useEffect(() => {
//     if (!id) return;

//     const fetchAllReservations = async () => {
//       try {
//         setLoading(true);

//         // 1️⃣ Fetch user first
//         const userRes = await axios.get(`http://localhost:5000/api/users/user/${id}`);
//         setUser(userRes.data);
//         const userName = userRes.data.name;
//         const userEmail = userRes.data.email;

//         // 2️⃣ Fetch vehicle reservations
//         const vehicleRes = await axios.get(
//           `http://localhost:5000/api/vehiclereservation/traveler/${id}`
//         );
//         setVehicleReservations(vehicleRes.data || []);

//         // 3️⃣ Fetch hotel reservations using userName
//         const hotelRes = await axios.get(
//           `http://localhost:5000/api/hotelreservation/userreservation?userName=${userName}`
//         );
//         setHotelReservations(hotelRes.data || []);

//         // 4️⃣ Fetch tour reservations using userEmail
//         const tourRes = await axios.get(
//           `http://localhost:5000/api/tours/touruserReservations?currentUser=${userEmail}`
//         );
//         setTourReservations(tourRes.data.data || []);
//       } catch (err) {
//         console.error("Error fetching reservations:", err);
//         setVehicleReservations([]);
//         setHotelReservations([]);
//         setTourReservations([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAllReservations();
//   }, [id]);

//   if (loading) {
//     return <div className="text-center mt-20 text-xl text-gray-700">Loading Reservations...</div>;
//   }
// console.log(tourReservations,"tour");
//   return (
//     <div className="max-w-6xl mx-auto p-6 space-y-12">
//       {/* Vehicle Reservations */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4">Vehicle Reservations</h2>
//         {Array.isArray(vehicleReservations) && vehicleReservations.length > 0 ? (
//           <div className="grid md:grid-cols-2 gap-6">
//             {vehicleReservations.map((res) => (
//               <div key={res._id} className="bg-white shadow-md rounded-xl p-6">
//                 <p><span className="font-semibold">User:</span> {user?.name || "N/A"}</p>
//                 <p><span className="font-semibold">Location:</span> {res.location || "N/A"}</p>
//                 <p><span className="font-semibold">Price:</span> {res.price || "N/A"} tk</p>
//                 <p><span className="font-semibold">Vehicle Number:</span> {res.vehicleNumber || "N/A"}</p>
//                 <p><span className="font-semibold">Booked Date:</span> {formatDate(res.date)}</p>
//                 <p><span className="font-semibold">Pickup Date:</span> {formatDate(res.pickupDate)}</p>
//                 <p><span className="font-semibold">Return Date:</span> {formatDate(res.returnDate)}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No vehicle reservations found.</p>
//         )}
//       </section>

//       {/* Hotel Reservations */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4">Hotel Reservations</h2>
//         {Array.isArray(hotelReservations) && hotelReservations.length > 0 ? (
//           <div className="grid md:grid-cols-2 gap-6">
//             {hotelReservations.map((res) => (
//               <div key={res._id} className="bg-white shadow-md rounded-xl p-6">
//                 <p><span className="font-semibold">Hotel Name:</span> {res.hotelName || "N/A"}</p>
//                 <p><span className="font-semibold">User:</span> {res.userName || "N/A"}</p>
//                 <p><span className="font-semibold">Check In Date:</span> {formatDate(res.checkInDate)}</p>
//                 <p><span className="font-semibold">Check Out Date:</span> {formatDate(res.checkOutDate)}</p>
//                 <p><span className="font-semibold">Total Days:</span> {res.totalDays || "N/A"}</p>
//                 <p><span className="font-semibold">Booked Date:</span> {formatDate(res.date || res.createdAt)}</p>
//                 <p><span className="font-semibold">Total Price:</span> {res.totalPrice || "N/A"} tk</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No hotel reservations found.</p>
//         )}
//       </section>

//       {/* Tour Reservations */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4">Tour Reservations</h2>
//         {Array.isArray(tourReservations) && tourReservations?.length > 0 ? (
//           <div className="grid md:grid-cols-2 gap-6">
//             {tourReservations?.map((res) => (
//               <div key={res._id} className="bg-white shadow-md rounded-xl p-6">
//                 <p><span className="font-semibold">User:</span> {res.firstName+" "+res.lastName || "N/A"}</p>
//                 <p><span className="font-semibold">Date:</span> {formatDate(res.date || res.reservationDate)}</p>
//                 <p><span className="font-semibold">Guest No:</span> {res.guestCount || res.description || "N/A"}</p>
//                 <p><span className="font-semibold">City:</span> {res.city|| res.description || "N/A"}</p>
//                 <p><span className="font-semibold">Price:</span> {res.price|| res.description || "N/A"} tk</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No tour reservations found.</p>
//         )}
//       </section>
//     </div>
//   );
// };

// export default MyReservations;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import jsPDF from "jspdf";

// const MyReservations = () => {
//   const { id } = useParams();
//   const [user, setUser] = useState(null);
//   const [vehicleReservations, setVehicleReservations] = useState([]);
//   const [hotelReservations, setHotelReservations] = useState([]);
//   const [tourReservations, setTourReservations] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const formatDate = (dateStr) => {
//     if (!dateStr) return "N/A";
//     return new Date(dateStr).toLocaleString("en-GB", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: true,
//     });
//   };

//   useEffect(() => {
//     if (!id) return;

//     const fetchAllReservations = async () => {
//       try {
//         setLoading(true);
//         const userRes = await axios.get(`http://localhost:5000/api/users/user/${id}`);
//         setUser(userRes.data);
//         const userName = userRes.data.name;
//         const userEmail = userRes.data.email;

//         const vehicleRes = await axios.get(
//           `http://localhost:5000/api/vehiclereservation/traveler/${id}`
//         );
//         setVehicleReservations(vehicleRes.data || []);

//         const hotelRes = await axios.get(
//           `http://localhost:5000/api/hotelreservation/userreservation?userName=${userName}`
//         );
//         setHotelReservations(hotelRes.data || []);

//         const tourRes = await axios.get(
//           `http://localhost:5000/api/tours/touruserReservations?currentUser=${userEmail}`
//         );
//         setTourReservations(tourRes.data.data || []);
//       } catch (err) {
//         console.error("Error fetching reservations:", err);
//         setVehicleReservations([]);
//         setHotelReservations([]);
//         setTourReservations([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAllReservations();
//   }, [id]);

//   // PDF generation with proper page breaks
//   const downloadPDF = () => {
//     const doc = new jsPDF("p", "mm", "a4"); // portrait, mm units, A4 page
//     const pageWidth = doc.internal.pageSize.getWidth();
//     const margin = 15;
//     let y = 20;

//     doc.setFontSize(18);
//     doc.text(`Reservations of ${user?.name || "User"}`, pageWidth / 2, y, { align: "center" });
//     y += 10;

//     const addLine = (text) => {
//       doc.setFontSize(12);
//       const lineHeight = 7;
//       const splittedText = doc.splitTextToSize(text, pageWidth - margin * 2);
//       splittedText.forEach((line) => {
//         if (y > 280) {
//           doc.addPage();
//           y = 20;
//         }
//         doc.text(line, margin, y);
//         y += lineHeight;
//       });
//       y += 3;
//     };

//     // Vehicle Reservations
//     if (vehicleReservations.length > 0) {
//       doc.setFontSize(16);
//       doc.text("Vehicle Reservations", margin, y);
//       y += 8;

//       vehicleReservations.forEach((res, idx) => {
//         addLine(
//           `${idx + 1}. Location: ${res.location || "N/A"}, Price: ${res.price || "N/A"} tk, Vehicle No: ${
//             res.vehicleNumber || "N/A"
//           }, Booked: ${formatDate(res.date)}, Pickup: ${formatDate(res.pickupDate)}, Return: ${formatDate(res.returnDate)}`
//         );
//       });
//       y += 5;
//     }

//     // Hotel Reservations
//     if (hotelReservations.length > 0) {
//       doc.setFontSize(16);
//       doc.text("Hotel Reservations", margin, y);
//       y += 8;

//       hotelReservations.forEach((res, idx) => {
//         addLine(
//           `${idx + 1}. Hotel: ${res.hotelName || "N/A"}, Check In: ${formatDate(res.checkInDate)}, Check Out: ${formatDate(res.checkOutDate)}, Total Days: ${
//             res.totalDays || "N/A"
//           }, Total Price: ${res.totalPrice || "N/A"} tk`
//         );
//       });
//       y += 5;
//     }

//     // Tour Reservations
//     if (tourReservations.length > 0) {
//       doc.setFontSize(16);
//       doc.text("Tour Reservations", margin, y);
//       y += 8;

//       tourReservations.forEach((res, idx) => {
//         addLine(
//           `${idx + 1}. Name: ${res.firstName || ""} ${res.lastName || ""}, City: ${res.city || "N/A"}, Guests: ${res.guestCount || "N/A"}, Price: ${res.price || "N/A"} tk, Date: ${formatDate(
//             res.date || res.reservationDate
//           )}`
//         );
//       });
//     }

//     doc.save(`Reservations_${user?.name || "User"}.pdf`);
//   };

//   if (loading) {
//     return <div className="text-center mt-20 text-xl text-gray-700">Loading Reservations...</div>;
//   }

//   return (
//     <div className="max-w-6xl mx-auto p-6 space-y-6">
//       <button
//         onClick={downloadPDF}
//         className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 mb-6"
//       >
//         Download PDF
//       </button>

//       {/* Vehicle */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4">Vehicle Reservations</h2>
//         {vehicleReservations.length > 0 ? (
//           <div className="grid md:grid-cols-2 gap-6">
//             {vehicleReservations.map((res) => (
//               <div key={res._id} className="bg-white shadow-md rounded-xl p-6">
//                 <p><span className="font-semibold">User:</span> {user?.name}</p>
//                 <p><span className="font-semibold">Location:</span> {res.location || "N/A"}</p>
//                 <p><span className="font-semibold">Price:</span> {res.price || "N/A"} tk</p>
//                 <p><span className="font-semibold">Vehicle Number:</span> {res.vehicleNumber || "N/A"}</p>
//                 <p><span className="font-semibold">Booked Date:</span> {formatDate(res.date)}</p>
//                 <p><span className="font-semibold">Pickup Date:</span> {formatDate(res.pickupDate)}</p>
//                 <p><span className="font-semibold">Return Date:</span> {formatDate(res.returnDate)}</p>
//               </div>
//             ))}
//           </div>
//         ) : <p>No vehicle reservations found.</p>}
//       </section>

//       {/* Hotel */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4">Hotel Reservations</h2>
//         {hotelReservations.length > 0 ? (
//           <div className="grid md:grid-cols-2 gap-6">
//             {hotelReservations.map((res) => (
//               <div key={res._id} className="bg-white shadow-md rounded-xl p-6">
//                 <p><span className="font-semibold">Hotel Name:</span> {res.hotelName || "N/A"}</p>
//                 <p><span className="font-semibold">Check In:</span> {formatDate(res.checkInDate)}</p>
//                 <p><span className="font-semibold">Check Out:</span> {formatDate(res.checkOutDate)}</p>
//                 <p><span className="font-semibold">Total Days:</span> {res.totalDays || "N/A"}</p>
//                 <p><span className="font-semibold">Total Price:</span> {res.totalPrice || "N/A"} tk</p>
//               </div>
//             ))}
//           </div>
//         ) : <p>No hotel reservations found.</p>}
//       </section>

//       {/* Tour */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4">Tour Reservations</h2>
//         {tourReservations.length > 0 ? (
//           <div className="grid md:grid-cols-2 gap-6">
//             {tourReservations.map((res) => (
//               <div key={res._id} className="bg-white shadow-md rounded-xl p-6">
//                 <p><span className="font-semibold">Name:</span> {res.firstName+" "+res.lastName}</p>
//                 <p><span className="font-semibold">City:</span> {res.city || "N/A"}</p>
//                 <p><span className="font-semibold">Guests:</span> {res.guestCount || "N/A"}</p>
//                 <p><span className="font-semibold">Price:</span> {res.price || "N/A"} tk</p>
//                 <p><span className="font-semibold">Date:</span> {formatDate(res.date || res.reservationDate)}</p>
//               </div>
//             ))}
//           </div>
//         ) : <p>No tour reservations found.</p>}
//       </section>
//     </div>
//   );
// };

// export default MyReservations;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import jsPDF from "jspdf";

const COLORS = ["bg-blue-50", "bg-green-50", "bg-yellow-50", "bg-pink-50", "bg-purple-50", "bg-orange-50"];

const MyReservations = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [vehicleReservations, setVehicleReservations] = useState([]);
  const [hotelReservations, setHotelReservations] = useState([]);
  const [tourReservations, setTourReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(tourReservations,"tour");

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    return new Date(dateStr).toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  useEffect(() => {
    if (!id) return;

    const fetchAllReservations = async () => {
      try {
        setLoading(true);

        const userRes = await axios.get(`http://localhost:5000/api/users/user/${id}`);
        setUser(userRes.data);

        const userName = userRes.data?.name;
        const userEmail = userRes.data?.email;
        console.log(userName,userEmail,id,"user");

        const vehicleRes = await axios.get(`http://localhost:5000/api/vehiclereservation/traveler/${id}`);
        setVehicleReservations(vehicleRes.data || []);

        const hotelRes = await axios.get(
          `http://localhost:5000/api/hotelreservation/userreservation?userName=${encodeURIComponent(userName)}`
        );
        setHotelReservations(hotelRes.data || []);

        const tourRes = await axios.get(
          `http://localhost:5000/api/tours/touruserReservations?currentUser=${encodeURIComponent(userEmail)}`
        );
        setTourReservations(tourRes.data?.data || []);
      } catch (err) {
        console.error("Error fetching reservations:", err);
        setVehicleReservations([]);
        setHotelReservations([]);
        setTourReservations([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAllReservations();
  }, [id]);




  const downloadPDF = () => {
    const doc = new jsPDF("p", "mm", "a4");
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 15;
    let y = 20;

    doc.setFontSize(18);
    doc.text(`Reservations of ${user?.name || "User"}`, pageWidth / 2, y, { align: "center" });
    y += 10;

    const addLine = (text) => {
      doc.setFontSize(12);
      const lineHeight = 7;
      const splittedText = doc.splitTextToSize(text, pageWidth - margin * 2);
      splittedText.forEach((line) => {
        if (y > 280) {
          doc.addPage();
          y = 20;
        }
        doc.text(line, margin, y);
        y += lineHeight;
      });
      y += 3;
    };

    if (vehicleReservations.length > 0) {
      doc.setFontSize(16);
      doc.text("Vehicle Reservations", margin, y);
      y += 8;
      vehicleReservations.forEach((res, idx) => {
        addLine(
          `${idx + 1}. Location: ${res.location || "N/A"}, Price: ${res.price || "N/A"} tk, Vehicle No: ${res.vehicleNumber || "N/A"}, Booked: ${formatDate(res.date)}, Pickup: ${formatDate(res.pickupDate)}, Return: ${formatDate(res.returnDate)}, Driver Requirement: ${res.needDriver ? "Yes" : "No"}`
        );
      });
      y += 5;
    }

    if (hotelReservations.length > 0) {
      doc.setFontSize(16);
      doc.text("Hotel Reservations", margin, y);
      y += 8;
      hotelReservations.forEach((res, idx) => {
        addLine(
          `${idx + 1}. Hotel: ${res.hotelName || "N/A"}, Check In: ${formatDate(res.checkInDate)}, Check Out: ${formatDate(res.checkOutDate)}, Total Days: ${res.totalDays || "N/A"}, Total Price: ${res.totalPrice || "N/A"} tk`
        );
      });
      y += 5;
    }

    if (tourReservations.length > 0) {
      doc.setFontSize(16);
      doc.text("Tour Reservations", margin, y);
      y += 8;
      tourReservations.forEach((res, idx) => {
        addLine(
          `${idx + 1}. Name: ${res.firstName || ""} ${res.lastName || ""}, City: ${res.city || "N/A"}, Guests: ${res.guestCount || "N/A"}, Medic Person: ${res.medicRequired || "N/A"} ,Duration: ${res.duration || "N/A"} Days, Price: ${res.price || "N/A"} tk, Date: ${formatDate(res.date || res.reservationDate)},End Date: ${formatDate(res.date || res.endDate)}`
        );
      });
    }

    doc.save(`Reservations_${user?.name || "User"}.pdf`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-gray-600 animate-pulse">Loading Reservations...</div>
      </div>
    );
  }

  // Function to get card background color
  const getCardColor = (index) => COLORS[index % COLORS.length];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">My Reservations</h1>
        <button
          onClick={downloadPDF}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition transform duration-300"
        >
          Download PDF
        </button>
      </div>

      {/* Vehicle Reservations */}
      {vehicleReservations.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2">Vehicle Reservations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {vehicleReservations.map((res, idx) => (
              <div
                key={res._id}
                className={`${getCardColor(idx)} p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-2xl transition transform hover:-translate-y-1`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-700">Booking #{idx + 1}</span>
                  <span className="text-sm text-gray-500">{formatDate(res.date)}</span>
                </div>
                <div className="space-y-1">
                  <p><span className="font-semibold text-gray-600">Location:</span> {res.location || "N/A"}</p>
                  <p><span className="font-semibold text-gray-600">Price:</span> {res.price || "N/A"} tk</p>
                  <p><span className="font-semibold text-gray-600">Vehicle No:</span> {res.vehicleNumber || "N/A"}</p>
                  <p><span className="font-semibold text-gray-600">Pickup:</span> {formatDate(res.pickupDate)}</p>
                  <p><span className="font-semibold text-gray-600">Return:</span> {formatDate(res.returnDate)}</p>
                  <p><span className="font-semibold text-gray-600">Driver Requirement:</span> {res.needDriver ? "Yes" : "No"}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Hotel Reservations */}
      {hotelReservations.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2">Hotel Reservations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {hotelReservations.map((res, idx) => (
              <div
                key={res._id}
                className={`${getCardColor(idx)} p-6 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-2xl transition transform hover:-translate-y-1`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-700">{res.hotelName}</span>
                  <span className="text-sm text-gray-500">{formatDate(res.checkInDate)}</span>
                </div>
                <div className="space-y-1">
                  <p><span className="font-semibold text-gray-600">Check In:</span> {formatDate(res.checkInDate)}</p>
                  <p><span className="font-semibold text-gray-600">Check Out:</span> {formatDate(res.checkOutDate)}</p>
                  <p><span className="font-semibold text-gray-600">Total Days:</span> {res.totalDays || "N/A"}</p>
                  <p><span className="font-semibold text-gray-600">Total Price:</span> {res.totalPrice || "N/A"} tk</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tour Reservations */}
      {tourReservations.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2">Tour Reservations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tourReservations.map((res, idx) => (
              <div
                key={res._id}
                className={`${getCardColor(idx)} p-6 rounded-xl shadow-lg border-l-4 border-purple-500 hover:shadow-2xl transition transform hover:-translate-y-1`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-700">{res.firstName} {res.lastName}</span>
                  <span className="text-sm text-gray-500">{formatDate(res.date || res.reservationDate)}</span>
                </div>
                <div className="space-y-1">
                  <p><span className="font-semibold text-gray-600">City:</span> {res.city || "N/A"}</p>
                  <p><span className="font-semibold text-gray-600">Guests:</span> {res.guestCount || "N/A"}</p>
                  <p><span className="font-semibold text-gray-600">Duration:</span> {res.duration || "N/A"}</p>
                  <p><span className="font-semibold text-gray-600">Price:</span> {res.price||res.totalPrice || "N/A"} tk</p>
                   <p><span className="font-semibold text-gray-600">Medic Person:</span> {res.medicRequired || "N/A"}</p>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-700">End Tour</span>
                  <span className="text-sm text-gray-500">{formatDate(res.endDate ||"")}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default MyReservations;
