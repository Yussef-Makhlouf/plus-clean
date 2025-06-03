'use client'

import Image from 'next/image'
import { ArrowRight, CheckCircle2, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const servicesImages = [
  {
    title: 'تنظيف المنازل',
    description: `<b>خدمة تنظيف شاملة للمنازل مع التركيز على أدق التفاصيل لضمان نظافة مثالية.</b><br />
    نقدم تنظيف عميق لكل الغرف، الأرضيات، النوافذ، المطابخ، والحمامات باستخدام مواد آمنة وصديقة للبيئة.<br /><br />
    <b>مميزات الخدمة:</b>
    <ul>
      <li>تنظيف عميق وإزالة البقع</li>
      <li>تعقيم شامل للأسطح</li>
      <li>فريق مدرب وموثوق</li>
      <li>مرونة في المواعيد</li>
    </ul>
    <b>خطوات العمل:</b>
    <ol>
      <li>تقييم احتياجات المنزل</li>
      <li>تحديد خطة التنظيف</li>
      <li>تنفيذ التنظيف والتعقيم</li>
      <li>مراجعة النتائج مع العميل</li>
    </ol>
    <b>نصيحة:</b> حافظ على نظافة منزلك بشكل دوري لضمان بيئة صحية وآمنة.`,
    image: '/Artboard 1.avif',
    features: ['تنظيف عميق', 'إزالة الغبار', 'تعقيم شامل'],
    color: 'from-blue-500 to-cyan-500',
    rating: 4.9
  },
  {
    title: 'تنظيف المكاتب',
    description: `<b>خدمات احترافية لتنظيف المكاتب والشركات لخلق بيئة عمل صحية ومريحة.</b><br />
    نقدم تنظيف يومي أو أسبوعي، تلميع الأرضيات، تنظيف النوافذ، وتعقيم أماكن العمل.<br /><br />
    <b>مميزات الخدمة:</b>
    <ul>
      <li>تنظيف شامل لكل المكاتب</li>
      <li>تعقيم الأسطح وأماكن التجمع</li>
      <li>سرية تامة واحترام خصوصية العمل</li>
      <li>خدمة مرنة حسب جدول الشركة</li>
    </ul>
    <b>خطوات العمل:</b>
    <ol>
      <li>زيارة ميدانية لتقييم المكان</li>
      <li>تحديد خطة تنظيف مخصصة</li>
      <li>تنفيذ الخدمة بأعلى جودة</li>
      <li>متابعة دورية وتقييم مستمر</li>
    </ol>
    <b>نصيحة:</b> بيئة العمل النظيفة تزيد من إنتاجية الموظفين وتقلل من الأمراض.`,
    image: '/Artboard 2.avif',
    features: ['تنظيف يومي', 'تلميع الأرضيات', 'تنظيف النوافذ'],
    color: 'from-purple-500 to-pink-500',
    rating: 4.8
  },
  {
    title: 'تنظيف السجاد',
    description: `<b>خدمة متخصصة في تنظيف وتعقيم السجاد باستخدام أحدث التقنيات.</b><br />
    إزالة البقع الصعبة، تعقيم السجاد، وتجفيف سريع يحافظ على ألوان ونسيج السجاد.<br /><br />
    <b>مميزات الخدمة:</b>
    <ul>
      <li>إزالة البقع والروائح</li>
      <li>تعقيم ضد البكتيريا</li>
      <li>تجفيف سريع وآمن</li>
      <li>حماية ألوان السجاد</li>
    </ul>
    <b>خطوات العمل:</b>
    <ol>
      <li>فحص السجاد وتحديد نوع الألياف</li>
      <li>اختيار مواد التنظيف المناسبة</li>
      <li>تنظيف وتجفيف سريع</li>
      <li>تسليم السجاد بحالة ممتازة</li>
    </ol>
    <b>نصيحة:</b> نظف السجاد بانتظام للحفاظ على صحة عائلتك.`,
    image: '/Artboard 3.avif',
    features: ['تنظيف عميق', 'إزالة البقع', 'تجفيف سريع'],
    color: 'from-orange-500 to-red-500',
    rating: 4.7
  },
  {
    title: 'تنظيف النوافذ',
    description: `<b>خدمة متخصصة في تنظيف النوافذ والواجهات الزجاجية مع تركيز على التنظيف الدقيق.</b><br />
    إزالة الأوساخ والبقع، تلميع الزجاج، وتنظيف الإطارات والزوايا.<br /><br />
    <b>مميزات الخدمة:</b>
    <ul>
      <li>تنظيف وتلميع متقدم</li>
      <li>إزالة البقع العنيدة</li>
      <li>استخدام مواد آمنة</li>
      <li>نتائج لامعة بدون خطوط</li>
    </ul>
    <b>خطوات العمل:</b>
    <ol>
      <li>تقييم حالة النوافذ</li>
      <li>اختيار الأدوات المناسبة</li>
      <li>تنظيف وتلميع شامل</li>
      <li>مراجعة النتائج مع العميل</li>
    </ol>
    <b>نصيحة:</b> تنظيف النوافذ بانتظام يحسن من جودة الهواء والإضاءة في المكان.`,
    image: '/Artboard 4.avif',
    features: ['تنظيف عميق', 'تلميع متقدم', 'تنظيف النوافذ المتحركة'],
    color: 'from-green-500 to-teal-500',
    rating: 4.6
  },
  {
    title: 'التعقيم الشامل',
    description: `<b>خدمة تعقيم متقدمة للحماية من الجراثيم والبكتيريا بأحدث الأجهزة والمعدات.</b><br />
    تعقيم شامل لكل الأسطح، مواد آمنة، نتائج فورية وفعالة.<br /><br />
    <b>مميزات الخدمة:</b>
    <ul>
      <li>تعقيم شامل لكل الأسطح</li>
      <li>مواد آمنة ومعتمدة صحياً</li>
      <li>نتائج فورية وفعالة</li>
      <li>خدمة سريعة ومرنة</li>
    </ul>
    <b>خطوات العمل:</b>
    <ol>
      <li>تقييم المكان وتحديد النقاط الحرجة</li>
      <li>تجهيز المكان للتعقيم</li>
      <li>تنفيذ التعقيم بأحدث الأجهزة</li>
      <li>تسليم المكان نظيفاً وآمناً</li>
    </ol>
    <b>نصيحة:</b> التعقيم الدوري يحميك من الأمراض ويمنحك راحة البال.`,
    image: '/Artboard 5.avif',  
    features: ['تعقيم شامل', 'مواد آمنة', 'نتائج فورية'],
    color: 'from-yellow-500 to-amber-500',
    rating: 4.5
  },
  {
    title: 'تنظيف صديق للبيئة',
    description: `<b>خدمة تنظيف متخصصة في استخدام منتجات ومواد صديقة للبيئة.</b><br />
    منتجات طبيعية وآمنة، حماية البيئة وصحة العائلة، نتائج فعالة بدون مواد كيميائية ضارة.<br /><br />
    <b>مميزات الخدمة:</b>
    <ul>
      <li>منتجات طبيعية وآمنة</li>
      <li>حماية البيئة وصحة العائلة</li>
      <li>نتائج فعالة بدون مواد كيميائية ضارة</li>
      <li>خدمة مخصصة حسب احتياجك</li>
    </ul>
    <b>خطوات العمل:</b>
    <ol>
      <li>تحديد متطلبات العميل</li>
      <li>اختيار المنتجات الأنسب</li>
      <li>تنظيف شامل وآمن</li>
      <li>تقديم نصائح للحفاظ على النظافة</li>
    </ol>
    <b>نصيحة:</b> اختر التنظيف الصديق للبيئة لصحة أفضل ومستقبل أنظف.`,
    image: '/Artboard 6.avif',
    features: ['تنظيف عميق', 'إزالة البقع', 'تنظيف النوافذ المتحركة'],
    color: 'from-emerald-500 to-green-500',
    rating: 4.4
  }
]

export default function ServicesWithImages() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-100 to-white" aria-label="خدمات التنظيف المتميزة - شركة تنظيف بالرياض">
      <div className="container mx-auto px-4">
        <SectionHeader title="خدماتنا المتميزة في التنظيف بالرياض" />
        <p className="text-xl md:text-2xl text-gray-700 text-center mb-12 max-w-3xl mx-auto font-semibold" aria-label="وصف خدمات التنظيف الشاملة في الرياض">
          نقدم أفضل خدمات التنظيف الشامل للمنازل، المكاتب، السجاد، النوافذ، والتعقيم باستخدام أحدث التقنيات ومواد صديقة للبيئة. اكتشف خدماتنا الاحترافية التي تضمن بيئة صحية وآمنة لك ولعائلتك.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {servicesImages.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row items-center bg-white/80 border border-gray-200 rounded-3xl shadow-xl p-8 md:p-12 gap-8 md:gap-12 overflow-hidden hover:scale-[1.02] transition-transform`}
              aria-label={`خدمة ${service.title}`}
            >
              <header className="flex-shrink-0 flex flex-col items-center gap-4 w-full md:w-auto">
                <div className="relative w-40 h-40 rounded-2xl overflow-hidden shadow-lg border-2 border-white mb-2 bg-gray-50">
                  <Image
                    src={service.image}
                    alt={`صورة لخدمة ${service.title} في الرياض | شركة تنظيف معتمدة`}
                    title={service.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 320px"
                    priority={index === 0}
                  />
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Info className="w-5 h-5 text-cyan-700" />
                  <span className="text-cyan-900 font-bold text-xl">{service.rating} / 5</span>
                </div>
              </header>
              <div className="flex-1 text-right">
                <h2 className="text-2xl md:text-3xl font-extrabold text-cyan-900 mb-3 drop-shadow-lg leading-snug" aria-label={`عنوان خدمة ${service.title}`}>{service.title}</h2>
                <div className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: service.description }} />
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    window.location.href = 'https://wa.me/966563009155'
                    window.open('https://wa.me/966563009155', '_blank')
                  }}
                  className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-full font-bold shadow-lg text-lg md:text-xl transition-all mt-4"
                  aria-label={`احجز خدمة ${service.title} الآن في الرياض`}
                >
                  احجز الخدمة الآن
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}