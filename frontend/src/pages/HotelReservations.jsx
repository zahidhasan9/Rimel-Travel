import React, { useEffect, useState, useMemo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import Swal from "sweetalert2";

const HotelReservations = () => {
  const { data } = useFetch("http://localhost:5000/api/hotelreservation/getAll");
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (data) {
      const formattedData = data.map((item) => ({
        id: item._id, // DataGrid expects 'id'
        hotelName: item.hotelName || "Unknown",
        ...item,
      }));
      setRows(formattedData);
    }
  }, [data]);

  // ✅ Delete handler
  const handleDelete = async (id) => {
    const confirmResult = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (confirmResult.isConfirmed) {
      try {
        await axios.delete(`http://localhost:5000/api/hotelreservation/${id}`);
        Swal.fire("Deleted!", "Reservation has been deleted.", "success");
        setRows(rows.filter((row) => row.id !== id)); // Remove deleted row from state
      } catch (err) {
        Swal.fire("Error!", "Failed to delete reservation.", "error");
      }
    }
  };

  // ✅ Columns including action column
  const columns = [
    // { field: "id", headerName: "Reservation ID", width: 150 },
    { field: "hotelName", headerName: "Hotel Name", width: 150 },
    { field: "userName", headerName: "User Name", width: 150 },
    { field: "phone", headerName: "User phone", width: 150 },
    { field: "checkInDate", headerName: "Check-In", width: 120 },
    { field: "checkOutDate", headerName: "Check-Out", width: 120 },
    { field: "totalDays", headerName: "Days", width: 80 },
    { field: "totalPrice", headerName: "Total Price", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <button
          className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded"
          onClick={() => handleDelete(params.row.id)}
        >
          Delete
        </button>
      ),
    },
  ];

  // Optional: Search functionality
  const [searchQuery, setSearchQuery] = useState("");
  const filteredRows = useMemo(() => {
    if (!searchQuery) return rows;
    const regex = new RegExp(searchQuery.trim(), "i");
    return rows.filter((row) =>
      `${row.userName} ${row.checkInDate} ${row.checkOutDate} ${row.totalDays} ${row.totalPrice}`.match(regex)
    );
  }, [rows, searchQuery]);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Hotel Reservations</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded px-3 py-1"
        />
      </div>

      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 20, 50]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default HotelReservations;
