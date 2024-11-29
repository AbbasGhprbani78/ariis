"use client"
import React, { useCallback, useEffect, useState } from "react";
import styles from "./Coustomers.module.css";
import { useTranslation } from "react-i18next";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import { useDispatch, useSelector } from "react-redux";
import { useLanguage } from "@/context/LangContext";
import { getDataHome } from "@/redux/home";
import Loading from "@/components/modules/Loading/Loading";
import Error from "@/components/modules/Error/Error";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });


export default function Coustomers() {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

const handlePanelClick = useCallback((index) => {
  setActiveIndex(index);
  setIsPlaying((prev) => !prev);
}, []);

  const dispatch = useDispatch();

  const { video_one, video_two, video_three, video_four, loading, error } =
    useSelector((state) => state?.home?.data || {});

  useEffect(() => {
    dispatch(getDataHome(language));
  }, [language]);


  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };


  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className={styles.coustomers_container}>
      <span className={styles.title}>{t("customers")}</span>
      <div className={styles.container_slide}>
        {Array(4)
          .fill(0)
          .map((panel, index) => (
            <div
              key={index}
              id={index + 1}
              className={`${styles.panel} ${
                index === activeIndex ? styles.active : ""
              }`}
              onClick={() => handlePanelClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              {index !== activeIndex && (
                <SlowMotionVideoIcon className={styles.icon} />
              )}
              {index === activeIndex && (
                <ReactPlayer
                  url={`/video/${index + 1}.mp4`}
                  playing={index === activeIndex}
                  muted
                  loop
                  controls={false}
                  className={styles.video}
                  width="100%"
                  height="100%"
                />
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
