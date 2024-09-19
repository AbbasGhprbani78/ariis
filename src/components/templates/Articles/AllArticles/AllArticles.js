"use client"
import React from 'react'
import styles from './AllArticles.module.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Article from '@/components/modules/Article/Article';
import TrendingItem from '@/components/modules/TrendigItem/TrendingItem';
import { useLanguage } from '@/context/LangContext';
export default function AllArticles() {

    const { language } = useLanguage()
    return (
        <div className={styles.allarticle}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <div className={`${styles.left_article} ${language === "fa" && styles.left_article_right}`}>
                            <Article />
                            <Article />
                            <Article />
                            <Article />
                            <Article />
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <div className={styles.right_article}>
                            <div className={styles.trending}>
                                <p className={styles.trendig_text}>Trending This Week</p>
                                <TrendingItem />
                                <TrendingItem />
                                <TrendingItem />
                            </div>
                            <div className={styles.filtering}>
                                <p className={styles.filter_title}>You Might Like</p>
                                <div className={styles.filter_btns}>
                                    <button className={styles.btn_filter}>Ai</button>
                                    <button className={styles.btn_filter}>Java Script</button>
                                    <button className={styles.btn_filter}>python</button>
                                    <button className={styles.btn_filter}>Ai</button>
                                    <button className={styles.btn_filter}>Java Script</button>
                                    <button className={styles.btn_filter}>python</button>
                                    <button className={styles.btn_filter}>Ai</button>
                                    <button className={styles.btn_filter}>Java Script</button>
                                    <button className={styles.btn_filter}>python</button>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
