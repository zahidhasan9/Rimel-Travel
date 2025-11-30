// import { useContext } from "react";
// import { AuthContext } from "../context/authContext";
// import { Link } from "react-router-dom";
// import backgroundImage from "../assets/images/bg.jpg";
// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   BarChart,
//   Bar,
// } from "recharts";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// const data2 = [
//   { name: "Users", value: 800 },
//   { name: "Hotels", value: 300 },
//   { name: "Vehicles", value: 300 },
//   { name: "Tours", value: 200 },
// ];

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
//   index,
// }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor={x > cx ? "start" : "end"}
//       dominantBaseline="central"
//     >
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

// const Admin = () => {
//   const { user } = useContext(AuthContext);

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="md:px-20 md:pt-20 md:pb-48 p-5 pb-20">
//         <h1 className="text-center text-[#41A4FF] text-3xl font-bold ">
//           Traverly Admin
//         </h1>
//         <h1 className="text-center text-lg pb-5">{user.name}</h1>

//         <div className="flex flex-row col-span-3 lg:px-32 px-8 pt-8 justify-between items-stretch gap-10">
//           <Link
//             to="/users"
//             className="p-10 flex-1 hover:bg-[#41A4FF] hover:text-2xl transition duration-300 ease-in-out hover:text-white rounded-lg font-bold shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
//           >
//             User Management
//           </Link>
//           <Link
//             to="/hotels"
//             className="p-10 flex-1 hover:bg-[#41A4FF] hover:text-2xl transition duration-300 ease-in-out hover:text-white rounded-lg font-bold shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
//           >
//             Hotel Management
//           </Link>
//           <Link
//             to="/tours"
//             className="p-10 flex-1 hover:bg-[#41A4FF] hover:text-2xl transition duration-300 ease-in-out hover:text-white rounded-lg font-bold shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
//           >
//             Tour Packages
//           </Link>
//         </div>

//         <div className="flex flex-row col-span-3 lg:px-32 px-8 pt-8 justify-between items-stretch gap-10">
//           <Link
//             to="/vehicle"
//             className="p-10 flex-1 hover:bg-[#41A4FF] hover:text-2xl transition duration-300 ease-in-out hover:text-white rounded-lg font-bold shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
//           >
//             Vehicle Management
//           </Link>
//           <Link
//             to="/train"
//             className="p-10 flex-1 hover:bg-[#41A4FF] hover:text-2xl transition duration-300 ease-in-out hover:text-white rounded-lg font-bold shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
//           >
//             Train Management
//           </Link>
//              <Link
//             to="/allintouradmin"
//             className="p-10 flex-1 hover:bg-[#41A4FF] hover:text-2xl transition duration-300 ease-in-out hover:text-white rounded-lg font-bold shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
//           >
//             All In One Tour
//           </Link>
//            <Link
//             to="/adminMessages"
//             className="p-10 flex-1 hover:bg-[#41A4FF] hover:text-2xl transition duration-300 ease-in-out hover:text-white rounded-lg font-bold shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
//           >
//             Check Messages
//           </Link>


//           {/* <Link
//             to="/addrestaurant"
//             className="p-10 flex-1 hover:bg-[#41A4FF] hover:text-2xl transition duration-300 ease-in-out hover:text-white rounded-lg font-bold shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
//           >
//             Restaurant Management
//           </Link> */}
//         </div>
// {/* 
//         <div className="flex flex-row col-span-3 lg:px-32 px-8 pt-8 justify-between items-stretch gap-10">
//           <Link
//             to="/pending-activities"
//             className="p-10 flex-1 hover:bg-[#41A4FF] hover:text-2xl transition duration-300 ease-in-out hover:text-white rounded-lg font-bold shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
//           >
//             Event Management
//           </Link>
//           <Link
//             to=""
//             className="p-10 flex-1 hover:bg-[#41A4FF] hover:text-2xl transition duration-300 ease-in-out hover:text-white rounded-lg font-bold shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
//           >
//             Reservation Management
//           </Link>
//           <Link
//             to=""
//             className="p-10 flex-1 hover:bg-[#41A4FF] hover:text-2xl transition duration-300 ease-in-out hover:text-white rounded-lg font-bold shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
//           >
//             Other
//           </Link>
//         </div> */}
//         <div className="flex flex-row col-span-2 lg:px-32 px-8 pt-8 justify-between items-stretch gap-10">
//           <div className="p-10 flex-1  rounded-lg font-bold shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart
//                 width={500}
//                 height={300}
//                 data={data}
//                 margin={{
//                   top: 5,
//                   right: 30,
//                   left: 20,
//                   bottom: 5,
//                 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="pv" fill="#8884d8" />
//                 <Bar dataKey="uv" fill="#82ca9d" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//           <div className="p-10 flex-1 rounded-lg font-bold shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
//             <div className="w-full">
//               <PieChart width={400} height={400}>
//                 <Pie
//                   data={data2}
//                   cx="50%"
//                   cy="50%"
//                   labelLine={false}
//                   label={renderCustomizedLabel}
//                   outerRadius={150}
//                   fill="#8884d8"
//                   dataKey="value"
//                 >
//                   {data.map((entry, index) => (
//                     <Cell
//                       key={`cell-${index}`}
//                       fill={COLORS[index % COLORS.length]}
//                     />
//                   ))}
//                 </Pie>
//               </PieChart>
//             </div>
//             <div className="grid grid-cols-4">
//               {data2.map((item, index) => (
//                 <p key={index} className="cursor-pointer font-bold">
//                   {item.name}
//                 </p>
//               ))}
//             </div>
//             <div className="grid grid-cols-4">
//               {COLORS.map((item, index) => (
//                 <div
//                   key={index}
//                   className="h-[30px] w-[30px]"
//                   style={{ backgroundColor: item }}
//                 >
//                   {item.name}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Admin;



