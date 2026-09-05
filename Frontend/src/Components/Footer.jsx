import { NavLink } from "react-router-dom";

const Footer = () => {

  const year = new Date().getFullYear();

  return (

    <footer className="bg-gray-800 text-white mt-30">

      {/* MAIN FOOTER */}

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">


          {/* COMPANY */}

          <div>

            <h1 className="text-2xl md:text-3xl font-bold">
              CloudString Properties
            </h1>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Making the world a comfortable
              <br />
              place to live.
            </p>


            {/* SOCIAL MEDIA */}

            <div className="mt-6">

              <h2 className="font-semibold text-lg mb-4">
                Follow Us
              </h2>

              <div className="flex gap-4 text-xl">

                <i className="fa-brands fa-facebook cursor-pointer hover:text-blue-500 transition"></i>

                <i className="fa-brands fa-x-twitter cursor-pointer hover:text-gray-400 transition"></i>

                <i className="fa-brands fa-instagram cursor-pointer hover:text-pink-500 transition"></i>

                <i className="fa-brands fa-whatsapp cursor-pointer hover:text-green-500 transition"></i>

                <i className="fa-brands fa-youtube cursor-pointer hover:text-red-500 transition"></i>

              </div>

            </div>

          </div>


          {/* QUICK LINKS */}

          <div>

            <h2 className="font-bold text-lg mb-5">
              Quick Links
            </h2>

            <nav>

              <ul className="flex flex-col gap-3 text-gray-400">

                <li>
                  <NavLink
                    to="/"
                    className="hover:text-white transition"
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/contact"
                    className="hover:text-white transition"
                  >
                    Contact
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/about"
                    className="hover:text-white transition"
                  >
                    About
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/investment"
                    className="hover:text-white transition"
                  >
                    Invest With Us
                  </NavLink>
                </li>

              </ul>

            </nav>

          </div>

      


          {/* CONTACT */}

          <div>

            <h2 className="font-bold text-lg mb-5">
              Contact Us
            </h2>

            <div className="flex flex-col gap-4 text-gray-400">

              <p className="flex items-start">

                <i className="fa-solid fa-phone text-green-500 mr-3 mt-1"></i>

                <span>
                  +6221 34490 560
                </span>

              </p>


              <p className="flex items-start">

                <i className="fa-solid fa-envelope text-orange-500 mr-3 mt-1"></i>

                <span className="break-all">
                  cloudstringproperties@gmail.com
                </span>

              </p>


              <p className="flex items-start">

                <i className="fa-solid fa-location-dot text-red-500 mr-3 mt-1"></i>

                <span>
                  22 Fulham, London
                </span>

              </p>

            </div>

          </div>

        </div>


        {/* DIVIDER */}

        <div className="h-px bg-gray-800 mt-12"></div>


        {/* BOTTOM FOOTER */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-4  pt-6 text-gray-500 text-sm">

          <p className=" text-center w-full">
            © {year} CloudString Properties. All rights reserved.
          </p>


          {/* <div className="flex gap-5">

            <NavLink
              to="/"
              className="hover:text-white transition"
            >
              Privacy Policy
            </NavLink>

            <NavLink
              to="/"
              className="hover:text-white transition"
            >
              Terms of Service
            </NavLink>

          </div> */}

        </div>

      </div>

    </footer>

  );
};

export default Footer;