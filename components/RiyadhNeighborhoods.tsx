import SectionHeader from './SectionHeader'
import { Home, Star, Zap, ShieldCheck, Award, Heart } from 'lucide-react'

const neighborhoods = [
  {
    name: 'الملز',
    description: 'نقدم خدمات تنظيف احترافية في حي الملز تشمل تنظيف الشقق والفلل بأسعار تبدأ من 300 ريال. نستخدم تقنيات التنظيف  للسجاد والموكيت وتعقيم خزانات المياه بمعدات حديثة. خدماتنا متاحة يوميًا مع فريق مدرب في الملز لضمان بيئة نظيفة وصحية.',
    feature: 'خدمة تنظيف فورية 24/7 في الملز',
    icon: <Zap className="w-7 h-7 text-teal-600" />,
    color: 'from-teal-100 to-white'
  },
  {
    name: 'العليا',
    description: 'في حي العليا، نقدم خدمات تنظيف مكاتب ومنازل بجودة عالية تشمل تنظيف النوافذ والستائر وتلميع الأرضيات. فريقنا يستخدم مواد تنظيف آمنة وصديقة للبيئة لضمان راحة العملاء. خدماتنا مثالية للمحلات التجارية والمكاتب في العليا بأسعار تنافسية.',
    feature: 'عروض خاصة لسكان العليا',
    icon: <Star className="w-7 h-7 text-yellow-500" />,
    color: 'from-yellow-50 to-white'
  },
  {
    name: 'النخيل',
    description: 'خدمات تنظيف متميزة في حي النخيل تشمل تنظيف القصور والفلل الكبيرة مع التركيز على تنظيف المسابح وتنسيق الحدائق. نقدم خدمات تنظيف الأثاث الجلدي والخشبي بتقنيات متطورة وتعطير المنازل بعطور طبيعية لإضفاء لمسة فاخرة في النخيل.',
    feature: 'ضمان جودة على تنظيف الفلل',
    icon: <ShieldCheck className="w-7 h-7 text-green-600" />,
    color: 'from-green-100 to-white'
  },
  {
    name: 'الصحافة',
    description: 'في حي الصحافة، نوفر خدمات تنظيف ما بعد التشطيب والدهان بأسعار تبدأ من 600 ريال للفلل. تشمل خدماتنا تنظيف الكنب والمفروشات  وتنظيف السيارات بمعدات متطورة. فريقنا يضمن نظافة مثالية مع استجابة سريعة في الصحافة.',
    feature: 'تنظيف سريع بعد التشطيب',
    icon: <Zap className="w-7 h-7 text-blue-500" />,
    color: 'from-blue-100 to-white'
  },
  {
    name: 'الياسمين',
    description: 'خدمات تنظيف فاخرة في حي الياسمين تشمل تنظيف الثريات والكريستال وتلميع الأرضيات الرخامية. نقدم خدمات VIP للمنازل الفاخرة مع تنظيف التحف والديكورات بعناية فائقة. فريقنا مدرب على تقديم تجربة تنظيف راقية في الياسمين بأسعار مناسبة.',
    feature: 'خدمة تنظيف VIP فاخرة',
    icon: <Award className="w-7 h-7 text-pink-500" />,
    color: 'from-pink-100 to-white'
  },
  {
    name: 'الروضة',
    description: 'في حي الروضة، نقدم خدمات تنظيف شاملة للمنازل العائلية تشمل تنظيف الحدائق والمرافق الخارجية. خدماتنا تشمل تنظيف السجاد بأسعار 4-8 ريال للمتر وتعقيم الخزانات باستخدام مواد آمنة. فريقنا يضمن نظافة مثالية في الروضة بمواعيد مرنة.',
    feature: 'تنظيف شامل للمنازل والحدائق',
    icon: <Home className="w-7 h-7 text-teal-700" />,
    color: 'from-teal-50 to-white'
  },
  {
    name: 'السويدي',
    description: 'خدمات تنظيف اقتصادية في حي السويدي بأسعار تبدأ من 200 ريال للشقق الصغيرة. نقدم باقات تنظيف أسبوعية وشهرية تناسب جميع الميزانيات مع تنظيف المكاتب والشقق بجودة عالية. فريقنا يضمن نظافة مثالية في السويدي بأسعار تنافسية.',
    feature: 'باقات تنظيف بأسعار مخفضة',
    icon: <Star className="w-7 h-7 text-orange-500" />,
    color: 'from-orange-100 to-white'
  },
  {
    name: 'الفيحاء',
    description: 'في حي الفيحاء، نقدم خدمات تنظيف مبتكرة باستخدام تقنيات التنظيف بالنانو والمكانس . تشمل خدماتنا تنظيف المفروشات وتعقيم المنازل بأجهزة الموجات فوق الصوتية لضمان بيئة صحية. خدمات سريعة وفعالة في الفيحاء بأسعار معقولة.',
    feature: 'تنظيف مبتكر بالنانو تكنولوجي',
    icon: <Zap className="w-7 h-7 text-purple-500" />,
    color: 'from-purple-100 to-white'
  },
  {
    name: 'المرسلات',
    description: 'خدمات تنظيف آمنة في حي المرسلات باستخدام منظفات طبيعية غير سامة تناسب الأطفال وكبار السن. نقدم تنظيف المنازل والمكاتب مع ضمان شامل على الخدمات. فريقنا في المرسلات مدرب على تقديم خدمات موثوقة بجودة عالية وراحة بال مضمونة.',
    feature: 'منظفات آمنة للأطفال',
    icon: <Heart className="w-7 h-7 text-red-500" />,
    color: 'from-red-100 to-white'
  },
  {
    name: 'الربيع',
    description: 'في حي الربيع، نقدم خدمات تنظيف عائلية تشمل تنظيف غرف الأطفال وتعقيم الألعاب باستخدام مواد عضوية. خدماتنا تشمل تنظيف المنازل الكبيرة والشقق بأسعار تبدأ من 300 ريال، مع التركيز على بيئة صحية للأسر في الربيع.',
    feature: 'تنظيف عائلي آمن',
    icon: <Home className="w-7 h-7 text-green-700" />,
    color: 'from-green-50 to-white'
  },
  {
    name: 'المروج',
    description: 'خدمات تنظيف صحية في حي المروج تشمل تعقيم المراتب والوسائد وإزالة الجراثيم بتقنيات متقدمة. نقدم تنظيف المنازل ذات الأطفال الرضع باستخدام مواد آمنة وخدمات تعقيم شاملة لضمان بيئة صحية في المروج.',
    feature: 'تعقيم شامل للمنازل',
    icon: <Home className="w-7 h-7 text-green-700" />,
    color: 'from-green-50 to-white'
  },
  {
    name: 'الملك فهد',
    description: 'في حي الملك فهد، نقدم خدمات تنظيف راقية للقصور والمجمعات السكنية تشمل تنظيف الأثاث الفاخر والديكورات. فريقنا مدرب على التعامل مع الأثاث الثمين بأسعار تبدأ من 800 ريال للفلل، مع ضمان جودة عالية في الملك فهد.',
    feature: 'تنظيف فاخر للقصور',
    icon: <Home className="w-7 h-7 text-green-700" />,
    color: 'from-green-50 to-white'
  },
  {
    name: 'الملك عبد الله',
    description: 'خدمات تنظيف متطورة في حي الملك عبد الله باستخدام معدات ألمانية تشمل التنظيف والتنظيف الجاف. نقدم خدمات إزالة الروائح وتعطير المنازل بأسعار تنافسية، مع فريق مدرب لتقديم تجربة تنظيف مميزة في الملك عبد الله.',
    feature: 'تنظيف متطور',
    icon: <Home className="w-7 h-7 text-green-700" />,
    color: 'from-green-50 to-white'
  },
  {
    name: 'الدرعية',
    description: 'في منطقة الدرعية، نقدم خدمات تنظيف تراثية تحافظ على المنازل التاريخية باستخدام مواد تنظيف طبيعية. تشمل خدماتنا تنظيف الأثاث التراثي والمفروشات اليدوية بعناية فائقة، مع ضمان الحفاظ على القيمة التاريخية في الدرعية.',
    feature: 'تنظيف تراثي مميز',
    icon: <Home className="w-7 h-7 text-green-700" />,
    color: 'from-green-50 to-white'
  },
  {
    name: 'الشفا',
    description: 'خدمات تنظيف صحية في حي الشفا تركز على تعقيم المنازل للأشخاص المصابين بالحساسية. نستخدم منظفات طبية وأجهزة تعقيم متقدمة لتوفير بيئة صحية خالية من الجراثيم، مع خدمات تنظيف شاملة في الشفا بأسعار مناسبة.',
    feature: 'تعقيم طبي متقدم',
    icon: <Home className="w-7 h-7 text-green-700" />,
    color: 'from-green-50 to-white'
  },
  {
    name: 'الحمراء',
    description: 'في حي الحمراء، نقدم خدمات تنظيف متعددة تشمل المنازل، المكاتب، والمستودعات بمواعيد مرنة. فريقنا يقدم حلول تنظيف مخصصة تناسب احتياجات العملاء، مع تنظيف السجاد والكنب بأسعار تبدأ من 220 ريال في الحمراء.',
    feature: 'حلول تنظيف مخصصة',
    icon: <Home className="w-7 h-7 text-green-700" />,
    color: 'from-green-50 to-white'
  },
  {
    name: 'غرناطة',
    description: 'خدمات تنظيف أندلسية في حي غرناطة تشمل تنظيف الأفنية والنوافير والبلاط الأندلسي. نستخدم تقنيات تقليدية مع أدوات حديثة للحفاظ على الطابع المعماري للحي، مع خدمات تنظيف شاملة بأسعار تنافسية في غرناطة.',
    feature: 'تنظيف أندلسي مميز',
    icon: <Home className="w-7 h-7 text-green-700" />,
    color: 'from-green-50 to-white'
  },
  {
    name: 'اليرموك',
    description: 'في حي اليرموك، نقدم خدمات تنظيف اقتصادية تناسب جميع الميزانيات مع تنظيف الشقق والمنازل بأسعار تبدأ من 200 ريال. فريقنا من أبناء الحي يقدم خدمات تنظيف أسبوعية وشهرية بجودة عالية ومرونة في الدفع في اليرموك.',
    feature: 'تنظيف اقتصادي عالي الجودة',
    icon: <Home className="w-7 h-7 text-green-700" />,
    color: 'from-green-50 to-white'
  },
  {
    name: 'العريجاء',
    description: 'خدمات تنظيف حديثة في حي العريجاء تشمل تنظيف الواجهات الزجاجية والنوافذ العالية للأبراج السكنية. نقدم خدمات تنظيف ما بعد الانتقال بأسعار تبدأ من 300 ريال، مع فريق مدرب لتقديم نظافة مثالية في العريجاء.',
    feature: 'تنظيف ما بعد الانتقال',
    icon: <Home className="w-7 h-7 text-green-700" />,
    color: 'from-green-50 to-white'
  },
  {
    name: 'النسيم',
    description: 'في حي النسيم، نقدم خدمات تنظيف موسمية تشمل التنظيف الربيعي وتحضير المنازل للأعياد. نستخدم عطور طبيعية لتعطير المنازل مع تنظيف السجاد والمفروشات بأسعار تبدأ من 4 ريال للمتر، لتوفير بيئة منعشة في النسيم.',
    feature: 'تنظيف موسمي منعش',
    icon: <Home className="w-7 h-7 text-green-700" />,
    color: 'from-green-50 to-white'
  }
]

