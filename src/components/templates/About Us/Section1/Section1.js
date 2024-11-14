"use client"
import React from 'react'
import styles from './Section1.module.css'
import { useTranslation } from 'react-i18next'
import AboutFeatureItem from '@/components/modules/AboutFeatureItem/AboutFeatureItem'
import { useSelector } from 'react-redux'

export default function Section1() {

    const { t } = useTranslation()

    const { main_text,
        text_image_one,
        image_one,
        text_image_two,
        image_two,
        text_image_three,
        image_three,
        text_image_four,
        image_four } = useSelector((state) => state.aboutus?.data || {});

    return (
        <div className={styles.section1_wrapper}>
            <div className={styles.aboutus_content}>
                <div className={styles.aboutus_top}>
                    <h1 className={styles.aboutus_title}>{t("AboutUs")}</h1>
                    <p className={styles.aboutus_text}>
                        {main_text}
                    </p>
                </div>
                <div className={styles.aboutus_bottom}>
                    <AboutFeatureItem
                        text={text_image_one}
                        img={image_one}
                    />
                    <div className={styles.line}></div>
                    <AboutFeatureItem
                        text={text_image_two}
                        img={image_two}
                    />
                    <div className={styles.line}></div>
                    <AboutFeatureItem
                        text={text_image_three}
                        img={image_three}
                    />
                    <div className={styles.line}></div>
                    <AboutFeatureItem
                        text={text_image_four}
                        img={image_four}
                    />
                </div>
            </div>
        </div>
    )
}
