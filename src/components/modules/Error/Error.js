"use client";
import React, { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import styles from './Error.module.css';
import { useTranslation } from 'react-i18next';

export default function Error() {

    const [refresh, setRefresh] = useState(false);
    const { t } = useTranslation("")

    useEffect(() => {
        if (refresh) {
            window.location.reload();
        }
    }, [refresh]);

    return (
        <div className={styles.error}>
            <Stack>
                <Alert variant="filled" severity="error">
                    {t("Error")}
                </Alert>
            </Stack>
            <button onClick={() => setRefresh(true)} className={styles.btn}>
                {t("TryAgain")}
                
            </button>
        </div>
    );
}
