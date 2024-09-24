import React from 'react'
import styles from './Section5.module.css'
import FeatureItem from '@/components/modules/FeatureItem/FeatureItem'
export default function Section5({ ability, img, color }) {

  return (
    <div className={styles.section5_wrapper}>
      <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${img}`} alt="screen project" />
      <div className={styles.features_wrapper}>
        {
          ability &&
          ability.map((item, i) => (
            <FeatureItem item={item} key={i} color={color} />
          ))
        }
      </div>
    </div>
  )
}
