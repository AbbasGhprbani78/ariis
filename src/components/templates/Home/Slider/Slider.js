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

  const longText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, inventore laudantium recusandae ab libero hic quo, odit doloremque voluptas earum eos sunt nihil possimus culpa facere vero, dolores nobis error!';


  return (
    <div className={styles.slider_container}>

      <Swiper
        ref={swiperRef}
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        className={styles.swiper_slider}
        dir='ltr'
      >
        {
          width < 1024 ?
            <>
              <SwiperSlide>
                <div className={styles.slide_content}>
                  <img src="/images/enslider/mobile/p1m.png" alt="pic slider" />
                  <div className={styles.slide_text_content}>
                    <p className={`${styles.slide_text_m} ${styles.slide_text_m_right}`}>
                      {width < 642 ? truncateText(longText, 100) : longText}
                    </p>
                  </div>
                  <div className={styles.btn_wrapper}>
                    <Button icon={EastIcon} text={t('TryNow')} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.slide_content}>
                  <img src="/images/enslider/mobile/p2m.png" alt="pic slider" />
                  <div className={styles.slide_text_content}>
                    <p className={`${styles.slide_text_m} ${styles.slide_text_m_right}`}>
                      {width < 642 ? truncateText(longText, 100) : longText}
                    </p>
                  </div>
                  <div className={styles.btn_wrapper}>
                    <Button icon={EastIcon} text={t('TryNow')} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.slide_content}>
                  <img src="/images/enslider/mobile/p3m.png" alt="pic slider" />
                  <div className={styles.slide_text_content}>
                    <p className={`${styles.slide_text_m} ${styles.slide_text_m_right}`}>
                      {width < 642 ? truncateText(longText, 100) : longText}
                    </p>
                  </div>
                  <div className={styles.btn_wrapper}>
                    <Button icon={EastIcon} text={t('TryNow')} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.slide_content}>
                  <img src="/images/enslider/mobile/p4m.png" alt="pic slider" />
                  <div className={styles.slide_text_content}>
                    <p className={`${styles.slide_text_m} ${styles.slide_text_m_right}`}>
                      {width < 642 ? truncateText(longText, 100) : longText}
                    </p>
                  </div>
                  <div className={styles.btn_wrapper}>
                    <Button icon={EastIcon} text={t('TryNow')} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.slide_content}>
                  <img src="/images/enslider/mobile/p5m.png" alt="pic slider" />
                  <div className={styles.slide_text_content}>
                    <p className={`${styles.slide_text_m} ${styles.slide_text_m_right}`}>
                      {width < 642 ? truncateText(longText, 100) : longText}
                    </p>
                  </div>
                  <div className={styles.btn_wrapper}>
                    <Button icon={EastIcon} text={t('TryNow')} />
                  </div>
                </div>
              </SwiperSlide>
            </>
            :
            <>
              <SwiperSlide>
                <div className={styles.slide_content}>
                  <img src={language === "en" ? "/images/enslider/img1.png" : "/images/faslider/img1.png"} alt="pic slider" />
                  <div className={`${styles.slide_text_content} ${language === "fa" && styles.slide_text_content_right}`}>
                    <p className={`${styles.slide_text} ${language === "fa" && styles.slide_text_right}`}>
                      {t("des")}
                    </p>
                    <Button icon={EastIcon} text={t('TryNow')} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.slide_content}>
                  <img src={language === "en" ? "/images/enslider/img2.png" : "/images/faslider/img2.png"} alt="pic slider" />
                  <div className={`${styles.slide_text_content} ${language === "fa" && styles.slide_text_content_right}`}>
                    <p className={`${styles.slide_text} ${language === "fa" && styles.slide_text_right}`}>
                      {t("des")}
                    </p>
                    <Button icon={EastIcon} text={t('TryNow')} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.slide_content}>
                  <img src={language === "en" ? "/images/enslider/img3.png" : "/images/faslider/img3.png"} alt="pic slider" />
                  <div className={`${styles.slide_text_content} ${language === "fa" && styles.slide_text_content_right}`}>
                    <p className={`${styles.slide_text} ${language === "fa" && styles.slide_text_right}`}>
                      {t("des")}
                    </p>
                    <Button icon={EastIcon} text={t('TryNow')} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.slide_content}>
                  <img src={language === "en" ? "/images/enslider/img4.png" : "/images/faslider/img4.png"} alt="pic slider" />
                  <div className={`${styles.slide_text_content} ${language === "fa" && styles.slide_text_content_right}`}>
                    <p className={`${styles.slide_text} ${language === "fa" && styles.slide_text_right}`}>
                      {t("des")}
                    </p>
                    <Button icon={EastIcon} text={t('TryNow')} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.slide_content}>
                  <img src={language === "en" ? "/images/enslider/img5.png" : "/images/faslider/img5.png"} alt="pic slider" />
                  <div className={`${styles.slide_text_content} ${language === "fa" && styles.slide_text_content_right}`}>
                    <p className={`${styles.slide_text} ${language === "fa" && styles.slide_text_right}`}>
                      {t("des")}
                    </p>
                    <Button icon={EastIcon} text={t('TryNow')} />
                  </div>
                </div>
              </SwiperSlide>
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



