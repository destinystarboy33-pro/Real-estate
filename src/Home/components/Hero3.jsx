

const Hero3 = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-5 mx-5">
      <h1 className='flex items-center justify-center mt-7 font-extrabold text-2xl md:text-4xl text-orange-500 py-5'>Explore Apartment Types</h1>

      <div className="grid grid-cols-2 md:flex md:flex-row gap-5 ">
        <div className=" flex flex-col items-center justify-center bg-amber-500 border-2 border-orange-700 rounded-xl px-10 py-5 shadow-gray-400 shadow-xl">
            <i className="fa-solid fa-home text-white text-3xl"></i>
            <h1 className="text-orange-900 font-bold">Houses</h1>
            <p className="text-orange-900 font-bold">22 Properties</p>
        </div>


        <div  className=" flex flex-col items-center justify-center bg-amber-500 border-2 border-orange-700 rounded-xl px-10 py-5 shadow-gray-400 shadow-xl">
            <i className="fa-solid fa-building-columns text-white text-3xl"></i>
            <h1  className="text-orange-900 font-bold">Offices</h1>
            <p  className="text-orange-900 font-bold">42 Properties</p>
        </div>


        <div  className=" flex flex-col items-center justify-center bg-amber-500 border-2 border-orange-700 rounded-xl px-10 py-5 shadow-gray-400 shadow-xl">
            <i className="fa-solid fa-city text-white text-3xl"></i>
            <h1  className="text-orange-900 font-bold">Hotels</h1>
            <p  className="text-orange-900 font-bold">12 properties</p>
        </div>


        <div  className=" flex flex-col items-center justify-center bg-amber-500 border-2 border-orange-700 rounded-xl px-10 py-5 shadow-gray-400 shadow-xl">
            <i className="fa-solid fa-tree-city text-white text-3xl"></i>
            <h1  className="text-orange-900 font-bold">Estate</h1>
            <p  className="text-orange-900 font-bold">34 properties</p>
        </div>


        <div  className=" flex flex-col items-center justify-center bg-amber-500 border-2 border-orange-700 rounded-xl px-10 py-5 shadow-gray-400 shadow-xl">
            <i className="fa-solid fa-map-location-dot text-white text-3xl"></i>
            <h1  className="text-orange-900 font-bold">Land</h1>
            <p  className="text-orange-900 font-bold">129 properties</p>
        </div>


        <div  className=" flex flex-col items-center justify-center bg-amber-500 border-2 border-orange-700 rounded-xl px-10 py-5 shadow-gray-400 shadow-xl">
            <i className="fa-solid fa-building-columns text-white text-3xl"></i>
            <h1  className="text-orange-900 font-bold">Commercial Buildings</h1>
            <p  className="text-orange-900 font-bold">28 properties</p>
        </div>
      </div>
    </div>
  )
}

export default Hero3
