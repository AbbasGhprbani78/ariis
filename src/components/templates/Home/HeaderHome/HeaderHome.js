import React, { useRef, useState } from "react";
import styles from "./HeaderHome.module.css";
import useWindowWidth from "@/hook/WindowWidth";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useLanguage } from "@/context/LangContext";
import Image from "next/image";

export default function HeaderHome({ headerData }) {
  const { language } = useLanguage();
  const width = useWindowWidth();
  const swiperRef = useRef(null);
  const handleMouseEnter = () => swiperRef.current?.swiper.autoplay.stop();
  const handleMouseLeave = () => swiperRef.current?.swiper.autoplay.start();

  const [activeIndex, setActiveIndex] = useState(0);

  if (width === undefined) {
    return null;
  }
  const panels = [
    {
      image: headerData?.sidebar_image_one,
      title: headerData?.sidebar_image_one_text,
    },
    {
      image: headerData?.sidebar_image_two,
      title: headerData?.sidebar_image_two_text,
    },
    {
      image: headerData?.sidebar_image_three,
      title: headerData?.sidebar_image_three_text,
    },
    {
      image: headerData?.sidebar_image_four,
      title: headerData?.sidebar_image_four_text,
    },
  ];

  const panelsMobile = [
    {
      image: headerData?.sidebar_image_mobile_one,
      title: headerData?.sidebar_image_one_text,
    },
    {
      image: headerData?.sidebar_image_mobile_two,
      title: headerData?.sidebar_image_two_text,
    },
    {
      image: headerData?.sidebar_image_mobile_three,
      title: headerData?.sidebar_image_three_text,
    },
    {
      image: headerData?.sidebar_image_mobile_four,
      title: headerData?.sidebar_image_four_text,
    },
  ];

  const handlePanelClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      {width <= 1024 ? (
        <>
          <div
            className={styles.container_slide_m}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Swiper
              ref={swiperRef}
              modules={[Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={panelsMobile?.length > 1}
              slidesPerView={1}
              className={styles.swiper_slider}
              dir="ltr"
            >
              {panelsMobile.length > 0 &&
                panelsMobile.map((panel, i) => (
                  <SwiperSlide key={i} className={styles.swiper_item}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${panel?.image}`}
                      alt="image-item"
                      className={styles.image_header_item}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div
                      className={`${styles.wrap_title_m} ${
                        language === "en"
                          ? styles.wrap_title_m_en
                          : styles.wrap_title_m_fa
                      }`}
                    >
                      <CircleOutlinedIcon />
                      <span className={styles.text_panel}>{panel?.title}</span>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </>
      ) : (
        <>
          <div className={styles.container_slide}>
            {panels?.map((panel, index) => (
              <div
                key={index}
                className={`${styles.panel} ${
                  index === activeIndex ? styles.active : ""
                }`}
                style={{
                  backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL}${panel?.image})`,
                }}
                onClick={() => handlePanelClick(index)}
              >
                {index !== activeIndex && (
                  <Image
                    src="/images/plus.png"
                    className={styles.icon}
                    width={40}
                    height={40}
                  />
                )}
                <div
                  className={`${
                    language === "en"
                      ? styles.title_wrap_en
                      : styles.title_wrap_fa
                  }`}
                >
                  <CircleOutlinedIcon />
                  <span className={styles.text_panel}>{panel?.title}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
