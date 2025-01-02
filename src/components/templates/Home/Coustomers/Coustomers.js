"use client";
import React, { useState, useRef } from "react";
import styles from "./Coustomers.module.css";
import { useTranslation } from "react-i18next";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import dynamic from "next/dynamic";
import useWindowWidth from "@/hook/WindowWidth";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function Coustomers({ customersData }) {
  const videos = [
    customersData?.video_one,
    customersData?.video_two,
    customersData?.video_three,
    customersData?.video_four,
  ];
  const width = useWindowWidth();
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const swiperRef = useRef(null);
  const [mutedStates, setMutedStates] = useState(videos.map(() => true));

  const handleToggleMute = (index) => {
    setMutedStates((prev) =>
      prev.map((muted, i) => (i === index ? !muted : muted))
    );
  };

  const handlePanelClick = (index) => {
    setActiveIndex(index);
    setIsPlaying(!isPlaying);
  };

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  if (width === undefined) {
    return null;
  }

  return (
    <>
      {width <= 1024 ? (
        <>
          <div className={styles.container_slide_m}>
            <Swiper
              ref={swiperRef}
              loop={videos?.length > 1}
              slidesPerView={1}
              className={styles.swiper_slider}
              dir="ltr"
            >
              {videos?.length > 0 &&
                videos.map((video, i) => (
                  <SwiperSlide key={i} className={styles.slider_item_m}>
                    <ReactPlayer
                      url={`${process.env.NEXT_PUBLIC_BASE_URL}${video}`}
                      playing={false}
                      muted={mutedStates[i]}
                      loop
                      className={styles.video}
                      width="100%"
                      height="100%"
                      playsinline
                      preload="metadata"
                    />
                    <div
                      className={styles.sound_toggle}
                      onClick={() => handleToggleMute(i)}
                    ></div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </>
      ) : (
        <>
          <div className={styles.coustomers_container}>
            <span className={styles.title}>{t("customers")}</span>
            <div className={styles.container_slide}>
              {videos?.length > 0 &&
                videos.map((video, index) => (
                  <div
                    key={index}
                    className={`${styles.panel} ${
                      index == activeIndex ? styles.active : ""
                    }`}
                    onClick={() => handlePanelClick(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                  >
                    {index !== activeIndex && (
                      <SlowMotionVideoIcon className={styles.icon} />
                    )}
                    <ReactPlayer
                      url={`${process.env.NEXT_PUBLIC_BASE_URL}${video}`}
                      playing={true}
                      muted={mutedStates[index]}
                      loop
                      className={styles.video}
                      width="100%"
                      height="100%"
                    />
                    {index === activeIndex && (
                      <div
                        className={styles.sound_toggle}
                        onClick={() => handleToggleMute(index)}
                      ></div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
