"use client"
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import styles from './Slider.module.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from '@/components/modules/Button/Button';
import EastIcon from '@mui/icons-material/East';
import { useTranslation } from 'react-i18next';
import useWindowWidth from '@/hook/WindowWidth';
import { useLanguage } from '@/context/LangContext';
import { truncateText } from '@/utils/Maxtext';

export default function Slider({ slidesData }) {
  const { t } = useTranslation();
  const swiperRef = useRef(null);
  const { language } = useLanguage();
  const width = useWindowWidth();

  const handleNextSlide = () => swiperRef.current?.swiper.slideNext();
  const handlePrevSlide = () => swiperRef.current?.swiper.slidePrev();
  const handleMouseEnter = () => swiperRef.current?.swiper.autoplay.stop();
  const handleMouseLeave = () => swiperRef.current?.swiper.autoplay.start();

  if (width === undefined) return null;

  return (
    <div
      className={styles.slider_container}
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
        loop={slidesData?.length > 1}
        slidesPerView={1}
        className={styles.swiper_slider}
        dir="ltr"
      >
        {slidesData?.length > 0 &&
          slidesData.map((project, i) => (
            <SwiperSlide key={i}>
              <div className={styles.slide_content}>
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${
                    width < 1024 ? project.image_mobile : project.image_desktop
                  }`}
                  alt="slider image"
                />
                <div
                  className={`${styles.slide_text_content} ${
                    language === "fa" && styles.slide_text_content_right
                  }`}
                >
                  <p
                    className={`${
                      width < 1024 ? styles.slide_text_m : styles.slide_text
                    } 
                    ${
                      project.background_color === "white"
                        ? styles.black_color
                        : ""
                    } 
                    ${language === "fa" && styles.slide_text_right}`}
                  >
                    {truncateText(project.text_home, width < 642 ? 100 : 200)}
                  </p>
                  <div
                    className={`${styles.wrap_link} ${
                      language === "en" ? styles.wrap_en : styles.wrap_fa
                    }`}
                  >
                    <Button
                      text={t("TryNow")}
                      link={`/product/${project.project_id}`}
                      icon={width <= 1024 && EastIcon}
                      style={"width"}
                    />
                  </div>
                </div>
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
    </div>
  );
}
