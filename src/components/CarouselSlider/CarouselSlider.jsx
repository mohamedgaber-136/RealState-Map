// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React, { useRef, useEffect } from 'react';

// import required modules
import { Navigation , Pagination } from 'swiper/modules';
const CarouselSlider = ({ images }) => {
  const reorderedImages = [...images.slice(-1), ...images.slice(0, -1)];
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  const handleKeyDown = (event) => {
    const swiperInstance = swiperRef.current.swiper;

    if (event.key === 'ArrowRight') {
      swiperInstance.slideNext();
    } else if (event.key === 'ArrowLeft') {
      swiperInstance.slidePrev();
    }
  };
  return (
          <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          keyboard={true}
        className="mySwiper">
        {reorderedImages.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
   
  );
};

export default CarouselSlider;
