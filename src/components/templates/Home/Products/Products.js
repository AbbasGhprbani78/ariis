"use client";
import React from "react";
import styles from "./Products.module.css";
import { useTranslation } from "react-i18next";
import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CodeIcon from "@mui/icons-material/Code";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import WallpaperOutlinedIcon from "@mui/icons-material/WallpaperOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
export default function Products({ productsData }) {
  const { t } = useTranslation();

  const products = [
    {
      image: productsData?.image_two,
      title: productsData?.title_image_two,
      text: productsData?.text_image_two,
      icon: EventNoteOutlinedIcon,
    },
    {
      image: productsData?.image_three,
      title: productsData?.title_image_three,
      text: productsData?.text_image_three,
      icon: WallpaperOutlinedIcon,
    },
    {
      image: productsData?.image_four,
      title: productsData?.title_image_four,
      text: productsData?.text_image_four,
      icon: MonitorHeartOutlinedIcon,
    },
    {
      image: productsData?.image_five,
      title: productsData?.title_image_five,
      text: productsData?.text_image_five,
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
