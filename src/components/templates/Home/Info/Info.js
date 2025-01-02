"use client";
import React from "react";
import styles from "./Info.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { useLanguage } from "@/context/LangContext";
import useWindowWidth from "@/hook/WindowWidth";

export default function Info({ infoData }) {
  const { language } = useLanguage();
  const width = useWindowWidth();
  if (width === undefined) {
    return null;
  }
  const {
    title_image_one,
    text_image_one,
    info_image_one,
    info_image_two,
    info_image_three,
    info_image_four,
  } = infoData;
  return (
    <div className={styles.Info_container}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <div
              className={`${styles.text_info_wrapper} ${
                language === "fa" && styles.text_info_right
              }`}
            >
              <p className={styles.ariis_text}>{title_image_one}</p>
              <p className={styles.text_info}>{text_image_one}</p>
            </div>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", justifyContent: "center" }}
            className={styles.wrap_nobin_images}
          >
            <div className={styles.images_wrapper}>
              {width <= 1023 ? (
                <>
                  <div className={`${styles.item_image}`}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${info_image_one}`}
                      alt="info image"
                      layout="fill"
                    />
                  </div>
                </>
              ) : (
                <>
                  {[
                    info_image_one,
                    info_image_two,
                    info_image_three,
                    info_image_four,
                  ].map((image, index) => (
                    <div
                      key={index}
                      className={`${styles.item_image} ${
                        styles[`item_image_${index + 1}`]
                      }`}
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${image}`}
                        alt="info image"
                        layout="fill"
                      />
                    </div>
                  ))}
                </>
              )}
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
