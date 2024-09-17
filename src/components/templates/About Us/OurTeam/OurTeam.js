"use client"
import React from 'react'
import styles from './OurTean.module.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { useTranslation } from 'react-i18next';
import AddIcon from '@mui/icons-material/Add';
import PercentIcon from '@mui/icons-material/Percent';
import { Cell, Pie, PieChart } from 'recharts';
const data = [
    { name: '1', value: 40, color: '#CCFFEE' },
    { name: '2', value: 10, color: '#f2f3f5' },
    { name: '3', value: 10, color: '#afc8c0' },
    { name: '4', value: 25, color: '#fd9b56' },
    { name: '5', value: 15, color: '#f1a07e' },
];

export default function OurTeam() {

    const { t } = useTranslation()
    const [mainScore, totalScore] = "8.7/10".split('/');
    return (
        <div className={styles.ourteam_wrapper}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={7}>
                    <Grid size={{ xs: 12, md: 6 }} >
                        <p className={styles.title_our}>
                            {t("OurTeam")}
                        </p>
                        <p className={styles.text_Our}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <div className={styles.about_feature}>
                            <div className={`${styles.item_about} ${styles.item1}`}>
                                <p className={styles.number_year}>2010</p>
                                <span className={styles.text_year}>
                                    Year Founded
                                </span>
                            </div>
                            <div className={`${styles.item_about} ${styles.item2}`}>
                                <div className={styles.year_founded}>
                                    <span className={styles.year_founded_item}>Year Founded</span>
                                    <div className={styles.wrap_number}>
                                        <AddIcon className={styles.icon_number} />
                                        <span className={styles.number}>10</span>
                                    </div>
                                </div>
                                <div className={styles.year_founded}>
                                    <span className={styles.year_founded_item}>Year Founded</span>
                                    <div className={styles.wrap_number}>
                                        <AddIcon className={styles.icon_number} />
                                        <span className={styles.number}>5 <span className={styles.letter}>M</span></span>
                                    </div>
                                </div>
                                <div className={styles.year_founded}>
                                    <span className={styles.year_founded_item}>Year Founded</span>
                                    <div className={styles.wrap_number}>
                                        <span className={styles.number}>80</span>
                                        <PercentIcon className={styles.icon_number} />
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.item_about} ${styles.item3}`}>
                                <div className={styles.number2_wrapper}>
                                    <span className={styles.main_score}>{mainScore}</span>
                                    <span className={styles.total_score}>/{totalScore}</span>
                                </div>
                                <span className={styles.text_item2}>
                                    Lorem ipsum dolor sit
                                </span>
                            </div>
                            <div className={`${styles.item_about} ${styles.item4}`}>
                                <img src="/images/team.png" alt="team" />
                            </div>
                            <div className={`${styles.item_about} ${styles.item5}`}>
                                <div className={styles.chart_wrapper}>
                                    <PieChart width={200} height={200}>
                                        <Pie
                                            data={data}
                                            dataKey="value"
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={80}
                                            startAngle={90}
                                            endAngle={-270}
                                            paddingAngle={5}
                                        >
                                            {data.map((entry, index) => (
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
                                            84%
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
                                        <span className={styles.number}>10</span>
                                    </div>
                                    <p className={styles.item6_text}>
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


//import { PieChart, Pie, Cell } from 'recharts';
