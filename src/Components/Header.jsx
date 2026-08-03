import { NavLink } from "react-router-dom";
import { useState } from "react";






  function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const HandleOpen = () =>{
      setIsOpen(!isOpen)
    }

    return (
      
      <div>
        <header className="flex flex-row justify-between bg-blue-800 p-5 fixed top-0 right-0 left-0">
          <div className="flex justify-between bg-amber-200">

            {/* <p className="text-3xl text-white font-bold">STARBOY HOUSING</p> */}
            <NavLink to={"/"}>

            <img src='logo.jpg' alt=""  className="w-10 h-10" />
            </NavLink>


          </div>
            <button className=" md:hidden">
             
            </ button>
          <nav className="hidden md:flex">
            <ul className="flex gap-5">
              <li className="">
                    <NavLink to={"/"}
                    className={({ isActive}) => isActive ? 'text-orange-400 font-bold' : 'text-white'}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}
              className={({ isActive}) => isActive ? 'text-orange-400 font-bold' : 'text-white'}>Contact</NavLink> 
              </li>
              <li>
                <NavLink to={"/about"}
                className={({ isActive}) => isActive ? 'text-orange-400 font-bold' : 'text-white'}>About</NavLink>
              </li>

              <li>
                <NavLink to={"/Services"}
                className={({ isActive}) => isActive ? 'text-orange-400 font-bold' : 'text-white'}>Services</NavLink>
              </li>
            </ul>
          </nav>
          <div className="">
           <div onClick={HandleOpen} className="text-3xl text-white md:hidden">

            <div  className={`${isOpen ? 'hidden ' : 'block'}cursor-pointer`}><i className="fa-solid fa-bars"></i></div>

            <div className={` ${isOpen ? 'flex' : 'hidden'}`}><i className={` fa-solid fa-xmark`}></i></div>
            
           </div>
           <div className="hidden md:flex  bg-white hover:bg-gray-300 items-center gap-2 px-3 rounded-xl">
             <i className="fa-solid fa-phone text-blue-600 cursor-pointer"></i>
            <button
              className=" text-blue-600 font-bold rounded-xl cursor-pointer " >
              Call us now
            </button>
           </div>
            
          </div>
        </header>

                              {/* MOBLIE    NAVBAR */}

        <div className={` ${isOpen ? 'flex' : 'hidden '} flex-col mt-22 `}>
          <nav>
            <ul className="flex flex-col gap-10 mx-5">
              <li><NavLink to={"/"}
                    className={({ isActive}) => isActive ? 'text-orange-400 font-bold' : 'text-black'}>Home</NavLink></li>

              <li><NavLink to={"/Contact"}
                    className={({ isActive}) => isActive ? 'text-orange-400 font-bold' : 'text-black'}>Contact</NavLink> </li>

              <li><NavLink to={"/About"}
                    className={({ isActive}) => isActive ? 'text-orange-400 font-bold' : 'text-black'}>About</NavLink></li>

                    <li><NavLink to={"/Service"}
                    className={({ isActive}) => isActive ? 'text-orange-400 font-bold' : 'text-black'}>Service</NavLink></li>
            </ul>
          </nav>

        </div>

        
      </div>

      
    );
  }

 
export default Header;
