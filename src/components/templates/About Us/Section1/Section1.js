"use client"
import React, { useEffect } from 'react'
import styles from './Section1.module.css'
import { useTranslation } from 'react-i18next'
import AboutFeatureItem from '@/components/modules/AboutFeatureItem/AboutFeatureItem'

export default function Section1() {

    const { t } = useTranslation()
    const imgUrl1 = "/images/cup.png"
    const imgUrl2 = "/images/flash.png"
    const imgUrl3 = "/images/graph.png"
    const imgUrl4 = "/images/maximize.png"

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
        <div className={styles.section1_wrapper}>
            <div className={styles.aboutus_content}>
                <div className={styles.aboutus_top}>
                    <h1 className={styles.aboutus_title}>{t("AboutUs")}</h1>
                    <p className={styles.aboutus_text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div className={styles.aboutus_bottom}>
                    <AboutFeatureItem
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        img={imgUrl4}

                    />
                    <div className={styles.line}></div>
                    <AboutFeatureItem
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        img={imgUrl3}

                    />
                    <div className={styles.line}></div>

                    <AboutFeatureItem
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        img={imgUrl2}

                    />
                    <div className={styles.line}></div>
                    <AboutFeatureItem
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        img={imgUrl1}
                    />
                </div>
            </div>
        </div>
    )
}
