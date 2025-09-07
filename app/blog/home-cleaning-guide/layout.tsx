import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'دليل شامل لتنظيف المنزل في الرياض - نصائح احترافية من شركة النظافة العصرية',
  description: 'دليل شامل لتنظيف المنزل في الرياض مع نصائح احترافية من خبراء شركة النظافة العصرية. تعرف على أفضل الطرق لتنظيف المطبخ، الحمام، غرف النوم والمزيد بأسعار تنافسية.',
  keywords: [
    "دليل تنظيف المنزل الرياض",
    "نصائح تنظيف المنزل",
    "تنظيف المطبخ الرياض",
    "تنظيف الحمام الرياض",
    "تنظيف غرف النوم",
    "أفضل طرق التنظيف",
    "تنظيف احترافي الرياض",
    "شركة تنظيف منازل الرياض",
    "تنظيف المنزل خطوة بخطوة",
    "جدول تنظيف أسبوعي",
    "أدوات تنظيف المنزل",
    "تنظيف المطبخ والحمام",
    "نصائح تنظيف في الرياض",
    "تنظيف المنزل بالرياض",
    "شركة نظافة الرياض"
  ],
  authors: [{ name: 'شركة النظافة العصرية' }],
  creator: 'شركة النظافة العصرية',
  publisher: 'شركة النظافة العصرية',
  category: 'خدمات التنظيف',
  classification: 'دليل تنظيف المنازل',
  openGraph: {
    type: 'article',
    locale: 'ar_SA',
    title: 'دليل شامل لتنظيف المنزل في الرياض - نصائح احترافية من شركة النظافة العصرية',
    description: 'دليل شامل لتنظيف المنزل في الرياض مع نصائح احترافية من خبراء شركة النظافة العصرية. تعرف على أفضل الطرق لتنظيف المطبخ، الحمام، غرف النوم والمزيد.',
    url: 'https://cleanplusteam.com/blog/home-cleaning-guide',
    siteName: 'شركة النظافة العصرية',
    images: [
      {
        url: 'https://cleanplusteam.com/home-cleaning-guide.avif',
        width: 1200,
        height: 630,
        alt: 'دليل تنظيف المنزل في الرياض',
        type: 'image/avif',
      },
    ],
    countryName: 'Saudi Arabia',
    emails: ['info@cleanplusteam.com'],
    phoneNumbers: ['+966592425757'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'دليل شامل لتنظيف المنزل في الرياض - نصائح احترافية',
    description: 'دليل شامل لتنظيف المنزل في الرياض مع نصائح احترافية من خبراء شركة النظافة العصرية',
    images: ['https://cleanplusteam.com/home-cleaning-guide.avif'],
    creator: '@cleanplusteam',
    site: '@cleanplusteam',
  },
  alternates: {
    canonical: 'https://cleanplusteam.com/blog/home-cleaning-guide',
    languages: {
      'ar-SA': 'https://cleanplusteam.com/blog/home-cleaning-guide',
    },
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
    'article:published_time': '2024-03-20T00:00:00.000Z',
    'article:modified_time': '2024-03-20T00:00:00.000Z',
    'article:author': 'شركة النظافة العصرية',
    'article:section': 'خدمات التنظيف',
    'article:tag': ['تنظيف المنازل', 'الرياض', 'نصائح تنظيف', 'شركة نظافة', 'تنظيف منازل الرياض', 'خدمات تنظيف احترافية'],
    'og:locale': 'ar_SA',
    'og:type': 'article',
  },
}

// Add JSON-LD structured data for better SEO
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'دليل شامل لتنظيف المنزل في الرياض - نصائح احترافية',
  description: 'دليل شامل لتنظيف المنزل في الرياض مع نصائح احترافية من خبراء شركة النظافة العصرية. تعرف على أفضل الطرق لتنظيف المطبخ، الحمام، غرف النوم والمزيد.',
  image: 'https://cleanplusteam.com/home-cleaning-guide.avif',
  datePublished: '2024-03-20T00:00:00.000Z',
  dateModified: '2024-03-20T00:00:00.000Z',
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
    '@id': 'https://cleanplusteam.com/blog/home-cleaning-guide'
  }
};

// Add LocalBusiness schema for local service SEO
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'شركة النظافة العصرية - خدمات تنظيف المنازل في الرياض',
  'image': 'https://cleanplusteam.com/home-cleaning-guide.avif',
  'description': 'شركة متخصصة في تنظيف المنازل والشقق والفلل في الرياض باستخدام أحدث التقنيات ومواد التنظيف الآمنة. تنظيف عميق، تعقيم، إزالة البقع، وضمان جودة.',
  'url': 'https://cleanplusteam.com/blog/home-cleaning-guide',
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
  'priceRange': '200 - 1000 ريال سعودي',
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
    'name': 'خدمات تنظيف المنازل',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تنظيف المنازل',
          'description': 'خدمة تنظيف شاملة للمنازل في الرياض'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تنظيف الشقق',
          'description': 'خدمة تنظيف احترافية للشقق في الرياض'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تنظيف الفلل',
          'description': 'خدمة تنظيف متكاملة للفلل في الرياض'
        }
      }
    ]
  }
};

export default function HomeCleaningGuideLayout({
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