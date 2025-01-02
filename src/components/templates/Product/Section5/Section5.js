"use client";
import React from "react";
import styles from "./Section5.module.css";
import FeatureItem from "@/components/modules/FeatureItem/FeatureItem";
import Image from "next/image";
export default function Section5({ image_two, ability, color_ability }) {
  console.log(ability);
  return (
    <div className={styles.section5_wrapper}>
      <div className={styles.image_wrapper}>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${image_two}`}
          alt="image_two"
          layout="fill"
        />
      </div>
      <div className={styles.features_wrapper}>
        {ability &&
          ability.map((item, i) => (
            <FeatureItem item={item} key={i} color={color_ability} />
          ))}
      </div>
    </div>
  );
}
