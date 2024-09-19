"use client"
import React from 'react'
import styles from './TrendingItem.module.css'
import { useLanguage } from '@/context/LangContext'
export default function TrendingItem() {

    const { language } = useLanguage()
    return (
        <div className={`${styles.trending_item} ${language == 'fa' && styles.trending_item_right}`}>
            <p className={styles.title_trending}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className={styles.user_info}>
                <div className={styles.user_left}>
                    <img src="/images/article/1.png" alt="image" />
                    <span className={styles.text}>Zahra Rezai</span>
                </div>
                <span className={styles.date}>01/02/24</span>
            </div>
        </div>
    )
}
