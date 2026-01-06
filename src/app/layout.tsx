import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/contexts/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Aurelia Market - Professionell E-handel',
    template: '%s | Aurelia Market'
  },
  description: 'En modern och säker e-handelsplattform med exklusiva produkter av högsta kvalitet. Säkra betalningar via Stripe med Visa, Mastercard, PayPal och Klarna.',
  keywords: ['e-handel', 'webshop', 'online shopping', 'exklusiva produkter', 'säkra betalningar'],
  authors: [{ name: 'Aurelia Market' }],
  creator: 'Aurelia Market',
  publisher: 'Aurelia Market',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Aurelia Market - Professionell E-handel',
    description: 'En modern och säker e-handelsplattform med exklusiva produkter',
    url: '/',
    siteName: 'Aurelia Market',
    locale: 'sv_SE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <head>
        <meta name="theme-color" content="#eab308" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
