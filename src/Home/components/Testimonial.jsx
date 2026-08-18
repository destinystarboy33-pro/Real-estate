import man1 from '../../assets/man1.jpg'
import man2 from '../../assets/man2.jpg'
import woman1 from '../../assets/woman1.jpg'
import woman2 from '../../assets/woman2.jpg'
import  {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import Reveal from '../../Components/Reveal'



const reviews = [

    { 
        image : man1,
        star : ['fa-solid fa-star','fa-solid fa-star','fa-solid fa-star','fa-solid fa-star','fa-solid fa-star'],
        comment : 'We really lucked out with getting Griffin for our agent. He is a very impressive young man, mature beyond his years. He is informed, patient, generous with his time, and sincerely concerned with finding us the right place to live. We look forward to working with him in the future.',
        name : 'Randall Moon.'

    },

    {
      image : woman1,
        star : ['fa-solid fa-star','fa-solid fa-star','fa-solid fa-star'],
        comment : 'Joe Hayden is a very professional real estate agent who listened to our specific wants and needs. Since we were from out of town his knowledge of East Louisville and Oldham County was most helpful. I needed handicap accessibility, which is hard to find, and Joe did not waste our time looking at property that had no potential to meet my requirements. We highly recommend him for all of your real estate needs.',
        name : 'Becky H.'  
    },

    {
        image : woman2,
        star : ['fa-solid fa-star','fa-solid fa-star',],
        comment : "Ellie Shipp was my agent. She helped me sell my condo and to find and buy another one. She is extremely knowledgeable and helped me in every way I needed. I won't hesitate to call her should I need her help in the future.",
        name : 'Karen A.'
    },

    {
        image : man2,
        star : 'fa-solid fa-star',
        comment : 'I cannot recommend Griffin Hicks enough. Not only did he go out of his way numerous times to show me and my family properties. He helped us move in and was very patient with our home search. Buying a home was big deal for me and I was slightly worried about the process, but Griffin walked me through each step amazingly and I felt he was really active in sending different options on the market as well as finding an amazing deal.',
        name : 'Dillon Lakhwani'
    }
]

const Testimonial = () => {
  return (
    <Reveal>
     <Swiper
     modules={[Pagination]}
     pagination={{clickable: true}}
     loop={true}
      spaceBetween={20}
     slidesPerView={1}>
        {reviews.map((items, Index) =>(
     <SwiperSlide key={Index}>
      
    <div className=" mx-5 mt-20">

        

      <div className='flex flex-col bg-blue-100 rounded-lg p-5 '>
        <div className='flex justify-between items-center mb-5'>
            <img src={items.image} alt="" className='w-20 h-20 rounded-lg' />
            <p className='font-extrabold  text-center'> {items.name}</p>
            <div className='text-yellow-400'>
                {/* <i className={items.star}></i> */}
                <i className={items.star}></i>
                {/* <i className={items.star}></i> */}

                </div>
        </div>
        <h1 className='font-medium text-lg mb-5'>{items.comment}</h1>
      </div>


      

      


    </div>
    </SwiperSlide>
      ))}
    </Swiper>
    </Reveal>
  )
}

export default Testimonial
