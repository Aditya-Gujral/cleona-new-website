import { ReactNode } from 'react';
import Head from 'next/head';

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <title>CLEONA</title>
        <meta name="description" content="A modern approach to health" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add other common meta tags and links here */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles/globals.css" />
      </Head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
