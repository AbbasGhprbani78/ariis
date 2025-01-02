"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import HeaderHome from "./HeaderHome/HeaderHome";
import Info from "./Info/Info";
import Products from "./Products/Products";
import Coustomers from "./Coustomers/Coustomers";
import Brands from "./Brands/Brands";
import Slider from "./Slider/Slider";
import { useLanguage } from "@/context/LangContext";
import Loading from "@/components/modules/Loading/Loading";
import Error from "@/components/modules/Error/Error";

export default function Home() {
  const { language } = useLanguage();
  const [headerData, setHeaderData] = useState({});
  const [infoData, setInfoData] = useState({});
  const [productsData, setProductsData] = useState({});
  const [customersData, setCustomersData] = useState({});
  const [logos, setLogos] = useState([]);
  const [slidesData, setSlidersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDataHome = async () => {
      const headers = {
        "Accept-Language": language,
      };
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/home/home-page/`,
          {
            headers,
          }
        );
        if (response.status === 200) {
          const data = response.data;
          setHeaderData({
            sidebar_image_one_text: data.sidebar_image_one_text,
            sidebar_image_two_text: data.sidebar_image_two_text,
            sidebar_image_three_text: data.sidebar_image_three_text,
            sidebar_image_four_text: data.sidebar_image_four_text,
            sidebar_image_one: data.sidebar_image_one,
            sidebar_image_two: data.sidebar_image_two,
            sidebar_image_three: data.sidebar_image_three,
            sidebar_image_four: data.sidebar_image_four,
            sidebar_image_mobile_one: data.sidebar_image_mobile_one,
            sidebar_image_mobile_two: data.sidebar_image_mobile_two,
            sidebar_image_mobile_three: data.sidebar_image_mobile_three,
            sidebar_image_mobile_four: data.sidebar_image_mobile_four,
          });
          setInfoData({
            title_image_one: data.title_image_one,
            text_image_one: data.text_image_one,
            info_image_one: data.info_image_one,
            info_image_two: data.info_image_two,
            info_image_three: data.info_image_three,
            info_image_four: data.info_image_four,
          });

          setProductsData({
            image_two: data.image_two,
            title_image_two: data.title_image_two,
            text_image_two: data.text_image_two,
            image_three: data.image_three,
            title_image_three: data.title_image_three,
            text_image_three: data.text_image_three,
            image_four: data.image_four,
            title_image_four: data.title_image_four,
            text_image_four: data.text_image_four,
            image_five: data.image_five,
            title_image_five: data.title_image_five,
            text_image_five: data.text_image_five,
          });
          setCustomersData({
            video_one: data.video_one,
            video_two: data.video_two,
            video_three: data.video_three,
            video_four: data.video_four,
          });

          setLogos(response.data.logo);
          setSlidersData(response.data.projects);
          
        }
      } catch (error) {
        setError(true);

      }finally{
        setLoading(false)
      }
    };

    getDataHome();
  }, [language]);

  if (loading) return <Loading />;

  if (error) return <Error />;

  return (
    <>
      <HeaderHome headerData={headerData} />
      <Info infoData={infoData} />
      <Products productsData={productsData} />
      <Coustomers customersData={customersData} />
      <Brands logos={logos} />
      <Slider slidesData={slidesData} />
    </>
  );
}
