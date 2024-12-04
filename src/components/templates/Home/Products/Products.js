"use client";
import React from "react";
import styles from "./Products.module.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CodeIcon from "@mui/icons-material/Code";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import WallpaperOutlinedIcon from "@mui/icons-material/WallpaperOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
export default function Products() {
  const { t } = useTranslation();
  const homeData = useSelector((state) => state.home.data);

  const products = [
    {
      image: homeData?.image_two,
      title: homeData?.title_image_two,
      text: homeData?.text_image_two,
      icon: EventNoteOutlinedIcon,
    },
    {
      image: homeData?.image_three,
      title: homeData?.title_image_three,
      text: homeData?.text_image_three,
      icon: WallpaperOutlinedIcon,
    },
    {
      image: homeData?.image_four,
      title: homeData?.title_image_four,
      text: homeData?.text_image_four,
      icon: MonitorHeartOutlinedIcon,
    },
    {
      image: homeData?.image_five,
      title: homeData?.title_image_five,
      text: homeData?.text_image_five,
      icon: CodeIcon,
    },
  ];

  return (
    <div className={styles.services_container}>
      <span className={styles.title}>{t("nobinServices")}</span>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          {products.length > 0 &&
            products.map((item, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, lg: 3 }}>
                <ServiceItem
                  image={item.image}
                  title={item.title}
                  text={item.text}
                  icon={item.icon}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
}
