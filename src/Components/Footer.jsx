import { NavLink } from "react-router-dom";

const Footer = () => {
  const year = new Date()
  const NewYear = year.getFullYear()
  return (
    <div className=" bg-gray-100 mt-30 py-5 px-5">
    

    <div className="flex flex-col  gap-4 p-0" >

      <div className=" flex flex-col gap-3">

        <h1 className="text-black text-2xl md:text-4xl font-bold">CloudString Properties</h1>

        <p className="text-black text-md md:text-3xl font-normal">Making the World a Conformtable <br /> Place of Living</p>
      </div>

      <div className="flex flex-col gap-3">
        <h1  className="font-bold text-lg">Social Media</h1>
      <div className="text-black flex gap-3 text-2xl">
        <i className="fa-brands fa-facebook cursor-pointer text-blue-700"></i>
        <i className="fa-brands fa-x cursor-pointer"></i>
        <i className="fa-brands fa-instagram cursor-pointer  text-red-700"></i>
        <i className="fa-brands fa-whatsapp cursor-pointer text-green-600"></i>
        <i className="fa-brands fa-youtube cursor-pointer text-center text-red-600"></i>
      </div>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-lg">Quick Links</h1>
        <nav className="text-gray-700">
          <ul>
            <li><NavLink>Home</NavLink></li>
            <li><NavLink>Contact</NavLink></li>
            <li><NavLink>About</NavLink></li>
            <li><NavLink>Service</NavLink></li>
          </ul>
        </nav>
      </div>


      <div  className="flex flex-col gap-3">
        <h1 className="font-bold text-lg">Contact Us</h1>
        <div className="text-gray-700 flex flex-col gap-2">
          <p><i className="fa-solid fa-phone text-green-600 mr-3"></i><span>+6221 34490 560</span></p>
          <p><i className="fa-solid fa-envelope text-orange-500 mr-3"></i><span>cloudstringproperties@gmail.com</span></p>
          <p><i className="fa-solid fa-location-dot text-red-600 mr-3"></i><span>22 Fulham,London</span></p>
        </div>
      </div>
        <div className="h-0.5 bg-gray-400"></div>
    
      <p className="text-black text-center">&copy;{NewYear} CloudString Properties</p>
    </div>
    </div>
  );
};

export default Footer;
