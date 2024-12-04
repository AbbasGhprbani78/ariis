"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./Coustomers.module.css";
import { useTranslation } from "react-i18next";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import { useDispatch, useSelector } from "react-redux";
import { useLanguage } from "@/context/LangContext";
import { getDataHome } from "@/redux/home";
import dynamic from "next/dynamic";
import useWindowWidth from "@/hook/WindowWidth";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Coustomers() {
  const { language } = useLanguage();
  const width = useWindowWidth();
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const swiperRef = useRef(null);
  const handleNextSlide = () => swiperRef.current?.swiper.slideNext();
  const handlePrevSlide = () => swiperRef.current?.swiper.slidePrev();
  const handleMouseEnterSlide = () => swiperRef.current?.swiper.autoplay.stop();
  const handleMouseLeave = () => swiperRef.current?.swiper.autoplay.start();

  const handlePanelClick = (index) => {
    setActiveIndex(index);
    setIsPlaying(!isPlaying);
  };

  const dispatch = useDispatch();

  const { video_one, video_two, video_three, video_four } = useSelector(
    (state) => state?.home.data || {}
  );

  useEffect(() => {
    dispatch(getDataHome(language));
  }, [language]);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  if (width === undefined) {
    return null;
  }

  const videos = [video_one, video_two, video_three, video_four];

  return (
    <>
      {width <= 1024 ? (
        <>
          <div
            className={styles.container_slide_m}
            onMouseEnter={handleMouseEnterSlide}
            onMouseLeave={handleMouseLeave}
          >
            <Swiper
              ref={swiperRef}
              modules={[Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={videos?.length > 1}
              slidesPerView={1}
              className={styles.swiper_slider}
              dir="ltr"
            >
              {videos.length > 0 &&
                videos.map((video, i) => (
                  <SwiperSlide key={i}>
                    <ReactPlayer
                      url={`${process.env.NEXT_PUBLIC_BASE_URL}${video}`}
                      playing={true}
                      controls={true}
                      muted
                      loop
                      className={styles.video}
                      width="100%"
                      height="100%"
                    />
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
            {/* <div className={styles.cover_slides}></div> */}
          </div>
        </>
      ) : (
        <>
          <div className={styles.coustomers_container}>
            <span className={styles.title}>{t("customers")}</span>
            <div className={styles.container_slide}>
              {videos.length > 0 &&
                videos.map((video, index) => (
                  <div
                    key={index}
                    className={`${styles.panel} ${
                      index == activeIndex ? styles.active : ""
                    }`}
                    onClick={() => handlePanelClick(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                  >
                    {index !== activeIndex && (
                      <SlowMotionVideoIcon className={styles.icon} />
                    )}
                    <ReactPlayer
                      url={`${process.env.NEXT_PUBLIC_BASE_URL}${video}`}
                      playing={index === activeIndex}
                      muted
                      loop
                      controls={true}
                      className={styles.video}
                      width="100%"
                      height="100%"
                    />
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
