import React from 'react'
import styles from './RelatedArticle.module.css'
import Image from 'next/image'
import Grid from '@mui/material/Grid2';
import Link from 'next/link';
import { truncateText } from '@/utils/Maxtext';
import { useLanguage } from '@/context/LangContext';
import DOMPurify from 'dompurify'
export default function RelatedArticle({ item }) {
    const { language } = useLanguage()

    const url = item?.image ? item.image.slice(item.image.indexOf("/media")) : "";
    return (
        <Link href={""} className={styles.related_wrapper}>
            <Grid container spacing={1.3} >
                <Grid size={{ xs: 12, sm: 4, md: 3 }}>
                    <div className={styles.img_wrapper}>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${url}`}
                            layout="fill"
                            alt='article image'
                        >
                        </Image>
                    </div>
                </Grid>
                <Grid size={{ xs: 12, sm: 8, md: 9 }}>
                    <div className={styles.item_contnet}>
                        <div className={styles.item_top}>
                            <p className={styles.item_title}
                                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(language === "fa" ? item?.title_farsi : item?.title) }}>
                            </p>
                            <span className={styles.item_date}>
                                {
                                    language === "fa"
                                        ? new Date(item?.date).toLocaleDateString('fa-IR', {
                                            day: '2-digit',
                                            month: '2-digit',
                                            year: '2-digit',
                                        })
                                        : new Date(item?.date).toLocaleDateString('en-GB', {
                                            day: '2-digit',
                                            month: '2-digit',
                                            year: '2-digit',
                                        })
                                }
                            </span>
                        </div>
                        <p className={styles.item_text}
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(language === "fa" ? truncateText(item?.subject_farsi, 100) : truncateText(item?.subject, 100)) }}>
                        </p>
                    </div>
                </Grid>
            </Grid>
        </Link>
    )
}
