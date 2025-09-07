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
  Wrench
} from 'lucide-react';
import Footer from '../../components/Footer';

import Header from '../../components/Header';

const HomeCleaningPage = () => {
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
          title="خدمات تنظيف المنازل في الرياض - بلس كلين"
          subtitle="نحن الرائدون في تقديم خدمات تنظيف المنازل والشقق والفلل في الرياض باستخدام أحدث التقنيات ومواد التنظيف الآمنة والصديقة للبيئة"
          className="text-right mb-12 pt-12"
        />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-800 mb-12 text-right leading-relaxed"
        >
          <p className="mb-6">
            في عصر الحياة السريعة والمتطلبات المتزايدة، أصبح الحصول على بيئة منزلية نظيفة وصحية أمراً بالغ الأهمية لكل أسرة في الرياض. 
            نحن في **بلس كلين** نفهم تماماً التحديات التي تواجه الأسر السعودية الحديثة، ولذلك نقدم حلولاً شاملة ومتطورة لتنظيف المنازل 
            تتناسب مع نمط الحياة العصري ومتطلبات المناخ الصحراوي الجاف في منطقة الرياض.
          </p>
          <p className="mb-6">
            خدماتنا في تنظيف المنازل تشمل تنظيف الشقق السكنية، تنظيف الفلل الكبيرة، تنظيف البيوت التراثية، وتنظيف الوحدات السكنية المفروشة. 
            نستخدم تقنيات متقدمة في التنظيف العميق، التعقيم الشامل، إزالة البقع المستعصية، وتنظيف الأسطح الحساسة بطرق آمنة وفعالة.
          </p>
        </motion.div>

        {/* Comprehensive Services Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-right">خدماتنا الشاملة لتنظيف المنازل في الرياض</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'تنظيف المنازل الشامل',
                description: 'خدمة تنظيف منازل متكاملة تشمل جميع أجزاء المنزل من الأرضيات إلى الأسقف مع التركيز على التفاصيل الدقيقة',
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
                icon: <Home className="w-8 h-8 text-cyan-600" />,
              },
              {
                title: 'تنظيف الشقق السكنية',
                description: 'خدمات تنظيف متخصصة للشقق السكنية بمختلف أحجامها مع مراعاة خصوصية كل وحدة سكنية',
                details: [
                  'تنظيف شقق الاستوديو والوحدات الصغيرة',
                  'تنظيف الشقق العائلية متعددة الغرف',
                  'تنظيف الشقق المفروشة والمؤثثة',
                  'تنظيف شقق الطلاب والعزاب',
                  'تنظيف الشقق الجديدة بعد التشطيب',
                  'تنظيف شقق كبار السن بعناية خاصة',
                  'تنظيف الشقق قبل وبعد الانتقال',
                  'خدمات تنظيف طارئة للشقق'
                ],
                icon: <CheckCircle2 className="w-8 h-8 text-cyan-600" />,
              },
              {
                title: 'تنظيف الفلل والقصور',
                description: 'خدمات تنظيف متميزة للفلل والقصور الكبيرة مع فرق عمل متخصصة ومعدات متطورة',
                details: [
                  'تنظيف الفلل الحديثة والكلاسيكية',
                  'تنظيف القصور والبيوت الفخمة',
                  'تنظيف الحدائق الداخلية والخارجية',
                  'تنظيف المسابح وأحواض الاستحمام الكبيرة',
                  'تنظيف المرائب والمخازن',
                  'تنظيف الطوابق المتعددة والسلالم',
                  'تنظيف القبب والأسقف العالية',
                  'تنظيف المجالس والصالات الكبيرة'
                ],
                icon: <Star className="w-8 h-8 text-cyan-600" />,
              },
              {
                title: 'تنظيف دوري ومنتظم',
                description: 'برامج تنظيف دورية مخصصة للمحافظة على نظافة المنزل بشكل مستمر طوال العام',
                details: [
                  'تنظيف يومي للمناطق عالية الاستخدام',
                  'تنظيف أسبوعي شامل لجميع الغرف',
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
                  'تنظيف وترتيب الأثاث بعد إعادة ترتيبه',
                  'تنظيف الحدائق والساحات الخارجية',
                  'إزالة الزينة والديكورات المؤقتة',
                  'استعادة المنزل لحالته الطبيعية'
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
          <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-right">دليلك الشامل لتنظيف المنازل في الرياض</h2>
          
          {/* Climate Considerations */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <ThermometerSun className="w-10 h-10 text-cyan-600" />
              <h3 className="text-2xl font-bold text-cyan-900">تأثير المناخ الصحراوي على نظافة المنازل في الرياض</h3>
            </div>
            <div className="text-gray-700 text-right leading-relaxed">
              <p className="mb-4">
                يتميز مناخ الرياض بكونه مناخاً صحراوياً جافاً مع درجات حرارة مرتفعة في الصيف وعواصف رملية متكررة، 
                مما يضع تحديات خاصة أمام الحفاظ على نظافة المنازل. هذه الظروف المناخية تتطلب نهجاً متخصصاً في التنظيف 
                يأخذ في الاعتبار تراكم الغبار السريع، الجفاف الشديد، والتغيرات الحرارية الكبيرة.
              </p>
              <p className="mb-4">
                <strong>الغبار والرمال:</strong> تشكل العواصف الرملية والغبار المتطاير تحدياً كبيراً لنظافة المنازل، 
                حيث يتسرب الغبار الناعم عبر أصغر الفتحات ويستقر على جميع الأسطح. هذا يتطلب تنظيفاً يومياً للأسطح 
                المكشوفة واستخدام تقنيات خاصة لإزالة الغبار من الأماكن صعبة الوصول.
              </p>
              <p className="mb-4">
                <strong>الجفاف وتأثيره:</strong> الجفاف الشديد يؤدي إلى تراكم الكهرباء الساكنة التي تجذب الغبار، 
                كما يسبب تشقق بعض المواد وتآكل الأسطح. لذلك نستخدم منتجات ترطيب خاصة ومضادات الكهرباء الساكنة 
                للحفاظ على الأسطح وتقليل تراكم الغبار.
              </p>
              <p className="mb-4">
                <strong>الحرارة العالية:</strong> درجات الحرارة المرتفعة تؤثر على فعالية مواد التنظيف وتسرع من 
                تبخر المياه، مما يترك بقع الترسبات المعدنية. نحن نستخدم مواد تنظيف مصممة خصيصاً للمناخ الحار 
                وتقنيات تنظيف تتكيف مع هذه الظروف.
              </p>
            </div>
          </motion.div>

          {/* Health Benefits */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-lg mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Heart className="w-10 h-10 text-cyan-600" />
              <h3 className="text-2xl font-bold text-cyan-900">الفوائد الصحية لتنظيف المنازل المنتظم</h3>
            </div>
            <div className="text-gray-700 text-right leading-relaxed">
              <p className="mb-4">
                النظافة المنتظمة للمنزل ليست مجرد مسألة جمالية، بل هي استثمار حقيقي في صحة وراحة الأسرة. 
                الدراسات العلمية تؤكد أن البيئة المنزلية النظيفة تقلل من مخاطر الإصابة بالأمراض وتحسن من 
                جودة الحياة بشكل عام.
              </p>
              
              <h4 className="text-xl font-bold text-cyan-800 mb-3">تحسين جودة الهواء الداخلي</h4>
              <p className="mb-4">
                الهواء داخل المنازل قد يكون أكثر تلوثاً من الهواء الخارجي بسبب تراكم الغبار، وبر الحيوانات الأليفة، 
                العفن، والمواد الكيميائية من منتجات التنظيف. التنظيف المنتظم يساعد في إزالة هذه الملوثات ويحسن 
                من جودة الهواء، مما يقلل من أعراض الحساسية والربو.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">الوقاية من الأمراض المعدية</h4>
              <p className="mb-4">
                الأسطح الملوثة تشكل بيئة مناسبة لنمو البكتيريا والفيروسات والفطريات. التنظيف والتعقيم المنتظم 
                يقضي على هذه الكائنات الضارة ويقلل من انتشار الأمراض المعدية داخل الأسرة، خاصة بين الأطفال وكبار السن.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تقليل التوتر وتحسين الصحة النفسية</h4>
              <p className="mb-4">
                البيئة المنظمة والنظيفة تساعد في تقليل مستويات التوتر والقلق. الدراسات تشير إلى أن الأشخاص 
                الذين يعيشون في بيئات نظيفة ومنظمة يتمتعون بصحة نفسية أفضل وقدرة أكبر على التركيز والإنتاجية.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">النوم الأفضل والراحة</h4>
              <p className="mb-4">
                الغرف النظيفة والمرتبة تساعد في الحصول على نوم أفضل وأكثر راحة. إزالة الغبار من غرف النوم 
                وتنظيف الأسرّة والوسائد بانتظام يقلل من أعراض الحساسية الليلية ويحسن من جودة النوم.
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
              <h3 className="text-2xl font-bold text-cyan-900">التقنيات الحديثة في تنظيف المنازل</h3>
            </div>
            <div className="text-gray-700 text-right leading-relaxed">
              <p className="mb-4">
                نحن في بلس كلين نستخدم أحدث التقنيات العالمية في تنظيف المنازل لضمان حصولك على أفضل النتائج 
                في أقل وقت ممكن. هذه التقنيات تجمع بين الفعالية والأمان والاستدامة البيئية.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تقنية التنظيف المتطورة</h4>
              <p className="mb-4">
                تستخدم هذه التقنية الماء المسخن إلى درجات حرارة عالية (أكثر من 100 درجة مئوية) لتنظيف 
                وتعقيم الأسطح دون استخدام مواد كيميائية ضارة. هذه الطريقة فعالة في قتل 99.9% من البكتيريا 
                والفيروسات والعفن، وهي آمنة تماماً للأطفال والحيوانات الأليفة.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">أنظمة الشفط عالية الكفاءة (HEPA)</h4>
              <p className="mb-4">
                نستخدم مكانس كهربائية مزودة بفلاتر HEPA التي تستطيع التقاط الجزيئات الدقيقة جداً (حتى 0.3 ميكرون) 
                بما في ذلك الغبار الناعم، حبوب اللقاح، والعوالق المجهرية. هذا يضمن تنظيفاً عميقاً وشاملاً لجميع الأسطح.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تقنية التنظيف بالموجات فوق الصوتية</h4>
              <p className="mb-4">
                تستخدم لتنظيف الأشياء الدقيقة والمعقدة مثل المجوهرات، الساعات، والأجهزة الإلكترونية الصغيرة. 
                الموجات فوق الصوتية تخلق فقاعات مجهرية تنظف الأسطح بعمق دون أي ضرر.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">أنظمة التنظيف الآلية والروبوتات</h4>
              <p className="mb-4">
                نستخدم روبوتات تنظيف متطورة للأسطح الكبيرة والنوافذ العالية، مما يضمن تنظيفاً منتظماً ودقيقاً 
                حتى في الأماكن صعبة الوصول. هذه الروبوتات مبرمجة لتتبع أنماط تنظيف محددة وتضمن عدم ترك أي منطقة.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تقنية النانو للتنظيف والحماية</h4>
              <p className="mb-4">
                نستخدم مواد نانو متطورة تخلق طبقة حماية شفافة على الأسطح، مما يمنع التصاق الأوساخ والبكتيريا 
                ويسهل التنظيف اللاحق. هذه التقنية تطيل من نظافة الأسطح وتقلل من تكرار الحاجة للتنظيف.
              </p>
            </div>
          </motion.div>

          {/* Eco-Friendly Practices */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Leaf className="w-10 h-10 text-cyan-600" />
              <h3 className="text-2xl font-bold text-cyan-900">التنظيف الصديق للبيئة والاستدامة</h3>
            </div>
            <div className="text-gray-700 text-right leading-relaxed">
              <p className="mb-4">
                التزاماً بمسؤوليتنا البيئية ووعياً بأهمية الحفاظ على البيئة للأجيال القادمة، نحن في بلس كلين 
                نتبع ممارسات تنظيف صديقة للبيئة ومستدامة. نؤمن أن النظافة والحفاظ على البيئة يمكن أن يسيرا جنباً إلى جنب.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">المواد الطبيعية والقابلة للتحلل البيولوجي</h4>
              <p className="mb-4">
                نستخدم مواد تنظيف طبيعية مصنوعة من مكونات نباتية قابلة للتحلل البيولوجي. هذه المواد فعالة في 
                التنظيف مثل المواد الكيميائية التقليدية ولكنها آمنة للبيئة والصحة. من أمثلتها: الخل الأبيض، 
                بيكربونات الصوديوم، الليمون، وزيوت النباتات العطرية.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تقليل استهلاك المياه</h4>
              <p className="mb-4">
                نستخدم تقنيات توفير المياه مثل أنظمة الرش الدقيق والمماسح المايكروفايبر التي تحتاج كميات أقل 
                من المياه للتنظيف الفعال. كما نعيد استخدام المياه المعالجة في عمليات التنظيف الأولية حيثما أمكن.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تدوير المواد والتقليل من النفايات</h4>
              <p className="mb-4">
                نحرص على استخدام أدوات تنظيف قابلة لإعادة الاستخدام والغسل بدلاً من الأدوات المستهلكة. 
                كما نقوم بتدوير العبوات الفارغة ونعمل مع موردين يتبعون ممارسات تصنيع مستدامة.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">التوعية البيئية للعملاء</h4>
              <p className="mb-4">
                نقدم نصائح وإرشادات لعملائنا حول كيفية الحفاظ على نظافة المنزل بطرق صديقة للبيئة، وننصح 
                باستخدام منتجات طبيعية للتنظيف اليومي البسيط، ونوضح كيفية تقليل النفايات المنزلية.
              </p>
            </div>
          </motion.div>

          {/* Specialized Cleaning Areas */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Eye className="w-10 h-10 text-cyan-600" />
              <h3 className="text-2xl font-bold text-cyan-900">التنظيف المتخصص لكل منطقة في المنزل</h3>
              </div>
            <div className="text-gray-700 text-right leading-relaxed">
              <p className="mb-4">
                كل منطقة في المنزل تحتاج إلى تقنيات تنظيف مختلفة ومتخصصة. فهم طبيعة كل مساحة واستخدامها 
                يساعدنا في تقديم خدمة تنظيف مثالية تحقق أفضل النتائج وتحافظ على سلامة المواد والأسطح.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تنظيف المطابخ - قلب المنزل</h4>
              <p className="mb-4">
                المطبخ هو من أكثر المناطق استخداماً في المنزل ويحتاج عناية خاصة بسبب تراكم الدهون والزيوت 
                وبقايا الطعام. نحن نستخدم منتجات إزالة الدهون المتخصصة وتقنيات التنظيف  للخزائن 
                والأسطح، مع تعقيم شامل لجميع الأجهزة من الداخل والخارج.
              </p>
              
              <p className="mb-4">
                <strong>خدمات تنظيف المطبخ تشمل:</strong> تنظيف وتلميع الخزائن الخشبية والمعدنية، 
                إزالة الترسبات الجيرية من الأحواض والصنابير، تنظيف الأفران والمايكروويف من الداخل، 
                تنظيف وتعقيم الثلاجات والفريزرات، تنظيف شفاط المطبخ وإزالة الدهون المتراكمة، 
                تنظيف وتلميع الأسطح الرخامية والجرانيت، وتعقيم جميع أدوات الطبخ والأواني.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تنظيف الحمامات - الصحة والنظافة</h4>
              <p className="mb-4">
                الحمامات تتطلب أعلى معايير النظافة والتعقيم لمنع نمو البكتيريا والفطريات. نستخدم مواد 
                تنظيف قوية ومضادة للبكتيريا مع تقنيات تنظيف متخصصة للتعامل مع الترسبات الجيرية والصدأ.
              </p>

              <p className="mb-4">
                <strong>خدمات تنظيف الحمامات تشمل:</strong> تنظيف وتعقيم المراحيض بالكامل، 
                إزالة الترسبات الجيرية من الصنابير والدشات، تنظيف وتلميع المرايا والزجاج، 
                تنظيف البلاط والفواصل وإزالة العفن، تنظيف أحواض الاستحمام والدش، 
                تعقيم الأرضيات ومناطق التلامس، وتنظيف أنظمة التهوية والمراوح.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تنظيف غرف النوم - الراحة والهدوء</h4>
              <p className="mb-4">
                غرف النوم تحتاج تنظيفاً دقيقاً وهادئاً للحفاظ على بيئة صحية للنوم. نركز على إزالة الغبار 
                والعوالق التي قد تسبب الحساسية، مع تنظيف المفروشات والأسرّة بعناية خاصة.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تنظيف الصالات والمجالس - الضيافة العربية</h4>
              <p className="mb-4">
                الصالات والمجالس هي واجهة المنزل ومكان استقبال الضيوف، لذلك تحتاج عناية خاصة في التنظيف 
                والترتيب. نهتم بتنظيف الكنب والمفروشات، تلميع الطاولات والديكورات، وتنظيف السجاد 
                والموكيت بتقنيات متخصصة.
              </p>
            </div>
          </motion.div>

          {/* Seasonal Cleaning */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-white p-8 rounded-2xl shadow-lg mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Calendar className="w-10 h-10 text-cyan-600" />
              <h3 className="text-2xl font-bold text-cyan-900">التنظيف الموسمي والمناسبات الخاصة</h3>
            </div>
            <div className="text-gray-700 text-right leading-relaxed">
              <p className="mb-4">
                مع تغير الفصول والمناسبات الدينية والاجتماعية، تتغير احتياجات تنظيف المنزل. نحن نقدم 
                خدمات تنظيف موسمية متخصصة تتناسب مع كل فترة من السنة ومع التقاليد والعادات السعودية.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تنظيف الصيف - مواجهة الحر والغبار</h4>
              <p className="mb-4">
                فصل الصيف في الرياض يتطلب تنظيفاً أكثر تكراراً بسبب العواصف الرملية والحرارة المرتفعة. 
                نركز على تنظيف أنظمة التكييف وفلاترها، إزالة الغبار المتراكم من العواصف الرملية، 
                وتنظيف النوافذ والشبابيك بشكل متكرر. كما نهتم بتنظيف وصيانة المسابح والحدائق المنزلية.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تنظيف الشتاء - الاستعداد للأمطار</h4>
              <p className="mb-4">
                مع قدوم فصل الشتاء والأمطار المتقطعة، نقوم بتنظيف وفحص أنظمة الصرف، تنظيف الأسطح 
                والبالكونات، والتأكد من عدم وجود تسريبات. كما نهتم بتنظيف وتجفيف الأقمشة والمفروشات 
                لمنع نمو العفن والرطوبة.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تنظيف شهر رمضان المبارك</h4>
              <p className="mb-4">
                خلال شهر رمضان الكريم، يزداد النشاط في المطابخ وتكثر الولائم والإفطارات. نقدم خدمات 
                تنظيف متخصصة للمطابخ بعد إعداد وجبات الإفطار والسحور، تنظيف صالات الطعام، وتنظيف 
                شامل للمنزل استعداداً لاستقبال الضيوف والأقارب.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تنظيف العيدين - الفرح والاحتفال</h4>
              <p className="mb-4">
                عيد الفطر وعيد الأضحى مناسبتان مهمتان تتطلب تنظيفاً شاملاً للمنزل. نقدم خدمات تنظيف 
                خاصة قبل العيد لاستقبال الضيوف، وبعد العيد لإعادة المنزل إلى حالته الطبيعية بعد الاحتفالات.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تنظيف المناسبات الاجتماعية</h4>
              <p className="mb-4">
                الأعراس، حفلات التخرج، أعياد الميلاد، والمناسبات العائلية تحتاج تحضيرات خاصة. نقدم 
                خدمات تنظيف شاملة قبل المناسبة لضمان أن يكون المنزل في أفضل حالة لاستقبال الضيوف، 
                وخدمات تنظيف سريعة بعد انتهاء المناسبة.
              </p>
            </div>
          </motion.div>

          {/* Safety and Training */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-lg mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Shield className="w-10 h-10 text-cyan-600" />
              <h3 className="text-2xl font-bold text-cyan-900">السلامة والأمان في خدمات التنظيف</h3>
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

              <h4 className="text-xl font-bold text-cyan-800 mb-3">التأمين والضمانات</h4>
              <p className="mb-4">
                نوفر تأميناً شاملاً ضد المسؤولية المدنية وتأمين ممتلكات يغطي أي أضرار قد تحدث أثناء 
                تقديم الخدمة. كما نقدم ضمانات على جودة العمل، وفي حالة عدم رضا العميل نعيد تنفيذ الخدمة 
                مجاناً أو نرد قيمة الخدمة كاملة.
              </p>
            </div>
          </motion.div>

          {/* Professional Tips */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="bg-white p-8 rounded-2xl shadow-lg mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Brain className="w-10 h-10 text-cyan-600" />
              <h3 className="text-2xl font-bold text-cyan-900">نصائح احترافية للحفاظ على نظافة المنزل</h3>
            </div>
            <div className="text-gray-700 text-right leading-relaxed">
              <p className="mb-4">
                بناءً على خبرتنا الطويلة في مجال تنظيف المنازل، نشارككم مجموعة من النصائح والإرشادات 
                المهنية التي ستساعدكم في الحفاظ على نظافة منزلكم بين زيارات فريق التنظيف المحترف.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">روتين التنظيف اليومي</h4>
              <p className="mb-4">
                <strong>الصباح:</strong> ابدأ يومك بترتيب الأسرّة، تنظيف أسطح المطبخ بعد تحضير الإفطار، 
                ومسح الأرضيات في المناطق عالية الاستخدام. هذا الروتين البسيط يمنع تراكم الفوضى ويحافظ 
                على المظهر العام للمنزل.
              </p>
              
              <p className="mb-4">
                <strong>المساء:</strong> اقضِ 15 دقيقة قبل النوم في ترتيب الصالة، غسل الأطباق، ومسح 
                أسطح الحمام. هذا يضمن أن تبدأ اليوم التالي ببيت مرتب ونظيف.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">إدارة الغبار في المناخ الصحراوي</h4>
              <p className="mb-4">
                <strong>استخدم مماسح المايكروفايبر:</strong> هذه المماسح تلتقط الغبار بدلاً من نشره في الهواء. 
                امسح الأسطح بحركة دائرية واغسل المماسح بانتظام للحفاظ على فعاليتها.
              </p>
              
              <p className="mb-4">
                <strong>تقنية التنظيف من الأعلى للأسفل:</strong> ابدأ دائماً بتنظيف الأسطح العالية مثل 
                مراوح السقف والثريات، ثم انتقل تدريجياً إلى الأسطح المنخفضة. هذا يمنع إعادة تراكم الغبار 
                على الأسطح المنظفة.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">العناية بالأقمشة والمفروشات</h4>
              <p className="mb-4">
                <strong>التنظيف الفوري للبقع:</strong> كلما تمت معالجة البقعة بسرعة، كانت إزالتها أسهل. 
                استخدم منشفة نظيفة لامتصاص السوائل المنسكبة فوراً، ولا تفرك البقعة لتجنب انتشارها.
              </p>
              
              <p className="mb-4">
                <strong>التهوية المنتظمة:</strong> اترك النوافذ مفتوحة لفترات قصيرة في الصباح الباكر 
                أو المساء لتجديد الهواء، لكن تجنب ذلك خلال العواصف الرملية أو ساعات الحر الشديد.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">منتجات التنظيف الطبيعية المنزلية</h4>
              <p className="mb-4">
                <strong>الخل الأبيض والليمون:</strong> مزيج ممتاز لإزالة الترسبات الجيرية من الصنابير 
                والأحواض. اخلط كميات متساوية من الخل والماء في زجاجة رش واستخدمها للتنظيف اليومي.
              </p>
              
              <p className="mb-4">
                <strong>بيكربونات الصوديوم:</strong> منظف طبيعي وآمن يمكن استخدامه لإزالة الروائح من 
                الثلاجة والمجمد، تنظيف أحواض المطبخ، وإزالة البقع من الأقمشة. اصنع عجينة بإضافة القليل 
                من الماء واستخدمها كمنظف كاشط لطيف.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">صيانة أجهزة التنظيف</h4>
              <p className="mb-4">
                <strong>المكانس الكهربائية:</strong> نظف أو استبدل الفلاتر شهرياً، وافرغ الكيس أو الحاوية 
                عندما تمتلئ بنسبة 75%. فحص الخراطيم بانتظام للتأكد من عدم انسدادها بالشعر أو الخيوط.
              </p>
              
              <p className="mb-4">
                <strong>المماسح والفرش:</strong> اغسل أدوات التنظيف بعد كل استخدام واتركها تجف تماماً 
                قبل التخزين لمنع نمو البكتيريا والعفن. استبدل المماسح والفرش عندما تبدأ في فقدان فعاليتها.
              </p>
            </div>
          </motion.div>

          {/* Technology and Innovation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="bg-white p-8 rounded-2xl shadow-lg mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Wrench className="w-10 h-10 text-cyan-600" />
              <h3 className="text-2xl font-bold text-cyan-900">الابتكار والتطوير في خدمات بلس كلين</h3>
            </div>
            <div className="text-gray-700 text-right leading-relaxed">
              <p className="mb-4">
                نحن في بلس كلين نؤمن بأهمية التطوير المستمر ومواكبة أحدث الابتكارات في مجال تنظيف المنازل. 
                نستثمر باستمرار في البحث والتطوير لنقدم لعملائنا أفضل الخدمات وأكثرها تطوراً.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">تطبيق الذكاء الاصطناعي في التنظيف</h4>
              <p className="mb-4">
                نستخدم تقنيات الذكاء الاصطناعي لتحليل أنماط التلوث في المنازل وتحديد أفضل طرق التنظيف 
                لكل منطقة. هذا يساعدنا في تخصيص خدماتنا لتلبية الاحتياجات الفريدة لكل منزل وتحقيق أفضل النتائج.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">أنظمة إدارة الجودة الرقمية</h4>
              <p className="mb-4">
                نستخدم أنظمة رقمية متطورة لتتبع جودة خدماتنا ومراقبة أداء فرق العمل. هذه الأنظمة تضمن 
                الحفاظ على معايير الجودة العالية وتساعدنا في التحسين المستمر لخدماتنا.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">التدريب المستمر والتطوير المهني</h4>
              <p className="mb-4">
                فريق العمل لدينا يخضع لبرامج تدريب مستمرة على أحدث تقنيات التنظيف وأفضل الممارسات المهنية. 
                نحرص على أن يكون جميع موظفينا على اطلاع دائم بأحدث التطورات في مجال تنظيف المنازل.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">الاستدامة والمسؤولية الاجتماعية</h4>
              <p className="mb-4">
                نحن ملتزمون بتطوير ممارسات تنظيف مستدامة وصديقة للبيئة. نعمل مع موردين محليين لدعم 
                الاقتصاد الوطني، ونشارك في برامج التوعية البيئية في المجتمع المحلي.
              </p>
            </div>
          </motion.div>

          {/* Future of Home Cleaning */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="bg-white p-8 rounded-2xl shadow-lg mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Sparkles className="w-10 h-10 text-cyan-600" />
              <h3 className="text-2xl font-bold text-cyan-900">مستقبل تنظيف المنازل في المملكة العربية السعودية</h3>
            </div>
            <div className="text-gray-700 text-right leading-relaxed">
              <p className="mb-4">
                مع التطور السريع في التكنولوجيا والتغيرات في أنماط الحياة، يشهد قطاع تنظيف المنازل 
                تطورات مثيرة تهدف إلى تحسين جودة الحياة وتوفير حلول أكثر فعالية واستدامة.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">المنازل الذكية والتنظيف التلقائي</h4>
              <p className="mb-4">
                مع انتشار تقنيات المنازل الذكية، نتوقع دمج أنظمة التنظيف التلقائي مع أنظمة إدارة المنزل 
                الذكية. هذا سيسمح بجدولة التنظيف التلقائي بناءً على استخدام المساحات واحتياجاتها الفعلية.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">التقنيات الحيوية في التنظيف</h4>
              <p className="mb-4">
                البحوث الجارية في استخدام الإنزيمات والبكتيريا المفيدة في التنظيف تعد بحلول أكثر فعالية 
                وأماناً للبيئة. هذه التقنيات ستحدث ثورة في كيفية التعامل مع البقع الصعبة والروائح المستعصية.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">الخدمات المخصصة بالكامل</h4>
              <p className="mb-4">
                المستقبل يتجه نحو خدمات تنظيف مخصصة بالكامل لكل عميل، حيث تحدد خوارزميات الذكاء 
                الاصطناعي احتياجات كل منزل بدقة وتقدم حلولاً مخصصة لكل مساحة وكل نوع من أنواع التلوث.
              </p>

              <h4 className="text-xl font-bold text-cyan-800 mb-3">التكامل مع رؤية المملكة 2030</h4>
              <p className="mb-4">
                قطاع تنظيف المنازل يلعب دوراً مهماً في تحقيق أهداف رؤية المملكة 2030، خاصة في مجالات 
                جودة الحياة، الاستدامة البيئية، وتطوير القطاعات الخدمية. نحن فخورون بأن نكون جزءاً من 
                هذا التحول الإيجابي في المجتمع السعودي.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Enhanced Process Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-right">منهجيتنا المتطورة في تنظيف المنازل</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'التقييم والاستشارة المجانية',
                description: 'زيارة مجانية لفحص المنزل وتحديد احتياجات التنظيف المحددة مع وضع خطة عمل مفصلة وتقدير دقيق للتكلفة والوقت المطلوب',
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

        {/* Comprehensive Knowledge Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-right">المعرفة الشاملة لتنظيف المنازل</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Deep Cleaning Science */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <Droplets className="w-8 h-8 text-cyan-600" />
                <h3 className="text-xl font-bold text-cyan-900">علم التنظيف العميق</h3>
              </div>
              <div className="text-gray-700 text-right space-y-3">
                <p className="font-semibold">المفهوم العلمي للتنظيف:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>إزالة الأوساخ على المستوى الجزيئي</li>
                  <li>كسر الروابط الكيميائية للبقع</li>
                  <li>تحليل أنواع التلوث المختلفة</li>
                  <li>اختيار المذيبات المناسبة لكل نوع</li>
                  <li>فهم تفاعل المواد مع الأسطح</li>
                  <li>قياس درجة الحموضة والقلوية</li>
                  <li>تطبيق مبادئ الكيمياء الفيزيائية</li>
                </ul>
              </div>
            </motion.div>

            {/* Air Quality Management */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <Wind className="w-8 h-8 text-cyan-600" />
                <h3 className="text-xl font-bold text-cyan-900">إدارة جودة الهواء الداخلي</h3>
              </div>
              <div className="text-gray-700 text-right space-y-3">
                <p className="font-semibold">عوامل تلوث الهواء المنزلي:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>الغبار الناعم والجزيئات المعلقة</li>
                  <li>الغازات المتطايرة من مواد البناء</li>
                  <li>بقايا منتجات التنظيف الكيميائية</li>
                  <li>العفن والفطريات في الأماكن الرطبة</li>
                  <li>وبر الحيوانات الأليفة والبكتيريا</li>
                  <li>دخان المطبخ والروائح العالقة</li>
                  <li>حبوب اللقاح الداخلة من الخارج</li>
                </ul>
              </div>
            </motion.div>

            {/* Maintenance Science */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <Timer className="w-8 h-8 text-cyan-600" />
                <h3 className="text-xl font-bold text-cyan-900">علم الصيانة الوقائية</h3>
              </div>
              <div className="text-gray-700 text-right space-y-3">
                <p className="font-semibold">مبادئ الصيانة الذكية:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>التنبؤ بدورات تراكم الأوساخ</li>
                  <li>تحديد نقاط الضعف في المنزل</li>
                  <li>وضع جداول صيانة مخصصة</li>
                  <li>مراقبة تدهور المواد والأسطح</li>
                  <li>تطبيق تقنيات الحماية الوقائية</li>
                  <li>تقليل تكاليف الإصلاح المستقبلية</li>
                  <li>إطالة عمر الأثاث والتجهيزات</li>
                </ul>
              </div>
            </motion.div>

            {/* Health and Hygiene */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <Heart className="w-8 h-8 text-cyan-600" />
                <h3 className="text-xl font-bold text-cyan-900">الصحة والنظافة الشخصية</h3>
              </div>
              <div className="text-gray-700 text-right space-y-3">
                <p className="font-semibold">تأثير النظافة على الصحة:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>تقليل الإصابة بالأمراض التنفسية</li>
                  <li>الوقاية من الحساسية الجلدية</li>
                  <li>تحسين الصحة النفسية والمزاج</li>
                  <li>زيادة كفاءة جهاز المناعة</li>
                  <li>تحسين جودة النوم والراحة</li>
                  <li>الوقاية من الأمراض المعدية</li>
                  <li>حماية الأطفال وكبار السن</li>
                </ul>
              </div>
            </motion.div>

            {/* Environmental Impact */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <Leaf className="w-8 h-8 text-cyan-600" />
                <h3 className="text-xl font-bold text-cyan-900">التأثير البيئي المستدام</h3>
              </div>
              <div className="text-gray-700 text-right space-y-3">
                <p className="font-semibold">الممارسات البيئية المسؤولة:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>استخدام مواد قابلة للتحلل البيولوجي</li>
                  <li>تقليل استهلاك المياه والطاقة</li>
                  <li>إعادة تدوير مواد التنظيف والعبوات</li>
                  <li>تجنب المواد الضارة بطبقة الأوزون</li>
                  <li>تقليل النفايات والمخلفات</li>
                  <li>دعم الموردين المحليين والمستدامين</li>
                  <li>التوعية البيئية للعملاء</li>
                </ul>
              </div>
            </motion.div>

            {/* Technology Integration */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <Zap className="w-8 h-8 text-cyan-600" />
                <h3 className="text-xl font-bold text-cyan-900">التكامل التقني المتقدم</h3>
              </div>
              <div className="text-gray-700 text-right space-y-3">
                <p className="font-semibold">التقنيات الحديثة المستخدمة:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>أجهزة قياس جودة الهواء الرقمية</li>
                  <li>مستشعرات الرطوبة والحرارة</li>
                  <li>كاميرات تحليل مستوى النظافة</li>
                  <li>تطبيقات الهاتف لمتابعة الخدمة</li>
                  <li>أنظمة إدارة المواعيد الذكية</li>
                  <li>قواعد بيانات تفضيلات العملاء</li>
                  <li>تقارير الجودة الرقمية المفصلة</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>


        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-right">الأسئلة الشائعة حول تنظيف المنازل</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'كم من الوقت تستغرق خدمة تنظيف المنزل؟',
                answer: 'تختلف مدة التنظيف حسب حجم المنزل ونوع الخدمة المطلوبة. الشقق الصغيرة تحتاج 2-3 ساعات، بينما الفلل الكبيرة قد تحتاج 6-8 ساعات للتنظيف الشامل.'
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
                question: 'كيف يتم تحديد سعر خدمة التنظيف؟',
                answer: 'يتم تحديد السعر بناءً على مساحة المنزل، نوع الخدمة المطلوبة، مستوى التنظيف المطلوب، والخدمات الإضافية. نقدم تقديراً مجانياً ودقيقاً قبل بدء العمل.'
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
              <p className="text-gray-700 mb-4">للتواصل السريع وإرسال صور المنزل</p>
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
                description: 'فريق محترف مع خبرة واسعة في تنظيف جميع أنواع المنازل',
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
          <h2 className="text-4xl font-bold mb-4">احصل على منزل نظيف ومريح اليوم</h2>
          <p className="text-xl mb-6 leading-relaxed">
            انضم إلى آلاف العملاء الراضين الذين اختاروا بلس كلين لتنظيف منازلهم في الرياض
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
              'serviceType': 'تنظيف المنازل',
              'provider': {
                '@type': 'Organization',
                'name': 'بلس كلين',
                'areaServed': 'الرياض',
                'description': 'خدمات تنظيف المنازل في الرياض بأعلى معايير الجودة والاحترافية'
              },
              'description': 'خدمات تنظيف المنازل في الرياض مع بلس كلين، استمتع بمنزل نظيف وصحي مع خدمات تنظيف احترافية باستخدام أحدث التقنيات.',
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

export default HomeCleaningPage;
