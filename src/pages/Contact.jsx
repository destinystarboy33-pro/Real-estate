

 const Contact = () => {
   return (
     <div className="flex items-center justify-center py-10 min-h-screen md:px-10 px-5">
     <div className="flex flex-col  justify-center bg-blue-300 rounded-xl border-2 border-blue-700  w-full md:min-w-200 p-5 " >

        <div className="flex flex-col justify-center items-center">
            <h1 className='font-extrabold text-2xl md:text-4xl text-orange-500'>Get in touch</h1> 
        <p className="text-md font-mono">We're active 24/7</p>
        </div>

      <div className="flex flex-col md:flex-row items-center justify-between px-2 gap-3 md:mx-20 ">

        <div className="flex flex-col gap-5">


        <div className=" flex items-center justify-start gap-2">
          <i className="fa-solid fa-location-dot text-red-600"></i>
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">Head Office</h1>
            <p>22 Fulham, London</p>
          </div>
        </div>

        <div className=" flex items-center justify-start gap-2">
           <i className="fa-solid fa-envelope"></i>
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">Email us</h1>
            <p>starboyproperties@gmail.com</p>
          </div>
        </div>

        <div className=" flex items-center justify-start gap-2">
           <i className="fa-solid fa-phone text-green-600"></i>
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">Call us</h1>
            <p>+6221 34490 560 <br /> +6223 67045 450</p>
          </div>
        </div>

      </div>

      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold">Send us a message</h1>

        <div className="flex flex-col">
          <label htmlFor="">Full Name</label>
          <input type="text"  className=" border-2 border-blue-700 rounded-md focus:border-2 focus:border-blue-800 focus:outline-none px-1"   placeholder="Full name"/>

          <label >Email</label>
          <input type="email" className=" border-2 border-blue-700 rounded-md focus:border-2 focus:border-blue-800 focus:outline-none px-1"  placeholder="support@gmail.com" />

          <label htmlFor="">Message Us</label>
          <textarea className=" border-2 border-blue-700 rounded-md focus:border-2 focus:border-blue-800 focus:outline-none px-1"  placeholder="Write Your Message Here"></textarea>

          <button className="bg-blue-700 text-white py-2 my-2 rounded-md cursor-pointer hover:bg-blue-900">Submit</button>
        </div>
      </div>
      </div>
     </div>
    </div>
  )
}

export default Contact
