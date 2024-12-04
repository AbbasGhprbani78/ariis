import React from "react";
import styles from "./ServiceItem.module.css";
import Image from "next/image";
import { useLanguage } from "@/context/LangContext";

export default function ServiceItem({ image, title, text, icon: Icon }) {
  const { language } = useLanguage();

  return (
    <div
      className={`${styles.serviceItem_wrapper} ${
        language === "en" ? styles.left_border : styles.right_border
      }`}
    >
      <div className={styles.image_wrapper}>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${image}`}
          alt="service image"
          layout="fill"
        />
        <div className={styles.overlay}></div>
      </div>
      <div
        className={`${styles.content} ${
          language === "en" ? styles.left_content : styles.right_content
        }`}
      >
        <div className={styles.wrap_icon}>
          {Icon && <Icon className={styles.icon} />}
        </div>
        <p className={styles.serviceItem_title}>{title}</p>
        <p className={styles.serviceItem_text}>{text}</p>
      </div>
    </div>
  );
}
