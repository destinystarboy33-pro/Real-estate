// import axios from "axios";
// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// const Search = () => {

//   const [showFilter, setShowFilter] = useState(false);
//   const [activeFilter, setActiveFilter] = useState("");

//   const [name, setName] = useState("");
//   const [location, setLocation] = useState("");
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");

//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const propertyTypes = [
//     "House",
//     "Land",
//     "Office",
//     "Hotel",
//     "Commercial Building",
//     "Estate"
//   ];


//   // SEARCH PROPERTIES
//   const searchProperties = async (filter, value = "") => {

//     try {

//       setLoading(true);

//       let url = "https://real-estate-qtye.onrender.com/api/Router?";

//       if (filter === "name" && value.trim()) {
//         url += `name=${encodeURIComponent(value)}`;
//       }

//       if (filter === "location" && value.trim()) {
//         url += `location=${encodeURIComponent(value)}`;
//       }

//       if (filter === "price") {

//         const params = [];

//         if (minPrice) {
//           params.push(`minPrice=${encodeURIComponent(minPrice)}`);
//         }

//         if (maxPrice) {
//           params.push(`maxPrice=${encodeURIComponent(maxPrice)}`);
//         }

//         url += params.join("&");
//       }

//       if (filter === "propertyType") {
//         url += `propertyType=${encodeURIComponent(value)}`;
//       }

//       const response = await axios.get(url);

//       setProperties(response.data);

//     } catch (error) {

//       console.log(error);

//     } finally {

//       setLoading(false);

//     }

//   };


//   // MAIN SEARCH
//   const handleMainSearch = () => {

//     if (!name.trim()) {
//       return;
//     }

//     searchProperties("name", name);

//   };


//   // PROPERTY TYPE
//   const handlePropertyType = (type) => {

//     searchProperties("propertyType", type);

//   };


//   // CLEAR FILTERS
//   const clearFilters = () => {

//     setName("");
//     setLocation("");
//     setMinPrice("");
//     setMaxPrice("");
//     setActiveFilter("");

//     setProperties([]);

//   };


//   return (

//     <div className="min-h-screen bg-gray-100 px-5 py-10">

//       <div className="mx-auto max-w-6xl">


//         {/* PAGE TITLE */}

//         <h1 className="mb-6 text-3xl font-bold text-blue-700">
//           Search Properties
//         </h1>


//         {/* MAIN SEARCH BAR */}

//         <div className="flex flex-col gap-3 sm:flex-row">

//           <div className="relative flex-1">

//             <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>

//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") {
//                   handleMainSearch();
//                 }
//               }}
//               placeholder="Search property..."
//               className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-11 pr-4 outline-none focus:border-blue-600"
//             />

//           </div>


//           <button
//             onClick={handleMainSearch}
//             className="rounded-lg bg-blue-700 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
//           >

//             <i className="fa-solid fa-magnifying-glass mr-2"></i>

//             Search

//           </button>

//         </div>


//         {/* FILTER BUTTON */}

//         <button
//           onClick={() => {

//             setShowFilter(!showFilter);

//             setActiveFilter("");

//           }}
//           className="mt-5 flex items-center gap-2 rounded-lg border border-blue-700 bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
//         >

//           <i className="fa-solid fa-filter"></i>

//           Filter

//           <i
//             className={`fa-solid fa-chevron-${
//               showFilter ? "up" : "down"
//             }`}
//           ></i>

//         </button>


//         {/* FILTER MENU */}

//         {showFilter && (

//           <div className="mt-5 w-full max-w-md rounded-xl bg-white p-5 shadow-md">

//             <div className="mb-5 flex items-center justify-between">

//               <h2 className="text-xl font-bold text-gray-800">
//                 Filter By
//               </h2>

//               <button
//                 onClick={clearFilters}
//                 className="text-sm font-semibold text-red-500 hover:text-red-700"
//               >
//                 Clear
//               </button>

//             </div>


//             {/* NAME */}

//             <button
//               onClick={() => setActiveFilter("name")}
//               className="mb-3 flex w-full items-center justify-between rounded-lg border border-gray-200 p-4 text-left font-semibold transition hover:bg-blue-50"
//             >

//               <span>

//                 <i className="fa-solid fa-house mr-3 text-blue-700"></i>

//                 Filter by Name

//               </span>

//               <i className="fa-solid fa-chevron-right"></i>

//             </button>


//             {/* LOCATION */}

//             <button
//               onClick={() => setActiveFilter("location")}
//               className="mb-3 flex w-full items-center justify-between rounded-lg border border-gray-200 p-4 text-left font-semibold transition hover:bg-blue-50"
//             >

//               <span>

//                 <i className="fa-solid fa-location-dot mr-3 text-blue-700"></i>

//                 Filter by Location

//               </span>

//               <i className="fa-solid fa-chevron-right"></i>

//             </button>


//             {/* PRICE */}

//             <button
//               onClick={() => setActiveFilter("price")}
//               className="mb-3 flex w-full items-center justify-between rounded-lg border border-gray-200 p-4 text-left font-semibold transition hover:bg-blue-50"
//             >

//               <span>

//                 <i className="fa-solid fa-money-bill mr-3 text-blue-700"></i>

//                 Filter by Price

//               </span>

//               <i className="fa-solid fa-chevron-right"></i>

//             </button>


//             {/* PROPERTY TYPE */}

