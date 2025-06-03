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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="شركة تنظيف, تنظيف منازل, تنظيف مكاتب, تنظيف شركات, خدمات تنظيف, تنظيف بالرياض, أفضل شركة تنظيف, تنظيف سجاد, تنظيف كنب, تنظيف فلل, Cleaning company Riyadh, Home cleaning Riyadh, Office cleaning Riyadh, Best cleaning service, Carpet cleaning Riyadh, Sofa cleaning Riyadh, Villa cleaning Riyadh" />
        <meta name="author" content="شركة النظافة العصرية" />
        <meta name="theme-color" content="#00897B" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://cleanplusteam.com/	" />
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_AR" />
        <meta property="og:title" content="شركة النظافة العصرية - خدمات تنظيف احترافية بالرياض" />
        <meta property="og:description" content="نقدم خدمات تنظيف عالية الجودة للمنازل والمكاتب والشركات في الرياض. تجربة تنظيف فريدة مع ضمان رضا العملاء." />
        <meta property="og:url" content="https://cleanplusteam.com/	" />
        <meta property="og:site_name" content="شركة النظافة العصرية" />
        <meta property="og:image" content="/logo.png" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="شركة النظافة العصرية - خدمات تنظيف احترافية بالرياض" />
        <meta name="twitter:description" content="نقدم خدمات تنظيف عالية الجودة للمنازل والمكاتب والشركات في الرياض. تجربة تنظيف فريدة مع ضمان رضا العملاء." />
        <meta name="twitter:image" content="/logo.png" />
        {/* Structured Data for Local Business */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "شركة النظافة العصرية",
          "image": "https://cleanplusteam.com/	logo.png",
          "@id": "https://cleanplusteam.com/	",
          "url": "https://cleanplusteam.com/	",
          "telephone": "+966500000000",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "الرياض",
            "addressLocality": "الرياض",
            "addressCountry": "SA"
          },
          "description": "شركة تنظيف تقدم خدمات تنظيف احترافية للمنازل والمكاتب والشركات في الرياض.",
          "areaServed": "الرياض"
        }` }} />
      </head>
      <body className={tajawal.className}>{children}</body>
    </html>
  )
}

