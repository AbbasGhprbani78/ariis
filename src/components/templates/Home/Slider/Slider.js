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

export default function Slider() {

  const { t } = useTranslation()
  const swiperRef = useRef(null);

  const handleNextSlide = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const handlePrevSlide = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  return (
    <div className={styles.slider_container}>
      <Swiper
        ref={swiperRef}
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        className={styles.swiper_slider}
      >
        <SwiperSlide>
          <div className={styles.slide_content}>
            <img src="/images/enslider/img1.png" alt="pic slider" />
            <div className={styles.slide_text_content}>
              <p className={styles.slide_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Button icon={EastIcon} text={t('TryNow')} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_content}>
            <img src="/images/enslider/img2.png" alt="pic slider" />
            <div className={styles.slide_text_content}>
              <p className={styles.slide_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Button icon={EastIcon} text={t('TryNow')} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_content}>
            <img src="/images/enslider/img3.png" alt="pic slider" />
            <div className={styles.slide_text_content}>
              <p className={styles.slide_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Button icon={EastIcon} text={t('TryNow')} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_content}>
            <img src="/images/enslider/img4.png" alt="pic slider" />
            <div className={styles.slide_text_content}>
              <p className={styles.slide_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Button icon={EastIcon} text={t('TryNow')} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_content}>
            <img src="/images/enslider/img5.png" alt="pic slider" />
            <div className={styles.slide_text_content}>
              <p className={styles.slide_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Button icon={EastIcon} text={t('TryNow')} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className={styles.custom_buttons}>
        <button className={`${styles.prev_button} ${styles.btn_slide}`} onClick={handlePrevSlide}>
          <KeyboardArrowLeftIcon className={styles.arrowIcon} />
        </button>
        <button className={`${styles.next_button} ${styles.btn_slide}`} onClick={handleNextSlide}>
          <KeyboardArrowRightIcon className={styles.arrowIcon} />
        </button>
      </div>
    </div>
  );
}
