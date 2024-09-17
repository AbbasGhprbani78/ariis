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

export default function Slider() {


    const { language } = useLanguage()
    const swiperRef = useRef(null);
    const handleNextSlide = () => {
        swiperRef.current?.swiper.slideNext();
    };

    const handlePrevSlide = () => {
        swiperRef.current?.swiper.slidePrev();
    };
    return (

        <div className={styles.slider_container}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={7}>
                    <Grid size={{ xs: 12, md: 5 }} >
                        <div className={styles.text_actions}>
                            <p className={styles.text_slider}>
                                What Our <br /> Customers Are <br /> Saying
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
                                    className={`${styles.btn} ${styles.next}`}
                                    onClick={language === "en" ? handleNextSlide : handlePrevSlide}>
                                    {language === "fa" ?
                                        <KeyboardArrowLeftIcon className={styles.arrowIcon} /> :
                                        <KeyboardArrowRightIcon className={styles.arrowIcon} />
                                    }
                                </button>
                            </div>
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }} >
                        <Swiper
                            ref={swiperRef}
                            modules={[Autoplay]}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            loop={true}
                            slidesPerView={1.7}
                            className={styles.swiper_slider}
                            spaceBetween={30}
                            dir='ltr'
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
