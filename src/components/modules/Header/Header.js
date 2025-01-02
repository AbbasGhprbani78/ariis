"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LangContext";
import Offcanvas from "../Offcanvas/Offcanvas";
import useWindowWidth from "@/hook/WindowWidth";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import axios from "axios";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

export default function Header() {
  const [data, setData] = useState("");
  const pathname = usePathname();
  const { t } = useTranslation();
  const { changeLanguage, language } = useLanguage();
  const width = useWindowWidth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (width === undefined) {
    return null;
  }

  const isActive = (href) => pathname === href;

  const handleLanguageSwitch = (lang) => {
    if (pathname.startsWith("/articles/")) {
      router.push("/articles");
    }
    changeLanguage(lang);
  };

  useEffect(() => {
    const getProjectsTitle = async () => {
      const headers = {
        "Accept-Language": language,
      };
      try {
        setLoading(true);
        const resposne = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/home/get-all-project/`,
          {
            headers,
          }
        );
        if (resposne.status === 200) {
          setData(resposne.data);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getProjectsTitle();
  }, [language]);

  if (loading) return <Loading />;

  if (error) return <Error />;

  return (
    <>
      <header className={styles.header_container}>
        {width < 1025 ? (
          <>
            <Offcanvas data={data} />
            <Image src={"/images/g14.svg"} width={25} height={33} alt="logo" />
          </>
        ) : (
          <div className={styles.header_wrapper}>
            <div className={styles.section_one_header}>
              <nav className={styles.header_menu}>
                <div
                  className={`${styles.header_logo} ${
                    language === "en"
                      ? styles.header_link_left
                      : styles.header_link_right
                  }`}
                >
                  <Image
                    src={"/images/g14.svg"}
                    width={30}
                    height={33}
                    alt="logo"
                  />
                </div>
                <Link
                  className={`${styles.header_link} 
                                    ${
                                      language === "en"
                                        ? styles.header_link_left
                                        : styles.header_link_right
                                    }
                                     ${isActive("/") && styles.active_route}`}
                  href="/"
                >
                  {t("Home")}
                </Link>
                <li
                  className={`${styles.header_items_wrapper}
                                 ${
                                   language === "en"
                                     ? styles.header_link_left
                                     : styles.header_link_right
                                 }`}
                >
                  <div className={styles.header_dropdown}>
                    <span className={styles.products_text}>
                      {t("Products")}
                    </span>
                    <ExpandMoreIcon className={styles.icon_drop} />
                  </div>
                  <ul
                    className={`${styles.dropDown} ${
                      language === "en"
                        ? styles.dropDown_en
                        : styles.dropDown_fa
                    }`}
                  >
                    {data?.product_nobin && (
                      <li className={styles.dropDown_item}>
                        {t("nobinp")}
                        <ul
                          className={`${styles.subMenu} ${
                            language === "en"
                              ? styles.subMenu_en
                              : styles.subMenu_fa
                          }`}
                        >
                          {data.product_nobin.map((product) => (
                            <li
                              className={styles.subMenu_item}
                              key={product.id}
                            >
                              <Link
                                href={`/product/${product.id}`}
                                className={styles.link_dropDown}
                              >
                                {language === "en"
                                  ? product.name
                                  : product.name_farsi}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    )}
                    {data?.product_custom && (
                      <li className={styles.dropDown_item}>
                        {t("customp")}
                        <ul
                          className={`${styles.subMenu} ${
                            language === "en"
                              ? styles.subMenu_en
                              : styles.subMenu_fa
                          }`}
                        >
                          {data?.product_custom.map((product) => (
                            <li
                              className={styles.subMenu_item}
                              key={product.id}
                            >
                              <Link
                                href={`/product/${product.id}`}
                                className={styles.link_dropDown}
                              >
                                {language === "en"
                                  ? product.name
                                  : product.name_farsi}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    )}
                  </ul>
                </li>
                <Link
                  className={`${styles.header_link}
                                     ${
                                       language === "en"
                                         ? styles.header_link_left
                                         : styles.header_link_right
                                     } 
                                     ${
                                       isActive("/aboutus") &&
                                       styles.active_route
                                     }`}
                  href="/aboutus"
                >
                  {t("AboutUs")}
                </Link>
              </nav>
            </div>
            <div className={styles.header_actions}>
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
              {/* <Button text={t("ContactUs")} icon={EastIcon} /> */}
            </div>
          </div>
        )}
      </header>
    </>
  );
}

{
  /* <Link
                    className={`${styles.header_link}
                                     ${
                                       language === "en"
                                         ? styles.header_link_left
                                         : styles.header_link_right
                                     }
                                      ${
                                        isActive("/contactus") &&
                                        styles.active_route
                                      }`}
                    href="/contactus"
                  >
                    {t("ContactUs")}
                  </Link> */
}

{
  /* <Link
                  className={`${styles.header_link}
                                     ${
                                       language === "en"
                                         ? styles.header_link_left
                                         : styles.header_link_right
                                     }
                                      ${
                                        isActive("/articles") &&
                                        styles.active_route
                                      }`}
                  href="/articles"
                >
                  {t("Articles")}
                </Link> */
}
//product_nobin

//product_nobin
