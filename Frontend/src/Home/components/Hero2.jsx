import ApartmentData from "../../Data/apartmentData";
import Reveal from "../../Components/Reveal";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Hero2 = () => {

  const [properties, setProperties] = useState([]);

  useEffect(() => {

    const getProperties = async () => {

      try {

        const response = await axios.get(
          "https://real-estate-qtye.onrender.com/api/Router"
        );

        console.log("PROPERTIES:", response.data);

        setProperties(response.data);

      } catch (error) {

        console.log("ERROR:", error);

      }

    };

    getProperties();

  }, []);


  // COUNT PROPERTIES BY TYPE

  const getPropertyCount = (type) => {

    return properties.filter(
      (property) =>
        property.propertyType?.toLowerCase() ===
        type.toLowerCase()
    ).length;

  };


  return (

    <Reveal>

      <div className="flex flex-col items-center justify-center mt-10 mb-5 mx-5">

        <h1 className="flex items-center justify-center mt-7 font-extrabold text-2xl md:text-4xl text-orange-500 py-5">
          Explore Apartment Types
        </h1>


        <div className="grid grid-cols-2 md:flex md:flex-row gap-5">

          {ApartmentData.map((Apartment) => (

            <NavLink
              key={Apartment.id}
              to={`/AllHouses?propertyType=${encodeURIComponent(Apartment.name)}`}
              className="flex flex-col items-center justify-center bg-gray-300 border-2 border-blue-700 rounded-xl px-10 py-5 shadow-gray-400 shadow-xl cursor-pointer hover:bg-gray-200 transition"
            >

              {/* ICON */}

              <i
                className={`${Apartment.icon} text-blue-600 text-3xl`}
              ></i>


              {/* NAME */}

              <h1 className="text-gray-900 font-bold">
                {Apartment.name}
              </h1>


              {/* PROPERTY COUNT FROM BACKEND */}

              <p className="text-gray-900 font-bold text-center">

                {getPropertyCount(Apartment.name)}{" "}

                {getPropertyCount(Apartment.name) === 1
                  ? "Property"
                  : "Properties"}

              </p>

            </NavLink>

          ))}

        </div>

      </div>

    </Reveal>

  );

};

export default Hero2;