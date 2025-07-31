import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'دليل مكافحة الحشرات في الرياض - حماية منزلك من الآفات الضارة',
  description: 'دليل شامل لمكافحة الحشرات في الرياض مع نصائح احترافية. تعرف على أفضل طرق الوقاية من الحشرات ومكافحتها بأمان.',
  keywords: [
    "مكافحة الحشرات الرياض",
    "مكافحة الصراصير",
    "مكافحة النمل",
    "مكافحة الفئران",
    "مكافحة البق",
    "شركة مكافحة حشرات الرياض",
    "مكافحة آمنة للحشرات",
    "وقاية من الحشرات",
    "مكافحة الصراصير الرياض",
    "مكافحة النمل الرياض",
    "مكافحة الفئران الرياض",
    "مكافحة البق الرياض",
    "شركة مكافحة حشرات",
    "مكافحة الحشرات آمنة",
    "نصائح مكافحة الحشرات"
  ],
  authors: [{ name: 'شركة النظافة العصرية' }],
  creator: 'شركة النظافة العصرية',
  publisher: 'شركة النظافة العصرية',
  category: 'خدمات مكافحة الحشرات',
  classification: 'دليل مكافحة الحشرات',
  openGraph: {
    type: 'article',
    locale: 'ar_SA',
    title: 'دليل مكافحة الحشرات في الرياض - حماية منزلك من الآفات الضارة',
    description: 'دليل شامل لمكافحة الحشرات في الرياض مع نصائح احترافية. تعرف على أفضل طرق الوقاية من الحشرات ومكافحتها بأمان.',
    url: 'https://cleanplusteam.com/blog/pest-control-guide',
    siteName: 'شركة النظافة العصرية',
    images: [
      {
        url: 'https://cleanplusteam.com/pest_control.jpg',
        width: 1200,
        height: 630,
        alt: 'دليل مكافحة الحشرات في الرياض',
        type: 'image/jpeg',
      },
    ],
    countryName: 'Saudi Arabia',
    emails: ['info@cleanplusteam.com'],
    phoneNumbers: ['+966569131252'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'دليل مكافحة الحشرات في الرياض - حماية منزلك من الآفات',
    description: 'دليل شامل لمكافحة الحشرات في الرياض مع نصائح احترافية من شركة النظافة العصرية',
    images: ['https://cleanplusteam.com/pest_control.jpg'],
    creator: '@cleanplusteam',
    site: '@cleanplusteam',
  },
  alternates: {
    canonical: 'https://cleanplusteam.com/blog/pest-control-guide',

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
    'article:published_time': '2024-03-10T00:00:00.000Z',
    'article:modified_time': '2024-03-10T00:00:00.000Z',
    'article:author': 'شركة النظافة العصرية',
    'article:section': 'خدمات مكافحة الحشرات',
    'article:tag': ['مكافحة الحشرات', 'الرياض', 'مكافحة الصراصير', 'شركة مكافحة حشرات'],
  },
}

export default function PestControlGuideLayout({
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