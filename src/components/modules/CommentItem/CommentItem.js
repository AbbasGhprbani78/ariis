"use client"
import React, { useEffect, useState } from 'react'
import styles from './CommentItem.module.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useLanguage } from '@/context/LangContext';
import axios from 'axios';
export default function CommentItem({ comment }) {

    const { language } = useLanguage()
    const [ip, setIp] = useState("");
    const [likeCount, setLikeCount] = useState(comment?.like_count)
    const [disLikeCount, setdisLikeCount] = useState(comment?.dislike_count)

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


    const disLikeCommentHandler = async (id) => {
        try {
            const body = {
                user: ip
            }
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/article/comment/${id}/dislike/`, body)
            if (res.status === 200) {
                setdisLikeCount(prevCount => prevCount + 1)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const likeCommentHandler = async (id) => {
        try {
            const body = {
                user: ip
            }
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/article/comment/${id}/like/`, body)
            if (res.status === 201) {
                setLikeCount(prevCount => prevCount + 1)
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <div className={styles.comment_item}>
                <div className={styles.comment_left}>
                    <div className={styles.img_wrap}> <img src="/images/user.png" alt="image_comment" className={styles.img_comment} /></div>
                    <div className={styles.comment_content}>
                        <span className={styles.user_name}>{comment?.user}</span>
                        <p className={styles.user_text}>{comment?.text}</p>
                        <div className={styles.likes_wrapper}>
                            <div className={styles.dislike_w}>
                                <span className={`${styles.like_number}${styles.dis_number}`}>{disLikeCount}</span>
                                <span className={`${styles.like} ${styles.disl}`} onClick={() => disLikeCommentHandler(comment.id)}>
                                    <ThumbDownIcon className={styles.like_icon} />
                                </span>
                            </div>
                            <div className={styles.like_w}>
                                <span className={`${styles.like_number} ${styles.li_number}`}>{likeCount}</span>
                                <span className={`${styles.like} ${styles.likl}`} onClick={() => likeCommentHandler(comment.id)} >
                                    <ThumbUpIcon className={styles.like_icon} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <span className={styles.comment_date}>
                    {
                        language === "fa"
                            ? new Date(comment?.date).toLocaleDateString('fa-IR', {
                                day: '2-digit',
                                month: '2-digit',
                                year: '2-digit',
                            })
                            : new Date(comment?.date).toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: '2-digit',
                                year: '2-digit',
                            })
                    }
                </span>
            </div>
            <div className={styles.comment_m}>
                <div className={styles.user}>
                    <div className={styles.img_wrap}> <img src="/images/user.png" alt="image_comment" className={styles.img_comment} /></div>
                    <span className={styles.user_name}>{comment?.user}</span>
                </div>
                <p className={styles.user_text}>{comment?.text}</p>
                <div className={styles.comment_bottom}>
                    <div className={styles.likes_wrapper}>
                        <div className={styles.dislike_w}>
                            <span className={`${styles.like_number}${styles.dis_number}`}>{disLikeCount}</span>
                            <span className={`${styles.like} ${styles.disl}`} onClick={() => disLikeCommentHandler(comment.id)}>
                                <ThumbDownIcon className={styles.like_icon} />
                            </span>

                        </div>
                        <div className={styles.like_w}>
                            <span className={`${styles.like_number} ${styles.li_number}`}>{likeCount}</span>
                            <span className={`${styles.like} ${styles.likl}`} onClick={() => likeCommentHandler(comment.id)}>
                                <ThumbUpIcon className={styles.like_icon} />
                            </span>
                        </div>
                    </div>
                    <span className={styles.comment_date}>
                        {
                            language === "fa"
                                ? new Date(comment?.date).toLocaleDateString('fa-IR', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: '2-digit',
                                })
                                : new Date(comment?.date).toLocaleDateString('en-GB', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: '2-digit',
                                })
                        }
                    </span>
                </div>
            </div>
        </>

    )
}
