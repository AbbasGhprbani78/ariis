import React from 'react'
import styles from './MediaIte.module.css'
import Link from 'next/link'
export default function MediaItem({ icon: Icon }) {
    return (
        <Link href={""} className={styles.mediaItem}>
            <Icon className={`${styles.icon}`} />
        </Link>
    )
}
