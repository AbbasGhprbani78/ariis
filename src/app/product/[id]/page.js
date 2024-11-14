
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
           
            <Section1 />
            <Section2 />
            <Section3 id={idProduct}/>
            <Section4 />
            <Section5 />
            <Section6 />
            
        </>
    );
}
