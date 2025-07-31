import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'دليل شامل لتنظيف المنزل في الرياض - نصائح احترافية من شركة النظافة العصرية',
  description: 'دليل شامل لتنظيف المنزل في الرياض مع نصائح احترافية من خبراء شركة النظافة العصرية. تعرف على أفضل الطرق لتنظيف المطبخ، الحمام، غرف النوم والمزيد.',
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
    phoneNumbers: ['+966569131252'],
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
    'article:tag': ['تنظيف المنازل', 'الرياض', 'نصائح تنظيف', 'شركة نظافة'],
  },
}

export default function HomeCleaningGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {children}
      </main>
      <Footer />
    </>
  )
} 