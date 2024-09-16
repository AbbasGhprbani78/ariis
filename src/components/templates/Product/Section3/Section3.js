
import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { useTranslation } from 'react-i18next';
import StackItem from '@/components/modules/StackItem/StackItem';
import styles from './Section3.module.css'

export default function Section3() {
    const { t } = useTranslation()
    const imgUrl = '/images/logo/js.png'
    const imgUrl2 = '/images/logo/python.png'
    const imgUrl3 = '/images/logo/ai.png'
    const imgUrl4 = '/images/logo/bootstrap.png'



    return (
        <div className={styles.section3_wrapper}>
            <p className={styles.title}>
                {t("AboutProduct")}
            </p>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 8 }} >
                        <p className={styles.about_des}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.
                        </p>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }} >
                        <span className={styles.techstack}>
                            {t("TechStack")} :
                        </span>
                        <div className={styles.stack_wrapper}>
                            <StackItem text={"Python"} img={imgUrl2} />
                            <StackItem text={"Js"} img={imgUrl} />
                            <StackItem text={"Ai"} img={imgUrl3} />
                            <StackItem text={"bootstrap"} img={imgUrl4} />
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>

    )
}
