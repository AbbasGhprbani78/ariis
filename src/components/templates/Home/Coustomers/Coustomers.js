import React from 'react'
import styles from './Coustomers.module.css'
import CoustomerItem from '@/components/modules/CoustomerItem/CoustomerItem';
export default function Coustomers() {
    return (
        <div className={`${styles.marquee} ${styles.marquee__8}`}>
            {Array.from({ length: 10 }).map((_, i) => (
                <div className={styles.marquee__item}>
                    <CoustomerItem key={i} />
                </div>
            ))}
        </div>
    )
}
