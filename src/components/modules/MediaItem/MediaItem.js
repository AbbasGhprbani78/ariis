import React from 'react'
import styles from './MediaIte.module.css'
import Link from 'next/link'
import { useLanguage } from '@/context/LangContext'
export default function MediaItem({ icon: Icon, url_link }) {
    const { language } = useLanguage();

    return (
        <Link href={url_link} className={`${styles.mediaItem} ${language === "fa" && styles.rightmedia}`}>
            <Icon className={`${styles.icon}`} />
        </Link>
    )
}
