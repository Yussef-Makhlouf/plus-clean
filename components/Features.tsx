import { CheckCircle, Users, Award, Shield, Clock, ThumbsUp } from 'lucide-react'
import SectionHeader from './SectionHeader'

const features = [
  {
    icon: <Users className="w-8 h-8 text-blue-500" />,
    title: 'فريق عمل مدرب ومحترف',
    desc: 'نمتلك فريقاً من الخبراء المدربين على أحدث تقنيات التنظيف، يضمنون لك نتائج مثالية واحترافية في كل زيارة.'
  },
  {
    icon: <Shield className="w-8 h-8 text-green-500" />,
    title: 'استخدام مواد تنظيف صديقة للبيئة',
    desc: 'نستخدم منتجات تنظيف آمنة على الصحة وصديقة للبيئة، لحماية عائلتك وأطفالك وحيواناتك الأليفة.'
  },
  {
    icon: <ThumbsUp className="w-8 h-8 text-yellow-500" />,
    title: 'ضمان الرضا 100%',
    desc: 'نلتزم برضاك التام عن الخدمة. إذا لم تكن راضياً، سنعيد الخدمة مجاناً حتى تحقق الرضا الكامل.'
  },
  {
    icon: <Clock className="w-8 h-8 text-cyan-500" />,
    title: 'خدمة عملاء على مدار الساعة',
    desc: 'فريق خدمة العملاء متواجد دائماً للرد على استفساراتك وحجز مواعيدك في أي وقت يناسبك.'
  },
  {
    icon: <Award className="w-8 h-8 text-pink-500" />,
    title: 'أسعار تنافسية',
    desc: 'نقدم أفضل جودة بأفضل سعر في السوق، مع عروض وخصومات مستمرة لعملائنا الدائمين والجدد.'
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-emerald-500" />,
    title: 'تغطية تأمينية شاملة',
    desc: 'جميع خدماتنا مؤمنة بالكامل ضد أي أضرار أو حوادث، لتشعر براحة البال دائماً.'
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-[#E3F2FD] to-white">
      <div className="container mx-auto px-6">
        <SectionHeader title="لماذا تختارنا" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-3xl shadow-xl p-8 border border-blue-100 hover:scale-105 hover:shadow-2xl transition-all min-h-[260px] text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold text-blue-800 mb-2">{feature.title}</h4>
              <p className="text-gray-700 text-base leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

