"use client"
import React from 'react'
import styles from './Section2.module.css'
import { useSelector } from 'react-redux'

export default function Section2() {
    const { image_one } = useSelector((state) => state?.product?.data || {});

    return (
        <div className={styles.img_wrapper}>
            {image_one && (
                <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${image_one}`} alt="image_product" />
            )}
        </div>
    );
}
