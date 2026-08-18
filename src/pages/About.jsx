  import teams from "../Data/ourTeam"
  import Reveal from "../Components/Reveal"

 const About = () => {
  return (
    <div className="mt-20 mx-5 md:mx-25">
      <Reveal>
     <h1 className="font-extrabold text-4xl text-center my-25 bg-blue-200 text-blue-700 rounded-xl py-1">About Us</h1>
      <h2 className="font-semibold text-2xl text-center my-10">CloudString Properties is a subsidiary of the CloudString Group. We acquire, develop, and sell verified lands that guarantee peace of mind and deliver outstanding investment returns.</h2>
     <p className="text-xl font-sans text-gray-700 mb-10 text-center">Comprehensive real estate solutions tailored to meet your property needs at every stage.</p>
    </Reveal>


        <Reveal>
        <div className="my-15 flex flex-col items-center justify-center ">
          <h1 className="text-3xl font-bold text-center my-10">Benefit of Collaborating with Us?</h1>
          
          <div className="flex flex-col gap-5 max-w-lg ">

          
          <div className="text-center  bg-blue-300 rounded-lg">
            <h1 className="text-xl font-bold text-blue-700 m-3">Family-focused</h1>
            <p className="text-gray-700 font-semibold m-3">As moms and dads, we understand what international families need. We know which neighborhoods are kid-friendly, what types of homes to look for, and how to navigate daily life with children in United Kingdom.</p>
          </div>

          <div className="text-center  bg-red-300 rounded-lg">
            <h1 className="text-xl font-bold text-red-700 m-3">Online Process</h1>
            <p className="text-gray-700 font-semibold m-3">Living overseas? Busy schedule? Small kids at home? No problem. We can handle the entire process remotely, from online consultations and virtual property viewings to electronic document signing.</p>
          </div>

          <div className="text-center  bg-green-300 rounded-lg">
            <h1 className="text-xl font-bold text-green-700 m-3">Foreigner-Friendly Listings Only</h1>
            <p className="text-gray-700 font-semibold m-3">Every property we list is open to non-Uk renters. We’ll never show you a place where you might be turned away because of your nationality or language ability.</p>
          </div>

          </div>

        </div>
        </Reveal>




                     <Reveal> <h1 className="text-3xl font-bold my-10 text-center">Meet Our Teams</h1></Reveal>
      

      <Reveal><div className=" flex flex-col justify-center items-center  md:grid md:grid-cols-[repeat(3,max-content)] gap-6">
      {teams.map((team) =>(
       
       <div className="flex flex-col rounded-lg overflow-hidden shadow shadow-gray-300" >
            <img src={team.Image} alt={team.name}  className=" w-75 h-60 hover:scale-110 transition-all"/>
            <div className="text-xl p-5 ">
              <p className="font-bold">{team.name}</p>
              <div className="flex justify-between">
                <p className="semibold">{team.role}</p>
                <p>{team.rating} <i className="fa-solid fa-star text-yellow-400"></i></p>
              </div>
            </div>
       </div>
      
      ))}
      </div></Reveal>
    </div>
  )
}

export default About
