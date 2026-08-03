import HouseData from "../../Data/houseData";
import { NavLink } from "react-router-dom";
import Button from "../../Components/Button";

const HouseCard = () => {
  return (
    <div className=" w-full min-h-screen pb-20">
      <h1 className="flex items-center justify-center mt-7 font-extrabold text-2xl md:text-4xl text-orange-500">
        Property Grid
      </h1>

      <div className="w-full min-h-screen flex flex-col gap-5 px-10 md:grid md:grid-cols-3 mt-10">
        {HouseData.slice(0, 6).map((house) => (
          <div
            key={house.id}
            className="w-full rounded-xl overflow-hidden flex flex-col pb-5 md:h-fit  shadow-gray-400 shadow-xl"
          >
            <img
              src={house.image}
              alt={house.name}
              className="w-full h-50 md:h-80 hover:scale-110 transition-all"
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
          </div>
        ))}

        <div className="w-full relative mt-16">
          <NavLink to={"/AllHouses"}>
            <h1 className=" text-xl font-bold text-white w-fit mt-10 mr-0 absolute bottom-5 right-0">
              See more
              <span>
                <i className="fa-solid fa-chevron-right"></i>
              </span>
            </h1>{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
