import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS
import "swiper/css"; // Import Swiper core styles
import "swiper/css/navigation"; // Import Swiper Navigation styles
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Navigation, Autoplay } from "swiper/modules"; // Import Autoplay module

import lightTitan from "../../assets/ourBands/main/7.png";
import lightJohn from "../../assets/ourBands/main/2.png";
import lightLmdTowers from "../../assets/ourBands/main/3.png";
import lightVar from "../../assets/ourBands/main/4.png";
import upGov from "../../assets/ourBands/main/5.png";
import upTor from "../../assets/ourBands/main/6.png";
import lightRhl from "../../assets/ourBands/main/1.png";

const BrandsLogo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize the duration as needed
      once: false, // Only trigger the animation once
    });
  }, []);

  return (
    <div className="container mx-auto mb-12 mt-12 sm:mt-0">
      {/* Heading with animation */}
      <h1
        data-aos="slide-left"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="text-4xl font-lato text-center mt-8 mb-8 font-black text-2xl"
      >
        Trusted by Leading Companies
      </h1>

      {/* Swiper Carousel with Navigation and Autoplay */}
      <div className="relative">
        <Swiper
          spaceBetween={30}
          slidesPerView={5} // Show 5 logos at a time by default
          loop={true} // Enable looping
          autoplay={{
            delay: 2000, // Time in milliseconds between auto-slide
            disableOnInteraction: false, // Continue autoplay after interaction
          }}
          navigation={true} // Enable navigation arrows
          modules={[Navigation, Autoplay]} // Register Navigation and Autoplay modules
          breakpoints={{
            640: {
              slidesPerView: 2, // 2 logos on small screens (mobile)
            },
            768: {
              slidesPerView: 3, // 3 logos on tablet screens
            },
            1024: {
              slidesPerView: 4, // 4 logos on desktop screens
            },
            1280: {
              slidesPerView: 5, // 5 logos on larger screens
            },
          }}
        >
          {/* Slide items */}
          <SwiperSlide className="flex justify-center items-center">
            <img
              src={lightTitan}
              alt="Titan Logo"
              className="h-28 w-auto object-contain"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <img
              src={lightJohn}
              alt="John Logo"
              className="h-28 w-auto object-contain"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <img
              src={lightLmdTowers}
              alt="Lmd Towers Logo"
              className="h-28 w-auto object-contain"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <img src={lightVar} alt="Var Logo" className="h-28 w-auto object-contain" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <img src={upGov} alt="UP Gov Logo" className="h-28 w-auto object-contain" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <img src={upTor} alt="UP Tor Logo" className="h-32 w-auto object-contain" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <img src={lightRhl} alt="Rhl Logo" className="h-28 w-auto object-contain" />
          </SwiperSlide>
        </Swiper>

        {/* Swipe hint */}
        <div className="text-center mt-4">
          <span className="text-gray-500 text-sm font-medium">
            Swipe or use arrows to navigate
          </span>
        </div>
      </div>
    </div>
  );
};

export default BrandsLogo;



