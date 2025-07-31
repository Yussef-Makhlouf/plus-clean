'use client'

import Image from 'next/image'
import { ArrowRight, CheckCircle2, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

export interface ServiceType {
  title: string;
  description: string;
  features: string[];
  image: string;
  color: string;
  rating: number;
  faq?: { question: string; answer: string }[];
}

export const servicesImages: ServiceType[] = [
  {
    title: 'تنظيف المنازل',
    description: `<b>أفضل خدمة تنظيف منازل في الرياض</b><br />خدمة تنظيف شاملة للمنازل مع التركيز على أدق التفاصيل. نقدم تنظيف عميق باستخدام مواد آمنة. <a href='/services'>تعرف على خدماتنا الأخرى</a>. <br /><br /><b>مميزات الخدمة:</b><ul><li>تنظيف عميق وإزالة البقع</li><li>تعقيم شامل</li><li>فريق محترف</li></ul><b>خطوات العمل:</b><ol><li>تقييم الاحتياجات</li><li>خطة مخصصة</li><li>تنفيذ ومراجعة</li></ol><b>نصيحة:</b> استمتع ببيت نظيف مع أفضل شركة تنظيف في الرياض.`,
    image: 'https://cleanplusteam.com/home-cleaning-guide.avif',
    features: ['تنظيف عميق', 'إزالة البقع', 'تعقيم شامل'],
    color: 'from-blue-500 to-cyan-500',
    rating: 4.9
  },
  {
    title: 'تنظيف المكاتب',
    description: `<b>أفضل خدمة تنظيف مكاتب في الرياض</b><br />خدمات احترافية لتنظيف المكاتب. نقدم تنظيف يومي وتعقيم. <a href='/services'>تصفح الخدمات الكاملة</a>. <br /><br /><b>مميزات الخدمة:</b><ul><li>تنظيف يومي</li><li>تلميع الأرضيات</li><li>تنظيف النوافذ</li></ul><b>خطوات العمل:</b><ol><li>تقييم المكان</li><li>خطة مخصصة</li><li>تنفيذ ومتابعة</li></ol><b>نصيحة:</b> زد إنتاجيتك ببيئة نظيفة.`,
    image: 'https://cleanplusteam.com/home-disinfection.avif',
    features: ['تنظيف يومي', 'تلميع الأرضيات', 'تنظيف النوافذ'],
    color: 'from-purple-500 to-pink-500',
    rating: 4.8
  },
  {
    title: 'تنظيف السجاد',
    description: `<b>أفضل خدمة تنظيف سجاد في الرياض</b><br />خدمة متخصصة في تنظيف السجاد. نستخدم تقنيات متطورة لإزالة البقع. <a href='/services'>اكتشف المزيد</a>. <br /><br /><b>مميزات الخدمة:</b><ul><li>إزالة البقع</li><li>تعقيم شامل</li><li>تجفيف سريع</li></ul><b>خطوات العمل:</b><ol><li>فحص السجاد</li><li>اختيار المواد</li><li>تنظيف وتسليم</li></ol><b>نصيحة:</b> حافظ على صحة عائلتك.`,
    image: 'https://cleanplusteam.com/home-cleaning-riyadh-guide.avif',
    features: ['تنظيف عميق', 'إزالة البقع', 'تجفيف سريع'],
    color: 'from-orange-500 to-red-500',
    rating: 4.7
  },

  {
    title: 'التعقيم الشامل',
    description: `<b>أفضل خدمة تعقيم شامل في الرياض</b><br />خدمة تعقيم متقدمة لحمايتك. بأحدث الأجهزة. <a href='/services'>استكشف الخيارات</a>. <br /><br /><b>مميزات الخدمة:</b><ul><li>تعقيم شامل</li><li>مواد آمنة</li><li>نتائج فورية</li></ul><b>خطوات العمل:</b><ol><li>تقييم المكان</li><li>اختيار الطرق</li><li>تنفيذ وتسليم</li></ol><b>نصيحة:</b> قم بالتعقيم لسلامة عائلتك.`,
    image: 'https://cleanplusteam.com/water-leak.avif',  
    features: ['تعقيم شامل', 'مواد آمنة', 'نتائج فورية'],
    color: 'from-yellow-500 to-amber-500',
    rating: 4.5
  },

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
              className={`relative flex flex-col items-center bg-white/80 border border-gray-200 rounded-3xl shadow-xl p-8 md:p-12 gap-8 md:gap-12 overflow-hidden hover:scale-[1.02] transition-transform`}
              aria-label={`خدمة ${service.title}`}
            >
              <header className="flex-shrink-0 w-full">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-white mb-4 bg-gray-50">
                  <Image
                    src={service.image}
                    alt={`صورة لخدمة ${service.title} في الرياض | شركة تنظيف معتمدة`}
                    title={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 640px"
                    priority={index === 0}
                  />
                </div>
                <div className="flex items-center justify-center gap-2 mt-2 mb-4">
                  <Info className="w-6 h-6 text-cyan-700" />
                  <span className="text-cyan-900 font-bold text-xl md:text-2xl">{service.rating} / 5</span>
                </div>
              </header>
              <div className="flex-1 text-right md:text-right text-gray-800">
                <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-900 mb-4 drop-shadow-lg leading-snug" aria-label={`عنوان خدمة ${service.title}`}>{service.title}</h2>
                <div className="text-xl md:text-2xl leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: service.description }} />
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    window.location.href = 'https://wa.me/966569131252'
                    window.open('https://wa.me/966569131252', '_blank')
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-full font-bold shadow-lg text-lg md:text-xl transition-all mt-4"
                  aria-label={`احجز خدمة ${service.title} الآن في الرياض`}
                >
                  احجز الخدمة الآن
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'ItemList', 'itemListElement': servicesImages.map((service, index) => ({ '@type': 'ListItem', 'position': index + 1, 'item': { '@type': 'Service', 'name': service.title, 'description': service.description, 'provider': { '@type': 'Organization', 'name': 'شركة التنظيف المثالي', 'url': 'https://cleanplusteam.com' } } })) }) }} />
      </div>
    </section>
  )
}