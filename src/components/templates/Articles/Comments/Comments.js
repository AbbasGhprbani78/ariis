"use client";
import React, { useState } from 'react';
import styles from './Comments.module.css';
import CommentItem from '@/components/modules/CommentItem/CommentItem';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Toast from '@/components/modules/Toast/Toast';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function Comments({ id }) {

    const { t } = useTranslation();
    const [showAll, setShowAll] = useState(false);
    const { comments } = useSelector((state) => state.article.data || {});
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState({
        type: "",
        title: "",
        message: "",
    });

    const [commentData, setCommentData] = useState({
        user: "",
        text: ""
    });


    const [errors, setErrors] = useState({
        user: "",
        text: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCommentData((prevData) => ({
            ...prevData,
            [name]: value
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: ""
        }));
    };

    const sendComment = async (e) => {
        e.preventDefault();

        let newErrors = {};
        if (!commentData.user.trim()) {
            newErrors.user = t("Name is required");
        }
        if (!commentData.text.trim()) {
            newErrors.text = t("Comment is required");
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const body = {
                user: commentData.user,
                text: commentData.text,
                article: id
            };
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/article/comments/`, body);
            if (res.status === 201) {
                setShowToast(true);
                setToastMessage({
                    type: "success",
                    title: t("success"),
                    message: t("commentsendsuccessfully"),
                });
                setCommentData({
                    user: "",
                    text: ""
                });

                location.reload()
            }
        } catch (error) {
            console.log(error);
        }
    };


    const handleShowMoreClick = () => {
        setShowAll((prev) => !prev);
    }

    return (
        <div className={styles.comment_wrapper}>
            <p className={styles.comment_title}>{t("Comments")}</p>
            <div className={styles.comment_container}>
                {
                    comments?.length > 0 && !showAll
                        ? comments.slice().reverse().slice(0, 3).map((item) => (
                            <CommentItem key={item.id} comment={item} />
                        )) :
                        comments?.slice().reverse().map((item) => (
                            <CommentItem key={item.id} comment={item} />
                        ))
                }
                {
                    comments?.length > 3 &&
                    <div className={styles.wrap_btn_show}>
                        <button className={styles.show_more_btn} onClick={handleShowMoreClick}>
                            {showAll ? t("ShowLess") : t("ShowMore")}
                            <KeyboardArrowDownIcon />
                        </button>
                    </div>
                }
            </div>
            <p className={styles.comment_title}>{t("commentTitle")}</p>
            <form onSubmit={sendComment} className={styles.send_comment_form}>
                <div className={styles.input_wrapper}>
                    <p>{t("Name")}</p>
                    <input
                        name="user"
                        value={commentData.user}
                        onChange={handleChange}
                        placeholder={t("Name")}
                        className={styles.input_name_comment}
                        autoComplete='off'
                    />
                    {errors.user && <p className={styles.error_message}>{errors.user}</p>}
                </div>
                <div className={styles.input_wrapper}>
                    <p>{t("Comment")}</p>
                    <textarea
                        name='text'
                        className={styles.comment_textarea}
                        value={commentData.text}
                        onChange={handleChange}
                        placeholder={t("Comment")}
                        autoComplete='off'
                    >
                    </textarea>
                    {errors.text && <p className={styles.error_message}>{errors.text}</p>}
                </div>
                <button type='submit' className={styles.btn}>{t("Send")}</button>
            </form>

            <Toast
                type={toastMessage.type}
                title={toastMessage.title}
                message={toastMessage.message}
                showToast={showToast}
                setShowToast={setShowToast}
            />
        </div>
    );

}
