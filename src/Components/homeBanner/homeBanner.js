import React from "react";

import "./homeBanner.css";

import bannerBox from "../../Assets/Home/home-banner-top-box.png";
import homeBannerSlide1 from "../../Assets/Home/homeBannerSlide1.jpeg";
import homeBannerSlide2 from "../../Assets/Home/homeBannerSlide2.jpeg";
import homeBannerSlide3 from "../../Assets/Home/homeBannerSlide3.jpeg";

import ContactFormMain from "../contactFormMain/contactFormMain";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

function HomeBanner() {
  return (
    <div className="app-container-flex-center home-banner">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="app-container-flex-center home-swiper-container"
            style={{ backgroundImage: `url(${homeBannerSlide1})` }}
          >
            <h2>India’s First corporate ready business school</h2>
            {/* <button className="app-secondary-buttons">
              See More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="24"
                viewBox="0 0 34 24"
                fill="none"
              >
                <path
                  d="M2 12H32M32 12L21.5 22.5M32 12L21.5 1.5"
                  stroke="#F6F6F6"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="app-container-flex-center home-swiper-container"
            style={{ backgroundImage: `url(${homeBannerSlide2})` }}
          >
            <h2>International Summer Internship & Exchange Programs</h2>
            {/* <button className="app-secondary-buttons">
              See More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="24"
                viewBox="0 0 34 24"
                fill="none"
              >
                <path
                  d="M2 12H32M32 12L21.5 22.5M32 12L21.5 1.5"
                  stroke="#F6F6F6"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="app-container-flex-center home-swiper-container"
            style={{ backgroundImage: `url(${homeBannerSlide3})` }}
          >
            <h2>Applications are invited for Management Batch 2024-26</h2>
            {/* <button className="app-secondary-buttons">
              See More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="24"
                viewBox="0 0 34 24"
                fill="none"
              >
                <path
                  d="M2 12H32M32 12L21.5 22.5M32 12L21.5 1.5"
                  stroke="#F6F6F6"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button> */}
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="home-banner-form-section">
        <h2>Enquire Now</h2>
        <div className="home-banner-form">
          <ContactFormMain />
        </div>
      </div>
      <img className="banner-box-top" src={bannerBox} alt="Banner" />
    </div>
  );
}

export default HomeBanner;
