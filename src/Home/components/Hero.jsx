import house1 from "../../assets/house1.jpg";
import { Link } from "react-router-dom";
  const Hero = () => {
    return (
      <div className="bg-cover bg-no-repeat bg-center w-full md:min-h-150 mt-19 md:mt-19 pt-10"
        style={{backgroundImage: `url(${house1})`}}>
        {/* <img
          src={house1}
          alt=""
          className="bg-cover bg-no-repeat bg-center w-full md:h-150 "
        /> */}

        <div className=" max-w-150 mx-5 md:mx-30 mt-10 ">
          <h1 className=" text-white font-bold text-4xl md:text-6xl ">
            Finding Your New <br /> Home Is Simple
          </h1>

          <p className="text-white font-black text-xl md:text-2xl mt-10">
            We provide hight-quality rental, sales listing to help find the
            perfect home
          </p>
        <div className="flex gap-8 bg-white w-fit rounded-md md:p-2 p-1 mt-10 ">
          <p className="flex items-center gap-1.5 text-black font-semibold">
            
              <i className="fa-solid fa-location-dot text-red-600"></i>
        
              <span>City Street</span>
          </p>

          {/* <input type="text" className=" border-2 border-orange-400 rounded-xl focus:border-2 focus:border-orange-400 focus:outline-none"  placeholder="London City"/> */}

              <Link to={'/Search'}>
          <button className="text-gray-500 rounded-xl px-5 cursor-pointer"><i className="fa-solid fa-magnifying-glass"></i></button>
              </Link>
        </div>

      <div className="flex  gap-5 font-semibold text-md md:text-2xl mt-15 text-lg ">
          <div className="text-white">
              <h1 className="flex justify-center">1200+</h1>
              <p className=" whitespace-nowrap">Listed properties</p>
          </div>

          <div className="text-white">
              <h1 className="flex justify-center">4500+</h1>
              <p className=" whitespace-nowrap">Happy Customers</p>
          </div>

          <div className="text-white">
              <h1 className="flex justify-center">100+</h1>
              <p className=" whitespace-nowrap">Awards</p>
          </div>

      </div>
        </div>

      </div>
    );
  };

  export default Hero;
