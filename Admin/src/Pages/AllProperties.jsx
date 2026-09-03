import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Loading from "../Components/Loading";
import BackBtn from "../Components/BackBtn";

const AllProperties = () => {

  const [properties, setProperties] = useState([]);

  const [deleteId, setDeleteId] = useState(null);

  const [showDelete, setShowDelete] = useState(false);

  const [showMessage, setShowMessage] = useState(false);

  const [loading, setLoading] = useState(false);

  // SEARCH + FILTER STATES

  const [search, setSearch] = useState("");

  const [showFilter, setShowFilter] = useState(false);

  const [activeFilter, setActiveFilter] = useState("");

  const [location, setLocation] = useState("");

  const [minPrice, setMinPrice] = useState("");

  const [maxPrice, setMaxPrice] = useState("");

  const [propertyType, setPropertyType] = useState("");

  const searchTimer = useRef(null);


  const propertyTypes = [
    "House",
    "Land",
    "Office",
    "Hotel",
    "Commercial Building",
    "Estate"
  ];


  // =========================
  // GET ALL PROPERTIES
  // =========================

  useEffect(() => {

    let ignore = false;

    const getProperties = async () => {

      try {

        setLoading(true);

        const response = await axios.get(
          "https://real-estate-qtye.onrender.com/api/Router"
        );

        console.log(response.data);

        if (!ignore) {
          setProperties(response.data);
        }

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

    getProperties();

    return () => {
      ignore = true;
    };

  }, []);


  // =========================
  // SEARCH BY NAME
  // =========================

  const searchByName = async (value) => {

    if (!value.trim()) {

      // Get all properties again

      try {

        setLoading(true);

        const response = await axios.get(
          "https://real-estate-qtye.onrender.com/api/Router"
        );

        setProperties(response.data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

      return;
    }


    try {

      setLoading(true);

      const response = await axios.get(
        `https://real-estate-qtye.onrender.com/api/Router?name=${encodeURIComponent(value)}`
      );

      setProperties(response.data);

    } catch (error) {

      console.log("SEARCH ERROR:", error);

      setProperties([]);

    } finally {

      setLoading(false);

    }

  };


  // =========================
  // SEARCH AS YOU TYPE
  // =========================

  const handleSearchChange = (e) => {

    const value = e.target.value;

    setSearch(value);

    clearTimeout(searchTimer.current);

    searchTimer.current = setTimeout(() => {

      searchByName(value);

    }, 500);

  };


  // =========================
  // FILTER SEARCH
  // =========================

  const searchProperties = async (filter, value = "") => {

    try {

      setLoading(true);

      let url =
        "https://real-estate-qtye.onrender.com/api/Router?";


      // NAME

      if (filter === "name") {

        if (!value.trim()) {

          setProperties([]);

          setLoading(false);

          return;

        }

        url += `name=${encodeURIComponent(value)}`;

      }


      // LOCATION

      if (filter === "location") {

        if (!value.trim()) {

          setProperties([]);

          setLoading(false);

          return;

        }

        url += `location=${encodeURIComponent(value)}`;

      }


      // PRICE

      if (filter === "price") {

        const params = [];

        if (minPrice) {

          params.push(
            `minPrice=${encodeURIComponent(minPrice)}`
          );

        }

        if (maxPrice) {

          params.push(
            `maxPrice=${encodeURIComponent(maxPrice)}`
          );

        }

        url += params.join("&");

      }


      // PROPERTY TYPE

      if (filter === "propertyType") {

        url += `propertyType=${encodeURIComponent(value)}`;

      }


      const response = await axios.get(url);

      setProperties(response.data);

    } catch (error) {

      console.log("FILTER ERROR:", error);

      setProperties([]);

    } finally {

      setLoading(false);

    }

  };


  // =========================
  // PROPERTY TYPE
  // =========================

  const handlePropertyType = (type) => {

    setPropertyType(type);

    searchProperties("propertyType", type);

  };


  // =========================
  // CLEAR FILTERS
  // =========================

  const clearFilters = async () => {

    setSearch("");

    setLocation("");

    setMinPrice("");

    setMaxPrice("");

    setPropertyType("");

    setActiveFilter("");


    try {

      setLoading(true);

      const response = await axios.get(
        "https://real-estate-qtye.onrender.com/api/Router"
      );

      setProperties(response.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };


  // =========================
  // DELETE PROPERTY
  // =========================

  const handleDelete = async () => {

    try {

      setLoading(true);

      const token = localStorage.getItem("token");

      const response = await axios.delete(
        `https://real-estate-qtye.onrender.com/api/Router/${deleteId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);


      // Remove deleted property from screen

      setProperties((currentProperties) =>
        currentProperties.filter(
          (property) => property._id !== deleteId
        )
      );


      setShowDelete(false);

      setDeleteId(null);

      setShowMessage(true);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };


  if (loading) {
    return <Loading />;
  }


  return (

    <div className="min-h-screen bg-gray-100 px-5 py-10 md:px-10">

      <BackBtn />


      <h1 className="text-3xl font-bold text-blue-700">
        All Properties
      </h1>


      {/* =========================
          SEARCH
      ========================= */}

      <div className="mt-8 w-full max-w-4xl flex flex-col md:flex-row gap-3">

        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search property..."
          className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-600"
        />


        <button
          onClick={() => searchByName(search)}
          className="rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700 cursor-pointer"
        >

          <i className="fa-solid fa-magnifying-glass mr-2"></i>

          Search

        </button>

      </div>


      {/* =========================
          FILTER BUTTON
      ========================= */}

      <div className="mt-5">

        <button
          onClick={() => {

            setShowFilter(!showFilter);

            setActiveFilter("");

          }}
          className="flex items-center gap-2 rounded-lg border border-blue-600 bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 cursor-pointer"
        >

          <i className="fa-solid fa-filter"></i>

          Filter

          <i
            className={`fa-solid fa-chevron-${
              showFilter ? "up" : "down"
            }`}
          ></i>

        </button>

      </div>


      {/* =========================
          FILTER MENU
      ========================= */}

      {showFilter && (

        <div className="mt-5 w-full max-w-4xl rounded-xl bg-white p-5 shadow-lg">


          <div className="mb-5 flex items-center justify-between">

            <h2 className="text-xl font-bold">
              Filter By
            </h2>


            <button
              onClick={clearFilters}
              className="font-semibold text-red-500 hover:text-red-700 cursor-pointer"
            >
              Clear
            </button>

          </div>


          {/* NAME */}

          <button
            onClick={() => setActiveFilter("name")}
            className="mb-3 flex w-full items-center justify-between rounded-lg border border-gray-200 p-4 hover:bg-blue-50 cursor-pointer"
          >

            <span className="font-semibold">

              <i className="fa-solid fa-house mr-3 text-blue-600"></i>

              Filter by Name

            </span>

            <i className="fa-solid fa-chevron-right"></i>

          </button>


          {/* LOCATION */}

          <button
            onClick={() => setActiveFilter("location")}
            className="mb-3 flex w-full items-center justify-between rounded-lg border border-gray-200 p-4 hover:bg-blue-50 cursor-pointer"
          >

            <span className="font-semibold">

              <i className="fa-solid fa-location-dot mr-3 text-blue-600"></i>

              Filter by Location

            </span>

            <i className="fa-solid fa-chevron-right"></i>

          </button>


          {/* PRICE */}

          <button
            onClick={() => setActiveFilter("price")}
            className="mb-3 flex w-full items-center justify-between rounded-lg border border-gray-200 p-4 hover:bg-blue-50 cursor-pointer"
          >

            <span className="font-semibold">

              <i className="fa-solid fa-money-bill mr-3 text-blue-600"></i>

              Filter by Price

            </span>

            <i className="fa-solid fa-chevron-right"></i>

          </button>


          {/* PROPERTY TYPE */}

          <button
            onClick={() => setActiveFilter("propertyType")}
            className="flex w-full items-center justify-between rounded-lg border border-gray-200 p-4 hover:bg-blue-50 cursor-pointer"
          >

            <span className="font-semibold">

              <i className="fa-solid fa-building mr-3 text-blue-600"></i>

              Property Type

            </span>

            <i className="fa-solid fa-chevron-right"></i>

          </button>


          {/* =========================
              NAME FILTER
          ========================= */}

          {activeFilter === "name" && (

            <div className="mt-5 border-t pt-5">

              <label className="mb-2 block font-semibold">
                Property Name
              </label>


              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Enter property name"
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-600"
              />


              <button
                onClick={() =>
                  searchProperties("name", search)
                }
                className="mt-3 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 cursor-pointer"
              >
                Search
              </button>

            </div>

          )}


          {/* =========================
              LOCATION FILTER
          ========================= */}

          {activeFilter === "location" && (

            <div className="mt-5 border-t pt-5">

              <label className="mb-2 block font-semibold">
                Location
              </label>


              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location"
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-600"
              />


              <button
                onClick={() =>
                  searchProperties("location", location)
                }
                className="mt-3 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 cursor-pointer"
              >
                Search
              </button>

            </div>

          )}


          {/* =========================
              PRICE FILTER
          ========================= */}

          {activeFilter === "price" && (

            <div className="mt-5 border-t pt-5">

              <label className="mb-2 block font-semibold">
                Minimum Price
              </label>


              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="Minimum price"
                min="0"
                className="mb-4 w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-600"
              />


              <label className="mb-2 block font-semibold">
                Maximum Price
              </label>


              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="Maximum price"
                min="0"
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-600"
              />


              <button
                onClick={() => searchProperties("price")}
                className="mt-3 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 cursor-pointer"
              >
                Search
              </button>

            </div>

          )}


          {/* =========================
              PROPERTY TYPE FILTER
          ========================= */}

          {activeFilter === "propertyType" && (

            <div className="mt-5 border-t pt-5">

              <p className="mb-3 font-semibold">
                Property Type
              </p>


              <div className="flex flex-col gap-2">

                {propertyTypes.map((type) => (

                  <button
                    key={type}
                    onClick={() => handlePropertyType(type)}
                    className={`flex w-full items-center justify-between rounded-lg border p-3 text-left cursor-pointer ${
                      propertyType === type
                        ? "border-blue-600 bg-blue-50 text-blue-700"
                        : "border-gray-200 hover:bg-blue-50"
                    }`}
                  >

                    <span>
                      {type}
                    </span>

                    <i className="fa-solid fa-chevron-right text-gray-400"></i>

                  </button>

                ))}

              </div>

            </div>

          )}

        </div>

      )}


      {/* =========================
          RESULT COUNT
      ========================= */}

      {properties.length > 0 && (

        <p className="mt-8 font-semibold text-gray-600">

          {properties.length}{" "}

          {properties.length === 1
            ? "property"
            : "properties"}{" "}

          found

        </p>

      )}


      {/* =========================
          NO PROPERTIES
      ========================= */}

      {properties.length === 0 && (

        <div className="mt-10 text-center">

          <p className="text-lg text-gray-500">
            No properties found.
          </p>

        </div>

      )}


      {/* =========================
          PROPERTY CARDS
      ========================= */}

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">


        {properties.map((property) => (

          <div
            key={property._id}
            className="overflow-hidden rounded-xl bg-white shadow-md"
          >


            {/* IMAGE */}

            <img
              src={property.image}
              alt={property.name}
              className="h-60 w-full object-cover"
            />


            <div className="p-5">


              {/* NAME */}

              <h2 className="text-xl font-bold">
                {property.name}
              </h2>


              {/* PROPERTY TYPE */}

              <p className="mt-2 font-semibold text-blue-600">

                <i className="fa-solid fa-building mr-2"></i>

                {property.propertyType}

              </p>


              {/* LOCATION */}

              <p className="mt-2 text-gray-600">

                <i className="fa-solid fa-location-dot text-red-500"></i>{" "}

                {property.location}

              </p>


              {/* PRICE */}

              <p className="mt-2 font-semibold text-blue-700">

                ${Number(property.price).toLocaleString()}

              </p>


              {/* OLD PRICE */}

              {property.oldPrice && (

                <p className="mt-1 text-red-500 line-through">

                  ${Number(property.oldPrice).toLocaleString()}

                </p>

              )}


              {/* VIEWS */}

              <p className="mt-2 text-gray-500">

                <i className="fa-solid fa-eye"></i>{" "}

                {property.views?.toLocaleString()} views

              </p>


              {/* DESCRIPTION */}

              <p className="mt-2 text-gray-500">

                {property.description}

              </p>


              {/* DISTANCE */}

              {property.distance !== undefined && (

                <p className="mt-2 text-gray-500">

                  <i className="fa-solid fa-road"></i>{" "}

                  {property.distance} Distance

                </p>

              )}


              {/* =========================
                  EDIT + DELETE
              ========================= */}

              <div className="mt-5 flex gap-3">


                {/* EDIT */}

                <NavLink
                  to={`/properties/edit/${property._id}`}
                  className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-center font-semibold text-white hover:bg-blue-700"
                >
                  Edit
                </NavLink>


                {/* DELETE */}

                <button
                  onClick={() => {

                    setDeleteId(property._id);

                    setShowDelete(true);

                  }}
                  className="flex-1 rounded-lg bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700"
                >
                  Delete
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>


      {/* =========================
          DELETE CONFIRMATION
      ========================= */}

      {showDelete && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5">

          <div className="relative w-full max-w-md rounded-xl bg-white p-8 text-center shadow-2xl">


            {/* X */}

            <button
              onClick={() => setShowDelete(false)}
              className="absolute right-4 top-3 text-2xl font-bold text-gray-500 hover:text-black"
            >

              <i className="fa-solid fa-xmark"></i>

            </button>


            {/* ICON */}

            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">

              <i className="fa-solid fa-trash text-2xl text-red-600"></i>

            </div>


            <h2 className="text-2xl font-bold text-gray-800">
              Delete Property?
            </h2>


            <p className="mt-2 text-gray-500">
              Are you sure you want to delete this property?
            </p>


            <div className="mt-6 flex justify-center gap-4">


              {/* CANCEL */}

              <button
                onClick={() => setShowDelete(false)}
                className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>


              {/* DELETE */}

              <button
                onClick={handleDelete}
                className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
              >
                Delete
              </button>


            </div>

          </div>

        </div>

      )}


      {/* =========================
          SUCCESS POPUP
      ========================= */}

      {showMessage && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5">

          <div className="relative w-full max-w-md rounded-xl bg-white p-8 text-center shadow-2xl">


            {/* X */}

            <button
              onClick={() => setShowMessage(false)}
              className="absolute right-4 top-3 text-2xl font-bold text-gray-500 hover:text-black"
            >

              <i className="fa-solid fa-xmark"></i>

            </button>


            {/* CHECK ICON */}

            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">

              <i className="fa-solid fa-check text-2xl text-green-600"></i>

            </div>


            <h2 className="text-2xl font-bold text-gray-800">
              Success!
            </h2>


            <p className="mt-2 text-gray-500">
              Property deleted successfully.
            </p>


          </div>

        </div>

      )}

    </div>

  );

};

export default AllProperties;