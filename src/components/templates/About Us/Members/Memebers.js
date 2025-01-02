"use client";
import React from "react";
import styles from "./Members.module.css";
import MemeberItem from "@/components/modules/MemeberItem/MemeberItem";
import { useLanguage } from "@/context/LangContext";
import Loading from "@/components/modules/Loading/Loading";
import Error from "@/components/modules/Error/Error";

export default function Memebers() {
  const { employees, loading, error } = useLanguage();

  if (loading) return <Loading />;

  if (error) return <Error />;
  return (
    <div className={styles.member_wrapper}>
      {employees &&
        employees.length > 0 &&
        employees.map((member, i) => (
          <div className={styles.member_wrapper} key={i}>
            <MemeberItem member={member} />
          </div>
        ))}
    </div>
  );
}
