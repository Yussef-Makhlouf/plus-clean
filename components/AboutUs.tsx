'use client'

import Image from 'next/image'
import { CheckCircle2, Users, Trophy, ThumbsUp, Clock, Award, Shield, Star, MessageCircle } from 'lucide-react'
import SectionHeader from './SectionHeader'

const stats = [
  {
    icon: <Users className="w-7 h-7" />,
    value: '1500+',
    label: 'عميل في الرياض'
  },
  {
    icon: <Trophy className="w-7 h-7" />,
    value: '12+',
    label: 'سنوات خبرة'
  },
  {
    icon: <ThumbsUp className="w-7 h-7" />,
    value: '4.9/5',
    label: 'تقييم العملاء'
  },
  {
    icon: <Clock className="w-7 h-7" />,
    value: '24/7',
    label: 'خدمة في أحياء الرياض'
  }
]

const features = [
  'فريق محترف لتنظيف المنازل والفلل في الرياض بأحدث التقنيات.',
  'غسيل سجاد وكنب  بأسعار تبدأ من 4 ريال للمتر.',
  'خدمات تنظيف خزانات المياه مع التعقيم في جميع أحياء الرياض.',
  'أسعار تنافسية لتنظيف الشقق والمكاتب تبدأ من 300 ريال.',
  'تغطية شاملة لأحياء الرياض: العليا، الملز، النسيم، الروضة.',
  'ضمان رضا العملاء 100% على خدمات التنظيف العميق.'
]

export default function AboutUs() {
  return (
    <section id="about" className="py-28 bg-gradient-to-br from-white via-teal-50 to-[#e0f7fa] relative overflow-hidden" aria-label="من نحن - أفضل شركة تنظيف بالرياض">
      {/* Background decorative elements */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-40 z-0" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-40 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <SectionHeader
            title="من نحن - أفضل شركة تنظيف بالرياض"
            subtitle="خبرة 12 عامًا في تنظيف المنازل، الفلل، والسجاد بالرياض"
            className="mb-8"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Image and Stats */}
          <div className="lg:col-span-5">
            <div className="sticky top-8">
              <div className="relative h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/logo2.avif"
                  alt="أفضل شركة تنظيف منازل وفلل بالرياض - خدمات تنظيف احترافية"
                  fill
                  className="object-cover scale-105 transition-transform duration-500 hover:scale-110"
                  loading='lazy'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00897B]/30 to-transparent" />
              </div>
              
              {/* Stats Cards */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/90 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-teal-100 hover:shadow-xl transition-all">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#00897B]/10 p-3 rounded-full">
                        <div className="text-[#00897B]">{stat.icon}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7">
            {/* Vision, Mission, Values */}
            <div className="space-y-8 mb-12">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-teal-50">
                <h3 className="text-[#00897B] text-2xl font-bold mb-4 flex items-center gap-2">
                  <Star className="w-6 h-6" />
                  رؤيتنا
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  أن نكون الخيار الأول لخدمات التنظيف في الرياض وجميع أحيائها مثل العليا، الملز، والنسيم، من خلال تقديم خدمات تنظيف منازل وفلل بجودة لا مثيل لها.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-teal-50">
                <h3 className="text-[#00897B] text-2xl font-bold mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6" />
                  رسالتنا
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  توفير بيئة نظيفة وصحية في المنازل والمكاتب عبر خدمات تنظيف شاملة تشمل غسيل السجاد، تنظيف الكنب، وتعقيم الخزانات بأسعار تنافسية.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-teal-50">
                <h3 className="text-[#00897B] text-2xl font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  قيمنا
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  الاحترافية، الأمانة، الجودة، رضا العميل، والالتزام بتقديم خدمات تنظيف موثوقة في جميع أحياء الرياض.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/80 rounded-xl p-4 shadow-sm hover:shadow-md transition-all border border-teal-50">
                  <CheckCircle2 className="w-5 h-5 text-[#00897B] mt-1 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-[#00897B] to-teal-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-right">
                  <h3 className="text-2xl font-bold mb-2">احصل على أفضل خدمات التنظيف</h3>
                  <p className="text-teal-50">نقدم خدمات تنظيف احترافية بأسعار تنافسية</p>
                </div>
                <a 
                  href="https://wa.me/966592425757" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-[#00897B] px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
                  title='احجز خدمة تنظيف'
                >
                  <MessageCircle className="w-5 h-5" />
                  احجز خدمة تنظيف
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}