"use client";
import React, { useEffect } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EastIcon from "@mui/icons-material/East";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LangContext";
import Offcanvas from "../Offcanvas/Offcanvas";
import useWindowWidth from "@/hook/WindowWidth";
import { usePathname } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { getProjectsTitle } from "@/redux/header";
import { useRouter } from 'next/navigation';


export default function Header() {
    const pathname = usePathname();
    const dispatch = useDispatch()
    const { t } = useTranslation();
    const { changeLanguage, language } = useLanguage();
    const { data, loading, error } = useSelector((state) => state.header);
    const width = useWindowWidth();
    const router = useRouter()

    if (width === undefined) {
        return null;
    }

    const isActive = (href) => pathname === href;

    useEffect(() => {
        dispatch(getProjectsTitle(language))
    }, [])


    const handleGotoProject = (id) => {
        router.push(`/product/${id}`)
    }

    return (
        <>
            <header className={styles.header_container}>
                {width < 1025 ? (
                    <>
                        <Offcanvas />
                        <Image src={"/images/logo.svg"} width={70} height={33} alt="logo" />
                    </>
                ) : (
                    <>
                        <div className={styles.header_logo}>
                            <Image src={"/images/logo.svg"} width={70} height={33} alt="logo" />
                        </div>
                        <nav className={styles.header_menu}>
                            <Link
                                className={`${styles.header_link} ${isActive("/") && styles.active_route}`}
                                href="/"
                            >
                                {t("Home")}
                            </Link>
                            <li className={styles.header_items_wrapper}>
                                <div className={styles.header_dropdown}>
                                    <span className={styles.products_text}>{t("Products")}</span>
                                    <ExpandMoreIcon className={styles.icon_drop} />
                                </div>
                                <ul className={styles.drop}>
                                    {
                                        data &&
                                        data.length > 0 &&
                                        data.map(item => (
                                            <div
                                                key={item.id}
                                                className={`${styles.product_link}  ${language === "fa" && styles.right_product_link}`}
                                                onClick={() => handleGotoProject(item.id)}
                                            >
                                                {item.name}
                                            </div>
                                        ))
                                    }
                                </ul>
                            </li>
                            <Link
                                className={`${styles.header_link} ${isActive("/articles") && styles.active_route}`}
                                href="/articles"
                            >
                                {t("Articles")}
                            </Link>
                            <Link
                                className={`${styles.header_link} ${isActive("/aboutus") && styles.active_route}`}
                                href="/aboutus"
                            >
                                {t("AboutUs")}
                            </Link>
                            <Link
                                className={`${styles.header_link} ${isActive("/contactus") && styles.active_route}`}
                                href="/contactus"
                            >
                                {t("ContactUs")}
                            </Link>
                        </nav>
                        <div className={styles.header_actions}>
                            <div className={styles.header_wrap_btn_switch}>
                                <button
                                    className={`${styles.btn_switch} ${language === "en" && styles.active}`}
                                    onClick={() => changeLanguage("en")}
                                >
                                    En
                                </button>
                                <button
                                    className={`${styles.btn_switch} ${language === "fa" && styles.active}`}
                                    onClick={() => changeLanguage("fa")}
                                >
                                    Fa
                                </button>
                            </div>
                            <Button text={t("ContactUs")} icon={EastIcon} />
                        </div>
                    </>
                )}
            </header>
        </>
    );
}
