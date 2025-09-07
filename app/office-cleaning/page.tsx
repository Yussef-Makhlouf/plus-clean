'use client';
import { Metadata } from 'next';
import { motion } from 'framer-motion';
import SectionHeader from '../../components/SectionHeader';
import { 
  Zap, 
  ShieldCheck, 
  Star, 
  Building2, 
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
  Briefcase,
  FileText,
  Monitor,
  Printer
} from 'lucide-react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const OfficeCleaningPage = () => {
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
          title="خدمات تنظيف المكاتب في الرياض - بلس كلين"
          subtitle="نقدم خدمات تنظيف المكاتب والشركات في الرياض بأعلى معايير الجودة والاحترافية، مع ضمان بيئة عمل نظيفة وصحية"
          className="text-right mb-12 pt-12"
        />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-800 mb-12 text-right leading-relaxed"
        >
          <p className="mb-6">
            في عالم الأعمال الحديث، تعتبر بيئة العمل النظيفة والصحية عاملاً أساسياً في نجاح أي شركة أو مؤسسة. 
            نحن في **بلس كلين** نفهم تماماً أهمية الحفاظ على نظافة المكاتب والشركات، ولذلك نقدم خدمات تنظيف 
            متخصصة للمكاتب في الرياض تتناسب مع احتياجات كل شركة ومؤسسة.
          </p>
          <p className="mb-6">
            خدماتنا في تنظيف المكاتب تشمل تنظيف المكاتب الصغيرة والمتوسطة، تنظيف الشركات الكبيرة، تنظيف 
            المكاتب الحكومية، تنظيف المكاتب الطبية والقانونية، وتنظيف مراكز الاتصالات والبنوك. نستخدم 
            تقنيات متقدمة في التنظيف والتعقيم لضمان بيئة عمل آمنة وصحية لجميع الموظفين.
          </p>
        </motion.div>

        {/* Comprehensive Services Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-right">خدماتنا الشاملة لتنظيف المكاتب في الرياض</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'تنظيف المكاتب الشامل',
                description: 'خدمة تنظيف مكاتب متكاملة تشمل جميع أجزاء المكتب من الأرضيات إلى الأسقف مع التركيز على التفاصيل الدقيقة',
                details: [
                  'تنظيف وتلميع جميع الأرضيات (بلاط، رخام، باركيه، سيراميك)',
                  'تنظيف وتعقيم الحمامات والمراحيض بالكامل',
                  'تنظيف المطابخ وإزالة الدهون والزيوت المتراكمة',
                  'تنظيف النوافذ والزجاج من الداخل والخارج',
                  'تنظيف وتعطير السجاد والموكيت والمفروشات',
                  'إزالة الغبار من الأثاث والديكورات',
                  'تنظيف وتعقيم مقابض الأبواب والمفاتيح',
                  'تنظيف أجهزة الإضاءة والثريات'
                ],
                icon: <Building2 className="w-8 h-8 text-cyan-600" />,
              },
              {
                title: 'تنظيف المكاتب الصغيرة والمتوسطة',
                description: 'خدمات تنظيف متخصصة للمكاتب الصغيرة والمتوسطة مع مراعاة خصوصية كل مكتب',
                details: [
                  'تنظيف مكاتب المحامين والمحاسبين',
                  'تنظيف مكاتب الاستشارات والخدمات',
                  'تنظيف مكاتب العقارات والتسويق',
                  'تنظيف مكاتب التصميم والإبداع',
                  'تنظيف مكاتب الخدمات الطبية',
                  'تنظيف مكاتب الخدمات التعليمية',
                  'تنظيف مكاتب الخدمات التقنية',
                  'خدمات تنظيف طارئة للمكاتب'
                ],
                icon: <Briefcase className="w-8 h-8 text-cyan-600" />,
              },
              {
                title: 'تنظيف الشركات الكبيرة',
                description: 'خدمات تنظيف متميزة للشركات الكبيرة مع فرق عمل متخصصة ومعدات متطورة',
                details: [
                  'تنظيف المقرات الرئيسية للشركات',
                  'تنظيف فروع الشركات المتعددة',
                  'تنظيف قاعات الاجتماعات والمؤتمرات',
                  'تنظيف المطاعم والكافيتريات الداخلية',
                  'تنظيف المرائب والمواقف',
                  'تنظيف الطوابق المتعددة والسلالم',
                  'تنظيف القبب والأسقف العالية',
                  'تنظيف المجالس والصالات الكبيرة'
                ],
                icon: <Star className="w-8 h-8 text-cyan-600" />,
              },
              {
                title: 'تنظيف دوري ومنتظم',
                description: 'برامج تنظيف دورية مخصصة للمحافظة على نظافة المكتب بشكل مستمر طوال العام',
                details: [
                  'تنظيف يومي للمناطق عالية الاستخدام',
                  'تنظيف أسبوعي شامل لجميع المكاتب',
                  'تنظيف شهري عميق ومتخصص',
                  'تنظيف موسمي للتحضير للمناسبات',
                  'برامج تنظيف مخصصة للشركات الكبيرة',
                  'جداول تنظيف مرنة حسب الحاجة',
                  'متابعة دورية لضمان الجودة',
                  'تقارير شهرية عن حالة النظافة'
                ],
                icon: <Clock className="w-8 h-8 text-cyan-600" />,
              },
              {
                title: 'تنظيف المكاتب الطبية',
                description: 'خدمات تنظيف متخصصة للمكاتب الطبية والعيادات مع أعلى معايير التعقيم',
                details: [
                  'تنظيف وتعقيم غرف الانتظار',
                  'تنظيف وتعقيم غرف الكشف الطبي',
                  'تنظيف وتعقيم المختبرات الطبية',
                  'تنظيف وتعقيم غرف العمليات الصغيرة',
                  'تنظيف وتعقيم الحمامات الطبية',
                  'تنظيف وتعقيم الممرات والمداخل',
                  'إزالة الروائح الطبية',
                  'شهادات تعقيم معتمدة'
                ],
                icon: <ShieldCheck className="w-8 h-8 text-cyan-600" />,
              },
              {
                title: 'تنظيف مراكز الاتصالات والبنوك',
                description: 'خدمات تنظيف متخصصة لمراكز الاتصالات والبنوك مع مراعاة الأمان والحماية',
                details: [
                  'تنظيف قاعات العمل المفتوحة',
                  'تنظيف غرف الخوادم والأجهزة التقنية',
                  'تنظيف قاعات الاجتماعات والمؤتمرات',
                  'تنظيف المطاعم والكافيتريات',
                  'تنظيف الحمامات والمرافق',
                  'تنظيف الممرات والمداخل',
                  'تنظيف النوافذ والزجاج',
                  'خدمات تنظيف آمنة للأجهزة الحساسة'
                ],
                icon: <Monitor className="w-8 h-8 text-cyan-600" />,
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
          <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-right">دليلك الشامل لتنظيف المكاتب في الرياض</h2>
          
          {/* Importance of Office Cleaning */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Building2 className="w-10 h-10 text-cyan-600" />
              <h3 className="text-2xl font-bold text-cyan-900">أهمية تنظيف المكاتب في بيئة العمل الحديثة</h3>
            </div>
            <div className="text-gray-700 text-right leading-relaxed">
              <p className="mb-4">
                في عالم الأعمال التنافسي اليوم، تعتبر بيئة العمل النظيفة والصحية عاملاً أساسياً في نجاح أي 
                شركة أو مؤسسة. الدراسات الحديثة تؤكد أن بيئة العمل النظيفة تؤثر بشكل مباشر على إنتاجية 
                الموظفين، رضاهم الوظيفي، وصحتهم العامة.
              </p>
              <p className="mb-4">
                <strong>تحسين الإنتاجية:</strong> بيئة العمل النظيفة تساعد في تحسين التركيز والإنتاجية. 
                الموظفون الذين يعملون في مكاتب نظيفة ومنظمة يظهرون مستويات أعلى من الإنتاجية والإبداع 
                مقارنة بزملائهم في البيئات غير النظيفة.
              </p>
              <p className="mb-4">
                <strong>تقليل الغياب المرضي:</strong> التنظيف المنتظم والتعقيم يقلل من انتشار الجراثيم 
                والبكتيريا، مما يؤدي إلى تقليل معدلات الغياب المرضي بين الموظفين وتحسين الصحة العامة للفريق.
              </p>
              <p className="mb-4">
                <strong>تحسين صورة الشركة:</strong> المكاتب النظيفة تعطي انطباعاً إيجابياً للعملاء والزوار، 
                مما يساعد في بناء سمعة جيدة للشركة وجذب المزيد من العملاء والشركاء.
              </p>
            </div>
          </motion.div>

          {/* Specialized Cleaning Areas */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-lg mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Eye className="w-10 h-10 text-cyan-600" />
              <h3 className="text-2xl font-bold text-cyan-900">التنظيف المتخصص لكل منطقة في المكتب</h3>
            </div>
            <div className="text-gray-700 text-right leading-relaxed">
              <p className="mb-4">
                كل منطقة في المكتب تحتاج إلى تقنيات تنظيف مختلفة ومتخصصة. فهم طبيعة كل مساحة واستخدامها 
                يساعدنا في تقديم خدمة تنظيف مثالية تحقق أفضل النتائج وتحافظ على سلامة المعدات والأجهزة.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تنظيف قاعات العمل المفتوحة</h4>
              <p className="mb-4">
                قاعات العمل المفتوحة تحتاج تنظيفاً دقيقاً وهادئاً للحفاظ على بيئة عمل مريحة. نركز على 
                إزالة الغبار من المكاتب، تنظيف الشاشات والأجهزة، وتنظيف الكراسي والمفروشات بعناية خاصة.
              </p>
              
              <p className="mb-4">
                <strong>خدمات تنظيف قاعات العمل تشمل:</strong> تنظيف المكاتب والطاولات، إزالة الغبار من 
                الشاشات والأجهزة، تنظيف الكراسي والمفروشات، تنظيف الأرضيات والسجاد، تنظيف النوافذ والزجاج، 
                تعقيم الأسطح المشتركة، وتنظيف أنظمة التكييف والتهوية.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تنظيف غرف الاجتماعات والمؤتمرات</h4>
              <p className="mb-4">
                غرف الاجتماعات والمؤتمرات تحتاج تنظيفاً شاملاً قبل وبعد كل اجتماع. نركز على تنظيف 
                طاولات الاجتماعات، الكراسي، أجهزة العرض، والأنظمة الصوتية.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تنظيف المطاعم والكافيتريات</h4>
              <p className="mb-4">
                المطاعم والكافيتريات الداخلية تحتاج أعلى معايير النظافة والتعقيم لمنع انتشار الأمراض. 
                نستخدم مواد تنظيف قوية ومضادة للبكتيريا مع تقنيات تنظيف متخصصة.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تنظيف غرف الخوادم والأجهزة التقنية</h4>
              <p className="mb-4">
                غرف الخوادم والأجهزة التقنية تحتاج تنظيفاً متخصصاً لضمان عدم إتلاف الأجهزة الحساسة. 
                نستخدم تقنيات تنظيف آمنة ومعدات متخصصة لتنظيف هذه المناطق.
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
              <h3 className="text-2xl font-bold text-cyan-900">التقنيات الحديثة في تنظيف المكاتب</h3>
            </div>
            <div className="text-gray-700 text-right leading-relaxed">
              <p className="mb-4">
                نحن في بلس كلين نستخدم أحدث التقنيات العالمية في تنظيف المكاتب لضمان حصولك على أفضل النتائج 
                في أقل وقت ممكن. هذه التقنيات تجمع بين الفعالية والأمان والاستدامة البيئية.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تقنية التنظيف المتطورة</h4>
              <p className="mb-4">
                تستخدم هذه التقنية الماء المسخن إلى درجات حرارة عالية (أكثر من 100 درجة مئوية) لتنظيف 
                وتعقيم الأسطح دون استخدام مواد كيميائية ضارة. هذه الطريقة فعالة في قتل 99.9% من البكتيريا 
                والفيروسات والعفن، وهي آمنة تماماً للموظفين والأجهزة.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">أنظمة الشفط عالية الكفاءة (HEPA)</h4>
              <p className="mb-4">
                نستخدم مكانس كهربائية مزودة بفلاتر HEPA التي تستطيع التقاط الجزيئات الدقيقة جداً (حتى 0.3 ميكرون) 
                بما في ذلك الغبار الناعم، حبوب اللقاح، والعوالق المجهرية. هذا يضمن تنظيفاً عميقاً وشاملاً لجميع الأسطح.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تقنية التنظيف بالموجات فوق الصوتية</h4>
              <p className="mb-4">
                تستخدم لتنظيف الأجهزة الإلكترونية الحساسة مثل الشاشات، لوحات المفاتيح، والطابعات. 
                الموجات فوق الصوتية تخلق فقاعات مجهرية تنظف الأسطح بعمق دون أي ضرر.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">أنظمة التنظيف الآلية والروبوتات</h4>
              <p className="mb-4">
                نستخدم روبوتات تنظيف متطورة للأسطح الكبيرة والنوافذ العالية، مما يضمن تنظيفاً منتظماً ودقيقاً 
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
              <h3 className="text-2xl font-bold text-cyan-900">السلامة والأمان في خدمات تنظيف المكاتب</h3>
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
              <h3 className="text-2xl font-bold text-cyan-900">نصائح احترافية للحفاظ على نظافة المكتب</h3>
            </div>
            <div className="text-gray-700 text-right leading-relaxed">
              <p className="mb-4">
                بناءً على خبرتنا الطويلة في مجال تنظيف المكاتب، نشارككم مجموعة من النصائح والإرشادات 
                المهنية التي ستساعدكم في الحفاظ على نظافة مكتبكم بين زيارات فريق التنظيف المحترف.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">روتين التنظيف اليومي للمكتب</h4>
              <p className="mb-4">
                <strong>بداية اليوم:</strong> ابدأ يوم العمل بمسح أسطح المكاتب، تنظيف الشاشات، وترتيب 
                الملفات والأوراق. هذا الروتين البسيط يمنع تراكم الفوضى ويحافظ على المظهر العام للمكتب.
              </p>
              
              <p className="mb-4">
                <strong>نهاية اليوم:</strong> اقضِ 10 دقائق قبل المغادرة في ترتيب المكتب، إزالة الأوراق 
                غير المهمة، ومسح الأسطح. هذا يضمن أن تبدأ اليوم التالي ببيئة عمل مرتبة ونظيفة.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">إدارة الغبار في بيئة المكتب</h4>
              <p className="mb-4">
                <strong>استخدم مماسح المايكروفايبر:</strong> هذه المماسح تلتقط الغبار بدلاً من نشره في الهواء. 
                امسح الأسطح بحركة دائرية واغسل المماسح بانتظام للحفاظ على فعاليتها.
              </p>
              
              <p className="mb-4">
                <strong>تقنية التنظيف من الأعلى للأسفل:</strong> ابدأ دائماً بتنظيف الأسطح العالية مثل 
                مراوح السقف والثريات، ثم انتقل تدريجياً إلى الأسطح المنخفضة. هذا يمنع إعادة تراكم الغبار 
                على الأسطح المنظفة.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">العناية بالأجهزة الإلكترونية</h4>
              <p className="mb-4">
                <strong>تنظيف الشاشات:</strong> استخدم مناديل مخصصة لتنظيف الشاشات وتجنب استخدام 
                المنظفات الكيميائية التي قد تضر بالشاشة. امسح الشاشة بحركة دائرية لطيفة.
              </p>
              
              <p className="mb-4">
                <strong>تنظيف لوحات المفاتيح:</strong> استخدم فرشاة ناعمة لإزالة الغبار من بين المفاتيح، 
                وامسح السطح بقطعة قماش مبللة قليلاً. تجنب استخدام السوائل المباشرة على لوحة المفاتيح.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Enhanced Process Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-right">منهجيتنا المتطورة في تنظيف المكاتب</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'التقييم والاستشارة المجانية',
                description: 'زيارة مجانية لفحص المكتب وتحديد احتياجات التنظيف المحددة مع وضع خطة عمل مفصلة وتقدير دقيق للتكلفة والوقت المطلوب',
                icon: <Eye className="w-6 h-6 text-white" />
              },
              {
                step: '2',
                title: 'التحضير والتجهيز',
                description: 'إعداد المعدات المتخصصة واختيار مواد التنظيف المناسبة مع تأمين المنطقة وحماية الأجهزة والممتلكات الثمينة',
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
          <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-right">الأسئلة الشائعة حول تنظيف المكاتب</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'كم من الوقت تستغرق خدمة تنظيف المكتب؟',
                answer: 'تختلف مدة التنظيف حسب حجم المكتب ونوع الخدمة المطلوبة. المكاتب الصغيرة تحتاج 2-3 ساعات، بينما الشركات الكبيرة قد تحتاج 6-8 ساعات للتنظيف الشامل.'
              },
              {
                question: 'هل المواد المستخدمة آمنة للموظفين والأجهزة؟',
                answer: 'نعم، نحن نستخدم مواد تنظيف طبيعية وآمنة 100% للموظفين والأجهزة الإلكترونية. جميع منتجاتنا معتمدة ولا تحتوي على مواد كيميائية ضارة.'
              },
              {
                question: 'هل يمكن العمل في المكتب أثناء التنظيف؟',
                answer: 'نعم، يمكن العمل في المكتب أثناء التنظيف. فريقنا محترف ومدرب على العمل بهدوء واحترام خصوصية العملاء مع ضمان عدم إزعاج الموظفين.'
              },
              {
                question: 'ماذا لو لم أكن راضياً عن جودة التنظيف؟',
                answer: 'نحن نقدم ضمان جودة 100%. إذا لم تكن راضياً عن أي جزء من الخدمة، سنعود لإعادة تنظيفه مجاناً خلال 24 ساعة أو نرد قيمة الخدمة.'
              },
              {
                question: 'هل تقدمون خدمات التنظيف في المساء أو عطلة نهاية الأسبوع؟',
                answer: 'نعم، نقدم خدماتنا سبعة أيام في الأسبوع من الساعة 7 صباحاً حتى 9 مساءً. يمكنكم حجز موعد يناسب جدول العمل اليومي.'
              },
              {
                question: 'كيف يتم تحديد سعر خدمة تنظيف المكتب؟',
                answer: 'يتم تحديد السعر بناءً على مساحة المكتب، نوع الخدمة المطلوبة، مستوى التنظيف المطلوب، والخدمات الإضافية. نقدم تقديراً مجاناً ودقيقاً قبل بدء العمل.'
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
              <p className="text-gray-700 mb-4">للتواصل السريع وإرسال صور المكتب</p>
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
                description: 'فريق محترف مع خبرة واسعة في تنظيف جميع أنواع المكاتب',
                icon: <Award className="w-8 h-8 text-cyan-600" />
              },
              {
                title: 'ضمان الجودة 100%',
                description: 'نضمن رضاكم الكامل أو نعيد الخدمة مجاناً',
                icon: <ShieldCheck className="w-8 h-8 text-cyan-600" />
              },
              {
                title: 'مواد آمنة وطبيعية',
                description: 'نستخدم مواد تنظيف صديقة للبيئة وآمنة للموظفين',
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
          <h2 className="text-4xl font-bold mb-4">احصل على مكتب نظيف ومريح اليوم</h2>
          <p className="text-xl mb-6 leading-relaxed">
            انضم إلى آلاف الشركات الراضية التي اختارت بلس كلين لتنظيف مكاتبها في الرياض
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
              'serviceType': 'تنظيف المكاتب',
              'provider': {
                '@type': 'Organization',
                'name': 'بلس كلين',
                'areaServed': 'الرياض',
                'description': 'خدمات تنظيف المكاتب في الرياض بأعلى معايير الجودة والاحترافية'
              },
              'description': 'خدمات تنظيف المكاتب في الرياض مع بلس كلين، استمتع بمكتب نظيف وصحي مع خدمات تنظيف احترافية باستخدام أحدث التقنيات.',
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

export default OfficeCleaningPage;