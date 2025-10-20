import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Ripple, initTE } from "tw-elements";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../context/authContext";

const AddTourPackage = () => {
  useEffect(() => {
    initTE({ Ripple });
  }, []);
  const navigate = useNavigate();

  // Form states
  const [name, setName] = useState("");
  const [groupCount, setGroupCount] = useState(0);
  const [languages, setLanguages] = useState("");
  const [duration, setDuration] = useState("");
  const [cities, setCities] = useState("");
  const [description, setDesc] = useState("");
  const [introduction, setIntroduction] = useState("");

  // ✅ new fields
  const [hotelName, setHotelName] = useState("");
  const [hotelLocation, setHotelLocation] = useState("");
  const [vehicleBrand, setVehicleBrand] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const { user } = useContext(AuthContext);
  const currentUser = user.email;

  // 🔹 handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      name === "" ||
      groupCount === 0 ||
      languages === "" ||
      duration === "" ||
      cities === "" ||
      description === "" ||
      introduction === "" ||
      hotelName === "" ||
      hotelLocation === "" ||
      vehicleBrand === "" ||
      vehicleModel === "" ||
      totalPrice === 0
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Missing required fields!",
      });
      return;
    }

    try {
      const result = await Swal.fire({
        title: "Confirm to save details for review",
        showDenyButton: true,
        confirmButtonText: "Confirm",
        denyButtonText: `Cancel`,
      });

      if (result.isConfirmed) {
        const response = await axios.post("/allinonetours", {
          currentUser,
          name,
        
          groupCount,
          languages,
          duration,
          cities,
          description,
          introduction,
          hotelName,
          hotelLocation,
          vehicleBrand,
          vehicleModel,
          totalPrice,
        });

        Swal.fire(response.data.message, "", "success");
        navigate("/allintouradmin");
      } else {
        Swal.fire("Tour adding cancelled!", "", "error");
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
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-4 sm:py-15 lg:max-w-7xl lg:px-8">
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-semibold leading-7 text-[#41A4FF] text-center">
              Add Tour Package
            </h2>
            <p className="mt-3 text-red-500 text-lg leading-6 text-center">
              Fill in all the required information carefully.
            </p>

            {/* 🏷️ Basic Details */}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* Package name */}
              <div className="sm:col-span-3">
                <label className="block text-lg font-medium text-gray-900">
                  Package Name
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="block w-full px-3 rounded-md border py-1.5 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Price per person */}
              {/* <div className="sm:col-span-3">
                <label className="block text-lg font-medium text-gray-900">
                  Price per Person
                </label>
                <input
                  type="number"
                  placeholder="Enter price"
                  className="block w-full px-3 rounded-md border py-1.5 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div> */}

              {/* Group size */}
              <div className="sm:col-span-3">
                <label className="block text-lg font-medium text-gray-900">
                  Group Size
                </label>
                <input
                  type="number"
                  placeholder="Enter max group size"
                  className="block w-full px-3 rounded-md border py-1.5 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  onChange={(e) => setGroupCount(e.target.value)}
                />
              </div>

              {/* Languages */}
              <div className="sm:col-span-3">
                <label className="block text-lg font-medium text-gray-900">
                  Languages (e.g. English, French)
                </label>
                <input
                  type="text"
                  placeholder="Enter languages"
                  className="block w-full px-3 rounded-md border py-1.5 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  onChange={(e) => setLanguages(e.target.value)}
                />
              </div>

              {/* Duration */}
              <div className="sm:col-span-3">
                <label className="block text-lg font-medium text-gray-900">
                  Duration (in days)
                </label>
                <select
                  className="block w-full px-3 rounded-md border py-1.5 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  onChange={(e) => setDuration(e.target.value)}
                >
                  <option>--Select One--</option>
                  <option value={1}>1 Day</option>
                  <option value={3}>3 Days</option>
                  <option value={5}>5 Days</option>
                  <option value={7}>7 Days</option>
                  <option value={10}>10 Days</option>
                </select>
              </div>

              {/* Cities */}
              <div className="col-span-full">
                <label className="block text-lg font-medium text-gray-900">
                  Cities Included
                </label>
                <input
                  type="text"
                  placeholder="e.g. Dhaka, Cox’s Bazar, Sylhet"
                  className="block w-full rounded-md border px-3 py-1.5 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  onChange={(e) => setCities(e.target.value)}
                />
              </div>

              {/* 🏨 New: Hotel Name */}
              <div className="sm:col-span-3">
                <label className="block text-lg font-medium text-gray-900">
                  Hotel Name
                </label>
                <input
                  type="text"
                  placeholder="Enter hotel name"
                  className="block w-full rounded-md border px-3 py-1.5 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  onChange={(e) => setHotelName(e.target.value)}
                />
              </div>

              {/* 🏙️ New: Hotel Location */}
              <div className="sm:col-span-3">
                <label className="block text-lg font-medium text-gray-900">
                  Hotel Location
                </label>
                <input
                  type="text"
                  placeholder="Enter hotel location"
                  className="block w-full rounded-md border px-3 py-1.5 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  onChange={(e) => setHotelLocation(e.target.value)}
                />
              </div>

              {/* 🚗 New: Vehicle Brand */}
              <div className="sm:col-span-3">
                <label className="block text-lg font-medium text-gray-900">
                  Vehicle Brand Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Toyota"
                  className="block w-full rounded-md border px-3 py-1.5 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  onChange={(e) => setVehicleBrand(e.target.value)}
                />
              </div>

              {/* 🚙 New: Vehicle Model */}
              <div className="sm:col-span-3">
                <label className="block text-lg font-medium text-gray-900">
                  Vehicle Model Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Hiace 2022"
                  className="block w-full rounded-md border px-3 py-1.5 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  onChange={(e) => setVehicleModel(e.target.value)}
                />
              </div>

              {/* 💰 New: Total Price */}
              <div className="sm:col-span-3">
                <label className="block text-lg font-medium text-gray-900">
                  Total Package Price
                </label>
                <input
                  type="number"
                  placeholder="Enter total price"
                  className="block w-full rounded-md border px-3 py-1.5 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  onChange={(e) => setTotalPrice(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* 📝 Description */}
          <div className="col-span-full">
            <label className="block text-lg font-medium text-gray-900">
              Description
            </label>
            <textarea
              rows={6}
              placeholder="Type your description here"
              className="block w-full rounded-md border px-3 py-2 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          {/* 🧭 Introduction */}
          <div className="col-span-full">
            <label className="block text-lg font-medium text-gray-900">
              Introduction
            </label>
            <textarea
              rows={6}
              placeholder="Write short introduction"
              className="block w-full rounded-md border px-3 py-2 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              onChange={(e) => setIntroduction(e.target.value)}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex items-center justify-end gap-x-6">
          <button
            type="reset"
            className="text-lg font-semibold text-red-700"
            value={"Reset"}
          >
            Reset
          </button>
          <button
            type="submit"
            className="rounded-md bg-black px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-[#41A4FF]"
          >
            Submit For Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTourPackage;
