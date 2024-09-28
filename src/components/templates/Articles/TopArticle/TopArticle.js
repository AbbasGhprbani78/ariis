"use client"
import React, { useEffect, useState } from 'react'
import styles from './TopArticle.module.css'
import { useLanguage } from '@/context/LangContext'
import { useSelector } from 'react-redux'
import Link from 'next/link'
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

    useEffect(() => {
        fliterArticlesByLanguage(language)
    }, [language, data])


    console.log(data)


    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };

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
                                                        ? new Date(filterArticles[0]?.user?.date).toLocaleDateString('fa-IR', {
                                                            day: '2-digit',
                                                            month: '2-digit',
                                                            year: '2-digit',
                                                        })
                                                        : new Date(filterArticles[0]?.user?.date).toLocaleDateString('en-GB', {
                                                            day: '2-digit',
                                                            month: '2-digit',
                                                            year: '2-digit',
                                                        })
                                                }</span>
                                            </div>
                                        </div>
                                        <Link href={`/articles/${filterArticles[0].id}`} className={styles.texts_first_article}>
                                            <p className={styles.first_article_title}>
                                                {
                                                    language === "fa" ?
                                                        `${filterArticles[0]?.title_farsi}` :
                                                        `${filterArticles[0]?.title}`
                                                }
                                            </p>
                                            <p className={styles.first_article_text}>
                                                {
                                                    language === "fa" ?
                                                        truncateText(filterArticles[0]?.text_farsi, 150) :
                                                        truncateText(filterArticles[0]?.text, 150)
                                                }
                                            </p>
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
                                                    ? new Date(filterArticles[1]?.user?.date).toLocaleDateString('fa-IR', {
                                                        day: '2-digit',
                                                        month: '2-digit',
                                                        year: '2-digit',
                                                    })
                                                    : new Date(filterArticles[1]?.user?.date).toLocaleDateString('en-GB', {
                                                        day: '2-digit',
                                                        month: '2-digit',
                                                        year: '2-digit',
                                                    })
                                            }</span>
                                        </div>
                                    </div>
                                    <Link href={`/articles/${filterArticles[1].id}`} className={styles.texts_wrapper}>
                                        <p className={styles.user_title}>
                                            {`${filterArticles[0].title}`}
                                        </p>
                                        <p className={styles.user_text}>
                                            {
                                                language === "fa" ?
                                                    truncateText(filterArticles[1].text_farsi, 150) :
                                                    truncateText(filterArticles[1].text, 150)
                                            }
                                        </p>
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
                                                    ? new Date(filterArticles[2]?.user?.date).toLocaleDateString('fa-IR', {
                                                        day: '2-digit',
                                                        month: '2-digit',
                                                        year: '2-digit',
                                                    })
                                                    : new Date(filterArticles[2]?.user?.date).toLocaleDateString('en-GB', {
                                                        day: '2-digit',
                                                        month: '2-digit',
                                                        year: '2-digit',
                                                    })
                                            }</span>
                                        </div>
                                    </div>
                                    <Link href={`/articles/${filterArticles[2].id}`} className={styles.texts_wrapper}>
                                        <p className={styles.user_title}>
                                            {`${filterArticles[2].title}`}
                                        </p>
                                        <p className={styles.user_text}>
                                            {
                                                language === "fa" ?
                                                    truncateText(filterArticles[2].text_farsi, 150) :
                                                    truncateText(filterArticles[2].text, 150)
                                            }
                                        </p>
                                    </Link>
                                </div>
                                <div className={`${styles.item} ${styles.item_4}`}>
                                    {
                                        language === "fa" &&
                                            data?.five_most_recent_articles_farsi.length >= 5 ?
                                            <>
                                                <p className={styles.top_text}>Top 5 Ariis Articles</p>
                                                <div className={styles.image_container}>
                                                    <img src="/images/article/7.jpg"
                                                        className={`${styles.circle1} ${language == "fa" ? styles.circle_right : styles.circle}`} alt="Image 1" />
                                                    <img src="/images/article/3.png"
                                                        className={`${styles.circle2} ${language == "fa" ? styles.circle_right : styles.circle}`} alt="Image 2" />
                                                    <img src="/images/article/5.png"
                                                        className={`${styles.circle3} ${language == "fa" ? styles.circle_right : styles.circle}`} alt="Image 3" />
                                                    <img src="/images/article/4.jpg"
                                                        className={`${styles.circle4} ${language == "fa" ? styles.circle_right : styles.circle}`} alt="Image 4" />
                                                    <img src="/images/article/9.png"
                                                        className={`${styles.circle5} ${language == "fa" ? styles.circle_right : styles.circle}`} alt="Image 5" />
                                                </div>
                                            </> :
                                            data?.five_most_recent_articles_english.length > 5 ?
                                                <>
                                                    <p className={styles.top_text}>Top 5 Ariis Articles</p>
                                                    <div className={styles.image_container}>
                                                        <img src="/images/article/7.jpg"
                                                            className={`${styles.circle1} ${language == "fa" ? styles.circle_right : styles.circle}`} alt="Image 1" />
                                                        <img src="/images/article/3.png"
                                                            className={`${styles.circle2} ${language == "fa" ? styles.circle_right : styles.circle}`} alt="Image 2" />
                                                        <img src="/images/article/5.png"
                                                            className={`${styles.circle3} ${language == "fa" ? styles.circle_right : styles.circle}`} alt="Image 3" />
                                                        <img src="/images/article/4.jpg"
                                                            className={`${styles.circle4} ${language == "fa" ? styles.circle_right : styles.circle}`} alt="Image 4" />
                                                        <img src="/images/article/9.png"
                                                            className={`${styles.circle5} ${language == "fa" ? styles.circle_right : styles.circle}`} alt="Image 5" />
                                                    </div>
                                                </> : null
                                    }
                                </div>
                            </div>
                            <div className={styles.toparticles_m}>
                                <div className={`${styles.item} ${styles.item_1}`}>
                                    <img src="/images/article/9.png" alt="image_article" />
                                    <div className={styles.firstarticle_content}>
                                        <div className={styles.texts_first_article}>
                                            <p className={styles.first_article_title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <p className={styles.first_article_text}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.user_info}>
                                    <div className={styles.user_left}>
                                        <img src="/images/article/1.png" alt="image" />
                                        <span className={styles.text}>Zahra Rezai</span>
                                    </div>
                                    <span className={styles.date}>01/02/24</span>
                                </div>
                                <div className={`${styles.item} ${styles.item_2}`}>
                                    <div className={styles.texts_wrapper}>
                                        <p className={styles.user_title}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                        <p className={styles.user_text}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.user_info}>
                                    <div className={styles.user_left}>
                                        <img src="/images/article/1.png" alt="image" />
                                        <span className={styles.text}>Zahra Rezai</span>
                                    </div>
                                    <span className={styles.date}>01/02/24</span>
                                </div>
                                <div className={`${styles.item} ${styles.item_3}`}>
                                    <img src="/images/article/10.png" alt="image_article" />
                                    <div className={styles.texts_wrapper2}>
                                        <p className={styles.user_title}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                        <p className={styles.user_text}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.user_info}>
                                    <div className={styles.user_left}>
                                        <img src="/images/article/1.png" alt="image" />
                                        <span className={styles.text}>Zahra Rezai</span>
                                    </div>
                                    <span className={styles.date}>01/02/24</span>
                                </div>
                                <div className={`${styles.item} ${styles.item_4}`}>
                                    <p className={styles.top_text}>Top 5 Ariis Articles</p>
                                    <div className={styles.image_container}>
                                        <img src="images/article/7.jpg"
                                            className={`${styles.circle1} ${language == "fa" ? styles.circle_right : styles.circle}`} alt="Image 1" />
                                        <img src="images/article/6.jpg"
                                            className={`${styles.circle2} ${language == "fa" ? styles.circle_right : styles.circle}`} alt="Image 2" />
                                        <img src="images/article/5.png"
                                            className={`${styles.circle3} ${language == "fa" ? styles.circle_right : styles.circle}`} alt="Image 3" />
                                        <img src="images/article/4.jpg"
                                            className={`${styles.circle4} ${language == "fa" ? styles.circle_right : styles.circle}`} alt="Image 4" />
                                        <img src="images/article/9.png"
                                            className={`${styles.circle5} ${language == "fa" ? styles.circle_right : styles.circle}`} alt="Image 5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </> :
                    null
            }
        </>

    )
}

