'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'أحمد علي',
    role: 'مدير شركة',
    comment: 'خدمة التنظيف كانت رائعة. فريق محترف ونتائج مذهلة.',
    image: '/placeholder.svg?height=100&width=100'
  },
  {
    name: 'سارة محمد',
    role: 'طبيبة',
    comment: 'خدمة التعقيم الشامل كانت ممتازة. أشعر بالأمان والراحة في عيادتي بعد كل زيارة من فريق التنظيف.',
    image: '/placeholder.svg?height=100&width=100'
  },
  {
    name: 'خالد حسن',
    role: 'مهندس',
    comment: 'تنظيف السجاد كان مذهلاً. السجاد يبدو جديداً تماماً.',
    image: '/placeholder.svg?height=100&width=100'
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">آراء العملاء</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{testimonial.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}