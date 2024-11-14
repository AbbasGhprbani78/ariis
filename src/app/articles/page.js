import React from 'react'

import TopArticle from '@/components/templates/Articles/TopArticle/TopArticle'
import styles from './Articles.module.css'
import AllArticles from '@/components/templates/Articles/AllArticles/AllArticles'

export default function Page() {


    return (
                <div className={styles.content}>
                    <TopArticle />
                    <AllArticles />
                </div>
    )
}
