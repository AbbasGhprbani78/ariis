"use client"
import React from 'react'
import styles from './Section6.module.css'
import { useSelector } from 'react-redux'

export default function Section6() {
    const { data, loading, error } = useSelector((state) => state.product);
    return (
        <div className={styles.section6_wrapper}>
            <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.image_three}`} alt="demo project" />
        </div>
    )
}
