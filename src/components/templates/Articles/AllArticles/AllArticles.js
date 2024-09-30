"use client"
import React, { useRef, useEffect, useState } from 'react';
import styles from './AllArticles.module.css';
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
import { useTranslation } from 'react-i18next';
import axios from 'axios';

export default function AllArticles() {
    const { t } = useTranslation();
    const { language } = useLanguage();
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.articles);
    const { datac, loadingc, errorc } = useSelector((state) => state.category);
    const [fliterArticlesLanguage, setFliterArticlesLanguage] = useState([]);
    const [filterArticles, setFilterArticles] = useState([]);
    const [activeCategory, setActiveCategory] = useState("all");
    const scrollDivRef = useRef(null);
    const [ip, setIp] = useState("");

    const fliterArticlesByLanguage = (lang) => {
        if (lang === "fa") {
            const articles = data?.all_articles?.filter((article) => article.is_farsi === true);
            setFilterArticles(articles);
            setFliterArticlesLanguage(articles);
        } else {
            const articles = data?.all_articles?.filter((article) => article.is_farsi === false);
            setFilterArticles(articles);
            setFliterArticlesLanguage(articles);
        }
    };

    const filterArticlesByCategory = (category) => {
        if (category === "all") {
            setFilterArticles(fliterArticlesLanguage);
        } else {
            const articles = [...fliterArticlesLanguage].filter(
                (item) => item.category_name === category || item.category_name_farsi === category
            );
            setFilterArticles(articles);
        }
    };

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        filterArticlesByCategory(category);
        if (scrollDivRef.current) {
            scrollDivRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start', 
            });
        }
    };


    useEffect(
        () => {
            const fetchIp = async () => {
                try {
                    const response = await axios.get("https://api.ipify.org?format=json");
                    setIp(response.data.ip);
                } catch (error) {
                    console.error("Error fetching the IP address:", error);
                }
            };

            fetchIp();
        }, [])


    useEffect(() => {
        fliterArticlesByLanguage(language);
    }, [language, data]);


    useEffect(() => {
        dispatch(getDataArticles(ip));
        dispatch(getCategoryData());
    }, [language, ip]);


   

    if (loading || loadingc) {
        return <Loading />;
    }

    if (error || errorc) {
        return <Error />;
    }

    return (
        <>
            <div ref={scrollDivRef} style={{ height: "1px" }}></div>
            <div className={styles.allarticle}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 12, lg: 9 }}>
                            <div className={`${styles.left_article} ${language === "fa" && styles.left_article_right}`}>
                                {filterArticles?.length > 0 &&
                                    filterArticles?.map((item) => <Article item={item} key={item.id} />)}
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, md: 12, lg: 3 }}>
                            <div className={styles.right_article}>
                                {(data?.most_liked_articles_english?.length > 0 ||
                                    data?.most_liked_articles_farsi?.length > 0) && (
                                        <div className={styles.trending}>
                                            <p className={styles.trendig_text}>{t("TrendingThisWeek")}</p>
                                            {language === "fa"
                                                ? data?.most_liked_articles_farsi?.map((trend) => (
                                                    <TrendingItem key={trend.id} trend={trend} />
                                                ))
                                                : data?.most_liked_articles_english?.map((trend) => (
                                                    <TrendingItem key={trend.id} trend={trend} />
                                                ))}
                                        </div>
                                    )}
                                {datac && (
                                    <div className={styles.filtering}>
                                        <p className={styles.filter_title}>{t("YouMightLike")}</p>
                                        <div className={styles.filter_btns}>
                                            <button
                                                className={`${styles.btn_filter} ${activeCategory === "all" ? styles.active : ""
                                                    }`}
                                                onClick={() => handleCategoryClick("all")}
                                            >
                                                {t("all")}
                                            </button>
                                            {language === "fa"
                                                ? datac?.category_farsi?.map((item) => (
                                                    <button
                                                        key={item.id}
                                                        className={`${styles.btn_filter} ${activeCategory === item.name ? styles.active : ""
                                                            }`}
                                                        onClick={() => handleCategoryClick(item.name)}
                                                    >
                                                        {item.name}
                                                    </button>
                                                ))
                                                : datac?.category_english?.map((item) => (
                                                    <button
                                                        key={item.id}
                                                        className={`${styles.btn_filter} ${activeCategory === item.name ? styles.active : ""
                                                            }`}
                                                        onClick={() => handleCategoryClick(item.name)}
                                                    >
                                                        {item.name}
                                                    </button>
                                                ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    );
}
