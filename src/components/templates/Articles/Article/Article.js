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
    const { data, loading, error } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(getDataArticle(id))
    }, [language])


    console.log(data)


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
                            <h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                            <p className={styles.main_text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.
                            </p>
                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <img src="/images/article/9.png" alt="image_article" className={styles.img_mainarticle} />
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <div className={styles.article_content}>
                <p className={styles.text_content}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className={styles.user_profile}>
                    <img src="/images/article/1.png" alt="image_profile" className={styles.img_profile} />
                    <div className={styles.user_texts}>
                        <span className={styles.name}>Zahra Rezai</span>
                        <span className={styles.date}>01/02/24</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
