import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";
import BackBtn from "../Components/BackBtn";

const EditProperty = () => {

    const navigate = useNavigate()

  const { id } = useParams();

  const [image, setImage] = useState(null);
  const [showMessage, setShowMessage] = useState(false)

  const [data, setData] = useState({
    name: "",
    views: "",
    location: "",
    price: "",
    oldPrice: ""
  });

  const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");


  // GET THE EXISTING PROPERTY
  useEffect(() => {

    const getProperty = async () => {

      try {
        setLoading(true)

        const response = await axios.get(
          `https://real-estate-qtye.onrender.com/api/Router/${id}`
        );

        const property = response.data;

        setData({
          name: property.name,
          views: property.views,
          location: property.location,
          price: property.price,
          oldPrice: property.oldPrice
        });

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };

    getProperty();

  }, [id]);


  // HANDLE INPUTS
  const handlechange = (e) => {

    setData({
      ...data,
      [e.target.name]: e.target.value
    });

  };


  // SUBMIT EDIT
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true)

      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("views", data.views);
      formData.append("location", data.location);
      formData.append("price", data.price);
      formData.append("oldPrice", data.oldPrice)

      if (image) {
        formData.append("image", image);
      }

      const token = localStorage.getItem("token");

      const response = await axios.patch(
        `https://real-estate-qtye.onrender.com/api/Router/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log(response.data);

      setShowMessage(true);

    } catch (error) {

      console.log(error);

    } finally{
      setLoading(false)
    }

  };

if (loading) {
    return <Loading />
  }


  return (

    <div className="min-h-screen bg-gray-100 px-5 py-10 md:px-10">
      <BackBtn />


{showMessage && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5">

    <div className="relative w-full max-w-md rounded-xl bg-white p-8 text-center shadow-2xl">

      <button
        onClick={() => setShowMessage(false)}
        className="absolute right-4 top-3 text-2xl font-bold text-gray-500 hover:text-black"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
        <i className="fa-solid fa-check text-2xl text-green-600"></i>
      </div>

      <h2 className="text-2xl font-bold text-gray-800">
        Success!
      </h2>

      <p className="mt-2 text-gray-500">
        Property updated successfully.
      </p>

      <button
        onClick={() => navigate("/AllProperties/")}
        className="mt-6 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800 cursor-pointer"
      >
        Back to All Properties
      </button>

    </div>

  </div>
)}


      <div className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow-md md:p-8">

        <h1 className="text-2xl font-bold text-blue-700 md:text-3xl">
          Edit Property
        </h1>

        <p className="mt-2 text-gray-500">
          Update the property information below.
        </p>


        {/* {message && (
          <p className="mt-5 text-center font-semibold text-green-600">
            {message}
          </p>
        )} */}


        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >

          {/* IMAGE */}

          <div>

            <label className="mb-2 block font-semibold text-gray-700">
              Property Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full rounded-lg border border-gray-300 p-3"
            />

          </div>


          {/* NAME */}

          <div>

            <label className="mb-2 block font-semibold text-gray-700">
              Property Name
            </label>

            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handlechange}
              placeholder="Enter property name"
              className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-600"
              required
            />

          </div>


          {/* VIEWS */}

          <div>

            <label className="mb-2 block font-semibold text-gray-700">
              Views
            </label>

            <input
              type="number"
              name="views"
              value={data.views}
              onChange={handlechange}
              min="0"
              placeholder="Enter number of views"
              className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-600"
              required
            />

          </div>


          {/* LOCATION */}

          <div>

            <label className="mb-2 block font-semibold text-gray-700">
              Location
            </label>

            <input
              type="text"
              name="location"
              value={data.location}
              onChange={handlechange}
              placeholder="Enter property location"
              className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-600"
              required
            />

          </div>


          {/* PRICE */}

          <div>

            <label className="mb-2 block font-semibold text-gray-700">
              Price
            </label>

            <input
              type="number"
              name="price"
              value={data.price}
              onChange={handlechange}
              min="0"
              placeholder="Enter property price"
              className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-600"
              required
            />

          </div>


           {/* oldPRICE */}

          <div>

            <label className="mb-2 block font-semibold text-gray-700">
              OldPrice
            </label>

            <input
              type="number"
              name="oldPrice"
              value={data.oldPrice}
              onChange={handlechange}
              min="0"
              placeholder="Enter property oldPrice"
              className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-600"
              required
            />

          </div>


          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Save Changes
          </button>

        </form>

      </div>

    </div>
  );
};

export default EditProperty;