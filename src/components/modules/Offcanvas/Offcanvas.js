"use client"
import React, { useEffect, useState } from 'react'
import styles from './Offcanvas.module.css'
import { Drawer, List, ListItemButton, Collapse, IconButton } from '@mui/material';
import { Menu as MenuIcon, ExpandLess, ExpandMore, Close as CloseIcon } from '@mui/icons-material';
import Link from 'next/link';
import { useLanguage } from '@/context/LangContext'
import { useTranslation } from 'react-i18next';
import EastIcon from '@mui/icons-material/East';
import Button from '../Button/Button';
import { usePathname } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";
import { getProjectsTitle } from "@/redux/header";
import { useRouter } from "next/navigation";

export default function Offcanvas() {

    const pathname = usePathname();
    const dispatch = useDispatch()
    const { data, loading, error } = useSelector((state) => state.header);
    const { t } = useTranslation()
    const { changeLanguage, language } = useLanguage()
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const handleDropdownToggle = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLanguageSwitch = (lang) => {
        if (pathname.startsWith("/articles/")) {
            router.push("/articles")
        }
        changeLanguage(lang);
    };

    const isActive = (href) => pathname === href;

    useEffect(() => {
        dispatch(getProjectsTitle(language))
    }, [])


    return (
        <div className={styles.offcanvas_container}>
            <IconButton onClick={handleDrawerToggle} sx={{
                padding: "0"
            }}>
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor={language === "fa" ? "right" : "left"}
                open={open}
                onClose={handleDrawerToggle}
                sx={{
                    width: 250,
                    '& .MuiDrawer-paper': { width: 250 }
                }}
            >
                <List sx={{ padding: "10px" }}>
                    <ListItemButton className={`${styles.link_item} ${isActive("/") && styles.active_route}`} sx={{
                        padding: ".8rem 0",
                        marginTop: "1rem"
                    }}>
                        <Link className={styles.link_offcanvas} href={"/"}>{t("Home")}</Link>
                    </ListItemButton>
                    <ListItemButton className={`${styles.link_item}`} onClick={handleDropdownToggle} sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: ".8rem 0",
                        marginTop: "1rem"
                    }}>
                        <li className={styles.products_wrapper}>{t("Products")}</li>
                        {dropdownOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={dropdownOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {
                                data &&
                                data.length > 0 &&
                                data.map(item => (
                                    <ListItemButton key={item.id} sx={{ pl: 4, padding: ".8rem 0", marginTop: "1rem" }} className={`${styles.link_item} `}>
                                        <Link className={styles.link_offcanvas} href={`/product/${item.id}`}>{item?.name}</Link>
                                    </ListItemButton>
                                ))
                            }
                        </List>
                    </Collapse>
                    <ListItemButton className={`${styles.link_item} ${isActive("/articles") && styles.active_route}`} sx={{
                        padding: ".8rem 0",
                        marginTop: "1rem"
                    }}>
                        <Link className={styles.link_offcanvas} href={"/articles"}>{t("Articles")}</Link>
                    </ListItemButton>
                    <ListItemButton className={`${styles.link_item} ${isActive("/aboutus") && styles.active_route}`} sx={{
                        padding: ".8rem 0",
                        marginTop: "1rem"
                    }}>
                        <Link className={styles.link_offcanvas} href={"/aboutus"}>{t("AboutUs")}</Link>
                    </ListItemButton>
                    <ListItemButton className={`${styles.link_item} ${isActive("/contactus") && styles.active_route}`} sx={{
                        padding: ".8rem 0",
                        marginTop: "1rem"
                    }}>
                        <Link className={styles.link_offcanvas} href={"/contactus"}>{t("ContactUs")}</Link>
                    </ListItemButton>
                    <div className={styles.header_wrap_btn_switch}>
                        <button className={`${styles.btn_switch} ${language === "en" && styles.active}`} onClick={() => handleLanguageSwitch("en")}>En</button>
                        <button className={`${styles.btn_switch} ${language === "fa" && styles.active}`} onClick={() => handleLanguageSwitch("fa")}>Fa</button>
                    </div>
                    <div className={styles.btn_wrappper}>
                        <Button text={t('ContactUs')} icon={EastIcon} />
                    </div>
                </List>
            </Drawer>
        </div>
    )
}
