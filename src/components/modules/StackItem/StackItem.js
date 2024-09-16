
import React from 'react'
import styles from './Stackitem.module.css'

export default function StackItem({ text, img }) {
    return (
        <div className={styles.item_wrapper}>
            <div className={styles.img_wrapper}>
                <img src={img} alt="logo" />
            </div>
            <p className={styles.text_tech}>{text}</p>
        </div>
    )
}
