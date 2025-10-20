import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import axios from "axios";

const Vehiclelist = () => {
  const { data, reFetch } = useFetch(`/allinonetours`);
  const [selectedTour, setSelectedTour] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // ✅ Handle Delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this tour?")) {
      try {
        await axios.delete(`/allinonetours/${id}`);
        alert("Tour deleted successfully!");
        reFetch();
      } catch (error) {
        console.error(error);
        alert("Failed to delete tour");
      }
    }
  };

  // ✅ Handle View
  const handleView = (tour) => {
    setSelectedTour(tour);
    setShowModal(true);
  };

  // ✅ Table Columns
  const columns = [
    { field: "name", headerName: "Tour Name" },
    { field: "hotelName", headerName: "Hotel" },
    { field: "hotelLocation", headerName: "Location" },
    { field: "vehicleBrand", headerName: "Vehicle Brand" },
    { field: "vehicleModel", headerName: "Vehicle Model" },
    { field: "duration", headerName: "Days" },
    { field: "groupCount", headerName: "Group Size" },
    { field: "totalPrice", headerName: "Total Price (৳)" },
    { field: "languages", headerName: "Language" },
    { field: "status", headerName: "Status" },
    { field: "actions", headerName: "Actions" },
  ];

  // ✅ Datatable Component
const Datatable = ({ columns, data = [] }) => (
  <div className="overflow-x-auto bg-white shadow-lg rounded-2xl mt-6 border border-gray-200">
    <table className="min-w-full table-auto text-sm text-gray-800">
      <thead className="bg-gray-100 text-gray-700 text-left">
        <tr>
          {columns.map((col, idx) => (
            <th
              key={idx}
              className="px-5 py-3 font-semibold uppercase border-b border-gray-200"
            >
              {col.headerName}
            </th>
          ))}
        </tr>
      </thead>

      <tbody
        className="align-top"
        style={{
          minHeight: "350px", // 🧩 keeps table height large even if empty
        }}
      >
        {data && data.length > 0 ? (
          data.map((item, rowIdx) => (
            <tr
              key={item._id}
              className={`hover:bg-gray-50 transition duration-200 ${
                rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              {columns.map((col, colIdx) => {
                if (col.field === "actions") {
                  return (
                    <td
                      key={colIdx}
                      className="px-5 py-3 border-b border-gray-100"
                    >
                      <button
                        onClick={() => handleView(item)}
                        className="text-blue-600 hover:text-blue-800 font-semibold mr-3"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="text-red-600 hover:text-red-800 font-semibold"
                      >
                        Delete
                      </button>
                    </td>
                  );
                } else {
                  return (
                    <td key={colIdx} className="px-5 py-3 border-b border-gray-100">
                      {item[col.field] || "-"}
                    </td>
                  );
                }
              })}
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan={columns.length}
              className="text-center text-gray-500 py-20 font-medium" // increased padding
            >
              No tours found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);


  // ✅ Modal Component
  const Modal = ({ tour, onClose }) => {
    if (!tour) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl shadow-lg w-11/12 md:w-2/3 lg:w-1/2 max-h-[90vh] overflow-y-auto p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-gray-600 hover:text-black text-2xl font-bold"
          >
            ×
          </button>

          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            {tour.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <p><strong>Hotel Name:</strong> {tour.hotelName}</p>
            <p><strong>Hotel Location:</strong> {tour.hotelLocation}</p>
            <p><strong>Vehicle Brand:</strong> {tour.vehicleBrand}</p>
            <p><strong>Vehicle Model:</strong> {tour.vehicleModel}</p>
            <p><strong>Duration:</strong> {tour.duration} Days</p>
            <p><strong>Group Count:</strong> {tour.groupCount}</p>
            <p><strong>Language:</strong> {tour.languages}</p>
            <p><strong>Total Price:</strong> ৳{tour.totalPrice}</p>
            <p><strong>Status:</strong> {tour.status}</p>
            <p><strong>Cities:</strong> {tour.cities}</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold">Introduction:</p>
            <p className="text-gray-600 text-sm mt-1">{tour.introduction}</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold">Description:</p>
            <p className="text-gray-600 text-sm mt-1">{tour.description}</p>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              onClick={onClose}
              className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* 🔹 Header Section */}
      <div className="flex flex-row col-span-2 lg:px-32 px-8 pt-7 pb-2 justify-between md:items-center ">
        <div className="text-3xl font-bold">All In One Tour Management</div>
        <div className="grid md:grid-cols-2 gap-1">
          <Link
            to="/addallOnetour"
            className="bg-blue-500 hover:bg-blue-700 text-center text-white font-bold py-2 px-4 rounded cursor-pointer lg:mt-0 mt-3"
          >
            Add Tour
          </Link>
          <Link
            to="/tourreservation/all"
            className="bg-blue-500 hover:bg-blue-700 text-center text-white font-bold py-2 px-4 rounded cursor-pointer lg:mt-0 mt-3"
          >
            Reservations
          </Link>
        </div>
      </div>

      {/* 🔹 Table Section */}
      <div className="lg:px-32 px-8 min-h-96">
        <Datatable columns={columns} data={data} />
      </div>

      {/* 🔹 Modal */}
      {showModal && (
        <Modal
          tour={selectedTour}
          onClose={() => {
            setShowModal(false);
            setSelectedTour(null);
          }}
        />
      )}
    </>
  );
};

export default Vehiclelist;
