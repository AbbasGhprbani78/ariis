import React from 'react'
import Article from '@/components/templates/Articles/Article/Article'
import Header from '@/components/modules/Header/Header'
import styles from './MainArticle.module.css'
import Footer from '@/components/modules/Footer/Footer'
import Comments from '@/components/templates/Articles/Comments/Comments'
export default function mainArticle() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <Article />
                <Comments />
                <Footer />
            </div>

        </>
    )
}