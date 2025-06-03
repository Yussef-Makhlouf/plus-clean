'use client'

import Image from 'next/image'
import { CheckCircle2, Users, Trophy, ThumbsUp, Clock, Award, Shield } from 'lucide-react'
import SectionHeader from './SectionHeader'

const stats = [
  {
    icon: <Users className="w-7 h-7" />,
    value: '1000+',
    label: 'عميل سعيد'
  },
  {
    icon: <Trophy className="w-7 h-7" />,
    value: '10',
    label: 'سنوات خبرة'
  },
  {
    icon: <ThumbsUp className="w-7 h-7" />,
    value: '100%',
    label: 'رضا العملاء'
  },
  {
    icon: <Clock className="w-7 h-7" />,
    value: '24/7',
    label: 'خدمة متواصلة'
  }
]

const features = [
  'فريق محترف ومدرب على أعلى مستوى في جميع خدمات التنظيف.',
  'معدات وتقنيات حديثة تضمن نتائج مثالية وصديقة للبيئة.',
  'خدمة عملاء متميزة واستجابة سريعة على مدار الساعة.',
  'أسعار تنافسية مع ضمان الرضا الكامل لكل عميل.',
  'تغطية شاملة لجميع مناطق الرياض والمملكة.',
  'ضمان شامل على جميع الخدمات المقدمة.'
]

export default function AboutUs() {
  return (
    <section id="about" className="py-28 bg-gradient-to-br from-white via-teal-50 to-[#e0f7fa] relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-40 z-0" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative flex items-center justify-center">
            <div className="relative h-[420px] w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/english color.avif"
                alt="About Us"
                fill
                className="object-cover scale-105 transition-transform duration-500 hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00897B]/30 to-transparent" />
            </div>
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl flex flex-wrap gap-8 w-[90%] justify-center border border-teal-100 animate-fade-in-up">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center min-w-[100px]">
                  <div className="bg-[#00897B]/10 p-4 rounded-full mb-2 shadow-md hover:scale-110 transition-transform">
                    <div className="text-[#00897B]">{stat.icon}</div>
                  </div>
                  <div className="text-2xl font-extrabold text-gray-800 mb-1 tracking-tight drop-shadow-sm">{stat.value}</div>
                  <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pr-16 mt-20 lg:mt-0">
            <SectionHeader
              title="من نحن - شركة النظافة العصرية"
              subtitle="احترافية، أمانة، جودة منذ 2013"
              className="mb-8 text-right lg:text-right"
            />

            <div className="text-gray-700 mb-8 leading-relaxed text-lg font-medium text-right space-y-6">
              <p>
                <b className="text-[#00897B] text-xl">رؤيتنا:</b> أن نكون الخيار الأول في المملكة العربية السعودية لخدمات التنظيف الاحترافية، من خلال تقديم أعلى معايير الجودة والابتكار في كل ما نقدمه.
              </p>
              <p>
                <b className="text-[#00897B] text-xl">رسالتنا:</b> توفير بيئة نظيفة وصحية وآمنة لكل منزل ومكتب، مع ضمان راحة ورضا عملائنا في كل خطوة.
              </p>
              <p>
                <b className="text-[#00897B] text-xl">قيمنا:</b> الأمانة، الاحترافية، الابتكار، رضا العميل، العمل بروح الفريق.
              </p>
              <p>
                نحن شركة رائدة في مجال خدمات التنظيف منذ أكثر من 10 سنوات، نمتلك فريقاً محترفاً ومدرباً على أحدث تقنيات التنظيف، ونستخدم معدات متطورة ومواد صديقة للبيئة. نفتخر بثقة أكثر من 1000 عميل سعيد، ونلتزم بتقديم أفضل تجربة لكل من يختارنا.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/80 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow border border-teal-50">
                  <CheckCircle2 className="w-5 h-5 text-[#00897B] animate-pulse" />
                  <span className="text-gray-800 font-semibold text-base">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:gap-8">
              <button className="bg-gradient-to-l from-[#00897B] to-teal-600 text-white px-10 py-4 rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg font-bold tracking-wide">
                تواصل معنا
              </button>
              <div className="flex items-center gap-3 bg-white/80 rounded-lg px-6 py-4 shadow border border-teal-50">
                <Award className="w-7 h-7 text-yellow-500" />
                <span className="text-gray-800 font-semibold text-base">ضمان شامل على جميع الخدمات</span>
                <Shield className="w-7 h-7 text-teal-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
