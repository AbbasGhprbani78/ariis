
import Footer from '@/components/modules/Footer/Footer';
import Header from '@/components/modules/Header/Header';
import React from 'react';
import Section1 from '@/components/templates/Product/Section1/Section1';
import Section2 from '@/components/templates/Product/Section2/Section2';
import Section3 from '@/components/templates/Product/Section3/Section3';
import Section4 from '@/components/templates/Product/Section4/Section4';
import Section5 from '@/components/templates/Product/Section5/Section5';
import Section6 from '@/components/templates/Product/Section6/Section6';

export default function ProductPage({ params }) {

    const idProduct = params.id


    return (
        <>
            <Header />
            <Section1 />
            <Section2 />
            <Section3 id={idProduct}/>
            <Section4 />
            <Section5 />
            <Section6 />
            <Footer />
        </>
    );
}
// img = { data?.logo } title = { data?.title }

// img = { data?.image_one }
// technology = { data?.technology } about = { data?.about }
// data = { data }
// ability = { data?.ability } img = { data?.image_two } color = { data?.color_ability }
// img = { data?.image_three }