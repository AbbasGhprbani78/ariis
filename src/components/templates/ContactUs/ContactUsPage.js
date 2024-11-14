"use client"
import React from 'react';
import ContactUs from '../Home/ContactUs/ContactUs';
import styles from './ContactUs.module.css';
import { useLanguage } from '@/context/LangContext';
import { Suspense } from 'react';
import Loading from '@/components/modules/Loading/Loading';

export default function () {

    const { language } = useLanguage();

    const mapSrc = language === "fa"
        ? "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d499.5226156160442!2d51.644824551484945!3d32.62285665182573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2s!4v1726648614394!5m2!1sfa!2s"
        : "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d499.5226156160442!2d51.644824551484945!3d32.62285665182573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1726648614394!5m2!1sen!2s";


    return (
        <>
            <div className={styles.wrap}>
                <ContactUs />
            </div>
            <div className={styles.map_wrapper}>
                <Suspense fallback={<div className={styles.loading}><Loading /></div>}>
                    <iframe
                        src={mapSrc}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className={styles.mapIframe}
                    ></iframe>
                </Suspense>
            </div>
        </>
    );
}
