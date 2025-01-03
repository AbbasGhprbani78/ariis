"use client"
import React from 'react'
import styles from './TrendingItem.module.css'
import { useLanguage } from '@/context/LangContext'
import Link from 'next/link'
export default function TrendingItem({ trend }) {
    const { language } = useLanguage()


    return (
        <div className={`${styles.trending_item} ${language == 'fa' && styles.trending_item_right}`}>
            <Link className={styles.trend_item} href={`/articles/${trend?.id}`}>
                <div className={styles.link_article}>
                    <p className={styles.title_trending} >
                        {
                            language === "en" ? trend?.title :
                                trend?.title_farsi
                        }
                    </p>
                </div>
                <div className={styles.user_info}>
                    <div className={styles.user_left}>
                        <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${trend?.user?.avatar}`} alt="image" />
                        <span className={styles.text}>{trend?.user?.username}</span>
                    </div>
                    <span className={styles.date}>
                        {
                            language === "fa"
                                ? new Date(trend?.date).toLocaleDateString('fa-IR', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: '2-digit',
                                })
                                : new Date(trend?.date).toLocaleDateString('en-GB', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: '2-digit',
                                })
                        }
                    </span>
                </div>
            </Link>

        </div>
    )
}
