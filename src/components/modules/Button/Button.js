import React from 'react'
import styles from './Button.module.css'
import { useLanguage } from '@/context/LangContext'
export default function Button({ text, icon: Icon }) {
    const { language } = useLanguage()
    return (

        <button className={styles.btn}>
            {text}
            {Icon && <Icon className={`${styles.icon} ${language === "fa" && styles.rotate}`} />}
        </button>
    )
}
