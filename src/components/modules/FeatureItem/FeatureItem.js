import React from 'react'
import styles from './FeatureItem.module.css'
import DoneIcon from '@mui/icons-material/Done';
export default function FeatureItem({ item, color }) {
    return (
        <div className={styles.featureitem}>
            <div className={`${styles.icon_wrapper} ${color == "red" ? styles.red_icon :
                color === 'blue' ? styles.blue_icon :
                    color === "green" ? styles.green_icon :
                        color === "orange" ? styles.orange_icon : ""
                }`}>
                <DoneIcon className={styles.icon} />
            </div>
            <p className={styles.feature_text}>
                {item?.ability}
            </p>
        </div>
    )
}
