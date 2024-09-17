import React from 'react'
import styles from './Members.module.css'
import MemeberItem from '@/components/modules/MemeberItem/MemeberItem'
export default function Memebers() {

    const imgUrl1 = "/images/member1.png"
    const imgUrl2 = "/images/member2.png"
    const imgUrl3 = "/images/member3.png"
    return (
        <div className={styles.member_wrapper}>
            <div className={styles.member_wrapper}>
                <MemeberItem img={imgUrl1} text={"Arash Karimi"} />
            </div>
            <div className={styles.member_wrapper}>
                <MemeberItem img={imgUrl2} text={"Sepehr Enshaei"} />
            </div>
            <div className={styles.member_wrapper}>
                <MemeberItem img={imgUrl3} text={"Saman Safarinasab"} />
            </div>
        </div>

    )
}