import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/images/bg.jpg";

import { FaUsers, FaHotel, FaCar, FaTrain, FaBoxOpen, FaEnvelope, FaChartBar, FaChartPie } from "react-icons/fa";
import { MdOutlineTour, MdMessage } from "react-icons/md";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const data = [
  { name: "Jan", users: 4000, revenue: 2400 },
  { name: "Feb", users: 3000, revenue: 1398 },
  { name: "Mar", users: 2000, revenue: 9800 },
  { name: "Apr", users: 2780, revenue: 3908 },
  { name: "May", users: 1890, revenue: 4800 },
  { name: "Jun", users: 2390, revenue: 3800 },
  { name: "Jul", users: 3490, revenue: 4300 },
];

const pieData = [
  { name: "Users", value: 800, color: "#8b5cf6" },
  { name: "Hotels", value: 300, color: "#3b82f6" },
  { name: "Vehicles", value: 300, color: "#10b981" },
  { name: "Tours", value: 200, color: "#f59e0b" },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      className="text-sm font-bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Admin = () => {
  const { user } = useContext(AuthContext);

  const menuItems = [
    { to: "/users", label: "User Management", icon: FaUsers, gradient: "from-violet-500 to-purple-600" },
    { to: "/hotels", label: "Hotel Management", icon: FaHotel, gradient: "from-blue-500 to-cyan-500" },
    { to: "/tours", label: "Tour Packages", icon: MdOutlineTour, gradient: "from-emerald-500 to-teal-600" },
    { to: "/vehicle", label: "Vehicle Management", icon: FaCar, gradient: "from-orange-500 to-red-600" },
    { to: "/train", label: "Train Management", icon: FaTrain, gradient: "from-indigo-500 to-purple-600" },
    { to: "/allintouradmin", label: "All In One Tour", icon: FaBoxOpen, gradient: "from-pink-500 to-rose-600" },
    { to: "/addheadline", label: "Head Line", icon: FaBoxOpen, gradient: "from-pink-500 to-purple-600" },
    { to: "/adminMessages", label: "Check Messages", icon: MdMessage, gradient: "from-green-500 to-emerald-600" },
  ];

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.7)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-teal-900/40" />
      <div className="absolute inset-0 bg-gradient-to-tl from-pink-900/20 via-transparent to-cyan-900/20" />

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
            Traverly{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Admin
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light">
            Welcome back,{" "}
            <span className="font-bold text-cyan-300">{user?.name || "Admin"}</span>
          </p>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="group relative block p-1 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:border-white/40"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-40 transition-opacity duration-700" 
                style={{ backgroundImage: `linear-gradient(to bottom right, ${item.gradient})` }} 
              />
              <div className="relative bg-slate-900/70 backdrop-blur-xl rounded-3xl p-8 text-center h-full flex flex-col items-center justify-center">
                <div className={`p-5 rounded-2xl mb-5 bg-gradient-to-br ${item.gradient} shadow-lg`}>
                  <item.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {item.label}
                </h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-b-3xl" />
            </Link>
          ))}
        </div>

        {/* Analytics Section */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Bar Chart */}
          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl p-8 transform hover:scale-[1.02] transition-transform duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                <FaChartBar className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Growth Overview</h2>
            </div>
            <ResponsiveContainer width="100%" height={380}>
              <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                <CartesianGrid strokeDasharray="4 4" stroke="#ffffff15" />
                <XAxis dataKey="name" stroke="#e0e0e0" fontSize={14} />
                <YAxis stroke="#e0e0e0" fontSize={14} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569", borderRadius: "12px", color: "#fff" }}
                />
                <Bar dataKey="users" fill="#8b5cf6" radius={[12, 12, 0, 0]} barSize={30} />
                <Bar dataKey="revenue" fill="#06b6d4" radius={[12, 12, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl p-8 transform hover:scale-[1.02] transition-transform duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl">
                <FaChartPie className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Resource Distribution</h2>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <ResponsiveContainer width="100%" height={320}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                    labelLine={false}
                    label={renderCustomizedLabel}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: "#1e293b", borderRadius: "12px", border: "none" }} />
                </PieChart>
              </ResponsiveContainer>

              <div className="space-y-5">
                {pieData.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full shadow-lg" style={{ backgroundColor: item.color }} />
                    <span className="text-gray-200 font-medium text-lg">{item.name}</span>
                    <span className="text-white font-bold text-xl ml-3">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

  
      </div>
    </div>
  );
};

export default Admin;