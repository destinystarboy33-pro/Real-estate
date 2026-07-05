import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div>
      <header className="flex flex-row justify-between bg-blue-800 p-5 fixed top-0 right-0 left-0">
        <div className="flex gap-10">

        <p className="text-3xl text-white font-bold">STARBOY HOUSING</p>

        <div className=" md:hidden">

        <i className=" md:hidden fa-solid fa-bars text-2xl text-white"></i>
        </div>

        </div>
        <nav className=" hidden md:flex">
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
        <div className=" bg-orange-400 hover:bg-orange-600 items-center gap-2 px-3 rounded-xl hidden md:flex">
          <i className="fa-solid fa-phone text-white cursor-pointer"></i>
          <button
            className=" text-white rounded-xl cursor-pointer hidden md:flex
           "
          >
            Call us now
          </button>
        </div>
      </header>

      <div></div>
    </div>
  );
}

export default Header;
