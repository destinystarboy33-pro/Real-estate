const Contact = () => {
  return (
    <div className="min-h-screen mt-20 px-5 md:px-10 py-16 flex items-center justify-center">

      <div className="w-full max-w-6xl bg-gray-100 rounded-2xl shadow-lg shadow-gray-300 p-6 md:p-10">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="font-extrabold text-3xl md:text-4xl text-gray-900">
            Get in touch
          </h1>

          <p className="text-gray-600 mt-2">
            We're active 24/7
          </p>
        </div>


        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-20">

          {/* Contact Information */}
          <div className="flex-1 flex flex-col gap-8">

            <h2 className="text-2xl font-bold text-gray-900">
              Contact Information
            </h2>


            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 flex items-center justify-center rounded-full bg-red-100">
                <i className="fa-solid fa-location-dot text-red-600 text-lg"></i>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Head Office
                </h3>

                <p className="text-gray-600 mt-1">
                  22 Fulham, London
                </p>
              </div>
            </div>


            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 flex items-center justify-center rounded-full bg-blue-100">
                <i className="fa-solid fa-envelope text-blue-600 text-lg"></i>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Email us
                </h3>

                <p className="text-gray-600 mt-1 break-all">
                  cloudstringproperties@gmail.com
                </p>
              </div>
            </div>


            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 flex items-center justify-center rounded-full bg-green-100">
                <i className="fa-solid fa-phone text-green-600 text-lg"></i>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Call us
                </h3>

                <p className="text-gray-600 mt-1">
                  +6221 34490 560 <br />
                  +6223 67045 450
                </p>
              </div>
            </div>

          </div>


          {/* Contact Form */}
          <div className="flex-1 bg-white rounded-xl p-6 md:p-8 shadow-sm">

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a message
            </h2>

            <div className="flex flex-col gap-4">

              {/* Full Name */}
              <div className="flex flex-col gap-1">
                <label className="font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Full name"
                  className="border border-gray-300 rounded-lg px-3 py-3 focus:border-blue-600 focus:outline-none transition"
                />
              </div>


              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="support@gmail.com"
                  className="border border-gray-300 rounded-lg px-3 py-3 focus:border-blue-600 focus:outline-none transition"
                />
              </div>


              {/* Message */}
              <div className="flex flex-col gap-1">
                <label className="font-medium text-gray-700">
                  Message Us
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="border border-gray-300 rounded-lg px-3 py-3 resize-none focus:border-blue-600 focus:outline-none transition"
                ></textarea>
              </div>


              {/* Button */}
              <button className="bg-blue-700 text-white py-3 rounded-lg cursor-pointer hover:bg-blue-800 transition font-semibold mt-2">
                Submit
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact;