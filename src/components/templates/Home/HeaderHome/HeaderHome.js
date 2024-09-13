"use client"
import React, { useEffect } from 'react'
import styles from './HeaderHome.module.css'
import { useTranslation } from 'react-i18next';

export default function HeaderHome() {

    const { t } = useTranslation()


    useEffect(() => {
        if (typeof window !== 'undefined' && window.visualViewport) {
            const updateVisualHeight = () => {
                document.documentElement.style.setProperty("--visual-height", `${window.visualViewport.height}px`);
            };

            updateVisualHeight();
            window.visualViewport.addEventListener('resize', updateVisualHeight);

            return () => window.visualViewport.removeEventListener('resize', updateVisualHeight);
        }
    }, []);

    return (
        <div className={styles.header_home}>
        </div>
    )
}
