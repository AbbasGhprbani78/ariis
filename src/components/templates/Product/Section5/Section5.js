import React from 'react'
import styles from './Section5.module.css'
import FeatureItem from '@/components/modules/FeatureItem/FeatureItem'
export default function Section5() {
  return (
    <div className={styles.section5_wrapper}>
      <img src="/images/product/6.png" alt="screen project" />
      <div className={styles.features_wrapper}>
        <FeatureItem />
        <FeatureItem />
        <FeatureItem />
        <FeatureItem />
        <FeatureItem />
        <FeatureItem />
        <FeatureItem />
        <FeatureItem />
      </div>
    </div>
  )
}
