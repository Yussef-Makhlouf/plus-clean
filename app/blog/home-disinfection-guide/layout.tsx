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
    phoneNumbers: ['+966569131252'],
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

export default function HomeDisinfectionGuideLayout({
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