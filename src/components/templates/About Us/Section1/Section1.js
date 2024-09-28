"use client"
import React, { useEffect } from 'react'
import styles from './Section1.module.css'
import { useTranslation } from 'react-i18next'
import AboutFeatureItem from '@/components/modules/AboutFeatureItem/AboutFeatureItem'
import { useSelector } from 'react-redux'

export default function Section1() {

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

    const { data, loading, error } = useSelector((state) => state.aboutus);


    return (
        <div className={styles.section1_wrapper}>
            <div className={styles.aboutus_content}>
                <div className={styles.aboutus_top}>
                    <h1 className={styles.aboutus_title}>{t("AboutUs")}</h1>
                    <p className={styles.aboutus_text}>
                        {data?.main_text}
                    </p>
                </div>
                <div className={styles.aboutus_bottom}>
                    <AboutFeatureItem
                        text={data?.text_image_one}
                        img={data?.image_one}

                    />
                    <div className={styles.line}></div>
                    <AboutFeatureItem
                        text={data?.text_image_two}
                        img={data?.image_two}

                    />
                    <div className={styles.line}></div>

                    <AboutFeatureItem
                        text={data?.text_image_three}
                        img={data?.image_three}

                    />
                    <div className={styles.line}></div>
                    <AboutFeatureItem
                        text={data?.text_image_four}
                        img={data?.image_four}
                    />
                </div>
            </div>
        </div>
    )
}
