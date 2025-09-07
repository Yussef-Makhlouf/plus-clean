import type { Metadata } from 'next';
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'شركة تنظيف منازل بالرياض | خدمات تنظيف الشقق والفلل - بلس كلين',
  description:
    'شركة تنظيف منازل بالرياض تقدم خدمات تنظيف شاملة للمنازل والشقق والفلل باستخدام أحدث التقنيات ومواد التنظيف الآمنة. تنظيف عميق، تعقيم، إزالة البقع، وضمان جودة بأفضل الأسعار. اتصل الآن ببلس كلين لخدمة احترافية في جميع أحياء الرياض.',
  keywords: [
    // خدمات رئيسية
    'تنظيف منازل بالرياض',
    'شركة تنظيف منازل الرياض',
    'تنظيف الشقق',
    'تنظيف الفلل',
    'تعقيم المنازل',
    'خدمات تنظيف المنازل',
    'شركة تنظيف شقق',
    'تنظيف عميق للمنازل',
    'إزالة البقع من الأثاث',
    'تنظيف المجالس',
    'تنظيف المطابخ',
    'تنظيف الحمامات',
    'شركة بلس كلين',
    'أسعار تنظيف المنازل',
    'خدمة تنظيف منازل',
    'تنظيف منازل احترافي',
    // كلمات مفتاحية طويلة
    'أفضل شركة تنظيف منازل في الرياض',
    'شركة تنظيف منازل شمال الرياض',
    'شركة تنظيف منازل جنوب الرياض',
    'شركة تنظيف منازل شرق الرياض',
    'شركة تنظيف منازل غرب الرياض',
    'تنظيف منازل مع التعقيم في الرياض',
    'تنظيف منازل بالبخار في الرياض',
    'تنظيف منازل في المنزل بدون نقل',
    'تنظيف منازل المجالس والفلل',
    'تنظيف منازل الفنادق والشركات',
    'تنظيف منازل بأسعار رخيصة في الرياض',
    'تنظيف منازل مع ضمان الجودة',
    'تنظيف منازل مع خصم',
    'تنظيف منازل طارئ في الرياض',
    // صيغ بحث وأسئلة
    'كم سعر تنظيف المنازل في الرياض؟',
    'ما هي أفضل شركة تنظيف منازل؟',
    'كيف أنظف المنزل بنفسي؟',
    'هل يوجد خصم على تنظيف المنازل؟',
    'ما هي طرق تعقيم المنازل؟',
    // مناطق وأحياء مستهدفة
    'تنظيف منازل حي الملك فهد',
    'تنظيف منازل حي النرجس',
    'تنظيف منازل حي الياسمين',
    'تنظيف منازل حي الورود',
    'تنظيف منازل حي الملقا',
    'تنظيف منازل حي الصحافة',
    'تنظيف منازل حي المحمدية',
    'تنظيف منازل حي الروضة',
    'تنظيف منازل حي العليا',
    'تنظيف منازل حي الخليج',
    'تنظيف منازل حي الرمال',
    'تنظيف منازل حي الشفا',
    'تنظيف منازل حي الحمراء',
    'تنظيف منازل حي المصيف',
    'تنظيف منازل حي طويق',
    // أنواع الخدمات والمشاكل
    'تنظيف الأثاث المنزلي',
    'تنظيف الأرضيات',
    'تنظيف النوافذ والزجاج',
    'إزالة بقع القهوة من الأثاث',
    'إزالة بقع الدم من المفروشات',
    'إزالة بقع الحبر من الكنب',
    'إزالة الروائح الكريهة من المنزل',
    'تعقيم المنزل ضد البكتيريا',
    'تجفيف المفروشات بسرعة',
    'ضمان تنظيف المنازل',
    'شركة تنظيف منازل معتمدة',
    'تنظيف منازل مع شهادة ضمان',
    // كلمات جذب
    'عروض تنظيف المنازل',
    'خصم تنظيف المنازل',
    'تنظيف منازل مضمون',
    'تنظيف منازل سريع',
    'تنظيف منازل آمن للأطفال',
    'تنظيف منازل صديق للبيئة',
    'تنظيف منازل بدون مواد كيميائية',
    'تنظيف منازل بخبرة 15 سنة',
    'تنظيف منازل بتقنيات ألمانية',
    'تنظيف منازل مع تقييم مجاني',
    'تنظيف منازل مع خدمة عملاء ممتازة',
  ],
  openGraph: {
    title: 'شركة تنظيف منازل بالرياض | خدمات تنظيف الشقق والفلل - بلس كلين',
    description:
      'خدمة تنظيف منازل احترافية في الرياض مع ضمان الجودة والتعقيم وإزالة البقع. اتصل الآن ببلس كلين لأفضل الأسعار والعروض.',
    url: 'https://www.cleanplusteam.com/services/home-cleaning',
    type: 'website',
    images: [
      {
        url: '/home_cleaning.avif',
        width: 1200,
        height: 630,
        alt: 'تنظيف منازل بالرياض - بلس كلين',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.cleanplusteam.com/services/home-cleaning',
  },
};

export default function HomeCleaningLayout({ children }: { children: React.ReactNode }) {
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
            'name': 'بلس كلين - تنظيف المنازل في الرياض',
            'image': 'https://www.cleanplusteam.com/home_cleaning.avif',
            'description': 'شركة متخصصة في تنظيف المنازل والشقق والفلل في الرياض باستخدام أحدث التقنيات ومواد التنظيف الآمنة. تنظيف عميق، تعقيم، إزالة البقع، وضمان جودة.',
            'url': 'https://www.cleanplusteam.com/services/home-cleaning',
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
            'priceRange': '200 - 1000 ريال سعودي',
            'paymentAccepted': ['Cash', 'Credit Card', 'Bank Transfer'],
            'currenciesAccepted': 'SAR',
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
                    'name': 'تنظيف شامل للمنازل',
                    'description': 'خدمة تنظيف شاملة للمنازل تشمل جميع الغرف والمرافق'
                  }
                },
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'تنظيف الشقق',
                    'description': 'خدمة تنظيف متخصصة للشقق السكنية بمختلف المساحات'
                  }
                },
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'تنظيف الفلل',
                    'description': 'خدمة تنظيف شاملة للفلل والقصور بأحدث التقنيات'
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