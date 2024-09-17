import React from 'react'
import styles from './SliderItem.module.css'
export default function SliderItem() {
    return (
        <div className={styles.card}>
            <div className={styles.card_header}>
                <img src="/images/memebr4.png" alt="profile" className={styles.card_image} />
                <p className={styles.card_title}>manager of some company</p>
            </div>
            <div className={styles.card_content}>
                <p className={styles.card_text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                </p>
            </div>
        </div>
    )
}
