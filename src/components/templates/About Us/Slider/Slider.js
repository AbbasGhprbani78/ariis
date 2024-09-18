"use client";
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import styles from './Slider.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import SliderItem from '@/components/modules/SliderItem/SliderItem';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useLanguage } from '@/context/LangContext';
import { useTranslation } from 'react-i18next';

export default function Slider() {


    const { language } = useLanguage()
    const swiperRef = useRef(null);
    const handleNextSlide = () => {
        swiperRef.current?.swiper.slideNext();
    };

    const handlePrevSlide = () => {
        swiperRef.current?.swiper.slidePrev();
    };

    const { t } = useTranslation()
    return (

        <div className={`${styles.slider_container} ${language === "fa" && styles.slider_right}`}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 4 }} >
                        <div className={`${styles.text_actions} ${language === "fa" && styles.text_actions_right}`}>
                            <p className={`${styles.text_slider}`}>
                                {
                                    language === "fa" ?
                                        <>نظرات مشتریان</>
                                        :
                                        <>
                                            What Our <br /> Customers Are <br /> Saying
                                        </>
                                }
                            </p>
                            <div className={styles.actions_slider}>
                                <button
                                    className={`${styles.btn} ${styles.prev}`}
                                    onClick={language === "en" ? handlePrevSlide : handleNextSlide}>
                                    {
                                        language === "fa" ?
                                            < KeyboardArrowRightIcon className={styles.arrowIcon} /> :
                                            <KeyboardArrowLeftIcon className={styles.arrowIcon} />
                                    }
                                </button>
                                <button
                                    className={`${styles.btn} ${styles.next} ${language === "fa" && styles.next_right}`}
                                    onClick={language === "en" ? handleNextSlide : handlePrevSlide}>
                                    {language === "fa" ?
                                        <KeyboardArrowLeftIcon className={styles.arrowIcon} /> :
                                        <KeyboardArrowRightIcon className={styles.arrowIcon} />
                                    }
                                </button>
                            </div>
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 8 }} >
                        <Swiper
                            ref={swiperRef}
                            modules={[Autoplay]}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            loop={true}
                            className={styles.swiper_slider}
                            spaceBetween={30}
                            dir='ltr'
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },

                                768: {
                                    slidesPerView: 1.3,
                                    spaceBetween: 20,
                                },

                                1024: {
                                    slidesPerView: 1.7,
                                    spaceBetween: 30,
                                }
                            }
                            }
                        >
                            <>
                                <SwiperSlide>
                                    <SliderItem />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <SliderItem />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <SliderItem />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <SliderItem />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <SliderItem />
                                </SwiperSlide>
                            </>
                        </Swiper>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