export default function RiyadhNeighborhoods() {
  return (
    <section id="riyadh-neighborhoods" className="py-24 bg-gradient-to-br from-white via-teal-50 to-[#e0f7fa]" aria-label="خدمات تنظيف في أحياء الرياض - شركة تنظيف محترفة">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="خدمات تنظيف في أحياء الرياض"
          subtitle="نوفر خدمات تنظيف منازل، فلل، سجاد، وخزانات في جميع أحياء الرياض: الملز، العليا، النخيل، النسيم، وأكثر بأسعار تنافسية."
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
                  href="tel:+966569131252"
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-base font-bold shadow-lg transition-colors duration-200 min-w-[120px]"
                  title={`اتصل لخدمات تنظيف في ${item.name}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm12-12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                  اتصال
                </a>
                <a
                  href="https://wa.me/966569131252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-2 rounded-full text-base font-bold shadow-lg transition-colors duration-200 min-w-[120px]"
                  title={`تواصل عبر واتساب لخدمات تنظيف في ${item.name}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 32 32"><path fill="currentColor" d="M16 3C9.373 3 4 8.373 4 15c0 2.646.86 5.1 2.33 7.11L4 29l7.14-2.29A12.93 12.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.84-.58-5.4-1.58l-.38-.24-4.24 1.36 1.38-4.13-.25-.39A9.94 9.94 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.71c-.29-.15-1.71-.84-1.97-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.91 1.12-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.60.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.16-.01-.36-.01-.56-.01-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43 0 1.43 1.04 2.81 1.19 3 .15.19 2.05 3.13 4.97 4.27.7.3 1.25.48 1.68.61.71.23 1.36.2 1.87.12.57-.09 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z"/></svg>
                  واتساب
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'ItemList', 'itemListElement': neighborhoods.map((neighborhood, index) => ({ '@type': 'ListItem', 'position': index + 1, 'item': { '@type': 'Service', 'name': `خدمات تنظيف في ${neighborhood.name}`, 'description': neighborhood.description, 'areaServed': neighborhood.name, 'provider': { '@type': 'Organization', 'name': 'أفضل شركة تنظيف بالرياض', 'url': 'https://yourdomain.com' } } })) }) }} />
    </section>
  )
}