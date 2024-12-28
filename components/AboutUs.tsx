'use client'

import Image from 'next/image'
import { CheckCircle2, Users, Trophy, ThumbsUp, Clock } from 'lucide-react'

const stats = [
  {
    icon: <Users className="w-6 h-6" />,
    value: '1000+',
    label: 'عميل سعيد'
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    value: '10',
    label: 'سنوات خبرة'
  },
  {
    icon: <ThumbsUp className="w-6 h-6" />,
    value: '100%',
    label: 'رضا العملاء'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    value: '24/7',
    label: 'خدمة متواصلة'
  }
]

const features = [
  'فريق محترف ومدرب',
  'معدات وتقنيات حديثة',
  'خدمة عملاء متميزة',
  'أسعار تنافسية'
]

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative h-[600px] rounded-3xl overflow-hidden">
              <Image
                src="/english color.avif"
                alt="About Us"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00897B]/20 to-transparent" />
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-[#00897B]/10 p-3 rounded-full w-fit mx-auto mb-3">
                      <div className="text-[#00897B]">{stat.icon}</div>
                    </div>
                    <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:pr-12">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-l from-[#00897B] to-teal-600 bg-clip-text text-transparent">
                نحن نقدم خدمات تنظيف
              </span>
              <br />
              احترافية منذ 2013
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              نحن شركة رائدة في مجال خدمات التنظيف، نسعى دائماً لتقديم أفضل مستوى من الخدمة لعملائنا. نمتلك فريقاً محترفاً ومدرباً على أحدث تقنيات التنظيف، ونستخدم معدات متطورة ومواد صديقة للبيئة.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00897B]" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-l from-[#00897B] to-teal-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300">
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
