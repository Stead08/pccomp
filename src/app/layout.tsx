import "./globals.css";
import {Inter} from "next/font/google";
import Header from "@/app/components/Header";
import {Providers} from "@/app/providers";
import Footer from "@/app/components/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "自作PC構成 by Stead08",
  description: "自作PCの構成表を楽天市場の商品から手軽に作成できます。",
  openGraph: {
    title: "自作PC構成 by Stead08",
    description: "自作PCの構成表を楽天市場の商品から手軽に作成できます。",
    type: "website",
    url: "https://pccomp.vercel.app/",
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: "自作PC構成 by Stead08",
    description: "自作PCの構成表を楽天市場の商品から手軽に作成できます。",
    site: '@Stead08_',
    creator: '@Stead08_',
  },
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
