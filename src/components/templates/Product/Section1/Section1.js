"use client";
import React from "react";
import styles from "./section1.module.css";
import Image from "next/image";

export default function Section1({ logo, title }) {
  return (
    <div className={styles.section1_wrapper}>
      {logo && (
        <div className={styles.logo_wrapper}>
          <Image
            width={100}
            height={0}
            layout="intrinsic"
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${logo}`}
            alt="logo"
          />
        </div>
      )}
      {title && <h1 className={styles.product_title}>{title}</h1>}
    </div>
  );
}
