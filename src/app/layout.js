import "./globals.css";
import I18nProvider from "@/utils/I18NextProvaider";
import { LanguageProvider } from "@/context/LangContext";
import ReduxProvider from "@/redux/ReduxProvider";

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>
          <LanguageProvider>
            <ReduxProvider>
              <main>
                {children}
              </main>
            </ReduxProvider>
          </LanguageProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
