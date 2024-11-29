"use client";
import React from "react";
import styles from "./Products.module.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
export default function Products() {
  const { t } = useTranslation();
  const {
    service_title,
    image_two,
    title_image_two,
    text_image_two,
    image_three,
    title_image_three,
    text_image_three,
    image_four,
    title_image_four,
    text_image_four,
    image_five,
    title_image_five,
    text_image_five,
  } = useSelector((state) => ({
    service_title: state.home.data?.service_title,
    image_two: state.home.data?.image_two,
    title_image_two: state.home.data?.title_image_two,
    text_image_two: state.home.data?.text_image_two,
    image_three: state.home.data?.image_three,
    title_image_three: state.home.data?.title_image_three,
    text_image_three: state.home.data?.text_image_three,
    image_four: state.home.data?.image_four,
    title_image_four: state.home.data?.title_image_four,
    text_image_four: state.home.data?.text_image_four,
    image_five: state.home.data?.image_five,
    title_image_five: state.home.data?.title_image_five,
    text_image_five: state.home.data?.text_image_five,
  }));

  return (
    <div className={styles.services_container}>
      <span className={styles.title}>{t("nobinServices")}</span>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          {Array(4)
            .fill(0)
            .map((item, i) => (
              <Grid key={i} size={{ xs: 12, sm:6, md: 4 ,lg:3 }}>
                <ServiceItem />
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
}
