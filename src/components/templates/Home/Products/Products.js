"use client"
import React from 'react'
import styles from './Products.module.css'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import ProductImageItem from '@/components/modules/ProductImageItem/ProductImageItem';
import {useSelector } from 'react-redux';

export default function Products() {

    const { t } = useTranslation()
    const { data, loading, error } = useSelector((state) => state.home);

    return (
        <div className={styles.products_container}>
            <p className={styles.product_title}>
                {t("Products")}
            </p>
            <div className={styles.products_items}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <ProductImageItem img={`${data?.image_two}`} style="bgcolor" >
                                <div className={styles.wrapper_text_image1}>
                                    <p className={styles.text_image1}>
                                        {data?.text_image_two}
                                    </p>
                                </div>
                            </ProductImageItem>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <ProductImageItem img={`${data?.image_three}`} style="bgcolor" >
                                <div className={styles.wrapper_text_image2}>
                                    <p className={styles.title_image2}>
                                        Computer  Vision
                                    </p>
                                    <p className={styles.text_image2}>
                                        {data?.text_image_three}
                                    </p>
                                </div>
                            </ProductImageItem>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <ProductImageItem img={`${data?.image_four}`} >
                                <div className={styles.wrapper_text_image3}>
                                    <p className={styles.title_image3}>
                                        Data  Mining
                                    </p>
                                    <p className={styles.text_image3}>
                                        {data?.text_image_four}
                                    </p>
                                </div>
                            </ProductImageItem>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <ProductImageItem img={`${data?.image_five}`} >
                                <div className={styles.wrapper_text_image4}>
                                    <p className={styles.title_image4}>
                                        Data  Mining
                                    </p>
                                    <p className={styles.text_image4}>
                                        {data?.text_image_five}
                                    </p>
                                </div>
                            </ProductImageItem>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}
