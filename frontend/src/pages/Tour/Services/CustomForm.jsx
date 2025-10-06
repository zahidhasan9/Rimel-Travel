import React, { useState, useContext } from "react";
import { RiMapPin5Fill } from "react-icons/ri";
import { IoPeopleSharp } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import {
  TbMap2,
  TbSquareRoundedNumber1Filled,
  TbSquareRoundedNumber2Filled,
  TbSquareRoundedNumber3Filled,
  TbSquareRoundedNumber4Filled,
} from "react-icons/tb";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../../context/authContext";

const number = [1, 2, 3, 5, 7, 9, 12];

const CustomForm = () => {
  const [whereFrom, setFrom] = useState("");
  const [whereTo, setTo] = useState("");
  const [days, setDays] = useState(0);
  const { user } = useContext(AuthContext);

  const inputHandler = async (e) => {
    e.preventDefault();
    const currentUser = user?.email;

    if (!whereFrom || !whereTo || !days) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Must fill all fields!",
      });
      return;
    }

    const newForm = { currentUser, whereFrom, whereTo, days };

    try {
      const result = await Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      });

      if (result.isConfirmed) {
        const response = await axios.post("/tours/customform", newForm);
        Swal.fire(response.data.message, "", "success");
      } else if (result.isDenied) {
        Swal.fire("Details are not saved", "", "error");
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* How it works */}
        <div className="bg-gradient-to-b from-blue-400 to-blue-500 rounded-3xl p-8 text-white shadow-xl">
          <h1 className="text-4xl font-bold text-center mb-6">How it Works</h1>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <TbSquareRoundedNumber1Filled className="text-2xl" />
              <p>Tell us details of your holiday plan</p>
            </div>
            <div className="flex items-center gap-4">
              <TbSquareRoundedNumber2Filled className="text-2xl" />
              <p>Connect with our expert agents</p>
            </div>
            <div className="flex items-center gap-4">
              <TbSquareRoundedNumber3Filled className="text-2xl" />
              <p>Compare & customize further</p>
            </div>
            <div className="flex items-center gap-4">
              <TbSquareRoundedNumber4Filled className="text-2xl" />
              <p>Travel</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-10 text-center">
            <div>
              <IoPeopleSharp className="mx-auto text-3xl" />
              <p className="font-bold text-xl">200+</p>
              <p>Verified Agents</p>
            </div>
            <div>
              <HiUserGroup className="mx-auto text-3xl" />
              <p className="font-bold text-xl">24/7</p>
              <p>Availability</p>
            </div>
          </div>

          <hr className="my-8 border-white/50" />

          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2">
              <BsFillTelephoneOutboundFill />
              <p>Call us for details</p>
            </div>
            <p>0112224448 / 0112224449</p>
            <p>200+ Agents | 5M+ Travelers | 80+ Destinations</p>
          </div>
        </div>

        {/* Customize form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-6">
            <TbMap2 className="text-6xl text-blue-600 mx-auto" />
            <h2 className="text-3xl font-bold mt-2">Where Do You Want to Go?</h2>
          </div>

          <form className="space-y-6" onSubmit={inputHandler}>
            <div>
              <label className="block mb-2 font-semibold">From Where</label>
              <div className="relative">
                <RiMapPin5Fill className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  className="w-full pl-10 pr-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="Enter your departure"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-semibold">To Where</label>
              <div className="relative">
                <RiMapPin5Fill className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  className="w-full pl-10 pr-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="Enter your destination"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-semibold text-center">Duration (Days)</label>
              <div className="flex flex-wrap justify-center gap-4">
                {number.map((num) => (
                  <label key={num} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="days"
                      value={num}
                      onChange={(e) => setDays(e.target.value)}
                      className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    {num}
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3 rounded-xl shadow-lg transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomForm;
