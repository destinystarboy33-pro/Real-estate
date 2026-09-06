import teams from "../Data/ourTeam";
import Reveal from "../Components/Reveal";
import house1 from "../assets/house1.jpg";

const About = () => {
  return (
    <div className="mt-20 mx-5 md:mx-10 lg:mx-20">

      {/* ==================== ABOUT US ==================== */}

      <Reveal>
        <section className="py-16 md:py-20">

          <div className="max-w-4xl mx-auto text-center">

            <span className="
              inline-block
              bg-blue-100
              text-blue-700
              font-semibold
              text-sm
              md:text-base
              px-5
              py-2
              rounded-full
              mb-6
            ">
              About Us
            </span>

            <h2 className="
              font-extrabold
              text-3xl
              md:text-5xl
              text-gray-900
              leading-tight
            ">
              CloudString Properties is a subsidiary of the CloudString Group.
            </h2>

            <p className="
              text-gray-600
              text-base
              md:text-xl
              leading-relaxed
              mt-6
            ">
              We acquire, develop, and sell verified lands that guarantee
              peace of mind and deliver outstanding investment returns.
            </p>

            <p className="
              text-gray-500
              text-base
              md:text-lg
              mt-5
              leading-relaxed
            ">
              Comprehensive real estate solutions tailored to meet your
              property needs at every stage.
            </p>

          </div>

        </section>
      </Reveal>


      {/* ==================== WHO WE ARE ==================== */}

      <Reveal>
        <section className="py-12 md:py-20">

          <div className="
            max-w-7xl
            mx-auto
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            lg:gap-16
            items-center
          ">

            {/* IMAGE */}

            <div className="relative">

              <div className="
                overflow-hidden
                rounded-2xl
                shadow-lg
              ">

                <img
                  src={house1}
                  alt="CloudString Properties"
                  className="
                    w-full
                    h-80
                    md:h-100
                    object-cover
                  "
                />

              </div>


              {/* SMALL BADGE */}

              <div className="
                absolute
                bottom-5
                left-5
                md:bottom-7
                md:left-7
                bg-white
                rounded-xl
                shadow-lg
                px-5
                py-4
              ">

                <p className="
                  text-2xl
                  md:text-3xl
                  font-extrabold
                  text-blue-600
                ">
                  100+
                </p>

                <p className="
                  text-sm
                  text-gray-500
                  font-medium
                ">
                  Property Opportunities
                </p>

              </div>

            </div>


            {/* CONTENT */}

            <div>

              <span className="
                inline-block
                bg-blue-100
                text-blue-700
                font-semibold
                text-sm
                px-5
                py-2
                rounded-full
              ">
                Who We Are
              </span>


              <h2 className="
                text-3xl
                md:text-4xl
                font-extrabold
                text-gray-900
                mt-5
                leading-tight
              ">
                Building Better Property Opportunities
              </h2>


              <p className="
                text-gray-600
                text-base
                md:text-lg
                leading-relaxed
                mt-6
              ">
                CloudString Properties is a real estate company committed
                to providing reliable property solutions for individuals,
                families, and investors.
              </p>


              <p className="
                text-gray-600
                text-base
                md:text-lg
                leading-relaxed
                mt-4
              ">
                We help our clients discover quality properties while
                providing opportunities to acquire, develop, and invest
                in verified lands and properties.
              </p>


              <p className="
                text-gray-600
                text-base
                md:text-lg
                leading-relaxed
                mt-4
              ">
                Whether you are looking for a place to call home or seeking
                a valuable property investment, we are focused on making
                the process simple, transparent, and convenient.
              </p>


              {/* HIGHLIGHTS */}

              <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-5
                mt-8
              ">

                <div className="flex items-center gap-3">

                  <div className="
                    w-11
                    h-11
                    shrink-0
                    rounded-full
                    bg-blue-50
                    text-blue-600
                    flex
                    items-center
                    justify-center
                  ">
                    <i className="fa-solid fa-house"></i>
                  </div>

                  <p className="font-semibold text-gray-800">
                    Property Sales & Rentals
                  </p>

                </div>


                <div className="flex items-center gap-3">

                  <div className="
                    w-11
                    h-11
                    shrink-0
                    rounded-full
                    bg-blue-50
                    text-blue-600
                    flex
                    items-center
                    justify-center
                  ">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>

                  <p className="font-semibold text-gray-800">
                    Land & Investment
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>
      </Reveal>


      {/* ==================== BENEFITS ==================== */}

      <Reveal>
        <section className="py-12 md:py-16">

          <div className="text-center mb-12">

            <span className="
              text-blue-600
              font-semibold
              text-sm
              uppercase
              tracking-widest
            ">
              Why Work With Us
            </span>

            <h1 className="
              text-3xl
              md:text-4xl
              font-extrabold
              text-gray-900
              mt-3
            ">
              Benefits of Collaborating With Us
            </h1>

          </div>


          <div className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6
            max-w-6xl
            mx-auto
          ">

            {/* FAMILY FOCUSED */}

            <div className="
              bg-blue-50
              border
              border-blue-100
              rounded-2xl
              p-7
              text-center
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
            ">

              <div className="
                w-14
                h-14
                mx-auto
                rounded-full
                bg-blue-100
                flex
                items-center
                justify-center
                mb-5
              ">
                <i className="fa-solid fa-house text-blue-600 text-xl"></i>
              </div>

              <h2 className="
                text-xl
                font-bold
                text-blue-700
                mb-4
              ">
                Family-focused
              </h2>

              <p className="
                text-gray-600
                leading-relaxed
              ">
                As moms and dads, we understand what international families
                need. We know which neighborhoods are kid-friendly, what types
                of homes to look for, and how to navigate daily life with
                children in United Kingdom.
              </p>

            </div>


            {/* ONLINE PROCESS */}

            <div className="
              bg-red-50
              border
              border-red-100
              rounded-2xl
              p-7
              text-center
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
            ">

              <div className="
                w-14
                h-14
                mx-auto
                rounded-full
                bg-red-100
                flex
                items-center
                justify-center
                mb-5
              ">
                <i className="fa-solid fa-laptop text-red-600 text-xl"></i>
              </div>

              <h2 className="
                text-xl
                font-bold
                text-red-700
                mb-4
              ">
                Online Process
              </h2>

              <p className="
                text-gray-600
                leading-relaxed
              ">
                Living overseas? Busy schedule? Small kids at home? No problem.
                We can handle the entire process remotely, from online
                consultations and virtual property viewings to electronic
                document signing.
              </p>

            </div>


            {/* FOREIGNER FRIENDLY */}

            <div className="
              bg-green-50
              border
              border-green-100
              rounded-2xl
              p-7
              text-center
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
            ">

              <div className="
                w-14
                h-14
                mx-auto
                rounded-full
                bg-green-100
                flex
                items-center
                justify-center
                mb-5
              ">
                <i className="fa-solid fa-earth-americas text-green-600 text-xl"></i>
              </div>

              <h2 className="
                text-xl
                font-bold
                text-green-700
                mb-4
              ">
                Foreigner-Friendly Listings Only
              </h2>

              <p className="
                text-gray-600
                leading-relaxed
              ">
                Every property we list is open to non-Uk renters. We’ll never
                show you a place where you might be turned away because of your
                nationality or language ability.
              </p>

            </div>

          </div>

        </section>
      </Reveal>


      {/* ==================== TEAM ==================== */}

      <Reveal>
        <section className="py-16 md:py-20">

          <div className="text-center mb-12">

            <span className="
              text-blue-600
              font-semibold
              text-sm
              uppercase
              tracking-widest
            ">
              Our People
            </span>

            <h1 className="
              text-3xl
              md:text-4xl
              font-extrabold
              text-gray-900
              mt-3
            ">
              Meet Our Team
            </h1>

            <p className="
              text-gray-500
              text-base
              md:text-lg
              mt-4
            ">
              Meet the people behind CloudString Properties.
            </p>

          </div>


          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
            max-w-6xl
            mx-auto
          ">

            {teams.map((team) => (

              <div
                key={team.name}
                className="
                  bg-white
                  rounded-2xl
                  overflow-hidden
                  border
                  border-gray-100
                  shadow-sm
                  hover:shadow-xl
                  transition-shadow
                  duration-300
                "
              >

                {/* IMAGE */}

                <div className="overflow-hidden">

                  <img
                    src={team.Image}
                    alt={team.name}
                    className="
                      w-full
                      h-64
                      object-cover
                      hover:scale-105
                      transition-transform
                      duration-500
                    "
                  />

                </div>


                {/* DETAILS */}

                <div className="p-6">

                  <p className="
                    text-xl
                    font-bold
                    text-gray-900
                  ">
                    {team.name}
                  </p>

                  <div className="
                    flex
                    items-center
                    justify-between
                    gap-3
                    mt-3
                  ">

                    <p className="text-gray-500">
                      {team.role}
                    </p>

                    <p className="text-gray-700 whitespace-nowrap">

                      {team.rating}

                      <i className="
                        fa-solid
                        fa-star
                        text-yellow-400
                        ml-1
                      "></i>

                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>
      </Reveal>

    </div>
  );
};

export default About;