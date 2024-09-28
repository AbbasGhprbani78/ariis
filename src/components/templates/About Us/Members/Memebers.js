"use client"
import React from 'react'
import styles from './Members.module.css'
import MemeberItem from '@/components/modules/MemeberItem/MemeberItem'
import { useSelector } from 'react-redux'
export default function Memebers() {

    const { data, loading, error } = useSelector((state) => state.aboutus);
    return (
        <div className={styles.member_wrapper}>
            {
                data &&
                data.employees.length > 0 &&
                data.employees.map((member, i) => (
                    <div className={styles.member_wrapper} key={i}>
                        <MemeberItem member={member} />
                    </div>
                ))
            }
        </div>
    )
}
