import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>

      {/* Navbar */}
      <nav className="flex items-center gap-5 bg-blue-700 px-5 py-4 text-white">

        <button
          onClick={() => setOpen(true)}
          className="cursor-pointer text-2xl"
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <h1 className="text-xl font-bold">
          CloudString
        </h1>

      </nav>


      {/* Sidebar */}
      {open && (
        <div>

          {/* Background overlay */}
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/30"
          ></div>


          {/* Sidebar */}
          <aside className="fixed left-0 top-0 z-50 h-screen w-72 bg-white shadow-xl">

            {/* Header */}
            <div className="flex items-center justify-between bg-blue-700 px-5 py-5 text-white">

              <h1 className="text-xl font-bold">
                CloudString
              </h1>

              <button
                onClick={() => setOpen(false)}
                className="cursor-pointer text-xl"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

            </div>


            {/* Menu */}
            <div className="p-5">

              <button className="flex w-full items-center gap-4 rounded-lg p-3 text-left hover:bg-blue-100">
                <i className="fa-solid fa-house text-blue-700"></i>
                Dashboard
              </button>

            <NavLink to={'/AddProperties'}>

           
              <button className="flex w-full items-center gap-4 rounded-lg p-3 text-left hover:bg-blue-100">
                <i className="fa-solid fa-plus text-blue-700"></i>
                Add Property
              </button>
               </NavLink>

              <NavLink to={'/AllProperties'}>
              <button className="flex w-full items-center gap-4 rounded-lg p-3 text-left hover:bg-blue-100">
                <i className="fa-solid fa-building text-blue-700"></i>
                All Properties
              </button>
              </NavLink>

              <NavLink to={'/Search'}>

              <button className="flex w-full items-center gap-4 rounded-lg p-3 text-left hover:bg-blue-100">
                <i className="fa-solid fa-magnifying-glass text-blue-700"></i>
                Search Property
              </button>
              </NavLink>

              <button className="flex w-full items-center gap-4 rounded-lg p-3 text-left hover:bg-blue-100">
                <i className="fa-solid fa-envelope text-blue-700"></i>
                Inquiries
              </button>

              <button className="flex w-full items-center gap-4 rounded-lg p-3 text-left hover:bg-blue-100">
                <i className="fa-solid fa-users text-blue-700"></i>
                Agents
              </button>

              <button className="flex w-full items-center gap-4 rounded-lg p-3 text-left hover:bg-blue-100">
                <i className="fa-solid fa-gear text-blue-700"></i>
                Settings
              </button>

            </div>

          </aside>

        </div>
      )}

    </div>
  );
};

export default Sidebar;