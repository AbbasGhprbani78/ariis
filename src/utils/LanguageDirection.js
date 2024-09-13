'use client';

import { useEffect } from 'react';
import i18n from '@/i18n';

export default function LanguageDirection() {

    

    useEffect(() => {
        const handleLanguageChange = (lang) => {
            if (lang === 'fa') {
                document.documentElement.classList.add('fa_language');
            } else {
                document.documentElement.classList.remove('fa_language');
            }
        };


        handleLanguageChange(i18n.language);


        i18n.on('languageChanged', handleLanguageChange);

        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, []);

    return null;
}
