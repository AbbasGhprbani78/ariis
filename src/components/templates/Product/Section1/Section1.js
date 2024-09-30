"use client"
import React from 'react'
import styles from './section1.module.css'
import Button from '@/components/modules/Button/Button'
import { useTranslation } from 'react-i18next'
import EastIcon from '@mui/icons-material/East';
import { useSelector } from 'react-redux'

export default function Section1() {

  const { t } = useTranslation()
  const { data, loading, error } = useSelector((state) => state.product);

  return (
    <div className={styles.section1_wrapper}>
      <div className={styles.logo_wrapper}>
        <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.logo}`} alt="logo" />
      </div>
      <h1 className={styles.product_title}>
        {data?.title && data?.title}
      </h1>
      <div className={styles.btn_wrapper}>
        <Button text={t("ViewMore")} icon={EastIcon} link={data?.link} />
      </div>
    </div>
  )
}
