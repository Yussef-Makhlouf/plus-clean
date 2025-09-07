import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'خدمات تعقيم المنازل في الرياض - شركة النظافة العصرية',
  description: 'خدمات تعقيم المنازل والشركات في الرياض بأعلى معايير الجودة. نقدم خدمات تعقيم شاملة للمنازل والمكاتب مع ضمان الجودة.',
  keywords: [
    "تعقيم منازل الرياض",
    "شركة تعقيم منازل",
    "تعقيم ضد الفيروسات",
    "تعقيم ضد كورونا",
    "تعقيم مكاتب",
    "تعقيم شركات",
    "تعقيم منازل احترافي",
    "خدمات تعقيم",
    "تعقيم منازل وشركات",
    "تعقيم مطابخ",
    "تعقيم حمامات",
    "تعقيم غرف نوم",
    "تعقيم أثاث",
    "شركة تعقيم الرياض",
    "أسعار تعقيم المنازل"
  ],
  openGraph: {
    title: 'خدمات تعقيم المنازل في الرياض - شركة النظافة العصرية',
    description: 'خدمات تعقيم المنازل والشركات في الرياض بأعلى معايير الجودة. نقدم خدمات تعقيم شاملة للمنازل والمكاتب مع ضمان الجودة.',
    url: 'https://cleanplusteam.com/disinfection',
    type: 'website',
    images: [
      {
        url: 'https://cleanplusteam.com/disinfection.avif',
        width: 1200,
        height: 630,
        alt: 'خدمات تعقيم المنازل في الرياض',
        type: 'image/avif',
      },
    ],
  },
}

// Add LocalBusiness schema for local service SEO
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'شركة النظافة العصرية - خدمات تعقيم المنازل في الرياض',
  'image': 'https://cleanplusteam.com/disinfection.avif',
  'description': 'شركة متخصصة في تعقيم المنازل والشركات في الرياض باستخدام أحدث التقنيات ومواد التعقيم الآمنة. مكافحة الفيروسات والبكتيريا وحماية الأسرة من الأمراض المعدية.',
  'url': 'https://cleanplusteam.com/disinfection',
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
    'https://www.facebook.com/share/16gaFSHYYT/?mibextid=qi2Omg',
    'https://x.com/plusclean0?fbclid=IwY2xjawK7tO5leHRuA2FlbQIxMABicmlkETFXMzc1UDNLS0hUYXd3MHZWAR4jZvwTZmwkqcqn7s7Ay_wV2QMABL5UQPUM6KrPWOKEHTdwCBoOTkuDcux1BQ_aem_p_CPdoW2KF8vaF6TuL4gBg',
    'https://www.instagram.com/plusscleean0?fbclid=IwY2xjawK7tMtleHRuA2FlbQIxMABicmlkETFXMzc1UDNLS0hUYXd3MHZWAR6_JJRPSKSYqw5jlcVlbJUqWiq1dwdZGxIj1klNjv_NYzRUKNrhWECKKGQT1Q_aem_ZnU2xqYfYLDkuQel3ZX5NA'
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

export default function DisinfectionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>

      <main className="min-h-screen bg-gray-50" lang="ar" dir="rtl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </main>

    </>
  )
}