"use client";
import React, { useEffect, useState } from "react";
import styles from "./Brands.module.css";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function Brands() {
  const [loaded, setLoaded] = useState(false);
  const logo = useSelector((state) => state.home.data?.logo);

  useEffect(() => {
    if (logo) {
      setLoaded(true);
    }
  }, [logo]);

  if (!loaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.swiper_container}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={8}
        spaceBetween={20}
        dir="ltr"
        speed={2000}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {logo?.map((item, index) => (
          <SwiperSlide key={index} className={styles.item_wrapper}>
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${item}`}
              alt="Customer logo"
              className={styles.imgslider}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
