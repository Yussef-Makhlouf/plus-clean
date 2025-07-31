import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export default function WaterTankCleaningGuidePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="bg-white rounded-lg shadow-lg p-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                دليل تنظيف خزانات المياه في الرياض - حماية صحتك من التلوث
              </h1>
              <div className="flex items-center text-gray-600 mb-4">
                <time dateTime="2024-03-12">12 مارس 2024</time>
                <span className="mx-2">•</span>
                <span>قراءة 15 دقيقة</span>
              </div>
              <img 
                src="/water-leak.avif" 
                alt="دليل تنظيف خزانات المياه في الرياض"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                خزانات المياه من أهم المرافق في المنزل، لكنها تحتاج تنظيفاً دورياً 
                لضمان سلامة المياه وصحة العائلة. في هذا الدليل الشامل، نشارككم 
                أفضل الطرق الاحترافية لتنظيف خزانات المياه في الرياض.
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h2 className="text-2xl font-bold text-red-900 mb-3">⚠️ تحذير مهم</h2>
                <p className="text-red-800">
                  تنظيف خزانات المياه يتطلب خبرة ومعدات خاصة. يفضل الاستعانة 
                  بشركة متخصصة لضمان السلامة وجودة العمل.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                لماذا نحتاج لتنظيف خزانات المياه؟
              </h2>
              <p className="text-gray-700 mb-4">
                تنظيف خزانات المياه ضرورة صحية وليست رفاهية للأسباب التالية:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>منع نمو البكتيريا والطحالب في الخزان</li>
                <li>إزالة الترسبات والرواسب المعدنية</li>
                <li>تحسين طعم ورائحة المياه</li>
                <li>الوقاية من الأمراض المنقولة بالمياه</li>
                <li>إطالة عمر الخزان ومنع التآكل</li>
                <li>ضمان جودة المياه المستخدمة</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                أنواع خزانات المياه
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-3">الخزانات العلوية</h3>
                  <ul className="text-blue-800 space-y-2">
                    <li>• توجد على أسطح المباني</li>
                    <li>• تحتاج تنظيف كل 6 أشهر</li>
                    <li>• عرضة للغبار والحشرات</li>
                    <li>• تحتاج عزل حراري جيد</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-900 mb-3">الخزانات الأرضية</h3>
                  <ul className="text-green-800 space-y-2">
                    <li>• توجد تحت الأرض</li>
                    <li>• تحتاج تنظيف كل 3 أشهر</li>
                    <li>• عرضة للرطوبة والتسرب</li>
                    <li>• تحتاج تهوية جيدة</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-bold text-purple-900 mb-3">الخزانات البلاستيكية</h3>
                  <ul className="text-purple-800 space-y-2">
                    <li>• خفيفة الوزن وسهلة التركيب</li>
                    <li>• مقاومة للصدأ</li>
                    <li>• تحتاج تنظيف دوري</li>
                    <li>• عمر افتراضي طويل</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-bold text-yellow-900 mb-3">الخزانات الحديدية</h3>
                  <ul className="text-yellow-800 space-y-2">
                    <li>• قوية ومتينة</li>
                    <li>• عرضة للصدأ</li>
                    <li>• تحتاج طلاء دوري</li>
                    <li>• تنظيف أكثر تعقيداً</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                أدوات تنظيف خزانات المياه
              </h2>
              <p className="text-gray-700 mb-4">
                تنظيف خزانات المياه يتطلب أدوات ومعدات خاصة:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>فرشاة تنظيف ناعمة للخزانات</li>
                <li>منظفات خاصة بالخزانات (غير سامة)</li>
                <li>قفازات مطاطية واقية</li>
                <li>معدات أمان (أحزمة، سلالم)</li>
                <li>مضخة شفط للمياه</li>
                <li>مناشف قطنية نظيفة</li>
                <li>معدات تعقيم متخصصة</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                دليل تنظيف خزانات المياه خطوة بخطوة
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">الخطوة الأولى: التحضير</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>أوقف إمداد المياه للخزان</li>
                <li>أفرغ الخزان من المياه المتبقية</li>
                <li>افتح فتحة التهوية للخزان</li>
                <li>جهز جميع الأدوات المطلوبة</li>
                <li>تأكد من وجود إضاءة كافية</li>
              </ol>

              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">الخطوة الثانية: التنظيف الميكانيكي</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>أزل الرواسب والترسبات من جدران الخزان</li>
                <li>نظف أرضية الخزان بالفرشاة</li>
                <li>أزل الطحالب والعوالق</li>
                <li>نظف فتحات التهوية والصرف</li>
                <li>تأكد من تنظيف جميع الزوايا</li>
              </ol>

              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">الخطوة الثالثة: التعقيم</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>استخدم محلول تعقيم مناسب للخزانات</li>
                <li>وزع المحلول على جميع أسطح الخزان</li>
                <li>اترك المحلول لمدة 30 دقيقة</li>
                <li>اشطف الخزان بالماء النظيف</li>
                <li>تأكد من إزالة جميع آثار المنظف</li>
              </ol>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                مواد التنظيف الآمنة للخزانات
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-3">المواد الطبيعية الآمنة</h3>
                  <ul className="text-blue-800 space-y-2">
                    <li>• الخل الأبيض المخفف</li>
                    <li>• بيكربونات الصوديوم</li>
                    <li>• عصير الليمون الطازج</li>
                    <li>• الملح الخشن</li>
                    <li>• الماء الساخن</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-900 mb-3">المواد التجارية المعتمدة</h3>
                  <ul className="text-green-800 space-y-2">
                    <li>• منظفات خزانات المياه المتخصصة</li>
                    <li>• مواد تعقيم معتمدة من وزارة الصحة</li>
                    <li>• مطهرات آمنة للاستخدام البشري</li>
                    <li>• مواد إزالة الترسبات</li>
                    <li>• طلاء عازل للخزانات</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                مشاكل خزانات المياه الشائعة
              </h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-right">المشكلة</th>
                      <th className="border border-gray-300 p-3 text-right">السبب</th>
                      <th className="border border-gray-300 p-3 text-right">الحل</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">تغير طعم المياه</td>
                      <td className="border border-gray-300 p-3">تراكم البكتيريا والطحالب</td>
                      <td className="border border-gray-300 p-3">تنظيف وتعقيم شامل</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">تسرب المياه</td>
                      <td className="border border-gray-300 p-3">تلف في جدران الخزان</td>
                      <td className="border border-gray-300 p-3">إصلاح أو استبدال الخزان</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">ترسبات معدنية</td>
                      <td className="border border-gray-300 p-3">مياه عسرة أو ملوثة</td>
                      <td className="border border-gray-300 p-3">تنظيف دوري وفلترة</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">رائحة كريهة</td>
                      <td className="border border-gray-300 p-3">نمو البكتيريا اللاهوائية</td>
                      <td className="border border-gray-300 p-3">تعقيم وتهوية جيدة</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">صدأ في الخزانات الحديدية</td>
                      <td className="border border-gray-300 p-3">عدم وجود طلاء واقي</td>
                      <td className="border border-gray-300 p-3">إزالة الصدأ وطلاء جديد</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                جدول صيانة خزانات المياه
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-3">صيانة دورية</h3>
                  <ul className="text-blue-800 space-y-2">
                    <li>• فحص أسبوعي للخزان</li>
                    <li>• تنظيف شهري للفتحات</li>
                    <li>• تعقيم كل 3-6 أشهر</li>
                    <li>• فحص سنوي شامل</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-900 mb-3">صيانة وقائية</h3>
                  <ul className="text-green-800 space-y-2">
                    <li>• عزل حراري للخزانات العلوية</li>
                    <li>• طلاء واقي للخزانات الحديدية</li>
                    <li>• تركيب فلاتر للمياه</li>
                    <li>• تهوية جيدة للخزانات</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                نصائح لحماية خزانات المياه في الرياض
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-bold text-yellow-900 mb-3">الحماية من المناخ الصحراوي</h3>
                  <ul className="text-yellow-800 space-y-2">
                    <li>• عزل حراري جيد للخزانات</li>
                    <li>• تغطية الخزانات العلوية</li>
                    <li>• تنظيف دوري لمنع الغبار</li>
                    <li>• فحص فتحات التهوية</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-bold text-purple-900 mb-3">الحماية من التلوث</h3>
                  <ul className="text-purple-800 space-y-2">
                    <li>• إغلاق محكم لفتحات الخزان</li>
                    <li>• فلاتر للمياه الداخلة</li>
                    <li>• تنظيف دوري للأنابيب</li>
                    <li>• مراقبة جودة المياه</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                متى تحتاج خدمة تنظيف احترافية؟
              </h2>
              <p className="text-gray-700 mb-4">
                هناك مواقف تحتاج لخدمة تنظيف احترافية متخصصة:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>الخزانات الكبيرة أو العميقة</li>
                <li>وجود تلوث شديد أو روائح كريهة</li>
                <li>تسرب في الخزان أو تلف</li>
                <li>خزانات في أماكن صعبة الوصول</li>
                <li>خزانات في المباني التجارية</li>
                <li>حاجة لتعقيم متخصص</li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">خدمة تنظيف خزانات المياه الاحترافية</h3>
                <p className="text-blue-800 mb-4">
                  نقدم خدمة تنظيف خزانات شاملة تستخدم أحدث التقنيات:
                </p>
                <ul className="text-blue-800 space-y-2">
                  <li>• تنظيف ميكانيكي شامل</li>
                  <li>• تعقيم بمواد معتمدة</li>
                  <li>• فحص شامل للخزان</li>
                  <li>• إصلاح التسريبات</li>
                  <li>• ضمان على جودة العمل</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                الخلاصة
              </h2>
              <p className="text-gray-700 mb-6">
                تنظيف خزانات المياه ضرورة صحية لحماية عائلتك. باتباع هذا الدليل 
                والنصائح الاحترافية، يمكنك ضمان مياه نظيفة وآمنة. تذكر أن الاستثمار 
                في خدمة تنظيف احترافية يوفر عليك المخاطر ويضمن أفضل النتائج.
              </p>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">احصل على خدمة تنظيف خزانات احترافية</h3>
                <p className="text-gray-700 mb-4">
                  فريق شركة النظافة العصرية جاهز لتقديم خدمة تنظيف خزانات شاملة ومتخصصة.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:+966569131252"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors text-center"
                  >
                    احجز خدمة تنظيف الخزانات
                  </a>
                  <a 
                    href="https://wa.me/966569131252"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors text-center"
                  >
                    استفسر عن الخدمة
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
} 