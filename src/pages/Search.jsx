import { useState } from "react"
import { NavLink } from "react-router-dom"

// import AllHouses from "./AllHouses";
import houseData from '../Data/houseData'
import BackButton from '../Components/BackButton'

const Search = () => {

  const [search, setSearch] = useState(' ')


  const filteredHouse = houseData.filter((house) => 
  house.name.toLowerCase().includes(search.toLowerCase())
  )



  return (
    <div className="flex flex-col">
        <div className='flex justify-between my-3'>
          <BackButton/>
          <input type="text" placeholder='Search Property' onChange={(e) => setSearch(e.target.value)} className='outline-none border border-gray-200' />
          <button  className=' cursor-pointer'><i className="fa-solid fa-magnifying-glass"></i></button>

        </div>


        <div>
          {search === '' ? null :

            filteredHouse.map((house) => {

              
              return <p className="text-xl  font-bold mx-3 my-5 px-2 w-full hover:bg-blue-600 hover:border hover:rounded-md hover:text-white"><NavLink
              key={house.id}
              to={`/House/${house.id}`}>
                  {house.name}
                </NavLink>
                </p>
               
               
               
              })
            }
        </div>
    
    </div>
  )
}

export default Search
