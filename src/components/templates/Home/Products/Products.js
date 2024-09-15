"use client"
import React from 'react'
import styles from './Products.module.css'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import ProductImageItem from '@/components/modules/ProductImageItem/ProductImageItem';

export default function Products() {

    const { t } = useTranslation()
    return (
        <div className={styles.products_container}>
            <p className={styles.product_title}>
                {t("Products")}
            </p>
            <div className={styles.products_items}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <ProductImageItem img={"/images/product1.png"} style="bgcolor" >
                                <div className={styles.wrapper_text_image1}>
                                    <p className={styles.text_image1}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </ProductImageItem>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <ProductImageItem img={"/images/product2.png"} style="bgcolor" >
                                <div className={styles.wrapper_text_image2}>
                                    <p className={styles.title_image2}>
                                        Computer  Vision
                                    </p>
                                    <p className={styles.text_image2}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </ProductImageItem>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <ProductImageItem img={"/images/product3.png"} >
                                <div className={styles.wrapper_text_image3}>
                                    <p className={styles.title_image3}>
                                        Data  Mining
                                    </p>
                                    <p className={styles.text_image3}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </ProductImageItem>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <ProductImageItem img={"/images/product4.png"} >
                                <div className={styles.wrapper_text_image4}>
                                    <p className={styles.title_image4}>
                                        Data  Mining
                                    </p>
                                    <p className={styles.text_image4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
