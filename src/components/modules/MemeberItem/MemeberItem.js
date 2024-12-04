"use client";
import React from "react";
import styles from "./Member.module.css";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { useLanguage } from "@/context/LangContext";
import { convertToFarsiDigits } from "@/utils/ConvertNumberToFarsi";

export default function MemeberItem({ member }) {
  const { language } = useLanguage();
  // console.log(member.phone_number);
  return (
    <div className={styles.member_item_wrapper}>
      <span
        className={`${styles.name} ${language === "fa" && styles.name_right}`}
      >
        {language === "en" ? member?.name : member?.name_fasi}
      </span>
      <div className={styles.profile_container}>
        <div className={styles.line}></div>
        <div className={styles.profile_pic}>
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${member?.image}`}
            alt="Profile Picture"
          />
        </div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.memeber_content}>
        <p className={styles.name_m}>
          {language === "en" ? member?.name : member?.name_fasi}
        </p>
        <p className={styles.memeber_text}>{member?.text}</p>
        <div className={styles.memeber_contact_wrapper}>
          <div className={styles.memeber_contact}>
            <p className={styles.memeber_phone}>
              <LocalPhoneOutlinedIcon className={styles.icon} />
              <span className={styles.phone}>
                {language === "en"
                  ? member.phone_number
                  : convertToFarsiDigits(member?.phone_number)}
              </span>
            </p>
            <p className={styles.memeber_media}>
              <MailOutlineOutlinedIcon className={styles.icon} />
              <span className={styles.email}>{member?.email}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
