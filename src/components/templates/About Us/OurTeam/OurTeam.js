"use client"
import React, { useEffect, useState } from 'react'
import styles from './OurTean.module.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { useTranslation } from 'react-i18next';
import AddIcon from '@mui/icons-material/Add';
import PercentIcon from '@mui/icons-material/Percent';
import { Cell, Pie, PieChart } from 'recharts';
import { useLanguage } from '@/context/LangContext';
import { useDispatch, useSelector } from 'react-redux';
import { getAboutusData } from '@/redux/aboutus';
import Loading from '@/components/modules/Loading/Loading';
import Error from '@/components/modules/Error/Error';
import axios from 'axios';

const dataChart = [
    { name: '1', value: 40, color: '#CCFFEE' },
    { name: '2', value: 10, color: '#f2f3f5' },
    { name: '3', value: 10, color: '#afc8c0' },
    { name: '4', value: 25, color: '#fd9b56' },
    { name: '5', value: 15, color: '#f1a07e' },
];


export default function OurTeam() {

    const { t } = useTranslation()
    const { language } = useLanguage()
    const dispatch = useDispatch()
    const { data, loading, error } = useSelector((state) => state.aboutus);
    const [mainScore, totalScore] = data ? `${data?.point}/10`.split('/') : ['0', '10'];
    // const [dataChart, setDataChart] = useState("")

    const convertToFarsiDigits = (number) => {
        const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return number.toString().replace(/\d/g, (digit) => farsiDigits[digit]);
    };

    // const getDataChart = async () => {
    //     try {
    //         const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/home/data/`, {})
    //         console.log(response.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    useEffect(() => {
        dispatch(getAboutusData(language))
    }, [language])


    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }


    return (
        <div className={styles.ourteam_wrapper}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3} >
                    <Grid size={{ xs: 12, md: 12, lg: 5, xl: 6 }} >
                        <p className={styles.title_our}>
                            {t("OurTeam")}
                        </p>
                        <p className={styles.text_Our}>
                            {data?.our_team_text}
                        </p>
                    </Grid>
                    <Grid size={{ xs: 12, md: 12, lg: 7, xl: 6 }}>
                        <div className={styles.about_feature}>
                            <div className={`${styles.item_about} ${styles.item1}`}>
                                <p className={styles.number_year}>
                                    {language === "fa" ? convertToFarsiDigits(data?.year_founded) : data?.year_founded}
                                </p>
                                <span className={styles.text_year}>
                                    {t("YearFounded")}
                                </span>
                            </div>
                            <div className={`${styles.item_about} ${styles.item2}`}>
                                <div className={styles.year_founded}>
                                    <span className={styles.year_founded_item}>{t("Experience")}</span>
                                    <div className={styles.wrap_number}>
                                        <AddIcon className={styles.icon_number} />
                                        <span className={styles.number}>
                                            {language === "fa" ? convertToFarsiDigits(data?.experience) : data?.experience}
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.year_founded}>
                                    <span className={styles.year_founded_item}>{t("Project")}</span>
                                    <div className={styles.wrap_number}>
                                        <AddIcon className={styles.icon_number} />
                                        <span className={styles.number}>
                                            {language === "fa" ? `${convertToFarsiDigits(data?.number_of_projects)}` : data?.number_of_projects}<span className={styles.letter}>M</span>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.year_founded}>
                                    <span className={styles.year_founded_item}>{t("Satisfaction")}</span>
                                    <div className={styles.wrap_number}>
                                        <span className={styles.number}>
                                            {language === "fa" ? convertToFarsiDigits(data?.satisfaction_level) : data?.satisfaction_level}
                                        </span>
                                        <PercentIcon className={styles.icon_number} />
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.item_about} ${styles.item3}`}>
                                <div className={styles.number2_wrapper}>
                                    <span className={styles.main_score}>
                                        {language === "fa" ? convertToFarsiDigits(mainScore) : mainScore}
                                    </span>
                                    <span className={styles.total_score}>/{totalScore}</span>
                                </div>
                                <span className={styles.text_item2}>
                                    {t("Point")}
                                </span>
                            </div>
                            <div className={`${styles.item_about} ${styles.item4}`}>
                                <img src="/images/team.png" alt="team" />
                            </div>
                            <div className={`${styles.item_about} ${styles.item5}`}>
                                <div className={styles.chart_wrapper}>
                                    <PieChart width={200} height={200}>
                                        <Pie
                                            data={dataChart}
                                            dataKey="value"
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={68}
                                            outerRadius={80}
                                            startAngle={90}
                                            endAngle={-270}
                                            paddingAngle={5}
                                        >
                                            {dataChart.length > 0 &&
                                                dataChart.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                ))}
                                        </Pie>
                                        <text
                                            x="50%"
                                            y="50%"
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            fontSize={20}
                                            fontWeight="bold"
                                            fill="#fff"
                                        >
                                            {language === "fa" ? convertToFarsiDigits(84) : 84}%
                                        </text>
                                        <text
                                            x="50%"
                                            y="60%"
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            fontSize={12}
                                            fill="#aaa"
                                        >
                                            used
                                        </text>
                                    </PieChart>
                                </div>
                                <span className={styles.text_chart}>Lorem ipsum dolor sit</span>
                            </div>
                            <div className={`${styles.item_about} ${styles.item6}`}>
                                <div className={styles.item6_top}>
                                    <div className={styles.wrap_number}>
                                        <AddIcon className={styles.icon_number} />
                                        <span className={styles.number}>
                                            {language === "fa" ? convertToFarsiDigits(data?.number_of_cooperation_with_other_countries) :
                                                data?.number_of_cooperation_with_other_countries}
                                        </span>
                                    </div>
                                    <p className={`${styles.item6_text} ${language === "fa" && styles.item6_text_fa}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
                                    </p>
                                </div>
                                <div className={styles.item6_flag}>
                                    <img className={styles.flag_img} src="/images/flag/usa.png" alt="flag" />
                                    <img className={styles.flag_img} src="/images/flag/canada.png" alt="flag" />
                                    <img className={styles.flag_img} src="/images/flag/afg.png" alt="flag" />
                                    <img className={styles.flag_img} src="/images/flag/france.png" alt="flag" />
                                    <img className={styles.flag_img} src="/images/flag/united-kingdom.png" alt="flag" />
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}


