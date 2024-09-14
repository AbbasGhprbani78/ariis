import React from 'react'
import styles from './Input.module.css'
export default function Input({ name, value, onChnage, placeholder }) {
    return (
        <>
            <div className={styles.input_wrapper}>
                <input
                    type="text"
                    name={name}
                    value={value}
                    onChange={onChnage}
                    placeholder={placeholder}
                    className={styles.input}
                />
            </div>
        </>
    )
}
