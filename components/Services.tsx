'use client'
import { Home, Building, Brush, Droplet, Shield, Recycle, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const services = [
  {
    name: 'تنظيف المنازل',
    icon: Home,
    color: 'from-blue-500 to-cyan-500',
    image: 'https://cleanplusteam.com/home_clean.avif',
    pageUrl: '/home-cleaning',
    description: `
      <b>أفضل خدمة تنظيف منازل في الرياض</b><br />نظافة منزلك تبدأ من هنا! <a href='/services'>تصفح جميع الخدمات</a>. نقدم تنظيفاً شاملاً. <a href='https://www.cleanplusteam.com/cleaning-tips' target='_blank' rel='noopener noreferrer'>نصائح مفيدة</a>. <br /><br /><b>لماذا تختارنا؟</b><ul><li>فريق محترف</li><li>منتجات آمنة</li><li>أسعار تنافسية</li></ul><b>خطوات العمل:</b><ol><li>تحديد الموعد</li><li>تقييم وخطة</li><li>تنفيذ ومراجعة</li></ol><b>نصيحة:</b> نظف دورياً لتجنب المشكلات.
    `,
  },
  {
    name: 'تنظيف المكاتب',
    icon: Building,
    color: 'from-purple-500 to-pink-500',
    image: 'https://cleanplusteam.com/company_clean.avif',
    pageUrl: '/office-cleaning',
    description: `
      <b>أفضل خدمة تنظيف مكاتب في الرياض</b><br />بيئة عمل نظيفة تعزز الإنتاجية! <a href='/services'>تعرف على الخدمات</a>. نقدم حلولاً احترافية. <a href='https://www.cleanplusteam.com/office-cleaning' target='_blank' rel='noopener noreferrer'>دليل الصحة</a>. <br /><br /><b>مميزات:</b><ul><li>تنظيف يومي</li><li>تعقيم شامل</li><li>سرية تامة</li></ul><b>خطوات العمل:</b><ol><li>زيارة تقييمية</li><li>خطة مخصصة</li><li>تنفيذ ومتابعة</li></ol><b>نصيحة:</b> زد كفاءة عملك بتخطيط نظيف.
    `,
  },
  {
    name: 'تنظيف السجاد',
    icon: Brush,
    color: 'from-orange-500 to-red-500',
    image: 'https://cleanplusteam.com/home_cleaning.avif',
    pageUrl: '/carpet-cleaning',
    description: `
      <b>أفضل خدمة تنظيف سجاد في الرياض</b><br />سجاد نظيف لمنزل صحي! <a href='/services'>استكشف المزيد</a>. نستخدم تقنيات متطورة. <a href='https://www.cleanplusteam.com/carpet-cleaning' target='_blank' rel='noopener noreferrer'>رعاية السجاد</a>. <br /><br /><b>مميزات:</b><ul><li>إزالة الروائح</li><li>تجفيف سريع</li><li>حماية الألوان</li></ul><b>خطوات العمل:</b><ol><li>فحص الألياف</li><li>اختيار المواد</li><li>تنظيف وتسليم</li></ol><b>نصيحة:</b> نظف السجاد بانتظام لصحة أفضل.
    `,
  },
  {
    name: 'تنظيف الخزانات',
    icon: Droplet,
    color: 'from-green-500 to-teal-500',
    image: 'https://cleanplusteam.com/khazan_cleaning.avif',
    pageUrl: '/water-tank-cleaning',
    description: `
      <b>أفضل خدمة تنظيف خزانات في الرياض</b><br />خزانات لامعة لنظافة أفضل! <a href='/services'>تعلم عن الخدمات</a>. نقدم تنظيفاً دقيقاً. <a href='https://www.cleanplusteam.com/home-cleaning' target='_blank' rel='noopener noreferrer'>نصائح تنظيف</a>. <br /><br /><b>مميزات:</b><ul><li>تلميع متقدم</li><li>تنظيف الخزانات المتحركة</li><li>نتائج ممتازة</li></ul><b>خطوات العمل:</b><ol><li>تقييم الواجهات</li><li>خطة تنظيف</li><li>تنفيذ ومراجعة</li></ol><b>نصيحة:</b> تحسن التهوية بصيانة دورية.
    `,
  },
  {
    name: 'التعقيم الشامل',
    icon: Shield,
    color: 'from-yellow-500 to-amber-500',
    image: 'https://cleanplusteam.com/hotel_clean.avif',
    pageUrl: '/disinfection',
    description: `
      <b>أفضل خدمة تعقيم شامل في الرياض</b><br />حماية كاملة من الجراثيم! <a href='/services'>تصفح الخيارات</a>. نستخدم أجهزة حديثة. <a href='https://www.cleanplusteam.com/water-tank-cleaning' target='_blank' rel='noopener noreferrer'>معلومات صحية</a>. <br /><br /><b>مميزات:</b><ul><li>مواد آمنة</li><li>نتائج فورية</li><li>حماية شاملة</li></ul><b>خطوات العمل:</b><ol><li>تقييم المكان</li><li>اختيار الطرق</li><li>تنفيذ وتسليم</li></ol><b>نصيحة:</b> قم بالتعقيم لسلامة عائلتك.
    `,
  },
  {
    name: 'تنظيف الموكيت',
    icon: Recycle,
    color: 'from-emerald-500 to-green-500',
    image: 'https://cleanplusteam.com/team_clean.avif',
    pageUrl: '/sofa-cleaning',
    description: `
      <b>أفضل خدمة تنظيف موكيت في الرياض</b><br />موكيت نظيف لمنزل صحي! <a href='/services'>اكتشف الفوائد</a>. نقدم خدمات صديقة للبيئة. <a href='https://www.cleanplusteam.com/sofa-cleaning' target='_blank' rel='noopener noreferrer'>حماية البيئة</a>. <br /><br /><b>مميزات:</b><ul><li>منتجات خضراء</li><li>حماية الصحة</li><li>نتائج فعالة</li></ul><b>خطوات العمل:</b><ol><li>تحديد الاحتياجات</li><li>اختيار المواد</li><li>تنظيف ونصائح
    `,
  },
  {
    name: 'مكافحة الحشرات',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    image: 'https://cleanplusteam.com/pest_control.jpg',
    pageUrl: '/pest-control',
    description: `
      <b>أفضل خدمة مكافحة حشرات في الرياض</b><br />حماية منزلية شاملة من الحشرات! <a href='/services'>تعرف على خدماتنا</a>. نستخدم أحدث التقنيات. <a href='https://www.cleanplusteam.com/pest-control' target='_blank' rel='noopener noreferrer'>نصائح الوقاية</a>. <br /><br /><b>مميزات:</b><ul><li>مواد آمنة</li><li>نتائج فعالة</li><li>ضمان الخدمة</li></ul><b>خطوات العمل:</b><ol><li>فحص شامل</li><li>تحديد العلاج</li><li>تنفيذ ومتابعة</li></ol><b>نصيحة:</b> الوقاية خير من العلاج.
    `,
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
                  <img src={service.image} alt={service.name + ' في الرياض'} className="w-full aspect-square object-cover rounded-2xl shadow-md border-2 border-white" loading="lazy" />
                </div>
                <h2 className="text-2xl font-extrabold text-cyan-900 mb-3 text-center leading-snug" itemProp="name">
                  {service.name} في الرياض
                </h2>
                <div className="text-lg text-gray-800 leading-relaxed mb-6 text-right" itemProp="description" dangerouslySetInnerHTML={{ __html: service.description + '<br /><b>خدمة تنظيف احترافية في الرياض بأفضل الأسعار.</b>' }} />
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                  <a
                    href={service.pageUrl}
                    className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 ease-out rounded-xl shadow-lg hover:shadow-xl hover:scale-105 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-900 hover:to-gray-700"
                    aria-label={`تعرف على المزيد عن خدمة ${service.name}`}
                    title='تعرف على المزيد عن خدمة تنظيف'
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-cyan-600 to-cyan-800 group-hover:translate-x-0 ease">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                    <span className="relative flex items-center justify-center w-full text-right transition-all duration-300 transform group-hover:translate-x-full ease">
                      المزيد من التفاصيل
                    </span>
                  </a>
                  <a
                    href="https://wa.me/966592425757"
                    className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 ease-out rounded-xl shadow-lg hover:shadow-xl hover:scale-105 bg-gradient-to-r from-cyan-600 to-cyan-800 hover:from-cyan-700 hover:to-cyan-900"
                    aria-label={`اطلب خدمة ${service.name} الآن عبر واتساب في الرياض`} 
                    title='اطلب خدمة تنظيف'
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-green-500 to-green-600 group-hover:translate-x-0 ease">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                    </span>
                    <span className="relative flex items-center justify-center w-full text-right transition-all duration-300 transform group-hover:translate-x-full ease">
                      اطلب الخدمة الآن
                    </span>
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'ItemList', 'itemListElement': services.map((service, index) => ({ '@type': 'ListItem', 'position': index + 1, 'item': { '@type': 'Service', 'name': service.name, 'description': service.description, 'provider': { '@type': 'Organization', 'name': 'شركة التنظيف المثالي', 'url': 'https://cleanplusteam.com' } } })) }) }} />
    </section>
  )
}