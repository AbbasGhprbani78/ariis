import React from 'react'
import styles from './Article.module.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
export default function Article() {
    return (
        <div className={styles.article}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 12, xl: 4 }}>
                        <div className={styles.img_wrapper}>
                            <img src="/images/article/4.jpg" alt="image" className={styles.image_article} />
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 12, xl: 8 }}>
                        <div className={styles.content}>
                            <p className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.</p>
                            <div className={styles.user_info}>
                                <div className={styles.user_profile}>
                                    <img src="/images/article/1.png" alt="image_profile" className={styles.img_profile} />
                                    <div className={styles.user_texts}>
                                        <span className={styles.name}>Zahra Rezai</span>
                                        <span className={styles.date}>01/02/24</span>
                                    </div>
                                </div>
                                <div className={styles.user_like}>
                                    <FavoriteBorderOutlinedIcon />
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div >
    )
}
