import teams from "../Data/ourTeam";
import Reveal from "../Components/Reveal";

const About = () => {
  return (
    <div className="mt-20 px-5 md:px-10 lg:px-20">

      {/* About Hero */}
      <Reveal>
        <section className="text-center py-16 md:py-20">

          <span className="inline-block bg-blue-100 text-blue-700 font-semibold px-5 py-2 rounded-full mb-5">
            About CloudString Properties
          </span>

          <h1 className="font-extrabold text-3xl md:text-5xl text-gray-900 max-w-4xl mx-auto leading-tight">
            Helping You Find the Right Property With Confidence
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
            CloudString Properties is a subsidiary of the CloudString Group.
            We acquire, develop, and sell verified lands that guarantee peace
            of mind and deliver outstanding investment returns.
          </p>

          <p className="text-gray-500 text-lg mt-4">
            Comprehensive real estate solutions tailored to meet your property
            needs at every stage.
          </p>

        </section>
      </Reveal>


      {/* Benefits */}
      <Reveal>
        <section className="py-10">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Collaborate With Us?
            </h2>

            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              We make the property journey simple, transparent, and convenient.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Family Focused */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition">

              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-5">
                <i className="fa-solid fa-house text-blue-600 text-xl"></i>
              </div>

              <h3 className="text-xl font-bold text-blue-700 mb-3">
                Family-focused
              </h3>

              <p className="text-gray-600 leading-relaxed">
                As moms and dads, we understand what international families
                need. We know which neighborhoods are kid-friendly, what types
                of homes to look for, and how to navigate daily life with
                children in the United Kingdom.
              </p>

            </div>


            {/* Online Process */}
            <div className="bg-red-50 border border-red-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition">

              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-5">
                <i className="fa-solid fa-laptop text-red-600 text-xl"></i>
              </div>

              <h3 className="text-xl font-bold text-red-700 mb-3">
                Online Process
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Living overseas? Busy schedule? Small kids at home? No problem.
                We can handle the entire process remotely, from online
                consultations and virtual property viewings to electronic
                document signing.
              </p>

            </div>


            {/* Foreigner Friendly */}
            <div className="bg-green-50 border border-green-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition">

              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-5">
                <i className="fa-solid fa-earth-americas text-green-600 text-xl"></i>
              </div>

              <h3 className="text-xl font-bold text-green-700 mb-3">
                Foreigner-Friendly Listings
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Every property we list is open to non-UK renters. We'll never
                show you a place where you might be turned away because of your
                nationality or language ability.
              </p>

            </div>

          </div>

        </section>
      </Reveal>


      {/* Team */}
      <Reveal>
        <section className="py-16">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Meet Our Team
            </h2>

            <p className="text-gray-600 mt-3">
              Meet the people helping you make better property decisions.
            </p>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

            {teams.map((team) => (

              <div
                key={team.name}
                className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition"
              >

                <div className="overflow-hidden">
                  <img
                    src={team.Image}
                    alt={team.name}
                    className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                  />
                </div>


                <div className="p-5">

                  <p className="text-xl font-bold text-gray-900">
                    {team.name}
                  </p>

                  <div className="flex items-center justify-between mt-2">

                    <p className="text-gray-600">
                      {team.role}
                    </p>

                    <p className="text-gray-700">
                      {team.rating}
                      <i className="fa-solid fa-star text-yellow-400 ml-1"></i>
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