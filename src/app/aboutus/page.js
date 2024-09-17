import React from 'react'
import Header from '@/components/modules/Header/Header'
import Section1 from '@/components/templates/About Us/Section1/Section1'
import OurTeam from '@/components/templates/About Us/OurTeam/OurTeam'
import Memebers from '@/components/templates/About Us/Members/Memebers'
import Footer from '@/components/modules/Footer/Footer'
import Slider from '@/components/templates/About Us/Slider/Slider'

export default function page() {
    return (
        <>
            <Header />
            <Section1 />
             <OurTeam /> 
            <Memebers />
            <Slider />
            <Footer />
        </>
    )
}
