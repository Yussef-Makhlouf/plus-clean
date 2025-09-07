'use client';
import { motion } from 'framer-motion';
import SectionHeader from '../../components/SectionHeader';
import { Zap, ShieldCheck, Star, Droplets, Clock, CheckCircle2, AlertTriangle, Info, MapPin, Phone, Award, Users, Truck, Home, Building2, Sparkles, Timer, BadgeCheck, ThumbsUp, Heart, Shield } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Script from 'next/script';

const CarpetCleaningPage = () => {
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
            title="شركة تنظيف السجاد في الرياض - بلس كلين"
            subtitle="أفضل خدمات تنظيف السجاد والموكيت في الرياض  والمواد الطبيعية الآمنة مع ضمان الجودة والنظافة المثالية"
            className="text-right mb-12 pt-12"
          />
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-800 mb-12 text-right leading-relaxed"
          >
            <p className="mb-6">
              تعتبر **بلس كلين** الرائدة في مجال تنظيف السجاد والموكيت في الرياض، حيث نقدم خدمات تنظيف السجاد المنزلي والتجاري بأعلى معايير الجودة والاحترافية. نخدم جميع أحياء الرياض الشمالية والجنوبية والشرقية والغربية، ونتخصص في تنظيف السجاد الشرقي، السجاد الفارسي، السجاد الحرير، والموكيت بجميع أنواعه.
            </p>
            <p className="mb-6">
              فريقنا المتخصص في **تنظيف السجاد  في الرياض** يستخدم أحدث التقنيات الأوروبية والأمريكية لضمان إزالة البقع الصعبة، القضاء على الجراثيم والبكتيريا، وإعادة السجاد إلى حالته الأصلية. نقدم خدماتنا للمنازل، الفلل، القصور، المكاتب، الشركات، الفنادق، والمطاعم في جميع أنحاء العاصمة الرياض.
            </p>
          </motion.div>

          {/* Service Areas Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-900 mb-8 text-right">مناطق الخدمة في الرياض</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                'حي الملك فهد', 'حي الملك عبدالله', 'حي الملك فيصل', 'حي النرجس',
                'حي الياسمين', 'حي الورود', 'حي الربيع', 'حي الملقا',
                'حي الصحافة', 'حي المحمدية', 'حي الفيصلية', 'حي السليمانية',
                'حي الروضة', 'حي المرسلات', 'حي النزهة', 'حي الرمال',
                'حي العليا', 'حي الخليج', 'حي الندى', 'حي الرائد',
                'حي القادسية', 'حي الحمراء', 'حي المصيف', 'حي طويق',
                'حي الشفا', 'حي المغرزات', 'حي الرحمانية', 'حي الازدهار'
              ].map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * (index % 8) }}
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
                >
                  <MapPin className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                  <p className="text-gray-800 font-medium">{area}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Comprehensive Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-900 mb-8 text-right">خدمات تنظيف السجاد الشاملة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'تنظيف السجاد ',
                  description: 'خدمة تنظيف السجاد  الساخن باستخدام أحدث الماكينات الألمانية والإيطالية لضمان تنظيف عميق وآمن.',
                  details: [
                    'تنظيف السجاد الفارسي والشرقي',
                    'إزالة البقع المستعصية والقديمة',
                    'تعقيم وتطهير بنسبة 99.9%',
                    'إزالة الروائح الكريهة نهائياً',
                    'تجفيف سريع خلال 2-4 ساعات',
                    'حماية الألوان والنسيج الأصلي',
                    'خدمة في المنزل بدون نقل'
                  ],
                  icon: <Droplets className="w-8 h-8 text-cyan-600" />,
                },
                {
                  title: 'تنظيف الموكيت والسجاد المنزلي',
                  description: 'خدمة متخصصة لتنظيف الموكيت وسجاد الصالات وغرف النوم والمجالس بجميع أنواعها وأحجامها.',
                  details: [
                    'تنظيف موكيت الصالات والمجالس',
                    'تنظيف سجاد غرف النوم',
                    'تنظيف سجاد المطابخ والممرات',
                    'إزالة شعر الحيوانات الأليفة',
                    'تنظيف السجاد الصوفي والحريري',
                    'معالجة البقع الدهنية والمائية',
                    'تنظيف السجاد الفاتح والغامق'
                  ],
                  icon: <Home className="w-8 h-8 text-cyan-600" />,
                },
                {
                  title: 'تنظيف السجاد التجاري والمكتبي',
                  description: 'خدمات تنظيف السجاد للشركات والمكاتب والمؤسسات التجارية مع جدولة مرنة ومواعيد مناسبة.',
                  details: [
                    'تنظيف سجاد المكاتب والشركات',
                    'تنظيف سجاد الفنادق والمطاعم',
                    'تنظيف سجاد القاعات والمؤتمرات',
                    'خدمة دورية شهرية وأسبوعية',
                    'عمل خارج أوقات الدوام',
                    'تنظيف السجاد الثقيل والكبير',
                    'ضمان عدم تعطيل العمل'
                  ],
                  icon: <Building2 className="w-8 h-8 text-cyan-600" />,
                },
                {
                  title: 'إزالة البقع الصعبة والمستعصية',
                  description: 'خدمة متخصصة في إزالة جميع أنواع البقع باستخدام مواد آمنة ومتخصصة لكل نوع بقعة.',
                  details: [
                    'إزالة بقع القهوة والشاي والعصائر',
                    'معالجة بقع الدم والقيء',
                    'إزالة بقع الحبر والألوان',
                    'معالجة بقع الزيت والشحوم',
                    'إزالة بقع الطين والتراب',
                    'معالجة بقع مستحضرات التجميل',
                    'إزالة بقع الطعام المختلفة'
                  ],
                  icon: <CheckCircle2 className="w-8 h-8 text-cyan-600" />,
                },
                {
                  title: 'تعقيم وتطهير السجاد',
                  description: 'خدمة تعقيم شاملة للسجاد للقضاء على الجراثيم والبكتيريا والفيروسات باستخدام مواد معتمدة صحياً.',
                  details: [
                    'تعقيم ضد الجراثيم والبكتيريا',
                    'القضاء على العث وحشرات السجاد',
                    'إزالة المواد المسببة للحساسية',
                    'تطهير السجاد من الفيروسات',
                    'استخدام مواد طبيعية آمنة',
                    'مناسب للأطفال والمرضى',
                    'شهادة ضمان التعقيم'
                  ],
                  icon: <ShieldCheck className="w-8 h-8 text-cyan-600" />,
                },
                {
                  title: 'تجديد وإصلاح السجاد',
                  description: 'خدمات إصلاح وتجديد السجاد القديم والتالف لإعادته إلى حالته الأصلية مع الحفاظ على قيمته.',
                  details: [
                    'إصلاح الثقوب والتمزقات',
                    'تجديد حواف السجاد المتآكلة',
                    'استعادة لمعان الألوان',
                    'إصلاح النسيج المفكوك',
                    'معالجة السجاد المتضرر من الماء',
                    'تقوية النسيج الضعيف',
                    'تجديد السجاد الأثري والتراثي'
                  ],
                  icon: <Sparkles className="w-8 h-8 text-cyan-600" />,
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 * index }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 serviceCard group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-cyan-100 rounded-full group-hover:bg-cyan-200 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-cyan-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 text-right mb-4 leading-relaxed">{service.description}</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 text-right">
                    {service.details.map((detail, i) => (
                      <li key={i} className="hover:text-cyan-800 transition-colors">{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Carpet Types Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-900 mb-8 text-right">أنواع السجاد التي نتخصص في تنظيفها</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  type: 'السجاد الفارسي والشرقي',
                  details: ['السجاد الحرير الطبيعي', 'السجاد الصوفي الفاخر', 'السجاد اليدوي التراثي', 'السجاد الأصفهاني والكاشاني'],
                  icon: '🏺'
                },
                {
                  type: 'الموكيت والسجاد الحديث',
                  details: ['موكيت الصالات والمجالس', 'السجاد الصناعي', 'سجاد الأطفال الملون', 'السجاد المقاوم للبقع'],
                  icon: '🏠'
                },
                {
                  type: 'السجاد التجاري والمكتبي',
                  details: ['سجاد المكاتب والشركات', 'سجاد الفنادق والمطاعم', 'سجاد القاعات والمؤتمرات', 'السجاد المقاوم للحريق'],
                  icon: '🏢'
                },
                {
                  type: 'السجاد الخاص والفاخر',
                  details: ['السجاد الأنتيك والأثري', 'سجاد الحرير الخالص', 'السجاد المطرز بالذهب', 'السجاد النادر والمحدود'],
                  icon: '👑'
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 * index }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl mb-4 text-center">{category.icon}</div>
                  <h3 className="text-lg font-bold text-cyan-900 mb-4 text-center">{category.type}</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 text-right text-sm">
                    {category.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Advanced Cleaning Technologies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-900 mb-8 text-right">تقنيات التنظيف المتطورة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'تقنية التنظيف المتطورة',
                  description: 'نقدم خدمات تنظيف السجاد باستخدام أحدث أجهزة التنظيف الألمانية الصنع، حيث تعمل بدرجة حرارة عالية تصل إلى 180 درجة مئوية لضمان تنظيف وتعقيم شامل.',
                  features: [
                    'أجهزة تنظيف Karcher وBissell الألمانية المتطورة',
                    'ضغط عالي يصل إلى 8 بار',
                    'درجة حرارة تنظيف تصل إلى 180°م',
                    'نظام شفط متطور للرطوبة الزائدة',
                    'تجفيف سريع خلال ساعتين فقط',
                    'آمنة بنسبة 100% على جميع أنواع السجاد والنسيج'
                  ]
                },
                {
                  title: 'تقنية التنظيف الجاف الصديق للبيئة',
                  description: 'طريقة تنظيف متطورة بدون استخدام كميات كبيرة من الماء، مناسبة للسجاد الحساس والنفيس.',
                  features: [
                    'مواد تنظيف طبيعية 100%',
                    'لا تحتاج لوقت تجفيف طويل',
                    'مناسبة للسجاد الحرير والصوف',
                    'تحافظ على ألوان النسيج',
                    'صديقة للبيئة والأطفال',
                    'نتائج فورية وملموسة'
                  ]
                },
                {
                  title: 'تقنية الموجات فوق الصوتية',
                  description: 'تقنية حديثة تستخدم الموجات فوق الصوتية لإزالة الأوساخ المتراكمة في أعماق النسيج.',
                  features: [
                    'تنظيف على المستوى الجزيئي',
                    'إزالة الأوساخ المجهرية',
                    'آمنة على النسيج الحساس',
                    'لا تضر بالألوان أو الملمس',
                    'فعالة ضد العث والبكتيريا',
                    'تحسن من ملمس السجاد'
                  ]
                },
                {
                  title: 'نظام التعقيم بالأوزون',
                  description: 'تقنية متطورة للتعقيم والتطهير باستخدام غاز الأوزون الطبيعي للقضاء على الجراثيم.',
                  features: [
                    'قضاء على 99.99% من الجراثيم',
                    'إزالة الروائح نهائياً',
                    'آمن وطبيعي 100%',
                    'لا يترك أي مواد كيميائية',
                    'مناسب للمرضى والأطفال',
                    'معتمد من منظمة الصحة العالمية'
                  ]
                }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 * index }}
                  className="bg-gradient-to-br from-white to-cyan-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-cyan-900 mb-4">{tech.title}</h3>
                  <p className="text-gray-700 text-right mb-4 leading-relaxed">{tech.description}</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 text-right">
                    {tech.features.map((feature, i) => (
                      <li key={i} className="hover:text-cyan-800 transition-colors">{feature}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Problem Solutions Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-900 mb-8 text-right">حلول لجميع مشاكل السجاد</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  problem: 'البقع المستعصية والقديمة',
                  solution: 'نستخدم مواد متخصصة لكل نوع بقعة مع تقنيات متطورة',
                  details: [
                    'بقع القهوة والشاي المتجمدة',
                    'بقع الدم والبروتينات',
                    'بقع الحبر والألوان',
                    'بقع الزيت والشحوم',
                    'بقع العرق والعطور',
                    'بقع الطعام المختلفة'
                  ],
                  icon: <AlertTriangle className="w-8 h-8 text-orange-600" />
                },
                {
                  problem: 'الروائح الكريهة والعفن',
                  solution: 'تقنيات متطورة لإزالة الروائح من المصدر وليس تغطيتها',
                  details: [
                    'رائحة الحيوانات الأليفة',
                    'رائحة الرطوبة والعفن',
                    'رائحة الدخان والشيشة',
                    'رائحة الطبخ والتوابل',
                    'رائحة المواد الكيميائية',
                    'الروائح المختلطة'
                  ],
                  icon: <Sparkles className="w-8 h-8 text-green-600" />
                },
                {
                  problem: 'تلف النسيج والألوان',
                  solution: 'استعادة حيوية السجاد وإصلاح التلف بطرق احترافية',
                  details: [
                    'بهتان الألوان',
                    'تآكل النسيج',
                    'تمزق الحواف',
                    'فقدان النعومة',
                    'تراكم الأوساخ العميقة',
                    'تضرر من الماء'
                  ],
                  icon: <Heart className="w-8 h-8 text-red-600" />
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 * index }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    {item.icon}
                    <h3 className="text-lg font-bold text-gray-900">{item.problem}</h3>
                  </div>
                  <p className="text-gray-700 text-right mb-4 text-sm leading-relaxed">{item.solution}</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 text-right text-sm">
                    {item.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Detailed Process Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-900 mb-8 text-right">خطوات عملية التنظيف المهنية</h2>
            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'الفحص والتقييم الأولي',
                  description: 'فحص شامل لحالة السجاد وتحديد نوع النسيج والبقع والأضرار',
                  details: [
                    'تحديد نوع ونسيج السجاد (صوف، حرير، صناعي)',
                    'فحص درجة الاتساخ ونوع البقع',
                    'تقييم حالة الألوان والنسيج',
                    'اختبار ثبات الألوان',
                    'تحديد التقنية المناسبة للتنظيف',
                    'توثيق الحالة قبل التنظيف'
                  ],
                  time: '15-30 دقيقة'
                },
                {
                  step: '2',
                  title: 'التحضير والإعداد',
                  description: 'إعداد المنطقة والأدوات وتحضير المواد المناسبة لنوع السجاد',
                  details: [
                    'إزالة الأثاث وحماية المنطقة المحيطة',
                    'شفط الأتربة والغبار السطحي',
                    'معالجة البقع الصعبة مسبقاً',
                    'تحضير المواد والمعدات المناسبة',
                    'ضبط درجة حرارة الماء ',
                    'تطبيق مواد ما قبل التنظيف'
                  ],
                  time: '30-45 دقيقة'
                },
                {
                  step: '3',
                  title: 'عملية التنظيف الرئيسية',
                  description: 'تنفيذ عملية التنظيف باستخدام التقنية المحددة',
                  details: [
                    'تطبيق تقنية التنظيف المناسبة',
                    'التنظيف العميق لكامل المساحة',
                    'معالجة البقع الصعبة بطرق متخصصة',
                    'شطف النسيج لإزالة المواد المتبقية',
                    'تطبيق مواد الحماية والتعقيم',
                    'فحص النتائج والتأكد من النظافة'
                  ],
                  time: '60-120 دقيقة'
                },
                {
                  step: '4',
                  title: 'التجفيف والتشطيب',
                  description: 'تجفيف السجاد واللمسات النهائية للحصول على أفضل النتائج',
                  details: [
                    'استخدام مراوح ومجففات متخصصة',
                    'فرشاة السجاد لاستعادة الملمس',
                    'تطبيق العطور الطبيعية',
                    'فحص شامل للنتائج النهائية',
                    'إعادة ترتيب الأثاث',
                    'تقديم نصائح العناية والصيانة'
                  ],
                  time: '30-60 دقيقة'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 * index }}
                  className="flex gap-6 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-700 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-cyan-900">{step.title}</h3>
                      <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                        <Timer className="w-4 h-4 inline mr-1" />
                        {step.time}
                      </span>
                    </div>
                    <p className="text-gray-700 text-right mb-4 leading-relaxed">{step.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc list-inside text-gray-600 text-right text-sm">
                      {step.details.map((detail, i) => (
                        <li key={i} className="hover:text-cyan-800 transition-colors">{detail}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>


          {/* Why Choose Us Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-900 mb-8 text-right">لماذا تختار بلس كلين لتنظيف السجاد؟</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'خبرة 15 عاماً',
                  description: 'خبرة واسعة في تنظيف جميع أنواع السجاد والموكيت',
                  icon: <Award className="w-8 h-8 text-cyan-600" />,
                  stats: '+5000 عميل راضٍ'
                },
                {
                  title: 'فريق محترف',
                  description: 'فنيون مدربون ومعتمدون في تنظيف السجاد',
                  icon: <Users className="w-8 h-8 text-cyan-600" />,
                  stats: '20+ فني متخصص'
                },
                {
                  title: 'أحدث التقنيات',
                  description: 'معدات متطورة ومواد تنظيف عالمية',
                  icon: <Zap className="w-8 h-8 text-cyan-600" />,
                  stats: 'تقنيات أوروبية'
                },
                {
                  title: 'خدمة سريعة',
                  description: 'نصل إليك خلال ساعتين من الطلب',
                  icon: <Truck className="w-8 h-8 text-cyan-600" />,
                  stats: 'خدمة 24/7'
                },
                {
                  title: 'ضمان الجودة',
                  description: 'ضمان مكتوب على جودة التنظيف',
                  icon: <BadgeCheck className="w-8 h-8 text-cyan-600" />,
                  stats: 'ضمان 3 أشهر'
                },
                {
                  title: 'أسعار تنافسية',
                  description: 'أفضل الأسعار مع جودة عالية',
                  icon: <Star className="w-8 h-8 text-cyan-600" />,
                  stats: 'خصم 20% للعملاء الجدد'
                },
                {
                  title: 'مواد آمنة',
                  description: 'مواد طبيعية آمنة للأطفال والحيوانات',
                  icon: <Shield className="w-8 h-8 text-cyan-600" />,
                  stats: 'معتمدة صحياً'
                },
                {
                  title: 'رضا العملاء',
                  description: 'نسبة رضا عملاء تصل إلى 98%',
                  icon: <ThumbsUp className="w-8 h-8 text-cyan-600" />,
                  stats: '98% رضا العملاء'
                }
              ].map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="p-4 bg-cyan-100 rounded-full w-fit mx-auto mb-4 group-hover:bg-cyan-200 transition-colors">
                    {advantage.icon}
                  </div>
                  <h3 className="text-lg font-bold text-cyan-900 mb-2">{advantage.title}</h3>
                  <p className="text-gray-700 text-sm mb-3 leading-relaxed">{advantage.description}</p>
                  <div className="text-cyan-600 font-bold text-sm">{advantage.stats}</div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Customer Testimonials */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-900 mb-8 text-right">آراء عملائنا الكرام</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'أحمد السالم',
                  location: 'حي الملك فهد',
                  rating: 5,
                  comment: 'خدمة ممتازة! تم تنظيف السجاد الفارسي القديم وأصبح كالجديد تماماً. الفريق محترف جداً والأسعار معقولة.',
                  service: 'تنظيف السجاد الفارسي'
                },
                {
                  name: 'فاطمة الأحمد',
                  location: 'حي النرجس',
                  rating: 5,
                  comment: 'سرعة في الاستجابة ودقة في المواعيد. تم إزالة بقع القهوة الصعبة من السجاد الأبيض بشكل مثالي. أنصح بشدة!',
                  service: 'إزالة البقع الصعبة'
                },
                {
                  name: 'محمد العتيبي',
                  location: 'حي الياسمين',
                  rating: 5,
                  comment: 'أفضل شركة تنظيف سجاد في الرياض! تعاملوا مع سجاد المكتب بحرفية عالية ولم يتم تعطيل العمل نهائياً.',
                  service: 'تنظيف السجاد التجاري'
                },
                {
                  name: 'سارة المطيري',
                  location: 'حي الورود',
                  rating: 5,
                  comment: 'المواد المستخدمة آمنة جداً لأطفالي، والنتيجة رائعة. السجاد أصبح نظيفاً ومعطراً وناعماً كالحرير.',
                  service: 'تنظيف السجاد المنزلي'
                },
                {
                  name: 'خالد الراشد',
                  location: 'حي الملقا',
                  rating: 5,
                  comment: 'تم تنظيف سجاد الصالة الكبيرة في وقت قياسي. الفريق مجهز بأحدث الأدوات والنتائج فاقت التوقعات.',
                  service: 'تنظيف السجاد'
                },
                {
                  name: 'نورا السليم',
                  location: 'حي الصحافة',
                  rating: 5,
                  comment: 'خدمة عملاء ممتازة وصدق في التعامل. تم تنظيف السجاد المتضرر من الماء وإعادته لحالته الطبيعية.',
                  service: 'إصلاح وتجديد السجاد'
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 * index }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-right mb-3 leading-relaxed">{testimonial.comment}</p>
                  <div className="bg-cyan-50 px-3 py-2 rounded-lg">
                    <span className="text-cyan-800 text-sm font-medium">{testimonial.service}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-900 mb-8 text-right">الأسئلة الشائعة حول تنظيف السجاد</h2>
            <div className="space-y-6">
              {[
                {
                  question: 'كم يستغرق تنظيف السجاد؟',
                  answer: 'يعتمد على حجم السجاد ودرجة الاتساخ، لكن عادة يستغرق من ساعة إلى 3 ساعات للسجاد العادي. السجاد الكبير أو شديد الاتساخ قد يحتاج وقتاً إضافياً.'
                },
                {
                  question: 'هل المواد المستخدمة آمنة للأطفال؟',
                  answer: 'نعم، جميع المواد التي نستخدمها طبيعية وآمنة 100% للأطفال والحيوانات الأليفة. نحرص على استخدام مواد معتمدة صحياً وصديقة للبيئة.'
                },
                {
                  question: 'كم يحتاج السجاد للجفاف بعد التنظيف؟',
                  answer: 'مع تقنياتنا المتطورة، يجف السجاد خلال 2-4 ساعات في الظروف العادية. نستخدم مراوح متخصصة لتسريع عملية التجفيف.'
                },
                {
                  question: 'هل يمكنكم إزالة جميع أنواع البقع؟',
                  answer: 'نتمكن من إزالة 95% من البقع بنجاح. البقع الطازجة أسهل في الإزالة، لكن لدينا تقنيات متخصصة للبقع القديمة والصعبة أيضاً.'
                },
                {
                  question: 'ما هو الضمان المقدم على الخدمة؟',
                  answer: 'نقدم ضمان جودة يتراوح من أسبوع إلى 3 أشهر حسب نوع الخدمة. إذا لم تكن راضياً عن النتيجة، نعيد تنظيف السجاد مجاناً.'
                },
                {
                  question: 'هل تقدمون خدمة تنظيف السجاد في المنزل؟',
                  answer: 'نعم، جميع خدماتنا تتم في منزلك. لدينا معدات متنقلة متطورة ولا نحتاج لنقل السجاد خارج المنزل إلا في حالات خاصة.'
                },
                {
                  question: 'كم يكلف تنظيف السجاد؟',
                  answer: 'الأسعار تبدأ من 150 ريال وتعتمد على حجم السجاد ونوعه ودرجة الاتساخ. نقدم تقييم مجاني ونعطيك سعر نهائي قبل البدء.'
                },
                {
                  question: 'هل يمكن تنظيف السجاد الحريري والفارسي؟',
                  answer: 'نعم، لدينا خبراء متخصصون في تنظيف السجاد النفيس والحريري والفارسي. نستخدم تقنيات خاصة تحافظ على النسيج والألوان.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-cyan-900 mb-3 text-right">{faq.question}</h3>
                  <p className="text-gray-700 text-right leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Care Tips Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-900 mb-8 text-right">نصائح العناية بالسجاد بعد التنظيف</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'العناية اليومية',
                  tips: [
                    'تنظيف بالمكنسة الكهربائية يومياً',
                    'إزالة البقع فور حدوثها',
                    'تهوية الغرفة بانتظام',
                    'تجنب المشي بالأحذية على السجاد',
                    'استخدام حصائر عند المداخل'
                  ],
                  icon: '🏠'
                },
                {
                  title: 'العناية الأسبوعية',
                  tips: [
                    'تنظيف عميق بالمكنسة',
                    'تدوير السجاد لتوزيع التآكل',
                    'رش معطر طبيعي خفيف',
                    'فحص وجود تلف أو تآكل',
                    'إزالة الغبار من تحت السجاد'
                  ],
                  icon: '📅'
                },
                {
                  title: 'العناية الشهرية',
                  tips: [
                    'تنظيف عميق بالشامبو الخاص',
                    'فحص شامل للبقع الخفية',
                    'معالجة الحواف والزوايا',
                    'استخدام مواد الحماية',
                    'تقييم الحاجة للتنظيف المهني'
                  ],
                  icon: '🗓️'
                }
              ].map((care, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 * index }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{care.icon}</div>
                    <h3 className="text-xl font-bold text-cyan-900">{care.title}</h3>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 text-right">
                    {care.tips.map((tip, i) => (
                      <li key={i} className="hover:text-cyan-800 transition-colors">{tip}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Emergency Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-900 mb-8 text-right">خدمات الطوارئ لتنظيف السجاد</h2>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-8">
                <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-red-800 mb-4">هل تحتاج تنظيف سجاد طارئ؟</h3>
                <p className="text-gray-700 leading-relaxed">
                  نقدم خدمة تنظيف السجاد الطارئة 24/7 للحالات العاجلة مثل الفيضانات، انسكاب السوائل الكثيفة، أو الحوادث المنزلية.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-red-800 mb-4 text-right">متى تحتاج خدمة الطوارئ؟</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 text-right">
                    <li>انسكاب كميات كبيرة من السوائل</li>
                    <li>تسرب الماء أو الفيضانات</li>
                    <li>بقع من الدم أو القيء</li>
                    <li>انسكاب مواد كيميائية</li>
                    <li>حوادث الحيوانات الأليفة</li>
                    <li>حرائق أو دخان كثيف</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-red-800 mb-4 text-right">مميزات خدمة الطوارئ</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 text-right">
                    <li>استجابة فورية خلال 30 دقيقة</li>
                    <li>فريق متخصص متاح 24/7</li>
                    <li>معدات طوارئ متطورة</li>
                    <li>تقييم سريع للأضرار</li>
                    <li>خطة عمل فورية</li>
                    <li>متابعة ما بعد الخدمة</li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-8">
                <a
                  href="tel:+966592425757"
                  className="bg-red-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-red-700 transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  اتصل الآن للطوارئ: 0592425757
                </a>
              </div>
            </div>
          </section>

          {/* Contact and Booking Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-900 mb-8 text-right">احجز خدمة تنظيف السجاد الآن</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-cyan-900 mb-6 text-right">طرق التواصل</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-cyan-600" />
                    <div>
                      <p className="font-bold text-gray-900">رقم الهاتف</p>
                      <p className="text-gray-700" dir="ltr">+966 56 913 1252</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-cyan-600" />
                    <div>
                      <p className="font-bold text-gray-900">المنطقة المخدومة</p>
                      <p className="text-gray-700">جميع أحياء الرياض والضواحي</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="w-6 h-6 text-cyan-600" />
                    <div>
                      <p className="font-bold text-gray-900">ساعات العمل</p>
                      <p className="text-gray-700">24/7 - طوال أيام الأسبوع</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-cyan-900 mb-6 text-right">خطوات الحجز السريع</h3>
                <div className="space-y-4">
                  {[
                    { step: '1', text: 'اتصل أو أرسل رسالة واتساب' },
                    { step: '2', text: 'احصل على تقييم وسعر مجاني' },
                    { step: '3', text: 'حدد موعد مناسب لك' },
                    { step: '4', text: 'استمتع بسجاد نظيف ومعطر' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {item.step}
                      </div>
                      <p className="text-gray-800 font-medium">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Final CTA */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center bg-gradient-to-r from-cyan-600 to-cyan-800 p-12 rounded-3xl shadow-2xl text-white"
          >
            <h2 className="text-4xl font-bold mb-4">سجادك يستحق العناية الأفضل</h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              انضم إلى آلاف العملاء الراضين واحصل على أفضل خدمة تنظيف سجاد في الرياض
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/966592425757"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-green-600 transition-colors duration-300 inline-flex items-center gap-2"
              >
                واتساب الآن
                <Zap className="w-5 h-5" />
              </a>
              <a
                href="tel:+966592425757"
                className="bg-white text-cyan-700 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center gap-2"
              >
                اتصل الآن
                <Phone className="w-5 h-5" />
                </a>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg opacity-90 mb-2">عرض خاص للعملاء الجدد</p>
              <p className="text-3xl font-bold text-yellow-300">خصم 25% على أول خدمة</p>
            </div>
          </motion.div>

          {/* SEO Content Section */}
          <section className="mb-16 bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-cyan-900 mb-8 text-right">معلومات تفصيلية عن خدمات تنظيف السجاد في الرياض</h2>
            <div className="prose prose-lg max-w-none text-right" dir="rtl">
              <p className="text-gray-800 leading-relaxed mb-6">
                تُعتبر <strong>شركة بلس كلين لتنظيف السجاد في الرياض</strong> من الشركات الرائدة في مجال تنظيف وصيانة السجاد والموكيت في العاصمة السعودية. نقدم خدمات شاملة تشمل <strong>تنظيف السجاد </strong>، <strong>إزالة البقع الصعبة</strong>، <strong>تعقيم وتطهير السجاد</strong>، و<strong>تجديد السجاد القديم</strong> باستخدام أحدث التقنيات العالمية والمواد الآمنة المعتمدة صحياً.
              </p>
              
              <p className="text-gray-800 leading-relaxed mb-6">
                نخدم جميع أحياء الرياض بما في ذلك <strong>حي الملك فهد، حي النرجس، حي الياسمين، حي الورود، حي الملقا، حي الصحافة، حي المحمدية، حي الروضة، حي العليا، حي الخليج</strong> وغيرها من الأحياء الشمالية والجنوبية والشرقية والغربية. فريقنا المتخصص مدرب على التعامل مع جميع أنواع السجاد بما في ذلك <strong>السجاد الفارسي، السجاد الشرقي، السجاد الحريري، الموكيت الصوفي، والسجاد الصناعي</strong>.
              </p>

              <h3 className="text-2xl font-bold text-cyan-900 mb-4">تقنيات التنظيف المتطورة</h3>
              <p className="text-gray-800 leading-relaxed mb-6">
                نستخدم في <strong>بلس كلين</strong> أحدث تقنيات تنظيف السجاد العالمية، بما في ذلك <strong>التنظيف الساخن </strong> باستخدام ماكينات ألمانية وإيطالية متطورة تعمل بضغط عالي ودرجة حرارة تصل إلى 180 درجة مئوية. هذه التقنية فعالة في القضاء على الجراثيم والبكتيريا بنسبة 99.9% وإزالة أصعب البقع دون الإضرار بنسيج السجاد أو ألوانه.
              </p>

              <h3 className="text-2xl font-bold text-cyan-900 mb-4">خدمات متخصصة لكل نوع سجاد</h3>
              <p className="text-gray-800 leading-relaxed mb-6">
                نقدم خدمات متخصصة لكل نوع من أنواع السجاد. فخدمة <strong>تنظيف السجاد الفارسي</strong> تتطلب عناية خاصة ومواد تنظيف مخصصة للحفاظ على النسيج الحريري والألوان الطبيعية. كما نتخصص في <strong>تنظيف السجاد الصوفي</strong> باستخدام تقنيات خاصة تحافظ على نعومة الصوف وملمسه الطبيعي. بالنسبة للموكيت والسجاد الصناعي، نستخدم تقنيات التنظيف القوية التي تزيل الأوساخ العميقة وتعيد الحيوية للنسيج.
              </p>

              <h3 className="text-2xl font-bold text-cyan-900 mb-4">إزالة البقع الصعبة والمستعصية</h3>
              <p className="text-gray-800 leading-relaxed mb-6">
                يتخصص فريقنا في <strong>إزالة البقع الصعبة</strong> من السجاد بجميع أنواعها. سواء كانت <strong>بقع القهوة والشاي، بقع الدم، بقع الحبر، بقع الزيت والشحوم، أو بقع الطعام المختلفة</strong>، لدينا المواد والتقنيات المناسبة لكل نوع بقعة. نستخدم مواد متخصصة آمنة ومعتمدة عالمياً لضمان إزالة البقعة دون ترك أي أثر أو تلف في النسيج.
              </p>

              <h3 className="text-2xl font-bold text-cyan-900 mb-4">تعقيم وتطهير شامل</h3>
              <p className="text-gray-800 leading-relaxed mb-6">
                نقدم خدمة <strong>تعقيم وتطهير السجاد</strong> باستخدام تقنيات متطورة تشمل العلاج بالأوزون الطبيعي المعقم. هذه الخدمة ضرورية خاصة للمنازل التي بها أطفال أو كبار سن أو أشخاص يعانون من الحساسية. نتمكن من القضاء على <strong>العث، البكتيريا، الفيروسات، والفطريات</strong> التي قد تتواجد في أعماق نسيج السجاد وتسبب مشاكل صحية.
              </p>

              <h3 className="text-2xl font-bold text-cyan-900 mb-4">خدمات الشركات والمؤسسات</h3>
              <p className="text-gray-800 leading-relaxed mb-6">
                نقدم خدمات متخصصة للشركات والمؤسسات في الرياض تشمل <strong>تنظيف سجاد المكاتب، الفنادق، المطاعم، القاعات، والمؤتمرات</strong>. نعمل وفق جداول زمنية مرنة تتناسب مع طبيعة العمل ولا تعطل الأنشطة التجارية. كما نقدم عقود صيانة دورية للشركات الكبيرة مع خصومات خاصة وخدمة أولوية في المواعيد.
              </p>

              <h3 className="text-2xl font-bold text-cyan-900 mb-4">ضمان الجودة والرضا</h3>
              <p className="text-gray-800 leading-relaxed mb-6">
                نحن في <strong>بلس كلين</strong> نضمن جودة خدماتنا بضمان مكتوب يتراوح من أسبوع إلى ثلاثة أشهر حسب نوع الخدمة المقدمة. في حالة عدم رضاكم الكامل عن النتيجة، نلتزم بإعادة تنظيف السجاد مجاناً أو استرداد المبلغ المدفوع. نسبة رضا عملائنا تتجاوز 98% وهذا ما يجعلنا الخيار الأول لتنظيف السجاد في الرياض.
              </p>

              <h3 className="text-2xl font-bold text-cyan-900 mb-4">أسعار تنافسية وعروض مميزة</h3>
              <p className="text-gray-800 leading-relaxed mb-6">
                نقدم <strong>أسعار تنظيف السجاد</strong> الأكثر تنافسية في السوق السعودي مع الحفاظ على أعلى معايير الجودة. تبدأ أسعارنا من 150 ريال سعودي للسجاد العادي، ونقدم باقات متنوعة تناسب جميع الاحتياجات والميزانيات. كما نقدم عروض خاصة للعملاء الجدد وخصومات للعقود السنوية والخدمات المتكررة.
              </p>

              <h3 className="text-2xl font-bold text-cyan-900 mb-4">خدمة الطوارئ 24/7</h3>
              <p className="text-gray-800 leading-relaxed mb-6">
                نوفر <strong>خدمة تنظيف السجاد الطارئة</strong> على مدار 24 ساعة طوال أيام الأسبوع للحالات العاجلة مثل الفيضانات، انسكاب كميات كبيرة من السوائل، أو الحوادث المنزلية. فريق الطوارئ لدينا مجهز بمعدات متنقلة ويمكنه الوصول إلى موقعك خلال 30 دقيقة من استلام الطلب في حالات الطوارئ.
              </p>
            </div>
          </section>

          {/* Keywords Section for SEO */}
          <section className="mb-16 bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-cyan-900 mb-6 text-right">خدماتنا تشمل</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
              {[
                'تنظيف السجاد بالرياض', 'شركة تنظيف سجاد الرياض', 'تنظيف السجاد ',
                'إزالة بقع السجاد', 'تنظيف الموكيت', 'تنظيف السجاد الفارسي',
                'تنظيف السجاد الشرقي', 'تعقيم السجاد', 'تنظيف سجاد المنازل',
                'تنظيف سجاد المكاتب', 'غسيل السجاد', 'تجفيف السجاد',
                'إصلاح السجاد', 'تجديد السجاد', 'حماية السجاد من البقع',
                'تنظيف السجاد الحريري', 'تنظيف السجاد الصوفي', 'خدمة تنظيف سجاد منزلي',
                'شركة غسيل سجاد', 'تنظيف سجاد بالمنزل', 'أسعار تنظيف السجاد',
                'تنظيف سجاد رخيص', 'تنظيف سجاد سريع', 'خدمة تنظيف سجاد',
                'محلات تنظيف السجاد', 'ماكينة تنظيف السجاد', 'مواد تنظيف السجاد',
                'طريقة تنظيف السجاد', 'نصائح تنظيف السجاد', 'العناية بالسجاد',
                'صيانة السجاد', 'حفظ السجاد', 'تخزين السجاد'
              ].map((keyword, index) => (
                <div key={index} className="bg-cyan-50 text-cyan-800 px-3 py-2 rounded-lg text-center hover:bg-cyan-100 transition-colors">
                  {keyword}
                </div>
              ))}
            </div>
          </section>

          {/* Schema.org Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'LocalBusiness',
                'name': 'بلس كلين - تنظيف السجاد في الرياض',
                'image': 'https://www.cleanplusteam.com/images/carpet-cleaning-riyadh.jpg',
                'description': 'شركة متخصصة في تنظيف السجاد والموكيت في الرياض باستخدام أحدث التقنيات والمواد الآمنة. خدمة تنظيف السجاد  إزالة البقع، التعقيم والتطهير.',
                'url': 'https://www.cleanplusteam.com/services/carpet-cleaning',
                'telephone': '+966592425757',
                'address': {
                  '@type': 'PostalAddress',
                  'streetAddress': 'الرياض',
                  'addressLocality': 'الرياض',
                  'addressRegion': 'الرياض',
                  'addressCountry': 'SA',
                },
                'geo': {
                  '@type': 'GeoCoordinates',
                  'latitude': 24.7136,
                  'longitude': 46.6753,
                },
                'openingHoursSpecification': {
                  '@type': 'OpeningHoursSpecification',
                  'dayOfWeek': [
                    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
                  ],
                  'opens': '00:00',
                  'closes': '23:59',
                },
                'serviceArea': {
                  '@type': 'City',
                  'name': 'الرياض',
                },
                'hasOfferCatalog': {
                  '@type': 'OfferCatalog',
                  'name': 'خدمات تنظيف السجاد',
                  'itemListElement': [
                    {
                      '@type': 'Offer',
                      'itemOffered': {
                        '@type': 'Service',
                        'name': 'تنظيف السجاد ',
                        'description': 'تنظيف عميق للسجاد  '
                      }
                    },
                    {
                      '@type': 'Offer',
                      'itemOffered': {
                        '@type': 'Service',
                        'name': 'إزالة البقع الصعبة',
                        'description': 'معالجة وإزالة جميع أنواع البقع من السجاد'
                      }
                    },
                    {
                      '@type': 'Offer',
                      'itemOffered': {
                        '@type': 'Service',
                        'name': 'تعقيم السجاد',
                        'description': 'تعقيم وتطهير شامل للسجاد'
                      }
                    }
                  ]
                },
                'aggregateRating': {
                  '@type': 'AggregateRating',
                  'ratingValue': '4.9',
                  'reviewCount': '247',
                  'bestRating': '5',
                  'worstRating': '1'
                },
                'priceRange': '150 - 500 ريال سعودي',
                'paymentAccepted': ['Cash', 'Credit Card', 'Bank Transfer'],
                'currenciesAccepted': 'SAR'
              }),
            }}
          />

          {/* Additional Schema for FAQPage */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                'mainEntity': [
                  {
                    '@type': 'Question',
                    'name': 'كم يستغرق تنظيف السجاد؟',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'يعتمد على حجم السجاد ودرجة الاتساخ، لكن عادة يستغرق من ساعة إلى 3 ساعات للسجاد العادي.'
                    }
                  },
                  {
                    '@type': 'Question',
                    'name': 'هل المواد المستخدمة آمنة للأطفال؟',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'نعم، جميع المواد التي نستخدمها طبيعية وآمنة 100% للأطفال والحيوانات الأليفة.'
                    }
                  },
                  {
                    '@type': 'Question',
                    'name': 'كم يحتاج السجاد للجفاف بعد التنظيف؟',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'مع تقنياتنا المتطورة، يجف السجاد خلال 2-4 ساعات في الظروف العادية.'
                    }
                  }
                ]
              }),
            }}
          />

          {/* Service Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Service',
                'serviceType': 'تنظيف السجاد والموكيت',
                'provider': {
                  '@type': 'Organization',
                  'name': 'بلس كلين',
                  'url': 'https://www.cleanplusteam.com',
                  'telephone': '+966592425757',
                  'address': {
                    '@type': 'PostalAddress',
                    'addressLocality': 'الرياض',
                    'addressCountry': 'SA',
                  },
                },
                'areaServed': [
                  {
                    '@type': 'City',
                    'name': 'الرياض',
                  },
                ],
                'hasOfferCatalog': {
                  '@type': 'OfferCatalog',
                  'name': 'خدمات تنظيف السجاد في الرياض',
                  'itemListElement': [
                    {
                      '@type': 'Offer',
                      'itemOffered': {
                        '@type': 'Service',
                        'name': 'تنظيف السجاد  في الرياض',
                      },
                      'priceSpecification': {
                        '@type': 'PriceSpecification',
                        'price': '150',
                        'priceCurrency': 'SAR',
                      },
                    },
                  ],
                },
                'review': [
                  {
                    '@type': 'Review',
                    'reviewRating': {
                      '@type': 'Rating',
                      'ratingValue': '5',
                      'bestRating': '5',
                    },
                    'author': {
                      '@type': 'Person',
                      'name': 'أحمد السالم',
                    },
                    'reviewBody': 'خدمة ممتازة! تم تنظيف السجاد الفارسي القديم وأصبح كالجديد تماماً.',
                  },
                ],
              }),
            }}
          />
        </div>
      </motion.div>
      <Footer />
      <Script id="schema-org" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          'serviceType': 'تنظيف السجاد',
          'provider': {
            '@type': 'Organization',
            'name': 'بلس كلين',
            'url': 'https://www.cleanplusteam.com',
            'telephone': '+966592425757',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'الرياض',
              'addressCountry': 'SA',
            },
          },
          'areaServed': {
            '@type': 'City',
            'name': 'الرياض',
          },
          'description': 'خدمات تنظيف السجاد في الرياض بأعلى معايير الجودة والاحترافية.',
        })}
      </Script>
    </>
  )
}

export default CarpetCleaningPage;