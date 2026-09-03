import { NavLink } from "react-router-dom";
import Button from "../Components/Button";
import axios from "axios";
import { useRef, useState } from "react";
import Loading from "../Components/Loading";

const Search = () => {

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");

  const [name, setName] = useState("");
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
  // SEARCH BY NAME
  // =========================

  const searchByName = async (value) => {

    if (!value.trim()) {
      setProperties([]);
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


  const handleSearch = () => {
    searchByName(name);
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

  const clearFilters = () => {

    setName("");
    setLocation("");
    setMinPrice("");
    setMaxPrice("");
    setPropertyType("");

    setActiveFilter("");
    setProperties([]);

  };

  
  if (loading) {
    return <Loading />;
  }


  return (

    <div className="w-full min-h-screen relative pb-20 mt-20 px-5 md:px-10">


      {/* PAGE TITLE */}

      <h1 className="flex items-center justify-center mt-7 font-extrabold text-2xl md:text-4xl text-orange-500">
        Search Properties
      </h1>


      {/* =========================
          MAIN SEARCH
      ========================= */}

      <div className="w-full max-w-4xl mx-auto mt-10 flex flex-col md:flex-row gap-3">

        <input
          type="text"
          value={name}
          onChange={(e) => {

            const value = e.target.value;

            setName(value);

            clearTimeout(searchTimer.current);

            if (!value.trim()) {

              setProperties([]);

              return;
            }

            searchTimer.current = setTimeout(() => {

              searchByName(value);

            }, 500);

          }}
          placeholder="Search property..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
        />


        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white font-semibold px-7 py-3 rounded-lg hover:bg-blue-700 cursor-pointer"
        >

          <i className="fa-solid fa-magnifying-glass mr-2"></i>

          Search

        </button>

      </div>


      {/* =========================
          FILTER BUTTON
      ========================= */}

      <div className="w-full max-w-4xl mx-auto mt-5">

        <button
          onClick={() => {

            setShowFilter(!showFilter);
            setActiveFilter("");

          }}
          className="flex items-center gap-2 border border-blue-600 text-blue-600 bg-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 cursor-pointer"
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

        <div className="w-full max-w-4xl mx-auto mt-5 bg-white rounded-xl shadow-lg p-5">


          <div className="flex items-center justify-between mb-5">

            <h2 className="font-bold text-xl">
              Filter By
            </h2>

            <button
              onClick={clearFilters}
              className="text-red-500 font-semibold hover:text-red-700 cursor-pointer"
            >
              Clear
            </button>

          </div>


          {/* FILTER BY NAME */}

          <button
            onClick={() => setActiveFilter("name")}
            className="w-full flex items-center justify-between border border-gray-200 rounded-lg p-4 mb-3 hover:bg-blue-50 cursor-pointer"
          >

            <span className="font-semibold">

              <i className="fa-solid fa-house mr-3 text-blue-600"></i>

              Filter by Name

            </span>

            <i className="fa-solid fa-chevron-right"></i>

          </button>


          {/* FILTER BY LOCATION */}

          <button
            onClick={() => setActiveFilter("location")}
            className="w-full flex items-center justify-between border border-gray-200 rounded-lg p-4 mb-3 hover:bg-blue-50 cursor-pointer"
          >

            <span className="font-semibold">

              <i className="fa-solid fa-location-dot mr-3 text-blue-600"></i>

              Filter by Location

            </span>

            <i className="fa-solid fa-chevron-right"></i>

          </button>


          {/* FILTER BY PRICE */}

          <button
            onClick={() => setActiveFilter("price")}
            className="w-full flex items-center justify-between border border-gray-200 rounded-lg p-4 mb-3 hover:bg-blue-50 cursor-pointer"
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
            className="w-full flex items-center justify-between border border-gray-200 rounded-lg p-4 hover:bg-blue-50 cursor-pointer"
          >

            <span className="font-semibold">

              <i className="fa-solid fa-building mr-3 text-blue-600"></i>

              Property Type

            </span>

            <i className="fa-solid fa-chevron-right"></i>

          </button>


          {/* =========================
              NAME INPUT
          ========================= */}

          {activeFilter === "name" && (

            <div className="mt-5 border-t pt-5">

              <label className="block font-semibold mb-2">
                Property Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter property name"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-600"
              />

              <button
                onClick={() => searchProperties("name", name)}
                className="w-full mt-3 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 cursor-pointer"
              >
                Search
              </button>

            </div>

          )}


          {/* =========================
              LOCATION INPUT
          ========================= */}

          {activeFilter === "location" && (

            <div className="mt-5 border-t pt-5">

              <label className="block font-semibold mb-2">
                Location
              </label>

              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-600"
              />

              <button
                onClick={() =>
                  searchProperties("location", location)
                }
                className="w-full mt-3 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 cursor-pointer"
              >
                Search
              </button>

            </div>

          )}


          {/* =========================
              PRICE INPUT
          ========================= */}

          {activeFilter === "price" && (

            <div className="mt-5 border-t pt-5">

              <label className="block font-semibold mb-2">
                Minimum Price
              </label>

              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="Minimum price"
                min="0"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-600 mb-4"
              />


              <label className="block font-semibold mb-2">
                Maximum Price
              </label>

              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="Maximum price"
                min="0"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-600"
              />


              <button
                onClick={() => searchProperties("price")}
                className="w-full mt-3 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 cursor-pointer"
              >
                Search
              </button>

            </div>

          )}


          {/* =========================
              PROPERTY TYPE
          ========================= */}

          {activeFilter === "propertyType" && (

            <div className="mt-5 border-t pt-5">

              <p className="font-semibold mb-3">
                Property Type
              </p>

              <div className="flex flex-col gap-2">

                {propertyTypes.map((type) => (

                  <button
                    key={type}
                    onClick={() => handlePropertyType(type)}
                    className={`w-full flex items-center justify-between border rounded-lg p-3 text-left cursor-pointer ${
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

      {!loading && properties.length > 0 && (

        <p className="font-semibold text-gray-600 mt-8">

          {properties.length}{" "}

          {properties.length === 1
            ? "property"
            : "properties"}{" "}

          found

        </p>

      )}


      {/* =========================
          PROPERTY RESULTS
      ========================= */}

      <div className="w-full min-h-screen flex flex-col gap-5 px-0 md:grid md:grid-cols-3 mt-10">


        {/* LOADING */}

        {loading && (

          <div className="col-span-full flex justify-center py-10">

            <Loading />

          </div>

        )}


        {/* NO RESULTS */}

        {!loading && properties.length === 0 && (

          <div className="col-span-full text-center py-10">

            <p className="text-gray-500 text-lg">
              No properties found.
            </p>

          </div>

        )}


        {/* PROPERTY CARDS */}

        {!loading && properties.map((house) => (

          <div
            key={house._id}
            className="w-full rounded-md bg-white flex flex-col pb-5 md:h-fit rounded-bl-xl rounded-br-xl shadow-gray-400 shadow-xl"
          >

            <img
              src={house.image}
              alt={house.name}
              className="w-full h-50 md:h-80 rounded-tl-xl rounded-tr-xl"
            />


            <div className="flex flex-col items-start px-5">

              <p className="font-extrabold text-2xl text-orange-500">
                {house.name}
              </p>


              <p className="font-bold text-xl">
                {house.location}
              </p>


              <p className="text-gray-600">

                <i className="fa-solid fa-chart-column"></i>

                <span className="ml-1">
                  {house.views?.toLocaleString()}
                </span>

              </p>


              <div className="flex gap-15 md:gap-35">

                <p className="font-semibold text-xl">
                  ${Number(house.price).toLocaleString()}/month
                </p>

              </div>


              <NavLink
                to={`/House/${house._id}`}
                className="w-full"
              >

                <Button
                  text="View property"
                  className="bg-blue-600 text-white py-2 w-full"
                />

              </NavLink>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
};

export default Search;