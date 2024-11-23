"use client"
import React from 'react'
import styles from './Coustomers.module.css'
import { useSelector } from 'react-redux';

export default function Coustomers() {
    const logo = useSelector((state) => state.home.data?.logo);

    return (
        <div className={`${styles.marquee} ${styles.marquee__8}`}>
            {logo && logo.length > 0 &&
                logo.map((item, i) => (
                    <div className={styles.marquee__item} key={i}>
                        <img
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${item}`}
                            alt="Customer logo"
                            style={{ width: "70px", height: "70px" }}
                        />
                    </div>
                ))
            }
        </div>
    );
}
