"use client"
import React from 'react'
import styles from './Products.module.css'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import ProductImageItem from '@/components/modules/ProductImageItem/ProductImageItem';
import { useSelector } from 'react-redux';

export default function Products() {
    const { t } = useTranslation();
    
    const {
        service_title,
        image_two,
        title_image_two,
        text_image_two,
        image_three,
        title_image_three,
        text_image_three,
        image_four,
        title_image_four,
        text_image_four,
        image_five,
        title_image_five,
        text_image_five
    } = useSelector((state) => ({
        service_title: state.home.data?.service_title,
        image_two: state.home.data?.image_two,
        title_image_two: state.home.data?.title_image_two,
        text_image_two: state.home.data?.text_image_two,
        image_three: state.home.data?.image_three,
        title_image_three: state.home.data?.title_image_three,
        text_image_three: state.home.data?.text_image_three,
        image_four: state.home.data?.image_four,
        title_image_four: state.home.data?.title_image_four,
        text_image_four: state.home.data?.text_image_four,
        image_five: state.home.data?.image_five,
        title_image_five: state.home.data?.title_image_five,
        text_image_five: state.home.data?.text_image_five,
    }));

    return (
        <div className={styles.products_container}>
            <div className={styles.product_title_wrapper}>
                <p className={styles.product_title}>
                    {service_title}
                </p>
            </div>
            <div className={styles.products_items}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <ProductImageItem img={image_two} style="bgcolor">
                                <div className={styles.wrapper_text_image}>
                                    <p className={styles.title_image}>{title_image_two}</p>
                                    <p className={styles.text_image}>{text_image_two}</p>
                                </div>
                            </ProductImageItem>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <ProductImageItem img={image_three} style="bgcolor">
                                <div className={styles.wrapper_text_image}>
                                    <p className={styles.title_image}>{title_image_three}</p>
                                    <p className={styles.text_image}>{text_image_three}</p>
                                </div>
                            </ProductImageItem>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <ProductImageItem img={image_four}>
                                <div className={styles.wrapper_text_image}>
                                    <p className={styles.title_image}>{title_image_four}</p>
                                    <p className={styles.text_image}>{text_image_four}</p>
                                </div>
                            </ProductImageItem>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <ProductImageItem img={image_five}>
                                <div className={styles.wrapper_text_image}>
                                    <p className={styles.title_image}>{title_image_five}</p>
                                    <p className={styles.text_image}>{text_image_five}</p>
                                </div>
                            </ProductImageItem>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
}
