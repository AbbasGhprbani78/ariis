"use client"
import React from 'react'
import styles from './section1.module.css'
import Button from '@/components/modules/Button/Button'
import { useTranslation } from 'react-i18next'
import EastIcon from '@mui/icons-material/East';
import { useSelector } from 'react-redux'

export default function Section1() {
  const { t } = useTranslation();
  const { logo, title, link } = useSelector((state) => state?.product?.data || {});

  return (
    <div className={styles.section1_wrapper}>
      {logo && (
        <div className={styles.logo_wrapper}>
          <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${logo}`} alt="logo" />
        </div>
      )}
      {title && <h1 className={styles.product_title}>{title}</h1>}
      {link && (
        <div className={styles.btn_wrapper}>
          <Button text={t("ViewMore")} icon={EastIcon} link={link} />
        </div>
      )}
    </div>
  );
}
