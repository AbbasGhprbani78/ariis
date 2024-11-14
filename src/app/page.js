
import HeaderHome from "@/components/templates/Home/HeaderHome/HeaderHome";
import Info from "@/components/templates/Home/Info/Info";
import Products from "@/components/templates/Home/Products/Products";
import Slider from "@/components/templates/Home/Slider/Slider";
import ContactUs from "@/components/templates/Home/ContactUs/ContactUs";
import Coustomers from "@/components/templates/Home/Coustomers/Coustomers";


export default function Home() {

  return (
    <>
      <HeaderHome />
      <Info />
      <Products />
      <Coustomers />
      <Slider />
      <ContactUs />
    </>
  );
}
