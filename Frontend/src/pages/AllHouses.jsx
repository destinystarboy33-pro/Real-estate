// import HouseData from "../Data/houseData";
import { NavLink } from "react-router-dom";
import BackButton from "../Components/BackButton";
import Button from "../Components/Button";
import axios from 'axios'
import { useEffect, useState } from "react";

const AllHouses = () => {

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
  return (

    
    <div className=" w-full min-h-screen relative pb-20 mt-20">
       <BackButton />
      <h1 className="flex items-center justify-center mt-7 font-extrabold text-2xl md:text-4xl text-orange-500">
        Property Grid
      </h1>

      <div className="w-full  min-h-screen flex flex-col gap-5 px-10 md:grid md:grid-cols-3 mt-10">
        {properties.map((house) => (
          <div
            key={house._id}
            className="w-full rounded-md  bg-white flex flex-col pb-5 md:h-fit rounded-bl-xl rounded-br-xl shadow-gray-400 shadow-xl"
          >
            {/* <NavLink key={house.id} to={`/House/${house.id}`}> */}
              <img
                src={house.image}
                alt={house.name}
                className="w-full h-50 md:h-80 rounded-tl-xl rounded-tr-xl"
              />

              <div className="flex flex-col items-start px-5">
                <p className=" font-extrabold text-2xl text-orange-500">
                  {" "}
                  {house.name}
                </p>
                <p className="font-bold text-xl">{house.location}</p>
                <p className="text-gray-600">
                  <i className="fa-solid fa-chart-column"></i>
                  <span>{house.views}</span>
                </p>
                <div className="flex gap-15 md:gap-35">
                  <p className="font-semibold text-xl">${house.price}/month</p>
                  {/* <NavLink key={house.id} to={`/House/${house.id}`}><button className='bg-blue-800 px-3 py-1 rounded-3xl whitespace-nowrap text-white font-medium text-md'>Book Now</button></NavLink> */}
                </div>
                <NavLink
                key={house.id}
                to={`/House/${house.id}`}
                className="w-full"
              >
                <Button
                  text="View property"
                  className=" bg-blue-600 text-white py-2 w-full"
                />
              </NavLink>
              </div>
            {/* </NavLink> */}
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default AllHouses;
