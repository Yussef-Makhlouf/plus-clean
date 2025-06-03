'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Star, Clock, Shield } from 'lucide-react'

const features = [
  { icon: <CheckCircle2 className="w-6 h-6" />, text: 'جودة عالية في جميع خدمات التنظيف المنزلية والتجارية' },
  { icon: <Star className="w-6 h-6" />, text: 'فريق محترف بخبرة سنوات في تنظيف المنازل والمكاتب' },
  { icon: <Clock className="w-6 h-6" />, text: 'خدمة عملاء متوفرة 24/7 واستجابة سريعة للحجوزات' },
  { icon: <Shield className="w-6 h-6" />, text: 'ضمان شامل على جميع خدماتنا ورضا العملاء' },
  { icon: <CheckCircle2 className="w-6 h-6" />, text: 'استخدام مواد تنظيف صديقة للبيئة وآمنة' },
  { icon: <Star className="w-6 h-6" />, text: 'أسعار تنافسية وعروض حصرية للعملاء الجدد' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden" aria-label="شركة النظافة العصرية - خدمات تنظيف احترافية">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" aria-hidden="true" />
      <div className="relative container mx-auto px-6 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900">
                <span className="bg-gradient-to-l from-[#00897B] to-teal-600 bg-clip-text text-transparent">
                  شركة النظافة العصرية
                </span>
                <br />
                <span className="text-3xl md:text-4xl block mt-2 text-gray-700">خدمات تنظيف احترافية للمنازل والمكاتب والشركات</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl">
                نحن رواد في تقديم خدمات التنظيف الشاملة في المملكة العربية السعودية. فريقنا المدرب يستخدم أحدث التقنيات والمواد الصديقة للبيئة لضمان بيئة صحية وآمنة لك ولعائلتك أو موظفيك. اكتشف الفرق مع خدماتنا المتخصصة في تنظيف المنازل، المكاتب، السجاد، النوافذ، التعقيم وأكثر.
              </p>
              <ul className="list-disc list-inside text-lg text-gray-600 space-y-1">
                <li>تنظيف عميق وإزالة البقع الصعبة</li>
                <li>تعقيم شامل ضد الفيروسات والبكتيريا</li>
                <li>خدمة سريعة ومرنة حسب جدولك</li>
                <li>ضمان رضا العملاء بنسبة 100%</li>
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-lg border border-gray-100"
                >
                  <div className="text-[#00897B]">{feature.icon}</div>
                  <span className="font-medium text-gray-800">{feature.text}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-l from-[#00897B] to-teal-600 text-white px-8 py-4 rounded-xl flex items-center gap-3 text-lg font-semibold shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#00897B] focus:ring-offset-2 transition"
                aria-label="احجز خدمتك الآن مع شركة النظافة العصرية"
              >
                احجز خدمتك الآن
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-800 px-8 py-4 rounded-xl border-2 border-gray-200 text-lg font-semibold shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#00897B] focus:ring-offset-2 transition"
                aria-label="تعرف على شركة النظافة العصرية"
              >
                تعرف علينا
              </motion.a>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              <span>خدمة متوفرة في: الرياض، جدة، الدمام، وجميع أنحاء المملكة</span>
            </div>
          </motion.div>
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/arabic color.avif"
                alt="خدمات تنظيف احترافية في السعودية - شركة النظافة العصرية"
                fill
                className="object-contain"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00897B]/20 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4"
              aria-label="تقييم العملاء"
            >
              <div className="bg-[#00897B]/10 p-3 rounded-full">
                <Star className="w-6 h-6 text-[#00897B]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">4.9/5</div>
                <div className="text-sm text-gray-600">تقييم العملاء من أكثر من 1000 عميل سعيد</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}