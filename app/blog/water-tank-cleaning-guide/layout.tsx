import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'دليل تنظيف خزانات المياه في الرياض - حماية صحتك من التلوث',
  description: 'دليل شامل لتنظيف خزانات المياه في الرياض مع نصائح احترافية. تعرف على أهمية تنظيف الخزانات وطرق الحماية من التلوث.',
  keywords: [
    "تنظيف خزانات المياه الرياض",
    "تعقيم خزانات المياه",
    "صيانة خزانات المياه",
    "تنظيف خزانات علوية",
    "تنظيف خزانات أرضية",
    "حماية خزانات المياه",
    "شركة تنظيف خزانات الرياض",
    "مكافحة تلوث المياه",
    "تنظيف خزانات المياه الرياض",
    "تعقيم خزانات المياه الرياض",
    "صيانة خزانات المياه الرياض",
    "شركة تنظيف خزانات الرياض",
    "تنظيف خزانات المياه الرياض",
    "تعقيم خزانات المياه الرياض",
    "صيانة خزانات المياه الرياض"
  ],
  authors: [{ name: 'شركة النظافة العصرية' }],
  creator: 'شركة النظافة العصرية',
  publisher: 'شركة النظافة العصرية',
  category: 'خدمات تنظيف الخزانات',
  classification: 'دليل تنظيف خزانات المياه',
  openGraph: {
    type: 'article',
    locale: 'ar_SA',
    title: 'دليل تنظيف خزانات المياه في الرياض - حماية صحتك من التلوث',
    description: 'دليل شامل لتنظيف خزانات المياه في الرياض مع نصائح احترافية. تعرف على أهمية تنظيف الخزانات وطرق الحماية من التلوث.',
    url: 'https://cleanplusteam.com/blog/water-tank-cleaning-guide',
    siteName: 'شركة النظافة العصرية',
    images: [
      {
        url: 'https://cleanplusteam.com/water-leak.avif',
        width: 1200,
        height: 630,
        alt: 'دليل تنظيف خزانات المياه في الرياض',
        type: 'image/avif',
      },
    ],
    countryName: 'Saudi Arabia',
    emails: ['info@cleanplusteam.com'],
    phoneNumbers: ['+966569131252'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'دليل تنظيف خزانات المياه في الرياض - حماية صحتك من التلوث',
    description: 'دليل شامل لتنظيف خزانات المياه في الرياض مع نصائح احترافية من شركة النظافة العصرية',
    images: ['https://cleanplusteam.com/water-leak.avif'],
    creator: '@cleanplusteam',
    site: '@cleanplusteam',
  },
  alternates: {
    canonical: 'https://cleanplusteam.com/blog/water-tank-cleaning-guide',
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
    'article:published_time': '2024-03-12T00:00:00.000Z',
    'article:modified_time': '2024-03-12T00:00:00.000Z',
    'article:author': 'شركة النظافة العصرية',
    'article:section': 'خدمات تنظيف الخزانات',
    'article:tag': ['تنظيف خزانات المياه', 'الرياض', 'تعقيم الخزانات', 'شركة تنظيف خزانات'],
  },
}

export default function WaterTankCleaningGuideLayout({
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