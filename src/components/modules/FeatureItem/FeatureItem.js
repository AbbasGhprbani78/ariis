import React from 'react'
import styles from './FeatureItem.module.css'
import DoneIcon from '@mui/icons-material/Done';
export default function FeatureItem() {
    return (
        <div className={styles.featureitem}>
            <div className={styles.icon_wrapper}>
                <DoneIcon className={styles.icon} />
            </div>
            <p className={styles.feature_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
    )
}
