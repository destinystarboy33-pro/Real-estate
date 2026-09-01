// import House1 from '../assets/house1'
// import HouseData from "../Data/houseData";
import { useParams,  } from "react-router-dom";
import BackButton from "../Components/BackButton";
import axios from 'axios'
import { useEffect, useState } from "react";
// import Button from "../Components/Button";

const HouseDetails = () => {

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



  const { id } = useParams();
  const House = properties.find((item) => item._id.toString() ===id);

  if (!House){
    return <div>loading...</div>
  }

  return (
    
    <div className=" flex flex-col md:flex md:flex-row h-fit w-fit my-20 mx-8">
     <BackButton />
      <img
      //  src={`https://real-estate-qtye.onrender.com/uploads/${House.image}`} 
        src={House.image}
      alt="" className="text-amber-950 rounded-2xl" />
      <div className="mt-10 flex flex-col gap-5  md:mr-20 md:ml-5">
        <div className="flex gap-8 mt-10">
          <p className="text-blue-500 bg-gray-200 px-2 py-1 rounded-md">
            New 🔥
          </p>
          <p className="text-blue-500 bg-gray-200 px-2 py-1 rounded-md">
            Featuring 🔥
          </p>
        </div>

        <div className="mt-10 flex flex-col justify-between">
          <h1 className="text-5xl font-extrabold">{House.name}</h1>
          <p className="text-3xl font-semibold">Special Offer%</p>
          <p className="text-2xl">{House.distance} away from Bustop</p>

          <div className="flex gap-4 text-2xl mt-5">
            <del className="text-red-300 font-extrabold">${House.OldPrice}</del>
            <p className="text-green-600 font-extrabold">${House.price}</p>
          </div>
          <p className="text-3xl font-medium mt-15">{House.desc}</p>
        </div>

        <div className="flex mt-15 gap-3">
          <button className="bg-white text-blue-600 px-5 py-2 rounded-3xl whitespace-nowrap font-medium text-md border border-blue-600">
            ${House.price}
          </button>
          <button className="bg-blue-800 px-3 py-1 rounded-3xl whitespace-nowrap text-white font-medium text-md">
            Book Now
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default HouseDetails;
