// app/layout.tsx or app/layout.js (depending on your setup)

import { ReactNode } from 'react';
import './globals.css'; // Import your global styles directly

export const metadata = {
  title: 'CLEONA',
  description: 'A modern approach to health',
  viewport: 'width=device-width, initial-scale=1',
  // Add other metadata here
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
