import man1 from '../../assets/man1.jpg'
import man2 from '../../assets/man2.jpg'
import woman1 from '../../assets/woman1.jpg'
import woman2 from '../../assets/woman2.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'
import Reveal from '../../Components/Reveal'


const reviews = [
  {
    image: woman1,
    stars: 5,
    comment:
      'Joe Hayden is a very professional real estate agent who listened to our specific wants and needs. Since we were from out of town his knowledge of East Louisville and Oldham County was most helpful. I needed handicap accessibility, which is hard to find, and Joe did not waste our time looking at property that had no potential to meet my requirements. We highly recommend him for all of your real estate needs.',
    name: 'Becky H.'
  },

  {
    image: man1,
    stars: 5,
    comment:
      'We really lucked out with getting Griffin for our agent. He is a very impressive young man, mature beyond his years. He is informed, patient, generous with his time, and sincerely concerned with finding us the right place to live. We look forward to working with him in the future.',
    name: 'Randall Moon'
  },

  {
    image: woman2,
    stars: 5,
    comment:
      "Ellie Shipp was my agent. She helped me sell my condo and to find and buy another one. She is extremely knowledgeable and helped me in every way I needed. I won't hesitate to call her should I need her help in the future.",
    name: 'Karen A.'
  },

  {
    image: man2,
    stars: 5,
    comment:
      'I cannot recommend Griffin Hicks enough. Not only did he go out of his way numerous times to show me and my family properties. He helped us move in and was very patient with our home search. Buying a home was a big deal for me and I was slightly worried about the process, but Griffin walked me through each step amazingly.',
    name: 'Dillon Lakhwani'
  }
]


const Testimonial = () => {

  return (
    <Reveal>

      {/* SECTION HEADER */}

      <section className="w-full py-16 md:py-20">

        <div className="text-center px-5">

          <p className="inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2 rounded-full">
            Testimonials
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-5">
            What Our Clients Say
          </h1>

          <p className="text-gray-600 text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Hear from people who have trusted us to help them find the right
            property.
          </p>

        </div>


        {/* REVIEWS */}

        <div className="mt-12">

          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}

            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}

            className="pb-12"
          >

            {reviews.map((item, index) => (

              <SwiperSlide key={index}>

                <div className="px-5 md:px-8">

                  <div className="
                    bg-blue-50
                    border
                    border-blue-100
                    rounded-2xl
                    p-6
                    md:p-8
                    min-h-80
                    flex
                    flex-col
                    shadow-sm
                    hover:shadow-md
                    transition-shadow
                    duration-300
                  ">

                    {/* CUSTOMER */}

                    <div className="
                      flex
                      items-center
                      gap-4
                      border-b
                      border-blue-100
                      pb-5
                    ">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="
                          w-16
                          h-16
                          md:w-20
                          md:h-20
                          rounded-full
                          object-cover
                        "
                      />


                      <div className="flex-1">

                        <h2 className="font-bold text-gray-900 text-lg">
                          {item.name}
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                          Verified Client
                        </p>

                      </div>


                      {/* STARS */}

                      <div className="flex gap-1 text-yellow-400">

                        {[...Array(item.stars)].map((_, starIndex) => (

                          <i
                            key={starIndex}
                            className="fa-solid fa-star text-sm"
                          ></i>

                        ))}

                      </div>

                    </div>


                    {/* COMMENT */}

                    <p className="
                      text-gray-700
                      text-base
                      md:text-lg
                      leading-relaxed
                      mt-6
                    ">
                      "{item.comment}"
                    </p>

                  </div>

                </div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </section>

    </Reveal>
  )
}

export default Testimonial