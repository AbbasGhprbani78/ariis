"use client";
import React from "react";
import styles from "./Section1.module.css";
import { useTranslation } from "react-i18next";
import AboutFeatureItem from "@/components/modules/AboutFeatureItem/AboutFeatureItem";
import dynamic from "next/dynamic";
import { useLanguage } from "@/context/LangContext";
import useWindowWidth from "@/hook/WindowWidth";
import Loading from "@/components/modules/Loading/Loading";
import Error from "@/components/modules/Error/Error";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Section1() {
  const { t } = useTranslation();
  const { language, aboutUsSection1Data,loading,error } = useLanguage();
  const width = useWindowWidth();
  if (width === undefined) {
    return null;
  }

  const {
    text_image_one,
    image_one,
    text_image_two,
    image_two,
    text_image_three,
    image_three,
    text_image_four,
    image_four,
    about_video,
    main_text,
  } = aboutUsSection1Data;

    if (loading) return <Loading />;
  
    if (error) return <Error />;

  return (
    <>
      {width <= 1024 ? (
        <>
          <div className={styles.section1_wrapper_m}>
            <ReactPlayer
              url={`${process.env.NEXT_PUBLIC_BASE_URL}${about_video}`}
              muted
              playing={true}
              loop
              controls={false}
              width="100%"
              height="100%"
              playsinline
            />
            <p className={styles.aboutus_title}>{t("AboutUs")}</p>
            <p className={styles.main_text}>{main_text}</p>
            <div className={styles.cover_video}></div>
          </div>
          <div className={styles.aboutus_bottom}>
            <AboutFeatureItem text={text_image_one} img={image_one} />
            <div className={styles.line}></div>
            <AboutFeatureItem text={text_image_two} img={image_two} />
            <div className={styles.line}></div>
            <AboutFeatureItem text={text_image_three} img={image_three} />
            <div className={styles.line}></div>
            <AboutFeatureItem text={text_image_four} img={image_four} />
          </div>
        </>
      ) : (
        <>
          <div className={styles.section1_wrapper}>
            <div className={styles.aboutus_content}>
              <div className={styles.wrap}>
                <ReactPlayer
                  url={`${process.env.NEXT_PUBLIC_BASE_URL}${about_video}`}
                  muted
                  playing={true}
                  loop
                  controls={false}
                  width="100%"
                  height="100%"
                />
                <div className={styles.grid_overlay}>
                  <div className={styles.line_85}></div>
                  <p
                    className={`${styles.text_video} ${
                      language === "en" ? styles.video_en : styles.video_fa
                    }`}
                  >
                    <p className={styles.aboutus_title}>{t("AboutUs")}</p>
                    {main_text}
                  </p>
                </div>
                <div className={styles.cover_video}></div>
              </div>
              <div className={styles.aboutus_bottom}>
                <AboutFeatureItem text={text_image_one} img={image_one} />
                <div className={styles.line}></div>
                <AboutFeatureItem text={text_image_two} img={image_two} />
                <div className={styles.line}></div>
                <AboutFeatureItem text={text_image_three} img={image_three} />
                <div className={styles.line}></div>
                <AboutFeatureItem text={text_image_four} img={image_four} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
