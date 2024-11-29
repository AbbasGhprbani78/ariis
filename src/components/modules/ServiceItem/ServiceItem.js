import React from "react";
import styles from "./ServiceItem.module.css";
import Image from "next/image";
import { useLanguage } from "@/context/LangContext";
import CodeIcon from "@mui/icons-material/Code";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import WallpaperOutlinedIcon from "@mui/icons-material/WallpaperOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
export default function ServiceItem() {
  const { language } = useLanguage();
  return (
    <div
      className={`${styles.serviceItem_wrapper} ${
        language === "en" ? styles.left_border : styles.right_border
      }`}
    >
      <div className={styles.image_wrapper}>
        <Image src={"/images/4.jpg"} alt="service image" layout="fill" />
        <div className={styles.overlay}></div>
      </div>
      <div
        className={`${styles.content} ${
          language === "en" ? styles.left_content : styles.right_content
        }`}
      >
        <div className={styles.wrap_icon}>
          <CodeIcon className={styles.icon} />
        </div>
        <p className={styles.serviceItem_title}>
          طراحی و توسعه نرم افزار های تحت وب
        </p>
        <p className={styles.serviceItem_text}>
          در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها
          و شرایط سخت تایپ به پایان رسد.
        </p>
      </div>
    </div>
  );
}
