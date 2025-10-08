import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const VehiclereservationView = () => {
  const { vehicleId } = useParams();

  const [vehicleData, setVehicleData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Vehicle Data
  useEffect(() => {
    const fetchVehicleData = async () => {
      try {
        const res = await axios.get(`/vehiclereservation/${vehicleId}`);
        setVehicleData(res.data);
        console.log("✅ Vehicle Reservation Data:", res.data);
      } catch (err) {
        console.error("❌ Error fetching vehicle data:", err);
        setError(err.message);
      }
    };
    if (vehicleId) fetchVehicleData();
  }, [vehicleId]);

  // Fetch User Data (after vehicleData loaded)
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`/users/user/${vehicleData.userId}`);
        setUserData(res.data);
        console.log("✅ User Reservation Data:", res.data);
      } catch (err) {
        console.error("❌ Error fetching user data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    if (vehicleData?.userId) fetchUserData();
  }, [vehicleData]);

  if (loading) return <div className="text-center py-10 text-gray-600">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-600">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-10 px-5 lg:px-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        Vehicle Reservation Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vehicle Details */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-5 text-blue-600">
            🚗 Vehicle Information
          </h3>
          <div className="space-y-3 text-gray-700">
            <p><strong>Vehicle Number:</strong> {vehicleData.vehicleNumber}</p>
            <p><strong>Location:</strong> {vehicleData.location}</p>
            <p><strong>Pickup Date:</strong> {new Date(vehicleData.pickupDate).toLocaleDateString()}</p>
            <p><strong>Return Date:</strong> {new Date(vehicleData.returnDate).toLocaleDateString()}</p>
            <p><strong>Need Driver:</strong> {vehicleData.needDriver ? "Yes" : "No"}</p>
            <p><strong>Price:</strong> ${vehicleData.price}</p>
            <p><strong>Transaction ID:</strong> {vehicleData.transactionId}</p>
          </div>
        </div>

        {/* Traveler Details */}
        {userData && (
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-5 text-green-600">
              👤 Traveler Information
            </h3>
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <img
                src={userData.img || userData.pic}
                alt={userData.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-green-200 shadow-md"
              />
              <div className="space-y-3 text-gray-700">
                <p><strong>Name:</strong> {userData.name}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Mobile:</strong> {userData.mobile}</p>
                <p><strong>Country:</strong> {userData.country}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Extra: Combined Summary */}
      <div className="mt-10 bg-white rounded-2xl shadow-md p-6 text-center">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Summary</h4>
        <p className="text-gray-600">
          Vehicle <strong>{vehicleData.vehicleNumber}</strong> is booked by{" "}
          <strong>{userData?.name}</strong> from{" "}
          <strong>{vehicleData.location}</strong> between{" "}
          {new Date(vehicleData.pickupDate).toLocaleDateString()} and{" "}
          {new Date(vehicleData.returnDate).toLocaleDateString()}.
        </p>
      </div>
    </div>
  );
};

export default VehiclereservationView;
