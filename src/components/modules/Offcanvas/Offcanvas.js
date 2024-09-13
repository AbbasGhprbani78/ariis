"use client"
import React, { useState } from 'react'
import styles from './Offcanvas.module.css'
import { Drawer, List, ListItemButton, Collapse, IconButton } from '@mui/material';
import { Menu as MenuIcon, ExpandLess, ExpandMore, Close as CloseIcon } from '@mui/icons-material';
import Link from 'next/link';
import { useLanguage } from '@/context/LangContext'
import { useTranslation } from 'react-i18next';
import EastIcon from '@mui/icons-material/East';
import Button from '../Button/Button';


export default function Offcanvas() {

    const { t } = useTranslation()
    const { changeLanguage, language } = useLanguage()

    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const handleDropdownToggle = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className={styles.offcanvas_container}>
            <IconButton onClick={handleDrawerToggle} sx={{
                padding: "0"
            }}>
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor="left"
                open={open}
                onClose={handleDrawerToggle}
                sx={{
                    width: 250,
                    '& .MuiDrawer-paper': { width: 250 }
                }}
            >
                <List sx={{ padding: "10px" }}>
                    <ListItemButton>
                        <Link className={styles.link_offcanvas} href={""}>{t("Home")}</Link>
                    </ListItemButton>
                    <ListItemButton onClick={handleDropdownToggle} sx={{
                        marginTop: "1.6rem",
                        display: "flex",
                        justifyContent: "space-between"

                    }}>
                        <li className={styles.products_wrapper}>{t("Products")}</li>
                        {dropdownOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={dropdownOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <Link className={styles.link_offcanvas} href={""}>Snap Report</Link>
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <Link className={styles.link_offcanvas} href={""}>ToPet</Link>
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <Link className={styles.link_offcanvas} href={""} >Opermate</Link>
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <Link className={styles.link_offcanvas} href={""}>Farm Flow</Link>
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <Link className={styles.link_offcanvas} href={""}>Edupia</Link>
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton>
                        <Link className={styles.link_offcanvas} href={""}>{t("Articles")}</Link>
                    </ListItemButton>
                    <ListItemButton>
                        <Link className={styles.link_offcanvas} href={""}>{t("AboutUs")}</Link>
                    </ListItemButton>
                    <ListItemButton>
                        <Link className={styles.link_offcanvas} href={""}>{t("ContactUs")}</Link>
                    </ListItemButton>
                    <div className={styles.header_wrap_btn_switch}>
                        <button className={`${styles.btn_switch} ${language === "en" && styles.active}`} onClick={() => changeLanguage('en')}>En</button>
                        <button className={`${styles.btn_switch} ${language === "fa" && styles.active}`} onClick={() => changeLanguage('fa')}>Fa</button>
                    </div>
                    <div className={styles.btn_wrappper}>
                        <Button text={t('ContactUs')} icon={EastIcon} />
                    </div>
                </List>
            </Drawer>
        </div>
    )
}
