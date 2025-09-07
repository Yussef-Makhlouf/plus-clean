'use client'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 overflow-hidden pt-10" aria-label="أفضل شركة تنظيف بالرياض">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
            خدمة تنظيف احترافية
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            أفضل شركة تنظيف بالرياض
          </h1>
          
          <p className="text-xl mb-8 text-teal-50 leading-relaxed">
            خدمات تنظيف منازل، فلل، سجاد، وخزانات في جميع أحياء الرياض
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+966592425757"
              className="group bg-white text-teal-600 px-8 py-4 rounded-xl flex items-center gap-2 text-lg font-medium hover:bg-gray-50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20"
              aria-label="احجز خدمة تنظيف في الرياض الآن"
            >
              احجز خدمة التنظيف الآن
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/services"
              className="group bg-teal-500/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-teal-500/30 transition-all duration-300 border border-white/10"
              aria-label="تعرف على أفضل شركة تنظيف بالرياض"
            >
              تعرف على خدماتنا
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex items-center gap-8 text-sm text-teal-50">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-300 rounded-full animate-pulse" />
              خدمة 24/7
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-300 rounded-full animate-pulse" />
              ضمان الجودة
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-300 rounded-full animate-pulse" />
              أسعار تنافسية
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}