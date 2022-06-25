import React from 'react';
import PropTypes from 'prop-types';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const config = {
  modules: [Navigation, Pagination, A11y],
  navigation: true,
  pagination: { clickable: true },
  spaceBetween: 50,
  slidesPerView: 3,
  onSlideChange() {
    console.log('slide change');
  },
  onSwiper(swiper) {
    console.log('swiper', swiper);
  },
};

export const Carousel = ({ images }) => (
  <Swiper {...config}>
    {images.map((image, i) => (
      <SwiperSlide key={i}>
        <img src={image.path} alt={image.alt} />
      </SwiperSlide>
    ))}
  </Swiper>
);

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string,
      path: PropTypes.string,
    }),
  ),
};
