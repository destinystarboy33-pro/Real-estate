import house1 from '../../assets/house1.jpg'
import  {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'



const reviews = [

    { 
        image : house1,
        star : 'fa-class fa-star',
        comment : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni officiis modi provident illum.',
        name : 'Lorem, ipsum.'

    },

    {
      image : house1,
        star : 'fa-class fa-star',
        comment : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni officiis modi provident illum.',
        name : 'Lorem, ipsum.'  
    },

    {
        image : house1,
        star : 'fa-class fa-star',
        comment : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni officiis modi provident illum.',
        name : 'Lorem, ipsum.'
    },

    {
        image : house1,
        star : 'fa-class fa-star',
        comment : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni officiis modi provident illum.',
        name : 'Lorem, ipsum.'
    }
]

const Testimonial = () => {
  return (
     <Swiper
     modules={[Pagination]}
     pagination={{clickable: true}}
     loop={true}
      spaceBetween={20}
     slidesPerView={1}>
        {reviews.map((items, Index) =>(
     <SwiperSlide key={Index}>
      
    <div className="flex gap-5">

      <div className='flex flex-col bg-blue-100 rounded-lg p-5'>
        <div className='flex justify-between'>
            <img src={items.image} alt="" className='w-10 h-10 rounded-full' />
            <div className='text-yellow-400'>
                <i className={items.star}></i>
                <i className={items.star}></i>
                <i className={items.star}></i>

                </div>
        </div>
        <h1 className='font-medium text-lg'>{items.comment}</h1>
        <p className='font-extrabold'> {items.name}</p>
      </div>


      

      


    </div>
    </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Testimonial
