"use client"
import React, { useEffect, useState } from "react";
import styles from "./Brands.module.css";
import { useSelector } from "react-redux";

export default function Brands() {
  const [loaded, setLoaded] = useState(false);
  const logo = useSelector((state) => state.home.data?.logo);

  useEffect(() => {
    if (logo) {
      setLoaded(true);
    }
  }, [logo]);

  if (!loaded) {
    return <div>Loading...</div>;
  }

  const marqueeStyle = {
    "--dynamic-items": logo ? logo.length : 8, 
  };

  return (
    <div
      className={`${styles.marquee} ${styles.marquee__8}`}
      style={marqueeStyle}
    >
      {logo &&
        logo.map((item, i) => (
          <div
            className={styles.marquee__item}
            key={i}
            style={{ "--marquee-item-index": i + 1 }}
          >
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${item}`}
              alt="Customer logo"
              style={{ width: "85px", height: "auto" }}
            />
          </div>
        ))}
    </div>
  );
}
