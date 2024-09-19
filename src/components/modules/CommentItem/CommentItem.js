import React from 'react'
import styles from './CommentItem.module.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
export default function CommentItem() {
    return (
        <>
            <div className={styles.comment_item}>
                <div className={styles.comment_left}>
                    <img src="/images/article/1.png" alt="image_comment" className={styles.img_comment} />
                    <div className={styles.comment_content}>
                        <span className={styles.user_name}>Name Of Writer</span>
                        <p className={styles.user_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className={styles.likes_wrapper}>
                            <div className={styles.dislike_w}>
                                <span className={`${styles.like_number}${styles.dis_number}`}>120</span>
                                <span className={`${styles.like} ${styles.disl}`}><ThumbDownIcon className={styles.like_icon} /></span>

                            </div>
                            <div className={styles.like_w}>
                                <span className={`${styles.like_number} ${styles.li_number}`}>78</span>
                                <span className={`${styles.like} ${styles.likl}`}><ThumbUpIcon className={styles.like_icon} /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <span className={styles.comment_date}>01/02/24</span>
            </div>
            <div className={styles.comment_m}>
                <div className={styles.user}>
                    <img src="/images/article/1.png" alt="image_comment" className={styles.img_comment} />
                    <span className={styles.user_name}>Name Of Writer</span>
                </div>
                <p className={styles.user_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className={styles.comment_bottom}>
                    <div className={styles.likes_wrapper}>
                        <div className={styles.dislike_w}>
                            <span className={`${styles.like_number}${styles.dis_number}`}>120</span>
                            <span className={`${styles.like} ${styles.disl}`}><ThumbDownIcon className={styles.like_icon} /></span>

                        </div>
                        <div className={styles.like_w}>
                            <span className={`${styles.like_number} ${styles.li_number}`}>78</span>
                            <span className={`${styles.like} ${styles.likl}`}><ThumbUpIcon className={styles.like_icon} /></span>
                        </div>
                    </div>
                    <span className={styles.comment_date}>01/02/24</span>
                </div>
            </div>
        </>

    )
}
