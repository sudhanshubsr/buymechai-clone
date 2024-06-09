import { HeaderComponent } from '@/components/HeaderComponent';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Buy Me a Chai',
  icons: {
    icon: '/app/favicon.ico?v=2',
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className='pt-2 px-1'>
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
