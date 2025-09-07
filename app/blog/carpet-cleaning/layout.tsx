import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, User, BookOpen, TrendingUp, Star, Clock, Shield, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'مقالات تنظيف السجاد والموكيت | مدونة شركة النظافة العصرية بالرياض',
  description: 'استكشف أحدث المقالات والنصائح الاحترافية لتنظيف السجاد والموكيت في الرياض. أدلة شاملة وطرق مبتكرة لعناية مثالية بسجادك من خبراء شركة النظافة العصرية.',
  keywords: [
    "مقالات تنظيف السجاد الرياض",
    "نصائح تنظيف موكيت الرياض", 
    "دليل تنظيف السجاد بالرياض",
    "طرق تنظيف السجاد الفارسي",
    "إزالة بقع السجاد الرياض",
    "تنظيف سجاد بالبخار الرياض",
    "حماية السجاد من التلف",
    "صيانة السجاد والموكيت",
    "غسيل سجاد احترافي الرياض",
    "شركة تنظيف سجاد موثوقة",
    "تنظيف سجاد المنازل الرياض",
    "خدمات تنظيف سجاد فلل",
    "تنظيف موكيت مكاتب الرياض",
    "أسعار تنظيف السجاد الرياض",
    "أفضل شركة تنظيف سجاد بالرياض",
    "تنظيف سجاد شمال الرياض",
    "تنظيف سجاد شرق الرياض",
    "تنظيف سجاد جنوب الرياض",
    "تنظيف سجاد غرب الرياض",
    "خدمات تنظيف سجاد 24 ساعة",
    "تنظيف سجاد مساجد الرياض",
    "تنظيف سجاد قصور وفلل",
    "غسيل موكيت بالمواد الطبيعية",
    "تنظيف سجاد صديق للبيئة",
    "علاج تلف السجاد والموكيت",
    "إزالة الروائح من السجاد",
    "تعقيم السجاد ضد البكتيريا",
    "تنظيف سجاد الأطفال آمن",
    "حلول تنظيف السجاد الطارئة",
    "نصائح خبراء تنظيف السجاد"
  ],
  authors: [{ name: 'فريق خبراء شركة النظافة العصرية' }],
  creator: 'شركة النظافة العصرية - قسم تنظيف السجاد',
  publisher: 'شركة النظافة العصرية',
  category: 'مقالات ونصائح تنظيف السجاد',
  classification: 'مدونة متخصصة في تنظيف السجاد والموكيت',

  twitter: {
    card: 'summary_large_image',
    title: 'مقالات تنظيف السجاد والموكيت | مدونة شركة النظافة العصرية',
    description: 'أحدث النصائح والطرق الاحترافية لتنظيف السجاد والموكيت في الرياض',
    images: ['https://cleanplusteam.com/blog-carpet-cleaning-main.avif'],
    creator: '@cleanplusteam',
    site: '@cleanplusteam',
  },
  alternates: {
    canonical: 'https://cleanplusteam.com/blog/carpet-cleaning',
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
 
  },
  other: {
    'format-detection': 'telephone=yes',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'مقالات تنظيف السجاد - النظافة العصرية',
    'application-name': 'مدونة تنظيف السجاد',
    'msapplication-TileColor': '#00897B',
    'msapplication-config': '/browserconfig.xml',
    'article:section': 'تنظيف السجاد والموكيت',
    'article:tag': 'تنظيف السجاد, الموكيت, الرياض, نصائح التنظيف',
  },
}

