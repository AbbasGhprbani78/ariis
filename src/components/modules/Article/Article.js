"use client"
import React, { useEffect, useState } from 'react'
import styles from './Article.module.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useLanguage } from '@/context/LangContext';
import axios from 'axios';
import Link from 'next/link';
import DOMPurify from 'dompurify'
import { truncateText } from '@/utils/Maxtext';
import { useDispatch, useSelector } from 'react-redux';
import { getIPData } from '@/redux/getIp';

export default function Article({ item }) {
    const { language } = useLanguage()
    const [like, setLike] = useState()
    const dispatch = useDispatch()
    const { datap } = useSelector((state) => state.getIp)


    useEffect(() => {
        dispatch(getIPData())
    }, [])

    useEffect(() => {
        setLike(item.has_liked)
    }, [item])


    const likeDisLikeArticle = async (event) => {
        event.stopPropagation()
        const body = {
            user: datap?.ip
        }
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/article/articles/${item.id}/like/`, body)
            if (res.status === 201 || res.status === 200) {
                setLike(prevLike => !prevLike)
            }
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className={styles.article}>
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 4 }}>
                            <div className={styles.img_wrapper}>
                                <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`} alt="image" className={styles.image_article} />
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 8 }}>
                            <div className={styles.content}>
                                <Link href={`/articles/${item?.id}`} className={styles.link_text} >
                                    <div className={styles.title} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(language === "fa" ? item?.title_farsi : item?.title) }}>
                                    </div>

                                    <div className={styles.text} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(language === "fa" ? truncateText(item?.text_farsi, 150) : truncateText(item?.text, 150)) }}></div>
                                </Link>
                                <div className={styles.user_info}>
                                    <div className={styles.user_profile}>
                                        <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.user?.avatar}`} alt="image_profile" className={styles.img_profile} />
                                        <div className={styles.user_texts}>
                                            <span className={styles.name}>{item?.user?.username}</span>
                                            <span className={styles.date}>
                                                {
                                                    language === "fa"
                                                        ? new Date(item?.date).toLocaleDateString('fa-IR', {
                                                            day: '2-digit',
                                                            month: '2-digit',
                                                            year: '2-digit',
                                                        })
                                                        : new Date(item?.date).toLocaleDateString('en-GB', {
                                                            day: '2-digit',
                                                            month: '2-digit',
                                                            year: '2-digit',
                                                        })
                                                }
                                            </span>

                                        </div>
                                    </div>
                                    <div className={styles.user_like} onClick={likeDisLikeArticle}>
                                        {
                                            like ?
                                                <FavoriteOutlinedIcon style={{ color: "red" }} /> :
                                                <FavoriteBorderOutlinedIcon />
                                        }

                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div >
    )
}
