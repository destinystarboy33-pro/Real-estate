  import teams from "../Data/ourTeam"

 const About = () => {
  return (
    <div className="mt-20">

      <h1>CloudString Properties is a subsidiary of the CloudString Group. We acquire, develop, and sell verified lands that guarantee peace of mind and deliver outstanding investment returns.</h1>
     <p>Comprehensive real estate solutions tailored to meet your property needs at every stage.</p>


      <div className="bg-grey-100 grid grid-cols-3 w-full">
      {teams.map((team) =>(
       
       <div className="flex flex-col bg-amber-300 " >
            <img src={team.Image} alt={team.name}  className=" w-50 h-50"/>
            <div>
              <p>{team.name}</p>
              <div className="">
                <p className="">{team.role}</p>
                <p>{team.rating} <i className="fa-solid fa-star text-yellow-400"></i></p>
              </div>
            </div>
       </div>
      
      ))}
      </div>
    </div>
  )
}

export default About
