import axios from 'axios'
import Loading from '../Components/Loading';
import { useState } from "react";

const AddProperties = () => {
    
  const [loading, setLoading] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
    const [image, setImage] = useState(null)
    const [data, setData] = useState({
        
        name: '',
        views: '',
        location: '',
        price: '',
        oldPrice: ''
    })



  const handlechange = (e) => {
    // e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
   

    console.log(data);
  };


  const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    setLoading(true)

    const formData = new FormData();

    formData.append("image", image);
    formData.append("name", data.name);
    formData.append("views", data.views);
    formData.append("location", data.location);
    formData.append("price", data.price);

    const token = localStorage.getItem("token");
    console.log('selected:', image)

    const response = await axios.post(
      "https://real-estate-qtye.onrender.com/api/Router",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response.data);

    setData({
      name: "",
      views: "",
      location: "",
      price: "",
      oldPrice: ""
    });

    setImage(null);
    setShowMessage(true)

  } catch (error) {

    console.log(error);

  }  finally{
    setLoading(false)
  }


};

  if (loading) {
    return <Loading />
  }
  return (
  
  

    <div className="min-h-screen bg-gray-100 px-5 py-10 md:px-10">

       {showMessage && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5">

          <div className="relative w-full max-w-md rounded-xl bg-white p-8 text-center shadow-2xl">


            {/* X */}

            <button
              onClick={() => setShowMessage(false)}
              className="absolute right-4 top-3 text-2xl font-bold text-gray-500 hover:text-black"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>


            {/* CHECK ICON */}

            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">

              <i className="fa-solid fa-check text-2xl text-green-600"></i>

            </div>


            <h2 className="text-2xl font-bold text-gray-800">

              Success!

            </h2>


            <p className="mt-2 text-gray-500">

              Property Added successfully.

            </p>


          </div>

        </div>

      )}


      <div className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow-md md:p-8">

        <h1 className="text-2xl font-bold text-blue-700 md:text-3xl">
          Add Property
        </h1>

        <p className="mt-2 text-gray-500">
          Add a new property to your listings.
        </p>


        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >

          {/* Image */}
          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Property Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full rounded-lg border border-gray-300 p-3"
              required
            />
          </div>


          {/* Name */}
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


          {/* Views */}
          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Views
            </label>

            <input
              type="number"
              value={data.views}
              onChange={handlechange}
              name='views'
              placeholder="Enter number of views"
              min="0"
              className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-600"
              required
            />
          </div>


          {/* Location */}
          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Location
            </label>

            <input
              type="text"
              value={data.location}
              name="location"
              onChange={handlechange}
              placeholder="Enter property location"
              className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-600"
              required
            />
          </div>


          {/* Price */}
          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Price
            </label>

            <input
              type="number"
              value={data.price}
              name="price"
              onChange={handlechange}
              placeholder="Enter property price"
              min="0"
              className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-600"
              required
            />
          </div>


           {/* oldPrice */}
          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              OldPrice
            </label>

            <input
              type="number"
              value={data.oldPrice}
              onChange={handlechange}
              name='oldPrice'
              placeholder="Enter OldPrice"
              min="0"
              className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-600"
              required
            />
          </div>


          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Add Property
          </button>

        </form>

      </div>

    </div>
  
  );
};

export default AddProperties;