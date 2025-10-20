import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { Stepper, initTE, Ripple, Input, Datepicker } from "tw-elements";
// import DaysShow from "../../components/Tour/DaysShow";
// import InclusionExclusion from "../../components/Tour/InclusionExclusion";
import { AuthContext } from "../context/authContext";
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

  const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");

  const [allTours, setTour] = useState({});
  const { user } = useContext(AuthContext);
  const currentUser = user?.email || "";

  useEffect(() => {
    const getTours = async () => {
      try {
        const response = await axios.get(`/allinonetours/${id}`);
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
    if (!firstName || !lastName || !date || !phone ) {
      Swal.fire("Oops...", "Missing required fields!", "error");
      return;
    }

    if (phone.length !== 11) {
      Swal.fire("Oops...", "Enter a valid 11-digit mobile number", "error");
      return;
    }

    // if (guestCount > allTours.groupCount) {
    //   Swal.fire(
    //     "Oops...",
    //     `This tour can have a maximum of ${allTours.groupCount} members`,
    //     "error"
    //   );
    //   return;
    // }

    const tourReservation = {
      currentUser,
      firstName,
      lastName,
      date,
      phone,
      guestCount:allTours.groupCount,
      city:allTours.cities,
      price: allTours.totalPrice,
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
          "/allinonetours/tourReservations",
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
     

      {/* Tour Header */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-20">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          {allTours.name}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
            <p className="text-gray-400 font-semibold mb-2">Hotel </p>
            <p className="text-2xl font-bold">{allTours.hotelName}</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
            <p className="text-gray-400 font-semibold mb-2">Duration</p>
            <p className="text-2xl font-bold">{allTours.duration} Days</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
            <p className="text-gray-400 font-semibold mb-2">Location</p>
            <div className="flex justify-center items-center space-x-2">
              <p className="text-2xl font-bold">{allTours.hotelLocation}</p>
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
           <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
            <p className="text-gray-400 font-semibold mb-2">Vehicle</p>
            <p className="text-2xl font-bold">{allTours.vehicleBrand}</p>
            <p className="text-2xl font-bold">{allTours.vehicleModel}</p>
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
              <Link to='/' className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition">
                Download Brochure
              </Link>
              {/* <Link to='/blog' className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition">
                Ask A Question
              </Link> */}
              <Link to='/faq' className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition">
                Check FAQ
              </Link>
            </div>
          </div>
        </div>

        {/* Booking Form */}
          <div className="lg:w-1/2 bg-white rounded-3xl shadow-2xl p-8 mt-10 lg:mt-0">
  <h2 className="text-3xl font-bold mb-6 text-center">Book Your Tour</h2>

  <p className="text-xl mb-4">
    Starting from{" "}
    <span className="text-blue-600 font-extrabold text-4xl">
      tk {allTours.price}
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
        type="text"
        placeholder={`${allTours.groupCount} Person`}
        className="border rounded-xl p-3 w-full focus:ring-2 focus:ring-blue-400"
       value={`${allTours.groupCount} Person`}

        disabled
        // onChange={(e) => setGuests(e.target.value)}
      />
    </div>

    {/* ---- Payment Section ---- */}
    <div className="mt-6 bg-gray-50 border rounded-2xl p-4 shadow-inner">
      <h3 className="text-lg font-semibold mb-3 text-gray-700">
        Payment Details
      </h3>

      <div className="space-y-4">
        {/* Card Number */}
        <div className="relative">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
            maxLength="19"
            placeholder="Card Number (e.g. 4242 4242 4242 4242)"
            className="border rounded-xl p-3 w-full pl-12 focus:ring-2 focus:ring-blue-400 tracking-wider"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-400 absolute left-4 top-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.25 9h19.5M3 5.25h18a.75.75 0 01.75.75v12a.75.75 0 01-.75.75H3A.75.75 0 012.25 18V6a.75.75 0 01.75-.75z"
            />
          </svg>
        </div>

        {/* Expiry + CVV */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="MM/YY"
            maxLength="5"
            className="border rounded-xl p-3 w-full focus:ring-2 focus:ring-blue-400 text-center"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
          />
          <input
            type="password"
            placeholder="CVV"
            maxLength="3"
            className="border rounded-xl p-3 w-full focus:ring-2 focus:ring-blue-400 text-center"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
      </div>
    </div>

    {/* ---- Total ---- */}
    <div>
      <p className="text-lg">
        Total Price: <span className="font-bold">tk {allTours.totalPrice}</span>
      </p>
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
      {/* <div className="mx-auto max-w-7xl px-6 py-12 space-y-12">
        <DaysShow />
        <InclusionExclusion />
      </div> */}
    </div>
  );
};

export default TourDetails;
