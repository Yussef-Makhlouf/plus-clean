'use client'
import { Metadata } from 'next';
import { motion } from 'framer-motion';
import SectionHeader from '../../components/SectionHeader';
import { 
  Zap, 
  ShieldCheck, 
  Star, 
  Droplets, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Info,
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
  Droplet,
  Filter,
  TestTube
} from 'lucide-react';
import Footer from '../../components/Footer';

import Header from '../../components/Header';

const WaterTankCleaningPage = () => {
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
          title="خدمات تنظيف خزانات المياه في الرياض - بلس كلين"
          subtitle="نقدم خدمات تنظيف خزانات المياه في الرياض بأعلى معايير الجودة والاحترافية، مع ضمان مياه نظيفة وآمنة للاستهلاك"
          className="text-right mb-12 pt-12"
        />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-800 mb-12 text-right leading-relaxed"
        >
          <p className="mb-6">
            تعتبر **بلس كلين** الرائدة في مجال تنظيف خزانات المياه في الرياض، حيث نقدم خدمات تنظيف 
            متخصصة لخزانات المياه بأعلى معايير الجودة والاحترافية. نخدم جميع أحياء الرياض الشمالية 
            والجنوبية والشرقية والغربية، ونتخصص في تنظيف جميع أنواع الخزانات الأرضية والعلوية.
          </p>
          <p className="mb-6">
            فريقنا المتخصص في **تنظيف خزانات المياه في الرياض** يستخدم أحدث التقنيات الأوروبية والأمريكية 
            لضمان تنظيف شامل وتعقيم فعال، وإزالة الرواسب والطحالب، وضمان مياه نظيفة وآمنة للاستهلاك. 
            نقدم خدماتنا للمنازل، الفلل، القصور، المكاتب، الشركات، الفنادق، والمطاعم في جميع أنحاء العاصمة الرياض.
          </p>
        </motion.div>

        {/* Comprehensive Services Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-right">خدماتنا الشاملة لتنظيف خزانات المياه في الرياض</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'تنظيف خزانات المياه الشامل',
                description: 'خدمة تنظيف خزانات مياه متكاملة تشمل جميع أجزاء الخزان من الداخل والخارج مع التركيز على التفاصيل الدقيقة',
                details: [
                  'تنظيف وتلميع جميع جدران الخزان',
                  'إزالة الرواسب والطحالب المتراكمة',
                  'تعقيم وتطهير بنسبة 99.9%',
                  'إزالة الروائح الكريهة نهائياً',
                  'فحص وإصلاح التسريبات',
                  'حماية الخزان من التآكل',
                  'خدمة في الموقع بدون نقل'
                ],
                icon: <Droplet className="w-8 h-8 text-cyan-600" />,
              },
              {
                title: 'تنظيف الخزانات الأرضية',
                description: 'خدمات تنظيف متخصصة للخزانات الأرضية بمختلف أحجامها وأنواعها مع مراعاة خصوصية كل خزان',
                details: [
                  'تنظيف خزانات المياه الأرضية',
                  'تنظيف خزانات المياه الجوفية',
                  'تنظيف خزانات المياه المدفونة',
                  'تنظيف خزانات المياه المخصصة',
                  'تنظيف خزانات المياه التجارية',
                  'تنظيف خزانات المياه الصناعية',
                  'تنظيف خزانات المياه قبل وبعد الصيانة',
                  'خدمات تنظيف طارئة للخزانات'
                ],
                icon: <Droplets className="w-8 h-8 text-cyan-600" />,
              },
              {
                title: 'تنظيف الخزانات العلوية',
                description: 'خدمات تنظيف متميزة للخزانات العلوية مع فرق عمل متخصصة ومعدات متطورة',
                details: [
                  'تنظيف خزانات المياه العلوية',
                  'تنظيف خزانات المياه على الأسطح',
                  'تنظيف خزانات المياه المعلقة',
                  'تنظيف خزانات المياه المرتفعة',
                  'تنظيف خزانات المياه المتعددة الطوابق',
                  'تنظيف خزانات المياه الكبيرة',
                  'تنظيف خزانات المياه الصغيرة',
                  'تنظيف خزانات المياه المخصصة'
                ],
                icon: <Star className="w-8 h-8 text-cyan-600" />,
              },
              {
                title: 'تنظيف دوري ومنتظم',
                description: 'برامج تنظيف دورية مخصصة للمحافظة على نظافة خزانات المياه بشكل مستمر طوال العام',
                details: [
                  'تنظيف يومي للخزانات عالية الاستخدام',
                  'تنظيف أسبوعي شامل لجميع الخزانات',
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
                title: 'تنظيف بعد الصيانة',
                description: 'خدمات تنظيف متخصصة بعد أعمال الصيانة والإصلاح للخزانات',
                details: [
                  'تنظيف بعد إصلاح التسريبات',
                  'تنظيف بعد استبدال الأنابيب',
                  'تنظيف بعد إصلاح المضخات',
                  'تنظيف بعد استبدال الفلاتر',
                  'تنظيف بعد إصلاح الصمامات',
                  'تنظيف بعد استبدال العوازل',
                  'تنظيف بعد إصلاح العزل المائي',
                  'استعادة الخزان لحالته الطبيعية'
                ],
                icon: <Sparkles className="w-8 h-8 text-cyan-600" />,
              },
              {
                title: 'خدمات التعقيم والتطهير',
                description: 'خدمات تعقيم شاملة باستخدام أحدث التقنيات لضمان مياه نظيفة وآمنة للاستهلاك',
                details: [
                  'تعقيم  عالي الحرارة',
                  'تعقيم بالأشعة فوق البنفسجية',
                  'تعقيم بالمواد الكيميائية الآمنة',
                  'تعقيم أنظمة التوزيع',
                  'تعقيم الأنابيب والمضخات',
                  'تعقيم الفلاتر والمرشحات',
                  'تعقيم أجهزة التحكم',
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
          <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-right">دليلك الشامل لتنظيف خزانات المياه في الرياض</h2>
          
          {/* Importance of Water Tank Cleaning */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Droplet className="w-10 h-10 text-cyan-600" />
              <h3 className="text-2xl font-bold text-cyan-900">أهمية تنظيف خزانات المياه في الرياض</h3>
            </div>
            <div className="text-gray-700 text-right leading-relaxed">
              <p className="mb-4">
                في المناخ الصحراوي الجاف في الرياض، تعتبر خزانات المياه جزءاً أساسياً من نظام المياه 
                في كل منزل ومؤسسة. التنظيف المنتظم لخزانات المياه له فوائد عديدة تتجاوز النظافة البصرية 
                لتشمل الصحة العامة وسلامة المياه.
              </p>
              <p className="mb-4">
                <strong>الحفاظ على جودة المياه:</strong> التنظيف المنتظم يمنع تراكم الرواسب والطحالب 
                التي تؤثر على طعم ورائحة المياه، كما يمنع نمو البكتيريا والكائنات الدقيقة الضارة.
              </p>
              <p className="mb-4">
                <strong>الوقاية من الأمراض:</strong> المياه الملوثة في الخزانات غير النظيفة قد تسبب 
                أمراضاً معدية مثل الإسهال، التيفوئيد، والتهابات الجهاز الهضمي. التنظيف المنتظم يقلل 
                من هذه المخاطر بشكل كبير.
              </p>
              <p className="mb-4">
                <strong>إطالة عمر الخزان:</strong> التنظيف المنتظم يمنع التآكل والصدأ في جدران الخزان، 
                مما يطيل من عمره ويقلل من تكاليف الصيانة والاستبدال.
              </p>
            </div>
          </motion.div>

          {/* Types of Contamination */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-lg mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <TestTube className="w-10 h-10 text-cyan-600" />
              <h3 className="text-2xl font-bold text-cyan-900">أنواع التلوث في خزانات المياه</h3>
            </div>
            <div className="text-gray-700 text-right leading-relaxed">
              <p className="mb-4">
                خزانات المياه معرضة لأنواع مختلفة من التلوث والترسبات. فهم هذه الأنواع يساعد في 
                تحديد أفضل طرق التنظيف والوقاية.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">الترسبات المعدنية</h4>
              <p className="mb-4">
                <strong>الكالسيوم والمغنيسيوم:</strong> تترسب هذه المعادن على جدران الخزان مع مرور الوقت، 
                مكونة طبقة صلبة تسمى "الجير". هذه الترسبات تقلل من كفاءة الخزان وقد تؤثر على طعم المياه.
              </p>
              
              <p className="mb-4">
                <strong>الحديد والمنغنيز:</strong> تترسب هذه المعادن مكونة بقع بنية أو سوداء على جدران 
                الخزان، وقد تؤثر على لون وطعم المياه.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">الطحالب والكائنات الحية</h4>
              <p className="mb-4">
                <strong>الطحالب الخضراء:</strong> تنمو في الخزانات المعرضة للضوء، خاصة الخزانات العلوية. 
                هذه الطحالب تفرز مواد عضوية قد تؤثر على طعم ورائحة المياه.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">البكتيريا والكائنات الدقيقة</h4>
              <p className="mb-4">
                <strong>البكتيريا المسببة للأمراض:</strong> قد تنمو في الخزانات غير النظيفة، خاصة إذا 
                كان هناك تسريبات أو تلوث من مصادر خارجية.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">الرواسب العضوية</h4>
              <p className="mb-4">
                <strong>الأوراق والحشرات:</strong> قد تدخل إلى الخزان من خلال الفتحات غير المحكمة، 
                مكونة رواسب عضوية تؤثر على جودة المياه.
              </p>
            </div>
          </motion.div>

          {/* Cleaning Technologies */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-lg mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Zap className="w-10 h-10 text-cyan-600" />
              <h3 className="text-2xl font-bold text-cyan-900">التقنيات الحديثة في تنظيف خزانات المياه</h3>
            </div>
            <div className="text-gray-700 text-right leading-relaxed">
              <p className="mb-4">
                نحن في بلس كلين نستخدم أحدث التقنيات العالمية في تنظيف خزانات المياه لضمان حصولك على 
                أفضل النتائج في أقل وقت ممكن. هذه التقنيات تجمع بين الفعالية والأمان والاستدامة البيئية.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تقنية التنظيف المتطورة</h4>
              <p className="mb-4">
                تستخدم هذه التقنية الماء المسخن إلى درجات حرارة عالية (أكثر من 100 درجة مئوية) لتنظيف 
                وتعقيم جدران الخزان دون استخدام مواد كيميائية ضارة. هذه الطريقة فعالة في قتل 99.9% من البكتيريا 
                والفيروسات والعفن، وهي آمنة تماماً للاستهلاك البشري.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تقنية التنظيف بالضغط العالي</h4>
              <p className="mb-4">
                نستخدم أجهزة تنظيف بالضغط العالي لإزالة الترسبات الصلبة والرواسب المتراكمة من جدران الخزان. 
                هذه التقنية فعالة في إزالة طبقات الجير والصدأ دون إتلاف جدران الخزان.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تقنية التنظيف بالموجات فوق الصوتية</h4>
              <p className="mb-4">
                تستخدم لتنظيف الأجزاء الدقيقة والزوايا الضيقة في الخزان. الموجات فوق الصوتية تخلق فقاعات 
                مجهرية تنظف الأسطح بعمق دون أي ضرر.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تقنية التعقيم بالأشعة فوق البنفسجية</h4>
              <p className="mb-4">
                نستخدم أجهزة تعقيم بالأشعة فوق البنفسجية لقتل البكتيريا والفيروسات المتبقية بعد التنظيف. 
                هذه التقنية آمنة وفعالة ولا تترك أي بقايا كيميائية في المياه.
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
              <h3 className="text-2xl font-bold text-cyan-900">السلامة والأمان في خدمات تنظيف خزانات المياه</h3>
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
              <h3 className="text-2xl font-bold text-cyan-900">نصائح احترافية للحفاظ على نظافة خزانات المياه</h3>
            </div>
            <div className="text-gray-700 text-right leading-relaxed">
              <p className="mb-4">
                بناءً على خبرتنا الطويلة في مجال تنظيف خزانات المياه، نشارككم مجموعة من النصائح والإرشادات 
                المهنية التي ستساعدكم في الحفاظ على نظافة خزانات المياه بين زيارات فريق التنظيف المحترف.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">الفحص الدوري للخزان</h4>
              <p className="mb-4">
                <strong>فحص شهري:</strong> قم بفحص الخزان شهرياً للبحث عن أي تسريبات أو تلف في الجدران. 
                ابحث عن بقع الرطوبة أو تسرب المياه حول الخزان.
              </p>
              
              <p className="mb-4">
                <strong>فحص الفتحات:</strong> تأكد من أن جميع الفتحات محكمة الإغلاق لمنع دخول الحشرات 
                والأوراق والغبار إلى الخزان.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">الوقاية من التلوث</h4>
              <p className="mb-4">
                <strong>تغطية الخزان:</strong> تأكد من أن الخزان مغطى بشكل صحيح لمنع دخول الضوء والحشرات. 
                استخدم أغطية محكمة ومقاومة للعوامل الجوية.
              </p>
              
              <p className="mb-4">
                <strong>تنظيف المنطقة المحيطة:</strong> حافظ على نظافة المنطقة المحيطة بالخزان لمنع 
                تراكم الأوساخ والحشرات.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">مراقبة جودة المياه</h4>
              <p className="mb-4">
                <strong>فحص الطعم والرائحة:</strong> راقب طعم ورائحة المياه بانتظام. أي تغير في الطعم 
                أو الرائحة قد يشير إلى تلوث في الخزان.
              </p>
              
              <h4 className="text-xl font-bold text-cyan-800 mb-3">الصيانة الوقائية</h4>
              <p className="mb-4">
                <strong>تنظيف دوري:</strong> قم بتنظيف الخزان كل 6 أشهر على الأقل، أو أكثر إذا كان 
                الاستخدام عالياً أو في المناطق عالية التلوث.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Enhanced Process Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-right">منهجيتنا المتطورة في تنظيف خزانات المياه</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'التقييم والاستشارة المجانية',
                description: 'زيارة مجانية لفحص الخزان وتحديد احتياجات التنظيف المحددة مع وضع خطة عمل مفصلة وتقدير دقيق للتكلفة والوقت المطلوب',
                icon: <Eye className="w-6 h-6 text-white" />
              },
              {
                step: '2',
                title: 'التحضير والتجهيز',
                description: 'إعداد المعدات المتخصصة واختيار مواد التنظيف المناسبة مع تأمين المنطقة وحماية الأنابيب والمضخات',
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
          <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-right">الأسئلة الشائعة حول تنظيف خزانات المياه</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'كم من الوقت تستغرق خدمة تنظيف خزانات المياه؟',
                answer: 'تختلف مدة التنظيف حسب حجم الخزان ونوع الخدمة المطلوبة. الخزانات الصغيرة تحتاج 2-3 ساعات، بينما الخزانات الكبيرة قد تحتاج 4-6 ساعات للتنظيف الشامل.'
              },
              {
                question: 'هل المواد المستخدمة آمنة للاستهلاك البشري؟',
                answer: 'نعم، نحن نستخدم مواد تنظيف طبيعية وآمنة 100% للاستهلاك البشري. جميع منتجاتنا معتمدة ولا تحتوي على مواد كيميائية ضارة.'
              },
              {
                question: 'هل يمكن استخدام المياه بعد التنظيف مباشرة؟',
                answer: 'نعم، يمكن استخدام المياه بعد التنظيف مباشرة. نستخدم مواد تنظيف آمنة ومطهرات معتمدة للاستهلاك البشري.'
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
                question: 'كيف يتم تحديد سعر خدمة تنظيف خزانات المياه؟',
                answer: 'يتم تحديد السعر بناءً على حجم الخزان، نوع الخدمة المطلوبة، مستوى التنظيف المطلوب، والخدمات الإضافية. نقدم تقديراً مجاناً ودقيقاً قبل بدء العمل.'
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
                href="tel:+966569131252"
                className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-cyan-700 transition-colors duration-300 inline-block"
              >
                966569131252+
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
              <p className="text-gray-700 mb-4">للتواصل السريع وإرسال صور الخزان</p>
              <a
                href="https://wa.me/966569131252"
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
                description: 'فريق محترف مع خبرة واسعة في تنظيف جميع أنواع خزانات المياه',
                icon: <Award className="w-8 h-8 text-cyan-600" />
              },
              {
                title: 'ضمان الجودة 100%',
                description: 'نضمن رضاكم الكامل أو نعيد الخدمة مجاناً',
                icon: <ShieldCheck className="w-8 h-8 text-cyan-600" />
              },
              {
                title: 'مواد آمنة وطبيعية',
                description: 'نستخدم مواد تنظيف صديقة للبيئة وآمنة للاستهلاك البشري',
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
          <h2 className="text-4xl font-bold mb-4">احصل على مياه نظيفة وآمنة اليوم</h2>
          <p className="text-xl mb-6 leading-relaxed">
            انضم إلى آلاف العملاء الراضين الذين اختاروا بلس كلين لتنظيف خزانات المياه في الرياض
          </p>
          <p className="text-lg mb-8 opacity-90">
            استشارة مجانية • تقدير دقيق للأسعار • ضمان الجودة • خدمة عملاء متميزة
          </p>
          <a
            href="https://wa.me/966569131252"
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
              'serviceType': 'تنظيف خزانات المياه',
              'provider': {
                '@type': 'Organization',
                'name': 'بلس كلين',
                'areaServed': 'الرياض',
                'description': 'خدمات تنظيف خزانات المياه في الرياض بأعلى معايير الجودة والاحترافية'
              },
              'description': 'خدمات تنظيف خزانات المياه في الرياض مع بلس كلين، استمتع بمياه نظيفة وآمنة مع خدمات تنظيف احترافية باستخدام أحدث التقنيات.',
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

export default WaterTankCleaningPage;
