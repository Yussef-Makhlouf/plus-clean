// import { Metadata } from 'next'
// import Header from '@/components/Header'
// import Footer from '@/components/Footer'



export default function HomeDisinfectionGuidePage() {
  return (
    <>
      {/* <Header /> */}
      <main className="min-h-screen bg-gray-50 py-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="bg-white rounded-lg shadow-lg p-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                دليل تعقيم المنازل في الرياض - حماية عائلتك من الأمراض المعدية
              </h1>
              <div className="flex items-center text-gray-600 mb-4">
                <time dateTime="2024-03-18">18 مارس 2024</time>
                <span className="mx-2">•</span>
                <span>قراءة 10 دقائق</span>
              </div>
              <img 
                src="/home-disinfection.avif" 
                alt="دليل تعقيم المنازل في الرياض"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                في عصر الأمراض المعدية والفيروسات، أصبح تعقيم المنزل ضرورة صحية وليست رفاهية. 
                هذا الدليل الشامل يقدم لك أفضل الطرق العلمية لتعقيم منزلك في الرياض، 
                مستندين إلى خبرة شركة النظافة العصرية في مجال التعقيم الاحترافي.
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h2 className="text-2xl font-bold text-red-900 mb-3">⚠️ تحذير مهم</h2>
                <p className="text-red-800">
                  عند استخدام مواد التعقيم الكيميائية، احرص على ارتداء قفازات واقية 
                  وتهوية المكان جيداً. احفظ المواد الكيميائية بعيداً عن متناول الأطفال.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                لماذا نحتاج لتعقيم المنزل؟
              </h2>
              <p className="text-gray-700 mb-4">
                التعقيم يختلف عن التنظيف العادي. بينما يزيل التنظيف الأوساخ المرئية، 
                يقضي التعقيم على البكتيريا والفيروسات والفطريات:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>الوقاية من الأمراض المعدية مثل الإنفلونزا والكورونا</li>
                <li>حماية الأطفال وكبار السن من العدوى</li>
                <li>منع نمو العفن والفطريات في المناطق الرطبة</li>
                <li>تحسين جودة الهواء الداخلي</li>
                <li>إطالة عمر الأثاث والأجهزة المنزلية</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                المواد المستخدمة في التعقيم
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-3">المواد الطبيعية الآمنة</h3>
                  <ul className="text-blue-800 space-y-2">
                    <li>• الخل الأبيض (5% حمض الخليك)</li>
                    <li>• بيروكسيد الهيدروجين 3%</li>
                    <li>• زيت شجرة الشاي</li>
                    <li>• عصير الليمون الطازج</li>
                    <li>• بيكربونات الصوديوم</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-900 mb-3">المواد الكيميائية الاحترافية</h3>
                  <ul className="text-green-800 space-y-2">
                    <li>• الكلور المخفف (1:10)</li>
                    <li>• الكحول الإيثيلي 70%</li>
                    <li>• الأمونيا المخففة</li>
                    <li>• مناديل التعقيم الجاهزة</li>
                    <li>• بخاخات التعقيم التجارية</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                دليل تعقيم المطبخ
              </h2>
              <p className="text-gray-700 mb-4">
                المطبخ من أكثر المناطق عرضة للتلوث البكتيري. اتبع هذه الخطوات:
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">تعقيم الأسطح والأجهزة</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>امسح جميع الأسطح بالماء والصابون أولاً</li>
                <li>استخدم محلول الكلور المخفف (1:10) للتعقيم</li>
                <li>اترك المحلول على السطح لمدة 5-10 دقائق</li>
                <li>اشطف بالماء النظيف وجفف بمنشفة نظيفة</li>
                <li>كرر العملية مرتين أسبوعياً</li>
              </ol>

              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">تعقيم الأجهزة الكهربائية</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>افصل الأجهزة عن التيار الكهربائي</li>
                <li>امسح الأسطح الخارجية بالكحول 70%</li>
                <li>نظف الثلاجة من الداخل بالخل المخفف</li>
                <li>تعقيم المايكروويف بالبخار والخل</li>
                <li>نظف غسالة الأطباق بدورة ساخنة فارغة</li>
              </ol>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                تعقيم الحمامات
              </h2>
              <p className="text-gray-700 mb-4">
                الحمامات بيئة مثالية لنمو البكتيريا والفطريات:
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">تعقيم المرحاض</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>رش المرحاض بمنظف قوي يحتوي على الكلور</li>
                <li>اترك المنظف لمدة 15-20 دقيقة</li>
                <li>استخدم فرشاة تنظيف مخصصة للمرحاض</li>
                <li>تعقيم المقعد والغطاء بالكحول</li>
                <li>امسح الخزان والمقابض بالمنظف</li>
              </ol>

              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">تعقيم الحوض والدش</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>أزل الترسبات الجيرية بالخل والليمون</li>
                <li>استخدم بيروكسيد الهيدروجين للتعقيم</li>
                <li>نظف المرايا والزجاج بالكحول</li>
                <li>تعقيم البلاط والفواصل بمنظف مضاد للفطريات</li>
                <li>امسح الأرضيات بالكلور المخفف</li>
              </ol>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                تعقيم غرف النوم والصالات
              </h2>
              <p className="text-gray-700 mb-4">
                غرف النوم تحتاج تعقيم دقيق لحماية أفراد العائلة:
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">تعقيم الأثاث والمفروشات</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>نظف الأثاث بالمكنسة الكهربائية أولاً</li>
                <li>امسح الأسطح الصلبة بالكحول 70%</li>
                <li>استخدم بخاخ تعقيم للمفروشات</li>
                <li>غسل الأغطية والوسائد بالماء الساخن</li>
                <li>تعقيم مقابض الأبواب والنوافذ</li>
              </ol>

              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">تعقيم الهواء</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>افتح النوافذ للتهوية الجيدة</li>
                <li>استخدم مرطب هواء مع زيت شجرة الشاي</li>
                <li>نظف فلاتر التكييف بانتظام</li>
                <li>استخدم أجهزة تنقية الهواء</li>
                <li>تعقيم أنظمة التهوية</li>
              </ol>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                تعقيم المناطق عالية الخطورة
              </h2>
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-yellow-900 mb-3">المناطق التي تحتاج تعقيم يومي</h3>
                <ul className="text-yellow-800 space-y-2">
                  <li>• مقابض الأبواب والنوافذ</li>
                  <li>• مفاتيح الإضاءة</li>
                  <li>• أجهزة التحكم عن بعد</li>
                  <li>• الهواتف والأجهزة الإلكترونية</li>
                  <li>• طاولات الطعام</li>
                  <li>• حوض المطبخ وصنابير المياه</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                جدول التعقيم الأسبوعي
              </h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-right">اليوم</th>
                      <th className="border border-gray-300 p-3 text-right">مهام التعقيم</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">الأحد</td>
                      <td className="border border-gray-300 p-3">تعقيم المطبخ والأجهزة</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">الاثنين</td>
                      <td className="border border-gray-300 p-3">تعقيم الحمامات</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">الثلاثاء</td>
                      <td className="border border-gray-300 p-3">تعقيم غرف النوم</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">الأربعاء</td>
                      <td className="border border-gray-300 p-3">تعقيم الصالات</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">الخميس</td>
                      <td className="border border-gray-300 p-3">تعقيم الأجهزة الإلكترونية</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">الجمعة</td>
                      <td className="border border-gray-300 p-3">تعقيم شامل للمنزل</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">السبت</td>
                      <td className="border border-gray-300 p-3">راحة وتقييم النتائج</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                نصائح احترافية للتعقيم في الرياض
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-3">التعامل مع المناخ الصحراوي</h3>
                  <ul className="text-blue-800 space-y-2">
                    <li>• استخدم مرطبات الهواء لتقليل الجفاف</li>
                    <li>• نظف فلاتر التكييف أسبوعياً</li>
                    <li>• تعقيم أنظمة التهوية بانتظام</li>
                    <li>• استخدم مواد تعقيم مقاومة للجفاف</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-900 mb-3">الوقاية من الأمراض الموسمية</h3>
                  <ul className="text-green-800 space-y-2">
                    <li>• زيادة وتيرة التعقيم في موسم الإنفلونزا</li>
                    <li>• تعقيم إضافي عند وجود مريض في المنزل</li>
                    <li>• استخدام أقنعة أثناء التعقيم</li>
                    <li>• تهوية المنزل بعد التعقيم</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                متى تحتاج خدمة تعقيم احترافية؟
              </h2>
              <p className="text-gray-700 mb-4">
                هناك مواقف تحتاج لخدمة تعقيم احترافية متخصصة:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>بعد إصابة أحد أفراد العائلة بمرض معدٍ</li>
                <li>قبل وبعد العمليات الجراحية</li>
                <li>عند وجود أطفال حديثي الولادة</li>
                <li>لتعقيم عميق موسمي</li>
                <li>بعد السفر أو استقبال ضيوف</li>
                <li>عند وجود حيوانات أليفة في المنزل</li>
              </ul>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-purple-900 mb-3">خدمة التعقيم الاحترافية من شركة النظافة العصرية</h3>
                <p className="text-purple-800 mb-4">
                  نقدم خدمة تعقيم شاملة تستخدم أحدث التقنيات والمواد المعتمدة:
                </p>
                <ul className="text-purple-800 space-y-2">
                  <li>• تعقيم بالبخار عالي الحرارة</li>
                  <li>• تعقيم بالأشعة فوق البنفسجية</li>
                  <li>• مواد تعقيم معتمدة من وزارة الصحة</li>
                  <li>• فريق مدرب ومؤهل</li>
                  <li>• ضمان على جودة التعقيم</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                الخلاصة
              </h2>
              <p className="text-gray-700 mb-6">
                تعقيم المنزل استثمار في صحة عائلتك. باتباع هذا الدليل والنصائح الاحترافية، 
                يمكنك خلق بيئة منزلية آمنة وصحية. تذكر أن التعقيم المنتظم هو أفضل دفاع 
                ضد الأمراض المعدية.
              </p>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">احصل على خدمة تعقيم احترافية</h3>
                <p className="text-gray-700 mb-4">
                  فريق شركة النظافة العصرية جاهز لتقديم خدمة تعقيم شاملة ومتخصصة لمنزلك.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:+966592425757"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors text-center"
                  >
                    احجز خدمة التعقيم
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