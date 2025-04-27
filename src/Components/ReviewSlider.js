import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';  // Import swiper's CSS
import './ReviewSlider.css';

// Import Swiper and the required modules
import SwiperCore, { Navigation, Autoplay } from 'swiper';

// Tell Swiper to use the Navigation and Autoplay modules
SwiperCore.use([Navigation, Autoplay]);

const reviews = [
  '/fcs/reviews/1.PNG',
  '/fcs/reviews/2.PNG',
  '/fcs/reviews/3.png',
  '/fcs/reviews/4.png',
  '/fcs/reviews/5.png',
  '/fcs/reviews/6.png',
  '/fcs/reviews/7.png',
  '/fcs/reviews/8.png',
  '/fcs/reviews/9.png',
  '/fcs/reviews/10.png',
  '/fcs/reviews/11.png',
  '/fcs/reviews/12.png'
];

const ReviewSlider = () => {
  return (
    <div className="review-slider-container">
      <Swiper
        spaceBetween={20}  // Space between slides
        slidesPerView={1}  // One slide per view
        loop={true}        // Infinite loop of slides
        //autoplay={{ delay: 3000 }}  // Autoplay with 3 seconds delay
        navigation={{      // Configure navigation buttons
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        {reviews.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Google review ${index + 1}`}
              className="review-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default ReviewSlider;
