"use client"
import React from 'react'
import styles from './Section2.module.css'
import { useSelector } from 'react-redux'

export default function Section2() {
    const { data, loading, error } = useSelector((state) => state.product);
    return (
        <div className={styles.img_wrapper}>
            <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.image_one}`} alt="image_product" />
        </div>
    )
}
