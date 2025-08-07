import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    default: 'مدونة شركة النظافة العصرية - نصائح وأدلة شاملة في التنظيف والتعقيم',
    template: '%s | مدونة شركة النظافة العصرية'
  },
  description: 'مدونة شركة النظافة العصرية - نصائح احترافية وأدلة شاملة في مجال التنظيف والتعقيم ومكافحة الحشرات. خبرة أكثر من 10 سنوات في خدمة الرياض وأهلها.',
  keywords: [
    "مدونة تنظيف",
    "نصائح تنظيف المنازل",
    "أدلة التنظيف",
    "تعقيم المنازل",
    "تنظيف السجاد",
    "تنظيف الخزانات",
    "مكافحة الحشرات",
    "شركة تنظيف الرياض",
    "نصائح تنظيف",
    "أدلة تعقيم",
    "تنظيف احترافي",
    "خدمات التنظيف",
    "نظافة المنازل",
    "تعقيم ضد الفيروسات",
    "تنظيف السجاد بالبخار",
    "غسيل خزانات المياه",
    "مكافحة حشرات منزلية",
    "تنظيف واجهات زجاجية",
    "تنظيف مكاتب وشركات",
    "غسيل كنب وأرائك",
    "تنظيف ستائر",
    "تلميع رخام وبلاط",
    "تنظيف صديق للبيئة",
    "خدمات تنظيف 24 ساعة",
    "شركة تنظيف معتمدة",
    "عاملات تنظيف محترفات",
    "أسعار تنظيف منافسة",
    "ضمان رضا العملاء",
    "تنظيف فلل وقصور",
    "تنظيف شقق مفروشة",
    "تنظيف استراحات",
    "تنظيف محلات تجارية",
    "تنظيف مطاعم",
    "تنظيف مستشفيات",
    "تنظيف مدارس",
    "تنظيف بالبخار",
    "تنظيف جاف",
    "تنظيف بالمواد الطبيعية",
    "تعقيم كورونا",
    "غسيل مراتب",
    "تنظيف سجاد فارسي",
    "تطهير خزانات أرضية",
    "أرخص أسعار تنظيف",
    "شركة تنظيف موثوقة",
    "تنظيف بالعمالة الفلبينية",
    "شركة تنظيف وتعقيم معتمدة",
    "خدمات تنظيف 24 ساعة",
    "شركة تنظيف قريبة",
    "تنظيف شمال الرياض",
    "تنظيف جنوب الرياض",
    "تنظيف شرق الرياض",
    "تنظيف غرب الرياض",
    "عروض تنظيف المنازل",
    "خصومات شركات التنظيف",
    "باقات تنظيف شهرية",
    "تكلفة تنظيف الشقق"
  ],
  authors: [{ name: 'شركة النظافة العصرية' }],
  creator: 'شركة النظافة العصرية',
  publisher: 'شركة النظافة العصرية',
  category: 'مدونة خدمات التنظيف',
  classification: 'مدونة شركة تنظيف',
  openGraph: {
    type: 'website',
    locale: 'ar_AR',
    title: 'مدونة شركة النظافة العصرية - نصائح وأدلة شاملة في التنظيف والتعقيم',
    description: 'مدونة شركة النظافة العصرية - نصائح احترافية وأدلة شاملة في مجال التنظيف والتعقيم ومكافحة الحشرات. خبرة أكثر من 10 سنوات في خدمة الرياض وأهلها.',
    url: 'https://cleanplusteam.com/blog',
    siteName: 'شركة النظافة العصرية',
    images: [
      {
        url: '/logo.avif',
        width: 800,
        height: 600,
        alt: 'مدونة شركة النظافة العصرية',
        type: 'image/avif',
      },
    ],
    countryName: 'Saudi Arabia',
    emails: ['info@cleanplusteam.com'],
    phoneNumbers: ['+966569131252'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مدونة شركة النظافة العصرية - نصائح وأدلة شاملة في التنظيف والتعقيم',
    description: 'مدونة شركة النظافة العصرية - نصائح احترافية وأدلة شاملة في مجال التنظيف والتعقيم ومكافحة الحشرات. خبرة أكثر من 10 سنوات في خدمة الرياض وأهلها.',
    images: ['/logo.avif'],
    creator: '@cleanplusteam',
    site: '@cleanplusteam',
  },
  alternates: {
    canonical: 'https://www.cleanplusteam.com/blog',
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
    'apple-mobile-web-app-title': 'مدونة شركة النظافة العصرية',
    'application-name': 'مدونة شركة النظافة العصرية',
    'msapplication-TileColor': '#00897B',
    'msapplication-config': '/browserconfig.xml',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Structured Data for Blog */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            '@id': 'https://cleanplusteam.com/blog',
            'url': 'https://cleanplusteam.com/blog',
            'name': 'مدونة شركة النظافة العصرية',
            'description': 'مدونة شركة النظافة العصرية - نصائح احترافية وأدلة شاملة في مجال التنظيف والتعقيم ومكافحة الحشرات. خبرة أكثر من 10 سنوات في خدمة الرياض وأهلها.',
            'publisher': {
              '@type': 'Organization',
              'name': 'شركة النظافة العصرية',
              'logo': {
                '@type': 'ImageObject',
                'url': '/logo.avif',
                'width': 800,
                'height': 600
              }
            },
            'author': {
              '@type': 'Organization',
              'name': 'شركة النظافة العصرية',
              'url': 'https://cleanplusteam.com'
            },
            'mainEntity': {
              '@type': 'ItemList',
              'itemListElement': [
                {
                  '@type': 'ListItem',
                  'position': 1,
                  'item': {
                    '@type': 'BlogPosting',
                    'headline': 'دليل شامل لتنظيف المنزل في الرياض',
                    'description': 'نصائح احترافية من خبراء شركة النظافة العصرية لتنظيف المنزل بشكل احترافي. تعرف على أفضل الطرق لتنظيف المطبخ، الحمام، غرف النوم والمزيد.',
                    'url': 'https://cleanplusteam.com/blog/home-cleaning-guide',
                    'datePublished': '2024-03-20',
                    'dateModified': '2024-03-20',
                    'author': {
                      '@type': 'Organization',
                      'name': 'شركة النظافة العصرية'
                    },
                    'publisher': {
                      '@type': 'Organization',
                      'name': 'شركة النظافة العصرية',
                      'logo': {
                        '@type': 'ImageObject',
                        'url': '/logo.avif'
                      }
                    },
                    'image': {
                      '@type': 'ImageObject',
                      'url': '/home-cleaning-guide.avif'
                    },
                    'articleSection': 'تنظيف المنازل',
                    'keywords': 'تنظيف المنازل، نصائح تنظيف، تنظيف المطبخ، تنظيف الحمام، تنظيف غرف النوم'
                  }
                },
                {
                  '@type': 'ListItem',
                  'position': 2,
                  'item': {
                    '@type': 'BlogPosting',
                    'headline': 'دليل تعقيم المنازل في الرياض',
                    'description': 'دليل شامل لتعقيم المنازل مع نصائح احترافية من شركة النظافة العصرية. تعرف على أفضل طرق التعقيم والوقاية من الأمراض المعدية.',
                    'url': 'https://cleanplusteam.com/blog/home-disinfection-guide',
                    'datePublished': '2024-03-18',
                    'dateModified': '2024-03-18',
                    'author': {
                      '@type': 'Organization',
                      'name': 'شركة النظافة العصرية'
                    },
                    'publisher': {
                      '@type': 'Organization',
                      'name': 'شركة النظافة العصرية',
                      'logo': {
                        '@type': 'ImageObject',
                        'url': '/logo.avif'
                      }
                    },
                    'image': {
                      '@type': 'ImageObject',
                      'url': '/home-disinfection.avif'
                    },
                    'articleSection': 'تعقيم المنازل',
                    'keywords': 'تعقيم المنازل، تعقيم ضد الفيروسات، تعقيم كورونا، الوقاية من الأمراض'
                  }
                },
                {
                  '@type': 'ListItem',
                  'position': 3,
                  'item': {
                    '@type': 'BlogPosting',
                    'headline': 'دليل تنظيف السجاد والموكيت في الرياض',
                    'description': 'دليل شامل لتنظيف السجاد والموكيت مع نصائح احترافية. تعرف على أفضل الطرق لإزالة البقع وحماية السجاد من التلف.',
                    'url': 'https://cleanplusteam.com/blog/carpet-cleaning-guide',
                    'datePublished': '2024-03-15',
                    'dateModified': '2024-03-15',
                    'author': {
                      '@type': 'Organization',
                      'name': 'شركة النظافة العصرية'
                    },
                    'publisher': {
                      '@type': 'Organization',
                      'name': 'شركة النظافة العصرية',
                      'logo': {
                        '@type': 'ImageObject',
                        'url': '/logo.avif'
                      }
                    },
                    'image': {
                      '@type': 'ImageObject',
                      'url': '/carpet-cleaning-guide.avif'
                    },
                    'articleSection': 'تنظيف السجاد',
                    'keywords': 'تنظيف السجاد، تنظيف الموكيت، غسيل سجاد، إزالة البقع، حماية السجاد'
                  }
                },
                {
                  '@type': 'ListItem',
                  'position': 4,
                  'item': {
                    '@type': 'BlogPosting',
                    'headline': 'دليل تنظيف خزانات المياه في الرياض',
                    'description': 'دليل شامل لتنظيف خزانات المياه مع نصائح احترافية. تعرف على أهمية تنظيف الخزانات وطرق الحماية من التلوث.',
                    'url': 'https://cleanplusteam.com/blog/water-tank-cleaning-guide',
                    'datePublished': '2024-03-12',
                    'dateModified': '2024-03-12',
                    'author': {
                      '@type': 'Organization',
                      'name': 'شركة النظافة العصرية'
                    },
                    'publisher': {
                      '@type': 'Organization',
                      'name': 'شركة النظافة العصرية',
                      'logo': {
                        '@type': 'ImageObject',
                        'url': '/logo.avif'
                      }
                    },
                    'image': {
                      '@type': 'ImageObject',
                      'url': '/water-leak.avif'
                    },
                    'articleSection': 'تنظيف الخزانات',
                    'keywords': 'تنظيف خزانات المياه، غسيل خزانات، تطهير خزانات، حماية من التلوث'
                  }
                },
                {
                  '@type': 'ListItem',
                  'position': 5,
                  'item': {
                    '@type': 'BlogPosting',
                    'headline': 'دليل مكافحة الحشرات في الرياض',
                    'description': 'دليل شامل لمكافحة الحشرات مع نصائح احترافية. تعرف على أفضل طرق الوقاية من الحشرات ومكافحتها بأمان.',
                    'url': 'https://cleanplusteam.com/blog/pest-control-guide',
                    'datePublished': '2024-03-10',
                    'dateModified': '2024-03-10',
                    'author': {
                      '@type': 'Organization',
                      'name': 'شركة النظافة العصرية'
                    },
                    'publisher': {
                      '@type': 'Organization',
                      'name': 'شركة النظافة العصرية',
                      'logo': {
                        '@type': 'ImageObject',
                        'url': '/logo.avif'
                      }
                    },
                    'image': {
                      '@type': 'ImageObject',
                      'url': '/pest_control.jpg'
                    },
                    'articleSection': 'مكافحة الحشرات',
                    'keywords': 'مكافحة الحشرات، مكافحة حشرات منزلية، الوقاية من الحشرات، مكافحة آمنة'
                  }
                }
              ]
            },
            'breadcrumb': {
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
                }
              ]
            }
          })
        }}
      />

      {/* FAQ Schema for Blog */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': 'ما هي أفضل طرق تنظيف المنازل؟',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'أفضل طرق تنظيف المنازل تشمل التنظيف المنتظم، استخدام المواد المناسبة لكل سطح، تنظيف المطبخ والحمام بعناية خاصة، وتنظيف السجاد والستائر بانتظام.'
                }
              },
              {
                '@type': 'Question',
                'name': 'كيف يمكن تعقيم المنزل ضد الفيروسات؟',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'تعقيم المنزل ضد الفيروسات يتطلب استخدام مواد معقمة قوية، تنظيف الأسطح التي يتم لمسها بكثرة، تهوية المنزل، وغسل اليدين بانتظام.'
                }
              },
              {
                '@type': 'Question',
                'name': 'ما أهمية تنظيف خزانات المياه؟',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'تنظيف خزانات المياه مهم جداً للحفاظ على صحة الأسرة، حيث يمنع تراكم البكتيريا والطفيليات، ويضمن مياه نظيفة وآمنة للشرب والاستخدام.'
                }
              },
              {
                '@type': 'Question',
                'name': 'كيف يمكن مكافحة الحشرات بأمان؟',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'مكافحة الحشرات بأمان تتطلب استخدام مواد آمنة، إغلاق النقاط التي تدخل منها الحشرات، الحفاظ على نظافة المنزل، واستخدام طرق طبيعية عند الإمكان.'
                }
              },
              {
                '@type': 'Question',
                'name': 'ما هي أسعار خدمات التنظيف؟',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'أسعار خدمات التنظيف تختلف حسب حجم العمل ونوع الخدمة. نقدم أسعار تنافسية وضمان رضا العملاء. اتصل بنا للحصول على عرض سعر مجاني.'
                }
              }
            ]
          })
        }}
      />

      {/* Local Business Schema for Blog */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://cleanplusteam.com/blog',
            'name': 'شركة النظافة العصرية - المدونة',
            'description': 'مدونة شركة النظافة العصرية - نصائح احترافية وأدلة شاملة في مجال التنظيف والتعقيم ومكافحة الحشرات',
            'url': 'https://cleanplusteam.com/blog',
            'telephone': '+966569131252',
            'email': 'info@cleanplusteam.com',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'الرياض',
              'addressRegion': 'الرياض',
              'addressCountry': 'SA'
            },
            'geo': {
              '@type': 'GeoCoordinates',
              'latitude': '24.7136',
              'longitude': '46.6753'
            },
            'openingHours': 'Mo-Su 08:00-22:00',
            'priceRange': '$$',
            'paymentAccepted': ['Cash', 'Credit Card', 'Bank Transfer'],
            'currenciesAccepted': 'SAR',
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
            'hasOfferCatalog': {
              '@type': 'OfferCatalog',
              'name': 'خدمات التنظيف والتعقيم',
              'itemListElement': [
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'تنظيف المنازل',
                    'description': 'خدمات تنظيف شاملة للمنازل والفلل'
                  }
                },
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'تعقيم المنازل',
                    'description': 'خدمات تعقيم ضد الفيروسات والبكتيريا'
                  }
                },
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'تنظيف السجاد',
                    'description': 'تنظيف وغسيل السجاد والموكيت'
                  }
                },
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'تنظيف الخزانات',
                    'description': 'تنظيف وتطهير خزانات المياه'
                  }
                },
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': 'مكافحة الحشرات',
                    'description': 'مكافحة آمنة وفعالة للحشرات'
                  }
                }
              ]
            }
          })
        }}
      />

      {/* Google Analytics for Blog */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: 'مدونة شركة النظافة العصرية',
            page_location: 'https://cleanplusteam.com/blog'
          });
        `}
      </Script>

      {/* Facebook Pixel for Blog */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_FACEBOOK_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </Script>

      {children}
    </>
  )
}
