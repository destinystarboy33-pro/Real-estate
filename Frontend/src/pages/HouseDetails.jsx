import { useParams } from "react-router-dom";
import BackButton from "../Components/BackButton";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Components/Loading";

const HouseDetails = () => {

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {

    const getProperties = async () => {

      try {

        setLoading(true);

        const response = await axios.get(
          "https://real-estate-qtye.onrender.com/api/Router"
        );

        console.log("PROPERTIES:", response.data);

        setProperties(response.data);

      } catch (error) {

        console.log("ERROR:", error);

      } finally {

        setLoading(false);

      }

    };

    getProperties();

  }, []);


  const House = properties.find(
    (item) => item._id === id
  );


  if (loading) {
    return <Loading />;
  }


  if (!House) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold text-red-500">
          Property not found.
        </p>
      </div>
    );
  }


  return (

    <div className="flex flex-col md:flex-row h-fit w-full my-20 px-8">

      <BackButton />


      {/* PROPERTY IMAGE */}

      <img
        src={House.image}
        alt={House.name}
        className="w-full md:w-1/2 rounded-2xl object-cover"
      />


      {/* PROPERTY INFORMATION */}

      <div className="mt-10 flex flex-col gap-5 md:mr-20 md:ml-5 md:w-1/2">


        {/* TAGS */}

        <div className="flex gap-8 mt-10">

          <p className="text-blue-500 bg-gray-200 px-2 py-1 rounded-md">

            New{" "}

            <i className="fa-solid fa-fire-flame-curved bg-linear-to-t from-red-600 via-orange-500 to-yellow-300 bg-clip-text text-transparent"></i>

          </p>


          <p className="text-blue-500 bg-gray-200 px-2 py-1 rounded-md">

            Featuring{" "}

            <i className="fa-solid fa-fire bg-linear-to-t from-red-600 via-orange-500 to-yellow-300 bg-clip-text text-transparent"></i>

          </p>

        </div>


        {/* PROPERTY NAME */}

        <div className="mt-10 flex flex-col justify-between">

          <h1 className="text-5xl font-extrabold">
            {House.name}
          </h1>


          {/* PROPERTY TYPE */}

          <p className="text-xl font-semibold text-blue-600 mt-5">
            {House.propertyType}
          </p>


          {/* LOCATION */}

          <p className="text-2xl mt-3">
            <i className="fa-solid fa-location-dot text-blue-600 mr-2"></i>
            {House.location}
          </p>


          {/* DISTANCE */}

          {House.distance !== undefined && (
            <p className="text-2xl">
              {House.distance} away from Bustop
            </p>
          )}


          {/* VIEWS */}

          <p className="text-gray-600 text-xl mt-3">

            <i className="fa-solid fa-chart-column mr-2"></i>

            {House.views?.toLocaleString()} views

          </p>


          {/* PRICE */}

          <div className="flex gap-4 text-2xl mt-5">

            {House.oldPrice && (

              <del className="text-red-600 font-extrabold">

                ${House.oldPrice.toLocaleString()}

              </del>

            )}

            <p className="text-green-600 font-extrabold">

              ${House.price.toLocaleString()}

            </p>

          </div>


          {/* DESCRIPTION */}

          <p className="text-3xl font-medium mt-10">

            {House.description}

          </p>

        </div>


        {/* BUTTONS */}

        <div className="flex mt-10 gap-3">

          <button className="bg-white text-blue-600 px-5 py-2 rounded-3xl whitespace-nowrap font-medium text-md border border-blue-600">

            ${House.price.toLocaleString()}

          </button>


          <button className="bg-blue-800 px-5 py-2 rounded-3xl whitespace-nowrap text-white font-medium text-md">

            Book Now

          </button>

        </div>

      </div>

    </div>

  );
};

export default HouseDetails;