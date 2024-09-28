"use client"
import React, { useEffect, useState } from 'react'
import styles from './AllArticles.module.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Article from '@/components/modules/Article/Article';
import TrendingItem from '@/components/modules/TrendigItem/TrendingItem';
import { useLanguage } from '@/context/LangContext';
import { useDispatch, useSelector } from 'react-redux';
import { getDataArticles } from '@/redux/articles';
import Loading from '@/components/modules/Loading/Loading';
import Error from '@/components/modules/Error/Error';
import { getCategoryData } from '@/redux/category';
export default function AllArticles() {

    const { language } = useLanguage()
    const dispatch = useDispatch()
    const { data, loading, error } = useSelector((state) => state.articles);
    const { datac, loadingc, errorc } = useSelector((state) => state.category);
    const [fliterArticlesLanguage, setFliterArticlesLanguage] = useState([])
    const [filterArticles, setFilterArticles] = useState([])

    const fliterArticlesByLanguage = (lang) => {
        if (lang === "fa") {
            const articles = data?.all_articles?.filter((article) => article.is_farsi === true)
            setFilterArticles(articles)
            setFliterArticlesLanguage(articles)
        } else {
            const articles = data?.all_articles?.filter((article) => article.is_farsi === false)
            setFilterArticles(articles)
            setFliterArticlesLanguage(articles)
        }
    }

    const filterArticlesByCategory = (category) => {
        if (category === "all") {
            setFilterArticles(fliterArticlesLanguage)
        } else {
            const articles = filterArticles.filter(item => item.category === category)
            setFilterArticles(articles)
        }
    }

    useEffect(() => {
        fliterArticlesByLanguage(language)
    }, [language, data])


    useEffect(() => {
        dispatch(getDataArticles())
        dispatch(getCategoryData())
    }, [language])



    if (loading || loadingc) {
        return <Loading />;
    }

    if (error || errorc) {
        return <Error />;
    }


    return (
        <div className={styles.allarticle}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <div className={`${styles.left_article} ${language === "fa" && styles.left_article_right}`}>
                            {
                                filterArticles?.length > 0 &&
                                filterArticles?.map((item) => (
                                    <Article item={item}
                                        key={item.id} />
                                ))
                            }
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <div className={styles.right_article}>

                            {
                                data?.most_liked_articles_english?.length > 0 ||
                                    data?.most_liked_articles_farsi?.length > 0 ?
                                    <div div className={styles.trending}>
                                        <p className={styles.trendig_text}>Trending This Week</p>
                                        {
                                            language === "fa" ?
                                                data?.most_liked_articles_farsi?.length > 0 &&
                                                data?.most_liked_articles_farsi?.map((trend) => (
                                                    <TrendingItem key={trend.id} trend={trend} />
                                                )) :

                                                data?.most_liked_articles_english?.length > 0 &&
                                                data?.most_liked_articles_english?.map((trend) => (
                                                    <TrendingItem key={trend.id} trend={trend} />
                                                ))
                                        }
                                    </div> :
                                    null
                            }

                            {
                                datac &&
                                <div className={styles.filtering}>
                                    <p className={styles.filter_title}>You Might Like</p>
                                    <div className={styles.filter_btns}>
                                        <button className={styles.btn_filter} onClick={""}>aLL</button>
                                        {
                                            language === "fa" ?
                                                datac?.category_farsi.length > 0 &&
                                                datac?.category_farsi.map((item) => (
                                                    <button key={item.id} className={styles.btn_filter} onClick={""}>{item.name}</button>
                                                )) :

                                                datac?.category_english.length > 0 &&
                                                datac?.category_english.map((item) => (
                                                    <button key={item.id} className={styles.btn_filter} onClick={""}>{item.name}</button>
                                                ))
                                        }
                                    </div>
                                </div>
                            }

                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div >
    )
}
