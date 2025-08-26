import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'بوابة التوصيل اللوجيستية - Logistics Gateway',
  description: 'شركة رائدة في مجال الخدمات اللوجيستية والتوصيل',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-arabic">{children}</body>
    </html>
  );
}