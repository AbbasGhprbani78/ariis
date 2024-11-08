import React from 'react'
import styles from './RelatedArticle.module.css'
import Image from 'next/image'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Link from 'next/link';
import { truncateText } from '@/utils/Maxtext';
export default function RelatedArticle() {
    return (
        <Link href={""} className={styles.related_wrapper}>
            <Grid container spacing={1.3} >
                <Grid size={{ xs: 12, sm: 4, md: 3 }}>
                    <div className={styles.img_wrapper}>
                        <Image
                            src={"/images/2.png"}
                            layout="fill"
                            alt='article image'
                        >
                        </Image>
                    </div>
                </Grid>
                <Grid size={{ xs: 12, sm: 8, md: 9 }}>
                    <div className={styles.item_contnet}>
                        <div className={styles.item_top}>
                            <p className={styles.item_title}>لورم ایپسوم متن ساختگی</p>
                            <span className={styles.item_date}>
                                01/02/24
                            </span>
                        </div>
                        <p className={styles.item_text}>
                            {truncateText("لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.", 200)}
                        </p>
                    </div>
                </Grid>
            </Grid>
        </Link>
    )
}
