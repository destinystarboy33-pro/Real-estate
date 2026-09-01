import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const AllProperties = () => {

  const [properties, setProperties] = useState([]);

  const [deleteId, setDeleteId] = useState(null);

  const [showDelete, setShowDelete] = useState(false);

  const [showMessage, setShowMessage] = useState(false);


  // GET ALL PROPERTIES

 useEffect(() => {
  let ignore = false;

  const getProperties = async () => {
    try {
      const response = await axios.get(
        "https://real-estate-qtye.onrender.com/api/Router"
      );

      console.log(response.data);

      if (!ignore) {
        setProperties(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  getProperties();

  return () => {
    ignore = true;
  };
}, []);
  // DELETE PROPERTY

  const handleDelete = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await axios.delete(
        `https://real-estate-qtye.onrender.com/api/Router/${deleteId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);


      // Remove deleted property from the screen

     setProperties((currentProperties) =>
  currentProperties.filter(
    (property) => property._id !== deleteId
  )
);

      setShowDelete(false);

      setDeleteId(null);

      setShowMessage(true);


    } catch (error) {

      console.log(error);

    }

  };


  return (

    <div className="min-h-screen bg-gray-100 px-5 py-10 md:px-10">

      <h1 className="text-3xl font-bold text-blue-700">
        All Properties
      </h1>


      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">


        {properties.map((property) => (

          <div
            key={property._id}
            className="overflow-hidden rounded-xl bg-white shadow-md"
          >

            {/* IMAGE */}

            <img
              // src={`https://real-estate-qtye.onrender.com/uploads/${property.image}`}
                src={property.image}
              alt={property.name}
              className="h-60 w-full object-cover"
            />


            <div className="p-5">

              {/* NAME */}

              <h2 className="text-xl font-bold">
                {property.name}
              </h2>


              {/* LOCATION */}

              <p className="mt-2 text-gray-600">

                <i className="fa-solid fa-location-dot text-red-500"></i>{" "}

                {property.location}

              </p>


              {/* PRICE */}

              <p className="mt-2 font-semibold text-blue-700">

                ₦{property.price.toLocaleString()}

              </p>


              {/* VIEWS */}

              <p className="mt-2 text-gray-500">

                <i className="fa-solid fa-eye"></i>{" "}

                {property.views.toLocaleString()} views

              </p>


              {/* EDIT + DELETE */}

              <div className="mt-5 flex gap-3">


                {/* EDIT */}

                <NavLink
                  to={`/properties/edit/${property._id}`}
                  className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-center font-semibold text-white hover:bg-blue-700"
                >
                  Edit
                </NavLink>


                {/* DELETE */}

                <button
                  onClick={() => {

                    setDeleteId(property._id);

                    setShowDelete(true);

                  }}
                  className="flex-1 rounded-lg bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700"
                >
                  Delete
                </button>


              </div>

            </div>

          </div>

        ))}


      </div>


      {/* ========================= */}
      {/* DELETE CONFIRMATION POPUP */}
      {/* ========================= */}


      {showDelete && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5">

          <div className="relative w-full max-w-md rounded-xl bg-white p-8 text-center shadow-2xl">


            {/* X */}

            <button
              onClick={() => setShowDelete(false)}
              className="absolute right-4 top-3 text-2xl font-bold text-gray-500 hover:text-black"
            >
              ×
            </button>


            {/* ICON */}

            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">

              <i className="fa-solid fa-trash text-2xl text-red-600"></i>

            </div>


            <h2 className="text-2xl font-bold text-gray-800">

              Delete Property?

            </h2>


            <p className="mt-2 text-gray-500">

              Are you sure you want to delete this property?

            </p>


            {/* BUTTONS */}

            <div className="mt-6 flex justify-center gap-4">


              {/* CANCEL */}

              <button
                onClick={() => setShowDelete(false)}
                className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>


              {/* CONFIRM DELETE */}

              <button
                onClick={handleDelete}
                className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
              >
                Delete
              </button>


            </div>

          </div>

        </div>

      )}


      {/* ================= */}
      {/* SUCCESS POPUP */}
      {/* ================= */}


      {showMessage && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5">

          <div className="relative w-full max-w-md rounded-xl bg-white p-8 text-center shadow-2xl">


            {/* X */}

            <button
              onClick={() => setShowMessage(false)}
              className="absolute right-4 top-3 text-2xl font-bold text-gray-500 hover:text-black"
            >
              ×
            </button>


            {/* CHECK ICON */}

            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">

              <i className="fa-solid fa-check text-2xl text-green-600"></i>

            </div>


            <h2 className="text-2xl font-bold text-gray-800">

              Success!

            </h2>


            <p className="mt-2 text-gray-500">

              Property deleted successfully.

            </p>


          </div>

        </div>

      )}

    </div>

  );

};

export default AllProperties;