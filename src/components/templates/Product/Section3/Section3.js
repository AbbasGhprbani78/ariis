"use client";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { useTranslation } from "react-i18next";
import StackItem from "@/components/modules/StackItem/StackItem";
import styles from "./Section3.module.css";

export default function Section3({ about, technology }) {
  const { t } = useTranslation();

  return (
    <div className={styles.section3_wrapper}>
      <p className={styles.title}>{t("AboutProduct")}</p>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 12, md: 7, lg: 8 }}>
            <p className={styles.about_des}>{about}</p>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 5, lg: 4 }}>
            <span className={styles.techstack}>{t("TechStack")} :</span>
            <div className={styles.stack_wrapper}>
              {technology &&
                technology.map((item, i) => <StackItem key={i} item={item} />)}
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
