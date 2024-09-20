"use client"
import React, { useEffect } from 'react'
import styles from './ProductImageItem.module.css'
import Button from '@/components/modules/Button/Button';
import EastIcon from '@mui/icons-material/East';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LangContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function ProductImageItem({ img, style, children }) {

    const { t } = useTranslation()
    const { language } = useLanguage()
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className={styles.img_wrapper} data-aos="flip-left">
            <img src={img} alt="product" />
            {children}
            <div className={`${language === "fa" ? styles.btn1_wrapper_right : styles.btn1_wrapper}`}>
                <Button
                    text={t("ViewMore")}
                    icon={EastIcon}
                    style={style}
                />
            </div>
        </div>
    )
}
