'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import i18n from '@/i18n';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en'); 

    useEffect(() => {
        const storedLanguage = localStorage.getItem('language') || 'en';
        setLanguage(storedLanguage);
        i18n.changeLanguage(storedLanguage); 
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
            .then(() => {
                setLanguage(lng);
                localStorage.setItem('language', lng);
            })
            .catch((error) => console.error('Language change failed:', error));
    };

    useEffect(() => {
        document.body.className = language === 'fa' ? 'fa_language' : '';
        
    }, [language]);
    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};


export const useLanguage = () => {
    return useContext(LanguageContext);
};
