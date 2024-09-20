import React, { useEffect } from 'react'
import styles from './Section4.module.css'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Section4() {

    const { t } = useTranslation()
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className={styles.section4_wrapper}>
            <p className={styles.title}>
                {t("HowItWorks")}
            </p>
            <div>
                <Box sx={{ flexGrow: 1 }} >
                    <Grid container spacing={2} className={styles.catalog_wrapper}>
                        <Grid size={{ xs: 12, sm: 5.5 }}>
                            <p className={styles.how_work_text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <div className={styles.img_screen} data-aos="flip-left">
                                <img
                                    src={"/images/product/1.png"}
                                    alt="Mobile screen 2"
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div className={styles.img_screen} data-aos="flip-left">
                                <img
                                    src={"/images/product/4.png"}
                                    alt="Mobile screen 3"
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 5.5 }}
                            sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div className={styles.img_screen} data-aos="flip-left">
                                <img
                                    src={"/images/product/2.png"}
                                    alt="Mobile screen 4"
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div className={styles.img_screen} data-aos="flip-left">
                                <img
                                    src={"/images/product/3.png"}
                                    alt="Mobile screen 5"
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div className={styles.img_screen_last} data-aos="flip-left">
                                <img
                                    src={"/images/product/5.png"}
                                    alt="Mobile screen 6"
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}
