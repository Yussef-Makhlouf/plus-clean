'use client'
import { Metadata } from 'next';
import { motion } from 'framer-motion';
import SectionHeader from '../../components/SectionHeader';
import { 
  Zap, 
  ShieldCheck, 
  Star, 
  Home, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Info,
  Droplets,
  Wind,
  Sparkles,
  ThermometerSun,
  Leaf,
  Users,
  Calendar,
  Award,
  Phone,
  MessageCircle,
  MapPin,
  Timer,
  Shield,
  Heart,
  Brain,
  Eye,
  Scissors,
  Hammer,
  Wrench,
  Sofa,

  Armchair
} from 'lucide-react';
import Footer from '../../components/Footer';

import Header from '../../components/Header';

const SofaCleaningPage = () => {
  return (
    <>
    <Header />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-[#F8FBFB] to-[#E0F7FA] py-16"
    >
      <div className="container mx-auto px-4 servicesContainer" dir="rtl">
        {/* Hero Section */}
        <SectionHeader
          title="خدمات تنظيف الكنب والأثاث في الرياض - بلس كلين"
          subtitle="نقدم خدمات تنظيف الكنب والأثاث في الرياض بأعلى معايير الجودة والاحترافية، مع ضمان نظافة مثالية وحماية الأقمشة"
          className="text-right mb-12 pt-12"
        />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-800 mb-12 text-right leading-relaxed"
        >
          <p className="mb-6">
            تعتبر **بلس كلين** الرائدة في مجال تنظيف الكنب والأثاث في الرياض، حيث نقدم خدمات تنظيف 
            متخصصة للكنب والكراسي والمفروشات بأعلى معايير الجودة والاحترافية. نخدم جميع أحياء الرياض 
            الشمالية والجنوبية والشرقية والغربية، ونتخصص في تنظيف جميع أنواع الأقمشة والجلود.
          </p>
          <p className="mb-6">
            فريقنا المتخصص في **تنظيف الكنب في الرياض** يستخدم أحدث التقنيات الأوروبية والأمريكية لضمان 
            إزالة البقع الصعبة، القضاء على الجراثيم والبكتيريا، وإعادة الكنب إلى حالته الأصلية. نقدم 
            خدماتنا للمنازل، الفلل، القصور، المكاتب، الشركات، الفنادق، والمطاعم في جميع أنحاء العاصمة الرياض.
          </p>
        </motion.div>

        {/* Comprehensive Services Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-right">خدماتنا الشاملة لتنظيف الكنب والأثاث في الرياض</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'تنظيف الكنب الشامل',
                description: 'خدمة تنظيف كنب متكاملة تشمل جميع أجزاء الكنب من الأقمشة إلى الإطار مع التركيز على التفاصيل الدقيقة',
                details: [
                  'تنظيف وتلميع جميع أنواع الأقمشة',
                  'إزالة البقع المستعصية والقديمة',
                  'تعقيم وتطهير بنسبة 99.9%',
                  'إزالة الروائح الكريهة نهائياً',
                  'تجفيف سريع خلال 2-4 ساعات',
                  'حماية الألوان والنسيج الأصلي',
                  'خدمة في المنزل بدون نقل'
                ],
                icon: <Sofa className="w-8 h-8 text-cyan-600" />,
              },
              {
                title: 'تنظيف الكراسي والمقاعد',
                description: 'خدمات تنظيف متخصصة للكراسي والمقاعد بمختلف أحجامها وأنواعها مع مراعاة خصوصية كل قطعة',
                details: [
                  'تنظيف كراسي المكاتب والمجالس',
                  'تنظيف كراسي المطاعم والكافيهات',
                  'تنظيف كراسي السيارات والمركبات',
                  'تنظيف كراسي الحدائق والتراس',
                  'تنظيف كراسي الأطفال والرضع',
                  'تنظيف كراسي كبار السن بعناية خاصة',
                  'تنظيف الكراسي قبل وبعد المناسبات',
                  'خدمات تنظيف طارئة للكراسي'
                ],
                icon: <Armchair className="w-8 h-8 text-cyan-600" />,
              },
              {
                title: 'تنظيف المفروشات والوسائد',
                description: 'خدمات تنظيف متميزة للمفروشات والوسائد مع فرق عمل متخصصة ومعدات متطورة',
                details: [
                  'تنظيف وسائد الكنب والمقاعد',
                  'تنظيف وسائد النوم والمراتب',
                  'تنظيف وسائد الحدائق والتراس',
                  'تنظيف وسائد الأطفال والرضع',
                  'تنظيف وسائد كبار السن',
                  'تنظيف الوسائد قبل وبعد المناسبات',
                  'تنظيف الوسائد الطارئة',
                  'تنظيف الوسائد المخصصة'
                ],
                icon: <Home className="w-8 h-8 text-cyan-600" />,
              },
              {
                title: 'تنظيف دوري ومنتظم',
                description: 'برامج تنظيف دورية مخصصة للمحافظة على نظافة الكنب والأثاث بشكل مستمر طوال العام',
                details: [
                  'تنظيف يومي للمناطق عالية الاستخدام',
                  'تنظيف أسبوعي شامل لجميع الكنب',
                  'تنظيف شهري عميق ومتخصص',
                  'تنظيف موسمي للتحضير للمناسبات',
                  'برامج تنظيف مخصصة للأسر الكبيرة',
                  'جداول تنظيف مرنة حسب الحاجة',
                  'متابعة دورية لضمان الجودة',
                  'تقارير شهرية عن حالة النظافة'
                ],
                icon: <Clock className="w-8 h-8 text-cyan-600" />,
              },
              {
                title: 'تنظيف بعد المناسبات',
                description: 'خدمات تنظيف متخصصة بعد الحفلات والمناسبات الاجتماعية والعائلية',
                details: [
                  'تنظيف بعد حفلات الزفاف والخطوبة',
                  'تنظيف بعد المناسبات الدينية والأعياد',
                  'تنظيف بعد الولائم والعزائم الكبيرة',
                  'إزالة البقع الناتجة عن الطعام والشراب',
                  'تنظيف وترتيب الكنب بعد إعادة ترتيبه',
                  'تنظيف الحدائق والساحات الخارجية',
                  'إزالة الزينة والديكورات المؤقتة',
                  'استعادة الكنب لحالته الطبيعية'
                ],
                icon: <Sparkles className="w-8 h-8 text-cyan-600" />,
              },
              {
                title: 'خدمات التعقيم والتطهير',
                description: 'خدمات تعقيم شاملة باستخدام أحدث التقنيات لضمان بيئة صحية وآمنة للأسرة',
                details: [
                  'تعقيم  عالي الحرارة',
                  'تعقيم بالأشعة فوق البنفسجية',
                  'تعقيم بالمواد الكيميائية الآمنة',
                  'تعقيم أنظمة التكييف والتهوية',
                  'تعقيم الأسطح والمقابض',
                  'تعقيم الحمامات والمطابخ',
                  'تعقيم ألعاب الأطفال والمفروشات',
                  'شهادات تعقيم معتمدة'
                ],
                icon: <ShieldCheck className="w-8 h-8 text-cyan-600" />,
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 serviceCard border-r-4 border-cyan-600"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-bold text-cyan-900">{service.title}</h3>
                </div>
                <p className="text-gray-700 text-right mb-4 leading-relaxed">{service.description}</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-right">
                  {service.details.map((detail, i) => (
                    <li key={i} className="text-sm leading-relaxed">{detail}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Detailed Article Content */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-right">دليلك الشامل لتنظيف الكنب والأثاث في الرياض</h2>
          
          {/* Fabric Types */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Eye className="w-10 h-10 text-cyan-600" />
              <h3 className="text-2xl font-bold text-cyan-900">أنواع الأقمشة وطرق تنظيفها</h3>
            </div>
            <div className="text-gray-700 text-right leading-relaxed">
              <p className="mb-4">
                كل نوع من الأقمشة يحتاج إلى تقنيات تنظيف مختلفة ومتخصصة. فهم طبيعة كل قماش واستخدامه 
                يساعدنا في تقديم خدمة تنظيف مثالية تحقق أفضل النتائج وتحافظ على سلامة الأقمشة.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">الأقمشة الطبيعية</h4>
              <p className="mb-4">
                <strong>القطن:</strong> قماش طبيعي يحتاج تنظيفاً لطيفاً باستخدام مواد طبيعية. يمكن تنظيفه 
                بالماء الدافئ والصابون الطبيعي، مع تجنب المواد الكيميائية القوية التي قد تضر بالنسيج.
              </p>
              
              <p className="mb-4">
                <strong>الكتان:</strong> قماش طبيعي مقاوم للبقع ولكنه حساس للمواد الكيميائية. يحتاج تنظيفاً 
                لطيفاً باستخدام مواد طبيعية وتجنب التعرض المباشر لأشعة الشمس لفترات طويلة.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">الأقمشة الصناعية</h4>
              <p className="mb-4">
                <strong>البوليستر:</strong> قماش صناعي مقاوم للبقع والتجاعيد. يمكن تنظيفه بسهولة باستخدام 
                مواد تنظيف متعددة الاستخدامات، وهو مناسب للاستخدام اليومي.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">الأقمشة المختلطة</h4>
              <p className="mb-4">
                <strong>القطن المخلوط:</strong> يجمع بين خصائص القطن الطبيعي والبوليستر الصناعي. يحتاج 
                تنظيفاً متوازناً باستخدام مواد مناسبة للأنواع المختلطة.
              </p>
            </div>
          </motion.div>

          {/* Stain Removal */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-lg mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Droplets className="w-10 h-10 text-cyan-600" />
              <h3 className="text-2xl font-bold text-cyan-900">إزالة البقع الصعبة من الكنب</h3>
            </div>
            <div className="text-gray-700 text-right leading-relaxed">
              <p className="mb-4">
                إزالة البقع من الكنب تحتاج إلى معرفة نوع البقعة ونوع القماش. نحن نستخدم تقنيات متخصصة 
                لإزالة جميع أنواع البقع بأمان وفعالية.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">بقع الطعام والشراب</h4>
              <p className="mb-4">
                <strong>القهوة والشاي:</strong> نستخدم محلول الخل والماء لإزالة بقع القهوة والشاي، مع 
                تجنب الفرك الشديد الذي قد يضر بالنسيج.
              </p>
              
              <p className="mb-4">
                <strong>الزيت والدهون:</strong> نستخدم بيكربونات الصوديوم لإزالة بقع الزيت والدهون، 
                مع ترك المادة لمدة 15 دقيقة قبل التنظيف.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">بقع الحبر والطلاء</h4>
              <p className="mb-4">
                <strong>الحبر:</strong> نستخدم الكحول الطبي لإزالة بقع الحبر، مع الحرص على عدم إتلاف 
                لون القماش الأصلي.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">بقع الدم والعرق</h4>
              <p className="mb-4">
                <strong>الدم:</strong> نستخدم الماء البارد لإزالة بقع الدم، مع تجنب الماء الساخن الذي 
                قد يثبت البقعة.
              </p>
            </div>
          </motion.div>

          {/* Technology and Innovation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-lg mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Zap className="w-10 h-10 text-cyan-600" />
              <h3 className="text-2xl font-bold text-cyan-900">التقنيات الحديثة في تنظيف الكنب</h3>
            </div>
            <div className="text-gray-700 text-right leading-relaxed">
              <p className="mb-4">
                نحن في بلس كلين نستخدم أحدث التقنيات العالمية في تنظيف الكنب لضمان حصولك على أفضل النتائج 
                في أقل وقت ممكن. هذه التقنيات تجمع بين الفعالية والأمان والاستدامة البيئية.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تقنية التنظيف المتطورة</h4>
              <p className="mb-4">
                تستخدم هذه التقنية الماء المسخن إلى درجات حرارة عالية (أكثر من 100 درجة مئوية) لتنظيف 
                وتعقيم الأقمشة دون استخدام مواد كيميائية ضارة. هذه الطريقة فعالة في قتل 99.9% من البكتيريا 
                والفيروسات والعفن، وهي آمنة تماماً للأطفال والحيوانات الأليفة.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">أنظمة الشفط عالية الكفاءة (HEPA)</h4>
              <p className="mb-4">
                نستخدم مكانس كهربائية مزودة بفلاتر HEPA التي تستطيع التقاط الجزيئات الدقيقة جداً (حتى 0.3 ميكرون) 
                بما في ذلك الغبار الناعم، حبوب اللقاح، والعوالق المجهرية. هذا يضمن تنظيفاً عميقاً وشاملاً لجميع الأسطح.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تقنية التنظيف بالموجات فوق الصوتية</h4>
              <p className="mb-4">
                تستخدم لتنظيف الأقمشة الحساسة والتفاصيل الدقيقة. الموجات فوق الصوتية تخلق فقاعات مجهرية 
                تنظف الأسطح بعمق دون أي ضرر.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">أنظمة التنظيف الآلية والروبوتات</h4>
              <p className="mb-4">
                نستخدم روبوتات تنظيف متطورة للأسطح الكبيرة، مما يضمن تنظيفاً منتظماً ودقيقاً 
                حتى في الأماكن صعبة الوصول. هذه الروبوتات مبرمجة لتتبع أنماط تنظيف محددة وتضمن عدم ترك أي منطقة.
              </p>
            </div>
          </motion.div>

          {/* Safety and Training */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Shield className="w-10 h-10 text-cyan-600" />
              <h3 className="text-2xl font-bold text-cyan-900">السلامة والأمان في خدمات تنظيف الكنب</h3>
            </div>
            <div className="text-gray-700 text-right leading-relaxed">
              <p className="mb-4">
                سلامة عملائنا وفريق العمل هي أولويتنا القصوى. نحن نتبع أعلى معايير السلامة والأمان 
                في جميع خدماتنا، ونحرص على التدريب المستمر لفريق العمل على أحدث بروتوكولات السلامة.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">معايير السلامة المهنية</h4>
              <p className="mb-4">
                جميع أعضاء فريقنا مدربون على استخدام معدات الحماية الشخصية، التعامل الآمن مع مواد التنظيف، 
                وإجراءات الطوارئ. نحن نتبع المعايير الدولية للسلامة المهنية ونحرص على تحديث معرفتنا 
                بأحدث بروتوكولات السلامة.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">الفحص الأمني للموظفين</h4>
              <p className="mb-4">
                جميع موظفينا يخضعون لفحص أمني شامل قبل التوظيف، ونحرص على التحقق من هوياتهم وخلفياتهم 
                المهنية. كما نوفر تأميناً شاملاً يغطي أي أضرار محتملة أثناء العمل، لضمان راحة البال الكاملة لعملائنا.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">بروتوكولات الصحة العامة</h4>
              <p className="mb-4">
                نتبع أعلى معايير النظافة الشخصية والصحة العامة، خاصة في ظل الاهتمام المتزايد بالوقاية 
                من الأمراض المعدية. فريقنا يرتدي الأقنعة والقفازات الواقية، ويتبع إجراءات التعقيم الصارمة 
                قبل وبعد كل خدمة.
              </p>
            </div>
          </motion.div>

          {/* Professional Tips */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Brain className="w-10 h-10 text-cyan-600" />
              <h3 className="text-2xl font-bold text-cyan-900">نصائح احترافية للحفاظ على نظافة الكنب</h3>
            </div>
            <div className="text-gray-700 text-right leading-relaxed">
              <p className="mb-4">
                بناءً على خبرتنا الطويلة في مجال تنظيف الكنب، نشارككم مجموعة من النصائح والإرشادات 
                المهنية التي ستساعدكم في الحفاظ على نظافة كنبكم بين زيارات فريق التنظيف المحترف.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">الوقاية من البقع</h4>
              <p className="mb-4">
                <strong>استخدام أغطية الحماية:</strong> استخدم أغطية قابلة للغسل على الكنب لحمايتها من 
                البقع والاتساخات اليومية. هذه الأغطية سهلة التنظيف ويمكن تغييرها بانتظام.
              </p>
              
              <p className="mb-4">
                <strong>التنظيف الفوري للبقع:</strong> كلما تمت معالجة البقعة بسرعة، كانت إزالتها أسهل. 
                استخدم منشفة نظيفة لامتصاص السوائل المنسكبة فوراً، ولا تفرك البقعة لتجنب انتشارها.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">العناية اليومية</h4>
              <p className="mb-4">
                <strong>الشفط المنتظم:</strong> استخدم المكنسة الكهربائية بانتظام لإزالة الغبار والوبر 
                من الكنب. هذا يمنع تراكم الأوساخ ويحافظ على مظهر الكنب.
              </p>
              
              <p className="mb-4">
                <strong>التهوية المنتظمة:</strong> اترك النوافذ مفتوحة لفترات قصيرة لتجديد الهواء، 
                لكن تجنب ذلك خلال العواصف الرملية أو ساعات الحر الشديد.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">منتجات التنظيف الطبيعية</h4>
              <p className="mb-4">
                <strong>الخل الأبيض:</strong> منظف طبيعي وفعال يمكن استخدامه لإزالة الروائح والبقع الخفيفة. 
                اخلط كميات متساوية من الخل والماء في زجاجة رش واستخدمها للتنظيف اليومي.
              </p>
              
              <p className="mb-4">
                <strong>بيكربونات الصوديوم:</strong> منظف طبيعي وآمن يمكن استخدامه لإزالة الروائح من 
                الكنب، تنظيف البقع الخفيفة، وإزالة الروائح الكريهة. اصنع عجينة بإضافة القليل 
                من الماء واستخدمها كمنظف كاشط لطيف.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Enhanced Process Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-right">منهجيتنا المتطورة في تنظيف الكنب</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'التقييم والاستشارة المجانية',
                description: 'زيارة مجانية لفحص الكنب وتحديد احتياجات التنظيف المحددة مع وضع خطة عمل مفصلة وتقدير دقيق للتكلفة والوقت المطلوب',
                icon: <Eye className="w-6 h-6 text-white" />
              },
              {
                step: '2',
                title: 'التحضير والتجهيز',
                description: 'إعداد المعدات المتخصصة واختيار مواد التنظيف المناسبة مع تأمين المنطقة وحماية الأثاث والممتلكات الثمينة',
                icon: <Hammer className="w-6 h-6 text-white" />
              },
              {
                step: '3',
                title: 'التنفيذ المتخصص',
                description: 'تنفيذ عملية التنظيف باستخدام تقنيات متقدمة وفقاً للمعايير العالمية مع مراقبة مستمرة للجودة وتطبيق بروتوكولات السلامة',
                icon: <Wrench className="w-6 h-6 text-white" />
              },
              {
                step: '4',
                title: 'المراجعة والضمان',
                description: 'فحص شامل لجودة العمل مع العميل وتقديم تقرير مفصل وضمان على الخدمة مع إرشادات للمحافظة على النظافة',
                icon: <CheckCircle2 className="w-6 h-6 text-white" />
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  <div className="flex items-center gap-2">
                    {step.icon}
                    <span>{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-cyan-900 mb-3 text-center">{step.title}</h3>
                <p className="text-gray-700 text-right leading-relaxed text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-right">الأسئلة الشائعة حول تنظيف الكنب</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'كم من الوقت تستغرق خدمة تنظيف الكنب؟',
                answer: 'تختلف مدة التنظيف حسب حجم الكنب ونوع الخدمة المطلوبة. الكنب الصغير يحتاج 2-3 ساعات، بينما الكنب الكبير قد يحتاج 4-6 ساعات للتنظيف الشامل.'
              },
              {
                question: 'هل المواد المستخدمة آمنة للأطفال والحيوانات الأليفة؟',
                answer: 'نعم، نحن نستخدم مواد تنظيف طبيعية وآمنة 100% للأطفال والحيوانات الأليفة. جميع منتجاتنا معتمدة ولا تحتوي على مواد كيميائية ضارة.'
              },
              {
                question: 'هل يمكنني البقاء في المنزل أثناء التنظيف؟',
                answer: 'بالطبع، يمكنك البقاء في المنزل أثناء التنظيف. فريقنا محترف ومدرب على العمل بهدوء واحترام خصوصية العملاء مع ضمان عدم إزعاجكم.'
              },
              {
                question: 'ماذا لو لم أكن راضياً عن جودة التنظيف؟',
                answer: 'نحن نقدم ضمان جودة 100%. إذا لم تكن راضياً عن أي جزء من الخدمة، سنعود لإعادة تنظيفه مجاناً خلال 24 ساعة أو نرد قيمة الخدمة.'
              },
              {
                question: 'هل تقدمون خدمات التنظيف في المساء أو عطلة نهاية الأسبوع؟',
                answer: 'نعم، نقدم خدماتنا سبعة أيام في الأسبوع من الساعة 7 صباحاً حتى 9 مساءً. يمكنكم حجز موعد يناسب جدولكم اليومي.'
              },
              {
                question: 'كيف يتم تحديد سعر خدمة تنظيف الكنب؟',
                answer: 'يتم تحديد السعر بناءً على حجم الكنب، نوع الخدمة المطلوبة، مستوى التنظيف المطلوب، والخدمات الإضافية. نقدم تقديراً مجاناً ودقيقاً قبل بدء العمل.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-lg font-bold text-cyan-900 mb-3 text-right">{faq.question}</h3>
                <p className="text-gray-700 text-right leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Methods */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-right">طرق التواصل والحجز</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <Phone className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-cyan-900 mb-2">الاتصال المباشر</h3>
              <p className="text-gray-700 mb-4">للحجز الفوري والاستفسارات العاجلة</p>
              <a
                href="tel:+966592425757"
                className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-cyan-700 transition-colors duration-300 inline-block"
              >
                966592425757+
              </a>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <MessageCircle className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-cyan-900 mb-2">واتساب</h3>
              <p className="text-gray-700 mb-4">للتواصل السريع وإرسال صور الكنب</p>
              <a
                href="https://wa.me/966592425757"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors duration-300 inline-block"
              >
                راسلنا الآن
              </a>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <MapPin className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-cyan-900 mb-2">خدمة متنقلة</h3>
              <p className="text-gray-700 mb-4">نصل إليك في جميع أنحاء الرياض</p>
              <span className="bg-gray-600 text-white px-6 py-3 rounded-lg font-bold inline-block">
                خدمة 24/7
              </span>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-right">لماذا تختار بلس كلين؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'خبرة تزيد عن 10 سنوات',
                description: 'فريق محترف مع خبرة واسعة في تنظيف جميع أنواع الكنب والأثاث',
                icon: <Award className="w-8 h-8 text-cyan-600" />
              },
              {
                title: 'ضمان الجودة 100%',
                description: 'نضمن رضاكم الكامل أو نعيد الخدمة مجاناً',
                icon: <ShieldCheck className="w-8 h-8 text-cyan-600" />
              },
              {
                title: 'مواد آمنة وطبيعية',
                description: 'نستخدم مواد تنظيف صديقة للبيئة وآمنة للعائلة',
                icon: <Leaf className="w-8 h-8 text-cyan-600" />
              },
              {
                title: 'أسعار تنافسية',
                description: 'أفضل الأسعار في السوق مع أعلى جودة خدمة',
                icon: <Star className="w-8 h-8 text-cyan-600" />
              },
              {
                title: 'سرعة في الاستجابة',
                description: 'خدمة عملاء متاحة 24/7 واستجابة فورية لطلباتكم',
                icon: <Clock className="w-8 h-8 text-cyan-600" />
              },
              {
                title: 'تقنيات متطورة',
                description: 'نستخدم أحدث المعدات والتقنيات في التنظيف',
                icon: <Zap className="w-8 h-8 text-cyan-600" />
              },
              {
                title: 'فريق مدرب ومؤهل',
                description: 'جميع موظفينا مدربون ومعتمدون في تقنيات التنظيف',
                icon: <Users className="w-8 h-8 text-cyan-600" />
              },
              {
                title: 'تأمين شامل',
                description: 'تأمين كامل على الخدمة وحماية ممتلكاتكم',
                icon: <Shield className="w-8 h-8 text-cyan-600" />
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-3">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-cyan-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final Enhanced CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center bg-gradient-to-r from-cyan-600 to-cyan-700 p-12 rounded-3xl text-white"
        >
          <h2 className="text-4xl font-bold mb-4">احصل على كنب نظيف ومريح اليوم</h2>
          <p className="text-xl mb-6 leading-relaxed">
            انضم إلى آلاف العملاء الراضين الذين اختاروا بلس كلين لتنظيف كنبهم في الرياض
          </p>
          <p className="text-lg mb-8 opacity-90">
            استشارة مجانية • تقدير دقيق للأسعار • ضمان الجودة • خدمة عملاء متميزة
          </p>
          <a
            href="https://wa.me/966592425757"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-cyan-600 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-50 transition-colors duration-300 inline-flex items-center gap-2"
          >
            تواصل معنا الآن
            <Zap className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              'serviceType': 'تنظيف الكنب والأثاث',
              'provider': {
                '@type': 'Organization',
                'name': 'بلس كلين',
                'areaServed': 'الرياض',
                'description': 'خدمات تنظيف الكنب والأثاث في الرياض بأعلى معايير الجودة والاحترافية'
              },
              'description': 'خدمات تنظيف الكنب والأثاث في الرياض مع بلس كلين، استمتع بكنب نظيف ومريح مع خدمات تنظيف احترافية باستخدام أحدث التقنيات.',
              'offers': {
                '@type': 'Offer',
                'availability': 'https://schema.org/InStock'
              }
            })
          }}
        />
      </div>

    </motion.div>
    <Footer />
</>
  );
};

export default SofaCleaningPage;