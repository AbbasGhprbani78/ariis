"use client"
import React from 'react'
import styles from './Member.module.css'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { useLanguage } from '@/context/LangContext';
import { useTranslation } from 'react-i18next';

const convertToFarsiDigits = (number) => {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return number.toString().replace(/\d/g, (digit) => farsiDigits[digit]);
};


export default function MemeberItem({ img, text }) {

    const { language } = useLanguage()
    const { t } = useTranslation()

    const phoneNumber = language === "fa" ? convertToFarsiDigits("0916 295 7253") : "0916 295 7253";
    return (
        <div className={styles.member_item_wrapper}>
            <span className={`${styles.name} ${language === "fa" && styles.name_right}`}>{text}</span>
            <div className={styles.profile_container}>
                <div className={styles.line}></div>
                <div className={styles.profile_pic}>
                    <img src={img} alt="Profile Picture" />
                </div>
                <div className={styles.line}></div>
            </div>
            <div className={styles.memeber_content}>
                <p className={styles.name_m}>{text}</p>
                <p className={styles.memeber_text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className={styles.memeber_contact_wrapper}>
                    <div className={styles.memeber_contact}>
                        <p className={styles.memeber_phone}>
                            <LocalPhoneOutlinedIcon className={styles.icon} />
                            <span className={styles.phone}>{phoneNumber}</span>
                        </p>
                        <p className={styles.memeber_media}>
                            <MailOutlineOutlinedIcon className={styles.icon} />
                            <span className={styles.email}>arashkarimi11@gmail.com</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
