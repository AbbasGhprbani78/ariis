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
import { useRouter } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { changeLanguage, language } = useLanguage();
    const { data, loading, error } = useSelector((state) => state.header);
    const width = useWindowWidth();
    const router = useRouter();

    if (width === undefined) {
        return null;
    }

    const isActive = (href) => pathname === href;

    useEffect(() => {
        dispatch(getProjectsTitle(language));
    }, [dispatch, language]);


    const handleLanguageSwitch = (lang) => {
        if (pathname.startsWith("/articles/")) {
            router.push("/articles")
        }
        changeLanguage(lang);
    };

    return (
        <>
            <header className={styles.header_container}>
                {width < 1025 ? (
                    <>
                        <Offcanvas />
                        <Image src={"/images/g14.svg"} width={25} height={33} alt="logo" />
                    </>
                ) : (
                    <div className={styles.header_wrapper}>
                        <div className={styles.section_one_header}>        
                            <nav className={styles.header_menu}>
                                  <div className={`${styles.header_logo} ${language==="en" ?styles.header_link_left:styles.header_link_right}`}>
                                    <Image src={"/images/g14.svg"} width={30} height={33} alt="logo" />
                                </div> 
                                <Link
                                    className={`${styles.header_link} 
                                    ${language==="en" ?styles.header_link_left:styles.header_link_right}
                                     ${isActive("/") && styles.active_route}`}
                                    href="/"
                                >
                                    {t("Home")}
                                </Link>
                                <li className={`${styles.header_items_wrapper}
                                 ${language==="en" ?styles.header_link_left:styles.header_link_right}`}>
                                    <div className={styles.header_dropdown}>
                                        <span className={styles.products_text}>{t("Products")}</span>
                                        <ExpandMoreIcon className={styles.icon_drop} />
                                    </div>
                                    <ul className={styles.drop}>
                                        {data &&
                                            data.length > 0 &&
                                            data.map((item) => (
                                                <Link
                                                    key={item.id}
                                                    className={`${styles.product_link}  ${language === "fa" && styles.right_product_link}`}
                                                    href={`/product/${item.id}`}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                    </ul>
                                </li>
                                <Link
                                    className={`${styles.header_link}
                                     ${language==="en" ?styles.header_link_left:styles.header_link_right}
                                      ${isActive("/articles") && styles.active_route}`}
                                    href="/articles"
                                >
                                    {t("Articles")}
                                </Link>
                                <Link
                                    className={`${styles.header_link}
                                     ${language==="en" ?styles.header_link_left:styles.header_link_right} 
                                     ${isActive("/aboutus") && styles.active_route}`}
                                    href="/aboutus"
                                >
                                    {t("AboutUs")}
                                </Link>
                                <Link
                                    className={`${styles.header_link}
                                     ${language==="en" ?styles.header_link_left:styles.header_link_right}
                                      ${isActive("/contactus") && styles.active_route}`}
                                    href="/contactus"
                                >
                                    {t("ContactUs")}
                                </Link>
                            </nav>
                        </div>
                        <div className={styles.header_actions}>
                            <div className={styles.header_wrap_btn_switch}>
                                <button
                                    className={`${styles.btn_switch} ${language === "en" && styles.active}`}
                                    onClick={() => handleLanguageSwitch("en")}
                                >
                                    En
                                </button>
                                <button
                                    className={`${styles.btn_switch} ${language === "fa" && styles.active}`}
                                    onClick={() => handleLanguageSwitch("fa")}
                                >
                                    Fa
                                </button>
                            </div>
                            {/* <Button text={t("ContactUs")} icon={EastIcon} /> */}
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}


