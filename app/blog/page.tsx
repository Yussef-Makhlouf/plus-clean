import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'مدونة شركة النظافة العصرية - نصائح واحترافية في التنظيف والتعقيم',
  description: 'مدونة شاملة تحتوي على نصائح احترافية في التنظيف والتعقيم ومكافحة الحشرات. دليل شامل لجميع خدمات النظافة في الرياض.',
  keywords: [
    "مدونة تنظيف",
    "نصائح تنظيف",
    "دليل تنظيف المنزل",
    "تعقيم المنازل",
    "مكافحة الحشرات",
    "تنظيف السجاد",
    "تنظيف خزانات المياه",
    "شركة نظافة الرياض"
  ]
}

const blogPosts = [
  {
    id: 'home-cleaning-guide',
    title: 'دليل شامل لتنظيف المنزل في الرياض',
    description: 'نصائح احترافية من خبراء شركة النظافة العصرية لتنظيف المنزل بشكل احترافي. تعرف على أفضل الطرق لتنظيف المطبخ، الحمام، غرف النوم والمزيد.',
    image: '/home-cleaning-guide.avif',
    date: '2024-03-20',
    readTime: '8 دقائق',
    category: 'تنظيف المنازل',
    slug: 'home-cleaning-guide'
  },
  {
    id: 'home-disinfection-guide',
    title: 'دليل تعقيم المنازل في الرياض',
    description: 'دليل شامل لتعقيم المنازل مع نصائح احترافية من شركة النظافة العصرية. تعرف على أفضل طرق التعقيم والوقاية من الأمراض المعدية.',
    image: '/home-disinfection.avif',
    date: '2024-03-18',
    readTime: '10 دقائق',
    category: 'تعقيم المنازل',
    slug: 'home-disinfection-guide'
  },
  {
    id: 'carpet-cleaning-guide',
    title: 'دليل تنظيف السجاد والموكيت في الرياض',
    description: 'دليل شامل لتنظيف السجاد والموكيت مع نصائح احترافية. تعرف على أفضل الطرق لإزالة البقع وحماية السجاد من التلف.',
    image: '/carpet-cleaning-guide.avif',
    date: '2024-03-15',
    readTime: '12 دقيقة',
    category: 'تنظيف السجاد',
    slug: 'carpet-cleaning-guide'
  },
  {
    id: 'water-tank-cleaning-guide',
    title: 'دليل تنظيف خزانات المياه في الرياض',
    description: 'دليل شامل لتنظيف خزانات المياه مع نصائح احترافية. تعرف على أهمية تنظيف الخزانات وطرق الحماية من التلوث.',
    image: '/water-leak.avif',
    date: '2024-03-12',
    readTime: '15 دقيقة',
    category: 'تنظيف الخزانات',
    slug: 'water-tank-cleaning-guide'
  },
  {
    id: 'pest-control-guide',
    title: 'دليل مكافحة الحشرات في الرياض',
    description: 'دليل شامل لمكافحة الحشرات مع نصائح احترافية. تعرف على أفضل طرق الوقاية من الحشرات ومكافحتها بأمان.',
    image: '/pest_control.jpg',
    date: '2024-03-10',
    readTime: '14 دقيقة',
    category: 'مكافحة الحشرات',
    slug: 'pest-control-guide'
  }
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              مدونة شركة النظافة العصرية
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نصائح احترافية وأدلة شاملة في مجال التنظيف والتعقيم ومكافحة الحشرات. 
              خبرة أكثر من 10 سنوات في خدمة الرياض وأهلها.
            </p>
          </div>

          {/* Categories Filter */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">تصفح حسب الفئة</h2>
            <div className="flex flex-wrap gap-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                جميع المقالات
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                تنظيف المنازل
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                تعقيم المنازل
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                تنظيف السجاد
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                تنظيف الخزانات
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                مكافحة الحشرات
              </button>
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">المقال المميز</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {blogPosts[0].category}
                    </span>
                    <span className="mx-2">•</span>
                    <time dateTime={blogPosts[0].date}>
                      {new Date(blogPosts[0].date).toLocaleDateString('ar-SA')}
                    </time>
                    <span className="mx-2">•</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {blogPosts[0].description}
                  </p>
                  <Link 
                    href={`/blog/${blogPosts[0].slug}`}
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                  >
                    اقرأ المقال كاملاً
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* All Posts Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">جميع المقالات</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        {post.category}
                      </span>
                      <span className="mx-2">•</span>
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('ar-SA')}
                      </time>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.description}
                    </p>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-bold hover:bg-gray-200 transition-colors"
                    >
                      اقرأ المزيد
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              اشترك في النشرة البريدية
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              احصل على أحدث النصائح والمراجعات في مجال التنظيف والتعقيم مباشرة في بريدك الإلكتروني
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                اشتراك
              </button>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-gray-100 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              هل تحتاج مساعدة احترافية؟
            </h2>
            <p className="text-gray-600 mb-6">
              فريق شركة النظافة العصرية جاهز لمساعدتك في جميع خدمات التنظيف والتعقيم
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+966569131252"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                اتصل بنا الآن
              </a>
              <a 
                href="https://wa.me/966569131252"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
              >
                تواصل عبر واتساب
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 