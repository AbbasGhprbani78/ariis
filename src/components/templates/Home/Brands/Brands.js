import React from "react";
import styles from "./Brands.module.css";
import Image from "next/image";

export default function Brands({ logos }) {
  const marqueeStyle = {
    "--dynamic-items": logos ? logos.length : 8,
  };

  return (
    <div
      className={`${styles.marquee} ${styles.marquee__8}`}
      style={marqueeStyle}
    >
      {logos &&
        logos.map((item, i) => (
          <div
            className={styles.marquee__item}
            key={i}
            style={{ "--marquee-item-index": i + 1 }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${item}`}
              alt="Customer logos"
              width={85}
              height={0}
              layout="intrinsic"
            />
          </div>
        ))}
    </div>
  );
}
