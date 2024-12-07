import React from "react";
import styles from "./FeatureItem.module.css";
import DoneIcon from "@mui/icons-material/Done";
export default function FeatureItem({ item, color }) {
  return (
    <div className={styles.featureitem}>
      <div
        style={{ backgroundColor: color }}
        className={`${styles.icon_wrapper}`}
      >
        <DoneIcon className={styles.icon} />
      </div>
      <p className={styles.feature_text}>{item?.ability}</p>
    </div>
  );
}
