"use client";
import React, { useEffect, useState } from "react";
import styles from "./Offcanvas.module.css";
import {
  Drawer,
  List,
  ListItemButton,
  Collapse,
  IconButton,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ExpandLess,
  ExpandMore,
  Close as CloseIcon,
} from "@mui/icons-material";
import Link from "next/link";
import { useLanguage } from "@/context/LangContext";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Offcanvas({ data }) {
  const pathname = usePathname();
  const { t } = useTranslation();
  const { changeLanguage, language } = useLanguage();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(true);
  const [subDropDown, setSubDropDown] = useState(false);
  const [subDropDown2, setSubDropDown2] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleSubDropdownToggle = () => {
    setSubDropDown(!subDropDown);
  };
  const handleSubDropdownToggle2 = () => {
    setSubDropDown2(!subDropDown2);
  };

  const handleLanguageSwitch = (lang) => {
    if (pathname.startsWith("/articles/")) {
      router.push("/articles");
    }
    changeLanguage(lang);
  };

  const isActive = (href) => pathname === href;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className={styles.offcanvas_container}>
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          padding: "0",
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={language === "fa" ? "right" : "left"}
        open={open}
        onClose={handleDrawerToggle}
        sx={{
          width: 250,
          "& .MuiDrawer-paper": { width: 250 },
        }}
      >
        <List sx={{ padding: "10px" }}>
          <ListItemButton
            className={`${styles.link_item} ${
              isActive("/") && styles.active_route
            }`}
            sx={{
              paddingTop: ".8rem",
              paddingBottom: ".8rem",
              marginTop: "1rem",
            }}
          >
            <Link className={styles.link_offcanvas} href={"/"}>
              {t("Home")}
            </Link>
          </ListItemButton>
          <Collapse in={dropdownOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {(data?.product_nobin || data?.product_custom) && (
                <>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingTop: ".8rem",
                      paddingBottom: ".8rem",
                      marginTop: "1rem",
                    }}
                    className={`${styles.link_item} `}
                    onClick={handleSubDropdownToggle}
                  >
                    {t("nobinp")}
                    {subDropDown ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={subDropDown} timeout="auto" unmountOnExit>
                    <List
                      component="div"
                      disablePadding
                      sx={
                        language === "en"
                          ? { marginLeft: "30px" }
                          : { marginRight: "30px" }
                      }
                    >
                      {data?.product_nobin.length > 0 &&
                        data.product_nobin.map((product) => (
                          <ListItemButton
                            sx={{
                              pl: 4,
                              paddingTop: ".8rem",
                              paddingBottom: ".8rem",
                              marginTop: "1rem",
                            }}
                            className={`${styles.link_item} `}
                            key={product.id}
                          >
                            <Link
                              className={styles.link_offcanvas}
                              href={`/product/${product.id}`}
                            >
                              {language === "en"
                                ? product.name
                                : product.name_farsi}
                            </Link>
                          </ListItemButton>
                        ))}
                    </List>
                  </Collapse>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingTop: ".8rem",
                      paddingBottom: ".8rem",
                      marginTop: "1rem",
                    }}
                    className={`${styles.link_item} `}
                    onClick={handleSubDropdownToggle2}
                  >
                    {t("customp")}
                    {subDropDown ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={subDropDown2} timeout="auto" unmountOnExit>
                    <List
                      component="div"
                      disablePadding
                      sx={
                        language === "en"
                          ? { marginLeft: "30px" }
                          : { marginRight: "30px" }
                      }
                    >
                      {data?.product_custom.length > 0 &&
                        data.product_custom.map((product) => (
                          <ListItemButton
                            sx={{
                              pl: 4,
                              paddingTop: ".8rem",
                              paddingBottom: ".8rem",
                              marginTop: "1rem",
                            }}
                            className={`${styles.link_item} `}
                            key={product.id}
                          >
                            <Link
                              className={styles.link_offcanvas}
                              href={`/product/${product.id}`}
                            >
                              {language === "en"
                                ? product.name
                                : product.name_farsi}
                            </Link>
                          </ListItemButton>
                        ))}
                    </List>
                  </Collapse>
                </>
              )}
            </List>
          </Collapse>
          <ListItemButton
            className={`${styles.link_item} ${
              isActive("/aboutus") && styles.active_route
            }`}
            sx={{
              paddingTop: ".8rem",
              paddingBottom: ".8rem",
              marginTop: "1rem",
            }}
          >
            <Link className={styles.link_offcanvas} href={"/aboutus"}>
              {t("AboutUs")}
            </Link>
          </ListItemButton>
          <div className={styles.header_wrap_btn_switch}>
            <button
              className={`${styles.btn_switch} ${
                language === "en" && styles.active
              }`}
              onClick={() => handleLanguageSwitch("en")}
            >
              En
            </button>
            <button
              className={`${styles.btn_switch} ${
                language === "fa" && styles.active
              }`}
              onClick={() => handleLanguageSwitch("fa")}
            >
              Fa
            </button>
          </div>
        </List>
      </Drawer>
    </div>
  );
}

{
  /* <ListItemButton
            className={`${styles.link_item} ${
              isActive("/contactus") && styles.active_route
            }`}
          >
            <Link className={styles.link_offcanvas} href={"/contactus"}>
              {t("ContactUs")}
            </Link>
          </ListItemButton> */
}

{
  /* <div className={styles.btn_wrappper}>
            <Button text={t("ContactUs")} icon={EastIcon} />
          </div> */
}

{
  /* <ListItemButton
            className={`${styles.link_item} ${
              isActive("/articles") && styles.active_route
            }`}
          >
            <Link className={styles.link_offcanvas} href={"/articles"}>
              {t("Articles")}
            </Link>
          </ListItemButton> */
}
{
  /* <ListItemButton
            className={`${styles.link_item}`}
            
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: ".8rem",
              paddingBottom: ".8rem",
              marginTop: "1rem",
            }}
          >
            <li className={styles.products_wrapper}>{t("Products")}</li>
          </ListItemButton> */
}
