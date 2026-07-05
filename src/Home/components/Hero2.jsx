import house2 from '../../assets/house2.jpg'
import house3 from '../../assets/house3.jpg'
import house4 from '../../assets/house4.jpg'
import house5 from '../../assets/house5.jpg'
import house6 from '../../assets/house6.jpg'
import house7 from '../../assets/house7.jpg' 
const Hero2 = () => {
  return (
        <div className=' w-full min-h-screen'>
            <h1 className='flex items-center justify-center mt-7 font-extrabold text-2xl md:text-4xl text-orange-500'>Property Grid</h1> 

            <div className='w-full  min-h-screen flex flex-col gap-5 px-10 md:grid md:grid-cols-3 mt-10'>
                <div className=' w-full rounded-md  bg-white flex flex-col pb-5 md:h-fit rounded-bl-xl rounded-br-xl shadow-gray-400 shadow-xl'>
                    <img src={house2} alt="" className='w-full h-50 md:h-80 rounded-tl-xl rounded-tr-xl' />

                    <div className='flex flex-col items-start px-5'>
                    <p className=' font-extrabold text-2xl text-orange-500'> Sport House</p>
                        <p className='font-bold text-xl'>Fulham Estate</p>
                        <p className='text-gray-600'>
                            <i className='fa-solid fa-chart-column'></i>
                            <span >4,056</span>
                        </p>
                        <p className='font-semibold text-xl'>$4,700/month</p>
                    </div>
                </div>

                <div className=' w-full rounded-md  bg-white flex flex-col pb-5 md:h-fit rounded-bl-xl rounded-br-xl shadow-gray-400 shadow-xl'>
                    <img src={house3} alt="" className='w-full h-50 md:h-80 rounded-tl-xl rounded-tr-xl'  />

                    <div className='flex flex-col items-start px-5'>
                    <p className=' font-extrabold text-2xl text-orange-500'>Ocean View Villa</p>
                        <p className='font-bold text-xl'>32 ocean Drive</p>
                        <p className='text-gray-600'>
                            <i className='fa-solid fa-chart-column'></i>
                            <span >3,678</span>
                        </p>
                        <p className='font-semibold text-xl'>$3,500/month</p>
                    </div>
                </div>

                <div className=' w-full rounded-md  bg-white flex flex-col pb-5 md:h-fit rounded-bl-xl rounded-br-xl shadow-gray-400 shadow-xl'>
                    <img src={house4} alt="" className='w-full h-50 md:h-80 rounded-tl-xl rounded-tr-xl'  />

                    <div className='flex flex-col items-start px-5'>
                    <p className=' font-extrabold text-2xl text-orange-500'>Lily House</p>
                        <p className='font-bold text-xl'>Noida, U.P</p>
                        <p className='text-gray-600'>
                           <i className='fa-solid fa-chart-column'></i>
                            <span >1,85</span>  
                        </p>
                        <p className='font-semibold text-xl'>$4,250/month</p>
                    </div>
                </div>

                <div className=' w-full rounded-md  bg-white flex flex-col pb-5 md:h-fit rounded-bl-xl rounded-br-xl shadow-gray-400 shadow-xl'>
                    <img src={house5} alt="" className='w-full h-50 md:h-80 rounded-tl-xl rounded-tr-xl'  />

                    <div className='flex flex-col items-start px-5'>
                    <p className=' font-extrabold text-2xl text-orange-500'>Luxury Family Home</p>
                        <p className='font-bold text-xl'>New York City</p>
                        <p className='text-gray-600'>
                            <i className='fa-solid fa-chart-column'></i>
                            <span >1,600</span>  
                        </p>
                        <p className='font-semibold text-xl'>$6,400/month</p>
                    </div>
                </div>

                <div className=' w-full rounded-md  bg-white flex flex-col pb-5 md:h-fit rounded-bl-xl rounded-br-xl shadow-gray-400 shadow-xl'>
                    <img src={house6} alt="" className='w-full h-50 md:h-80 rounded-tl-xl rounded-tr-xl'  />

                    <div className='flex flex-col items-start px-5'>
                    <p className=' font-extrabold text-2xl text-orange-500'>Mountain Condos</p>
                        <p className='font-bold text-xl'>New York City</p>
                        <p className='text-gray-600'>
                            <i className='fa-solid fa-chart-column'></i>
                            <span >4,756</span>  
                        </p>
                        <p className='font-semibold text-xl'>$4,500/month</p>
                    </div>
                </div>

                 <div className=' w-full rounded-md  bg-white flex flex-col pb-5 md:h-fit rounded-bl-xl rounded-br-xl shadow-gray-400 shadow-xl'>
                    <img src={house7} alt="" className='w-full h-50 md:h-80 rounded-tl-xl rounded-tr-xl'  />

                    <div className='flex flex-col items-start px-5'>
                    <p className=' font-extrabold text-2xl text-orange-500'>Beach House</p>
                        <p className='font-bold text-xl'>Manchester</p>
                        <p className='text-gray-600'>
                            <i className='fa-solid fa-chart-column'></i>
                            <span >3,727</span>  
                        </p>
                        <p className='font-semibold text-xl'>$4,200/month</p>
                    </div>
                </div>
            </div>
        
        </div>
    )
    }

    export default Hero2
