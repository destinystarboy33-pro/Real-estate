const Footer = () => {
  return (
    <div className=" bg-gray-950 mt-10 py-5 px-5">
    

    <div className="flex flex-col justify-start gap-4 items-center p-0" >

      
        <h1 className="text-orange-400 text-2xl md:text-4xl font-medium md:font-bold">STARBOY PROPERTIES</h1>

        <p className="text-orange-400 text-md md:text-3xl font-normal">Making the World a Conformtable <br /> Place of Living</p>


      <div className="text-white flex gap-5 text-4xl">
        <i className="fa-brands fa-facebook cursor-pointer"></i>
        <i className="fa-brands fa-x cursor-pointer"></i>
        <i className="fa-brands fa-instagram cursor-pointer"></i>
      </div>

    
      <p className="text-white">&copy; 2026</p>
    </div>
    </div>
  );
};

export default Footer;
