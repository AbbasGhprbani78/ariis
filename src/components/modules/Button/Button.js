import React from 'react';
import styles from './Button.module.css';
import { useLanguage } from '@/context/LangContext';
import Link from 'next/link';

export default function Button({ text, icon: Icon, style, link }) {
    const { language } = useLanguage();

    return (
        <Link href={`${link}`} className={`${styles.btn} ${styles[style]} ${language === "fa" && styles.rightdir}`}>
            {text}
            {Icon && <Icon className={`${styles.icon} ${language === "fa" && styles.rotate}`} />}
        </Link>
    );
}
