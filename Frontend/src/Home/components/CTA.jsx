import { NavLink } from "react-router-dom";
import Reveal from "../../Components/Reveal";
import house1 from "../../assets/house1.jpg";

const CTA = () => {
  return (
    <Reveal>
      <section className="w-full px-5 md:px-8 py-16 md:py-20">

        <div
          className="
            relative
            max-w-7xl
            mx-auto
            overflow-hidden
            rounded-3xl
            min-h-90
            flex
            items-center
            bg-cover
            bg-center
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(0, 0, 0, 0.65),
                rgba(0, 0, 0, 0.65)
              ),
              url(${house1})
            `,
          }}
        >

          {/* CONTENT */}

          <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-16">

            <p className="text-blue-400 font-semibold text-sm md:text-base uppercase tracking-widest">
              Your Next Property Awaits
            </p>

            <h2 className="
              text-white
              text-3xl
              md:text-5xl
              font-extrabold
              mt-4
              leading-tight
            ">
              Find a Place You'll Love to Call Home
            </h2>

            <p className="
              text-gray-200
              text-base
              md:text-lg
              mt-5
              max-w-2xl
              mx-auto
              leading-relaxed
            ">
              Explore our collection of properties and find the perfect
              place for you, your family, or your business.
            </p>


            {/* BUTTONS */}

            <div className="
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              gap-4
              mt-8
            ">

              <NavLink
                to="/AllHouses"
                className="
                  w-full
                  sm:w-auto
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  font-semibold
                  px-7
                  py-3.5
                  rounded-lg
                  transition-colors
                  duration-300
                  text-center
                "
              >
                Explore Properties
              </NavLink>


              <NavLink
                to="/Contact"
                className="
                  w-full
                  sm:w-auto
                  bg-white
                  hover:bg-gray-100
                  text-gray-900
                  font-semibold
                  px-7
                  py-3.5
                  rounded-lg
                  transition-colors
                  duration-300
                  text-center
                "
              >
                Contact Us
              </NavLink>

            </div>

          </div>

        </div>

      </section>
    </Reveal>
  );
};

export default CTA;