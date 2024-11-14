"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from './Article.module.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { useDispatch, useSelector } from 'react-redux';
import { useLanguage } from '@/context/LangContext';
import { getDataArticle } from '@/redux/article';
import Loading from '@/components/modules/Loading/Loading';
import Error from '@/components/modules/Error/Error';
import DOMPurify from 'dompurify'
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import RelatedArticle from '@/components/modules/RelatedArticle/RelatedArticle';
import useWindowWidth from '@/hook/WindowWidth';

export default function Article({ id }) {
    const leftMainRef = useRef(null);
    const dispatch = useDispatch()
    const { language } = useLanguage()
    const { t } = useTranslation()


    const { image,
        title,
        subject_farsi,
        subject,
        text_farsi,
        text,
        related_articles,
        user,
        date,
        loading,
        error } = useSelector((state) => state.article.data || {});

    const articleRef = useRef(null);
    const width = useWindowWidth();
    const [isSticky, setIsSticky] = useState(false);
    const [endcontent, setEndContent] = useState(false);

    if (width === undefined) {
        return null;
    }

    useEffect(() => {
        dispatch(getDataArticle(id));
    }, [id, dispatch]);

    useEffect(() => {
        if (width >= 1200) {
            const handleScroll = () => {
                const leftMainHeight = leftMainRef.current?.offsetHeight || 0;
                if (window.scrollY === 0) {
                    setEndContent(false);
                    setIsSticky(false);
                } else if (window.scrollY > leftMainHeight - 600) {
                    setIsSticky(false);
                    setEndContent(true);
                } else {
                    setIsSticky(true);
                    setEndContent(false);
                }
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [width]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    const url = image ? image.slice(image.indexOf("/media")) : "";

    return (
        <div className={styles.article} ref={articleRef}>
            <div className={styles.topArticle}>
                <Box sx={{ flexGrow: 1 }} >
                    <Grid container spacing={4} className={`${isSticky && styles.wrap_top_mainarticle}`}>
                        <Grid size={{ xs: 12, lg: 7, xl: 8 }} className={styles.left_main} ref={leftMainRef}>
                            <div className={`${styles.imgcontainer} ${language === "en" ? styles.redius_left : styles.redius_right}`}>
                                {image ? (
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${url}`}
                                        alt='article image'
                                        layout="fill"
                                    />
                                ) : (
                                    <p>No image available</p>
                                )}
                            </div>
                            <div className={`${language === "en" ? styles.content_article_left : styles.content_article_right}`}>
                                <div className={styles.title} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }} />
                                <div className={styles.main_text} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(language === "fa" ? subject_farsi : subject) }} />
                                <div className={styles.text_content} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(language == "fa" ? text_farsi : text) }} />
                            </div>
                        </Grid>
                        <Grid
                            size={{ xs: 12, lg: 5, xl: 4 }}
                            className={`${language === "en" ? styles.related_articles_wrapper_left : styles.related_articles_wrapper_right} 
                            ${language === "en" ? isSticky && styles.fixed_left : isSticky && styles.fixed_right}
                            ${endcontent && styles.end}
                            `}
                        >
                            <p className={styles.related_text}>
                                {t("RelatedArticles")}
                            </p>
                            <div className={`${language === "en" ? styles.related_articles_content : styles.related_articles_content}`}>
                                {
                                    related_articles &&
                                    related_articles.slice(0, 5).map(item => (
                                        <RelatedArticle key={item.id} item={item} />
                                    ))
                                }
                            </div>
                        </Grid>
                    </Grid>
                </Box>
                <div className={styles.user_profile}>
                    <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${user?.avatar}`} alt="image_profile" className={styles.img_profile} />
                    <div className={styles.user_texts}>
                        <span className={styles.name}>{user?.username}</span>
                        <span className={styles.date}>
                            {
                                language === "fa"
                                    ? new Date(date).toLocaleDateString('fa-IR', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: '2-digit',
                                    })
                                    : new Date(date).toLocaleDateString('en-GB', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: '2-digit',
                                    })
                            }
                        </span>
                    </div>
                </div>
            </div>
            <Grid size={{ xs: 12, lg: 5, xl: 4 }}
                className={styles.related_article_bottom}
            >
                <p className={styles.related_text}>
                    {t("RelatedArticles")}
                </p>
                <div className={`${language === "en" ? styles.related_articles_content : styles.related_articles_content}`}>
                    {
                        related_articles &&
                        related_articles.slice(0, 5).map(item => (
                            <RelatedArticle key={item.id} item={item} />
                        ))
                    }
                </div>
            </Grid>
        </div>
    );
}
