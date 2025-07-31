import Link from 'next/link'
import { Facebook, Instagram, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1a2327] to-[#263238] text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16 border-b border-gray-700">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              شركة النظافة العصرية
            </h3>
            <p className="text-gray-400 leading-relaxed">
              نقدم خدمات تنظيف احترافية لمنزلك ومكتبك
            </p>
            <div className="flex gap-4 pt-4">
              <a href="https://www.facebook.com/share/16gaFSHYYT/?mibextid=qi2Omg" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors" title='شركة النظافة العصرية على فيسبوك'>
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/plusscleean0?fbclid=IwY2xjawK7tMtleHRuA2FlbQIxMABicmlkETFXMzc1UDNLS0hUYXd3MHZWAR6_JJRPSKSYqw5jlcVlbJUqWiq1dwdZGxIj1klNjv_NYzRUKNrhWECKKGQT1Q_aem_ZnU2xqYfYLDkuQel3ZX5NA" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors" title='شركة النظافة العصرية على انستقرام'>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://x.com/plusclean0?fbclid=IwY2xjawK7tO5leHRuA2FlbQIxMABicmlkETFXMzc1UDNLS0hUYXd3MHZWAR4jZvwTZmwkqcqn7s7Ay_wV2QMABL5UQPUM6KrPWOKEHTdwCBoOTkuDcux1BQ_aem_p_CPdoW2KF8vaF6TuL4gBg" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors" title='شركة النظافة العصرية على تويتر'>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {['الرئيسية', 'خدماتنا', 'مدونتنا'].map((item, i) => (
                <li key={i}>
                  <Link 
                    href={`${item === 'الرئيسية' ? '' : item === 'مدونتنا' ? '/blog' : item === 'خدماتنا' ? '/services' : item}`} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                    title={item}
                  >
                    <span className="h-px w-4 bg-gray-700"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-blue-400" />
                <span dir='ltr'>+966569131252</span>
              </li>
            
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>

    
        </div>

        {/* Bottom Footer */}
        <div className="py-6 text-center text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>جميع الحقوق محفوظة © {new Date().getFullYear()} شركة النظافة العصرية</p>
            <a 
              href="https://fashne.net" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-white transition-colors"
              title='تصميم وتطوير فشني للتسويق الرقمي'
            >
              تصميم وتطوير{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                فشني للتسويق الرقمي
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}