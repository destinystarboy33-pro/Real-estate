const Footer = () => {
  const year = new Date()
  const NewYear = year.getFullYear()
  return (
    <div className=" bg-gray-100 mt-10 py-5 px-5">
    

    <div className="flex flex-col  gap-4 p-0" >

      
        <h1 className="text-black text-2xl md:text-4xl font-medium md:font-bold">CloudString Properties</h1>

        <p className="text-black text-md md:text-3xl font-normal">Making the World a Conformtable <br /> Place of Living</p>


      <div className="text-black flex gap-3 text-4xl">
        <i className="fa-brands fa-facebook cursor-pointer text-blue-700"></i>
        <i className="fa-brands fa-x cursor-pointer"></i>
        <i className="fa-brands fa-instagram cursor-pointer  text-red-700"></i>
      </div>
        <div className="h-0.5 bg-gray-700"></div>
    
      <p className="text-black">&copy;{NewYear} CloudString Properties</p>
    </div>
    </div>
  );
};

export default Footer;
