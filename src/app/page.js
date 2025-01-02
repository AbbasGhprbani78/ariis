import styles from "./page.module.css";
import Home from "@/components/templates/Home/Home";

export const metadata = {
  title: "Nobinco",
  openGraph: {
    title: "Nobinco",
    description:
      "Explore Nobinco for the best products and services in the market.",
    url: "https://nobinco.com",
    metadataBase: new URL("https://nobinco.com"),
    siteName: "Nobinco",
    creator: "Nobinco.com",
    images: [
      {
        url: "/images/g14.svg",
        width: 800,
        height: 600,
      },
    ],

    locale: "fa_IR",
    type: "website", 
  },
};

export default function Page() {
  return (
    <div className={styles.container}>
      <Home/>
    </div>
  );
}

