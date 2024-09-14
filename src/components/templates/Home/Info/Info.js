"use client"
import React from 'react'
import styles from './Info.module.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LangContext';


export default function Info() {

  const { t } = useTranslation()
  const { language } = useLanguage()
  return (
    <div className={styles.Info_container}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }} >
            <div className={`${styles.text_info_wrapper} ${language === "fa" && styles.text_info_right}`}>
              {
                language === "en" ?
                  <Image src={"/images/logo.svg"} width={100} height={63} alt='logo' />
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
            <div className={styles.img_wrapper}>
              <img src='/images/handmobile.png' alt='mobile in hand' />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
