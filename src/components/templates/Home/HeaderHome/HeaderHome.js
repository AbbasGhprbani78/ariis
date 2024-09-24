"use client"
import React, { useEffect } from 'react'
import styles from './HeaderHome.module.css'
import { useTranslation } from 'react-i18next';
import Button from '@/components/modules/Button/Button';
import EastIcon from '@mui/icons-material/East';
import { useLanguage } from '@/context/LangContext';
import useWindowWidth from '@/hook/WindowWidth';
import {useSelector } from 'react-redux';

export default function HeaderHome() {

    const { t } = useTranslation()
    const { language } = useLanguage()
    const width = useWindowWidth();
    if (width === undefined) {
        return null;
    }

    const { data, loading, error } = useSelector((state) => state.home);

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
        <>
            {
                width < 760 ?
                    <>
                        <div className={`${styles.header_home} ${language === "fa" && styles.header_home_right}`}></div>
                        <div className={styles.header_text_wrraper_m}>
                            <h1 className={styles.explore}>Explore</h1>
                            <p className={styles.future}>FUTURE</p>
                            <p className={styles.text}>
                                {data?.header_text}
                            </p>
                            <div className={`${styles.btn_wrapper} ${language === "fa" && styles.btn_wrapper_right}`}>
                                <Button text={t("TryNow")} icon={EastIcon} />
                            </div>
                        </div>

                    </> :

                    <div className={`${styles.header_home} ${language === "fa" && styles.header_home_right}`}>
                        <div className={`${styles.texts_header_home_wrappper} ${language === "fa" && styles.texts_header_home_wrappper_right}`}>
                            <div className={`${styles.texts_header_home} ${language === "fa" && styles.texts_header_home_right}`}>
                                <h1 className={styles.explore}>Explore</h1>
                                <p className={styles.future}>FUTURE</p>
                                <p className={styles.text}>
                                    {data?.header_text}
                                    <div className={`${styles.btn_wrapper} ${language === "fa" && styles.btn_wrapper_right}`}>
                                        <button className={`${styles.btn_sec1} ${language === "fa" && styles.btn_right}`}>
                                            {t("TryNow")}
                                            <EastIcon className={`${styles.icon_east} ${language == "fa" && styles.east_right}`} />
                                        </button>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
            }

        </>
    )
}
