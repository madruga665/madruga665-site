'use client';
import { Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import ParticlesBackground from '@/components/ParticlesBackground/ParticlesBackground';
import '../styles/global.scss';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '800'],
});

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ParticlesBackground />
        {children}
      </body>
      <Analytics />
    </html>
  );
}

export const dynamic = 'force-dynamic';
export default RootLayout;
