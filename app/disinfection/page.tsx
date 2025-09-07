'use client';
import { motion } from 'framer-motion';
import SectionHeader from '../../components/SectionHeader';
import { 
  Zap, ShieldCheck, Star, Heart, Clock, CheckCircle2,
  Phone, Users, Award, Home, Building, Briefcase, Calendar,
  ThumbsUp, ArrowRight, Plus, Minus, MapPin, Sparkles
} from 'lucide-react';
  import Footer from '../../components/Footer';
import { useState } from 'react';
import Header from '@/components/Header';

const DisinfectionPage = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

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
          {/* Hero Section المحسن */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-16 pt-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-cyan-900 mb-6 leading-tight">
              أفضل <span className="text-cyan-600">شركة تعقيم</span> في الرياض
            </h1>
            <p className="text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              <strong>بلس كلين</strong> - رائدة في مجال التعقيم والتطهير الاحترافي في المملكة العربية السعودية
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                ✅ مواد معتمدة من وزارة الصحة
              </span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                ⚡ خدمة سريعة وفعالة
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold">
                🛡️ ضمان رضا 100%
              </span>
            </div>
          </motion.section>

          {/* CTA الرئيسي */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16"
          >
            <a
              href="https://wa.me/966592425757"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-10 py-5 rounded-full font-bold shadow-2xl hover:from-cyan-700 hover:to-cyan-800 transition-all duration-300 flex items-center gap-3 text-lg transform hover:scale-105"
            >
              احجز الآن واحصل على خصم 20%
              <Zap className="w-6 h-6" />
            </a>
            <a
              href="tel:+966592425757"
              className="bg-white text-cyan-600 border-2 border-cyan-600 px-8 py-4 rounded-full font-bold hover:bg-cyan-50 transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              اتصل الآن: 0592425757
            </a>
          </motion.div>

          {/* قسم نبذة شاملة عن الشركة */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-20 bg-white rounded-3xl shadow-xl p-8 md:p-12"
          >
            <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-center">
              لماذا بلس كلين هي الخيار الأول للتعقيم في الرياض؟
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  منذ تأسيسها، تعتبر <strong>شركة بلس كلين</strong> الرائدة في مجال خدمات التعقيم والتطهير في 
                  <strong> مدينة الرياض</strong> والمملكة العربية السعودية. نحن نفخر بكوننا الشركة الأولى التي تقدم 
                  خدمات تعقيم شاملة ومتخصصة تلبي جميع احتياجات عملائنا من الأفراد والشركات والمؤسسات الحكومية.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  تتميز خدماتنا في <strong>تعقيم المنازل</strong> و<strong>تعقيم المكاتب</strong> و<strong>تعقيم المنشآت التجارية</strong>
                  باستخدام أحدث التقنيات العالمية ومواد التعقيم المعتمدة من وزارة الصحة السعودية. فريقنا المتخصص 
                  يضم أكثر من 50 خبيراً في مجال التعقيم والتطهير، مدربين على أعلى المعايير الدولية.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-cyan-50 p-6 rounded-2xl">
                  <Users className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-cyan-900">10,000+</h3>
                  <p className="text-gray-700">عميل راضٍ</p>
                </div>
                <div className="text-center bg-green-50 p-6 rounded-2xl">
                  <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-900">5+</h3>
                  <p className="text-gray-700">سنوات خبرة</p>
                </div>
                <div className="text-center bg-purple-50 p-6 rounded-2xl">
                  <CheckCircle2 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-purple-900">100%</h3>
                  <p className="text-gray-700">نسبة الرضا</p>
                </div>
                <div className="text-center bg-orange-50 p-6 rounded-2xl">
                  <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-orange-900">24/7</h3>
                  <p className="text-gray-700">خدمة العملاء</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* خدمات التعقيم المتخصصة */}
          <section className="mb-20">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-cyan-900 mb-6">
                خدمات التعقيم الشاملة في جميع أحياء الرياض
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                نقدم خدمات تعقيم متكاملة تغطي جميع أنواع المباني والمنشآت في كافة أحياء العاصمة الرياض
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'تعقيم المنازل السكنية',
                  description: 'خدمة تعقيم شاملة للمنازل والشقق والفلل في جميع أحياء الرياض. نستخدم تقنيات متطورة للقضاء على 99.9% من الجراثيم والبكتيريا والفيروسات بما في ذلك فيروس كورونا.',
                  icon: <Home className="w-10 h-10 text-cyan-600" />,
                  features: ['تعقيم جميع الغرف', 'تطهير المطابخ والحمامات', 'تعقيم الأثاث والمفروشات', 'تطهير أنظمة التكييف']
                },
                {
                  title: 'تعقيم المكاتب والشركات',
                  description: 'خدمات تعقيم مخصصة لبيئات العمل لضمان سلامة الموظفين والعملاء. نوفر حلول تعقيم مرنة تتناسب مع أوقات العمل دون تعطيل الأنشطة التجارية.',
                  icon: <Building className="w-10 h-10 text-cyan-600" />,
                  features: ['تعقيم مساحات العمل', 'تطهير أجهزة الكمبيوتر', 'تعقيم قاعات الاجتماعات', 'تطهير المصاعد والممرات']
                },
                {
                  title: 'تعقيم المنشآت التجارية',
                  description: 'خدمات تعقيم متخصصة للمطاعم والمقاهي والمحلات التجارية والمولات. نضمن بيئة آمنة للعملاء والموظفين مع الحفاظ على معايير الصحة العامة.',
                  icon: <Briefcase className="w-10 h-10 text-cyan-600" />,
                  features: ['تعقيم المطاعم والمقاهي', 'تطهير المحلات التجارية', 'تعقيم المولات والأسواق', 'تطهير دورات المياه العامة']
                },
                {
                  title: 'تعقيم المدارس والجامعات',
                  description: 'برامج تعقيم مخصصة للمؤسسات التعليمية لضمان بيئة تعليمية آمنة وصحية. نقدم جدولة مرنة تتناسب مع الأوقات الدراسية.',
                  icon: <Users className="w-10 h-10 text-cyan-600" />,
                  features: ['تعقيم الفصول الدراسية', 'تطهير المختبرات', 'تعقيم المكتبات', 'تطهير الكافيتيريا']
                },
                {
                  title: 'تعقيم المستشفيات والعيادات',
                  description: 'خدمات تعقيم طبية متخصصة تلبي أعلى معايير السلامة الصحية. فريقنا مدرب على التعامل مع البيئات الطبية الحساسة.',
                  icon: <ShieldCheck className="w-10 h-10 text-cyan-600" />,
                  features: ['تعقيم غرف العمليات', 'تطهير العيادات', 'تعقيم أجهزة طبية', 'تطهير مناطق الانتظار']
                },
                {
                  title: 'تعقيم دوري ومجدول',
                  description: 'برامج تعقيم منتظمة ومجدولة للحفاظ على بيئة نظيفة ومعقمة بشكل مستمر. نوفر خطط شهرية وربع سنوية وسنوية بأسعار مخفضة.',
                  icon: <Calendar className="w-10 h-10 text-cyan-600" />,
                  features: ['خطط شهرية', 'خطط ربع سنوية', 'خطط سنوية', 'متابعة دورية']
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 serviceCard transform hover:-translate-y-2"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {service.icon}
                    <h3 className="text-2xl font-bold text-cyan-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-3">ما نقدمه:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-end items-center">
                    <motion.a 
                      href="tel:+966592425757"
                      whileHover={{ scale: 1.05 }}
                      className="bg-cyan-600 text-white px-6 py-3 rounded-full hover:bg-cyan-700 transition-colors inline-flex items-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      احجز الآن
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* المناطق المخدومة */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-20 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-center">
              نخدم جميع أحياء الرياض
            </h2>
            <p className="text-lg text-gray-700 text-center mb-10 max-w-4xl mx-auto">
              فريقنا المتنقل يصل إلى جميع أحياء العاصمة الرياض لتقديم خدمات التعقيم الاحترافية
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {[
                'حي العليا', 'حي الملز', 'حي النخيل', 'حي الياسمين', 'حي الربوة', 'حي المروج',
                'حي الروضة', 'حي الورود', 'حي النسيم', 'حي الحمراء', 'حي السليمانية', 'حي الفيصلية',
                'حي المعذر', 'حي النهضة', 'حي الشعلان', 'حي قرطبة', 'حي الصحافة', 'حي الندى',
                'حي الرحمانية', 'حي الفلاح', 'حي البطحاء', 'حي المنصور', 'حي اليرموك', 'حي الاندلس',
                'حي الخزامى', 'حي النرجس', 'حي العارض', 'حي الشهداء', 'حي الخليج', 'حي السويدي'
              ].map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.02 * index }}
                  className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
                >
                  <MapPin className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                  <span className="text-gray-800 font-semibold text-sm">{area}</span>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-700 mb-4">
                <strong>ملاحظة:</strong> نوفر خدمة التوصيل المجاني لجميع الأحياء داخل الرياض
              </p>
              <span className="bg-green-100 text-green-800 px-6 py-3 rounded-full font-bold">
                🚚 توصيل مجاني + معاينة مجانية
              </span>
            </div>
          </motion.section>

          {/* التقنيات والمواد المستخدمة */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-20 bg-white rounded-3xl shadow-xl p-8 md:p-12"
          >
            <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-center">
              أحدث التقنيات ومواد التعقيم المعتمدة
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-cyan-800 mb-6">تقنيات التعقيم المتطورة</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: 'تقنية الرش الجوي بالضباب البارد',
                      description: 'تقنية حديثة لتوزيع المواد المعقمة بشكل متجانس في جميع أنحاء المكان دون ترك بقايا'
                    },
                    {
                      title: 'التعقيم بالأشعة فوق البنفسجية UV-C',
                      description: 'استخدام أشعة UV-C المعتمدة طبياً للقضاء على الفيروسات والبكتيريا بنسبة 99.9%'
                    },
                    {
                      title: 'تقنية الأوزون للتطهير',
                      description: 'استخدام غاز الأوزون الطبيعي لتطهير الهواء والأسطح بشكل آمن وفعال'
                    },
                    {
                      title: 'التعقيم الكهروستاتيكي',
                      description: 'تقنية متقدمة تضمن التصاق المادة المعقمة بجميع الأسطح بما في ذلك الأماكن الصعبة الوصول'
                    }
                  ].map((tech, index) => (
                    <div key={index} className="border-r-4 border-cyan-500 pr-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{tech.title}</h4>
                      <p className="text-gray-700">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-800 mb-6">مواد التعقيم المعتمدة</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: 'مطهرات معتمدة من وزارة الصحة السعودية',
                      description: 'جميع المواد حاصلة على تراخيص وموافقات من الجهات الرسمية'
                    },
                    {
                      title: 'مواد آمنة للأطفال وكبار السن',
                      description: 'مطهرات خالية من المواد الكيميائية الضارة وآمنة للاستخدام المنزلي'
                    },
                    {
                      title: 'مبيدات حيوية طبيعية',
                      description: 'استخدام مواد طبيعية فعالة ضد جميع أنواع الجراثيم والميكروبات'
                    },
                    {
                      title: 'مطهرات طويلة المفعول',
                      description: 'مواد توفر حماية مستمرة لفترات طويلة بعد التطبيق'
                    }
                  ].map((material, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-xl">
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{material.title}</h4>
                      <p className="text-gray-700">{material.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* عملية التعقيم خطوة بخطوة */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-center">
              كيف تتم عملية التعقيم الاحترافية؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: 'التقييم والمعاينة',
                  description: 'فحص شامل للمكان وتحديد نوع التعقيم المطلوب وحساب التكلفة',
                  icon: <CheckCircle2 className="w-8 h-8" />
                },
                {
                  step: '2',
                  title: 'التحضير والإعداد',
                  description: 'تحضير المواد والمعدات المناسبة وحماية الأثاث والممتلكات',
                  icon: <ShieldCheck className="w-8 h-8" />
                },
                {
                  step: '3',
                  title: 'التنفيذ والتطبيق',
                  description: 'تطبيق عملية التعقيم باستخدام أحدث التقنيات والمواد المعتمدة',
                  icon: <Sparkles className="w-8 h-8" />
                },
                {
                  step: '4',
                  title: 'التقييم النهائي',
                  description: 'فحص جودة العمل وضمان فعالية التعقيم وتسليم شهادة إتمام',
                  icon: <Award className="w-8 h-8" />
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 * index }}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center relative"
                >
                  <div className="absolute -top-4 right-4 bg-cyan-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {process.step}
                  </div>
                  <div className="text-cyan-600 mb-4 flex justify-center">
                    {process.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{process.title}</h3>
                  <p className="text-gray-700">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* مزايا اختيار بلس كلين */}
          <section className="mb-20">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-cyan-900 mb-6">
                لماذا بلس كلين هي الخيار الأمثل؟
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                نتميز بالخبرة والاحترافية والالتزام بأعلى معايير الجودة والسلامة
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'خبرة وكفاءة عالية',
                  description: 'أكثر من 5 سنوات من الخبرة في مجال التعقيم والتطهير مع فريق مدرب على أحدث التقنيات العالمية.',
                  icon: <Award className="w-10 h-10 text-amber-600" />,
                  color: 'amber'
                },
                {
                  title: 'معدات وتقنيات حديثة',
                  description: 'نستخدم أحدث المعدات والتقنيات المتطورة في التعقيم لضمان أفضل النتائج وأعلى مستويات الأمان.',
                  icon: <Sparkles className="w-10 h-10 text-purple-600" />,
                  color: 'purple'
                },
                {
                  title: 'مواد معتمدة وآمنة',
                  description: 'جميع مواد التعقيم معتمدة من وزارة الصحة السعودية وآمنة للاستخدام في جميع البيئات.',
                  icon: <ShieldCheck className="w-10 h-10 text-green-600" />,
                  color: 'green'
                },
                {
                  title: 'خدمة عملاء متميزة',
                  description: 'فريق خدمة عملاء متاح 24/7 لتلبية جميع احتياجاتكم والرد على استفساراتكم في أي وقت.',
                  icon: <Heart className="w-10 h-10 text-red-600" />,
                  color: 'red'
                },
                {
                  title: 'أسعار تنافسية وشفافة',
                  description: 'نقدم أفضل الأسعار في السوق مع شفافية كاملة في التسعير بدون رسوم مخفية.',
                  icon: <Star className="w-10 h-10 text-yellow-600" />,
                  color: 'yellow'
                },
                {
                  title: 'ضمان الجودة والرضا',
                  description: 'نضمن جودة الخدمة برضا العميل 100% مع إمكانية إعادة الخدمة مجاناً في حالة عدم الرضا.',
                  icon: <ThumbsUp className="w-10 h-10 text-blue-600" />,
                  color: 'blue'
                }
              ].map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className={`bg-gradient-to-br from-${advantage.color}-50 to-${advantage.color}-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 text-center`}
                >
                  <div className="mb-6 flex justify-center">
                    {advantage.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{advantage.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* شهادات العملاء المفصلة */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mb-20 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-center">
              آراء وتجارب عملائنا الكرام
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              نفخر بثقة عملائنا وتقديرهم لخدماتنا المتميزة في جميع أنحاء الرياض
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'المهندس أحمد السعيد',
                  position: 'مدير شركة',
                  location: 'حي العليا، الرياض',
                  rating: 5,
                  comment: 'خدمة استثنائية من بلس كلين! قاموا بتعقيم مكاتبنا بشكل محترف جداً. الفريق منضبط ومهذب، والنتيجة كانت رائعة. المكان أصبح نظيفاً ومعقماً بدرجة عالية مع رائحة منعشة. أنصح بشدة بالتعامل معهم.',
                  service: 'تعقيم مكاتب'
                },
                {
                  name: 'أم عبدالله الغامدي',
                  position: 'ربة منزل',
                  location: 'حي الياسمين، الرياض',
                  rating: 5,
                  comment: 'بعد إصابة أحد أفراد العائلة بكورونا، احتجنا لتعقيم شامل للمنزل. بلس كلين كانت الخيار الأفضل! استخدموا مواد آمنة للأطفال، والخدمة كانت سريعة وفعالة. أشعر بالأمان الآن في منزلي.',  
                  service: 'تعقيم منازل'
                },
                {
                  name: 'عبدالعزيز المنصور',
                  position: 'صاحب مطعم',
                  location: 'حي النخيل، الرياض',
                  rating: 5,
                  comment: 'كصاحب مطعم، النظافة والتعقيم أولوية قصوى لي. بلس كلين تقدم خدمة متميزة بأسعار معقولة. يأتون في الأوقات المحددة ولا يعطلون عمل المطعم. الفريق محترف ويعرف كيف يتعامل مع المطاعم.',
                  service: 'تعقيم مطاعم'
                },
                {
                  name: 'الدكتورة فاطمة العتيبي',
                  position: 'طبيبة أسنان',
                  location: 'حي الروضة، الرياض',
                  rating: 5,
                  comment: 'أتعامل مع بلس كلين لتعقيم عيادتي منذ سنتين. خدمة ممتازة ومنتظمة، يفهمون طبيعة العمل الطبي ومتطلبات التعقيم الخاصة. أثق بهم تماماً وأنصح زملائي الأطباء بالتعامل معهم.',  
                  service: 'تعقيم عيادات'
                },
                {
                  name: 'محمد الراشد',
                  position: 'مدير مدرسة',
                  location: 'حي الملز، الرياض',
                  rating: 5,
                  comment: 'تعاملنا مع بلس كلين لتعقيم المدرسة خلال جائحة كورونا. كانوا سريعين ومنظمين، وتم العمل خلال العطلة دون تأثير على الدراسة. النتيجة ممتازة وأولياء الأمور مطمئنون على سلامة أطفالهم.',
                  service: 'تعقيم مدارس'
                },
                {
                  name: 'خالد الشمري',
                  position: 'صاحب صالة رياضية',
                  location: 'حي النسيم، الرياض',
                  rating: 5,
                  comment: 'الصالة الرياضية تحتاج تعقيم مستمر خاصة بعد كورونا. بلس كلين يقدمون خدمة تعقيم دوري ممتازة بأسعار مناسبة. العملاء يشعرون بالأمان والثقة عند ممارسة الرياضة في الصالة.',
                  service: 'تعقيم دوري'
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 * index }}
                  className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-bold text-cyan-900">{testimonial.name}</h4>
                        <p className="text-cyan-600 text-sm font-medium">{testimonial.position}</p>
                        <p className="text-gray-600 text-sm">{testimonial.location}</p>
                      </div>
                      <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-xs font-semibold">
                        {testimonial.service}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* الأسئلة الشائعة المفصلة */}
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-cyan-900 mb-8 text-center">
              الأسئلة الأكثر شيوعاً حول خدمات التعقيم
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              إجابات شاملة على جميع الأسئلة التي قد تخطر ببالكم حول خدماتنا
            </p>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {[
                {
                  question: 'كم تستغرق عملية التعقيم وما هي الخطوات المتبعة؟',
                  answer: 'تختلف مدة التعقيم حسب حجم المكان ونوع الخدمة المطلوبة. الشقق الصغيرة تستغرق 1-2 ساعة، المنازل متوسطة الحجم 2-4 ساعات، والمنشآت التجارية الكبيرة قد تستغرق 6-8 ساعات. نبدأ بالمعاينة والتقييم، ثم تحضير المواد والمعدات، تطبيق التعقيم، وأخيراً التفتيش النهائي وتسليم شهادة الإتمام.'
                },
                {
                  question: 'هل المواد المستخدمة آمنة للأطفال والحوامل وكبار السن؟',
                  answer: 'نعم، جميع مواد التعقيم التي نستخدمها معتمدة من وزارة الصحة السعودية وآمنة تماماً للأطفال والحوامل وكبار السن والحيوانات الأليفة. نستخدم مطهرات طبيعية وحيوية خالية من المواد الكيميائية الضارة، ونوفر أيضاً مواد تعقيم عضوية 100% للعملاء الذين يطلبون ذلك.'
                },
                {
                  question: 'كم تدوم فعالية التعقيم وهل تحتاج إعادة دورية؟',
                  answer: 'فعالية التعقيم تدوم من 30-90 يوماً حسب نوع المادة المستخدمة ونوع المكان ومستوى الاستخدام. ننصح بالتعقيم الدوري كل شهر للمنازل، كل أسبوعين للمكاتب والمحلات التجارية، وأسبوعياً للمستشفيات والعيادات. نوفر برامج تعقيم دوري بخصومات تصل إلى 25%.'
                },
                {
                  question: 'ما هي أنواع الجراثيم والفيروسات التي يمكن القضاء عليها؟',
                  answer: 'خدمات التعقيم لدينا فعالة ضد 99.9% من الجراثيم والبكتيريا والفيروسات بما في ذلك: فيروس كورونا (كوفيد-19)، فيروسات الأنفلونزا، بكتيريا السالمونيلا، الإشريكية القولونية، العنقوديات الذهبية، الفطريات والخمائر، وجميع أنواع الميكروبات الضارة الأخرى.'
                },
                {
                  question: 'هل يمكنكم تعقيم الأجهزة الإلكترونية والأثاث الحساس؟',
                  answer: 'نعم، لدينا تقنيات متخصصة لتعقيم الأجهزة الإلكترونية مثل الكمبيوترات والهواتف وأجهزة التلفزيون دون إلحاق أي ضرر بها. نستخدم مواد خاصة غير موصلة للكهرباء ومناديل مطهرة مخصصة للإلكترونيات. كما نقوم بحماية الأثاث الحساس والتحف والأعمال الفنية قبل البدء بالتعقيم.'
                },
                {
                  question: 'ما هي تكلفة خدمات التعقيم وطرق الدفع المتاحة؟',
                  answer: 'أسعارنا تنافسية وتبدأ من 300 ريال للشقق الصغيرة وتصل إلى 2500 ريال للمنشآت الكبيرة. نقدم خصومات للعملاء الجدد (20%)، العملاء الدائمين (15%)، والخدمات الدورية (25%). طرق الدفع المتاحة: نقداً، تحويل بنكي، بطاقات الائتمان، مدى، وأبل باي. كما نوفر إمكانية التقسيط للمنشآت الكبيرة.'
                },
                {
                  question: 'هل تقدمون خدمات التعقيم في حالات الطوارئ؟',
                  answer: 'نعم، نقدم خدمة تعقيم الطوارئ على مدار 24 ساعة في حالات الإصابة بكورونا أو الأمراض المعدية الأخرى. فريقنا المتخصص في الطوارئ يصل خلال ساعة واحدة من الاتصال. نوفر أيضاً خدمة تعقيم فوري للمنشآت التي تحتاج استئناف العمل بسرعة.'
                },
                {
                  question: 'ما هو الضمان المقدم على خدمات التعقيم؟',
                  answer: 'نقدم ضمان رضا العميل 100% لمدة 30 يوماً للمنازل، 60 يوماً للمكاتب، و90 يوماً للمنشآت التجارية. في حالة عدم الرضا أو ظهور أي مشاكل خلال فترة الضمان، نعيد الخدمة مجاناً. كما نوفر شهادة إتمام التعقيم معتمدة يمكن استخدامها مع الجهات الرسمية.'
                },
                {
                  question: 'هل يمكن جدولة خدمات التعقيم خارج أوقات العمل؟',
                  answer: 'بالطبع، نوفر خدمات التعقيم في جميع الأوقات بما في ذلك المساء والليل وعطلة نهاية الأسبوع. هذا مفيد خاصة للمكاتب والمنشآت التجارية التي لا تريد تعطيل العمل. الخدمة خارج أوقات العمل العادية تتطلب حجز مسبق ورسوم إضافية بسيطة.'
                },
                {
                  question: 'كيف يمكنني التأكد من جودة خدمة التعقيم؟',
                  answer: 'نوفر عدة طرق للتأكد من جودة الخدمة: تقرير مفصل عن عملية التعقيم، صور قبل وبعد التعقيم، شهادة إتمام معتمدة، اختبارات عينات (عند الطلب)، ومتابعة دورية من فريق ضمان الجودة. كما يمكنكم تقييم الخدمة عبر تطبيقنا أو موقعنا الإلكتروني.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * index }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-right flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none"
                  >
                    <span className="text-lg font-bold text-gray-800 flex-1">{faq.question}</span>
                    <div className="mr-4">
                      {expandedFaq === index ? (
                        <Minus className="w-6 h-6 text-cyan-600" />
                      ) : (
                        <Plus className="w-6 h-6 text-cyan-600" />
                      )}
                    </div>
                  </button>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default DisinfectionPage;
    