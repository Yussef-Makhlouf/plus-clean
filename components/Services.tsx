'use client'
import { Home, Building, Brush, Droplet, Shield, Recycle } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  { name: 'تنظيف المنازل', description: 'خدمة شاملة لتنظيف كل ركن في منزلك', icon: Home, color: 'from-blue-500 to-cyan-500', hoverText: 'text-blue-500' },
  { name: 'تنظيف المكاتب', description: 'حلول تنظيف مخصصة للشركات والمؤسسات', icon: Building, color: 'from-purple-500 to-pink-500', hoverText: 'text-purple-500' },
  { name: 'تنظيف السجاد', description: 'تنظيف عميق وإزالة البقع من جميع أنواع السجاد', icon: Brush, color: 'from-green-500 to-teal-500', hoverText: 'text-green-500' },
  { name: 'تنظيف النوافذ', description: 'تلميع النوافذ والواجهات الزجاجية بدقة عالية', icon: Droplet, color: 'from-yellow-500 to-orange-500', hoverText: 'text-yellow-500' },
  { name: 'التعقيم الشامل', description: 'خدمات تعقيم متقدمة للحماية من الجراثيم', icon: Shield, color: 'from-red-500 to-rose-500', hoverText: 'text-red-500' },
  { name: 'تنظيف صديق للبيئة', description: 'استخدام منتجات ومواد تنظيف صديقة للبيئة', icon: Recycle, color: 'from-emerald-500 to-green-500', hoverText: 'text-emerald-500' },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">خدماتنا المتميزة</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
                <div className={`w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r ${service.color} mb-4 border-white border-2 rounded-full `}>
                  <Icon className="w-6 h-6 text-white " />
                </div>
                <h3 className={`text-xl font-bold mb-2 group-hover:${service.hoverText} transition-colors duration-300`}>
                  {service.name}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {service.description}
                </p>
                <div className={`absolute bottom-4 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 ${service.hoverText}`}>
                  ←
                </div>
              </motion.div>
            )
          })}
        </div>
          </div>
    </section>
  )
}