'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Star, Clock, Shield } from 'lucide-react'

const features = [
  { icon: <CheckCircle2 className="w-6 h-6" />, text: 'جودة عالية' },
  { icon: <Star className="w-6 h-6" />, text: 'خدمة متميزة' },
  { icon: <Clock className="w-6 h-6" />, text: '24/7 متوفرين' },
  { icon: <Shield className="w-6 h-6" />, text: 'ضمان شامل' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
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
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-l from-[#00897B] to-teal-600 bg-clip-text text-transparent">
                  نظافة مثالية
                </span>
                <br />
                لحياة صحية
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                نقدم خدمات تنظيف احترافية تجعل منزلك يشع جمالاً ونظافة مع ضمان الجودة والاحترافية في العمل
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-lg"
                >
                  <div className="text-[#00897B]">{feature.icon}</div>
                  <span className="font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-l from-[#00897B] to-teal-600 text-white px-8 py-4 rounded-xl flex items-center gap-3"
              >
                احجز خدمتك الآن
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-800 px-8 py-4 rounded-xl border-2 border-gray-100"
              >
                تعرف علينا
              </motion.button>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden">
              <Image
                src="/arabic color.avif"
                alt="Professional Cleaning"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00897B]/20 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#00897B]/10 p-3 rounded-full">
                  <Star className="w-6 h-6 text-[#00897B]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">4.9/5</div>
                  <div className="text-sm text-gray-600">تقييم العملاء</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}