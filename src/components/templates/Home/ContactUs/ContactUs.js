"use client"
import React, { use, useEffect, useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import { getContactusData } from '@/redux/contactus';
import Loading from '@/components/modules/Loading/Loading';
import Error from '@/components/modules/Error/Error';
export default function ContactUs() {

  const { t } = useTranslation()
  const { language } = useLanguage()
  const dispatch = useDispatch()
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
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/home/contact-us/`, formdata, {})
        if (response.status === 201) {
          console.log(response.data)
          formdata.email = ""
          formdata.message = ""
          formdata.name = ""
          setShowToast(true)
          setToastMessage({
            type: "success",
            title: t("success"),
            message: t("success"),
          })
        }
      } catch (error) {
        setShowToast(true)
        setToastMessage({
          type: "error",
          title: t("error"),
          message: t("error"),
        })
      }
    }
  }


  const convertToFarsiDigits = (number) => {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return number?.toString().replace(/\d/g, (digit) => farsiDigits[digit]);
  };


  const { data, loading, error } = useSelector((state) => state.contactus);


  useEffect(() => {
    dispatch(getContactusData(language))
  }, [language])

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  if (data) {

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
                    {
                      language === "en" ?
                        data && data[0]?.address :
                        data && data[0].address_farsi
                    }

                  </p>
                </div>
                <div className={styles.media_item}>
                  <LocalPhoneOutlinedIcon sx={{ margin: "0 5px" }} className={`${styles.icon_media}${styles.icon_phone}`} />
                  <p className={styles.text_media} style={{ direction: "ltr", width: "max-content" }}> {language === "fa" ? convertToFarsiDigits(data && data[0]?.phone_number) : data && data[0]?.phone_number}</p>
                </div>
                <div className={styles.media_item}>
                  <MailOutlineOutlinedIcon sx={{ margin: "0 5px" }} className={`${styles.icon_media}${styles.icon_email}`} />
                  <p className={styles.text_media}>
                    {data && data[0]?.email}
                  </p>
                </div>
                <div className={styles.media_item}>
                  {
                    data && data[0] &&
                    <>
                      <MediaItem icon={InstagramIcon} url_link={`https://www.instagram.com/${data[0].instagram}`} />
                      <MediaItem icon={TelegramIcon} url_link={`https://t.me/${data[0].telegram}`} />
                      <MediaItem icon={WhatsAppIcon} url_link={`https://wa.me/${data[0].whatsapp}`} />
                      <MediaItem icon={LinkedInIcon} url_link={`https://www.linkedin.com/in/${data[0].linkedin}`} />
                    </>
                  }

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
}


