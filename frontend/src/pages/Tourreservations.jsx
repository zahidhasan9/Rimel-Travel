// import React, { useEffect, useState } from "react";
// // import Datatable from "../components/datatable/Datatable";
// import Datatable from "../components/datatable/tourReservationColumns";
// import { tourReservationColumns } from "../components/datatable/tourReservationColumns";
// import useFetch from "../hooks/useFetch";
// import { Link, useLocation } from "react-router-dom";
// import jspdf from "jspdf";
// import "jspdf-autotable";
// import moment from "moment";
// import axios from "axios";

// const Tourreservations = ({ columns }) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get("/tours/tourReservations"); // API call
//         setData(res.data); // API response must be array
//       } catch (err) {
//         console.error("Error fetching data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
// console.log(data, "tour data")
//   }, []);
//   return (
//     <>
//       <div className="flex flex-row col-span-2 lg:px-32 px-8 pt-7 pb-2 justify-between md:items-center ">
//         <div className="text-3xl font-bold">Tour Package Reservations</div>
//       </div>

//       <div>
//         {/* <Datatable columns={columns} /> */}
//          <Datatable columns={columns} rows={data} loading={loading} />
//       </div>
//     </>
//   );
// };

// export default Tourreservations;



// // src/pages/tours/TourReservations.jsx
// import React, { useEffect, useState } from "react";
// // import Datatable from "../../components/datatable/Datatable";
//  import Datatable from "../components/datatable/Datatabletour";
// // import Datatable from "../components/datatable/tourReservationColumns";
// import { tourReservationColumns } from "../components/datatable/tourReservationColumns";
// import axios from "axios";

// const TourReservations = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchReservations = async () => {
//       try {
//         const res = await axios.get("/tours/tourReservations");
//         setData(res.data);
//       } catch (err) {
//         console.error("Error fetching reservations:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchReservations();
//   }, []);
// console.log(data, "tour data");
//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-5">Tour Package Reservations</h1>
//       <Datatable columns={tourReservationColumns} rows={data} loading={loading} />
//     </div>
//   );
// };

// export default TourReservations;




import React, { useEffect, useState, useMemo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import Swal from "sweetalert2";
import CircularProgress from "@mui/material/CircularProgress";

const TourReservations = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch reservations from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/tours/tourReservations");
        // Ensure data is array
        setData(Array.isArray(res.data) ? res.data : res.data.data || []);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Delete reservation
  const handleDelete = async (id) => {
    const confirmResult = await Swal.fire({
      title: "Are you sure you want to delete this?",
      text: "This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "No, cancel",
      reverseButtons: true,
    });

    if (confirmResult.isConfirmed) {
      try {
        setLoading(true);
        await axios.delete(`/tours/tourReservations/${id}`);
        setData((prev) => prev.filter((item) => item._id !== id));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  // Action column for DataGrid
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <div className="flex gap-2">
          <div
            className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded cursor-pointer"
            onClick={() => handleDelete(params.row._id)}
          >
            Delete
          </div>
        </div>
      ),
    },
  ];

  // Columns definition
  const columns = [
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
     { field: "price", headerName: "Price", width: 150 },
    { field: "currentUser", headerName: "User Email", width: 250 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "guestCount", headerName: "Guest Count", width: 120 },
    { field: "city", headerName: "city", width: 150 },
    {
      field: "date",
      headerName: "Date",
      width: 150,
      valueGetter: (params) =>
        new Date(params.row.date).toLocaleDateString(),
    },
    {
      field: "endDate",
      headerName: "End Date",
      width: 150,
      valueGetter: (params) =>
        new Date(params.row.endDate).toLocaleDateString(),
    },
  ];

  // Filtered list for search
  const filteredList = useMemo(() => {
    if (!searchQuery) return data;
    const regex = new RegExp(searchQuery.trim(), "i");
    return data.filter((item) =>
      `${item.firstName} ${item.lastName} ${item.currentUser} ${item.phone}`.match(regex)
    );
  }, [data, searchQuery]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Tour Package Reservations</h1>

      <input
        type="text"
        placeholder="Search"
        className="border p-2 mb-4 w-full rounded"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={filteredList}
          columns={columns.concat(actionColumn)}
          getRowId={(row) => row._id}
          pageSize={10}
          rowsPerPageOptions={[10]}
          loading={loading}
          components={{
            LoadingOverlay: () => (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </div>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default TourReservations;

