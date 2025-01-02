"use client";
import React from "react";
import styles from "./Section6.module.css";
import Image from "next/image";

export default function Section6({ image }) {
  return (
    <div className={styles.section6_wrapper}>
      {image && (
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${image}`}
          alt="demo project"
          layout="fill"
        />
      )}
    </div>
  );
}
