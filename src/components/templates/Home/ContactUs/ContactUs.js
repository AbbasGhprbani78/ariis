"use client"
import React, { useState } from 'react'
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
import axios from 'axios';
import Toast from '@/components/modules/Toast/Toast';
export default function ContactUs() {

  const { t } = useTranslation()
  const { language } = useLanguage()
  const [showToast, setShowToast] = useState(false);
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })


  const [toastMessage, setToastMessage] = useState({
    type: "",
    title: "",
    message: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const sendData = async (e) => {
    if (formdata.email.trim() && formdata.email.trim() && formdata.message.trim()) {
      e.preventDefault()
      try {
        const response = await axios.post(`${process.env}`, formdata, {})
        if (response.status === 200) {
          console.log(response.data)
          formdata.email = ""
          formdata.message = ""
          formdata.email = ""
          setShowToast(true)
          setToastMessage({
            type: "success",
            title: "success",
            message: "login success",
          })
        }
      } catch (error) {
        setShowToast(true)
        setToastMessage({
          type: "error",
          title: "error",
          message: error,
        })
      }
    }
  }

  const convertToFarsiDigits = (number) => {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return number.toString().replace(/\d/g, (digit) => farsiDigits[digit]);
  };

  return (
    <div className={styles.contactus_container}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={10}>
          <Grid size={{ xs: 12, md: 7 }} >
            <div className={`${styles.contactus_form} ${language === "fa" && styles.contactus_form_right}`}>
              <p className={styles.contactus_title}>
                {t("ContactUs")}
              </p>
              <form className={styles.form} onSubmit={sendData}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container rowSpacing={7} columnSpacing={4}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Input
                        name={"name"}
                        value={formdata.name}
                        onChnage={handleChange}
                        placeholder={t("Name")}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Input
                        name={"email"}
                        value={formdata.email}
                        onChnage={handleChange}
                        placeholder={t("EmailAddress")}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} >
                      <Input
                        name={"message"}
                        value={formdata.message}
                        onChnage={handleChange}
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
                <p className={styles.text_media} style={{ direction: "ltr", width: "max-content" }}> {language === "fa" ? convertToFarsiDigits("0916 295 7253") : "0916 295 7253"}</p>
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
      <Toast
        type={toastMessage.type}
        title={toastMessage.title}
        message={toastMessage.message}
        showToast={showToast}
        setShowToast={setShowToast} />
    </div>
  )
}
