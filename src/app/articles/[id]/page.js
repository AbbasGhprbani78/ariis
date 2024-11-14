import React from 'react'
import Article from '@/components/templates/Articles/Article/Article'
import styles from './MainArticle.module.css'
import Comments from '@/components/templates/Articles/Comments/Comments'
export default function mainArticle({ params }) {
    const idArticle = params.id

    return (
            <div className={styles.container}>
                <Article id={idArticle} />
                <Comments id={idArticle} />
            </div>
    )
}
