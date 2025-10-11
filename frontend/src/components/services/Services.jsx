import React from "react";
import { FaHotel, FaTrain, FaPlane ,FaBlogger} from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdTour, MdEventSeat } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { BiRestaurant } from "react-icons/bi";
import { BsCalendarEvent } from "react-icons/bs";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Hotel Reservation",
    icon: <FaHotel />,
    color: "bg-gradient-to-r from-blue-400 to-blue-600",
    link:"/hotelhome"
  },
  {
    name: "Tour Package Reservation",
    icon: <MdTour />,
    color: "bg-gradient-to-r from-green-400 to-green-600",
    link:"/tours/home"
  },
  {
    name: "Vehicle Reservation",
    icon: <AiFillCar />,
    color: "bg-gradient-to-r from-yellow-400 to-yellow-600",
    link:"/vehicles"
  },
  {
    name: "Train Reservation",
    icon: <FaTrain />,
    color: "bg-gradient-to-r from-purple-400 to-purple-600",
    link:"/TrainHome"
  },
  {
    name: "About",
    icon: <FcAbout />,
    color: "bg-gradient-to-r from-indigo-400 to-indigo-600",
    link:"/aboutus"
  },
   {
    name: "Blog",
    icon: <FaBlogger />,
    color: "bg-gradient-to-r from-red-400 to-red-600",
    link:"/blog"
  },
  // {
  //   name: "Restaurant Reservation",
  //   icon: <BiRestaurant />,
  //   color: "bg-gradient-to-r from-pink-400 to-pink-600",
  //   text:"upcoming"
  // },
  // {
  //   name: "Event Reservation",
  //   icon: <BsCalendarEvent />,
  //   color: "bg-gradient-to-r from-red-400 to-red-600",
  //   text:"upcoming"
  // },
  // {
  //   name: "Flight Reservation",
  //   icon: <FaPlane />,
  //   color: "bg-gradient-to-r from-indigo-400 to-indigo-600",
  //   text:"upcoming"
  // },
  // {
  //   name: "Conference Booking",
  //   icon: <MdEventSeat />,
  //   color: "bg-gradient-to-r from-teal-400 to-teal-600",
  //   text:"upcoming"
  // },
];

const Services = () => {
  return (
    <div className="lg:px-36 lg:pt-5 lg:pb-[90px] px-5">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-[510px] mx-auto">
          <span className="text-primary mb-2 block text-lg font-semibold">
            Our Services
          </span>
          <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
            What We Offer
          </h2>
          <p className="text-body-color text-base">
            We provide seamless reservation services across hotels, tours,
            vehicles, trains, flights, restaurants, events, and conferences in
            Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 -mx-4">
          {categories.map((category, index) => (
            <Link to={category.link} >
              <div
              key={index}
              className={`mb-8 rounded-[20px] p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 ${category.color} text-white flex flex-col items-center justify-center`}
            >
              <div className="text-5xl mb-4 flex items-center justify-center">
                {category.icon}
              </div>
              <h4 className="text-center text-lg font-semibold">{category.name}</h4>
              <h4 className="text-center text-[white] text-lg font-semibold">{category.text}</h4>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
