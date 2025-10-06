// import axios from "axios";
// import React, { useEffect } from "react";
// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import jsPDF from 'jspdf'


// const MyOneTicket = ()=>{

//     const id = (useParams().id).toString();
//     const [isApproved, setIsApproved] = useState(false);
//     const [TO, setTO] = useState(localStorage.getItem('TO'))
//     const [FROM, setFROM] = useState(localStorage.getItem('FROM'))
//     const [ATIME, setATIME] = useState(localStorage.getItem('ATime'))
//     const [DTIME, setDTIME] = useState(localStorage.getItem('DTime'))

//     const [singlePassenger, setSinglePassenger] = useState({})
//     const [singleTrain, setSingleTrain] = useState({})
//     const TrainId = singlePassenger.trainId

//     useEffect(() => {

//         axios.get(`/seatBookings/get/${id}`)
//             .then((res) => {
//                 console.log(res.data)
//                 setSinglePassenger(res.data)
//                 console.log()
//             }).catch((err) => {
//                 console.log(err.message)
//             })

//     }, [])
//      useEffect(() => {

       
//  axios.get(`/train/get/${TrainId}`)
//             .then((res) => {
//                 console.log(res.data)
//                 setSingleTrain(res.data)
//                 console.log()
//             }).catch((err) => {
//                 console.log(err.message)
//             })
// }, [])

//     console.log(singleTrain)

//     const [isPaid, setIsPaid] = useState(singlePassenger.priceStatus);

    

//     const generateReport = () => {
//         const doc = new jsPDF();
      
//         doc.setFont("helvetica", "bold");
//         doc.setFontSize(20);
//         doc.setTextColor("#0074D9"); // Set text color to blue
      
//         doc.setFontSize(12);
//         doc.setTextColor(100);
//         doc.setFont("helvetica", "normal");
      
//         const tableX = 20;
//         const tableY = 50;
//         const tableRowHeight = 10;
//         const tableColWidth = 60;
//         const tableMargin = 5;
      
//         const TrainName = singlePassenger.trainName;
//         const prices = singlePassenger.price;
//         const FRISTNAME = singlePassenger.firstName;
//         const LASTNAME = singlePassenger.LastName;
      
//         doc.setFontSize(20);
//         doc.text(`TICKET for Passenger ${FRISTNAME} ${LASTNAME} :`, 20, 20);
//         doc.setFontSize(10);
//         doc.text(`Train Name : ${TrainName}`, 20, 30);
      
//         const headers = ["From", "To", "Departure Time", "Arrival Time", "Price"];
//         const data = [
//           [FROM, TO, DTIME, ATIME, prices],
//         ];
      
//         let currentX = tableX;
//         let currentY = tableY;
//         headers.forEach((header) => {
//           doc.setFillColor("#0074D9"); // Set fill color to blue
//           doc.setTextColor("#FFFFFF"); // Set text color to white
//           doc.rect(currentX, currentY - tableRowHeight, tableColWidth, tableRowHeight, "F"); // Draw filled rectangle
//           doc.text(header, currentX + tableMargin, currentY - tableRowHeight / 2 + 3); // Draw header text
//           currentX += tableColWidth + tableMargin;
//         });
      
//         currentY += tableRowHeight;
//         currentX = tableX;
//         data.forEach((row) => {
//           row.forEach((cell) => {
//             doc.setFillColor("#E5E5E5"); // Set fill color to light gray
//             doc.setTextColor("#000000"); // Set text color to black
//             doc.rect(currentX, currentY - tableRowHeight, tableColWidth, tableRowHeight, "F"); // Draw filled rectangle
//             doc.text(cell, currentX + tableMargin, currentY - tableRowHeight / 2 + 3); // Draw cell text
//             currentX += tableColWidth + tableMargin;
//           });
//         });
      
//         doc.save("Ticket.pdf");
//       };
      



//     return (
//         <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-lg font-medium text-center mb-6">{singlePassenger.trainName}</h2>
//             <div className="grid grid-cols-2 gap-6 mb-6">
//                 <div className="bg-blue-100 rounded-lg p-6 shadow-md">
//                     <p className="text-sm text-gray-600 mb-2">No. of Tickets:</p>
//                     <p className="text-lg font-medium">{singlePassenger.noOfTickets}</p>
//                 </div>
//                 <div className="bg-blue-100 rounded-lg p-6 shadow-md">
//                     <p className="text-sm text-gray-600 mb-2">Price:</p>
//                     <p className="text-lg font-medium">{singlePassenger.price}</p>
//                 </div>
//             </div>
//             <div className="grid grid-cols-2 gap-6 mb-6">
//                 <div className="bg-blue-100 rounded-lg p-6 shadow-md">
//                     <p className="text-sm text-gray-600 mb-2">First Name:</p>
//                     <p className="text-lg font-medium">{singlePassenger.firstName}</p>
//                 </div>
//                 <div className="bg-blue-100 rounded-lg p-6 shadow-md">
//                     <p className="text-sm text-gray-600 mb-2">Last Name:</p>
//                     <p className="text-lg font-medium">{singlePassenger.LastName}</p>
//                 </div>
//             </div>
//             <div className="grid grid-cols-2 gap-6 mb-6">
//                 <div className="bg-blue-100 rounded-lg p-6 shadow-md">
//                     <p className="text-sm text-gray-600 mb-2">Nationality:</p>
//                     <p className="text-lg font-medium">{singlePassenger.nationality}</p>
//                 </div>
//                 <div className="bg-blue-100 rounded-lg p-6 shadow-md">
//                     <p className="text-sm text-gray-600 mb-2">ID Card Number:</p>
//                     <p className="text-lg font-medium">{singlePassenger.IdCardNumber}</p>
//                 </div>
//             </div>
//             <div className="flex justify-end mb-6">
//                 {
//                     !isPaid && (
//                         <span className="inline-flex items-center px-2.5 py-0.5 mr-20 rounded-md text-sm font-medium bg-green-100 text-green-800">
//                             Paid
//                         </span>
//                     )
//                     }

