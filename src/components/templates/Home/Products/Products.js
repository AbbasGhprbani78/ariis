"use client"
import React from 'react'
import styles from './Products.module.css'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import ProductImageItem from '@/components/modules/ProductImageItem/ProductImageItem';
import { useSelector } from 'react-redux';


export default function Products() {

    const { t } = useTranslation()
    const { data, loading, error } = useSelector((state) => state.home);


    return (
        <div className={styles.products_container}>
            <div className={styles.product_title_wrapper}>
                <p className={styles.product_title}>
                    {data?.service_title}
                </p>
            </div>
            <div className={styles.products_items}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}  >
                        <Grid size={{ xs: 12, md: 6 }} >
                            <ProductImageItem img={`${data?.image_two}`} style="bgcolor" >
                                <div className={styles.wrapper_text_image}>
                                    <p className={styles.title_image}>
                                        {data?.title_image_two}
                                    </p>
                                    <p className={styles.text_image}>
                                        {data?.text_image_two}
                                    </p>
                                </div>
                            </ProductImageItem>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <ProductImageItem img={`${data?.image_three}`} style="bgcolor" >
                                <div className={styles.wrapper_text_image}>
                                    <p className={styles.title_image}>
                                        {data?.title_image_three}
                                    </p>
                                    <p className={styles.text_image}>
                                        {data?.text_image_three}
                                    </p>
                                </div>
                            </ProductImageItem>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <ProductImageItem img={`${data?.image_four}`} >
                                <div className={styles.wrapper_text_image}>
                                    <p className={styles.title_image}>
                                        {data?.title_image_four}
                                    </p>
                                    <p className={styles.text_image}>
                                        {data?.text_image_four}
                                    </p>
                                </div>
                            </ProductImageItem>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <ProductImageItem img={`${data?.image_five}`} >
                                <div className={styles.wrapper_text_image}>
                                    <p className={styles.title_image}>
                                        {data?.title_image_five}
                                    </p>
                                    <p className={styles.text_image}>
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
