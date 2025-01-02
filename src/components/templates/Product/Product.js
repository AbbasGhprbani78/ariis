"use client";
import React, { useState } from "react";
import styles from "./pordcut.module.css";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
import Section6 from "./Section6/Section6";
import { useLanguage } from "@/context/LangContext";
import { useEffect } from "react";
import axios from "axios";
import Loading from "@/components/modules/Loading/Loading";
import Error from "@/components/modules/Error/Error";

export default function Product({ id }) {
  const { language } = useLanguage();
  const [data, SetData] = useState({});
  const [section4Data, setSection4Data] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProductData = async () => {
      try {
        setLoading(true);
        const headers = {
          "Accept-Language": language,
        };
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/home/project-detail/${id}`,
          {
            headers,
          }
        );

        if (response.status === 200) {
          SetData(response.data);
          setSection4Data({
            how_it_work: response.data.how_it_work,
            image_two_work: response.data.image_two_work,
            image_three_work: response.data.image_three_work,
            image_four_work: response.data.image_four_work,
            image_five_work: response.data.image_five_work,
            image_one_work: response.data.image_one_work,
          });
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getProductData();
  }, [language, id]);

  if (loading) return <Loading />;

  if (error) return <Error />;

  return (
    <>
      <div className={styles.container}>
        <Section1 logo={data.logo} title={data.title} />
      </div>
      <Section2 image={data.image_one} />
      <div className={styles.container}>
        <Section3 about={data.about} technology={data.technology} />
        <Section4 section4Data={section4Data} />
      </div>
      <Section5
        image_two={data.image_two}
        ability={data.ability}
        color_ability={data.color_ability}
      />
      <Section6 image={data.image_three} />
    </>
  );
}
