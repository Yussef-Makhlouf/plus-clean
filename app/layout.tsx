import './globals.css'
import { Tajawal } from 'next/font/google'
import { Icon, MessageCircle, Phone } from 'lucide-react'
import Script from 'next/script'

const tajawal = Tajawal({ subsets: ['arabic'], weight: ['400', '700'] })

function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: '#00897B',
    colorScheme: 'light',
  }
}

export const metadata = {
  metadataBase: new URL('https://cleanplusteam.com'),
  title: 'شركه النظافة العصرية "افضل شركة نظافة فلل و خزانات و شركات في الرياض"',
  description: 'شركة النظافة العصرية بالرياض تقدم أفضل خدمات تنظيف للمنازل، الفلل، الشقق، الخزانات والشركات. نظافة فائقة بأسعار تنافسية وضمان رضاكم. اتصل الآن!',
  keywords: [
    "تنظيف منازل الرياض",
    "شركة تنظيف الرياض",
    "تنظيف شقق الرياض",
    "تنظيف فلل الرياض",
    "تنظيف مكاتب الرياض",
    "تنظيف سجاد الرياض",
    "تعقيم منازل الرياض",
    "غسيل موكيت الرياض",
    "تنظيف خزانات الرياض",
    "تنظيف واجهات الرياض",
    "أفضل شركة تنظيف منازل في الرياض",
    "خدمات التنظيف والتعقيم الشامل الرياض",
    "تنظيف الفلل والقصور في الرياض",
    "شركة تنظيف معتمدة في الرياض",
    "عاملات تنظيف في الرياض",
    "نظافة المنزل",
    "مكافحة حشرات",
    "غسيل سيارات",
    "خدمات منزلية",
    "تنظيف خزانات",
    "تنظيف واجهات",
    "تنظيف شركات",
        "شركة تنظيف منازل بالرياض",
    "أفضل شركة تنظيف بالرياض",
    "خدمات تنظيف شقق الرياض",
    "تنظيف فلل بالرياض",
    "شركة تنظيف معتمدة الرياض",
    "تنظيف وتعقيم منازل الرياض",
    "تنظيف مكاتب وشركات الرياض",
    "غسيل سجاد وموكيت الرياض",
    "تنظيف خزانات المياه الرياض",
    "تنظيف واجهات زجاجية الرياض",
    "عاملات تنظيف منازل الرياض",
    "أسعار تنظيف المنازل الرياض",
    "رقم شركة تنظيف الرياض",
    "تنظيف منازل 24 ساعة الرياض",
        "شركة تنظيف منازل الدمام",
    "تنظيف شقق الدمام",
    "خدمات تنظيف الدمام",
    "تنظيف فلل الدمام",
    "شركة تنظيف منازل الخبر",
    "تنظيف شقق الخبر",
    "خدمات تنظيف الخبر",
    "شركة تنظيف منازل مكة",
    "تنظيف شقق مكة المكرمة",
    "خدمات تنظيف مكة",
    "شركة تنظيف منازل المدينة المنورة",
    "تنظيف شقق المدينة المنورة",
    "خدمات تنظيف المدينة",
    "شركة تنظيف منازل الطائف",
    "تنظيف شقق الطائف",
    "خدمات تنظيف الطائف",
    "شركة تنظيف منازل تبوك",
    "تنظيف شقق تبوك",
    "خدمات تنظيف تبوك",
    "شركة تنظيف منازل أبها",
    "تنظيف شقق أبها",
    "خدمات تنظيف أبها",
    "شركة تنظيف منازل بريدة",
    "تنظيف شقق بريدة",
    "خدمات تنظيف بريدة",
    "شركة تنظيف منازل حائل",
    "تنظيف شقق حائل",
    "خدمات تنظيف حائل",
    "شركة تنظيف منازل جازان",
    "تنظيف شقق جازان",
    "خدمات تنظيف جازان",   
    "تنظيف المنازل من الداخل",
    "تنظيف البيوت الجديدة",
    "تنظيف شقق مفروشة",
    "تنظيف استراحات",
    "تنظيف قصور",
    "تنظيف مكاتب إدارية",
    "تنظيف شركات ومؤسسات",
    "تنظيف محلات تجارية",
    "تنظيف مطاعم",
    "تنظيف مستشفيات",
    "تنظيف مدارس",
    "تنظيف بالبخار",
    "تنظيف جاف",
    "تنظيف بالمواد الطبيعية",
    "تنظيف صديق للبيئة",
    "تعقيم ضد الفيروسات",
    "تعقيم كورونا",
    "غسيل كنب وأرائك",
    "تنظيف ستائر",
    "غسيل مراتب",
    "تنظيف سجاد فارسي",
    "غسيل موكيت بالبخار",
    "تلميع رخام وبلاط",
    "تنظيف واجهات حجرية",
    "غسيل خزانات علوية",
    "تطهير خزانات أرضية",
    "مكافحة حشرات منزلية",
    "أرخص أسعار تنظيف الشقق بالرياض",
    "شركة تنظيف منازل موثوقة الرياض",
    "تنظيف منازل بالعمالة الفلبينية الرياض",
    "شركة تنظيف وتعقيم معتمدة الرياض",
    "خدمات تنظيف منازل 24 ساعة الرياض",
    "شركة تنظيف قريبة مني الرياض",
    "تنظيف منازل شمال الرياض",
    "تنظيف منازل جنوب الرياض",
    "تنظيف منازل شرق الرياض",
    "تنظيف منازل غرب الرياض",
    "عروض تنظيف المنازل الرياض",
    "خصومات شركات التنظيف الرياض",
    "باقات تنظيف شهرية الرياض",
    "أسعار تنظيف الفلل الرياض",
    "تكلفة تنظيف الشقق الرياض"
  ],
  authors: [{ name: 'شركة النظافة العصرية' }],
  creator: 'شركة النظافة العصرية',
  publisher: 'شركة النظافة العصرية',
  category: 'خدمات التنظيف',
  classification: 'شركة تنظيف',
  openGraph: {
    type: 'website',
    locale: 'ar_AR',
    title: 'شركه النظافة العصرية "افضل شركة نظافة فلل و خزانات و شركات في الرياض"',
    description: 'شركة النظافة العصرية بالرياض تقدم أفضل خدمات تنظيف للمنازل، الفلل، الشقق، الخزانات والشركات. نظافة فائقة بأسعار تنافسية وضمان رضاكم. اتصل الآن!',
    url: 'https://cleanplusteam.com/',
    siteName: 'شركة النظافة العصرية',
    images: [
      {
        url: '/logo.avif',
        width: 800,
        height: 600,
        alt: 'شركة النظافة العصرية',
        type: 'image/avif',
      },
    ],
    countryName: 'Saudi Arabia',
    emails: ['info@cleanplusteam.com'],
    phoneNumbers: ['+966592425757'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شركه النظافة العصرية "افضل شركة نظافة فلل و خزانات و شركات في الرياض"',
    description: 'شركة النظافة العصرية بالرياض تقدم أفضل خدمات تنظيف للمنازل، الفلل، الشقق، الخزانات والشركات. نظافة فائقة بأسعار تنافسية وضمان رضاكم. اتصل الآن!',
    images: ['/logo.avif'],
    creator: '@cleanplusteam',
    site: '@cleanplusteam',
  },
  verification: {
    google: 'KOfsS6BSd9HECg6jztXcsrRg19JX7nhtRQ6Jl4Mdv9g',
    yandex: 'verification_token',
    bing: 'verification_token',
  },
  alternates: {
    canonical: 'https://www.cleanplusteam.com/',
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
      'noarchive': false,
      'nosnippet': false,
      'noimageindex': false,
      'notranslate': false,
    },
    bingbot: {
      index: true,
      follow: true,
      'max-snippet': -1,
    },
  },
  other: {
    'format-detection': 'telephone=yes',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'شركة النظافة العصرية',
    'application-name': 'شركة النظافة العصرية',
    'msapplication-TileColor': '#00897B',
    'msapplication-config': '/browserconfig.xml',
  },
  Icons: {
    icon: '/logo.avif',
    shortcut: '/logo.avif',
    apple: '/logo.avif',
    other: {
      rel: 'icon',
      url: '/logo.avif',
    },
  }
}

