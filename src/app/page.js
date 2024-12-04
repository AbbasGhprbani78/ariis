import HeaderHome from "@/components/templates/Home/HeaderHome/HeaderHome";
import Info from "@/components/templates/Home/Info/Info";
import Products from "@/components/templates/Home/Products/Products";
import Slider from "@/components/templates/Home/Slider/Slider";
import ContactUs from "@/components/templates/Home/ContactUs/ContactUs";
import Brands from "@/components/templates/Home/Brands/Brands";
import styles from "./page.module.css";
import Coustomers from "@/components/templates/Home/Coustomers/Coustomers";

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

    locale: "fa_IR", // "fa_IR"
    type: "website", // "article"
  },
};

export default function Home() {
  return (
    <div className={styles.container}>
      <HeaderHome />
      <Info />
      <Products />
      <Coustomers />
      <Brands />
      <Slider />
    </div>
  );
}

{
  /*<ContactUs /> */
}
