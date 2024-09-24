"use client"
import React from 'react'
import styles from './Section5.module.css'
import FeatureItem from '@/components/modules/FeatureItem/FeatureItem'
import { useSelector } from 'react-redux'

export default function Section5() {

  const { data, loading, error } = useSelector((state) => state.product);
  return (
    <div className={styles.section5_wrapper}>
      <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.image_two}`} alt="screen project" />
      <div className={styles.features_wrapper}>
        {
          data?.ability &&
          data?.ability.map((item, i) => (
            <FeatureItem item={item} key={i} color={data?.color_ability} />
          ))
        }
      </div>
    </div>
  )
}
