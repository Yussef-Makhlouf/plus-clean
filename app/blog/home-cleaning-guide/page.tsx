import { Metadata } from 'next'
// import Header from '@/components/Header'
// import Footer from '@/components/Footer'



export default function HomeCleaningGuidePage() {
  return (
    <>
      {/* <Header /> */}
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="bg-white rounded-lg shadow-lg p-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                دليل شامل لتنظيف المنزل في الرياض - نصائح احترافية من شركة النظافة العصرية
              </h1>
              <div className="flex items-center text-gray-600 mb-4">
                <time dateTime="2024-03-20">20 مارس 2024</time>
                <span className="mx-2">•</span>
                <span>قراءة 8 دقائق</span>
              </div>
              <img 
                src="/home-cleaning-guide.avif" 
                alt="دليل تنظيف المنزل في الرياض"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                تنظيف المنزل ليس مجرد مهمة روتينية، بل هو فن يتطلب معرفة وخبرة. في هذا الدليل الشامل، 
                نشارككم أفضل النصائح والطرق الاحترافية لتنظيف منزلكم في الرياض، مستندين إلى خبرة 
                أكثر من 10 سنوات في مجال التنظيف الاحترافي.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                أهمية التنظيف المنتظم للمنزل
              </h2>
              <p className="text-gray-700 mb-4">
                التنظيف المنتظم للمنزل له فوائد عديدة تتجاوز المظهر الجمالي:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>تحسين جودة الهواء الداخلي وتقليل مسببات الحساسية</li>
                <li>الوقاية من الأمراض المعدية ونمو البكتيريا</li>
                <li>إطالة عمر الأثاث والأجهزة المنزلية</li>
                <li>تحسين الصحة النفسية وخلق بيئة مريحة</li>
                <li>توفير الوقت والجهد على المدى الطويل</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                أدوات التنظيف الأساسية المطلوبة
              </h2>
              <p className="text-gray-700 mb-4">
                قبل البدء في تنظيف المنزل، تأكد من توفر هذه الأدوات الأساسية:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">أدوات التنظيف العامة</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• مكنسة كهربائية عالية الجودة</li>
                    <li>• ممسحة أرضية وممسحة للغبار</li>
                    <li>• فرشاة تنظيف متعددة الاستخدامات</li>
                    <li>• قفازات مطاطية للحماية</li>
                    <li>• مناشف قطنية نظيفة</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">مواد التنظيف الطبيعية</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• الخل الأبيض لإزالة الترسبات</li>
                    <li>• بيكربونات الصوديوم للتنظيف العميق</li>
                    <li>• عصير الليمون للتلميع</li>
                    <li>• زيت شجرة الشاي للتعقيم</li>
                    <li>• صابون غسيل الأطباق</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                دليل تنظيف المطبخ خطوة بخطوة
              </h2>
              <p className="text-gray-700 mb-4">
                المطبخ هو قلب المنزل ويحتاج عناية خاصة. اتبع هذه الخطوات لتنظيف شامل:
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">الخطوة الأولى: تنظيف الأجهزة</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>افصل جميع الأجهزة الكهربائية عن التيار الكهربائي</li>
                <li>نظف الثلاجة من الداخل والخارج باستخدام محلول الخل والماء</li>
                <li>أزل الدهون المتراكمة من الفرن والمايكروويف</li>
                <li>نظف غسالة الأطباق من الداخل وأزل الرواسب</li>
                <li>تأكد من تنظيف شفاط المطبخ وإزالة الدهون المتراكمة</li>
              </ol>

              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">الخطوة الثانية: تنظيف الخزائن والأسطح</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>أفرغ جميع الخزائن وامسحها من الداخل</li>
                <li>نظف الأسطح الرخامية أو الجرانيت بالماء والصابون</li>
                <li>استخدم بيكربونات الصوديوم لإزالة البقع الصعبة</li>
                <li>تلميع الصنابير والأحواض بالخل والليمون</li>
                <li>نظف الأرضيات بالماء والصابون أو الخل</li>
              </ol>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                دليل تنظيف الحمامات
              </h2>
              <p className="text-gray-700 mb-4">
                الحمامات تحتاج تنظيفاً دقيقاً لمنع نمو البكتيريا والعفن:
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">تنظيف المرحاض</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>رش المرحاض بمنظف قوي واتركه 10 دقائق</li>
                <li>استخدم فرشاة تنظيف المرحاض مع المنظف</li>
                <li>نظف المقعد والغطاء بالكامل</li>
                <li>امسح الخزان من الخارج</li>
                <li>تعقيم جميع الأسطح الملامسة</li>
              </ol>

              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">تنظيف الحوض والدش</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>أزل الترسبات الجيرية بالخل والليمون</li>
                <li>نظف المرايا والزجاج بمنظف خاص</li>
                <li>امسح البلاط والفواصل لإزالة العفن</li>
                <li>نظف أنظمة التهوية والمراوح</li>
                <li>تعقيم الأرضيات وجميع الأسطح</li>
              </ol>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                تنظيف غرف النوم والصالات
              </h2>
              <p className="text-gray-700 mb-4">
                غرف النوم تحتاج تنظيفاً هادئاً ودقيقاً للحفاظ على بيئة صحية:
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">تنظيف غرف النوم</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>أزل الغبار من جميع الأسطح والأثاث</li>
                <li>نظف الأسرّة والوسائد بالمكنسة الكهربائية</li>
                <li>امسح الأرضيات والجدران</li>
                <li>نظف النوافذ والستائر</li>
                <li>تعطير الغرفة بمواد طبيعية</li>
              </ol>

              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">تنظيف الصالات والمجالس</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>نظف الكنب والمفروشات بالمكنسة الكهربائية</li>
                <li>امسح الطاولات والديكورات</li>
                <li>نظف السجاد والموكيت</li>
                <li>تلميع الأثاث الخشبي</li>
                <li>ترتيب المجلات والكتب</li>
              </ol>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                نصائح احترافية للتنظيف في الرياض
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">التعامل مع الغبار والرمال</h3>
                <p className="text-blue-800 mb-4">
                  نظراً لمناخ الرياض الصحراوي، يتراكم الغبار بسرعة. استخدم:
                </p>
                <ul className="text-blue-800 space-y-2">
                  <li>• مماسح المايكروفايبر لالتقاط الغبار بدلاً من نشره</li>
                  <li>• تنظيف يومي للأسطح المكشوفة</li>
                  <li>• إغلاق النوافذ خلال العواصف الرملية</li>
                  <li>• استخدام فلاتر الهواء عالية الكفاءة</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-green-900 mb-3">التنظيف الصديق للبيئة</h3>
                <p className="text-green-800 mb-4">
                  احرص على استخدام مواد تنظيف طبيعية وآمنة:
                </p>
                <ul className="text-green-800 space-y-2">
                  <li>• الخل الأبيض لإزالة الترسبات والروائح</li>
                  <li>• بيكربونات الصوديوم للتنظيف العميق</li>
                  <li>• عصير الليمون للتلميع والتعقيم</li>
                  <li>• زيت شجرة الشاي للتعقيم الطبيعي</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                جدول التنظيف الأسبوعي المقترح
              </h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-right">اليوم</th>
                      <th className="border border-gray-300 p-3 text-right">المهام</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">الأحد</td>
                      <td className="border border-gray-300 p-3">تنظيف المطبخ والأجهزة</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">الاثنين</td>
                      <td className="border border-gray-300 p-3">تنظيف الحمامات</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">الثلاثاء</td>
                      <td className="border border-gray-300 p-3">تنظيف غرف النوم</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">الأربعاء</td>
                      <td className="border border-gray-300 p-3">تنظيف الصالات والمجالس</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">الخميس</td>
                      <td className="border border-gray-300 p-3">تنظيف الأرضيات والسجاد</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">الجمعة</td>
                      <td className="border border-gray-300 p-3">تنظيف النوافذ والزجاج</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">السبت</td>
                      <td className="border border-gray-300 p-3">تنظيف شامل وترتيب عام</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                متى تحتاج لخدمة تنظيف احترافية؟
              </h2>
              <p className="text-gray-700 mb-4">
                رغم أهمية التنظيف اليومي، هناك مواقف تحتاج لخدمة تنظيف احترافية:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>بعد الانتقال إلى منزل جديد</li>
                <li>قبل وبعد المناسبات الكبيرة</li>
                <li>بعد أعمال البناء أو التجديد</li>
                <li>لتنظيف عميق موسمي</li>
                <li>عند وجود مشاكل صحية في العائلة</li>
                <li>لتنظيف المناطق صعبة الوصول</li>
              </ul>

              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-yellow-900 mb-3">نصيحة من خبراء شركة النظافة العصرية</h3>
                <p className="text-yellow-800">
                  "الاستثمار في خدمة تنظيف احترافية منتظمة يوفر عليك الوقت والجهد، 
                  ويضمن بيئة منزلية صحية ونظيفة دائماً. فريقنا المدرب يستخدم أحدث 
                  التقنيات ومواد التنظيف الآمنة لضمان أفضل النتائج."
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                الخلاصة
              </h2>
              <p className="text-gray-700 mb-6">
                تنظيف المنزل فن يتطلب معرفة وخبرة. باتباع هذا الدليل الشامل والنصائح 
                الاحترافية، يمكنك الحفاظ على منزل نظيف وصحي. تذكر أن التنظيف المنتظم 
                استثمار في صحة وسعادة عائلتك.
              </p>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">هل تحتاج مساعدة احترافية؟</h3>
                <p className="text-gray-700 mb-4">
                  فريق شركة النظافة العصرية جاهز لمساعدتك في تنظيف منزلك بأعلى معايير الجودة.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:+966569131252"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors text-center"
                  >
                    اتصل بنا الآن
                  </a>
                  <a 
                    href="https://wa.me/966569131252"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors text-center"
                  >
                    تواصل عبر واتساب
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