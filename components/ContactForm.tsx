'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react'
import SectionHeader from './SectionHeader'

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#ECEFF1] to-[#B2DFDB]">
      <div className="container mx-auto px-6">
        <SectionHeader title="تواصل معنا" />
        <div className="flex flex-col md:flex-row items-center gap-12 justify-center">
          {/* شعار الشركة */}
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <img src="https://cleanplusteam.com/logo.avif" alt="شعار الشركة" className="w-32 h-32 object-contain mb-4 drop-shadow-lg bg-white rounded-full p-2 border border-teal-100" />
            <span className="text-2xl font-bold text-[#00897B]">شركة التنظيف الحديثة</span>
          </div>
          {/* معلومات الاتصال */}
          <div className="card p-8 shadow-xl bg-white/80 rounded-xl min-w-[320px]">
            <h3 className="text-xl font-bold mb-6 text-[#00897B]">معلومات الاتصال</h3>
            <div className="flex items-center mb-4">
              <MapPin className="w-5 h-5 text-[#00897B] ml-2" />
              <span> الرياض، المملكة العربية السعودية</span>
            </div>
            <div className="flex items-center mb-4">
              <Phone className="w-5 h-5 text-[#00897B] ml-2" />
              <a href="tel:+966569131252" className="hover:underline text-[#00897B] font-semibold" dir='ltr' title='اتصل بنا على الرقم +966569131252'>+966569131252</a>
            </div>
            <div className="flex items-center mb-4">
              <Mail className="w-5 h-5 text-[#00897B] ml-2" />
              <a href="mailto:cleanup@cleanplusteam.com" className="hover:underline text-[#00897B] font-semibold" dir='ltr' title='اتصل بنا على البريد الإلكتروني cleanup@cleanplusteam.com'>cleanup@cleanplusteam.com</a>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.facebook.com/share/16gaFSHYYT/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title='شركة النظافة العصرية على فيسبوك'>
                <Facebook className="w-6 h-6 text-[#1877F3]" />
              </a>
              <a href="https://www.pinterest.com/yussefali424/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title='شركة النظافة العصرية على بينتيريست'>
                <svg className="w-6 h-6 text-[#E60023]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.21 22.5 1.5 17.79 1.5 12S6.21 1.5 12 1.5 22.5 6.21 22.5 12 17.79 22.5 12 22.5zm-1.5-7.5h3v-3h-3v3zm0-4.5h3V7.5h-3v3zm4.5 4.5h3v-3h-3v3zm0-4.5h3V7.5h-3v3z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/plusscleean0?fbclid=IwY2xjawK7tMtleHRuA2FlbQIxMABicmlkETFXMzc1UDNLS0hUYXd3MHZWAR6_JJRPSKSYqw5jlcVlbJUqWiq1dwdZGxIj1klNjv_NYzRUKNrhWECKKGQT1Q_aem_ZnU2xqYfYLDkuQel3ZX5NA" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title='شركة النظافة العصرية على انستقرام'>
                <Instagram className="w-6 h-6 text-[#E4405F]" />
              </a>
              <a href="https://x.com/plusclean0?fbclid=IwY2xjawK7tO5leHRuA2FlbQIxMABicmlkETFXMzc1UDNLS0hUYXd3MHZWAR4jZvwTZmwkqcqn7s7Ay_wV2QMABL5UQPUM6KrPWOKEHTdwCBoOTkuDcux1BQ_aem_p_CPdoW2KF8vaF6TuL4gBg" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title='شركة النظافة العصرية على تويتر'>
                <svg className="w-6 h-6 text-[#000000]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

