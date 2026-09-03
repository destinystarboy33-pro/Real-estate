import ApartmentData from "../../Data/apartmentData";
import Reveal from "../../Components/Reveal";
import { NavLink } from "react-router-dom";

const Hero2 = () => {

  return (
    <Reveal>

      <div className="flex flex-col items-center justify-center mt-10 mb-5 mx-5">

        <h1 className="flex items-center justify-center mt-7 font-extrabold text-2xl md:text-4xl text-orange-500 py-5">
          Explore Apartment Types
        </h1>


        <div className="grid grid-cols-2 md:flex md:flex-row gap-5">

          {ApartmentData.map((Apartment) => {

            // Match the name with the value stored in MongoDB

            const propertyType =
              Apartment.name === "Commercial Buildings"
                ? "Commercial Building"
                : Apartment.name;


            return (

              <NavLink
                key={Apartment.id}
                to={`/houses?propertyType=${encodeURIComponent(propertyType)}`}
                className="flex flex-col items-center justify-center bg-gray-300 border-2 border-blue-700 rounded-xl px-10 py-5 shadow-gray-400 shadow-xl cursor-pointer hover:bg-gray-200 transition"
              >

                <i className={`${Apartment.icon} text-blue-600 text-3xl`}></i>

                <h1 className="text-gray-900 font-bold">
                  {Apartment.name}
                </h1>

                <p className="text-gray-900 font-bold text-center">
                  {Apartment.Properties}
                </p>

              </NavLink>

            );

          })}

        </div>

      </div>

    </Reveal>
  );
};

export default Hero2;