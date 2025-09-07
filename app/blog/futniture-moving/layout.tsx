import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'أفضل شركة نقل عفش بالرياض: دليلك الشامل لعام 2025 لنقل وتغليف وفك وتركيب الأثاث بأمان',
  description: 'تبحث عن أفضل تجربة نقل عفش بالرياض؟ دليلك الشامل يغطي كل شيء من اختيار الشركة الموثوقة، نصائح التغليف الاحترافي، إلى خدمات الفك والتركيب. احصل على انتقال آمن وسريع لأثاثك.',
  keywords: ['نقل عفش', 'نقل اثاث', 'شركة نقل عفش بالرياض', 'تغليف اثاث', 'فك وتركيب اثاث', 'نقل عفش بالرياض', 'افضل شركة نقل عفش', 'دينا نقل عفش', 'نقل عفش داخل الرياض'],
  openGraph: {
    title: 'أفضل شركة نقل عفش بالرياض: دليلك الشامل لعام 2025',
    description: 'دليلك المتكامل لنقل الأثاث في الرياض بأمان وكفاءة. خدمات فك، تغليف، وتركيب احترافية.',
    type: 'article',
    url: '/blog/futniture-moving',
    images: [
      {
        url: '/storage-service.avif',
        width: 1200,
        height: 630,
        alt: 'فريق نقل عفش محترف في الرياض',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'أفضل شركة نقل عفش بالرياض: دليلك الشامل لعام 2025',
    description: 'كل ما تحتاجه لمعرفة نقل الأثاث في الرياض. نصائح وخدمات احترافية لانتقال سلس وآمن.',
    images: ['/storage-service.avif'],
  },
  alternates: {
    canonical: '/blog/futniture-moving',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'article:published_time': '2025-08-31T00:00:00.000Z',
  },
  
};

export default function FurnitureMovingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
