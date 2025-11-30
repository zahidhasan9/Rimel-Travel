
import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Tripevibe from "../assets/images/tripvive.png";

const AllInOneTourReservation = () => {
  const { data } = useFetch(`/allinonetours`);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

  const filteredTours = data.filter((tour) =>
    tour.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToWishlist = (tour) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user?._id) {
      return alert("Please login first!");
    }

    const existing = JSON.parse(localStorage.getItem("wishlist")) || [];
    const alreadyAdded = existing.some(
      (item) => item.tourId === tour._id && item.userId === user._id
    );

    if (alreadyAdded) {
      return alert("Already added to wishlist!");
    }

    const newItem = {
      userId: user._id,
      tourId: tour._id,
      name: tour.name,
      price: tour.totalPrice,
      img: Tripevibe,
      duration: tour.duration,
      link: `/allinoneresurvation/${tour._id}`,
    };

    const updatedList = [...existing, newItem];
    localStorage.setItem("wishlist", JSON.stringify(updatedList));

    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-10 text-center shadow-lg">
        <h1 className="text-4xl font-bold mb-2">
          🌍 All-In-One Tour Reservation
        </h1>
        <p className="text-lg opacity-90">
          Discover your next adventure from our exclusive packages
        </p>
      </header>

      {/* Search Bar */}
      <div className="max-w-5xl mx-auto mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
        <input
          type="text"
          placeholder="Search by destination or name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-3/4 border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
        />
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition font-semibold">
          Search
        </button>
      </div>

      {/* Tour Packages */}
      <div className="max-w-6xl mx-auto mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4 pb-16">
        {filteredTours.length > 0 ? (
          filteredTours.map((tour) => (
            <div
              key={tour._id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={Tripevibe}
                  alt={tour.name}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-gray-800 text-xs px-3 py-1 rounded-lg shadow-sm">
                  📍 {tour.cities}
                </div>
              </div>

              {/* Details */}
              <div className="p-5 space-y-3">
                <h2 className="text-xl font-bold text-gray-800">{tour.name}</h2>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {tour.description}
                </p>

                <div className="grid grid-cols-2 gap-3 text-sm text-gray-700 mt-3">
                  <p>
                    🕒 <span className="font-medium">{tour.duration}</span> Days
                  </p>
                  <p>
                    👥 <span className="font-medium">{tour.groupCount}</span>{" "}
                    People
                  </p>
                  <p>
                    🏨 <span className="font-medium">{tour.hotelName}</span>
                  </p>
                  <p>
                    📍 <span className="font-medium">{tour.hotelLocation}</span>
                  </p>
                  <p>
                    🚗 <span className="font-medium">{tour.vehicleBrand}</span> (
                    {tour.vehicleModel})
                  </p>
                  <p>
                    🗣️ <span className="font-medium capitalize">{tour.languages}</span>
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-3 mt-2 flex justify-between items-center">
                  <span className="text-lg font-semibold text-[#41A4FF]">
                    ৳{tour.totalPrice.toLocaleString()}
                  </span>
                  <div className="flex gap-2">
                    <Link
                      to={`/allinoneresurvation/${tour._id}`}
                      className="bg-[#41A4FF] hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                    >
                      View Details
                    </Link>

                    <button
                      onClick={() => handleAddToWishlist(tour)}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                    >
                      Add to Wish
                    </button>
                  </div>
                </div>

                <p className="text-gray-400 text-xs text-right">
                  Created: {new Date(tour.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-20 text-lg">
            😔 No tour packages found.
          </div>
        )}
      </div>

      {/* ==== Success Modal ==== */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white px-8 py-6 rounded-2xl shadow-xl transform transition-all scale-100">
            <h2 className="text-2xl font-bold text-green-600 text-center">
              Wishlist Added!
            </h2>
            <p className="text-gray-700 mt-2 text-center">
              Tour added to your wishlist successfully.
            </p>

            <div className="mt-5 flex justify-center">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllInOneTourReservation;
