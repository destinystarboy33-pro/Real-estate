import { useState,useEffect, useRef } from "react"


const Statistics = () => {

    const [count, setCount] = useState(0)
    const target = 5000000

    const [count2, setCount2] = useState(0)
    const target2 = 10000000

    const[count3, setCount3] = useState(0)
    const target3 = 98

    const statref = useRef(null)

   useEffect(() =>{

    const interval1 =  setInterval (() =>{
  setCount((prev) => {
    if (prev < target) {
        return prev + 10000
    } clearInterval(interval1)
    return prev
  })
   }, 8)


   const interval2 = setInterval(() =>{
      setCount2((prev) =>{
        if (prev < target2) {
          return prev + 20000
        } clearInterval(interval2)

        return prev 
      })

   }, 4)

   const interval3 = setInterval(() =>{
   setCount3((prev) =>{
   if (prev < target3) {
    return prev + 2
   } clearInterval(interval3)
   return prev
   })

   },100)




   return() =>{
    clearInterval(interval1)
    clearInterval(interval2)
    clearInterval(interval3)
   }
   
   }, [])


   let display = count

   if (  count >= 1000000 ) {
    display = count/ 1000000 + 'M'
  }
  else if (count >= 1000) {
    display = count / 1000 + 'K'
   }

  let display2 = count2

  if (count2 >= 1000000) {
    display2 = count2 / 1000000 + 'M'
  }
  else if (count >= 1000) {
    display2 = count2 / 1000 + 'K'
  }

   


  return (
    <div className="flex gap-5 items-center justify-center mx-15">
                                    {/* Statistics */}
       <div className="w-24">
        <h1 className=" text-center">Clients Worldwide</h1>
        <p className="text-2xl font-bold text-center tabular-nums">{display}+</p>
        </div>   

        <div className="w-24">
          <h1 className=" text-center">Year Of Experience</h1>
           <p className="text-2xl font-bold text-center tabular-nums">{display2}+</p>
        </div>  


        <div className="w-24 ">
         <h1 className=" text-center">Customer Satisfaction</h1> 
          <p className="text-2xl font-bold text-center tabular-nums">{count3}%</p>
          </div>                        


    </div>
  )
}

export default Statistics
