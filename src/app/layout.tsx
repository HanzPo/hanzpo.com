import type { Metadata } from "next";
import "./globals.css";
import { Crimson_Pro, Lora } from 'next/font/google';

const crimsonPro = Crimson_Pro({ 
  subsets: ['latin'],
  variable: '--font-crimson-pro',
});

const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-lora',
});

export const metadata: Metadata = {
  title: "hanz po",
  description: "hanz's personal website",
  openGraph: {
    title: "hanz po",
    description: "hanz's personal website",
    url: "https://hanzpo.com",
    siteName: "hanz po",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "hanz po",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${crimsonPro.className} ${lora.className} background-image text-gray-200`}>
        {children}
      </body>
    </html>
  );
}
