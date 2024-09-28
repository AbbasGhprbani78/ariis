import React from 'react'
import styles from './SliderItem.module.css'
import { useLanguage } from '@/context/LangContext'
export default function SliderItem({ item }) {

    const { language } = useLanguage()
    return (
        <div className={`${styles.card} ${language === "fa" && styles.card_right}`}>
            <div className={styles.card_header}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`} alt="profile" className={styles.card_image} />
                <p className={`${styles.card_title} ${language === "fa" && styles.card_title_right}`}>{item?.name}</p>
            </div>
            <div className={styles.card_content}>
                <p className={styles.card_text}>
                    {item?.text}
                </p>
            </div>
        </div>
    )
}
