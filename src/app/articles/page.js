import React from 'react'
import Header from '@/components/modules/Header/Header'
import Footer from '@/components/modules/Footer/Footer'
import TopArticle from '@/components/templates/Articles/TopArticle/TopArticle'
import styles from './Articles.module.css'
import AllArticles from '@/components/templates/Articles/AllArticles/AllArticles'

export default function Page() {

  
    return (
        <>
            <div className={styles.pageContainer}>
                <Header />
                <div className={styles.content}>
                    <TopArticle />
                    <AllArticles />
                </div>
                <Footer />
            </div>
        </>
    )
}
