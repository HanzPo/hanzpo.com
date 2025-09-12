import type { Metadata } from "next";
import "./globals.css";
import Image from 'next/image';
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
  title: "hey, i'm hanz",
  description: "i'm a computer science student at the university of waterloo with an interest in building useful, scaleable, and beautiful software. i also enjoy learning about finance, urban planning, and languages in my spare time.",
  openGraph: {
    title: "hey, i'm hanz",
    description: "i'm a computer science student at the university of waterloo with an interest in building useful, scaleable, and beautiful software. i also enjoy learning about finance, urban planning, and languages in my spare time.",
    url: "https://hanzpo.com",
    siteName: "hanz po",
    images: "/opengraph-image",
    type: "website",
  },
  twitter: {
    images: "/opengraph-image",
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
        <footer className="py-8 flex justify-center">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <a href='https://cs.uwatering.com/#https://hanzpo.com?nav=prev' aria-label="Previous site in CS Webring">←</a>
            <a href='https://cs.uwatering.com/#https://hanzpo.com' target='_blank' rel="noopener noreferrer" aria-label="CS Webring">
              <Image
                src='https://cs.uwatering.com/icon.white.svg'
                alt='CS Webring'
                width={24}
                height={24}
                style={{ opacity: 0.8 }}
              />
            </a>
            <a href='https://cs.uwatering.com/#https://hanzpo.com?nav=next' aria-label="Next site in CS Webring">→</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
