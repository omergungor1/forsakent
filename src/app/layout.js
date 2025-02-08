import "./globals.css";
import { Roboto } from "next/font/google";
import { LanguageProvider } from '../context/LanguageContext';

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

import ClientLayout from './client-layout';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logos/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <LanguageProvider>
          <ClientLayout>{children}</ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
