"use client"
import React from 'react'
import styles from './Members.module.css'
import MemeberItem from '@/components/modules/MemeberItem/MemeberItem'
import { useSelector } from 'react-redux'

export default function Memebers() {
    const employees = useSelector((state) => state.aboutus.data?.employees);


    return (
        <div className={styles.member_wrapper}>
            {
                employees && employees.length > 0 && employees.map((member, i) => (
                    <div className={styles.member_wrapper} key={i}>
                        <MemeberItem member={member} />
                    </div>
                ))
            }
        </div>
    )
}
