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
  metadataBase: new URL('https://hanzpo.com'),
  title: "hanz po",
  description: "hanz's personal website",
  openGraph: {
    title: "hanz po",
    description: "hanz's personal website",
    url: "https://hanzpo.com",
    siteName: "hanz po",
    images: "/opengraph-image.png",
    type: "website",
  },
  twitter: {
    images: "/opengraph-image.png",
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
