"use client"
import React from 'react'
import styles from './ContactUs.module.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2'
import { useTranslation } from 'react-i18next';
import Input from '@/components/modules/Input/Input';
import EastIcon from '@mui/icons-material/East';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MediaItem from '@/components/modules/MediaItem/MediaItem';
import { useLanguage } from '@/context/LangContext';
export default function ContactUs() {

  const { t } = useTranslation()
  const { language } = useLanguage()
  return (
    <div className={styles.contactus_container}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={10}>
          <Grid size={{ xs: 12, md: 7 }} >
            <div className={styles.contactus_form}>
              <p className={styles.contactus_title}>
                {t("ContactUs")}
              </p>
              <form className={styles.form}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container rowSpacing={7} columnSpacing={4}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Input
                        name={"Name"}
                        value={""}
                        onChnage={""}
                        placeholder={t("Name")}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Input
                        name={"Email_Address"}
                        value={""}
                        onChnage={""}
                        placeholder={t("EmailAddress")}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} >
                      <Input
                        name={"Message"}
                        value={""}
                        onChnage={""}
                        placeholder={t("Message")}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <div className={styles.btn_wrapper}>
                  <button className={`${styles.btn} ${language === "fa" && styles.btn_rtl}`} type='submit'>
                    {t("Submit")}
                    <EastIcon className={`${styles.icon} ${language === "fa" && styles.icon_rotate}`} />
                  </button>
                </div>
              </form>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }} >
            <div className={styles.contactus_socialmedia}>
              <div className={styles.media_item}>
                <LocationOnOutlinedIcon sx={{ margin: "0 5px" }} className={`${styles.icon_media}${styles.icon_loc}`} />
                <p className={styles.text_media}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className={styles.media_item}>
                <LocalPhoneOutlinedIcon sx={{ margin: "0 5px" }} className={`${styles.icon_media}${styles.icon_phone}`} />
                <p className={styles.text_media}>0916 295 7253</p>
              </div>
              <div className={styles.media_item}>
                <MailOutlineOutlinedIcon sx={{ margin: "0 5px" }} className={`${styles.icon_media}${styles.icon_email}`} />
                <p className={styles.text_media}>
                  AbbasGhorbani779@gmail.com
                </p>
              </div>
              <div className={styles.media_item}>
                <MediaItem icon={InstagramIcon} />
                <MediaItem icon={TelegramIcon} />
                <MediaItem icon={WhatsAppIcon} />
                <MediaItem icon={LinkedInIcon} />
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
