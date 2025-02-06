'use client';

import { Layout } from "../components";
import Contact from "../components/contact";
import { LanguageProvider } from "../context/LanguageContext";
import { Navbar, Footer } from "../components";
import { ThemeProvider } from "@material-tailwind/react";

export default function ClientLayout({ children }) {
  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
          <Layout>
            <Navbar />
            {children}
            <Footer />
          </Layout>
        </LanguageProvider>
      </ThemeProvider>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <Contact />
    </>
  );
} 