// JSON-LD Structured Data for Blog Section
const blogSectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': 'https://cleanplusteam.com/blog/carpet-cleaning',
  'url': 'https://cleanplusteam.com/blog/carpet-cleaning',
  'name': 'مدونة تنظيف السجاد والموكيت - شركة النظافة العصرية',
  'description': 'مدونة متخصصة في تقديم أحدث النصائح والطرق الاحترافية لتنظيف السجاد والموكيت في الرياض',
  'inLanguage': 'ar-SA',
  'publisher': {
    '@type': 'Organization',
    'name': 'شركة النظافة العصرية',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://cleanplusteam.com/logo.avif',
      'width': 800,
      'height': 600
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+966592425757',
      'contactType': 'customer service',
      'availableLanguage': ['Arabic'],
      'areaServed': 'SA'
    }
  },
  'author': {
    '@type': 'Organization',
    'name': 'فريق خبراء تنظيف السجاد',
    'url': 'https://cleanplusteam.com',
    'memberOf': {
      '@type': 'Organization',
      'name': 'شركة النظافة العصرية'
    }
  },
  'mainEntity': {
    '@type': 'ItemList',
    'name': 'مقالات تنظيف السجاد والموكيت',
    'description': 'مجموعة شاملة من المقالات المتخصصة في تنظيف السجاد والموكيت',
    'numberOfItems': 15,
    'itemListOrder': 'https://schema.org/ItemListOrderDescending'
  }
};

// JSON-LD for Specialized Service
const carpetCleaningServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://cleanplusteam.com/blog/carpet-cleaning#service',
  'name': 'خدمات تنظيف السجاد والموكيت المتخصصة',
  'description': 'خدمات تنظيف احترافية للسجاد والموكيت في الرياض باستخدام أحدث التقنيات والمعدات المتطورة',
  'url': 'https://cleanplusteam.com/blog/carpet-cleaning',
  'image': 'https://cleanplusteam.com/carpet-cleaning-service.avif',
  'telephone': '+966592425757',
  'email': 'info@cleanplusteam.com',
  'priceRange': '200 - 1500 ريال سعودي',
  'currenciesAccepted': 'SAR',
  'paymentAccepted': ['Cash', 'Credit Card', 'Bank Transfer', 'Digital Wallet'],
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
  'areaServed': [
    { '@type': 'City', 'name': 'الرياض' },
    { '@type': 'AdministrativeArea', 'name': 'منطقة الرياض' }
  ],
  'serviceArea': {
    '@type': 'GeoCircle',
    'geoMidpoint': {
      '@type': 'GeoCoordinates',
      'latitude': 24.7136,
      'longitude': 46.6753
    },
    'geoRadius': '60000'
  },
  'openingHours': 'Mo-Su 00:00-23:59',
  'availableChannel': {
    '@type': 'ServiceChannel',
    'serviceUrl': 'https://cleanplusteam.com',
    'serviceName': 'خدمة العملاء 24/7',
    'availableLanguage': 'Arabic'
  },
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'باقات تنظيف السجاد المتكاملة',
    'itemListElement': [
      {
        '@type': 'Offer',
        'name': 'باقة التنظيف الأساسي للسجاد',
        'description': 'تنظيف عادي للسجاد مع إزالة الأتربة والبقع السطحية',
        'price': '200-400 ريال',
        'priceCurrency': 'SAR',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تنظيف السجاد الأساسي'
        }
      },
      {
        '@type': 'Offer', 
        'name': 'باقة التنظيف المتقدم بالبخار',
        'description': 'تنظيف عميق بالبخار مع إزالة البقع الصعبة والتعقيم',
        'price': '400-800 ريال',
        'priceCurrency': 'SAR',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تنظيف السجاد بالبخار'
        }
      },
      {
        '@type': 'Offer',
        'name': 'باقة التنظيف الفاخر للسجاد الثمين',
        'description': 'تنظيف متخصص للسجاد الفارسي والحرير مع الحماية والصيانة',
        'price': '800-1500 ريال',
        'priceCurrency': 'SAR',
        'itemOffered': {
          '@type': 'Service',
          'name': 'تنظيف السجاد الفاخر'
        }
      }
    ]
  },
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '4.9',
    'reviewCount': '1247',
    'bestRating': '5',
    'worstRating': '1'
  }
};

