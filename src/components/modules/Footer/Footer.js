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
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Footer() {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);
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
    text,
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

const validateForm = () => {
  const errors = [];

  const errorMessages = {
    en: {
      nameRequired: "Name is required.",
      emailRequired: "Email is required.",
      emailInvalid: "Invalid email format.",
      messageRequired: "Message is required.",
    },
    fa: {
      nameRequired: "نام لازم است.",
      emailRequired: "ایمیل لازم است.",
      emailInvalid: "فرمت ایمیل نامعتبر است.",
      messageRequired: "پیام لازم است.",
    },
  };

  const messages = errorMessages[language] || errorMessages.en;

  if (!formdata.name.trim()) errors.push(messages.nameRequired);
  if (!formdata.email.trim()) {
    errors.push(messages.emailRequired);
  } else if (!/^\S+@\S+\.\S+$/.test(formdata.email)) {
    errors.push(messages.emailInvalid);
  }
  if (!formdata.message.trim()) errors.push(messages.messageRequired);

  if (errors.length > 0) {
    setToastMessage({
      type: "error",
      title: language === "en" ? "Validation Errors" : "خطاهای اعتبارسنجی",
      message: errors.join(" "),
    });
    setShowToast(true);
    return false;
  }

  return true;
};

  const sendData = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true)
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
          message: t("sendMessage"),
        });
      }
    } catch (error) {
      setShowToast(true);
      setToastMessage({
        type: "error",
        title: t("error"),
        message: t("error"),
      });
    }finally{
      setLoading(false)
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
                      <button disabled={loading}
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
      <p className={styles.title_footer}>{t("Nobin")}</p>
      <div className={styles.footer_wrapper_bottom}>
        <Grid container spacing={4} className={styles.footer_content_bottom}>
          <Grid size={{ xs: 12, md: 4 }}>
            <div className={styles.wrap_logo_text}>
              <p className={styles.text_footer}>{text}</p>
            </div>
          </Grid>
          <Grid
            className={styles.wrap_part_footer_2}
            size={{ xs: 12, md: 4 }}
            sx={{ display: "flex" }}
          >
            <div className={styles.contactus}>
              <div className={styles.media_item}>
                <LocationOnOutlinedIcon
                  className={`${styles.icon_media} ${styles.icon_loc}`}
                />
                <p className={styles.text_media}>
                  {language === "en" ? address : address_farsi}
                </p>
              </div>
              <div className={styles.media_item}>
                <MailOutlineOutlinedIcon
                  className={`${styles.icon_media} ${styles.icon_email}`}
                />
                <p className={styles.text_media}>{email}</p>
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
            </div>
          </Grid>
          <Grid
            className={styles.wrap_part_footer_3}
            size={{ xs: 12, md: 4 }}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className={`${styles.media_item} ${styles.medias_wrap}`}>
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
            <p className={styles.nobin_text}>
              <CopyrightIcon />
              2024 Nobin All Rights Reserved
            </p>
          </Grid>
        </Grid>
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
