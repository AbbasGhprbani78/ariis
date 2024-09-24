"use client"
import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { useTranslation } from 'react-i18next';
import StackItem from '@/components/modules/StackItem/StackItem';
import styles from './Section3.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getProjectData } from '@/redux/product';
import { useLanguage } from '@/context/LangContext';
import Loading from '@/components/modules/Loading/Loading';

export default function Section3({ id }) {
    console.log(id)
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { language } = useLanguage()
    const { data, loading, error } = useSelector((state) => state.product);



    useEffect(() => {
        dispatch(getProjectData({ language, id }))
    }, [language, id])


    if (loading) {
        return <Loading />;
    }


    return (
        <div className={styles.section3_wrapper}>
            <p className={styles.title}>
                {t("AboutProduct")}
            </p>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, sm: 12, md: 7, lg: 8 }} >
                        <p className={styles.about_des}>
                            {data?.about}
                        </p>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 5, lg: 4 }} >
                        <span className={styles.techstack}>
                            {t("TechStack")} :
                        </span>
                        <div className={styles.stack_wrapper}>
                            {
                                data?.technology &&
                                data.technology.map((item, i) => (
                                    <StackItem key={i} item={item} text={"Python"} />
                                ))
                            }
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>

    )
}