//                 {!isApproved && (
//                     <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg mr-4 shadow-md" onClick={generateReport}>
//                         View Ticket
//                     </button>
//                 )}
                

//             </div>


//         </div>
//     );
// }

// export default MyOneTicket

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jsPDF from "jspdf";

const MyOneTicket = () => {
  const id = useParams().id.toString();

  const [singlePassenger, setSinglePassenger] = useState({});
  const [singleTrain, setSingleTrain] = useState({});
  const [isPaid, setIsPaid] = useState(false);

  // localStorage values
  const TO = localStorage.getItem("TO");
  const FROM = localStorage.getItem("FROM");
  const ATIME = localStorage.getItem("ATime");
  const DTIME = localStorage.getItem("DTime");

  useEffect(() => {
    axios
      .get(`/seatBookings/get/${id}`)
      .then((res) => {
        setSinglePassenger(res.data);
        setIsPaid(res.data.priceStatus);
      })
      .catch((err) => console.log(err.message));
  }, [id]);

  useEffect(() => {
    if (singlePassenger.trainId) {
      axios
        .get(`/train/get/${singlePassenger.trainId}`)
        .then((res) => setSingleTrain(res.data))
        .catch((err) => console.log(err.message));
    }
  }, [singlePassenger.trainId]);
console.log(singleTrain,'singleTrain');
  // Generate Ticket PDF
  const generateReport = () => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Train E-Ticket", 85, 20);

    doc.setFontSize(12);
    doc.setTextColor(60);

    doc.text(`Passenger: ${singlePassenger.firstName} ${singlePassenger.LastName}`, 20, 40);
    doc.text(`Train: ${singleTrain.trainName || "N/A"} (${singleTrain.classType?.toUpperCase()})`, 20, 50);
    doc.text(`From: ${singleTrain.from || FROM}    To: ${singleTrain.to || TO}`, 20, 60);
    doc.text(`Departure: ${singleTrain.date} - ${singleTrain.arrivalTime || DTIME}`, 20, 70);
    doc.text(`Seat(s): ${singlePassenger.noOfTickets || 1}`, 20, 80);
    doc.text(`Price: ${singleTrain.price || singlePassenger.price} ৳`, 20, 90);
    doc.text(`Baggage Limit: ${singleTrain.MaxBagage || "2"} pcs`, 20, 100);
    doc.text(`Status: ${isPaid ? "Paid" : "Unpaid"}`, 20, 110);

    doc.setFontSize(10);
    doc.text("Thank you for booking with BD Express 🚆", 60, 130);

    doc.save("Train_Ticket.pdf");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-gradient-to-br from-blue-50 to-white shadow-lg rounded-2xl p-8">
      <div className="flex justify-between items-center mb-6 border-b pb-3">
        <h2 className="text-2xl font-bold text-blue-700">
          {singleTrain.trainName || "Train Details"}
        </h2>
        <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold uppercase">
          {singleTrain.classType || "AC"}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-6 text-gray-700 mb-6">
        <div>
          <p className="text-sm text-gray-500">From</p>
          <p className="text-lg font-semibold">{singleTrain.from || FROM}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">To</p>
          <p className="text-lg font-semibold">{singleTrain.to || TO}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Departure</p>
          {/* <p className="text-lg font-semibold">{DTIME || singleTrain.depatureTime}</p> */}
          <p className="text-lg font-semibold">{ singleTrain?.depatureTime||""}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Arrival</p>
          <p className="text-lg font-semibold">{ATIME || singleTrain.arrivalTime}</p>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-500 mb-2">Passenger</p>
        <p className="font-semibold text-lg">
          {singlePassenger.firstName} {singlePassenger.LastName}
        </p>
        <p className="text-gray-600 text-sm">Nationality: {singlePassenger.nationality}</p>
        <p className="text-gray-600 text-sm">ID: {singlePassenger.IdCardNumber}</p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white border rounded-lg p-4 text-center shadow-sm">
          <p className="text-gray-500 text-sm mb-1">Tickets</p>
          <p className="text-lg font-semibold">{singlePassenger.noOfTickets}</p>
        </div>
        <div className="bg-white border rounded-lg p-4 text-center shadow-sm">
          <p className="text-gray-500 text-sm mb-1">Price</p>
          <p className="text-lg font-semibold text-blue-700">
            {singlePassenger.price || singleTrain.price} ৳
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            isPaid
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {isPaid ? "Paid" : "Unpaid"}
        </span>

        <button
          onClick={generateReport}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
        >
          Download Ticket
        </button>
      </div>
    </div>
  );
};

export default MyOneTicket;
