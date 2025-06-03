'use client'
import { Home, Building, Brush, Droplet, Shield, Recycle, ArrowRight, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const services = [
  {
    name: 'تنظيف المنازل',
    icon: Home,
    color: 'from-blue-500 to-cyan-500',
    image: '/Artboard 1.avif',
    description: `
      <b>نظافة منزلك تبدأ من هنا!</b><br />
      نقدم لك خدمة تنظيف منازل شاملة تغطي كل ركن وزاوية في بيتك، باستخدام أحدث المعدات ومواد التنظيف الآمنة على الصحة والبيئة.<br /><br />
      <b>لماذا تختار خدمتنا؟</b>
      <ul>
        <li>فريق مدرب وموثوق</li>
        <li>منتجات صديقة للبيئة</li>
        <li>تنظيف عميق للأرضيات، الجدران، النوافذ، الأثاث، المطابخ والحمامات</li>
        <li>مرونة في المواعيد حسب راحتك</li>
        <li>أسعار تنافسية وضمان رضاك التام</li>
      </ul>
      <b>خطوات العمل:</b>
      <ol>
        <li>تحديد موعد الزيارة حسب رغبتك</li>
        <li>تقييم احتياجات المنزل وتحديد خطة العمل</li>
        <li>تنفيذ التنظيف باستخدام معدات متطورة</li>
        <li>مراجعة النتائج مع العميل والتأكد من الرضا الكامل</li>
      </ol>
      <b>نصيحة:</b> حافظ على نظافة منزلك بشكل دوري لتجنب تراكم الأتربة والبكتيريا.
    `
  },
  {
    name: 'تنظيف المكاتب',
    icon: Building,
    color: 'from-purple-500 to-pink-500',
    image: '/Artboard 2.avif',
    description: `
      <b>بيئة عمل نظيفة تعني إنتاجية أعلى!</b><br />
      نقدم حلول تنظيف مخصصة للمكاتب والشركات، مع التركيز على التفاصيل الدقيقة لضمان بيئة عمل صحية ومريحة.<br /><br />
      <b>مميزات الخدمة:</b>
      <ul>
        <li>تنظيف يومي أو أسبوعي حسب الطلب</li>
        <li>تلميع الأرضيات والمكاتب</li>
        <li>تنظيف النوافذ والواجهات الزجاجية</li>
        <li>تعقيم الأسطح وأماكن التجمع</li>
        <li>سرية تامة واحترام خصوصية العمل</li>
      </ul>
      <b>خطوات العمل:</b>
      <ol>
        <li>زيارة ميدانية لتقييم المكان</li>
        <li>تحديد خطة تنظيف مخصصة</li>
        <li>تنفيذ الخدمة بأعلى معايير الجودة</li>
        <li>متابعة دورية وتقييم مستمر</li>
      </ol>
      <b>نصيحة:</b> حافظ على نظافة مكتبك لزيادة إنتاجية الموظفين وتقليل الأمراض.
    `
  },
  {
    name: 'تنظيف السجاد',
    icon: Brush,
    color: 'from-orange-500 to-red-500',
    image: '/Artboard 3.avif',
    description: `
      <b>سجاد نظيف... بيت صحي!</b><br />
      نقدم خدمة تنظيف وتعقيم السجاد باستخدام أحدث التقنيات لإزالة البقع والروائح الكريهة.<br /><br />
      <b>مميزات الخدمة:</b>
      <ul>
        <li>إزالة البقع الصعبة</li>
        <li>تعقيم السجاد ضد البكتيريا والجراثيم</li>
        <li>تجفيف سريع وآمن</li>
        <li>حماية ألوان ونسيج السجاد</li>
      </ul>
      <b>خطوات العمل:</b>
      <ol>
        <li>فحص السجاد وتحديد نوع الألياف</li>
        <li>اختيار مواد التنظيف المناسبة</li>
        <li>تنظيف عميق وتجفيف سريع</li>
        <li>تسليم السجاد بحالة ممتازة</li>
      </ol>
      <b>نصيحة:</b> نظف السجاد بانتظام للحفاظ على صحة عائلتك.
    `
  },
  {
    name: 'تنظيف النوافذ',
    icon: Droplet,
    color: 'from-green-500 to-teal-500',
    image: '/Artboard 4.avif',
    description: `
      <b>نوافذ لامعة... رؤية أوضح!</b><br />
      خدمة تنظيف النوافذ والواجهات الزجاجية بدقة عالية وباستخدام أدوات متخصصة.<br /><br />
      <b>مميزات الخدمة:</b>
      <ul>
        <li>إزالة الأوساخ والبقع العنيدة</li>
        <li>تلميع الزجاج بدون خطوط</li>
        <li>تنظيف الإطارات والزوايا</li>
        <li>استخدام مواد آمنة</li>
      </ul>
      <b>خطوات العمل:</b>
      <ol>
        <li>تقييم حالة النوافذ</li>
        <li>اختيار مواد وأدوات مناسبة</li>
        <li>تنظيف وتلميع شامل</li>
        <li>مراجعة النتائج مع العميل</li>
      </ol>
      <b>نصيحة:</b> تنظيف النوافذ بانتظام يحسن من جودة الهواء والإضاءة في المكان.
    `
  },
  {
    name: 'التعقيم الشامل',
    icon: Shield,
    color: 'from-yellow-500 to-amber-500',
    image: '/Artboard 5.avif',
    description: `
      <b>حماية كاملة لك ولعائلتك!</b><br />
      نقدم خدمات تعقيم متقدمة للحماية من الجراثيم والفيروسات باستخدام أجهزة حديثة ومواد معتمدة.<br /><br />
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
      <b>نصيحة:</b> التعقيم الدوري يحميك من الأمراض ويمنحك راحة البال.
    `
  },
  {
    name: 'تنظيف صديق للبيئة',
    icon: Recycle,
    color: 'from-emerald-500 to-green-500',
    image: '/Artboard 6.avif',
    description: `
      <b>نظافة بلا ضرر على البيئة!</b><br />
      خدمة تنظيف متخصصة باستخدام منتجات ومواد صديقة للبيئة وآمنة على الأطفال والحيوانات الأليفة.<br /><br />
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
      <b>نصيحة:</b> اختر التنظيف الصديق للبيئة لصحة أفضل ومستقبل أنظف.
    `
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#F8FBFB] to-[#E0F7FA]">
      <div className="container mx-auto px-6">
        <SectionHeader title="خدمات التنظيف الشاملة في الرياض - خدماتنا المتميزة" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col items-center bg-white/90 rounded-3xl shadow-xl p-8 hover:scale-[1.03] transition-transform border border-[#E0F2F1]`}
                itemScope
                itemType="http://schema.org/Service"
              >
                <div className="flex flex-col items-center gap-4 mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#B2EBF2] to-[#E0F7FA] shadow-lg flex items-center justify-center">
                    <Icon className="w-12 h-12 text-cyan-700" />
                  </div>
                  <img src={service.image} alt={service.name + ' في الرياض'} className="w-24 h-24 object-contain rounded-2xl shadow-md border-2 border-white" loading="lazy" />
                </div>
                <h2 className="text-2xl font-extrabold text-cyan-900 mb-3 text-center leading-snug" itemProp="name">
                  {service.name} في الرياض
                </h2>
                <div className="text-lg text-gray-800 leading-relaxed mb-6 text-right" itemProp="description" dangerouslySetInnerHTML={{ __html: service.description + '<br /><b>خدمة تنظيف احترافية في الرياض بأفضل الأسعار.</b>' }} />
                <a
                  href="https://wa.me/966563009155"
                  className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-full font-bold shadow-lg text-xl transition-all mt-auto"
                  aria-label={`اطلب خدمة ${service.name} الآن عبر واتساب في الرياض`}
                >
                  اطلب الخدمة الآن
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}