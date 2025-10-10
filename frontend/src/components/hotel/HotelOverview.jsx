import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import HotelReserve from "./HotelReserve";

const HotelOverview = () => {
  const [data, setData] = useState([]);
  const [openReserve, setOpenReserve] = useState(false);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/hotels/find/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // Calculate date difference
  const calculateDateDifference = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const date_difference =
    checkInDate && checkOutDate
      ? calculateDateDifference(checkInDate, checkOutDate)
      : 1;

  return (
    <div>
      <div className="lg:p-24">
        <h1 className="ml-18 md:ml-20 lg:ml-20 text-center lg:text-left py-5 font-bold text-3xl">
          {data.name} {data.type}
        </h1>

        <div className="flex justify-center items-center w-full flex-col lg:flex-row pt-12 lg:pt-0">
          <img
            src={`http://localhost:5000/api/hotels/images/${data.HotelImg}`}
            alt="Hotel Image"
            className="w-[320px] md:w-[700px] lg:w-[800px] rounded-lg mb-10"
          />

          <div className="lg:px-24">
            <h1 className="text-center md:text-left py-5 font-bold text-1.5xl">
              {data.title}
            </h1>
            <p className="max-w-[600px] text-justify">{data.description}</p>

            <div className="flex items-center py-4">
              <h1 className="font-bold">City:</h1>
              <h1 className="px-4">{data.city}</h1>
            </div>

            <div className="flex flex-col md:flex-row py-4">
              <h1 className="text-[#41A4FF]">Free Cancellation available</h1>
            </div>

            <div className="flex flex-col md:flex-row py-4">
              <h1 className="text-[#636363]">
                Excellent location – {data.distance} Km from {data.city}
              </h1>
            </div>

            <div className="flex flex-col md:flex-row py-4 justify-between lg:items-center">
              <div className="flex items-center">
                <h1 className="font-bold text-2xl">
                  Book a stay over TK.{data.cheapestPrice}
                </h1>
                <h1 className="ml-3 md:text-1xl">/per day</h1>
              </div>
            </div>

            {/* ✅ Date Inputs */}
            <div className="mt-6">
              <label className="block mb-2 font-semibold">Check-In Date:</label>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="border p-2 rounded mb-4"
              />
              <label className="block mb-2 font-semibold">Check-Out Date:</label>
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="border p-2 rounded mb-4"
              />
              <button
                onClick={() => setOpenReserve(true)}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 mt-2"
                disabled={!checkInDate || !checkOutDate}
              >
                Reserve Rooms
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hotel Images */}
      <h1 className="text-center lg:text-left py-5 font-bold text-2xl ml-10">
        Images of our hotel
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-10">
        {data.HotelImgs &&
          data.HotelImgs.map((image, index) => (
            <img
              src={`http://localhost:5000/api/hotels/images/${image}`}
              alt={`Hotel Image ${index}`}
              key={index}
              className="ml-10 w-64 h-64 rounded-lg mb-2"
            />
          ))}
      </div>

      {/* ✅ Child Reservation Modal */}
      {openReserve && (
        <HotelReserve
          setOpen={setOpenReserve}
          hotelId={id}
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          date_difference={date_difference}
        />
      )}
    </div>
  );
};

export default HotelOverview;
