"use client"
import React, { useEffect } from 'react'
import styles from './Info.module.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import { useLanguage } from '@/context/LangContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch, useSelector } from 'react-redux';
import { getDataHome } from '@/redux/home';
import Loading from '@/components/modules/Loading/Loading';
import Error from '@/components/modules/Error/Error';

export default function Info() {
  const { language } = useLanguage();
  const dispatch = useDispatch();

  const { title_image_one, text_image_one, info_image_one, info_image_two, info_image_three, info_image_four, info_image_five } = useSelector((state) => ({
    title_image_one: state.home.data?.title_image_one,
    text_image_one: state.home.data?.text_image_one,
    info_image_one: state.home.data?.info_image_one,
    info_image_two: state.home.data?.info_image_two,
    info_image_three: state.home.data?.info_image_three,
    info_image_four: state.home.data?.info_image_four,
    info_image_five: state.home.data?.info_image_five
  }));
  
  const { loading, error } = useSelector((state) => state.home);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    dispatch(getDataHome(language));
  }, [language]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className={styles.Info_container}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className={`${styles.text_info_wrapper} ${language === "fa" && styles.text_info_right}`}>
              {language === "en" ? (
                <div className={styles.info_logo}>
                  <Image src="/images/g14.svg" width={100} height={63} alt='logo' />
                </div>
              ) : (
                <p className={styles.ariis_text}>{title_image_one}</p>
              )}
              <p className={styles.text_info}>{text_image_one}</p>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: "center" }}>
            <div className={styles.images_wrapper}>
              {[info_image_one, info_image_two, info_image_three, info_image_four, info_image_five].map((image, index) => (
                <div key={index} className={`${styles.item_image} ${styles[`item_image_${index + 1}`]}`}>
                  <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}${image}`} alt='info image' layout='fill' />
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