//             <button
//               onClick={() => setActiveFilter("propertyType")}
//               className="flex w-full items-center justify-between rounded-lg border border-gray-200 p-4 text-left font-semibold transition hover:bg-blue-50"
//             >

//               <span>

//                 <i className="fa-solid fa-building mr-3 text-blue-700"></i>

//                 Property Type

//               </span>

//               <i className="fa-solid fa-chevron-right"></i>

//             </button>


//             {/* NAME INPUT */}

//             {activeFilter === "name" && (

//               <div className="mt-5 border-t pt-5">

//                 <label className="mb-2 block font-semibold text-gray-700">
//                   Property Name
//                 </label>

//                 <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   placeholder="Enter property name"
//                   className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-600"
//                 />

//                 <button
//                   onClick={() => searchProperties("name", name)}
//                   className="mt-3 w-full rounded-lg bg-blue-700 py-3 font-semibold text-white hover:bg-blue-800"
//                 >
//                   Search
//                 </button>

//               </div>

//             )}


//             {/* LOCATION INPUT */}

//             {activeFilter === "location" && (

//               <div className="mt-5 border-t pt-5">

//                 <label className="mb-2 block font-semibold text-gray-700">
//                   Location
//                 </label>

//                 <input
//                   type="text"
//                   value={location}
//                   onChange={(e) => setLocation(e.target.value)}
//                   placeholder="Enter location"
//                   className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-600"
//                 />

//                 <button
//                   onClick={() => searchProperties("location", location)}
//                   className="mt-3 w-full rounded-lg bg-blue-700 py-3 font-semibold text-white hover:bg-blue-800"
//                 >
//                   Search
//                 </button>

//               </div>

//             )}


//             {/* PRICE INPUT */}

//             {activeFilter === "price" && (

//               <div className="mt-5 border-t pt-5">

//                 <label className="mb-2 block font-semibold text-gray-700">
//                   Minimum Price
//                 </label>

//                 <input
//                   type="number"
//                   value={minPrice}
//                   onChange={(e) => setMinPrice(e.target.value)}
//                   placeholder="Minimum price"
//                   min="0"
//                   className="mb-3 w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-600"
//                 />


//                 <label className="mb-2 block font-semibold text-gray-700">
//                   Maximum Price
//                 </label>

//                 <input
//                   type="number"
//                   value={maxPrice}
//                   onChange={(e) => setMaxPrice(e.target.value)}
//                   placeholder="Maximum price"
//                   min="0"
//                   className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-600"
//                 />


//                 <button
//                   onClick={() => searchProperties("price")}
//                   className="mt-3 w-full rounded-lg bg-blue-700 py-3 font-semibold text-white hover:bg-blue-800"
//                 >
//                   Search
//                 </button>

//               </div>

//             )}


//             {/* PROPERTY TYPE OPTIONS */}

//             {activeFilter === "propertyType" && (

//               <div className="mt-5 border-t pt-5">

//                 <p className="mb-3 font-semibold text-gray-700">
//                   Select Property Type
//                 </p>

//                 <div className="space-y-2">

//                   {propertyTypes.map((type) => (

//                     <button
//                       key={type}
//                       onClick={() => handlePropertyType(type)}
//                       className="flex w-full items-center justify-between rounded-lg border border-gray-200 p-3 text-left transition hover:bg-blue-50"
//                     >

//                       <span>{type}</span>

//                       <i className="fa-solid fa-chevron-right text-gray-400"></i>

//                     </button>

//                   ))}

//                 </div>

//               </div>

//             )}

//           </div>

//         )}


//         {/* SEARCH RESULTS */}

//         <div className="mt-10">

//           <h2 className="mb-5 text-2xl font-bold text-gray-800">
//             Search Results
//           </h2>


//           {/* LOADING */}

//           {loading && (

//             <div className="py-10 text-center">

//               <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-blue-700 border-t-transparent"></div>

//               <p className="mt-3 text-gray-500">
//                 Loading properties...
//               </p>

//             </div>

//           )}


//           {/* NO RESULTS */}

//           {!loading && properties.length === 0 && (

//             <div className="rounded-xl bg-white p-10 text-center shadow-sm">

//               <i className="fa-solid fa-house mb-3 text-4xl text-gray-300"></i>

//               <p className="text-gray-500">
//                 No properties found.
//               </p>

//             </div>

//           )}


//           {/* PROPERTY RESULTS */}

//           {!loading && properties.length > 0 && (

//             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

//               {properties.map((property) => (

//                 <NavLink
//                   key={property._id}
//                   to={`/house/${property._id}`}
//                   className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
//                 >

//                   <img
//                     src={property.image}
//                     alt={property.name}
//                     className="h-52 w-full object-cover"
//                   />


//                   <div className="p-5">

//                     <h3 className="text-xl font-bold text-gray-800">
//                       {property.name}
//                     </h3>


//                     <p className="mt-2 text-gray-500">

//                       <i className="fa-solid fa-location-dot mr-2"></i>

//                       {property.location}

//                     </p>


//                     <p className="mt-2 text-lg font-bold text-blue-700">
//                       ₦{Number(property.price).toLocaleString()}
//                     </p>


//                     <p className="mt-1 text-sm text-gray-500">
//                       {property.propertyType}
//                     </p>

//                   </div>

//                 </NavLink>

//               ))}

//             </div>

//           )}

//         </div>

//       </div>

//     </div>

//   );
// };

// export default Search;