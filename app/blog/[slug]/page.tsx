import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// نموذج لقاعدة بيانات المقالات
const blogPosts = {
  'home-cleaning-guide': {
    title: "دليل شامل لتنظيف المنزل في الرياض",
    date: "2024-03-20",
    content: `
      <h2>مقدمة عن تنظيف المنزل</h2>
      <p>يعد تنظيف المنزل من المهام الأساسية التي تحتاج إلى تخطيط وتنظيم جيد. في هذا الدليل، سنقدم لكم أفضل الممارسات والنصائح لتنظيف منزلكم بشكل احترافي.</p>

      <h2>خطوات تنظيف المنزل</h2>
      <h3>1. التخطيط والتحضير</h3>
      <ul>
        <li>تحديد الغرف التي تحتاج إلى تنظيف</li>
        <li>تجهيز أدوات التنظيف اللازمة</li>
        <li>ترتيب الأولويات في التنظيف</li>
      </ul>

      <h3>2. تنظيف غرف النوم</h3>
      <ul>
        <li>ترتيب السرير وتغيير الملاءات</li>
        <li>تنظيف الأثاث والأسطح</li>
        <li>تنظيف النوافذ والستائر</li>
        <li>كنس وتطهير الأرضيات</li>
      </ul>

      <h3>3. تنظيف المطبخ</h3>
      <ul>
        <li>تنظيف الأواني والأسطح</li>
        <li>تنظيف الأجهزة الكهربائية</li>
        <li>تطهير أماكن تحضير الطعام</li>
        <li>تنظيف الأرضيات</li>
      </ul>

      <h2>نصائح مهمة للتنظيف</h2>
      <ul>
        <li>استخدام منتجات تنظيف آمنة وفعالة</li>
        <li>التنظيف بشكل منتظم لتجنب تراكم الأوساخ</li>
        <li>الاهتمام بالتهوية الجيدة أثناء التنظيف</li>
        <li>استخدام أدوات تنظيف مناسبة لكل سطح</li>
      </ul>

      <h2>متى تحتاج لخدمات شركة تنظيف محترفة؟</h2>
      <p>رغم أهمية التنظيف المنزلي المنتظم، هناك حالات تستدعي الاستعانة بشركة تنظيف محترفة:</p>
      <ul>
        <li>التنظيف العميق الدوري</li>
        <li>تنظيف المفروشات والستائر</li>
        <li>تنظيف الواجهات والنوافذ الخارجية</li>
        <li>تنظيف وتعقيم المنزل بعد التجديدات</li>
      </ul>
    `,
    imageUrl: "/home-cleaning-guide.avif",
    author: "فريق النظافة العصرية"
  },
  'home-disinfection-guide': {
    title: "دليل شامل لتنظيف المنزل في الرياض",
    date: "2024-03-20",
    author: "فريق النظافة العصرية",
    imageUrl: "/home-disinfection.avif",
    content: `
      <h2>مقدمة عن تنظيف المنزل</h2>
    `,
  },
  'riyadh-home-cleaning-guide': {
    title: "دليل شامل لتنظيف المنزل في الرياض",
    date: "2024-03-20",
    author: "فريق النظافة العصرية",
    imageUrl: "/home-cleaning-riyadh-guide.avif",
    content: `
      <h2>مقدمة عن تنظيف المنزل</h2>
    `,
  },
  'riyadh-home-disinfection-guide': {
    title: "دليل شامل لتنظيف المنزل في الرياض",
    date: "2024-03-20",
    author: "فريق النظافة العصرية",
    imageUrl: "/home-disinfection-riyadh-guide.avif",
    content: `
      <h2>مقدمة عن تنظيف المنزل</h2>
    `,
  }
  // يمكن إضافة المزيد من المقالات هنا
}

// دالة لتوليد المعاملات الثابتة للبناء
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    return {
      title: 'مقال غير موجود',
      description: 'عذراً، المقال الذي تبحث عنه غير موجود'
    }
  }

  return {
    title: `${post.title} - مدونة شركة النظافة العصرية`,
    description: post.title,
    openGraph: {
      title: post.title,
      description: post.title,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.imageUrl,
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <>
    <Header />
    <div className="container mx-auto px-4 py-12">
      <Link href="/blog" className="text-teal-600 hover:text-teal-700 flex items-center mb-8">
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        العودة إلى المدونة
      </Link>

      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('ar-SA', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span className="mx-2">•</span>
            <span>{post.author}</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="leading-relaxed space-y-6"
          />
        </div>
      </article>
    </div>
    <Footer />
    </>
  )
} 