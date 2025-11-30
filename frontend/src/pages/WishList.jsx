import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (user?._id) {
      // শুধুমাত্র current user-এর wishlist filter করা
      const filtered = savedWishlist.filter((item) => item.userId === user._id);
      setWishlist(filtered);
    }
  }, []);

  const handleRemove = (tourId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    let savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const updatedWishlist = savedWishlist.filter(
      (item) => !(item.tourId === tourId && item.userId === user._id)
    );

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No items in your wishlist</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {wishlist.map((item) => (
            <div
              key={item.tourId}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover"
              />

              {/* Details */}
              <div className="p-4 flex flex-col gap-2">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-lg font-bold text-blue-600">৳ {item.price}</p>

                {/* Buttons */}
                <div className="flex gap-3 mt-3">
                 <Link to={item.link}
                      className="flex-1 text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-xl shadow hover:from-blue-600 hover:to-blue-800 transition">
                            View
                        </Link>

                  <button
                    onClick={() => handleRemove(item.tourId)}
                    className="flex-1 bg-red-500 text-white py-2 rounded-xl shadow hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
