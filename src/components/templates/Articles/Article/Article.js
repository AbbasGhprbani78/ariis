"use client"
import React, { useEffect } from 'react'
import styles from './Article.module.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { useDispatch, useSelector } from 'react-redux';
import { useLanguage } from '@/context/LangContext';
import { getDataArticle } from '@/redux/article';
import Loading from '@/components/modules/Loading/Loading';
import Error from '@/components/modules/Error/Error';

export default function Article({ id }) {

    const dispatch = useDispatch()
    const { language } = useLanguage()
    const { data, loading, error } = useSelector((state) => state.article);

    useEffect(() => {
        dispatch(getDataArticle(id))
    }, [language])
    
    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    return (
        <div className={styles.article}>
            <div className={styles.topArticle}>
                <Box sx={{ flexGrow: 1 }} >
                    <Grid container spacing={0} >
                        <Grid size={{ xs: 12, md: 5 }} className={styles.left_main}>
                            <div className={styles.title}>{data?.title}</div>
                            <div className={styles.main_text}>
                                {
                                    language === "fa" ?
                                        data?.subject_farsi :
                                        data?.subject
                                }
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <img src={`${data?.image}`} alt="image_article" className={styles.img_mainarticle} />
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <div className={styles.article_content}>
                <div className={styles.text_content}>
                    {
                        language == "fa" ?
                            data?.text_farsi :
                            data?.text
                    }
                </div>
                <div className={styles.user_profile}>
                    <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.user?.avatar}`} alt="image_profile" className={styles.img_profile} />
                    <div className={styles.user_texts}>
                        <span className={styles.name}>{data?.user?.username}</span>
                        <span className={styles.date}>
                            {
                                language === "fa"
                                    ? new Date(data?.date).toLocaleDateString('fa-IR', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: '2-digit',
                                    })
                                    : new Date(data?.date).toLocaleDateString('en-GB', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: '2-digit',
                                    })
                            }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
