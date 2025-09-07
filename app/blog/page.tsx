'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState } from 'react'

const blogPosts = [
  {
    id: 'futniture-moving',
    title: 'أفضل شركة نقل عفش بالرياض: دليلك الشامل لعام 2025 لنقل وتغليف وفك وتركيب الأثاث بأمان',
    description: 'تبحث عن أفضل تجربة نقل عفش بالرياض؟ دليلك الشامل لعام 2025 يغطي كل شيء من اختيار الشركة الموثوقة، نصائح التغليف الاحترافي، إلى خدمات الفك والتركيب. احصل على انتقال آمن وسريع لأثاثك.',
    image: '/serv3.avif',
    date: '2025-08-31',
    readTime: '10 دقائق',
    category: 'نقل العفش',
    slug: 'futniture-moving'
  },
  {
    id: 'home-cleaning-guide',
    title: 'دليل شامل لتنظيف المنزل في الرياض',
    description: 'نصائح احترافية من خبراء شركة النظافة العصرية لتنظيف المنزل بشكل احترافي. تعرف على أفضل الطرق لتنظيف المطبخ، الحمام، غرف النوم والمزيد.',
    image: '/home-cleaning-guide.avif',
    date: '2025-03-20',
    readTime: '8 دقائق',
    category: 'تنظيف المنازل',
    slug: 'home-cleaning-guide'
  },
  {
    id: 'home-disinfection-guide',
    title: 'دليل تعقيم المنازل في الرياض',
    description: 'دليل شامل لتعقيم المنازل مع نصائح احترافية من شركة النظافة العصرية. تعرف على أفضل طرق التعقيم والوقاية من الأمراض المعدية.',
    image: '/home-disinfection.avif',
    date: '2025-03-18',
    readTime: '10 دقائق',
    category: 'تعقيم المنازل',
    slug: 'home-disinfection-guide'
  },
  {
    id: 'carpet-cleaning-guide',
    title: 'دليل تنظيف السجاد والموكيت في الرياض',
    description: 'دليل شامل لتنظيف السجاد والموكيت مع نصائح احترافية. تعرف على أفضل الطرق لإزالة البقع وحماية السجاد من التلف.',
    image: '/carpet-cleaning-guide.avif',
    date: '2025-03-15',
    readTime: '12 دقيقة',
    category: 'تنظيف السجاد',
    slug: 'carpet-cleaning-guide'
  },
  {
    id: 'water-tank-cleaning-guide',
    title: 'دليل تنظيف خزانات المياه في الرياض',
    description: 'دليل شامل لتنظيف خزانات المياه مع نصائح احترافية. تعرف على أهمية تنظيف الخزانات وطرق الحماية من التلوث.',
    image: '/water-leak.avif',
    date: '2025-03-12',
    readTime: '15 دقيقة',
    category: 'تنظيف الخزانات',
    slug: 'water-tank-cleaning-guide'
  },
  {
    id: 'pest-control-guide',
    title: 'دليل مكافحة الحشرات في الرياض',
    description: 'دليل شامل لمكافحة الحشرات مع نصائح احترافية. تعرف على أفضل طرق الوقاية من الحشرات ومكافحتها بأمان.',
    image: '/pest_control.jpg',
    date: '2025-03-10',
    readTime: '14 دقيقة',
    category: 'مكافحة الحشرات',
    slug: 'pest-control-guide'
  },
  {
    id: 'electrical-cleaning-guide',
    title: 'دليل خدمات التنظيف في الرياض',
    description: 'دليل شامل خدمات التنظيف في الرياض مع نصائح احترافية تناسب سكان الرياض ',
    image: '/home_cleaning.avif',
    date: '2025-03-08',
    href: '/blog/clean-catalog',
    slug: 'clean-catalog'   
  },
   {
    id: 'carpet-cleaning-services',
    title: 'دليل خدمات تنظيف السجاد و الموكيت في الرياض',
    description: 'دليل شامل خدمات تنظيف السجاد و الموكيت  في الرياض مع نصائح احترافية تناسب سكان الرياض ',
    image: '/home_cleaning.avif',
    date: '2025-03-08',
    href: '/blog/carpet-cleaning',
    slug: 'carpet-cleaning'   
  }
]

const categories = [
  'جميع المقالات',
  'نقل العفش',
  'تنظيف المنازل',
  'تعقيم المنازل',
  'تنظيف السجاد',
  'تنظيف الخزانات',
  'مكافحة الحشرات'
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('جميع المقالات')

  const filteredPosts = selectedCategory === 'جميع المقالات' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPost = filteredPosts[0]
  const remainingPosts = filteredPosts.slice(1)

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
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">المقال المميز</h2>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {featuredPost.category}
                      </span>
                      <span className="mx-2">•</span>
                      <time dateTime={featuredPost.date}>
                        {new Date(featuredPost.date).toLocaleDateString('ar-SA')}
                      </time>
                      <span className="mx-2">•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.description}
                    </p>
                    <Link 
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                    >
                      اقرأ المقال كاملاً
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* All Posts Grid */}
          {remainingPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">جميع المقالات</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {remainingPosts.map((post) => (
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
          )}

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">لا توجد مقالات في هذه الفئة</h3>
              <p className="text-gray-600 mb-6">جرب اختيار فئة أخرى أو العودة لجميع المقالات</p>
              <button
                onClick={() => setSelectedCategory('جميع المقالات')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                عرض جميع المقالات
              </button>
            </div>
          )}

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
                href="tel:+966592425757"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                اتصل بنا الآن
              </a>
              <a 
                href="https://wa.me/966592425757"
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