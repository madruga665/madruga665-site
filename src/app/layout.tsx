'use client';
import { Poppins } from 'next/font/google';
import ParticlesBackground from '@/components/ParticlesBackground/ParticlesBackground';
import { TelemetryProvider } from '@/components/Telemetry';
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
        <TelemetryProvider>{children}</TelemetryProvider>
      </body>
    </html>
  );
}

export const dynamic = 'force-dynamic';
export default RootLayout;
