"use client";
import React, { useRef, useState } from "react";
import styles from "./HeaderHome.module.css";
import useWindowWidth from "@/hook/WindowWidth";
import { useSelector } from "react-redux";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { useLanguage } from "@/context/LangContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
export default function HeaderHome() {
  const width = useWindowWidth();
  const { language } = useLanguage();
  const homeData = useSelector((state) => state.home.data || {});
  const swiperRef = useRef(null);
  const handleNextSlide = () => swiperRef.current?.swiper.slideNext();
  const handlePrevSlide = () => swiperRef.current?.swiper.slidePrev();
  const handleMouseEnter = () => swiperRef.current?.swiper.autoplay.stop();
  const handleMouseLeave = () => swiperRef.current?.swiper.autoplay.start();

  const panels = [
    {
      title: homeData?.sidebar_image_one_text || "Default Title",
      image: homeData?.sidebar_image_one || null,
    },
    {
      title: homeData?.sidebar_image_two_text || "Default Title",
      image: homeData?.sidebar_image_two || null,
    },
    {
      title: homeData?.sidebar_image_three_text || "Default Title",
      image: homeData?.sidebar_image_three || null,
    },
    {
      title: homeData?.sidebar_image_four_text || "Default Title",
      image: homeData?.sidebar_image_four || null,
    },
  ];


  const panelsMobile = [
      {
        title: homeData?.sidebar_image_one_text || "Default Title",
        image: homeData?.sidebar_image_mobile_one || null,
      },
      {
        title: homeData?.sidebar_image_two_text || "Default Title",
        image: homeData?.sidebar_image_mobile_two || null,
      },
      {
        title: homeData?.sidebar_image_three_text || "Default Title",
        image: homeData?.sidebar_image_mobile_three || null,
      },
      {
        title: homeData?.sidebar_image_four_text || "Default Title",
        image: homeData?.sidebar_image_mobile_five || null,
      },
  ];


  const [activeIndex, setActiveIndex] = useState(0);

  if (width === undefined) {
    return null;
  }

  const handlePanelClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      {width <= 1024 ? (
        <>
          <div
            className={styles.container_slide_m}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Swiper
              ref={swiperRef}
              modules={[Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={panelsMobile?.length > 1}
              slidesPerView={1}
              className={styles.swiper_slider}
              dir="ltr"
            >
              {panelsMobile.length > 0 &&
                panelsMobile.map((panel, i) => (
                  <SwiperSlide key={i} className={styles.swiper_item}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${panel?.image}`}
                      alt=""
                    />
                    <div
                      className={`${styles.wrap_title_m} ${
                        language === "en"
                          ? styles.wrap_title_m_en
                          : styles.wrap_title_m_fa
                      }`}
                    >
                      <CircleOutlinedIcon />
                      <span className={styles.text_panel}>{panel?.title}</span>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.custom_buttons}>
              <button
                className={`${styles.prev_button} ${styles.btn_slide}`}
                onClick={language === "en" ? handlePrevSlide : handleNextSlide}
              >
                {language === "fa" ? (
                  <KeyboardArrowRightIcon className={styles.arrowIcon} />
                ) : (
                  <KeyboardArrowLeftIcon className={styles.arrowIcon} />
                )}
              </button>
              <button
                className={`${styles.next_button} ${styles.btn_slide}`}
                onClick={language === "en" ? handleNextSlide : handlePrevSlide}
              >
                {language === "fa" ? (
                  <KeyboardArrowLeftIcon className={styles.arrowIcon} />
                ) : (
                  <KeyboardArrowRightIcon className={styles.arrowIcon} />
                )}
              </button>
            </div>
            <div className={styles.cover_slides}></div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.container_slide}>
            {panels?.map((panel, index) => (
              <div
                key={index}
                className={`${styles.panel} ${
                  index === activeIndex ? styles.active : ""
                }`}
                style={{
                  backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL}${panel?.image})`,
                }}
                onClick={() => handlePanelClick(index)}
              >
                {index !== activeIndex && (
                  <img src="/images/plus.png" className={styles.icon} />
                )}
                <div
                  className={`${
                    language === "en"
                      ? styles.title_wrap_en
                      : styles.title_wrap_fa
                  }`}
                >
                  <CircleOutlinedIcon />
                  <span className={styles.text_panel}>{panel?.title}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
