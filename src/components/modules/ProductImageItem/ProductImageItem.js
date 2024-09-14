"use client"
import React from 'react'
import styles from './ProductImageItem.module.css'
import Button from '@/components/modules/Button/Button';
import EastIcon from '@mui/icons-material/East';
import { useTranslation } from 'react-i18next';
export default function ProductImageItem({ img, style, children }) {

    const { t } = useTranslation()
    return (
        <div className={styles.img_wrapper}>
            <img src={img} alt="product" />
            {children}
            <div className={styles.btn1_wrapper}>
                <Button
                    text={t("View More")}
                    icon={EastIcon}
                    style={style}
                />
            </div>
        </div>
    )
}
