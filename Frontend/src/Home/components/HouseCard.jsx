import { NavLink } from "react-router-dom";
import Button from "../../Components/Button";
import Reveal from "../../Components/Reveal";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../Components/Loading";

const HouseCard = () => {

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

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


  if (loading) {
    return <Loading />;
  }


  return (
    <Reveal>

      <section className="w-full py-16 md:py-20">

        {/* HEADER */}

        <div className="max-w-3xl mx-auto text-center px-5">

          <p className="inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2 rounded-full">
            Featured Listings
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-6">
            Discover Your Dream Property
          </h1>

          <p className="text-gray-600 text-base md:text-lg mt-5 leading-relaxed">
            Explore our handpicked selection of premium properties
            in some of the world's most desirable locations.
          </p>

        </div>


        {/* PROPERTY GRID */}

        <div className="
          max-w-7xl
          mx-auto
          px-5
          md:px-8
          mt-12
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-7
        ">

          {properties.slice(0, 6).map((property) => (

            <div
              key={property._id}
              className="
                group
                bg-white
                rounded-2xl
                overflow-hidden
                border
                border-gray-100
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-300
              "
            >

              {/* IMAGE */}

              <div className="relative w-full h-64 md:h-72 overflow-hidden">

                <img
                  src={property.image}
                  alt={property.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-500
                  "
                />


                {/* DARK OVERLAY */}

                <div className="
                  absolute
                  inset-0
                  bg-linear-to-t
                  from-black/40
                  via-transparent
                  to-transparent
                ">
                </div>


                {/* FEATURED BADGE */}

                <div className="
                  absolute
                  top-4
                  left-4
                  bg-white
                  text-blue-600
                  text-xs
                  font-bold
                  px-4
                  py-2
                  rounded-full
                  shadow-md
                ">
                  Featured
                </div>


                {/* VIEWS */}

                <div className="
                  absolute
                  bottom-4
                  right-4
                  bg-black/50
                  backdrop-blur-sm
                  text-white
                  text-sm
                  px-3
                  py-2
                  rounded-full
                ">

                  <i className="fa-solid fa-eye mr-2"></i>

                  {property.views?.toLocaleString() || 0}

                </div>

              </div>


              {/* CONTENT */}

              <div className="p-6">

                {/* PROPERTY NAME */}

                <h2 className="
                  text-xl
                  md:text-2xl
                  font-bold
                  text-gray-900
                  line-clamp-1
                ">
                  {property.name}
                </h2>


                {/* LOCATION */}

                <p className="
                  flex
                  items-center
                  gap-2
                  text-gray-500
                  mt-3
                ">

                  <i className="fa-solid fa-location-dot text-red-600"></i>

                  <span className="line-clamp-1">
                    {property.location}
                  </span>

                </p>


                {/* DIVIDER */}

                <div className="border-t border-gray-100 my-5"></div>


                {/* PRICE + VIEW */}

                <div className="flex items-center justify-between gap-4">

                  <div>

                    <p className="text-xs text-gray-500 mb-1">
                      Starting from
                    </p>

                    <p className="
                      text-xl
                      md:text-2xl
                      font-extrabold
                      text-gray-900
                    ">
                      ${property.price?.toLocaleString()}
                    </p>

                    <p className="text-sm text-gray-500">
                      per month
                    </p>

                  </div>


                  <NavLink to={`/House/${property._id}`}>

                    <Button
                      text="View Property"
                      className="
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        px-5
                        py-2.5
                        rounded-lg
                        transition
                        duration-300
                      "
                    />

                  </NavLink>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* SEE MORE */}

        <div className="flex justify-center mt-12">

          <NavLink
            to="/AllHouses"
            className="
              group
              flex
              items-center
              gap-3
              text-gray-900
              font-semibold
              hover:text-blue-600
              transition
            "
          >

            <span>
              See More Properties
            </span>

            <i className="
              fa-solid
              fa-arrow-right
              group-hover:translate-x-1
              transition-transform
            ">
            </i>

          </NavLink>

        </div>

      </section>

    </Reveal>
  );
};

export default HouseCard;