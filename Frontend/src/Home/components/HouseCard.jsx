import { NavLink } from "react-router-dom";
import Button from "../../Components/Button";
import Reveal from "../../Components/Reveal";
import axios from "axios";
import { useEffect, useState } from "react";

const HouseCard = () => {

  const [properties, setProperties] = useState([]);

  useEffect(() => {

    const getProperties = async () => {

      try {

        const response = await axios.get(
          "http://localhost:8000/api/Router"
        );

        console.log("PROPERTIES:", response.data);

        setProperties(response.data);

      } catch (error) {

        console.log("ERROR:", error);

      }

    };

    getProperties();

  }, []);


  return (
    <Reveal>

      <div className="w-full min-h-screen pb-20">

        <div className="flex flex-col text-center items-center justify-center mt-7">

          <p className="bg-blue-500 w-fit py-1 px-5 rounded-2xl text-white my-10">
            Featured Listings
          </p>

          <h1 className="font-extrabold text-2xl md:text-4xl text-orange-500 my-10">
            Discover Your Dream Property
          </h1>

          <p className="font-semi-bold text-xl">
            Explore our handpicked selection of premium properties Worldwide
            most desirable locations.
          </p>

        </div>


        <div className="w-full min-h-screen flex flex-col gap-5 px-10 md:grid md:grid-cols-3 mt-10">

          {properties.slice(0, 6).map((property) => (

            <div
              key={property._id}
              className="w-full rounded-xl overflow-hidden flex flex-col pb-5 md:h-fit shadow-gray-400 shadow-xl"
            >

              <img
                src={`http://localhost:8000/uploads/${property.image}`}
                alt={property.name}
                className="w-full h-50 md:h-80 object-cover hover:scale-110 transition-all"
              />


              <div className="flex flex-col items-start px-5 mt-8">

                <p className="font-extrabold text-2xl text-orange-500">
                  {property.name}
                </p>

                <p className="font-bold text-xl">
                  {property.location}
                </p>

                <p className="text-gray-600">
                  <i className="fa-solid fa-chart-column"></i>{" "}
                  <span>{property.views}</span>
                </p>


                <div className="flex gap-15 md:gap-35">

                  <p className="font-semibold text-xl">
                    ${property.price}/month
                  </p>

                </div>


                <NavLink
                  to={`/House/${property._id}`}
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


          <div className="w-fit">

            <NavLink to="/AllHouses">

              <h1 className="text-xl font-bold text-black w-fit mt-10">

                See more

                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>

              </h1>

            </NavLink>

          </div>

        </div>

      </div>

    </Reveal>
  );
};

export default HouseCard;