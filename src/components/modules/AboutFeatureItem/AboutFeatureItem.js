import React from 'react'
import styles from './AboutFeatureItem.module.css'
export default function AboutFeatureItem({ text, img }) {
    return (
        <div className={`${styles.item_wrapper}`}>
            <div className={styles.img_wrapper}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${img}`} alt="icon" />
            </div>
            <p className={styles.textfeature}>{text}</p>
        </div>
    )
}
