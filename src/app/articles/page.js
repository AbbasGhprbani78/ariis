import React from 'react'
import Header from '@/components/modules/Header/Header'
import Footer from '@/components/modules/Footer/Footer'
import TopArticle from '@/components/templates/Articles/TopArticle/TopArticle'
import styles from './Articles.module.css'

export default function page() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <TopArticle />
            </div>
        </>

    )
}
