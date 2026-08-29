
const Button = ({ text, className }) => {
  return (
     <button className={` hover:bg-gray-400 text-blue-600 cursor-pointer px-3 rounded-xl ${className}`}>
        {text}</button>
  )
}

export default Button
