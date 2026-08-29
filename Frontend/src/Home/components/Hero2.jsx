import ApartmentData from "../../Data/apartmentData"
import Reveal from "../../Components/Reveal"

const Hero2 = () => {
  return (
    <Reveal>
    <div className="flex flex-col items-center justify-center mt-10 mb-5 mx-5">
      <h1 className='flex items-center justify-center mt-7 font-extrabold text-2xl md:text-4xl text-orange-500 py-5'>Explore Apartment Types</h1>

      
      <div className="grid grid-cols-2 md:flex md:flex-row gap-5 ">
        {ApartmentData.map((Apartment) => (
        <div key={Apartment.id} className=" flex flex-col items-center justify-center bg-gray-300 border-2 border-blue-700 rounded-xl px-10 py-5 shadow-gray-400 shadow-xl">
            <i className={`${Apartment.icon} text-blue-600 text-3xl`}></i>
            <h1 className="text-gray-900 font-bold">{Apartment.name}</h1>
            <p className="text-gray-900 font-bold text-center">{Apartment.Properties}</p>
        </div>


        

        


        


        


        
        ))}
      </div>
    </div>
    </Reveal>
  )
}

export default Hero2
