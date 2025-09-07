import type { Metadata } from 'next';
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'شركة تنظيف كنب بالرياض | خدمات تنظيف الكنب والأثاث - بلس كلين',
  description:
    'شركة تنظيف كنب بالرياض تقدم خدمات تنظيف الكنب والأثاث بأحدث التقنيات والمواد الآمنة. إزالة البقع، تعقيم الكنب، تجفيف سريع، وضمان جودة بأفضل الأسعار. اتصل الآن ببلس كلين لخدمة احترافية في جميع أحياء الرياض.',
  keywords: [
    // خدمات رئيسية
    'تنظيف كنب بالرياض',
    'شركة تنظيف كنب الرياض',
    'تنظيف الأثاث',
    'إزالة بقع الكنب',
    'تعقيم الكنب',
    'خدمات تنظيف الكنب',
    'شركة غسيل كنب',
    'تنظيف كنب المنازل',
    'تنظيف كنب المكاتب',
    'أسعار تنظيف الكنب',
    'خدمة تنظيف كنب',
    'حماية الكنب من البقع',
    'شركة بلس كلين',
    'تنظيف الكنب القماش',
    'تنظيف الكنب الجلد',
    'تجفيف الكنب',
    'تجديد الكنب',
    'صيانة الكنب',
    'العناية بالكنب',
    'خدمة تنظيف كنب منزلي',
    // كلمات مفتاحية طويلة
    'أفضل شركة تنظيف كنب في الرياض',
    'شركة تنظيف كنب شمال الرياض',
    'شركة تنظيف كنب جنوب الرياض',
    'شركة تنظيف كنب شرق الرياض',
    'شركة تنظيف كنب غرب الرياض',
    'تنظيف كنب مع التعقيم في الرياض',
    'تنظيف كنب بالبخار في الرياض',
    'تنظيف كنب في المنزل بدون نقل',
    'تنظيف كنب المجالس والفلل',
    'تنظيف كنب الفنادق والشركات',
    'تنظيف كنب بأسعار رخيصة في الرياض',
    'تنظيف كنب مع ضمان الجودة',
    'تنظيف كنب مع خصم',
    'تنظيف كنب طارئ في الرياض',
    // صيغ بحث وأسئلة
    'كم سعر تنظيف الكنب في الرياض؟',
    'ما هي أفضل شركة تنظيف كنب؟',
    'كيف أنظف الكنب في المنزل؟',
    'هل يوجد خصم على تنظيف الكنب؟',
    'ما هي طرق تعقيم الكنب؟',
    // مناطق وأحياء مستهدفة
    'تنظيف كنب حي الملك فهد',
    'تنظيف كنب حي النرجس',
    'تنظيف كنب حي الياسمين',
    'تنظيف كنب حي الورود',
    'تنظيف كنب حي الملقا',
    'تنظيف كنب حي الصحافة',
    'تنظيف كنب حي المحمدية',
    'تنظيف كنب حي الروضة',
    'تنظيف كنب حي العليا',
    'تنظيف كنب حي الخليج',
    'تنظيف كنب حي الرمال',
    'تنظيف كنب حي الشفا',
    'تنظيف كنب حي الحمراء',
    'تنظيف كنب حي المصيف',
    'تنظيف كنب حي طويق',
    // أنواع الكنب والخدمات
    'تنظيف الكنب القماش',
    'تنظيف الكنب الجلد',
    'تنظيف الكنب الفاخر',
    'تنظيف الكنب الكبير',
    'تنظيف الكنب الصغير',
    'إزالة بقع القهوة من الكنب',
    'إزالة بقع الدم من الكنب',
    'إزالة بقع الحبر من الكنب',
    'إزالة الروائح الكريهة من الكنب',
    'تعقيم الكنب ضد البكتيريا',
    'تجفيف الكنب بسرعة',
    'ضمان تنظيف الكنب',
    'شركة تنظيف كنب معتمدة',
    'تنظيف كنب مع شهادة ضمان',
    // كلمات جذب
    'عروض تنظيف الكنب',
    'خصم تنظيف الكنب',
    'تنظيف كنب مضمون',
    'تنظيف كنب سريع',
    'تنظيف كنب آمن للأطفال',
    'تنظيف كنب صديق للبيئة',
    'تنظيف كنب بدون مواد كيميائية',
    'تنظيف كنب بخبرة 15 سنة',
    'تنظيف كنب بتقنيات ألمانية',
    'تنظيف كنب مع تقييم مجاني',
    'تنظيف كنب مع خدمة عملاء ممتازة',
  ],
  openGraph: {
    title: 'شركة تنظيف كنب بالرياض | خدمات تنظيف الكنب والأثاث - بلس كلين',
    description:
      'خدمة تنظيف كنب احترافية في الرياض مع ضمان الجودة وإزالة البقع والتعقيم. اتصل الآن ببلس كلين لأفضل الأسعار والعروض.',
    url: 'https://www.cleanplusteam.com/services/sofa-cleaning',
    type: 'website',
    images: [
      {
        url: '/home_clean.avif',
        width: 1200,
        height: 630,
        alt: 'تنظيف كنب بالرياض - بلس كلين',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.cleanplusteam.com/services/sofa-cleaning',
  },
};

export default function SofaCleaningLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50" lang="ar" dir="rtl">
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            'name': 'بلس كلين - تنظيف الكنب في الرياض',
            'image': 'https://www.cleanplusteam.com/home_clean.avif',
            'description': 'شركة متخصصة في تنظيف الكنب والأثاث في الرياض باستخدام أحدث التقنيات والمواد الآمنة. إزالة البقع، التعقيم والتطهير، تجفيف سريع وضمان جودة.',
            'url': 'https://www.cleanplusteam.com/services/sofa-cleaning',
            'telephone': '+966592425757',
            'email': 'info@cleanplusteam.com',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'الرياض',
              'addressCountry': 'SA',
            },
            'geo': {
              '@type': 'GeoCoordinates',
              'latitude': 24.7136,
              'longitude': 46.6753,
            },
            'openingHoursSpecification': {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': [
                'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
              ],
              'opens': '00:00',
              'closes': '23:59',
            },
            'serviceArea': {
              '@type': 'City',
              'name': 'الرياض',
            },
            'aggregateRating': {
              '@type': 'AggregateRating',
              'ratingValue': '4.9',
              'reviewCount': '247',
              'bestRating': '5',
              'worstRating': '1',
            },
            'priceRange': '150 - 500 ريال سعودي',
            'paymentAccepted': ['Cash', 'Credit Card', 'Bank Transfer'],
            'currenciesAccepted': 'SAR',
            'sameAs': [
              'https://www.facebook.com/cleanplusteam',
              'https://twitter.com/cleanplusteam',
              'https://www.instagram.com/cleanplusteam'
            ],
            'hasOfferCatalog': {
              '@type': 'OfferCatalog',
              'name': 'خدمات تنظيف الكنب',
              'itemListElement': [
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'تنظيف الكنب القماش',
                    'description': 'خدمة تنظيف الكنب القماش بأحدث التقنيات وإزالة البقع'
                  }
                },
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'تنظيف الكنب الجلد',
                    'description': 'خدمة تنظيف وتلميع الكنب الجلد بمواد آمنة ومخصصة'
                  }
                },
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'تعقيم وتطهير الكنب',
                    'description': 'خدمة تعقيم وتطهير الكنب للقضاء على البكتيريا والجراثيم'
                  }
                }
              ]
            }
          }),
        }}
      />
        {children}
      </main>
      <Footer />
    </>
  );
}