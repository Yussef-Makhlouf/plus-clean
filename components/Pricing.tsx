'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'أساسي',
    monthlyPrice: 199,
    yearlyPrice: 2149,
    features: ['تنظيف أسبوعي', 'تنظيف الأرضيات', 'إزالة الغبار', 'تنظيف الحمامات'],
    gradient: 'from-blue-500 to-cyan-500',
    shadow: 'hover:shadow-blue-500/25'
  },
  {
    name: 'احترافي',
    monthlyPrice: 399,
    yearlyPrice: 4309,
    features: ['كل ما في الأساسي', 'تنظيف النوافذ', 'تنظيف المطبخ', 'كي الملابس'],
    isPopular: true,
    gradient: 'from-purple-500 to-pink-500',
    shadow: 'hover:shadow-purple-500/25'
  },
  {
    name: 'متميز',
    monthlyPrice: 599,
    yearlyPrice: 6469,
    features: ['كل ما في الاحترافي', 'تنظيف السجاد', 'تلميع الأثاث', 'تعقيم شامل'],
    gradient: 'from-orange-500 to-rose-500',
    shadow: 'hover:shadow-orange-500/25'
  }
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">اختر الباقة المناسبة لك</h2>
          <p className="text-gray-600 mb-8">أسعار مناسبة لجميع الاحتياجات</p>
          
          <div className="flex items-center justify-center gap-4">
            <span className={`text-lg transition-colors ${!isYearly ? 'text-blue-600' : 'text-gray-600'}`}>
              شهري
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-16 h-8 rounded-full bg-blue-100 transition-colors"
            >
              <motion.div
                className="absolute w-6 h-6 bg-blue-600 rounded-full top-1"
                animate={{ left: isYearly ? '32px' : '4px' }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-lg transition-colors ${isYearly ? 'text-blue-600' : 'text-gray-600'}`}>
              سنوي
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl bg-white shadow-xl ${plan.shadow} transition-all duration-300 hover:-translate-y-2`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-1 rounded-full text-sm font-medium">
                  الأكثر طلباً
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600 mr-2">ريال</span>
                </div>
                <span className="text-gray-500 text-sm">
                  {isYearly ? '/سنوياً' : '/شهرياً'}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <Check className={`w-5 h-5 bg-gradient-to-r ${plan.gradient} text-white rounded-full p-1`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-xl text-white bg-gradient-to-r ${plan.gradient} hover:opacity-90 transition-opacity font-medium`}
              >
                اختر الباقة
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}