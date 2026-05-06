import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lead Magnet',
  description: 'Conversion landing page for email capture and gated delivery.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
