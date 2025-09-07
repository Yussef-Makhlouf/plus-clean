import { Metadata } from 'next'
// import Header from '@/components/Header'
// // import Footer from '@/components/Footer'



export default function CarpetCleaningGuidePage() {
  return (
    <>
      {/* <Header /> */}
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="bg-white rounded-lg shadow-lg p-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                دليل تنظيف السجاد والموكيت في الرياض - نصائح احترافية من شركة النظافة العصرية
              </h1>
              <div className="flex items-center text-gray-600 mb-4">
                <time dateTime="2024-03-15">15 مارس 2024</time>
                <span className="mx-2">•</span>
                <span>قراءة 12 دقيقة</span>
              </div>
              <img 
                src="/carpet-cleaning-guide.avif" 
                alt="دليل تنظيف السجاد في الرياض"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                السجاد والموكيت من أهم عناصر الديكور في المنزل، لكنها تحتاج عناية خاصة 
                للحفاظ على مظهرها وجودتها. في هذا الدليل الشامل، نشارككم أفضل الطرق 
                الاحترافية لتنظيف السجاد في الرياض، مستندين إلى خبرة أكثر من 10 سنوات.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                أنواع السجاد وطرق تنظيفها
              </h2>
              <p className="text-gray-700 mb-4">
                كل نوع من السجاد يحتاج طريقة تنظيف مختلفة:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-3">السجاد الصوفي الطبيعي</h3>
                  <ul className="text-blue-800 space-y-2">
                    <li>• تنظيف جاف بالمكنسة الكهربائية</li>
                    <li>• تجنب الماء الزائد</li>
                    <li>• استخدام منظفات خاصة بالصوف</li>
                    <li>• تجفيف بطيء في الظل</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-900 mb-3">السجاد الصناعي (النايلون)</h3>
                  <ul className="text-green-800 space-y-2">
                    <li>• تنظيف رطب آمن</li>
                    <li>• مقاوم للبقع</li>
                    <li>• تنظيف بالبخار</li>
                    <li>• تجفيف سريع</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-bold text-purple-900 mb-3">السجاد الفارسي</h3>
                  <ul className="text-purple-800 space-y-2">
                    <li>• تنظيف احترافي متخصص</li>
                    <li>• تجنب المواد الكيميائية القوية</li>
                    <li>• حماية من أشعة الشمس</li>
                    <li>• صيانة دورية</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-bold text-yellow-900 mb-3">الموكيت</h3>
                  <ul className="text-yellow-800 space-y-2">
                    <li>• تنظيف بالبخار</li>
                    <li>• إزالة البقع فوراً</li>
                    <li>• تنظيف دوري</li>
                    <li>• حماية من الرطوبة</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                أدوات تنظيف السجاد الأساسية
              </h2>
              <p className="text-gray-700 mb-4">
                قبل البدء في تنظيف السجاد، تأكد من توفر هذه الأدوات:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>مكنسة كهربائية عالية الكفاءة مع فلاتر HEPA</li>
                <li>فرشاة تنظيف ناعمة للسجاد</li>
                <li>منظفات خاصة بنوع السجاد</li>
                <li>مناشف قطنية نظيفة</li>
                <li>مروحة أو مجفف هواء</li>
                <li>قفازات مطاطية للحماية</li>
                <li>معدات تنظيف بالبخار (اختياري)</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                دليل تنظيف السجاد خطوة بخطوة
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">الخطوة الأولى: التحضير</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>أزل الأثاث من على السجاد</li>
                <li>نظف الأرضية المحيطة بالسجاد</li>
                <li>افتح النوافذ للتهوية</li>
                <li>جهز جميع الأدوات المطلوبة</li>
                <li>اقرأ تعليمات المنظف بعناية</li>
              </ol>

              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">الخطوة الثانية: التنظيف الجاف</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>استخدم المكنسة الكهربائية لشفط الغبار والوبر</li>
                <li>نظف في اتجاه واحد لتجنب تلف الألياف</li>
                <li>ركز على المناطق عالية الاستخدام</li>
                <li>نظف تحت الأثاث والزوايا</li>
                <li>تأكد من تنظيف جميع أجزاء السجاد</li>
              </ol>

              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">الخطوة الثالثة: إزالة البقع</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>عالج البقع فور حدوثها</li>
                <li>امسح السوائل بمنشفة نظيفة</li>
                <li>استخدم منظف مناسب لنوع البقعة</li>
                <li>لا تفرك البقعة بقوة لتجنب انتشارها</li>
                <li>اشطف بالماء النظيف وجفف</li>
              </ol>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                طرق إزالة البقع الشائعة
              </h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-right">نوع البقعة</th>
                      <th className="border border-gray-300 p-3 text-right">طريقة الإزالة</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">القهوة والشاي</td>
                      <td className="border border-gray-300 p-3">امسح بمنشفة، استخدم محلول الخل والماء</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">الدم</td>
                      <td className="border border-gray-300 p-3">استخدم الماء البارد، تجنب الماء الساخن</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">الشوكولاتة</td>
                      <td className="border border-gray-300 p-3">أزل القطع الصلبة، استخدم منظف سائل</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">الدهون والزيوت</td>
                      <td className="border border-gray-300 p-3">استخدم بيكربونات الصوديوم أو نشا الذرة</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">الحبر</td>
                      <td className="border border-gray-300 p-3">استخدم الكحول أو مزيل الحبر المتخصص</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">العلكة</td>
                      <td className="border border-gray-300 p-3">جمد بالثلج ثم اكشط، استخدم زيت نباتي</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                تنظيف السجاد بالبخار
              </h2>
              <p className="text-gray-700 mb-4">
                تنظيف السجاد بالبخار من أفضل الطرق للتنظيف العميق:
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">مميزات التنظيف بالبخار</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>إزالة البقع العميقة والروائح</li>
                <li>قتل البكتيريا والعث</li>
                <li>تنظيف عميق للألياف</li>
                <li>تجفيف سريع</li>
                <li>آمن على جميع أنواع السجاد</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">خطوات التنظيف بالبخار</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>نظف السجاد بالمكنسة الكهربائية أولاً</li>
                <li>عالج البقع الصعبة قبل التنظيف</li>
                <li>استخدم ماء ساخن مع منظف مناسب</li>
                <li>تحرك ببطء في خطوط مستقيمة</li>
                <li>تجنب الإفراط في الماء</li>
                <li>اترك السجاد يجف تماماً</li>
              </ol>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                نصائح لحماية السجاد في الرياض
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-3">الحماية من الغبار والرمال</h3>
                  <ul className="text-blue-800 space-y-2">
                    <li>• ضع سجادة صغيرة عند المداخل</li>
                    <li>• نظف الأحذية قبل الدخول</li>
                    <li>• أغلق النوافذ خلال العواصف الرملية</li>
                    <li>• نظف السجاد أسبوعياً</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-900 mb-3">الحماية من أشعة الشمس</h3>
                  <ul className="text-green-800 space-y-2">
                    <li>• استخدم ستائر لحماية السجاد</li>
                    <li>• غير موضع الأثاث دورياً</li>
                    <li>• استخدم واقيات من الأشعة فوق البنفسجية</li>
                    <li>• تجنب وضع السجاد في الشمس المباشرة</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                صيانة السجاد الدورية
              </h2>
              <p className="text-gray-700 mb-4">
                الصيانة الدورية تطيل عمر السجاد وتحافظ على مظهره:
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">جدول الصيانة الأسبوعي</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>نظف السجاد بالمكنسة الكهربائية مرتين أسبوعياً</li>
                <li>عالج البقع فور حدوثها</li>
                <li>نظف المناطق عالية الاستخدام</li>
                <li>تأكد من تهوية الغرفة</li>
                <li>افحص السجاد للتلف أو البقع</li>
              </ol>

              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">جدول الصيانة الشهري</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>تنظيف عميق بالبخار</li>
                <li>إزالة البقع الصعبة</li>
                <li>تنظيف تحت الأثاث</li>
                <li>فحص حالة السجاد</li>
                <li>ترتيب الأثاث لمنع التلف</li>
              </ol>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                متى تحتاج خدمة تنظيف احترافية؟
              </h2>
              <p className="text-gray-700 mb-4">
                هناك مواقف تحتاج لخدمة تنظيف احترافية متخصصة:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>السجاد الفارسي الثمين</li>
                <li>البقع الصعبة التي لا تزول بالطرق العادية</li>
                <li>السجاد الكبير الذي يصعب تنظيفه</li>
                <li>الروائح الكريهة المستعصية</li>
                <li>السجاد الملوث بالحيوانات الأليفة</li>
                <li>السجاد القديم الذي يحتاج ترميم</li>
              </ul>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-purple-900 mb-3">خدمة تنظيف السجاد الاحترافية</h3>
                <p className="text-purple-800 mb-4">
                  نقدم خدمة تنظيف سجاد شاملة تستخدم أحدث التقنيات:
                </p>
                <ul className="text-purple-800 space-y-2">
                  <li>• تنظيف بالبخار عالي الحرارة</li>
                  <li>• إزالة البقع الصعبة</li>
                  <li>• تنظيف السجاد الفارسي</li>
                  <li>• حماية من التلف</li>
                  <li>• ضمان على جودة العمل</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                الخلاصة
              </h2>
              <p className="text-gray-700 mb-6">
                تنظيف السجاد فن يتطلب معرفة وخبرة. باتباع هذا الدليل والنصائح الاحترافية، 
                يمكنك الحفاظ على سجادك نظيفاً وجميلاً لسنوات طويلة. تذكر أن الاستثمار 
                في خدمة تنظيف احترافية يوفر عليك الوقت والجهد ويضمن أفضل النتائج.
              </p>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">احصل على خدمة تنظيف سجاد احترافية</h3>
                <p className="text-gray-700 mb-4">
                  فريق شركة النظافة العصرية جاهز لتقديم خدمة تنظيف سجاد شاملة ومتخصصة.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:+966592425757"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors text-center"
                  >
                    احجز خدمة تنظيف السجاد
                  </a>
                  <a 
                    href="https://wa.me/966592425757"
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
      {/* <Footer /> */}
    </>
  )
} 