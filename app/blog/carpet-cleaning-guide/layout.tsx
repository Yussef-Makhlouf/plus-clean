import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'دليل تنظيف السجاد والموكيت في الرياض - نصائح احترافية من شركة النظافة العصرية',
  description: 'دليل شامل لتنظيف السجاد والموكيت في الرياض مع نصائح احترافية. تعرف على أفضل الطرق لإزالة البقع وحماية السجاد من التلف.',
  keywords: [
    "تنظيف السجاد الرياض",
    "غسيل موكيت الرياض",
    "إزالة بقع السجاد",
    "تنظيف سجاد فارسي",
    "غسيل موكيت بالبخار",
    "حماية السجاد من التلف",
    "تنظيف سجاد احترافي",
    "شركة تنظيف سجاد الرياض",
    "تنظيف السجاد بالبخار",
    "إزالة بقع السجاد الصعبة",
    "تنظيف موكيت الرياض",
    "حماية السجاد من الشمس",
    "تنظيف سجاد طبيعي",
    "شركة تنظيف موكيت",
    "نصائح تنظيف السجاد",
    "شركة تنظيف سجاد شمال بالرياض",
    "تنظيف سجاد في شرق في الرياض",
    "افضل شركة تنظيف سجاد بالرياض",
    "اسعار تنظيف السجاد في الرياض",
    "تنظيف سجاد مساجد الرياض",
    "تنظيف سجاد فلل الرياض",
    "خدمة تنظيف سجاد منازل",
    "تنظيف سجاد قصور الرياض",
    "تنظيف سجاد مكاتب وشركات",
    "تنظيف سجاد حي النرجس",
    "تنظيف سجاد حي الياسمين",
    "غسيل سجاد حي الملقا",
    "تنظيف موكيت مدارس الرياض",
    "تنظيف سجاد بالبخار حي العليا",
    "خدمة تنظيف سجاد 24 ساعة",
    "خدمات نضافة الرياض",
    "تنظيف شقق و سجاد",
    "نظافة سجاد الرياض",
    "خدمات نظافه بالرياض",
    "خدمات تنظيف موكيت بالرياض",
  ],
  authors: [{ name: 'شركة النظافة العصرية' }],
  creator: 'شركة النظافة العصرية',
  publisher: 'شركة النظافة العصرية',
  category: 'خدمات تنظيف السجاد',
  classification: 'دليل تنظيف السجاد',
  openGraph: {
    type: 'article',
    locale: 'ar_SA',
    title: 'دليل تنظيف السجاد والموكيت في الرياض - نصائح احترافية من شركة النظافة العصرية',
    description: 'دليل شامل لتنظيف السجاد والموكيت في الرياض مع نصائح احترافية. تعرف على أفضل الطرق لإزالة البقع وحماية السجاد من التلف.',
    url: 'https://cleanplusteam.com/blog/carpet-cleaning-guide',
    siteName: 'شركة النظافة العصرية',
    images: [
      {
        url: 'https://cleanplusteam.com/carpet-cleaning-guide.avif',
        width: 1200,
        height: 630,
        alt: 'دليل تنظيف السجاد والموكيت في الرياض',
        type: 'image/avif',
      },
    ],
    countryName: 'Saudi Arabia',
    emails: ['info@cleanplusteam.com'],
    phoneNumbers: ['+966592425757'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'دليل تنظيف السجاد والموكيت في الرياض - نصائح احترافية',
    description: 'دليل شامل لتنظيف السجاد والموكيت في الرياض مع نصائح احترافية من شركة النظافة العصرية',
    images: ['https://cleanplusteam.com/carpet-cleaning-guide.avif'],
    creator: '@cleanplusteam',
    site: '@cleanplusteam',
  },
  alternates: {
    canonical: 'https://cleanplusteam.com/blog/carpet-cleaning-guide',

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
  other: {
    'article:published_time': '2024-03-15T00:00:00.000Z',
    'article:modified_time': '2024-03-15T00:00:00.000Z',
    'article:author': 'شركة النظافة العصرية',
    'article:section': 'خدمات تنظيف السجاد',
    'article:tag': ['تنظيف السجاد', 'الرياض', 'تنظيف الموكيت', 'شركة تنظيف سجاد'],
  },
}

// Add JSON-LD structured data for better SEO
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'دليل تنظيف السجاد والموكيت في الرياض - نصائح احترافية',
  description: 'دليل شامل لتنظيف السجاد والموكيت في الرياض مع نصائح احترافية. تعرف على أفضل الطرق لإزالة البقع وحماية السجاد من التلف.',
  image: 'https://cleanplusteam.com/carpet-cleaning-guide.avif',
  datePublished: '2024-03-15T00:00:00.000Z',
  dateModified: '2024-03-15T00:00:00.000Z',
  author: {
    '@type': 'Organization',
    name: 'شركة النظافة العصرية',
    url: 'https://cleanplusteam.com'
  },
  publisher: {
    '@type': 'Organization',
    name: 'شركة النظافة العصرية',
    logo: {
      '@type': 'ImageObject',
      url: 'https://cleanplusteam.com/logo.avif'
    }
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://cleanplusteam.com/blog/carpet-cleaning-guide'
  }
};

// Add LocalBusiness schema for local service SEO
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'شركة النظافة العصرية - خدمات تنظيف السجاد في الرياض',
  'image': 'https://cleanplusteam.com/carpet-cleaning-guide.avif',
  'description': 'شركة متخصصة في تنظيف السجاد والموكيت في الرياض باستخدام أحدث التقنيات ومواد التنظيف الآمنة. إزالة البقع، تنظيف عميق، وحماية من التلف.',
  'url': 'https://cleanplusteam.com/blog/carpet-cleaning-guide',
  'telephone': '+966592425757',
  'email': 'info@cleanplusteam.com',
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'الرياض',
    'addressRegion': 'الرياض',
    'addressCountry': 'SA'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 24.7136,
    'longitude': 46.6753
  },
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
    ],
    'opens': '00:00',
    'closes': '23:59'
  },
  'priceRange': '200 - 800 ريال سعودي',
  'serviceArea': {
    '@type': 'GeoCircle',
    'geoMidpoint': {
      '@type': 'GeoCoordinates',
      'latitude': 24.7136,
      'longitude': 46.6753
    },
    'geoRadius': '50000'
  },
  'sameAs': [
    'https://www.facebook.com/cleanplusteam',
    'https://twitter.com/cleanplusteam',
    'https://www.instagram.com/cleanplusteam'
  ],
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'خدمات تنظيف السجاد',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تنظيف السجاد',
          'description': 'خدمة تنظيف شاملة للسجاد في الرياض'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تنظيف الموكيت',
          'description': 'خدمة تنظيف احترافية للموكيت في الرياض'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'إزالة بقع السجاد',
          'description': 'خدمة متخصصة لإزالة البقع الصعبة من السجاد'
        }
      }
    ]
  }
};

export default function CarpetCleaningGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50" lang="ar" dir="rtl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </main>
      <Footer />
    </>
  )
}