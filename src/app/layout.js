import "./globals.css";
import I18nProvider from "@/utils/I18NextProvaider";
import { LanguageProvider } from "@/context/LangContext";
import Header from "@/components/modules/Header/Header";
import Footer from "@/components/modules/Footer/Footer";

export const metadata = {
  title: "Nobinco",
  description: "",
  icons: {
    icon: "/images/g14.svg",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>
          <LanguageProvider>     
              <main>
                <Header />
                {children}
                <Footer />
              </main>
          </LanguageProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
