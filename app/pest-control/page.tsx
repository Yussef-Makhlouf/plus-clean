'use client';
import { motion } from 'framer-motion';
import SectionHeader from '../../components/SectionHeader';
import { Zap,  Users, Home, Building, Factory, Calendar, Phone, MapPin, Gauge,  BookOpen, Shield,  Mail, Bug,  Wind, Flame, TreePine, Stethoscope, UserX, Siren, FlaskConical, Crosshair, HomeIcon, Clock } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const CleaningServicesPage = () => {
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
          title="خدمات النظافة والتعقيم ومكافحة الحشرات في الرياض - شركة بلس كلين"
          subtitle="الشركة الرائدة في مجال خدمات التنظيف والتعقيم ومكافحة الحشرات في المملكة العربية السعودية. نقدم حلول شاملة للمنازل والمكاتب والمنشآت التجارية والصناعية بأحدث التقنيات وأعلى معايير الجودة والسلامة."
          className="text-right mb-12 pt-12"
        />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-xl text-gray-800 mb-6 text-right leading-relaxed">
            تعتبر **شركة بلس كلين** أحد أهم الشركات المتخصصة في مجال خدمات النظافة الشاملة والتعقيم المتقدم ومكافحة الحشرات في <a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">الرياض</a> والمملكة العربية السعودية. نحن نفخر بخبرتنا الطويلة في تقديم خدمات متميزة تلبي احتياجات عملائنا المتنوعة في <a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">الرياض</a>، <a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">الدمام</a>، <a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">مكة المكرمة</a>، <a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">المدينة المنورة</a>، وجميع أنحاء المملكة.
          </p>
          <p className="text-lg text-gray-700 text-right leading-relaxed">
            مع التزامنا بتطبيق أحدث المعايير العالمية في مجال النظافة والتعقيم، نقدم خدمات شاملة تشمل تنظيف المنازل والفلل والمكاتب والمنشآت التجارية، إلى جانب خدمات التعقيم المتقدمة ومكافحة جميع أنواع الحشرات والقوارض. نحن نعمل بفريق من الخبراء المدربين على أعلى مستوى، مستخدمين أحدث المعدات والتقنيات الصديقة للبيئة لضمان بيئة نظيفة وصحية لعملائنا.
          </p>
        </motion.div>

        {/* Main Services Overview */}
        <section className="mb-16 w-full">
          <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-right">خدماتنا الرئيسية المتكاملة</h2>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Zap className="w-12 h-12 text-cyan-600" />
              <h3 className="text-2xl font-bold text-cyan-900">خدمات النظافة والتعقيم ومكافحة الحشرات</h3>
            </div>
            <p className="text-gray-700 text-right mb-6 text-lg">
              نقدم خدمات متكاملة للمنازل والفلل تشمل التنظيف الشامل والتعقيم ومكافحة الحشرات بأحدث التقنيات والمعدات المتطورة. نحن نضمن لك بيئة نظيفة وصحية مع الحفاظ على أعلى معايير الجودة والسلامة.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-cyan-800 mb-3 text-right">خدمات التنظيف</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 text-right">
                    <li>تنظيف شامل للمنزل بجميع غرفه</li>
                    <li>تنظيف المطابخ والحمامات</li>
                    <li>تنظيف السجاد والموكيت</li>
                    <li>تنظيف النوافذ والواجهات</li>
                    <li>تنظيف الحدائق والمسابح</li>
                    <li>خدمة تنظيف دورية أسبوعية</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-cyan-800 mb-3 text-right">خدمات التعقيم</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 text-right">
                    <li>تعقيم جميع الغرف والأسطح</li>
                    <li>تعقيم المطابخ والحمامات</li>
                    <li>تعقيم الأثاث والمفروشات</li>
                    <li>تعقيم الهواء والجو</li>
                    <li>تعقيم دوري شهري</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-cyan-800 mb-3 text-right">خدمات مكافحة الحشرات</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 text-right">
                    <li>مكافحة الصراصير والنمل</li>
                    <li>مكافحة البعوض والذباب</li>
                    <li>مكافحة الفئران والقوارض</li>
                    <li>مكافحة العناكب</li>
                    <li>مكافحة دورية كل 3 أشهر</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-cyan-800 mb-3 text-right">مميزات خدماتنا</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 text-right">
                    <li>فريق مدرب على أعلى مستوى</li>
                    <li>معدات وتقنيات متطورة</li>
                    <li>مواد آمنة وصديقة للبيئة</li>
                    <li>خدمة 24/7 للطوارئ</li>
                    <li>أسعار تنافسية</li>
                    <li>ضمان جودة الخدمة</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/50 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-cyan-800 mb-4">تواصل معنا الآن</h4>
                  <p className="text-cyan-700 font-semibold text-lg mb-2" dir='ltr'>+966569131252</p>
                  <p className="text-gray-600">خدمة 24/7 في جميع أحياء الرياض</p>
                </div>
                
                <div className="text-center">
                  <h4 className="text-xl font-bold text-cyan-800 mb-4">طلب خدمة سريع</h4>
                  <p className="text-gray-700 mb-4">احصل على عرض سعر مجاني خلال 24 ساعة</p>
                  <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg transition-colors">
                    اطلب الآن
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Detailed Cleaning Services */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-right">تفاصيل خدمات التنظيف المتخصصة</h2>
          
          {/* Residential Cleaning */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-cyan-800 mb-6 text-right">تنظيف المنازل والفلل السكنية</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Home className="w-8 h-8 text-cyan-600" />
                  <h4 className="text-xl font-bold text-cyan-900">التنظيف الداخلي الشامل</h4>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-right">
                  <li>تنظيف وتلميع الأرضيات بجميع أنواعها (سيراميك، رخام، باركيه، موكيت)</li>
                  <li>تنظيف الجدران والأسقف وإزالة البقع والأوساخ</li>
                  <li>تنظيف النوافذ والأبواب من الداخل والخارج</li>
                  <li>تنظيف وتعقيم دورات المياه والحمامات</li>
                  <li>تنظيف المطابخ وتلميع الأجهزة الكهربائية</li>
                  <li>تنظيف الأثاث والمفروشات بالبخار</li>
                  <li>تنظيف الستائر والمراتب والوسائد</li>
                  <li>إزالة الغبار من جميع الأسطح والزوايا</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <TreePine className="w-8 h-8 text-green-600" />
                  <h4 className="text-xl font-bold text-green-900">تنظيف الحدائق والمساحات الخارجية</h4>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-right">
                  <li>تنظيف وغسيل الواجهات الخارجية للمباني</li>
                  <li>تنظيف المداخل والممرات والدرج</li>
                  <li>تنظيف أحواض السباحة وصيانتها</li>
                  <li>تنظيف المظلات والبرجولات</li>
                  <li>تنظيف أثاث الحدائق الخارجي</li>
                  <li>تنظيف مواقف السيارات والجراجات</li>
                  <li>تنظيف أنظمة الري والصرف</li>
                  <li>إزالة الأوراق المتساقطة والأوساخ المتراكمة</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Commercial Cleaning */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-cyan-800 mb-6 text-right">تنظيف المكاتب والمباني التجارية</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Building className="w-8 h-8 text-blue-600" />
                  <h4 className="text-lg font-bold text-blue-900">المكاتب الإدارية</h4>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-right text-sm">
                  <li>تنظيف مكاتب الموظفين والمديرين</li>
                  <li>تنظيف قاعات الاجتماعات والمؤتمرات</li>
                  <li>تنظيف مناطق الاستقبال والانتظار</li>
                  <li>تنظيف الأرشيف ومناطق التخزين</li>
                  <li>تنظيف أجهزة الكمبيوتر والمعدات</li>
                  <li>تنظيف أنظمة الإنارة والتكييف</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                  <h4 className="text-lg font-bold text-purple-900">المرافق العامة</h4>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-right text-sm">
                  <li>تنظيف الردهات والممرات الرئيسية</li>
                  <li>تنظيف المصاعد والسلالم</li>
                  <li>تنظيف مراحيض الموظفين والزوار</li>
                  <li>تنظيف الكافتيريا ومناطق تناول الطعام</li>
                  <li>تنظيف أماكن الصلاة</li>
                  <li>تنظيف مواقف السيارات</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Factory className="w-8 h-8 text-gray-600" />
                  <h4 className="text-lg font-bold text-gray-900">المناطق المتخصصة</h4>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-right text-sm">
                  <li>تنظيف غرف الخوادم والمعدات</li>
                  <li>تنظيف المختبرات والمعامل</li>
                  <li>تنظيف العيادات الطبية</li>
                  <li>تنظيف المطابخ التجارية</li>
                  <li>تنظيف صالات العرض</li>
                  <li>تنظيف المستودعات والمخازن</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Specialized Cleaning */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-cyan-800 mb-6 text-right">خدمات التنظيف المتخصصة</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Stethoscope className="w-8 h-8 text-cyan-600" />
                  <h4 className="text-xl font-bold text-cyan-900">تنظيف المنشآت الطبية</h4>
                </div>
                <p className="text-gray-700 text-right mb-4">
                  نقدم خدمات تنظيف متخصصة للمستشفيات والعيادات والمراكز الطبية وفقاً لأعلى المعايير الصحية العالمية.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-right">
                  <li>تنظيف غرف العمليات والعناية المركزة</li>
                  <li>تنظيف وتعقيم المعدات الطبية</li>
                  <li>إدارة النفايات الطبية الخطرة</li>
                  <li>تنظيف المختبرات الطبية</li>
                  <li>تنظيف صيدليات المستشفيات</li>
                  <li>تنظيف أجنحة المرضى</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <BookOpen className="w-8 h-8 text-green-600" />
                  <h4 className="text-xl font-bold text-green-900">تنظيف المؤسسات التعليمية</h4>
                </div>
                <p className="text-gray-700 text-right mb-4">
                  خدمات تنظيف شاملة للمدارس والجامعات والمعاهد التعليمية لتوفير بيئة تعليمية صحية ونظيفة.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-right">
                  <li>تنظيف الفصول الدراسية والمختبرات</li>
                  <li>تنظيف المكتبات وقاعات المحاضرات</li>
                  <li>تنظيف الكافتيريا والمقاصف</li>
                  <li>تنظيف الملاعب والصالات الرياضية</li>
                  <li>تنظيف مراحيض الطلاب والمعلمين</li>
                  <li>تنظيف مكاتب الإدارة والمعلمين</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Advanced Disinfection Services */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-right">خدمات التعقيم والتطهير المتقدمة</h2>
          
          <div className="mb-8">
            <p className="text-lg text-gray-700 text-right leading-relaxed mb-6">
              في ظل التحديات الصحية المعاصرة، تقدم شركة بلس كلين خدمات تعقيم متطورة تستخدم أحدث التقنيات العالمية للقضاء على الفيروسات والبكتيريا والجراثيم. نحن نلتزم بأعلى معايير السلامة والجودة في جميع عمليات التعقيم التي نقوم بها في مختلف المدن السعودية بما في ذلك <a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">الخبر</a>، <a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">القطيف</a>، <a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">الجبيل</a>، و<a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">الخرج</a>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <HomeIcon className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-900">خدمات تنظيف المنازل في الرياض</h3>
              </div>
              <p className="text-gray-700 text-right mb-4">
                خدمات تنظيف متكاملة للمنازل والفلل في جميع أحياء الرياض بأحدث المعدات والتقنيات المتطورة.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-right">
                <li>تنظيف شامل للمنازل والفلل</li>
                <li>تنظيف المطابخ والحمامات</li>
                <li>تنظيف السجاد والموكيت</li>
                <li>تنظيف النوافذ والواجهات</li>
                <li>تنظيف الحدائق والمسابح</li>
                <li>خدمة 24/7 في جميع أحياء الرياض</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <Building className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-bold text-purple-900">تنظيف المباني التجارية في الرياض</h3>
              </div>
              <p className="text-gray-700 text-right mb-4">
                خدمات تنظيف متخصصة للمباني التجارية والأبراج في الرياض بأحدث التقنيات والمعدات المتطورة.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-right">
                <li>تنظيف الواجهات الزجاجية والكلادينج</li>
                <li>تنظيف الممرات والسلالم المتحركة</li>
                <li>تنظيف المصاعد والحمامات العامة</li>
                <li>تنظيف مواقف السيارات والمداخل</li>
                <li>تنظيف المكاتب والمساحات المشتركة</li>
                <li>خدمة 24/7 للطوارئ</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <Wind className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold text-green-900">التعقيم بتقنية الأوزون</h3>
              </div>
              <p className="text-gray-700 text-right mb-4">
                استخدام غاز الأوزون الطبيعي كمطهر قوي وفعال ضد جميع أنواع الملوثات البيولوجية.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-right">
                <li>مطهر طبيعي وقوي</li>
                <li>يتحلل إلى أكسجين نقي</li>
                <li>فعال ضد الروائح الكريهة</li>
                <li>آمن بيئياً</li>
                <li>يصل إلى الأماكن الصعبة</li>
                <li>مناسب للتعقيم الشامل</li>
              </ul>
            </motion.div>
          </div>

          {/* Specialized Disinfection Applications */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-cyan-800 mb-6 text-right">تطبيقات التعقيم المتخصصة</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <FlaskConical className="w-8 h-8 text-green-600" />
                  <h4 className="text-xl font-bold text-green-900">تعقيم خزانات المياه</h4>
                </div>
                <p className="text-gray-700 text-right mb-4">
                  خدمات متخصصة لتنظيف وتعقيم خزانات المياه لضمان سلامة مياه الشرب.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-right">
                  <li>تفريغ وتنظيف الخزانات بالكامل</li>
                  <li>إزالة الرواسب والطحالب</li>
                  <li>تعقيم بمواد آمنة معتمدة</li>
                  <li>فحص جودة المياه مخبرياً</li>
                  <li>إصلاح التسريبات والشقوق</li>
                  <li>تركيب أنظمة الفلترة</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comprehensive Pest Control Services */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-right">خدمات مكافحة الحشرات والقوارض المتكاملة</h2>
          
          <div className="mb-8">
            <p className="text-lg text-gray-700 text-right leading-relaxed mb-6">
              تواجه المنازل والمؤسسات في المملكة العربية السعودية تحديات مستمرة مع مختلف أنواع الحشرات والقوارض. لهذا السبب، تقدم شركة بلس كلين حلولاً متكاملة وفعالة لمكافحة جميع أنواع الآفات باستخدام أحدث التقنيات والمبيدات الآمنة والمعتمدة. نحن نخدم جميع المناطق في المملكة بما في ذلك <a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">الطائف</a>، <a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">أبها</a>، <a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">تبوك</a>، و<a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">حائل</a>.
            </p>
          </div>

          {/* Types of Pests */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-cyan-800 mb-6 text-right">أنواع الآفات التي نكافحها</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Bug className="w-8 h-8 text-red-600" />
                  <h4 className="text-lg font-bold text-red-900">الحشرات الزاحفة</h4>
                </div>
                <ul className="list-disc list-inside text-red-700 space-y-1 text-right text-sm">
                  <li>الصراصير بجميع أنواعها</li>
                  <li>النمل الأسود والأحمر</li>
                  <li>النمل الأبيض المدمر</li>
                  <li>العناكب والعقارب</li>
                  <li>البق والقمل</li>
                  <li>الخنافس والسوس</li>
                  <li>اليرقات والديدان</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Wind className="w-8 h-8 text-blue-600" />
                  <h4 className="text-lg font-bold text-blue-900">الحشرات الطائرة</h4>
                </div>
                <ul className="list-disc list-inside text-blue-700 space-y-1 text-right text-sm">
                  <li>البعوض والناموس</li>
                  <li>الذباب المنزلي</li>
                  <li>الفراشات الضارة</li>
                  <li>النحل والدبابير</li>
                  <li>الصراصير الطائرة</li>
                  <li>الخنافس الطائرة</li>
                  <li>الحشرات الموسمية</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-gray-50 to-slate-50 p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <UserX className="w-8 h-8 text-gray-600" />
                  <h4 className="text-lg font-bold text-gray-900">القوارض</h4>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-right text-sm">
                  <li>الفئران المنزلية</li>
                  <li>الجرذان الكبيرة</li>
                  <li>الفئران الحقلية</li>
                  <li>السناجب الضارة</li>
                  <li>الخفافيش</li>
                  <li>الأرانب البرية</li>
                  <li>القوارض الصحراوية</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Siren className="w-8 h-8 text-yellow-600" />
                  <h4 className="text-lg font-bold text-yellow-900">الآفات الخطيرة</h4>
                </div>
                <ul className="list-disc list-inside text-yellow-700 space-y-1 text-right text-sm">
                  <li>الثعابين السامة</li>
                  <li>العقارب القاتلة</li>
                  <li>الأفاعي المنزلية</li>
                  <li>السحالي الكبيرة</li>
                  <li>الحيوانات الضالة</li>
                  <li>الطيور الضارة</li>
                  <li>الحشرات السامة</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Pest Control Methods */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-cyan-800 mb-6 text-right">طرق المكافحة المتقدمة</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Crosshair className="w-8 h-8 text-cyan-600" />
                  <h4 className="text-xl font-bold text-cyan-900">المكافحة المتكاملة</h4>
                </div>
                <p className="text-gray-700 text-right mb-4">
                  نهج شامل يجمع بين عدة طرق لضمان القضاء التام على الآفات ومنع عودتها.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-right">
                  <li>الفحص الدقيق لتحديد نوع الآفة</li>
                  <li>تحديد مصادر الإصابة ونقاط الدخول</li>
                  <li>وضع خطة علاج مخصصة</li>
                  <li>تطبيق العلاج بطرق متعددة</li>
                  <li>المتابعة والمراقبة المستمرة</li>
                  <li>الوقاية طويلة المدى</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Flame className="w-8 h-8 text-orange-600" />
                  <h4 className="text-xl font-bold text-orange-900">المكافحة الحرارية</h4>
                </div>
                <p className="text-gray-700 text-right mb-4">
                  استخدام الحرارة العالية للقضاء على الحشرات وبيوضها بطريقة طبيعية وآمنة.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-right">
                  <li>فعالة ضد جميع مراحل نمو الحشرات</li>
                  <li>بدون استخدام مبيدات كيميائية</li>
                  <li>آمنة للأطفال والحيوانات الأليفة</li>
                  <li>تصل إلى الأماكن الصعبة</li>
                  <li>لا تترك بقايا أو روائح</li>
                  <li>نتائج فورية ومضمونة</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <FlaskConical className="w-8 h-8 text-green-600" />
                  <h4 className="text-xl font-bold text-green-900">المبيدات الحديثة</h4>
                </div>
                <p className="text-gray-700 text-right mb-4">
                  استخدام أحدث المبيدات المعتمدة دولياً والآمنة على الصحة العامة.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-right">
                  <li>مبيدات معتمدة من وزارة الصحة</li>
                  <li>تركيبات متطورة وفعالة</li>
                  <li>آمنة على البيئة والإنسان</li>
                  <li>مقاومة للعوامل الجوية</li>
                  <li>تأثير طويل المدى</li>
                  <li>عديمة الرائحة</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Preventive Measures */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-cyan-800 mb-6 text-right">برامج الوقاية والمكافحة المستمرة</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                  <h4 className="text-xl font-bold text-green-900">البرنامج الوقائي</h4>
                </div>
                <p className="text-gray-700 text-right mb-4">
                  برنامج مصمم لمنع دخول الحشرات والقوارض إلى المبنى من الأساس.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-right">
                  <li>فحص دوري شامل للمبنى</li>
                  <li>سد الشقوق ونقاط الدخول</li>
                  <li>تركيب حواجز وقائية</li>
                  <li>رش وقائي بمواد آمنة</li>
                  <li>تنظيف مناطق الخطر</li>
                  <li>إزالة مصادر الجذب</li>
                  <li>متابعة دورية مجانية</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Calendar className="w-8 h-8 text-blue-600" />
                  <h4 className="text-xl font-bold text-blue-900">الصيانة الدورية</h4>
                </div>
                <p className="text-gray-700 text-right mb-4">
                  جدولة زيارات منتظمة للمحافظة على خلو المكان من الآفات على مدار السنة.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-right">
                  <li>زيارات شهرية أو ربع سنوية</li>
                  <li>تقييم مستمر لحالة المكان</li>
                  <li>تجديد العلاج حسب الحاجة</li>
                  <li>تقارير مفصلة عن كل زيارة</li>
                  <li>خدمة طوارئ على مدار الساعة</li>
                  <li>ضمان شامل على الخدمة</li>
                  <li>خصومات خاصة للعملاء الدائمين</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Advanced Technologies and Equipment */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-right">التقنيات والمعدات المتطورة</h2>
          
          <div className="mb-8">
            <p className="text-lg text-gray-700 text-right leading-relaxed mb-6">
              تستثمر شركة بلس كلين في أحدث التقنيات والمعدات المتطورة لضمان تقديم أفضل خدمات التنظيف والتعقيم ومكافحة الحشرات. نحن نواكب التطورات التكنولوجية العالمية ونطبق أحدث الابتكارات في مجال النظافة والصحة العامة. تصل خدماتنا إلى جميع المناطق الحضرية والريفية في المملكة بما في ذلك <a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">بريدة</a>، <a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">الأحساء</a>، <a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">جازان</a>، و<a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">نجران</a>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <Zap className="w-8 h-8 text-cyan-600" />
                <h3 className="text-lg font-bold text-cyan-900">معدات التنظيف</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-right text-sm">
                <li>آلات تنظيف بالبخار عالي الضغط</li>
                <li>مكانس كهربائية صناعية</li>
                <li>آلات تنظيف السجاد والموكيت</li>
                <li>معدات تلميع الأرضيات</li>
                <li>أدوات تنظيف النوافذ الاحترافية</li>
                <li>معدات تنظيف الواجهات العالية</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <HomeIcon className="w-8 h-8 text-green-600" />
                <h3 className="text-lg font-bold text-green-900">أجهزة التعقيم</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-right text-sm">
                <li>أجهزة الرش الكهروستاتيكي</li>
                <li>مولدات الأوزون المتقدمة</li>
                <li>مصابيح UV-C للتعقيم</li>
                <li>آلات التعقيم بالبخار</li>
                <li>أجهزة التعقيم بالضباب الجاف</li>
                <li>معدات التعقيم المحمولة</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <Bug className="w-8 h-8 text-red-600" />
                <h3 className="text-lg font-bold text-red-900">معدات مكافحة الحشرات</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-right text-sm">
                <li>رشاشات متخصصة للمبيدات</li>
                <li>أجهزة التبخير والتدخين</li>
                <li>مصائد ذكية للقوارض</li>
                <li>أجهزة الموجات فوق الصوتية</li>
                <li>معدات المعالجة الحرارية</li>
                <li>كاميرات فحص الحشرات</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <Gauge className="w-8 h-8 text-purple-600" />
                <h3 className="text-lg font-bold text-purple-900">أدوات القياس والفحص</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-right text-sm">
                <li>مقاييس جودة الهواء</li>
                <li>أجهزة قياس الرطوبة</li>
                <li>مقاييس مستوى التعقيم</li>
                <li>كاشفات الحشرات المخفية</li>
                <li>أجهزة قياس المبيدات</li>
                <li>معدات الفحص المخبري</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Service Areas and Coverage */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-right">مناطق خدماتنا في المملكة العربية السعودية</h2>
          
          <div className="mb-8">
            <p className="text-lg text-gray-700 text-right leading-relaxed mb-6">
              تغطي خدمات شركة بلس كلين جميع مناطق المملكة العربية السعودية، حيث نقدم خدماتنا المتميزة في التنظيف والتعقيم ومكافحة الحشرات عبر فرق متخصصة ومدربة تدريباً عالياً. نحن نفخر بوصولنا إلى جميع المدن الكبرى والصغرى، والأحياء السكنية والتجارية والصناعية في كافة أنحاء المملكة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-8 h-8 text-cyan-600" />
                <h3 className="text-xl font-bold text-cyan-900">المنطقة الوسطى</h3>
              </div>
              <p className="text-gray-700 text-right mb-4">
                خدمات شاملة في قلب المملكة العربية السعودية.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-right">
                <li><a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700">الرياض</a> - الخدمات الأساسية والمتقدمة</li>
                <li><a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">الخرج</a> - خدمات متكاملة</li>
                <li><a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">القصيم</a> - حلول متخصصة</li>
                <li><a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">بريدة</a> - خدمات احترافية</li>
                <li><a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">عنيزة</a> - حلول متطورة</li>
                <li><a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">الرس</a> - خدمات شاملة</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold text-green-900">المنطقة الغربية</h3>
              </div>
              <p className="text-gray-700 text-right mb-4">
                خدمات مميزة في المنطقة الغربية والمدن المقدسة.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-right">
                <li><a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700">الرياض</a> - خدمات متطورة</li>
                <li><a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">مكة المكرمة</a> - حلول متخصصة</li>
                <li><a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">المدينة المنورة</a> - خدمات شاملة</li>
                <li><a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">الطائف</a> - حلول متطورة</li>
                <li><a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">الجبيل</a> - خدمات احترافية</li>
                <li><a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">الدمام</a> - خدمات متكاملة</li>
              </ul>   
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-bold text-purple-900">المنطقة الشرقية</h3>
              </div>
              <p className="text-gray-700 text-right mb-4">
                خدمات متكاملة في المنطقة الشرقية والمدن الصناعية.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-right">
                <li><a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">الدمام</a> - خدمات متطورة</li>
                <li><a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">الخبر</a> - حلول متخصصة</li>
                <li><a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">القطيف</a> - خدمات شاملة</li>
                <li><a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">الأحساء</a> - حلول متطورة</li>
                <li><a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">الجبيل</a> - خدمات احترافية</li>
                <li><a href="https://www.cleanplusteam.com/" className="text-cyan-600 hover:text-cyan-700 font-semibold">رأس تنورة</a> - خدمات متكاملة</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        {/* <section className="mb-16">
          <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-right">تواصل معنا</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-cyan-900 mb-6 text-right">معلومات الاتصال</h3>
              <div className="space-y-4 text-right">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-cyan-600" />
                  <p className="text-gray-700">+966 12 345 6789</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-cyan-600" />
                  <p className="text-gray-700">info@plusclean.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-cyan-600" />
                  <p className="text-gray-700">الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-cyan-900 mb-6 text-right">ساعات العمل</h3>
              <div className="space-y-4 text-right">
                <div className="flex justify-between items-center">
                  <p className="text-gray-700">الأحد - الخميس</p>
                  <p className="text-gray-700">8:00 صباحاً - 8:00 مساءً</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-700">الجمعة</p>
                  <p className="text-gray-700">9:00 صباحاً - 6:00 مساءً</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-700">السبت</p>
                  <p className="text-gray-700">9:00 صباحاً - 8:00 مساءً</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section> */}
      </div>
    </motion.div>
    <Footer />
  </>
);
};

export default CleaningServicesPage;
 