"use client"
import React, { useEffect } from 'react'
import styles from './HeaderHome.module.css'
import { useTranslation } from 'react-i18next';
import Button from '@/components/modules/Button/Button';
import EastIcon from '@mui/icons-material/East';
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
            <div className={styles.texts_header_home}>
                <h1 className={styles.explore}>Explore</h1>
                <p className={styles.future}>FUTURE</p>
                <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className={styles.btn_wrapper}>
                    <Button text={t("Try Now")} icon={EastIcon} />
                </div>
            </div>
        </div>
    )
}
