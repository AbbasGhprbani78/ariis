
import React from 'react'
import styles from './Stackitem.module.css'

export default function StackItem({ item }) {
    return (
        <div className={styles.item_wrapper}>
            <div className={styles.img_wrapper}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.logo}`} alt="logo" />
            </div>
            <p className={styles.text_tech}>{item?.technology}</p>
        </div>
    )
}
