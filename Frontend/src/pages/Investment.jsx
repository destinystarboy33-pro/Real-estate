import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Reveal from "../Components/Reveal";
import Loading from "../Components/Loading";

import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";

const Investment = () => {

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  const [propertyPrice, setPropertyPrice] = useState(250000);
  const [monthlyRent, setMonthlyRent] = useState(1800);

  const annualIncome = monthlyRent * 12;

  const rentalYield =
    propertyPrice > 0
      ? ((annualIncome / propertyPrice) * 100).toFixed(2)
      : 0;


  // GET INVESTMENT PROPERTIES

  useEffect(() => {

    const getInvestmentProperties = async () => {

      try {

        setLoading(true);

        const response = await axios.get(
          "https://real-estate-qtye.onrender.com/api/Router"
        );

        console.log("ALL PROPERTIES:", response.data);

        // Only properties marked as investment
        const investmentProperties = response.data.filter(
          (property) => property.investment === true
        );

        console.log(
          "INVESTMENT PROPERTIES:",
          investmentProperties
        );

        setProperties(investmentProperties);

      } catch (error) {

        console.log("INVESTMENT ERROR:", error);

      } finally {

        setLoading(false);

      }

    };

    getInvestmentProperties();

  }, []);


  if (loading) {
    return <Loading />;
  }


  return (
    <Reveal>

      {/* HERO */}

      <section
        className="relative min-h-162 bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${house1})`,
        }}
      >

        <div className="max-w-7xl mx-auto px-5 md:px-10 w-full">

          <div className="max-w-3xl text-white">

            <p className="uppercase tracking-[4px] text-blue-400 font-semibold my-8">
              Real Estate Investment
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">

              Invest in Property.

              <br />

              <span className="text-blue-400">
                Build Your Future.
              </span>

            </h1>

            <p className="text-lg md:text-xl mt-7 text-gray-200 max-w-2xl leading-relaxed">
              Discover carefully selected real-estate opportunities designed
              to help you build long-term value and generate potential rental
              income.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="#opportunities"
                className="bg-blue-600 hover:bg-blue-700 transition px-7 py-3 rounded-md font-semibold"
              >
                Explore Opportunities
              </a>

              <Link
                to="/contact"
                className="border border-white hover:bg-white hover:text-black transition px-7 py-3 rounded-md font-semibold"
              >
                Speak With Us
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* WHY INVEST */}

      <section className="py-20 px-5 md:px-10">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-blue-600 font-semibold uppercase tracking-widest">
              Why Real Estate
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Why Invest in Real Estate?
            </h2>

            <p className="text-gray-600 mt-5">
              Property can provide investors with a tangible asset while
              offering opportunities for rental income and long-term growth.
            </p>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

            <div className="p-7 rounded-xl bg-gray-50 hover:shadow-lg transition">

              <i className="fa-solid fa-house text-3xl text-blue-600"></i>

              <h3 className="text-xl font-bold mt-5">
                Tangible Asset
              </h3>

              <p className="text-gray-600 mt-3">
                Invest in a physical property that can become part of your
                long-term portfolio.
              </p>

            </div>


            <div className="p-7 rounded-xl bg-gray-50 hover:shadow-lg transition">

              <i className="fa-solid fa-chart-line text-3xl text-blue-600"></i>

              <h3 className="text-xl font-bold mt-5">
                Long-Term Growth
              </h3>

              <p className="text-gray-600 mt-3">
                Property values may appreciate over time depending on the
                location and market conditions.
              </p>

            </div>


            <div className="p-7 rounded-xl bg-gray-50 hover:shadow-lg transition">

              <i className="fa-solid fa-money-bill-wave text-3xl text-blue-600"></i>

              <h3 className="text-xl font-bold mt-5">
                Rental Income
              </h3>

              <p className="text-gray-600 mt-3">
                Rental properties can provide potential recurring income for
                property owners.
              </p>

            </div>


            <div className="p-7 rounded-xl bg-gray-50 hover:shadow-lg transition">

              <i className="fa-solid fa-shield-halved text-3xl text-blue-600"></i>

              <h3 className="text-xl font-bold mt-5">
                Portfolio Diversification
              </h3>

              <p className="text-gray-600 mt-3">
                Property can be one component of a diversified investment
                portfolio.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* INVESTMENT OPPORTUNITIES */}

      <section
        id="opportunities"
        className="py-20 px-5 md:px-10 bg-gray-50"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <p className="text-blue-600 font-semibold uppercase tracking-widest">
              Opportunities
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Explore Investment Properties
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Explore selected properties that may suit different investment
              goals and budgets.
            </p>

          </div>


          {/* INVESTMENT PROPERTIES */}

          {properties.length > 0 ? (

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">

              {properties.map((property) => (

                <div
                  key={property._id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                >

                  {/* IMAGE */}

                  <div className="relative overflow-hidden">

                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-full h-60 object-cover hover:scale-105 transition duration-500"
                    />

                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">

                      Investment Opportunity

                    </div>

                  </div>


                  {/* CONTENT */}

                  <div className="p-6">

                    <h3 className="text-xl font-bold text-gray-900">

                      {property.name}

                    </h3>


                    <p className="text-gray-500 mt-2 flex items-center gap-2">

                      <i className="fa-solid fa-location-dot text-red-600"></i>

                      {property.location}

                    </p>


                    <div className="mt-5 flex items-center gap-2 text-gray-500">

                      <i className="fa-solid fa-building"></i>

                      <span>
                        {property.propertyType}
                      </span>

                    </div>


                    <div className="border-t border-gray-200 mt-5 pt-5">

                      <p className="text-sm text-gray-500">
                        Property Price
                      </p>

                      <p className="text-2xl font-bold text-gray-900 mt-1">

                        ${Number(property.price).toLocaleString()}

                      </p>

                    </div>


                    <Link
                      to={`/House/${property._id}`}
                      className="block text-center bg-blue-600 hover:bg-blue-700 text-white mt-6 py-3 rounded-md transition font-semibold"
                    >
                      View Property
                    </Link>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            /* NO INVESTMENT PROPERTIES */

            <div className="text-center py-20">

              <div className="mx-auto w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center">

                <i className="fa-solid fa-chart-line text-3xl text-blue-600"></i>

              </div>

              <h3 className="text-2xl font-bold text-gray-800 mt-6">
                No Investment Opportunities Available
              </h3>

              <p className="text-gray-500 mt-3 max-w-md mx-auto">
                There are currently no properties available for investment.
                Please check back later for new opportunities.
              </p>

              <Link
                to="/AllHouses"
                className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition"
              >
                Browse Properties
              </Link>

            </div>

          )}

        </div>

      </section>


      {/* HOW IT WORKS */}

      <section className="py-20 px-5 md:px-10">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <p className="text-blue-600 font-semibold uppercase tracking-widest">
              Simple Process
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              How It Works
            </h2>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-14">

            <div className="text-center">

              <div className="mx-auto w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                01
              </div>

              <h3 className="font-bold text-xl mt-5">
                Choose a Property
              </h3>

              <p className="text-gray-600 mt-3">
                Explore available investment opportunities.
              </p>

            </div>


            <div className="text-center">

              <div className="mx-auto w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                02
              </div>

              <h3 className="font-bold text-xl mt-5">
                Talk to Our Team
              </h3>

              <p className="text-gray-600 mt-3">
                Discuss the property and your investment objectives.
              </p>

            </div>


            <div className="text-center">

              <div className="mx-auto w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                03
              </div>

              <h3 className="font-bold text-xl mt-5">
                Complete the Purchase
              </h3>

              <p className="text-gray-600 mt-3">
                Receive guidance through the purchasing process.
              </p>

            </div>


            <div className="text-center">

              <div className="mx-auto w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                04
              </div>

              <h3 className="font-bold text-xl mt-5">
                Manage Your Property
              </h3>

              <p className="text-gray-600 mt-3">
                Manage your property and monitor its performance.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* INVESTMENT CALCULATOR */}

      <section className="py-20 px-5 md:px-10 bg-gray-50">

        <div className="max-w-5xl mx-auto">

          <div className="text-center">

            <p className="text-blue-600 font-semibold uppercase tracking-widest">
              Investment Calculator
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Estimate Your Rental Return
            </h2>

            <p className="text-gray-600 mt-4">
              Adjust the figures below to see an estimated rental yield.
            </p>

          </div>


          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 mt-12">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div>

                <label className="font-semibold">
                  Property Price
                </label>

                <div className="flex items-center border rounded-lg mt-2 px-4">

                  <span className="text-gray-500">
                    £
                  </span>

                  <input
                    type="number"
                    value={propertyPrice}
                    onChange={(e) =>
                      setPropertyPrice(Number(e.target.value))
                    }
                    className="w-full p-3 outline-none"
                  />

                </div>

              </div>


              <div>

                <label className="font-semibold">
                  Expected Monthly Rent
                </label>

                <div className="flex items-center border rounded-lg mt-2 px-4">

                  <span className="text-gray-500">
                    £
                  </span>

                  <input
                    type="number"
                    value={monthlyRent}
                    onChange={(e) =>
                      setMonthlyRent(Number(e.target.value))
                    }
                    className="w-full p-3 outline-none"
                  />

                </div>

              </div>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

              <div className="bg-gray-50 rounded-xl p-6 text-center">

                <p className="text-gray-500">
                  Estimated Annual Rental Income
                </p>

                <p className="text-3xl font-bold mt-2">
                  £{annualIncome.toLocaleString()}
                </p>

              </div>


              <div className="bg-blue-600 text-white rounded-xl p-6 text-center">

                <p>
                  Estimated Rental Yield
                </p>

                <p className="text-3xl font-bold mt-2">
                  {rentalYield}%
                </p>

              </div>

            </div>


            <p className="text-xs text-gray-500 mt-6 text-center">
              This calculator provides an estimate only and does not account
              for taxes, maintenance, financing, vacancies, or other costs.
            </p>

          </div>

        </div>

      </section>


      {/* WHY CHOOSE US */}

      <section className="py-20 px-5 md:px-10">

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          <div>

            <p className="text-blue-600 font-semibold uppercase tracking-widest">
              Our Advantage
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              We Make Property Investment Simpler
            </h2>

            <p className="text-gray-600 mt-5 leading-relaxed">
              Our team helps investors discover suitable properties and
              understand the opportunities and considerations involved before
              making a decision.
            </p>


            <div className="mt-8 space-y-5">

              <p className="flex items-center gap-3">

                <i className="fa-solid fa-circle-check text-blue-600"></i>

                Carefully selected properties

              </p>


              <p className="flex items-center gap-3">

                <i className="fa-solid fa-circle-check text-blue-600"></i>

                Professional property guidance

              </p>


              <p className="flex items-center gap-3">

                <i className="fa-solid fa-circle-check text-blue-600"></i>

                Transparent investment information

              </p>


              <p className="flex items-center gap-3">

                <i className="fa-solid fa-circle-check text-blue-600"></i>

                Support throughout the process

              </p>

            </div>

          </div>


          <div className="rounded-2xl overflow-hidden">

            <img
              src={house2}
              alt="Investment property"
              className="w-full h-113 object-cover"
            />

          </div>

        </div>

      </section>


      {/* FAQ */}

      <section className="py-20 px-5 md:px-10 bg-gray-50">

        <div className="max-w-4xl mx-auto">

          <div className="text-center">

            <p className="text-blue-600 font-semibold uppercase tracking-widest">
              FAQ
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Frequently Asked Questions
            </h2>

          </div>


          <div className="mt-12 space-y-4">

            <details className="bg-white rounded-lg p-5 shadow-sm">

              <summary className="font-semibold cursor-pointer">
                How much do I need to invest?
              </summary>

              <p className="text-gray-600 mt-4">
                Investment requirements vary depending on the property,
                location and purchase structure.
              </p>

            </details>


            <details className="bg-white rounded-lg p-5 shadow-sm">

              <summary className="font-semibold cursor-pointer">
                Can I invest in rental properties?
              </summary>

              <p className="text-gray-600 mt-4">
                Yes. Some properties may be suitable for rental investment,
                depending on their location, market demand and applicable
                regulations.
              </p>

            </details>


            <details className="bg-white rounded-lg p-5 shadow-sm">

              <summary className="font-semibold cursor-pointer">
                Is rental income guaranteed?
              </summary>

              <p className="text-gray-600 mt-4">
                No. Rental income and property values can vary based on market
                conditions, occupancy, expenses and other factors.
              </p>

            </details>


            <details className="bg-white rounded-lg p-5 shadow-sm">

              <summary className="font-semibold cursor-pointer">
                Can your team help me choose a property?
              </summary>

              <p className="text-gray-600 mt-4">
                Our team can provide information about available properties
                and help you understand the factors you should consider.
              </p>

            </details>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}

      <section
        className="py-24 px-5 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${house3})`,
        }}
      >

        <div className="max-w-3xl mx-auto text-center text-white">

          <h2 className="text-3xl md:text-5xl font-bold ">
            Ready to Explore Your Next Investment?
          </h2>

          <p className="text-gray-200 mt-5 text-lg">
            Speak with our team and discover property opportunities that may
            fit your investment goals.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-md font-semibold"
          >
            Contact Our Team
          </Link>

        </div>

      </section>

    </Reveal>
  );
};

export default Investment;