"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./Footer.module.css";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useLanguage } from "@/context/LangContext";
import Input from "../Input/Input";
import { useTranslation } from "react-i18next";
import EastIcon from "@mui/icons-material/East";
import Toast from "../Toast/Toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Autoplay } from "swiper/modules";
import SliderItem from "../SliderItem/SliderItem";
import { getAboutusData } from "@/redux/aboutus";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MediaItem from "../MediaItem/MediaItem";
import { convertToFarsiDigits } from "@/utils/ConvertNumberToFarsi";
import { getContactusData } from "@/redux/contactus";

export default function Footer() {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const [showToast, setShowToast] = useState(false);
  const { i18n } = useTranslation();
  const rtlSwitch = i18n?.dir();
  const swiperRef = useRef(null);
  const swiperKey = `${rtlSwitch}-swiper`;
  const dispatch = useDispatch();

  const { customer_comment } = useSelector(
    (state) => state.aboutus?.data || {}
  );
  
  const {
    address,
    address_farsi,
    phone_number,
    email,
    instagram,
    telegram,
    whatsapp,
    linkedin,
  } = useSelector((state) => state?.contactus?.data || {});

  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
    e.preventDefault();
    if (
      formdata.email.trim() &&
      formdata.email.trim() &&
      formdata.message.trim()
    ) {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/home/contact-us/`,
          formdata,
          {}
        );
        if (response.status === 201) {
          formdata.email = "";
          formdata.message = "";
          formdata.name = "";
          setShowToast(true);
          setToastMessage({
            type: "success",
            title: t("success"),
            message: t("success"),
          });
        }
      } catch (error) {
        setShowToast(true);
        setToastMessage({
          type: "error",
          title: t("error"),
          message: t("error"),
        });
      }
    }
  };

  const handleNextSlide = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const handlePrevSlide = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  useEffect(() => {
    dispatch(getAboutusData(language));
    dispatch(getContactusData(language));
  }, [language]);


  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_wrapper_top}>
        <div className={styles.footer_content}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 6 }}>
                <div
                  className={`${
                    language === "en"
                      ? styles.contactus_form_left
                      : styles.contactus_form_right
                  }`}
                >
                  <p className={`${styles.contactus_title}`}>
                    {t("ContactUs")}
                  </p>
                  <form className={styles.form} onSubmit={sendData}>
                    <div className={styles.wrap_two_top_input}>
                      <Input
                        name={"name"}
                        value={formdata.name}
                        onChnage={handleChange}
                        placeholder={t("Name")}
                      />
                      <Input
                        name={"email"}
                        value={formdata.email}
                        onChnage={handleChange}
                        placeholder={t("EmailAddress")}
                      />
                    </div>
                    <Input
                      name={"message"}
                      value={formdata.message}
                      onChnage={handleChange}
                      placeholder={t("Message")}
                    />
                    <div className={styles.btn_wrapper}>
                      <button
                        className={`${styles.btn} ${
                          language === "fa" && styles.btn_rtl
                        }`}
                        type="submit"
                      >
                        {t("Submit")}
                        <EastIcon
                          className={`${styles.icon} ${
                            language === "fa" && styles.icon_rotate
                          }`}
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} className={styles.wrap_sliders}>
                <Swiper
                  ref={swiperRef}
                  key={swiperKey}
                  dir={rtlSwitch}
                  modules={[Autoplay]}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={customer_comment?.length > 1}
                  className={styles.swiper_slider}
                  spaceBetween={30}
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
                    },
                  }}
                >
                  {customer_comment &&
                    customer_comment.length > 0 &&
                    customer_comment.map((item, i) => (
                      <SwiperSlide key={i}>
                        <SliderItem item={item} />
                      </SwiperSlide>
                    ))}
                </Swiper>
                <div className={styles.actions_slider}>
                  <button
                    className={`${styles.btn_slider} ${styles.prev}`}
                    onClick={
                      language === "en" ? handlePrevSlide : handleNextSlide
                    }
                  >
                    {language === "fa" ? (
                      <KeyboardArrowRightIcon className={styles.arrowIcon} />
                    ) : (
                      <KeyboardArrowLeftIcon className={styles.arrowIcon} />
                    )}
                  </button>
                  <button
                    className={`${styles.btn_slider} ${styles.next} ${
                      language === "fa" && styles.next_right
                    }`}
                    onClick={
                      language === "en" ? handleNextSlide : handlePrevSlide
                    }
                  >
                    {language === "fa" ? (
                      <KeyboardArrowLeftIcon className={styles.arrowIcon} />
                    ) : (
                      <KeyboardArrowRightIcon className={styles.arrowIcon} />
                    )}
                  </button>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
      <div className={styles.footer_wrapper_bottom}>
        <div className={styles.footer_content_bottom}>
          <div className={styles.contactus_socialmedia}>
            <div className={styles.media_item}>
              <LocationOnOutlinedIcon
                className={`${styles.icon_media} ${styles.icon_loc}`}
              />
              <p className={styles.text_media}>
                {language === "en" ? address : address_farsi}
              </p>
            </div>
            <div className={styles.media_item}>
              <LocalPhoneOutlinedIcon
                className={`${styles.icon_media} ${styles.icon_phone}`}
              />
              <p
                className={styles.text_media}
                style={{ direction: "ltr", width: "max-content" }}
              >
                {language === "fa"
                  ? convertToFarsiDigits(phone_number)
                  : phone_number}
              </p>
            </div>
            <div className={styles.media_item}>
              <MailOutlineOutlinedIcon
                className={`${styles.icon_media} ${styles.icon_email}`}
              />
              <p className={styles.text_media}>{email}</p>
            </div>
            <div className={styles.media_item}>
              <MediaItem
                icon={InstagramIcon}
                url_link={`https://www.instagram.com/${instagram}`}
                backStyle={"instaback"}
              />
              <MediaItem
                icon={TelegramIcon}
                url_link={`https://t.me/${telegram}`}
                backStyle={"telback"}
              />
              <MediaItem
                icon={WhatsAppIcon}
                url_link={`https://wa.me/${whatsapp}`}
                backStyle={"whatsback"}
              />
              <MediaItem
                icon={LinkedInIcon}
                url_link={`https://www.linkedin.com/in/${linkedin}`}
                backStyle={"linback"}
              />
            </div>
          </div>
        </div>
      </div>
      <Toast
        type={toastMessage.type}
        title={toastMessage.title}
        message={toastMessage.message}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </footer>
  );
}
