import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'دليل تعقيم المنازل في الرياض - حماية عائلتك من الأمراض المعدية',
  description: 'دليل شامل لتعقيم المنازل في الرياض مع نصائح احترافية من شركة النظافة العصرية. تعرف على أفضل طرق التعقيم والوقاية من الأمراض المعدية.',
  keywords: [
    "تعقيم المنازل الرياض",
    "تنظيف وتعقيم المنزل",
    "مكافحة الفيروسات",
    "تعقيم ضد كورونا",
    "تنظيف صحي الرياض",
    "تعقيم المطبخ",
    "تعقيم الحمام",
    "شركة تعقيم الرياض",
    "طرق تعقيم آمنة",
    "مواد تعقيم طبيعية",
    "تعقيم ضد البكتيريا",
    "حماية من الأمراض",
    "تعقيم المنزل الرياض",
    "شركة تعقيم منازل",
    "نصائح تعقيم المنزل"
  ],
  authors: [{ name: 'شركة النظافة العصرية' }],
  creator: 'شركة النظافة العصرية',
  publisher: 'شركة النظافة العصرية',
  category: 'خدمات التعقيم',
  classification: 'دليل تعقيم المنازل',
  openGraph: {
    type: 'article',
    locale: 'ar_SA',
    title: 'دليل تعقيم المنازل في الرياض - حماية عائلتك من الأمراض المعدية',
    description: 'دليل شامل لتعقيم المنازل في الرياض مع نصائح احترافية من شركة النظافة العصرية. تعرف على أفضل طرق التعقيم والوقاية من الأمراض المعدية.',
    url: 'https://cleanplusteam.com/blog/home-disinfection-guide',
    siteName: 'شركة النظافة العصرية',
    images: [
      {
        url: 'https://cleanplusteam.com/home-disinfection.avif',
        width: 1200,
        height: 630,
        alt: 'دليل تعقيم المنازل في الرياض',
        type: 'image/avif',
      },
    ],
    countryName: 'Saudi Arabia',
    emails: ['info@cleanplusteam.com'],
    phoneNumbers: ['+966592425757'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'دليل تعقيم المنازل في الرياض - حماية عائلتك من الأمراض',
    description: 'دليل شامل لتعقيم المنازل في الرياض مع نصائح احترافية من شركة النظافة العصرية',
    images: ['https://cleanplusteam.com/home-disinfection.avif'],
    creator: '@cleanplusteam',
    site: '@cleanplusteam',
  },
  alternates: {
    canonical: 'https://cleanplusteam.com/blog/home-disinfection-guide',

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
    'article:published_time': '2024-03-18T00:00:00.000Z',
    'article:modified_time': '2024-03-18T00:00:00.000Z',
    'article:author': 'شركة النظافة العصرية',
    'article:section': 'خدمات التعقيم',
    'article:tag': ['تعقيم المنازل', 'الرياض', 'مكافحة الفيروسات', 'شركة تعقيم'],
  },
}

// Add JSON-LD structured data for better SEO
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'دليل تعقيم المنازل في الرياض - حماية عائلتك من الأمراض المعدية',
  description: 'دليل شامل لتعقيم المنازل في الرياض مع نصائح احترافية من شركة النظافة العصرية. تعرف على أفضل طرق التعقيم والوقاية من الأمراض المعدية.',
  image: 'https://cleanplusteam.com/home-disinfection.avif',
  datePublished: '2024-03-18T00:00:00.000Z',
  dateModified: '2024-03-18T00:00:00.000Z',
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
    '@id': 'https://cleanplusteam.com/blog/home-disinfection-guide'
  }
};

// Add LocalBusiness schema for local service SEO
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'شركة النظافة العصرية - خدمات تعقيم المنازل في الرياض',
  'image': 'https://cleanplusteam.com/home-disinfection.avif',
  'description': 'شركة متخصصة في تعقيم المنازل في الرياض باستخدام أحدث التقنيات ومواد التعقيم الآمنة. مكافحة الفيروسات والبكتيريا وحماية الأسرة من الأمراض المعدية.',
  'url': 'https://cleanplusteam.com/blog/home-disinfection-guide',
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
  'priceRange': '300 - 1000 ريال سعودي',
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
    'name': 'خدمات تعقيم المنازل',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تعقيم المنازل',
          'description': 'خدمة تعقيم شاملة للمنازل في الرياض'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تعقيم ضد الفيروسات',
          'description': 'خدمة تعقيم متخصصة للوقاية من الفيروسات والأمراض المعدية'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تعقيم المطابخ والحمامات',
          'description': 'خدمة تعقيم متخصصة للمناطق عالية الخطورة في المنزل'
        }
      }
    ]
  }
};

export default function HomeDisinfectionGuideLayout({
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