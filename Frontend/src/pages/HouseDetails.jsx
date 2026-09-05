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

    <div className="min-h-screen bg-gray-100 py-10 px-4 mt-10">

      <BackButton />


      {/* PROPERTY CARD */}

      <div className="max-w-md md:max-w-lg mx-auto bg-white rounded-3xl shadow-lg overflow-hidden mt-10">


        {/* PROPERTY IMAGE */}

        <div className="relative">

          <img
            src={House.image}
            alt={House.name}
            className="w-full h-64 md:h-80 object-cover"
          />


          {/* FEATURED BADGE */}

          <div className="absolute top-4 left-4">

            <span className="bg-white px-3 py-2 rounded-full text-blue-600 font-semibold shadow">

              Featured

            </span>

          </div>


          {/* FAVOURITE BUTTON */}

          <button
            className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow"
          >

            <i className="fa-regular fa-heart text-xl text-gray-700"></i>

          </button>

        </div>


        {/* PROPERTY INFORMATION */}

        <div className="p-5">


          {/* TAGS */}

          <div className="flex gap-2 flex-wrap mb-4">

            <span className="bg-gray-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">

              New{" "}

              <i className="fa-solid fa-fire text-orange-500"></i>

            </span>


            <span className="bg-gray-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">

              Special Offer{" "}

              <i className="fa-solid fa-fire text-orange-500"></i>

            </span>

          </div>


          {/* PROPERTY NAME */}

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">

            {House.name}

          </h1>


          {/* PROPERTY TYPE */}

          <p className="text-blue-600 font-semibold mt-2">

            {House.propertyType}

          </p>


          {/* LOCATION */}

          <p className="text-gray-600 mt-3 text-xl">

            <i className="fa-solid fa-location-dot text-red-600 mr-2"></i>

            {House.location}

          </p>


          {/* DISTANCE */}

          {House.distance !== undefined && (

            <p className="text-gray-500 text-sm mt-1">

              {House.distance}Km away from Bustop

            </p>

          )}


          {/* VIEWS */}

          <p className="text-gray-500 text-sm mt-3">

            <i className="fa-solid fa-eye mr-2"></i>

            {House.views?.toLocaleString()} views

          </p>


          {/* PRICE */}

          <div className="mt-6">

            <div className="flex items-center gap-3">


              {/* CURRENT PRICE */}

              <p className="text-2xl font-extrabold text-green-600">

                ${House.price.toLocaleString()}

              </p>


              {/* OLD PRICE */}

              {House.oldPrice && (

                <del className="text-red-600 text-lg">

                  ${House.oldPrice.toLocaleString()}

                </del>

              )}

            </div>


            {/* OFFER MESSAGE */}

            {House.oldPrice && (

              <p className="text-sm text-blue-600 font-medium mt-1">

                Special offer available

              </p>

            )}

          </div>


          {/* DESCRIPTION */}

          <p className="text-gray-600 mt-6 leading-relaxed">

            {House.description}

          </p>


          {/* BUTTONS */}

          <div className="flex gap-3 mt-7">


            {/* VIEW DETAILS */}

           

            {/* BOOK NOW */}

            <button
              className="flex-1 bg-blue-800 text-white py-3 rounded-full font-semibold hover:bg-blue-900 transition cursor-pointer"
            >

              Book Inspection Now

            </button>

          </div>


        </div>

      </div>

    </div>

  );

};

export default HouseDetails;