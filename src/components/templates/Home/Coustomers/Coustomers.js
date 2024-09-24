import React from 'react'
import styles from './Coustomers.module.css'
import CoustomerItem from '@/components/modules/CoustomerItem/CoustomerItem';
import {useSelector } from 'react-redux';
export default function Coustomers() {


    const { data, loading, error } = useSelector((state) => state.home);
    return (
        <div className={`${styles.marquee} ${styles.marquee__8}`}>
            {
                data?.logo.length > 0 &&
                data.logo.map((item, i) => (
                    <div className={styles.marquee__item} key={i}>
                        <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${item}`} alt="" style={{ width: "50px", height: "50px" }} />
                    </div>
                ))
            }
        </div>
    )
}