// JSON-LD for FAQ about Carpet Cleaning
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'ما هي أفضل طريقة لتنظيف السجاد في المنزل؟',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'أفضل طريقة لتنظيف السجاد تتضمن التنظيف المنتظم بالمكنسة الكهربائية، معالجة البقع فوراً، واستخدام التنظيف بالبخار كل 6-12 شهر. يُنصح بالاستعانة بالخبراء لضمان أفضل النتائج وحماية السجاد من التلف.'
      }
    },
    {
      '@type': 'Question', 
      'name': 'كم مرة يجب تنظيف السجاد في السنة؟',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'يُنصح بتنظيف السجاد مرتين في السنة كحد أدنى، أو 3-4 مرات للمنازل التي تضم أطفال أو حيوانات أليفة. التنظيف اليومي بالمكنسة ضروري، والتنظيف العميق بالبخار كل 6 أشهر مثالي للحفاظ على جودة السجاد.'
      }
    },
    {
      '@type': 'Question',
      'name': 'هل التنظيف بالبخار آمن لجميع أنواع السجاد؟',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'التنظيف بالبخار آمن لمعظم أنواع السجاد الصناعي والطبيعي، لكن السجاد الحريري أو العتيق قد يحتاج طرق تنظيف خاصة. نحن في شركة النظافة العصرية نقوم بفحص نوع السجاد أولاً لاختيار طريقة التنظيف الأنسب.'
      }
    },
    {
      '@type': 'Question',
      'name': 'كيف يمكن إزالة البقع الصعبة من السجاد؟',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'لإزالة البقع الصعبة، يجب التعامل معها بسرعة. نبدأ بامتصاص السائل، ثم نطبق محلول تنظيف مناسب لنوع البقعة. للبقع الصعبة مثل الدم أو القهوة أو الحبر، نستخدم تقنيات متخصصة ومواد احترافية لضمان الإزالة التامة.'
      }
    },
    {
      '@type': 'Question',
      'name': 'ما هي تكلفة تنظيف السجاد في الرياض؟',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'تبدأ أسعار تنظيف السجاد من 200 ريال للتنظيف الأساسي وقد تصل إلى 1500 ريال للسجاد الفاخر والخدمات المتقدمة. السعر يعتمد على حجم السجاد، نوعه، درجة الاتساخ، ونوع الخدمة المطلوبة. نقدم استشارة مجانية وعروض أسعار تنافسية.'
      }
    }
  ]
};

// JSON-LD for Breadcrumb Navigation
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'الرئيسية',
      'item': 'https://cleanplusteam.com'
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'name': 'المدونة',
      'item': 'https://cleanplusteam.com/blog'
    },
    {
      '@type': 'ListItem',
      'position': 3,
      'name': 'مقالات تنظيف السجاد',
      'item': 'https://cleanplusteam.com/blog/carpet-cleaning'
    }
  ]
};