export const viewport = generateViewport()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.avif" />
        <link rel="apple-touch-icon" href="/logo.avif" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Structured Data for Local Business */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          '@id': 'https://cleanplusteam.com/',
          'url': 'https://cleanplusteam.com',
          'name': 'شركة النظافة العصرية',
          'logo': {
            '@type': 'ImageObject',
            'url': '/logo.avif',
            'width': 800,
            'height': 600
          },
          'description': 'شركة النظافة العصرية بالرياض تقدم أفضل خدمات تنظيف للمنازل، الفلل، الشقق، الخزانات والشركات. نظافة فائقة بأسعار تنافسية وضمان رضاكم.',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'الرياض',
            'addressRegion': 'الرياض',
            'addressCountry': 'SA'
          },
          'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': '+966592425757',
            'contactType': 'customer service',
            'availableLanguage': ['Arabic']
          },
          'sameAs': [
            'https://www.facebook.com/share/16gaFSHYYT/?mibextid=qi2Omg'
          ],
          'areaServed': {
            '@type': 'City',
            'name': 'الرياض'
          },
          'serviceArea': {
            '@type': 'GeoCircle',
            'geoMidpoint': {
              '@type': 'GeoCoordinates',
              'latitude': '24.7136',
              'longitude': '46.6753'
            },
            'geoRadius': '50000'
          },
          'priceRange': '$$',
          'openingHours': 'Mo-Su 08:00-22:00',
          'paymentAccepted': ['Cash', 'Credit Card', 'Bank Transfer']
        }) }} />
        
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WSV8TH7F');
            `
          }}
        />
      </head>
      <body className={tajawal.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WSV8TH7F"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        {children}
        
        <div className="fixed bottom-4 left-4 flex flex-col gap-4 z-50">
          <a href="https://wa.me/966592425757" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors" title="تواصل عبر واتساب" aria-label="تواصل عبر واتساب">
            <MessageCircle className="w-6 h-6" />
          </a>
          <a href="tel:+966592425757" className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors" title="اتصل الآن" aria-label="اتصل الآن">
            <Phone className="w-6 h-6" />
          </a>
        </div>
      </body>
    </html>
  )
}
