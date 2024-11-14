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
import { getIPData } from '@/redux/getIp';

export default function AllArticles() {
    const { t } = useTranslation();
    const { language } = useLanguage();
    const dispatch = useDispatch();
    const { all_articles, most_liked_articles_english, most_liked_articles_farsi } = useSelector((state) => state.articles.data || {});
    const { category_farsi, category_english } = useSelector((state) => state.category.datac || {});
    const {loading, error } = useSelector((state) => state.articles);
    const {loadingc, errorc } = useSelector((state) => state.category);
    const { datap } = useSelector((state) => state.getIp)
    const [fliterArticlesLanguage, setFliterArticlesLanguage] = useState([]);
    const [filterArticles, setFilterArticles] = useState([]);
    const [activeCategory, setActiveCategory] = useState("all");
    const scrollDivRef = useRef(null);
    const [showAll, setShowAll] = useState(false);
    const scrollContentRef = useRef(null);


    const handleShowMoreClick = () => {
        setShowAll((prev) => !prev);
    }

    const fliterArticlesByLanguage = (lang) => {
        if (lang === "fa") {
            const articles = all_articles?.filter((article) => article.is_farsi === true);
            setFilterArticles(articles);
            setFliterArticlesLanguage(articles);
        } else {
            const articles = all_articles?.filter((article) => article.is_farsi === false);
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


  useEffect(() => {
    const handleScroll = (event) => {
        if (!scrollContentRef.current) return;

        const scrollContentTop = scrollContentRef.current.getBoundingClientRect().top;
        const scrollTop = scrollContentRef.current.scrollTop;
        const scrollHeight = scrollContentRef.current.scrollHeight;
        const clientHeight = scrollContentRef.current.clientHeight;
        const isScrollable = scrollHeight > clientHeight;

        if (scrollContentTop <= 90 && isScrollable) {
            const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
            if (atBottom && event.deltaY > 0) {
                document.body.style.overflow = 'auto';
            }
            else if (scrollTop === 0 && event.deltaY < 0) {
                document.body.style.overflow = 'auto';
            }
            else {
                document.body.style.overflow = 'hidden';

                const targetScrollTop = scrollTop + event.deltaY;
                // Directly set scrollTop without animation
                scrollContentRef.current.scrollTop = targetScrollTop;

                event.preventDefault();
            }
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('wheel', handleScroll);
    };
}, []);


    useEffect(() => {
        dispatch(getIPData())
    }, [])

    useEffect(() => {
        fliterArticlesByLanguage(language);
    }, [language, activeCategory, all_articles]);


    useEffect(() => {
        dispatch(getDataArticles(datap?.ip));
        dispatch(getCategoryData());
    }, [language, datap?.ip]);



    if (loading || loadingc) {
        return <Loading />;
    }

    if (error || errorc) {
        return <Error />;
    }

    return (
        <div ref={scrollDivRef}>
            <div className={styles.allarticle}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={9}>
                            <div
                                className={`${language === "en" ? styles.left_article : styles.left_article_right} ${styles.scroll_content}`}
                                ref={scrollContentRef}
                            >
                                {filterArticles?.length > 0 &&
                                    filterArticles.map((item) => <Article item={item} key={item.id} />)}
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <div className={styles.right_article}>
                                {(most_liked_articles_english?.length > 0 ||
                                    most_liked_articles_farsi?.length > 0) && (
                                        <div className={styles.trending}>
                                            <p className={styles.trendig_text}>{t("TrendingThisWeek")}</p>
                                            <div className={styles.trending_item_wrapper}>
                                                {(language === "fa"
                                                    ? (showAll ? most_liked_articles_farsi : most_liked_articles_farsi.slice(0, 3))
                                                    : (showAll ? most_liked_articles_english : most_liked_articles_english.slice(0, 3))
                                                ).map((trend) => (
                                                    <TrendingItem key={trend.id} trend={trend} />
                                                ))}

                                                {(most_liked_articles_english?.length > 3 ||
                                                    most_liked_articles_farsi?.length > 3) && (
                                                        <div className={styles.showmore_wrapper}>
                                                            <button className={styles.show_more_btn} onClick={handleShowMoreClick}>
                                                                {showAll ? t("ShowLess") : t("ShowMore")}
                                                            </button>
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    )}

                                {(category_farsi || category_english) && (
                                    <div className={styles.filtering}>
                                        <p className={styles.filter_title}>{t("YouMightLike")}</p>
                                        <div className={styles.filter_btns}>
                                            <button
                                                className={`${styles.btn_filter} ${activeCategory === "all" ? styles.active : ""}`}
                                                onClick={() => handleCategoryClick("all")}
                                            >
                                                {t("all")}
                                            </button>
                                            {(language === "fa" ? category_farsi : category_english)?.map((item) => (
                                                <button
                                                    key={item.id}
                                                    className={`${styles.btn_filter} ${activeCategory === item.name ? styles.active : ""}`}
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
        </div>
    );
}
