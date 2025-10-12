import './globals.css';
import type { Metadata } from 'next';
import Header from './_components/header/Header';
import Footer from './_components/footer/Footer';

export const metadata: Metadata = {
  title: 'SigmaRemote',
  description: 'Global payroll made simple.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black antialiased">
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
