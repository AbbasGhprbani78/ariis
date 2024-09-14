import React from 'react';
import styles from './Button.module.css';
import { useLanguage } from '@/context/LangContext';

export default function Button({ text, icon: Icon, style }) {
    const { language } = useLanguage();

    return (
        <button className={`${styles.btn} ${styles[style]}`}>
            {text}
            {Icon && <Icon className={`${styles.icon} ${language === "fa" && styles.rotate}`} />}
        </button>
    );
}
