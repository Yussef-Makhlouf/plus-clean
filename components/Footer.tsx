import Link from 'next/link'
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react'

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
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {['الرئيسية', 'خدماتنا', 'الأسعار', 'اتصل بنا'].map((item, i) => (
                <li key={i}>
                  <Link 
                    href={`#${item === 'الرئيسية' ? '' : item}`} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
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
                <span>+966 555 000000</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>info@example.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">النشرة البريدية</h4>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="البريد الإلكتروني" 
                className="w-full px-4 py-2 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
              />
              <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:opacity-90 transition-opacity">
                اشترك الآن
              </button>
            </form>
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