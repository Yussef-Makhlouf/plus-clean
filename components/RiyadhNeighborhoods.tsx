import SectionHeader from './SectionHeader'
import { Home, Star, Zap, ShieldCheck, Award, Heart } from 'lucide-react'

const neighborhoods = [
  {
    name: 'الملز',
    description: 'خدماتنا في الملز تجمع بين السرعة والدقة، مع فريق متخصص في صيانة المنازل وتنظيفها. نقدم حلولاً مبتكرة لكل احتياجاتك المنزلية.' ,
    feature: 'خدمة الطوارئ متوفرة 24/7',
    icon: <Zap className="w-7 h-7 text-teal-600" />,
    color: 'from-teal-100 to-white'
  },
  {
    name: 'العليا',
    description: 'في العليا، نعتني بكل تفاصيل منزلك من الألف إلى الياء. خدماتنا تشمل نقل العفش، التنظيف العميق، والصيانة الشاملة.' ,
    feature: 'خصومات حصرية لسكان العليا',
    icon: <Star className="w-7 h-7 text-yellow-500" />,
    color: 'from-yellow-50 to-white'
  },
  {
    name: 'النخيل',
    description: 'راحة بالك تبدأ من خدماتنا في النخيل. نهتم بالصيانة الدورية والتنظيف الاحترافي مع ضمان الجودة.' ,
    feature: 'ضمان على جميع الخدمات',
    icon: <ShieldCheck className="w-7 h-7 text-green-600" />,
    color: 'from-green-100 to-white'
  },
  {
    name: 'الصحافة',
    description: 'نصل إليك في الصحافة بسرعة البرق، مع فريق مدرب على أعلى مستوى لتقديم أفضل الحلول المنزلية.' ,
    feature: 'استجابة سريعة للطلبات',
    icon: <Zap className="w-7 h-7 text-blue-500" />,
    color: 'from-blue-100 to-white'
  },
  {
    name: 'الياسمين',
    description: 'خدماتنا في الياسمين تضيف لمسة من الفخامة والراحة إلى منزلك. نهتم بأدق التفاصيل.' ,
    feature: 'خدمة VIP مميزة',
    icon: <Award className="w-7 h-7 text-pink-500" />,
    color: 'from-pink-100 to-white'
  },
  {
    name: 'الروضة',
    description: 'نهتم بكل تفاصيل منزلك في الروضة، من التنظيف إلى صيانة الأجهزة المنزلية.' ,
    feature: 'تنظيف شامل وصيانة متكاملة',
    icon: <Home className="w-7 h-7 text-teal-700" />,
    color: 'from-teal-50 to-white'
  },
  {
    name: 'السويدي',
    description: 'خدماتنا في السويدي تجمع بين الجودة والأسعار المناسبة لجميع خدمات المنزل.' ,
    feature: 'أسعار تنافسية',
    icon: <Star className="w-7 h-7 text-orange-500" />,
    color: 'from-orange-100 to-white'
  },
  {
    name: 'الفيحاء',
    description: 'في الفيحاء، نقدم حلول مبتكرة وسريعة لكل احتياجاتك المنزلية والصيانة.' ,
    feature: 'حلول مبتكرة وسريعة',
    icon: <Zap className="w-7 h-7 text-purple-500" />,
    color: 'from-purple-100 to-white'
  },
  {
    name: 'المرسلات',
    description: 'خدمات منزلية في المرسلات تضمن لك راحة البال وسرعة الإنجاز في كل الأوقات.' ,
    feature: 'راحة البال مضمونة',
    icon: <Heart className="w-7 h-7 text-red-500" />,
    color: 'from-red-100 to-white'
  },
  {
    name: 'الربيع',
    description: 'في الربيع، نعتني بمنزلك وكأنه منزلنا: تنظيف، صيانة، نقل عفش والمزيد.' ,
    feature: 'خدمة شاملة لكل أفراد الأسرة',
    icon: <Home className="w-7 h-7 text-green-700" />,
    color: 'from-green-50 to-white'
  },
  {
    name: 'المروج',
    description: 'خدماتنا في المروج مصممة خصيصًا لتناسب أسلوب حياتك العصري واحتياجاتك المنزلية.'
  },
  {
    name: 'الملك فهد',
    description: 'خدمات راقية في الملك فهد بمعايير عالمية: صيانة، تنظيف، نقل أثاث.'
  },
  {
    name: 'الملك عبد الله',
    description: 'خدماتنا في الملك عبد الله تجمع بين الحداثة والخبرة في جميع أعمال المنزل.'
  },
  {
    name: 'الدرعية',
    description: 'في الدرعية، نقدم خدمات أصيلة بروح عصرية: تنظيف وصيانة ونقل عفش.'
  },
  {
    name: 'الشفا',
    description: 'خدماتنا في الشفا تضمن لك الراحة والطمأنينة في كل الأوقات مع فريق محترف.'
  },
  {
    name: 'الحمراء',
    description: 'في الحمراء، نهتم بكل تفاصيل منزلك لتعيش حياة أسهل وأكثر راحة.'
  },
  {
    name: 'غرناطة',
    description: 'خدماتنا في غرناطة تجمع بين السرعة والدقة في جميع أعمال المنزل.'
  },
  {
    name: 'اليرموك',
    description: 'في اليرموك، نقدم حلول متكاملة لكل احتياجاتك المنزلية والصيانة.'
  },
  {
    name: 'العريجاء',
    description: 'خدماتنا في العريجاء تواكب تطلعاتك وتفوق توقعاتك في جميع خدمات المنزل.'
  },
  {
    name: 'النسيم',
    description: 'في النسيم، نمنحك تجربة خدمات منزلية لا مثيل لها في الرياض.'
  }
]

