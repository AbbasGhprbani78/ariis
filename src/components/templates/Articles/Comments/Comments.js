"use client"
import React, { useState } from 'react'
import styles from './Comments.module.css'
import CommentItem from '@/components/modules/CommentItem/CommentItem'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

export default function Comments({ id }) {

    const { t } = useTranslation();

    const { data, loading, error } = useSelector((state) => state.product);
    const [commentData, setCommentData] = useState({
        user: "",
        text: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setCommentData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const sendComment = async (e) => {
        e.preventDefault()

        if (commentData.user.trim() && commentData.text.trim()) {
            try {
                const body = {
                    user: commentData.user,
                    text: commentData.text,

                }
                const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/article/comments/${id}`, body)
                if (res.status === 201) {
                    console.log(res.data)
                }
            }
            catch (error) {
                console.log(error)
            }

        }
    }

    return (
        <div className={styles.comment_wrapper}>
            <p className={styles.comment_title}>Comments</p>
            <div className={styles.comment_container}>
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
            </div>

            <form onSubmit={sendComment} className={styles.send_comment_form}>
                <input
                    name="user"
                    value={commentData.user}
                    onChange={handleChange}
                    placeholder={t("Name")}
                    className={styles.input_name_comment}
                    autoComplete='off'
                />
                <textarea
                    name='text'
                    className={styles.comment_textarea}
                    value={commentData.text}
                    onChange={handleChange}
                    placeholder={t("Comment")}
                    autoComplete='off'
                >


                </textarea>
                <button type='submit' className={styles.btn}>{t("Send")}</button>
            </form>
        </div>
    )
}
