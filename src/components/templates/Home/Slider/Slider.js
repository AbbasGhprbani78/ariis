"use client";
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
import { useSelector } from 'react-redux';

export default function Slider() {

  const { t } = useTranslation()
  const swiperRef = useRef(null);
  const { language } = useLanguage()

  const handleNextSlide = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const handlePrevSlide = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const width = useWindowWidth();

  if (width === undefined) {
    return null;
  }

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  const { data, loading, error } = useSelector((state) => state.home);



  return (
    <div className={styles.slider_container}>
      <Swiper
        ref={swiperRef}
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={data?.projects.length > 1}
        slidesPerView={1}
        className={styles.swiper_slider}
        dir='ltr'
        
      >
        {
          width < 1024 ?
            <>
              {
                data?.projects.length > 0 &&
                data?.projects?.map((project, i) => (
                  <SwiperSlide>
                    <div className={styles.slide_content}>
                      <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${project?.image_mobile}`} alt="pic slider" />
                      <div className={styles.slide_text_content}>
                        <p className={`
                          ${styles.slide_text_m} 
                          ${styles.slide_text_m_right}
                          ${project?.background_color === "white" ? styles.black_color : ""}`
                        }
                        >
                          {width < 642 ? truncateText(project?.text_home, 100) : project?.text_home}
                        </p>
                      </div>
                      <div className={styles.btn_wrapper}>
                        <Button icon={EastIcon} text={t('TryNow')} link={`/product/${project?.project_id}`} />
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }

            </>
            :
            <>
              {
                data?.projects.length > 0 &&
                data?.projects?.map((project, i) => (
                  <SwiperSlide key={i}>
                    <div className={styles.slide_content}>
                      <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${project?.image_desktop}`} alt="pic slider" />
                      <div className={`${styles.slide_text_content} ${language === "fa" && styles.slide_text_content_right}`}>
                        <p
                          className={`
                              ${styles.slide_text} 
                              ${project?.background_color === "white" ? styles.black_color : ""} 
                              ${language === "fa" ? styles.slide_text_right : ""}
                            `}
                        >
                          {truncateText(project?.text_home, 200)}

                        </p>
                        <Button  text={t('TryNow')} link={`/product/${project?.project_id}`} />
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </>
        }

      </Swiper>

      <div className={styles.custom_buttons}>
        <button className={`${styles.prev_button} ${styles.btn_slide}`}
          onClick={language === "en" ? handlePrevSlide : handleNextSlide}>
          {
            language === "fa" ?
              < KeyboardArrowRightIcon className={styles.arrowIcon} /> :
              <KeyboardArrowLeftIcon className={styles.arrowIcon} />
          }

        </button>
        <button className={`${styles.next_button} ${styles.btn_slide}`}
          onClick={language === "en" ? handleNextSlide : handlePrevSlide}>
          {language === "fa" ?
            <KeyboardArrowLeftIcon className={styles.arrowIcon} /> :
            <KeyboardArrowRightIcon className={styles.arrowIcon} />
          }
        </button>
      </div>
    </div>
  );
}
