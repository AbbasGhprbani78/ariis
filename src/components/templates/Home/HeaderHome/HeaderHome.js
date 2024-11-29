"use client";
import React, { useState } from "react";
import styles from "./HeaderHome.module.css";
import useWindowWidth from "@/hook/WindowWidth";
import { useSelector } from "react-redux";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
export default function HeaderHome() {
  const width = useWindowWidth();

  const headerText = useSelector(
    (state) => state.home.data?.header_text || "Default Header"
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const panels = [
    {
      title: "Explore The World",
      image:
        "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Wild Forest",
      image:
        "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Sunny Beach",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
    },
    {
      title: "City on Winter",
      image:
        "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    },
  ];

  if (width === undefined) {
    return null;
  }

  const handlePanelClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.container_slide}>
      {panels.map((panel, index) => (
        <div
          key={index}
          className={`${styles.panel} ${
            index === activeIndex ? styles.active : ""
          }`}
          style={{ backgroundImage: `url(${panel.image})` }}
          onClick={() => handlePanelClick(index)}
        >
          {index !== activeIndex && (
            <img src="/images/plus.png" className={styles.icon} />
          )}
          <div
            className={styles.title_wrap}>
            <CircleOutlinedIcon/>
            <span className={styles.text_panel}>تایتل اسلاید 1</span>
          </div>
        </div>
      ))}
    </div>
  );
}
