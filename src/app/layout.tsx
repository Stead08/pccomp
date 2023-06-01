import "./globals.css";
import {Inter} from "next/font/google";
import Header from "@/app/components/Header";
import {Providers} from "@/app/providers";
import Footer from "@/app/components/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "自作PC構成 by Stead08",
  description: "自作PCの構成表を楽天市場の商品から手軽に作成できます。",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="ja">
      <body className={inter.className}>
      <Providers>
        <Header/>
        {children}
        <Footer/>
      </Providers>
      </body>
      </html>
  );
}
