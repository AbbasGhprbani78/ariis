import React from 'react'
import styles from './SliderItem.module.css'
import { useLanguage } from '@/context/LangContext'
export default function SliderItem() {

    const { language } = useLanguage()
    return (
        <div className={`${styles.card} ${language === "fa" && styles.card_right}`}>
            <div className={styles.card_header}>
                <img src="/images/memebr4.png" alt="profile" className={styles.card_image} />
                <p className={`${styles.card_title} ${language === "fa" && styles.card_title_right}`}>manager of some company</p>
            </div>
            <div className={styles.card_content}>
                <p className={styles.card_text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                </p>
            </div>
        </div>
    )
}
