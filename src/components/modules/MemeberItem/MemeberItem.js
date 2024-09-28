"use client"
import React from 'react'
import styles from './Member.module.css'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { useLanguage } from '@/context/LangContext';


const convertToFarsiDigits = (number) => {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return number.toString().replace(/\d/g, (digit) => farsiDigits[digit]);
};


export default function MemeberItem({ member }) {

    const { language } = useLanguage()

    const phoneNumber = language === "fa" ? convertToFarsiDigits(member?.phone_number) : member?.phone_number;
    return (
        <div className={styles.member_item_wrapper}>
            <span className={`${styles.name} ${language === "fa" && styles.name_right}`}>{member?.name}</span>
            <div className={styles.profile_container}>
                <div className={styles.line}></div>
                <div className={styles.profile_pic}>
                    <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${member?.image}`} alt="Profile Picture" />
                </div>
                <div className={styles.line}></div>
            </div>
            <div className={styles.memeber_content}>
                <p className={styles.name_m}>{member?.name}</p>
                <p className={styles.memeber_text}>
                    {member?.text}
                </p>
                <div className={styles.memeber_contact_wrapper}>
                    <div className={styles.memeber_contact}>
                        <p className={styles.memeber_phone}>
                            <LocalPhoneOutlinedIcon className={styles.icon} />
                            <span className={styles.phone}>{phoneNumber}</span>
                        </p>
                        <p className={styles.memeber_media}>
                            <MailOutlineOutlinedIcon className={styles.icon} />
                            <span className={styles.email}>{member?.email}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
