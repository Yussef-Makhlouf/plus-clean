'use client';

import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { servicesImages, ServiceType } from '../../components/serviceWithImages'; // Import service data; adjust path if needed

import { Star, Zap, ShieldCheck } from 'lucide-react'; // Example icons, ensure lucide-react is installed
import Header from '../../components/Header';
import Footer from '@/components/Footer';



const ServicesPage = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8 pt-24">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold text-cyan-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">خدماتنا الشاملة في الرياض</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">نقدم أفضل الحلول لتنظيف منزلك أو مكتبك بأحدث التقنيات وأعلى معايير الجودة.</p>
      </header>
      {/* <script
type="application/ld+json"
dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'خدمات التنظيف في الرياض',
        description: 'شركة متخصصة في تقديم خدمات تنظيف شاملة وتعقيم فعال في جميع أنحاء الرياض.',
        provider: {
          '@type': 'Organization',
          name: 'شركة التنظيف المثالي',
          url: 'https://cleanplusteam.com',
        },
        areaServed: ['الرياض', 'السعودية'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'خدماتنا',
          itemListElement: servicesImages.map((service, index) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.title,
              description: service.description,
            },
            position: index + 1,
          })),
        },
      }) }}
      /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {servicesImages.map((service: ServiceType, index: number) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-to-br from-cyan-50 to-blue-50">
                {index === 0 && <Star className="w-14 h-14 text-yellow-500" />}
                {index === 1 && <Zap className="w-14 h-14 text-blue-500" />}
                {index === 2 && <ShieldCheck className="w-14 h-14 text-green-500" />}
              </div>
            </div>
            <h2 className="text-2xl font-bold text-cyan-700 mb-4 text-center">{service.title}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: service.description + '<br><a href="/blog/cleaning-tips" className="text-cyan-600 hover:text-cyan-700">نصائح تنظيف إضافية</a> | <a href="https://example.com/riyadh-services" className="text-cyan-600 hover:text-cyan-700" rel="noopener noreferrer">خدمات خارجية</a> | <a href="/service/eco-friendly-cleaning" className="text-cyan-600 hover:text-cyan-700">خدمات تنظيف بيئية</a> | <a href="/service/cleaning-packages" className="text-cyan-600 hover:text-cyan-700">حزم تنظيف مخصصة</a> | <a href="/service/disinfection-services" className="text-cyan-600 hover:text-cyan-700">خدمات تعقيم شامل</a>' }} />
            <ul className="list-none space-y-2 mb-6">
              {[...service.features, 'خدمات تنظيف موثوقة', 'استخدام مواد آمنة', 'توفير وقت وجهد', 'خدمات تنظيف متنوعة', 'خدمات تنظيف بيئية'].map((feature: string, i: number) => (
                <li key={i} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-xl">
                <h3 className="text-xl font-semibold text-cyan-700 mb-2">فوائد الخدمة</h3>
                <p className="text-gray-700">توفر هذه الخدمة بيئة نظيفة وصحية، مما يقلل من خطر الأمراض ويحسن الراحة اليومية. مثال: توفير وقتك للتركيز على الأمور الأخرى.</p>
              </div>
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-xl">
                <h3 className="text-xl font-semibold text-cyan-700 mb-2">أمثلة على التسعير</h3>
                <p className="text-gray-700">بداية من 200 ريال للتنظيف الأساسي، مع خصومات للعملاء المنتظمين. اتصل للحصول على عرض مخصص.</p>
              </div>
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-xl">
                <h3 className="text-xl font-semibold text-cyan-700 mb-2">أسئلة شائعة</h3>
                <ul className="space-y-2">
                  {(service.faq || []).concat([{ question: 'هل تقدمون خدمات تنظيف متنوعة؟', answer: 'نعم، نقدم خيارات متعددة.' }, { question: 'ما هي طرق الدفع؟', answer: 'نقبل الدفع نقدًا أو عبر التطبيق.' }, { question: 'هل تقدمون خدمات تنظيف بيئية؟', answer: 'نعم، نقدم خدمات تنظيف بيئية.' }, { question: 'ما هي فوائد خدمات التنظيف؟', answer: 'فوائد خدمات التنظيف تشمل توفير الوقت، تحسين الراحة اليومية، وتقليل خطر الأمراض.' }]).map((qna: { question: string, answer: string }, idx: number) => (
                    <li key={idx} className="text-gray-700">
                      <span className="font-medium text-cyan-700">{qna.question}</span>: {qna.answer}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-4 rtl:space-x-reverse">
              <Link href={`/book-service?service=${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-full hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg" title='احجز خدمة تنظيف'>احجز الآن &rarr;</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ServicesPage;
