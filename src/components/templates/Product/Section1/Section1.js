
import React from 'react'
import styles from './section1.module.css'
import Button from '@/components/modules/Button/Button'
import { useTranslation } from 'react-i18next'
import EastIcon from '@mui/icons-material/East';
export default function Section1() {

  const { t } = useTranslation()
  return (
    <div className={styles.section1_wrapper}>
      <div className={styles.logo_wrapper}>
        <img src="/images/logo/opermate.png" alt="logo" />
      </div>
      <h1 className={styles.product_title}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h1>
      <Button text={t("ViewMore")} icon={EastIcon} />
    </div>
  )
}
