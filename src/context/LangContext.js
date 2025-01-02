"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import i18n from "@/i18n";
import axios from "axios";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fa");
  const [aboutUsSection1Data, setAboutUsSection1Data] = useState({});
  const [ourTeamData, setOurTeamData] = useState({});
  const [employees, setEmployees] = useState([]);
  const [comments, setComments] = useState([]);
  const [ip, setIp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAboutusData = async () => {
    const headers = {
      "Accept-Language": language,
    };
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/home/about-page/`,
        { headers }
      );

      if (response.status === 200) {
        setAboutUsSection1Data({
          text_image_one: response.data?.text_image_one,
          image_one: response.data?.image_one,
          text_image_two: response.data?.text_image_two,
          image_two: response.data?.image_two,
          text_image_three: response.data?.text_image_three,
          image_three: response.data?.image_three,
          text_image_four: response.data?.text_image_four,
          image_four: response.data?.image_four,
          about_video: response.data?.about_video,
          main_text: response.data?.main_text,
        });

        setOurTeamData({
          our_team_text: response.data?.our_team_text,
          year_founded: response.data?.year_founded,
          experience: response.data?.experience,
          number_of_projects: response.data?.number_of_projects,
          satisfaction_level: response.data?.satisfaction_level,
          number_of_cooperation_with_other_countries:
            response.data?.number_of_cooperation_with_other_countries,
          point: response.data?.point,
        });

        setEmployees(response.data?.employees);

        setComments(response.data?.customer_comment);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const getIp = async () => {
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      if (response.status === 200) {
        setIp(response.data.ip);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "fa";
    setLanguage(storedLanguage);
    i18n.changeLanguage(storedLanguage);
    getIp();
  }, []);

  const changeLanguage = (lng) => {
    i18n
      .changeLanguage(lng)
      .then(() => {
        setLanguage(lng);
        localStorage.setItem("language", lng);
      })
      .catch((error) => console.error("Language change failed:", error));
  };

  useEffect(() => {
    document.body.className = language === "fa" ? "fa_language" : "";
    getAboutusData();
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        aboutUsSection1Data,
        ourTeamData,
        employees,
        comments,
        ip,
        loading,
        error
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
