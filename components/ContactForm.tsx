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
            <img src="/arabic color.avif" alt="شعار الشركة" className="w-32 h-32 object-contain mb-4 drop-shadow-lg bg-white rounded-full p-2 border border-teal-100" />
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
              <a href="tel:+966563009155" className="hover:underline text-[#00897B] font-semibold" dir='ltr'>+966 56 300 9155</a>
            </div>
            <div className="flex items-center mb-4">
              <Mail className="w-5 h-5 text-[#00897B] ml-2" />
              <a href="mailto:info@cleaningcompany.com" className="hover:underline text-[#00897B] font-semibold" dir='ltr'>info@cleaningcompany.com</a>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.facebook.com/profile.php?id=61574108861445" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <Facebook className="w-6 h-6 text-[#1877F3]" />
              </a>
              <a href="https://www.pinterest.com/yussefali424/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-[#E60023]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.21 22.5 1.5 17.79 1.5 12S6.21 1.5 12 1.5 22.5 6.21 22.5 12 17.79 22.5 12 22.5zm-1.5-7.5h3v-3h-3v3zm0-4.5h3V7.5h-3v3zm4.5 4.5h3v-3h-3v3zm0-4.5h3V7.5h-3v3z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/riaydh_ads/?fbclid=IwY2xjawKryehleHRuA2FlbQIxMABicmlkETFwYU16SFRmTWpYYUdxa1A2AR5gRfs2BVhRL9i3ZkNcq2JhRw_HIEX4XENr5mini6UsrJVbxPPx8vhLaobx5w_aem_WVykxY0QccEfsLExl9fNCA#" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6 text-[#E4405F]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

