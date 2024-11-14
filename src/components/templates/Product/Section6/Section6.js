"use client"
import React from 'react'
import styles from './Section6.module.css'
import { useSelector } from 'react-redux'

export default function Section6() {

    const { image_three } = useSelector((state) => ({
        image_three: state.product.data?.image_three,
    }));

    return (
        <div className={styles.section6_wrapper}>
            {image_three && (
                <img
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${image_three}`}
                    alt="demo project"
                />
            )}
        </div>
    );
}
