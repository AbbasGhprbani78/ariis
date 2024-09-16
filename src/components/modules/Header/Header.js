"use client"
import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button/Button'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EastIcon from '@mui/icons-material/East';
import { useTranslation } from 'react-i18next'
import { useLanguage } from '@/context/LangContext'
import useWindowWidth from '@/hook/WindowWidth'
import Offcanvas from '../Offcanvas/Offcanvas'

export default function Header() {

    const { t } = useTranslation()
    const { changeLanguage, language } = useLanguage()
    const width = useWindowWidth();

    if (width === undefined) {
        return null;
    }

    return (
        <header className={styles.header_container}>
            {
                width < 1025 ?
                    <>
                        <Offcanvas />
                        <Image src={'/images/logo.svg'} width={70} height={33} alt='logo' />
                    </> :
                    <>
                        <div className={styles.header_logo}>
                            <Image src={'/images/logo.svg'} width={70} height={33} alt='logo' />
                        </div>
                        <nav className={styles.header_menu}>
                            <Link className={styles.header_link} href={"/"}>{t("Home")}</Link>
                            <li className={styles.header_items_wrapper}>
                                <div className={styles.header_dropdown}>
                                    <span className={styles.products_text}>{t("Products")}</span>
                                    <ExpandMoreIcon className={styles.icon_drop} />
                                </div>
                                <ul className={styles.drop}>
                                    <Link
                                        className={`${styles.product_link} ${language === "fa" && styles.right_product_link}`}
                                        href={"/product/edupia"}
                                    >
                                        Edupia
                                    </Link>
                                    <Link
                                        className={`${styles.product_link} ${language === "fa" && styles.right_product_link}`}
                                        href={"/product/farmflow"}
                                    >
                                        Farm Flow
                                    </Link>
                                    <Link
                                        className={`${styles.product_link} ${language === "fa" && styles.right_product_link}`}
                                        href={"/product/opermate"}
                                    >
                                        Opermate
                                    </Link>
                                    <Link
                                        className={`${styles.product_link} ${language === "fa" && styles.right_product_link}`}
                                        href={"/product/snapreport"}
                                    >
                                        Snap Report
                                    </Link>
                                    <Link
                                        className={`${styles.product_link} ${language === "fa" && styles.right_product_link}`}
                                        href={"/product/topet"}
                                    >
                                        ToPet
                                    </Link>
                                </ul>
                            </li>
                            <Link className={styles.header_link} href={""}>{t("Articles")}</Link>
                            <Link className={styles.header_link} href={""}>{t("AboutUs")}</Link>
                            <Link className={styles.header_link} href={""}>{t("ContactUs")}</Link>
                        </nav>
                        <div className={styles.header_actions}>
                            <div className={styles.header_wrap_btn_switch}>
                                <button className={`${styles.btn_switch} ${language === "en" && styles.active}`} onClick={() => changeLanguage('en')}>En</button>
                                <button className={`${styles.btn_switch} ${language === "fa" && styles.active}`} onClick={() => changeLanguage('fa')}>Fa</button>
                            </div>
                            <Button text={t('ContactUs')} icon={EastIcon} />
                        </div>
                    </>
            }


        </header>
    )
}
