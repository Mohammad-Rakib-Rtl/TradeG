import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TradeG | Viral Brand Growth',
  description: 'TradeG helps brands go viral with world-class social content and distribution.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
