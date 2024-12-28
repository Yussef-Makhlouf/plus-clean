'use client'

import Image from 'next/image'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const servicesImages = [
  {
    title: 'تنظيف المنازل',
    description: 'خدمة تنظيف شاملة للمنازل مع التركيز على أدق التفاصيل لضمان نظافة مثالية',
    image: '/Artboard 1.avif',
    features: ['تنظيف عميق', 'إزالة الغبار', 'تعقيم شامل'],
    color: 'from-blue-500 to-cyan-500',
    rating: 4.9
  },
  {
    title: 'تنظيف المكاتب',
    description: 'خدمات احترافية لتنظيف المكاتب والشركات لخلق بيئة عمل صحية ومريحة',
    image: '/Artboard 2.avif',
    features: ['تنظيف يومي', 'تلميع الأرضيات', 'تنظيف النوافذ'],
    color: 'from-purple-500 to-pink-500',
    rating: 4.8
  },
  {
    title: 'تنظيف السجاد',
    description: 'خدمة متخصصة في تنظيف وتعقيم السجاد باستخدام أحدث التقنيات',
    image: '/Artboard 3.avif',
    features: ['تنظيف عميق', 'إزالة البقع', 'تجفيف سريع'],
    color: 'from-orange-500 to-red-500',
    rating: 4.7
  },
  {
    title: 'تنظيف النوافذ',
    description: 'خدمة متخصصة في تنظيف النوافذ والواجهات الزجاجية مع تركيز على التنظيف الدقيق',
    image: '/Artboard 4.avif',
    features: ['تنظيف عميق', 'تلميع متقدم', 'تنظيف النوافذ المتحركة'],
    color: 'from-green-500 to-teal-500',
    rating: 4.6
  },
  {
    title: 'التعقيم الشامل',
    description: 'خدمة تعقيم متقدمة للحماية من الجراثيم والبكتيريا بأحدث الأجهزة والمعدات',
    image: '/Artboard 5.avif',  
    features: ['تنظيف عميق', 'تلميع متقدم', 'تنظيف النوافذ المتحركة'],
    color: 'from-yellow-500 to-amber-500',
    rating: 4.5
  },
  {
    title: 'تنظيف صديق للبيئة',
    description: 'خدمة تنظيف متخصصة في استخدام منتجات ومواد صديقة للبيئة',
    image: '/Artboard 6.avif',
    features: ['تنظيف عميق', 'إزالة البقع', 'تنظيف النوافذ المتحركة'],
    color: 'from-emerald-500 to-green-500',
    rating: 4.4
  }
]


export default function ServicesWithImages() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">خدماتنا المتميزة</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesImages.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 w-64 mx-auto">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className={`w-5 h-5 text-gradient-to-r ${service.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-xl text-white bg-gradient-to-r ${service.color} 
                    hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-medium`}
                >
                  احجز الآن
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}