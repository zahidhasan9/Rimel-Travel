import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaMapMarkerAlt, FaUsers, FaGasPump, FaCogs } from "react-icons/fa";

const VehicleCard = (props) => {
  return (
    <div className="flex flex-col w-[300px] bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      {/* Vehicle Image */}
      <div className="relative w-full h-[180px]">
        <img
          src={`vehicle/images/${props.vehicleMainImg}`}
          alt={props.model}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Vehicle Details */}
      <div className="p-4 flex flex-col gap-2">
        <h1 className="text-lg font-semibold text-gray-800">
          {props.brand} {props.model}
        </h1>

        {/* Optional rating */}
        {/* <div className="flex items-center text-yellow-500 text-sm">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-600 ml-2">4.5</span>
        </div> */}

        <div className="flex items-center justify-between text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <FaUsers className="text-[#41A4FF]" />
            <span>{props.capacity} People</span>
          </div>
          <div className="flex items-center gap-1">
            <FaCogs className="text-[#41A4FF]" />
            <span>{props.transmissionType}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <FaGasPump className="text-[#41A4FF]" />
            <span>{props.fuelType}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-[#41A4FF]" />
            <span>{props.location}</span>
          </div>
        </div>

        <div className="flex items-baseline justify-center gap-1 mt-3">
          <h1 className="text-2xl font-bold text-gray-800">
            Tk. {props.price}
          </h1>
          <span className="text-gray-500 text-sm">/per day</span>
        </div>

        <Link to={`/vehicle/book/${props.id}`} className="mt-4">
          <button className="bg-[#41A4FF] hover:bg-[#1d8fff] text-white font-medium w-full py-2.5 rounded-lg transition-all duration-300">
            Reserve Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VehicleCard;
