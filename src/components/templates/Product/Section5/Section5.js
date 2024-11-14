"use client"
import React from 'react'
import styles from './Section5.module.css'
import FeatureItem from '@/components/modules/FeatureItem/FeatureItem'
import { useSelector } from 'react-redux'

export default function Section5() {

  const { image_two, ability, color_ability } = useSelector((state) => ({
    image_two: state.product.data?.image_two,
    ability: state.product.data?.ability,
    color_ability: state.product.data?.color_ability,
  }));

  return (
    <div className={styles.section5_wrapper}>
      {image_two && (
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${image_two}`}
          alt="screen project"
        />
      )}
      <div className={styles.features_wrapper}>
        {ability &&
          ability.map((item, i) => (
            <FeatureItem item={item} key={i} color={color_ability} />
          ))}
      </div>
    </div>
  );
}
