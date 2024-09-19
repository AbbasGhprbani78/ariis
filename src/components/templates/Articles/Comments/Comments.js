import React from 'react'
import styles from './Comments.module.css'
import CommentItem from '@/components/modules/CommentItem/CommentItem'

export default function Comments() {
    return (
        <div className={styles.comment_wrapper}>
            <p className={styles.comment_title}>Comments</p>
            <div className={styles.comment_container}>
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
            </div>
        </div>
    )
}
