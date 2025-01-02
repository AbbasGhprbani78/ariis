import React from "react";
import Section1 from "@/components/templates/About Us/Section1/Section1";
import OurTeam from "@/components/templates/About Us/OurTeam/OurTeam";
import Memebers from "@/components/templates/About Us/Members/Memebers";
import styles from "./aboutus.module.css";
export default function page() {
  return (
    <>
      <div className={styles.container}>
        <Section1 />
        <OurTeam />
        <Memebers />
      </div>
    </>
  );
}
