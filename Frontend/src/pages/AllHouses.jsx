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

    <div className="w-full min-h-screen pb-20 mt-20">

      {/* BACK BUTTON */}

      <BackButton />


      {/* PAGE HEADER */}

      <div className="max-w-3xl mx-auto text-center px-5 mt-8">

        <p className="inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2 rounded-full">
          {propertyType ? `${propertyType} Properties` : "Our Properties"}
        </p>

        <h1 className="
          text-3xl
          md:text-5xl
          font-extrabold
          text-gray-900
          mt-6
        ">

          {propertyType
            ? `Explore Our ${propertyType}s`
            : "Explore Our Properties"}

        </h1>

        <p className="text-gray-600 text-base md:text-lg mt-5 leading-relaxed">

          Discover quality properties in desirable locations and find
          a home that fits your needs.

        </p>

      </div>


      {/* PROPERTY GRID */}

      <div className="
        max-w-7xl
        mx-auto
        px-5
        md:px-8
        mt-14
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-7
      ">

        {properties.map((house) => (

          <div
            key={house._id}
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

            <div className="
              relative
              w-full
              h-64
              md:h-72
              overflow-hidden
            ">

              <img
                src={house.image}
                alt={house.name}
                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-500
                "
              />


              {/* IMAGE OVERLAY */}

              <div className="
                absolute
                inset-0
                bg-linear-to-t
                from-black/40
                via-transparent
                to-transparent
              ">
              </div>


              {/* PROPERTY TYPE */}

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

                {house.propertyType || "Property"}

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

                {house.views?.toLocaleString() || 0}

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

                {house.name}

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

                  {house.location}

                </span>

              </p>


              {/* DIVIDER */}

              <div className="border-t border-gray-100 my-5"></div>


              {/* PRICE */}

              <div className="
                flex
                items-center
                justify-between
                gap-4
              ">

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

                    ${Number(house.price).toLocaleString()}

                  </p>

                  <p className="text-sm text-gray-500">
                    per month
                  </p>

                </div>


                {/* BUTTON */}

                <NavLink to={`/House/${house._id}`}>

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


      {/* NO RESULTS */}

      {!loading && properties.length === 0 && (

        <div className="text-center mt-16 px-5">

          <div className="
            w-16
            h-16
            mx-auto
            rounded-full
            bg-gray-100
            flex
            items-center
            justify-center
          ">

            <i className="fa-solid fa-house text-gray-400 text-xl"></i>

          </div>

          <p className="text-gray-500 text-lg mt-5">

            No {propertyType || "properties"} found.

          </p>

        </div>

      )}

    </div>

  );
};

export default AllHouses;