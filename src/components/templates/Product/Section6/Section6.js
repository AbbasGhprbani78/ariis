import React from 'react'
import styles from './Section6.module.css'

export default function Section6({ img }) {
    return (
        <div className={styles.section6_wrapper}>
            <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${img}`} alt="demo project" />
        </div>
    )
}
