"use client"
import React, { useEffect, useState } from 'react'
import styles from './TopArticle.module.css'
import { useLanguage } from '@/context/LangContext'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import DOMPurify from 'dompurify'
export default function TopArticle() {

    const { language } = useLanguage()
    const { data, loading, error } = useSelector((state) => state.articles);
    const [filterArticles, setFilterArticles] = useState([])

    const fliterArticlesByLanguage = (lang) => {
        if (lang === "fa") {
            const articles = data?.all_articles?.filter((article) => article.is_farsi === true)
            setFilterArticles(articles)
        } else {
            const articles = data?.all_articles?.filter((article) => article.is_farsi === false)
            setFilterArticles(articles)
        }
    }

    const convertToFarsiNumber = (num) => {
        const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return num.toString().split('').map(x => farsiDigits[x]).join('');
    };


    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };

    useEffect(() => {
        fliterArticlesByLanguage(language)
    }, [language, data])




    return (

        <>
            {
                filterArticles?.length > 3 ?
                    <>
                        <div className={styles.container}>
                            <div className={styles.toparticles}>
                                <div className={`${styles.item} ${styles.item_1}`}>
                                    <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${filterArticles[0].image}`} alt="image_article" />
                                    <div className={styles.firstarticle_content}>
                                        <div className={styles.user_info}>
                                            <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${filterArticles[0]?.user?.avatar}`} alt="image_profile" />
                                            <div className={`${styles.user_texts} ${styles.f_article}`}>
                                                <span className={styles.user_name}>{filterArticles[0]?.user?.username}</span>
                                                <span className={styles.date}>{
                                                    language === "fa"
                                                        ? new Date(filterArticles[0]?.date).toLocaleDateString('fa-IR', {
                                                            day: '2-digit',
                                                            month: '2-digit',
                                                            year: '2-digit',
                                                        })
                                                        : new Date(filterArticles[0]?.date).toLocaleDateString('en-GB', {
                                                            day: '2-digit',
                                                            month: '2-digit',
                                                            year: '2-digit',
                                                        })
                                                }
                                                </span>
                                            </div>
                                        </div>
                                        <Link href={`/articles/${filterArticles[0].id}`} className={styles.texts_first_article}>
                                            <div className={styles.first_article_title} dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(language === "fa" ?
                                                    `${filterArticles[0]?.title_farsi}` :
                                                    `${filterArticles[0]?.title}`
                                                ) }}>
                                            </div>
                                            <div className={styles.first_article_text} dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(language === "fa" ?
                                                    truncateText(filterArticles[0]?.text_farsi, 150) :
                                                    truncateText(filterArticles[0]?.text, 150)) }}>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className={`${styles.item} ${styles.item_2}`}>
                                    <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${filterArticles[1].image}`} alt="image_article" />
                                    <div className={styles.user_info}>
                                        <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${filterArticles[1]?.user?.avatar}`} alt="image_profile" />
                                        <div className={styles.user_texts}>
                                            <span className={styles.user_name}>{filterArticles[1]?.user?.username}</span>
                                            <span className={styles.date}>{
                                                language === "fa"
                                                    ? new Date(filterArticles[1]?.date).toLocaleDateString('fa-IR', {
                                                        day: '2-digit',
                                                        month: '2-digit',
                                                        year: '2-digit',
                                                    })
                                                    : new Date(filterArticles[1]?.date).toLocaleDateString('en-GB', {
                                                        day: '2-digit',
                                                        month: '2-digit',
                                                        year: '2-digit',
                                                    })
                                            }</span>
                                        </div>
                                    </div>
                                    <Link href={`/articles/${filterArticles[1].id}`} className={styles.texts_wrapper}>
                                        <div className={styles.user_title} dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(
                                                language === "fa" ?
                                                    `${filterArticles[1]?.title_farsi}` :
                                                    `${filterArticles[1]?.title}`) }}>
                                        </div>
                                        <div className={styles.user_text} dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(language === "fa" ?
                                                truncateText(filterArticles[1].text_farsi, 150) :
                                                truncateText(filterArticles[1].text, 150)) }}>
                                        </div>
                                    </Link>
                                </div>
                                <div className={`${styles.item} ${styles.item_3}`}>
                                    <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${filterArticles[2].image}`} alt="image_article" />
                                    <div className={styles.user_info}>
                                        <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${filterArticles[2]?.user?.avatar}`} alt="image_profile" />
                                        <div className={styles.user_texts}>
                                            <span className={styles.user_name}>{filterArticles[2]?.user?.username}</span>
                                            <span className={styles.date}>{
                                                language === "fa"
                                                    ? new Date(filterArticles[2]?.date).toLocaleDateString('fa-IR', {
                                                        day: '2-digit',
                                                        month: '2-digit',
                                                        year: '2-digit',
                                                    })
                                                    : new Date(filterArticles[2]?.date).toLocaleDateString('en-GB', {
                                                        day: '2-digit',
                                                        month: '2-digit',
                                                        year: '2-digit',
                                                    })
                                            }</span>
                                        </div>
                                    </div>
                                    <Link href={`/articles/${filterArticles[2].id}`} className={styles.texts_wrapper}>
                                        <div className={styles.user_title} dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(language === "fa" ?
                                                `${filterArticles[2]?.title_farsi}` :
                                                `${filterArticles[2]?.title}`) }}>
                                        </div>
                                        <div className={styles.user_text} dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(language === "fa" ?
                                                truncateText(filterArticles[2].text_farsi, 150) :
                                                truncateText(filterArticles[2].text, 150)) }}>
                                        </div>
                                    </Link>
                                </div>
                                <div className={`${styles.item} ${styles.item_4}`}>
                                    {
                                        language === "fa" &&
                                            data?.five_most_recent_articles_farsi.length ?
                                            <>
                                                <p className={styles.top_text}>{convertToFarsiNumber(data.five_most_recent_articles_farsi.length)} مقاله برتر</p>
                                                <div className={styles.image_container}>
                                                    {
                                                        data.five_most_recent_articles_farsi.map((item) => (
                                                            <Link className={styles.link_article_right} href={`/articles/${item.id}`}>
                                                                <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${item.image}`}
                                                                    className={`${styles.circle1} ${language == "fa" ? styles.circle_right : styles.circle}`} alt="Image 1" />
                                                            </Link>
                                                        ))
                                                    }

                                                </div>
                                            </> :
                                            data?.five_most_recent_articles_english.length ?
                                                <>
                                                    <p className={styles.top_text}>{`Top ${data?.five_most_recent_articles_english.length} Articles`}</p>
                                                    <div className={styles.image_container}>
                                                        {
                                                            data.five_most_recent_articles_english.map((item) => (
                                                                <Link className={styles.link_article} href={`/articles/${item.id}`}>
                                                                    <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${item.image}`}
                                                                        className={`${styles.circle1} ${language == "fa" ? styles.circle_right : styles.circle}`} alt="Image 1" />
                                                                </Link>
                                                            ))
                                                        }
                                                    </div>
                                                </> : null
                                    }
                                </div>
                            </div>

                            <div className={styles.toparticles_m}>
                                <div className={`${styles.item} ${styles.item_1}`}>
                                    <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${filterArticles[0].image}`} alt="image_article" />
                                    <div className={styles.firstarticle_content}>
                                        <Link href={`/articles/${filterArticles[0].id}`} className={styles.texts_first_article}>
                                            <div className={styles.first_article_title} dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(language === "fa" ?
                                                    `${filterArticles[0]?.title_farsi}` :
                                                    `${filterArticles[0]?.title}`)}}>
                                            </div>
                                            <div className={styles.first_article_text} dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(language === "fa" ?
                                                    truncateText(filterArticles[0]?.text_farsi, 150) :
                                                    truncateText(filterArticles[0]?.text, 150)) }}>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className={styles.user_info}>
                                    <div className={styles.user_left}>
                                        <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${filterArticles[0]?.user?.avatar}`} alt="image" />
                                        <span className={styles.text}>
                                            {filterArticles[0]?.user?.username}
                                        </span>
                                    </div>
                                    <span className={styles.date}>
                                        {
                                            language === "fa"
                                                ? new Date(filterArticles[0]?.date).toLocaleDateString('fa-IR', {
                                                    day: '2-digit',
                                                    month: '2-digit',
                                                    year: '2-digit',
                                                })
                                                : new Date(filterArticles[0]?.date).toLocaleDateString('en-GB', {
                                                    day: '2-digit',
                                                    month: '2-digit',
                                                    year: '2-digit',
                                                })
                                        }

                                    </span>
                                </div>

                                <div className={`${styles.item} ${styles.item_1}`}>
                                    <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${filterArticles[1].image}`} alt="image_article" />
                                    <div className={styles.firstarticle_content}>
                                        <Link href={`/articles/${filterArticles[1].id}`} className={styles.texts_first_article}>
                                            <div className={styles.first_article_title} dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(language === "fa" ?
                                                    `${filterArticles[1]?.title_farsi}` :
                                                    `${filterArticles[1]?.title}`) }}>
                                            </div>
                                            <div className={styles.first_article_text} dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(language === "fa" ?
                                                    truncateText(filterArticles[1]?.text_farsi, 150) :
                                                    truncateText(filterArticles[1]?.text, 150)) }}>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className={styles.user_info}>
                                    <div className={styles.user_left}>
                                        <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${filterArticles[1]?.user?.avatar}`} alt="image" />
                                        <span className={styles.text}>
                                            {filterArticles[1]?.user?.username}
                                        </span>
                                    </div>
                                    <span className={styles.date}>
                                        {
                                            language === "fa"
                                                ? new Date(filterArticles[1]?.date).toLocaleDateString('fa-IR', {
                                                    day: '2-digit',
                                                    month: '2-digit',
                                                    year: '2-digit',
                                                })
                                                : new Date(filterArticles[1]?.date).toLocaleDateString('en-GB', {
                                                    day: '2-digit',
                                                    month: '2-digit',
                                                    year: '2-digit',
                                                })
                                        }

                                    </span>
                                </div>

                                <div className={`${styles.item} ${styles.item_1}`}>
                                    <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${filterArticles[2].image}`} alt="image_article" />
                                    <div className={styles.firstarticle_content}>
                                        <Link href={`/articles/${filterArticles[2].id}`} className={styles.texts_first_article}>
                                            <div className={styles.first_article_title} dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(language === "fa" ?
                                                    `${filterArticles[2]?.title_farsi}` :
                                                    `${filterArticles[2]?.title}`) }}>
                                               
                                            </div>
                                            <div className={styles.first_article_text} dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(language === "fa" ?
                                                    truncateText(filterArticles[2]?.text_farsi, 150) :
                                                    truncateText(filterArticles[2]?.text, 150)) }}>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className={styles.user_info}>
                                    <div className={styles.user_left}>
                                        <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${filterArticles[2]?.user?.avatar}`} alt="image" />
                                        <span className={styles.text}>
                                            {filterArticles[2]?.user?.username}
                                        </span>
                                    </div>
                                    <span className={styles.date}>
                                        {
                                            language === "fa"
                                                ? new Date(filterArticles[2]?.date).toLocaleDateString('fa-IR', {
                                                    day: '2-digit',
                                                    month: '2-digit',
                                                    year: '2-digit',
                                                })
                                                : new Date(filterArticles[2]?.date).toLocaleDateString('en-GB', {
                                                    day: '2-digit',
                                                    month: '2-digit',
                                                    year: '2-digit',
                                                })
                                        }

                                    </span>
                                </div>
                                <div className={`${styles.item} ${styles.item_4}`}>
                                    {
                                        language === "fa" &&
                                            data?.five_most_recent_articles_farsi.length ?
                                            <>
                                                <p className={styles.top_text}>{convertToFarsiNumber(data.five_most_recent_articles_farsi.length)} مقاله برتر</p>
                                                <div className={styles.image_container}>
                                                    {
                                                        data.five_most_recent_articles_farsi.map((item) => (
                                                            <Link className={styles.link_article_right} href={`/articles/${item.id}`}>
                                                                <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${item.image}`}
                                                                    className={`${styles.circle1} ${language == "fa" ? styles.circle_right : styles.circle}`} alt="Image 1" />
                                                            </Link>
                                                        ))
                                                    }

                                                </div>
                                            </> :
                                            data?.five_most_recent_articles_english.length ?
                                                <>
                                                    <p className={styles.top_text}>{`Top ${data?.five_most_recent_articles_english.length} Ariis Articles`}</p>
                                                    <div className={styles.image_container}>
                                                        {
                                                            data.five_most_recent_articles_english.map((item) => (
                                                                <Link className={styles.link_article} href={`/articles/${item.id}`}>
                                                                    <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${item.image}`}
                                                                        className={`${styles.circle1} ${language == "fa" ? styles.circle_right : styles.circle}`} alt="Image 1" />
                                                                </Link>
                                                            ))
                                                        }
                                                    </div>
                                                </> : null
                                    }
                                </div>
                            </div>
                        </div>
                    </> :
                    null
            }
        </>

    )
}

