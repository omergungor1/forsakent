import "./globals.css";
import { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout } from "../components";
import Contact from "../components/contact";
import { LanguageProvider } from "../context/LanguageContext";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: "Forsa Peyzaj Çözümleri",
  description:
    "Forsa Peyzaj Çözümleri olarak, peyzaj sektöründe hizmet veren bir firma olarak, peyzaj projelerinizde profesyonel çözümler sunuyoruz.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logos/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <LanguageProvider>
          <Layout>
            {children}
          </Layout>
        </LanguageProvider>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <Contact />
      </body>
    </html>
  );
}
