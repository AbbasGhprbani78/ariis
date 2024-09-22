"use client"
import React, { useEffect } from 'react'
import styles from './Info.module.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LangContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch, useSelector } from 'react-redux';
import { getDataHome } from '@/redux/home';
import Loading from '@/components/modules/Loading/Loading';

export default function Info() {

  const { t } = useTranslation()
  const { language } = useLanguage()
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((state) => state.home);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    dispatch(getDataHome(language))
  }, [language])


  if (loading) {
    return <Loading />;
  }


  return (
    <div className={styles.Info_container}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }} >
            <div className={`${styles.text_info_wrapper} ${language === "fa" && styles.text_info_right}`}>
              {
                language === "en" ?
                  <div className={styles.info_logo}> <Image src={"/images/logo.svg"} width={100} height={63} alt='logo' /></div>
                  :
                  <p className={styles.ariis_text}>آریس</p>
              }

              <p className={styles.text_info}>
                {t("des")}
              </p>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{
            display: 'flex',
            justifyContent: "center"
          }}>
            <div data-aos="fade-up" className={styles.img_wrapper}>
              <img src='/images/handmobile.png' alt='mobile in hand' />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}



