"use client";
import React from "react";
import styles from "./OurTean.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { useTranslation } from "react-i18next";
import AddIcon from "@mui/icons-material/Add";
import PercentIcon from "@mui/icons-material/Percent";
import { useLanguage } from "@/context/LangContext";
import { convertToFarsiDigits } from "@/utils/ConvertNumberToFarsi";
import Loading from "@/components/modules/Loading/Loading";
import Error from "@/components/modules/Error/Error";

export default function OurTeam() {
  const { t } = useTranslation();
  const { language, ourTeamData, loading, error } = useLanguage();

  const {
    our_team_text,
    year_founded,
    experience,
    number_of_projects,
    satisfaction_level,
    number_of_cooperation_with_other_countries,
    point,
  } = ourTeamData;

  const [mainScore, totalScore] = point
    ? `${point}/10`.split("/")
    : ["0", "10"];

  if (loading) return <Loading />;

  if (error) return <Error />;

  return (
    <div className={styles.ourteam_wrapper}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 12, lg: 5, xl: 6 }}>
            <p className={styles.title_our}>{t("OurTeam")}</p>
            <p className={styles.text_Our}>{our_team_text}</p>
          </Grid>
          <Grid size={{ xs: 12, md: 12, lg: 7, xl: 6 }}>
            <div className={styles.about_feature}>
              <div className={`${styles.item_about} ${styles.item1}`}>
                <p className={styles.number_year}>
                  {language === "fa"
                    ? convertToFarsiDigits(year_founded)
                    : year_founded}
                </p>
                <span className={styles.text_year}>{t("YearFounded")}</span>
              </div>
              <div className={`${styles.item_about} ${styles.item2}`}>
                <div className={styles.year_founded}>
                  <span className={styles.year_founded_item}>
                    {t("Project")}
                  </span>
                  <div className={styles.wrap_number}>
                    <AddIcon className={styles.icon_number} />
                    <span className={styles.number}>
                      {language === "fa"
                        ? `${convertToFarsiDigits(number_of_projects)}`
                        : number_of_projects}
                    </span>
                  </div>
                </div>
              </div>
              <div className={`${styles.item_about} ${styles.item3}`}>
                <div className={styles.number2_wrapper}>
                  <PercentIcon className={styles.icon_number} />
                  <span className={styles.main_score}>
                    {language === "fa"
                      ? convertToFarsiDigits(satisfaction_level)
                      : satisfaction_level}
                  </span>
                </div>
                <span className={styles.text_item2}>{t("Satisfaction")}</span>
              </div>
              <div className={`${styles.item_about} ${styles.item4}`}>
                <img src="/images/team.png" alt="team" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
