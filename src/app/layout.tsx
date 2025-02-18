import type { Metadata } from "next";
import "./globals.css";
import { Crimson_Pro, Lora } from 'next/font/google';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const crimsonPro = Crimson_Pro({ 
  subsets: ['latin'],
  variable: '--font-crimson-pro',
});

const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-lora',
});

export const metadata: Metadata = {
  title: "Hanz Po",
  description: "Hanz Po's personal website",
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
