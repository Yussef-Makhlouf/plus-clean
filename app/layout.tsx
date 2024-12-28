import './globals.css'
import { Tajawal } from 'next/font/google'

const tajawal = Tajawal({ subsets: ['arabic'], weight: ['400', '700'] })

export const metadata = {
  title: 'شركة النظافة العصرية - خدمات تنظيف احترافية',
  description: 'نقدم خدمات تنظيف عالية الجودة للمنازل والمكاتب والشركات. تجربة تنظيف فريدة مع ضمان رضا العملاء.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawal.className}>{children}</body>
    </html>
  )
}

