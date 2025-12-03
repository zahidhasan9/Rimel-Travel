

import React, { useEffect, useState } from "react";
import NavigatedMenu from "../navbar/NavigatedMenu";
import TourNav from "../navbar/TourNav";
import HeroTour from "../../pages/Tour/HeroTour";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const Beach = () => {
  const location = useLocation();
  const path = location.pathname;
  const title = path.split("/").pop().toLowerCase();

  const [filterdTours, setTour] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getTours = async () => {
      try {
        const response = await axios.get("/tours");

        const tours = response.data.filter((tour) => {
          const category = tour.category.toLowerCase().replace(/\s+/g, "");
          return category === title;
        });

        setTour(tours);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    getTours();
  }, [title]);

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
      price: tour.price,
      img: tour.img,
      link: `/tours/${tour._id}`,
    };

    const updatedList = [...existing, newItem];
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
    setShowModal(true);
  };

  return (
    <div>
      <HeroTour />
      <NavigatedMenu />
      <TourNav />

      {loading ? (
        <div className="text-center text-lg py-20">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
        </div>
      ) : (
        <div>
          {filterdTours.length !== 0 ? (
            <div className="bg-white grid 
              grid-cols-1 
              sm:grid-cols-2 
              lg:grid-cols-3 
              xl:grid-cols-4 
              px-4 sm:px-10 lg:px-20 xl:px-32 
              gap-6 sm:gap-8 lg:gap-10 
              mb-20 mt-10">

              {filterdTours.map((tour) => (
                <div key={tour._id} className="w-full">
                  <div className="group relative rounded-2xl shadow-xl border">
                    <div className="h-56 sm:h-64 md:h-72 lg:h-80 w-full overflow-hidden rounded-t-2xl bg-gray-200 group-hover:opacity-80 transition">
                      <img
                        src={tour.img}
                        alt="Tour"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="p-4">
                      <h3 className="text-xl font-bold text-gray-700">
                        <Link to={`/tours/${tour._id}`}>{tour.name}</Link>
                      </h3>
                      <p className="text-md font-medium text-gray-900">
                        {tour.duration} days
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 p-4">
                      <p className="text-sm font-bold">From {tour.price} Tk</p>

                      <div className="flex w-full sm:w-auto justify-between gap-3">
                        <Link
                          to={`/tours/${tour._id}`}
                          className="flex-1 text-center bg-blue-600 text-white p-2 rounded-xl shadow-md"
                        >
                          View
                        </Link>

                        <button
                          onClick={() => handleAddToWishlist(tour)}
                          className="flex-1 bg-green-600 text-white p-2 rounded-xl shadow-md"
                        >
                          Wish
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-lg mb-20">No Matching Items Found</div>
          )}

          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
              <div className="bg-white px-8 py-6 rounded-2xl shadow-xl">
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
      )}
    </div>
  );
};

export default Beach;