export default function CarpetCleaningBlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(carpetCleaningServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Enhanced Blog Layout with Premium Design */}
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white" lang="ar" dir="rtl">
        
        {/* Hero Section for Carpet Cleaning Blog */}
        <section className="bg-gradient-to-r from-teal-600 via-teal-700 to-green-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <BookOpen className="w-5 h-5" />
                <span className="text-sm font-medium">مدونة متخصصة</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                مقالات تنظيف السجاد
                <span className="block text-teal-200 text-3xl md:text-4xl mt-2">
                  والموكيت في الرياض
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-teal-100 mb-8 leading-relaxed">
                استكشف أحدث النصائح والطرق الاحترافية من خبراء شركة النظافة العصرية
                <br />
                لعناية مثالية بسجادك وحمايته من التلف
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-2xl font-bold">4.9</span>
                  </div>
                  <p className="text-sm text-teal-200">تقييم العملاء</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-2xl font-bold">1000+</span>
                  </div>
                  <p className="text-sm text-teal-200">سجادة نُظفت</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="text-2xl font-bold">24/7</span>
                  </div>
                  <p className="text-sm text-teal-200">خدمة مستمرة</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-purple-400" />
                    <span className="text-2xl font-bold">10+</span>
                  </div>
                  <p className="text-sm text-teal-200">سنوات خبرة</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full"></div>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <nav className="bg-white border-b border-gray-200 py-4">
          <div className="container mx-auto px-4">
            <ol className="flex items-center gap-2 text-sm text-gray-600">
              <li>
                <a href="/" className="hover:text-teal-600 transition-colors">الرئيسية</a>
              </li>
              <li className="flex items-center gap-2">
                <span>/</span>
                <a href="/blog" className="hover:text-teal-600 transition-colors">المدونة</a>
              </li>
              <li className="flex items-center gap-2">
                <span>/</span>
                <span className="text-teal-600 font-medium">مقالات تنظيف السجاد</span>
              </li>
            </ol>
          </div>
        </nav>

        {/* Content Area with Enhanced Styling */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4" />
                <span>أحدث المقالات</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                نصائح وأدلة تنظيف السجاد
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                اكتشف أسرار العناية المثالية بالسجاد والموكيت من خلال مقالاتنا المتخصصة
              </p>
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              
              {/* Content */}
              <div className="lg:col-span-3">
                {children}
              </div>

              {/* Enhanced Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-6 space-y-8">
                  
                  {/* Quick Contact Card */}
                  <div className="bg-gradient-to-br from-teal-600 to-green-600 text-white p-6 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      استشارة مجانية
                    </h3>
                    <p className="text-teal-100 mb-4 text-sm">
                      احصل على استشارة مجانية من خبرائنا لأفضل طرق العناية بسجادك
                    </p>
                    <div className="space-y-3">
                      <a 
                        href="tel:+966592425757" 
                        className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all"
                      >
                        <div className="bg-white/20 p-2 rounded-lg">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium">اتصل الآن</div>
                          <div className="text-xs text-teal-200">+966 59 242 5757</div>
                        </div>
                      </a>
                      
                      <a 
                        href="https://wa.me/966592425757" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-green-500/20 backdrop-blur-sm rounded-lg p-3 hover:bg-green-500/30 transition-all"
                      >
                        <div className="bg-green-500/30 p-2 rounded-lg">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium">واتساب</div>
                          <div className="text-xs text-green-200">محادثة فورية</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Popular Topics */}
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-teal-600" />
                      المواضيع الأكثر قراءة
                    </h3>
                    <div className="space-y-3">
                      {[
                        'طرق إزالة بقع القهوة من السجاد',
                        'تنظيف السجاد الفارسي الثمين',
                        'الحماية من تلف السجاد',
                        'تنظيف سجاد الأطفال بأمان',
                        'أفضل أوقات تنظيف السجاد'
                      ].map((topic, index) => (
                        <a 
                          key={index}
                          href="#" 
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <div className="bg-teal-100 text-teal-600 p-1 rounded-full text-xs font-bold min-w-[24px] h-6 flex items-center justify-center">
                            {index + 1}
                          </div>
                          <span className="text-sm text-gray-700 group-hover:text-teal-600 transition-colors">
                            {topic}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Service Highlights */}
                  <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-teal-600" />
                      خدماتنا المميزة
                    </h3>
                    <div className="space-y-4">
                      {[
                        { icon: '🏠', title: 'تنظيف منزلي', desc: 'خدمة في موقعك' },
                        { icon: '🚚', title: 'نقل وإرجاع', desc: 'خدمة متكاملة' },
                        { icon: '⚡', title: 'تنظيف سريع', desc: 'خدمة 24 ساعة' },
                        { icon: '🛡️', title: 'ضمان الجودة', desc: '100% رضا العملاء' }
                      ].map((service, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                          <div className="text-2xl">{service.icon}</div>
                          <div>
                            <div className="font-medium text-gray-800 text-sm">{service.title}</div>
                            <div className="text-xs text-gray-600">{service.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <section className="bg-gradient-to-r from-teal-50 to-green-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                هل تحتاج لخدمة تنظيف احترافية؟
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                احصل على استشارة مجانية وعرض سعر مخصص لاحتياجاتك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="tel:+966592425757"
                  className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  اتصل الآن للحجز
                </a>
                <a 
                  href="https://wa.me/966592425757" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  محادثة واتساب
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  )
}
