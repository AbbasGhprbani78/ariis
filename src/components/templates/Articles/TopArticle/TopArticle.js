"use client"
import React from 'react'
import styles from './TopArticle.module.css'
import { useLanguage } from '@/context/LangContext'
export default function TopArticle() {

    const { language } = useLanguage()

    return (
        <div className={styles.container}>
            <div className={styles.toparticles}>
                <div className={`${styles.item} ${styles.item_1}`}>
                    <img src="/images/article/9.png" alt="image_article" />
                    <div className={styles.firstarticle_content}>
                        <div className={styles.user_info}>
                            <img src="/images/article/1.png" alt="image_profile" />
                            <div className={`${styles.user_texts} ${styles.f_article}`}>
                                <span className={styles.user_name}>Zahra Rezai</span>
                                <span className={styles.date}>01/02/24</span>
                            </div>
                        </div>
                        <div className={styles.texts_first_article}>
                            <p className={styles.first_article_title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className={styles.first_article_text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.item} ${styles.item_2}`}>
                    <div className={styles.user_info}>
                        <img src="/images/article/1.png" alt="image_profile" />
                        <div className={styles.user_texts}>
                            <span className={styles.user_name}>Zahra Rezai</span>
                            <span className={styles.date}>01/02/24</span>
                        </div>
                    </div>
                    <div className={styles.texts_wrapper}>
                        <p className={styles.user_title}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <p className={styles.user_text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.
                        </p>
                    </div>
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
    )
}


{/* <div className={styles.user_info}>
    <img src="/images/article/1.png" alt="image_profile" />
    <div className={`${styles.user_texts} ${styles.f_article}`}>
        <span className={styles.user_name}>Zahra Rezai</span>
        <span className={styles.date}>01/02/24</span>
    </div>
</div> */}