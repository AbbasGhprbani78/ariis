
import React from 'react'
import styles from './Section2.module.css'
export default function Section2({ img }) {
    return (
        <div className={styles.img_wrapper}>
            <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${img}`} alt="image_product" />
        </div>
    )
}