export default function RiyadhNeighborhoods() {
  return (
    <section id="riyadh-neighborhoods" className="py-24 bg-gradient-to-br from-white via-teal-50 to-[#e0f7fa]">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="الأحياء في الرياض"
          subtitle="نخدم جميع مناطق مدينة الرياض بخدمات منزلية متكاملة ومميزة لكل حي: صيانة، تنظيف، نقل عفش، مكافحة حشرات وأكثر."
          className="mb-10 text-right lg:text-right"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {neighborhoods.map((item, idx) => (
            <article
              key={idx}
              className={`relative flex flex-col items-center justify-between bg-gradient-to-br ${item.color} rounded-[2.5rem] shadow-2xl p-12 border-0 min-h-[420px] overflow-hidden group transition-transform duration-300 hover:-translate-y-3 hover:rotate-1 hover:shadow-[0_8px_40px_8px_rgba(0,150,136,0.15)]`}
              style={{
                backgroundImage: `url('data:image/svg+xml;utf8,<svg width=\'200\' height=\'200\' viewBox=\'0 0 200 200\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><circle cx=\'100\' cy=\'100\' r=\'80\' fill=\'%23e0f7fa\' fill-opacity=\'0.18\'/></svg>')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right',
                backgroundSize: '120px',
              }}
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="flex flex-col items-center w-full">
                <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-white/70 shadow-lg ring-4 ring-teal-100 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-gray-900 font-extrabold text-2xl text-center tracking-tight mb-3 mt-2 drop-shadow-lg" itemProp="areaServed">{item.name}</h3>
                <p className="text-gray-700 text-lg text-center mb-6 leading-relaxed font-medium" itemProp="description">{item.description}</p>
                <span className="inline-block bg-teal-600 text-white text-sm font-semibold rounded-full px-6 py-2 mb-4 shadow-md">{item.feature}</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mt-4">
                <a
                  href="tel:+966563009155"
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-base font-bold shadow-lg transition-colors duration-200 min-w-[120px]"
                  title="اتصل الآن"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm12-12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                  اتصال
                </a>
                <a
                  href="https://wa.me/966563009155"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-2 rounded-full text-base font-bold shadow-lg transition-colors duration-200 min-w-[120px]"
                  title="تواصل واتساب"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 32 32"><path fill="currentColor" d="M16 3C9.373 3 4 8.373 4 15c0 2.646.86 5.1 2.33 7.11L4 29l7.14-2.29A12.93 12.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.84-.58-5.4-1.58l-.38-.24-4.24 1.36 1.38-4.13-.25-.39A9.94 9.94 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.71c-.29-.15-1.71-.84-1.97-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.91 1.12-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.16-.01-.36-.01-.56-.01-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43 0 1.43 1.04 2.81 1.19 3 .15.19 2.05 3.13 4.97 4.27.7.3 1.25.48 1.68.61.71.23 1.36.2 1.87.12.57-.09 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z"/></svg>
                  واتساب
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
} 