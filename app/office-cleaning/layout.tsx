import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'خدمات تنظيف المكاتب في الرياض - شركة النظافة العصرية',
  description: 'خدمات تنظيف المكاتب والشركات في الرياض بأعلى معايير الجودة. نقدم خدمات تنظيف شاملة للمكاتب والمساحات التجارية مع ضمان الجودة.',
  keywords: [
    "تنظيف مكاتب الرياض",
    "شركة تنظيف مكاتب",
    "تنظيف شركات",
    "تنظيف مقرات العمل",
    "تنظيف مساحات تجارية",
    "تنظيف مكاتب احترافي",
    "خدمات تنظيف للشركات",
    "تنظيف مكاتب وشركات",
    "تعقيم مكاتب",
    "تنظيف كراسي مكتبية",
    "تنظيف سجاد المكاتب",
    "تنظيف زجاج المكاتب",
    "تنظيف أثاث مكتبي",
    "شركة تنظيف مكاتب الرياض",
    "أسعار تنظيف المكاتب"
  ],
  openGraph: {
    title: 'خدمات تنظيف المكاتب في الرياض - شركة النظافة العصرية',
    description: 'خدمات تنظيف المكاتب والشركات في الرياض بأعلى معايير الجودة. نقدم خدمات تنظيف شاملة للمكاتب والمساحات التجارية مع ضمان الجودة.',
    url: 'https://cleanplusteam.com/office-cleaning',
    type: 'website',
    images: [
      {
        url: 'https://cleanplusteam.com/office-cleaning.avif',
        width: 1200,
        height: 630,
        alt: 'خدمات تنظيف المكاتب في الرياض',
        type: 'image/avif',
      },
    ],
  },
}

// Add LocalBusiness schema for local service SEO
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'شركة النظافة العصرية - خدمات تنظيف المكاتب في الرياض',
  'image': 'https://cleanplusteam.com/office-cleaning.avif',
  'description': 'شركة متخصصة في تنظيف المكاتب والشركات في الرياض باستخدام أحدث التقنيات ومواد التنظيف الاحترافية. نقدم خدمات تنظيف شاملة للمكاتب والمساحات التجارية.',
  'url': 'https://cleanplusteam.com/office-cleaning',
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
  'priceRange': '300 - 1500 ريال سعودي',
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
    'name': 'خدمات تنظيف المكاتب',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تنظيف المكاتب',
          'description': 'خدمة تنظيف شاملة للمكاتب في الرياض'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تنظيف سجاد المكاتب',
          'description': 'خدمة تنظيف متخصصة لسجاد وموكيت المكاتب'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تنظيف وتعقيم المكاتب',
          'description': 'خدمة تنظيف وتعقيم شاملة للمكاتب والشركات'
        }
      }
    ]
  }
};

export default function OfficeCleaningLayout({
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </main>
      <Footer />
    </>
  )
}