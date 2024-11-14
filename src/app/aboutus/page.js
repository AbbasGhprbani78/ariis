import React from 'react'
import Section1 from '@/components/templates/About Us/Section1/Section1'
import OurTeam from '@/components/templates/About Us/OurTeam/OurTeam'
import Memebers from '@/components/templates/About Us/Members/Memebers'
import Slider from '@/components/templates/About Us/Slider/Slider'

export default function page() {
    return (
        <>
            <Section1 />
            <OurTeam />
            <Memebers />
            <Slider />
        </>
    )
}
