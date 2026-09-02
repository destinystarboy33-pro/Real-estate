import { useNavigate } from "react-router-dom"


const BackBtn = () => {

  const navigate = useNavigate()
  return (
    <div>

      <button onClick={() => navigate(-1)} className=" text-black cursor-pointer text-3xl">
        <i className="fa-solid fa-arrow-left"></i>
    
      </button>
    </div>
  )
}

export default BackBtn
