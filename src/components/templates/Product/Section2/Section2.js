"use client";
import React from "react";
import styles from "./Section2.module.css";
import Image from "next/image";

export default function Section2({ image }) {
  console.log(image);
  return (
    <div className={styles.img_wrapper}>
      {image && (
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${image}`}
          alt="image_product"
          layout="fill"
        />
      )}
    </div>
  );
}
