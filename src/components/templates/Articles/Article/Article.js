"use client"
import React, { useEffect, useRef} from 'react'
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
    const { data, loading, error } = useSelector((state) => state.article);
    const articleRef = useRef(null);
    const width = useWindowWidth();
    
    if (width === undefined) {
        return null;
    }

    useEffect(() => {

        if (width > 1200) { 
            const handleScroll = (event) => {
                if (leftMainRef.current) {
                    const scrollTop = leftMainRef.current.scrollTop;
                    const scrollHeight = leftMainRef.current.scrollHeight;
                    const clientHeight = leftMainRef.current.clientHeight;

                    leftMainRef.current.scrollTop += event.deltaY;

                    const targetScrollTop = leftMainRef.current.scrollTop + event.deltaY;
                    smoothScroll(targetScrollTop);

                    if (scrollHeight - scrollTop <= clientHeight) {
                        document.body.style.overflow = 'auto';
                    }
                    else if (scrollTop === 0) {
                        document.body.style.overflow = 'auto';
                    }
                    else {
                        document.body.style.overflow = 'hidden';
                    }
                }
            };

            const smoothScroll = (targetScrollTop) => {
                const currentScrollTop = leftMainRef.current.scrollTop;
                const distance = targetScrollTop - currentScrollTop;
                const duration = 200;
                const startTime = performance.now();

                const animate = (time) => {
                    const timeElapsed = time - startTime;
                    const progress = Math.min(timeElapsed / duration, 1);
                    leftMainRef.current.scrollTop = currentScrollTop + distance * progress;

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    }
                };
                requestAnimationFrame(animate);
            };

            document.body.style.overflow = 'hidden';
            window.addEventListener('wheel', handleScroll);

            return () => {
                document.body.style.overflow = 'auto';
                window.removeEventListener('wheel', handleScroll);
            };
        }
    }, [width]); 


    
    useEffect(() => {
        dispatch(getDataArticle(id));
    }, [id,dispatch]);



    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    const url = data?.image ? data.image.slice(data.image.indexOf("/media")) : "";

    return (
        <div className={styles.article} ref={articleRef}>
            <div className={styles.topArticle}>
                <Box sx={{ flexGrow: 1 }} >
                    <Grid container spacing={4} >
                        <Grid size={{ xs: 12,lg:7, xl: 8 }} className={styles.left_main} ref={leftMainRef}>
                            <div className={`${styles.imgcontainer} ${language === "en" ? styles.redius_left : styles.redius_right}`}>
                                {data?.image ? (
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${url}`}
                                        alt='article image'
                                        layout="fill"
                                    />
                                ) : (
                                    <p>No image available</p> 
                                )}
                            </div>
                            <div className={`${language === "en" ?
                                styles.content_article_left :
                                styles.content_article_right} `
                            }
                            >
                                <div className={styles.title} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data?.title) }}>
                                </div>
                                <div className={styles.main_text} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(language === "fa" ? data?.subject_farsi : data?.subject) }}>
                                </div>
                                <div className={styles.text_content} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(language == "fa" ? data?.text_farsi : data?.text) }}>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12,lg:5,xl: 4 }}
                            className={`${language === "en" ?
                                styles.related_articles_wrapper_left :
                                styles.related_articles_wrapper_right}`
                            }
                        >
                            <p className={styles.related_text}>
                                {t("RelatedArticles")}
                            </p>
                            <div className={`${language === "en" ? styles.related_articles_content : styles.related_articles_content}`}>
                                <RelatedArticle />
                                <RelatedArticle />
                                <RelatedArticle />
                                <RelatedArticle />
                                <RelatedArticle />
                            </div>
                        </Grid>
                    </Grid>
                </Box>
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

                <Grid size={{ xs: 12, lg: 5, xl: 4 }}
                    className={styles.related_article_bottom}
                >
                    <p className={styles.related_text}>
                        {t("RelatedArticles")}
                    </p>
                    <div className={`${language === "en" ? styles.related_articles_content : styles.related_articles_content}`}>
                        <RelatedArticle />
                        <RelatedArticle />
                        <RelatedArticle />
                        <RelatedArticle />
                        <RelatedArticle />
                    </div>
                </Grid>
            </div>
        </div>
    )
}








                    // useEffect(() => {
    //     document.body.style.overflow = 'hidden';

    //     const handleScroll = (event) => {

    //         if (leftMainRef.current) {
    //             leftMainRef.current.scrollTop += event.deltaY;
    //         }

    //         if (leftMainRef.current && leftMainRef.current.scrollHeight - leftMainRef.current.scrollTop <= leftMainRef.current.clientHeight) {
    //             document.body.style.overflow = 'auto';
    //         }

    //         if (leftMainRef.current && leftMainRef.current.scrollTop === 0) {
    //             document.body.style.overflow = 'hidden';
    //         }
    //     };

    //     window.addEventListener('wheel', handleScroll);

    //     return () => {
    //         document.body.style.overflow = 'auto';
    //         window.removeEventListener('wheel', handleScroll);
    //     };
    // }, []);

    // useEffect(() => {
    //     document.body.style.overflow = 'hidden';

    //     const handleScroll = (event) => {
    //         if (leftMainRef.current) {
    //             leftMainRef.current.scrollTop += event.deltaY;
    //         }

    //         if (leftMainRef.current && leftMainRef.current.scrollTop === 0) {
           
    //             document.body.style.overflow = 'auto';
    //         } else {
    //             document.body.style.overflow = 'hidden';
    //         }

    //         if (leftMainRef.current && leftMainRef.current.scrollHeight - leftMainRef.current.scrollTop <= leftMainRef.current.clientHeight) {
    //             document.body.style.overflow = 'auto';
    //         }
    //     };

    //     window.addEventListener('wheel', handleScroll);

    //     return () => {
    //         document.body.style.overflow = 'auto';
    //         window.removeEventListener('wheel', handleScroll);
    //     };
    // }, []);

