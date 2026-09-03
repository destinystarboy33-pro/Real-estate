// import HouseData from "../Data/houseData";
import { NavLink, useSearchParams } from "react-router-dom";
import BackButton from "../Components/BackButton";
import Button from "../Components/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Components/Loading";

const AllHouses = () => {

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();

  const propertyType = searchParams.get("propertyType");


  useEffect(() => {

    const getProperties = async () => {

      try {

        setLoading(true);

        let url =
          "https://real-estate-qtye.onrender.com/api/Router";


        // If a property type was selected,
        // add it to the backend request

        if (propertyType) {

          url += `?propertyType=${encodeURIComponent(propertyType)}`;

        }


        const response = await axios.get(url);

        console.log("PROPERTIES:", response.data);

        setProperties(response.data);

      } catch (error) {

        console.log("ERROR:", error);

      } finally {

        setLoading(false);

      }

    };

    getProperties();

  }, [propertyType]);


  if (loading) {
    return <Loading />;
  }


  return (

    <div className="w-full min-h-screen relative pb-20 mt-20">

      <BackButton />


      <h1 className="flex items-center justify-center mt-7 font-extrabold text-2xl md:text-4xl text-orange-500">

        {propertyType
          ? `All ${propertyType}s`
          : "Property Grid"}

      </h1>


      <div className="w-full min-h-screen flex flex-col gap-5 px-10 md:grid md:grid-cols-3 mt-10">

        {properties.map((house) => (

          <div
            key={house._id}
            className="w-full rounded-md bg-white flex flex-col pb-5 md:h-fit rounded-bl-xl rounded-br-xl shadow-gray-400 shadow-xl"
          >

            {/* IMAGE */}

            <img
              src={house.image}
              alt={house.name}
              className="w-full h-50 md:h-80 rounded-tl-xl rounded-tr-xl"
            />


            <div className="flex flex-col items-start px-5">


              {/* NAME */}

              <p className="font-extrabold text-2xl text-orange-500">

                {house.name}

              </p>


              {/* LOCATION */}

              <p className="font-bold text-xl">

                {house.location}

              </p>


              {/* VIEWS */}

              <p className="text-gray-600">

                <i className="fa-solid fa-chart-column"></i>

                <span>

                  {house.views?.toLocaleString()}

                </span>

              </p>


              {/* PRICE */}

              <div className="flex gap-15 md:gap-35">

                <p className="font-semibold text-xl">

                  ${Number(house.price).toLocaleString()}/month

                </p>

              </div>


              {/* VIEW PROPERTY */}

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


      {/* NO RESULTS */}

      {!loading && properties.length === 0 && (

        <div className="text-center mt-10">

          <p className="text-gray-500 text-lg">

            No {propertyType || "properties"} found.

          </p>

        </div>

      )}

    </div>

  );
};

export default AllHouses;