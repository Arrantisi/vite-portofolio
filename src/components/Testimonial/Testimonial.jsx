import React from 'react'
import "./testimonial.css"
import { dataMenu } from '../../common/Menus'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const Testimonial = () => {
    return (
        <section className="testimonials container section" id="testimonial">
            <h2 className="section__title">My clients say</h2>
            <span className="section__subtitle">Testimonial</span>

            <Swiper className="testimonial__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    }
                }}
                modules={[Autoplay, Navigation]}
            >
                {dataMenu.map(({ id, image, title, description }) => {
                    return (
                        <SwiperSlide key={id} className='testimonial__card'>
                            <img src={image} alt="" className='testimonial__img' />

                            <h3 className="testimonial__name">{title}</h3>
                            <p className="testimonial__description">{description}</p>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    )
}

export default Testimonial