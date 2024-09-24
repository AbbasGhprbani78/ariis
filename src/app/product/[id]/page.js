"use client"
import Footer from '@/components/modules/Footer/Footer';
import Header from '@/components/modules/Header/Header';
import React, { useEffect } from 'react';
import Section1 from '@/components/templates/Product/Section1/Section1';
import Section2 from '@/components/templates/Product/Section2/Section2';
import Section3 from '@/components/templates/Product/Section3/Section3';
import Section4 from '@/components/templates/Product/Section4/Section4';
import Section5 from '@/components/templates/Product/Section5/Section5';
import Section6 from '@/components/templates/Product/Section6/Section6';
import { useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { useLanguage } from '@/context/LangContext';
import { getProjectData } from '@/redux/product';
import Loading from '@/components/modules/Loading/Loading';

export default function ProductPage() {
    const { id } = useParams();
    const { language } = useLanguage()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProjectData({ language, id }));
    }, [language, id]);


    const { data, loading, error } = useSelector((state) => state.product);

    console.log(data)

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Header />
            <Section1 img={data?.logo} title={data?.title} />
            <Section2 img={data?.image_one} />
            <Section3 technology={data?.technology} about={data?.about} />
            <Section4 data={data} />
            <Section5 ability={data?.ability} img={data?.image_two} color={data?.color_ability} />
            <Section6 img={data?.image_three} />
            <Footer />
        </>
    );
}
