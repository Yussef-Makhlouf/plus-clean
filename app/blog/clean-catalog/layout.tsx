import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'خدمات النظافة المتعددة في الرياض: دليل شامل للأسر والشركات - شركة النظافة العصرية',
  description: 'دليل شامل لجميع خدمات النظافة في الرياض: تنظيف المنازل، المكاتب، السجاد، الخزانات، والتعقيم الشامل. خدمات احترافية للأسر والشركات بأفضل الأسعار.',
  keywords: [
    "خدمات النظافة الرياض",
    "تنظيف المنازل الرياض",
    "تنظيف المكاتب الرياض",
    "تنظيف السجاد الرياض",
    "تنظيف الخزانات الرياض",
    "التعقيم الشامل الرياض",
    "تنظيف الموكيت الرياض",
    "شركة نظافة الرياض",
    "خدمات تنظيف احترافية",
    "تنظيف شامل الرياض",
    "أفضل شركة تنظيف الرياض",
    "خدمات النظافة المتكاملة",
    "تنظيف دوري الرياض",
    "شركة تنظيف منازل ومكاتب",
    "خدمات التعقيم الرياض"
  ],
  authors: [{ name: 'شركة النظافة العصرية' }],
  creator: 'شركة النظافة العصرية',
  publisher: 'شركة النظافة العصرية',
  category: 'خدمات التنظيف',
  classification: 'دليل خدمات النظافة الشاملة',
  openGraph: {
    type: 'article',
    locale: 'ar_SA',
    title: 'خدمات النظافة المتعددة في الرياض: دليل شامل للأسر والشركات',
    description: 'دليل شامل لجميع خدمات النظافة في الرياض: تنظيف المنازل، المكاتب، السجاد، الخزانات، والتعقيم الشامل. خدمات احترافية للأسر والشركات.',
    url: 'https://cleanplusteam.com/blog/clean-catalog',
    siteName: 'شركة النظافة العصرية',
    images: [
      {
        url: 'https://cleanplusteam.com/comprehensive-cleaning-services.avif',
        width: 1200,
        height: 630,
        alt: 'خدمات النظافة المتعددة في الرياض',
        type: 'image/avif',
      },
    ],
    countryName: 'Saudi Arabia',
    emails: ['info@cleanplusteam.com'],
    phoneNumbers: ['+966592425757'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'خدمات النظافة المتعددة في الرياض: دليل شامل للأسر والشركات',
    description: 'دليل شامل لجميع خدمات النظافة في الرياض مع أفضل الممارسات والنصائح العملية',
    images: ['https://cleanplusteam.com/comprehensive-cleaning-services.avif'],
    creator: '@cleanplusteam',
    site: '@cleanplusteam',
  },
  alternates: {
    canonical: 'https://cleanplusteam.com/blog/clean-catalog',
    languages: {
      'ar-SA': 'https://cleanplusteam.com/blog/clean-catalog',
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
    'article:tag': ['خدمات النظافة', 'الرياض', 'تنظيف شامل', 'شركة نظافة', 'تنظيف احترافي', 'خدمات متكاملة'],
    'og:locale': 'ar_SA',
    'og:type': 'article',
  },
}

// Add JSON-LD structured data for better SEO
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'خدمات النظافة المتعددة في الرياض: دليل شامل للأسر والشركات',
  description: 'دليل شامل لجميع خدمات النظافة في الرياض: تنظيف المنازل، المكاتب، السجاد، الخزانات، والتعقيم الشامل. خدمات احترافية للأسر والشركات.',
  image: 'https://cleanplusteam.com/comprehensive-cleaning-services.avif',
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
    '@id': 'https://cleanplusteam.com/blog/clean-catalog'
  }
};

// Add comprehensive service schema
const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'شركة النظافة العصرية - خدمات التنظيف الشاملة في الرياض',
  'image': 'https://cleanplusteam.com/comprehensive-cleaning-services.avif',
  'description': 'شركة متخصصة في جميع خدمات النظافة في الرياض: تنظيف المنازل والمكاتب والسجاد والخزانات والتعقيم الشامل. خدمات احترافية للأسر والشركات.',
  'url': 'https://cleanplusteam.com/blog/clean-catalog',
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
  'priceRange': '150 - 2000 ريال سعودي',
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
    'name': 'خدمات النظافة المتكاملة',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تنظيف المنازل',
          'description': 'خدمة تنظيف شاملة للمنازل والشقق والفلل'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تنظيف المكاتب',
          'description': 'خدمة تنظيف احترافية للمكاتب والشركات'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تنظيف السجاد والموكيت',
          'description': 'تنظيف عميق للسجاد والموكيت بالبخار'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تنظيف الخزانات',
          'description': 'تنظيف وتعقيم خزانات المياه'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'التعقيم الشامل',
          'description': 'خدمات التعقيم والتطهير الشاملة'
        }
      }
    ]
  }
};

export default function CleanCatalogLayout({
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        {children}
      </main>
      <Footer />
    </>
  )
}