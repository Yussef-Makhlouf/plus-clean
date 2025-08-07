  // import { Metadata } from 'next'
  // import Header from '@/components/Header'
  // import Footer from '@/components/Footer'



export default function PestControlGuidePage() {
  return (
    <>
      {/* <Header /> */}
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="bg-white rounded-lg shadow-lg p-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                دليل مكافحة الحشرات في الرياض - حماية منزلك من الآفات الضارة
              </h1>
              <div className="flex items-center text-gray-600 mb-4">
                <time dateTime="2024-03-10">10 مارس 2024</time>
                <span className="mx-2">•</span>
                <span>قراءة 14 دقيقة</span>
              </div>
              <img 
                src="/pest_control.jpg" 
                alt="دليل مكافحة الحشرات في الرياض"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                الحشرات والآفات من أكبر المشاكل التي تواجه أصحاب المنازل في الرياض. 
                في هذا الدليل الشامل، نشارككم أفضل الطرق الاحترافية لمكافحة الحشرات 
                والوقاية منها، مستندين إلى خبرة أكثر من 10 سنوات في مجال مكافحة الآفات.
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-6">
                <h2 className="text-2xl font-bold text-red-900 mb-3">⚠️ تحذير مهم</h2>
                <p className="text-red-800">
                  استخدام المبيدات الكيميائية يتطلب خبرة ومعدات خاصة. يفضل الاستعانة 
                  بشركة متخصصة لضمان السلامة وفعالية المكافحة.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                لماذا نحتاج لمكافحة الحشرات؟
              </h2>
              <p className="text-gray-700 mb-4">
                مكافحة الحشرات ضرورة صحية واقتصادية للأسباب التالية:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>الوقاية من الأمراض المنقولة بالحشرات</li>
                <li>حماية الأثاث والمنسوجات من التلف</li>
                <li>منع تلوث الطعام والمياه</li>
                <li>تحسين جودة الحياة في المنزل</li>
                <li>حماية الأطفال وكبار السن من الحساسية</li>
                <li>الحفاظ على نظافة وصحة المنزل</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                أنواع الحشرات الشائعة في الرياض
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-3">الصراصير</h3>
                  <ul className="text-blue-800 space-y-2">
                    <li>• تنتشر في المطابخ والحمامات</li>
                    <li>• تنقل الأمراض والجراثيم</li>
                    <li>• تتكاثر بسرعة كبيرة</li>
                    <li>• تحتاج مكافحة شاملة</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-900 mb-3">النمل</h3>
                  <ul className="text-green-800 space-y-2">
                    <li>• يدخل المنزل بحثاً عن الطعام</li>
                    <li>• يبني مستعمرات في الجدران</li>
                    <li>• يسبب تلف في الأخشاب</li>
                    <li>• يحتاج مكافحة للمستعمرة كاملة</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-bold text-purple-900 mb-3">البق</h3>
                  <ul className="text-purple-800 space-y-2">
                    <li>• يتغذى على دم الإنسان</li>
                    <li>• يسبب حساسية وحكة</li>
                    <li>• يختبئ في الفراش والأثاث</li>
                    <li>• يحتاج مكافحة متخصصة</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-bold text-yellow-900 mb-3">الفئران</h3>
                  <ul className="text-yellow-800 space-y-2">
                    <li>• تنقل أمراض خطيرة</li>
                    <li>• تسبب تلف في الأسلاك والأثاث</li>
                    <li>• تلوث الطعام والمياه</li>
                    <li>• تحتاج مكافحة فورية</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                طرق الوقاية من الحشرات
              </h2>
              <p className="text-gray-700 mb-4">
                الوقاية خير من العلاج. اتبع هذه النصائح لمنع دخول الحشرات:
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">إغلاق نقاط الدخول</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>أغلق الشقوق والثقوب في الجدران</li>
                <li>أصلح الشبابيك والأبواب المكسورة</li>
                <li>ضع شبك على النوافذ والفتحات</li>
                <li>أغلق فتحات التهوية بفلتر</li>
                <li>أصلح تسريبات المياه والأنابيب</li>
              </ol>

              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">النظافة العامة</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>حافظ على نظافة المطبخ والحمامات</li>
                <li>أغلق حاويات الطعام بإحكام</li>
                <li>نظف بقايا الطعام فوراً</li>
                <li>أفرغ سلة المهملات بانتظام</li>
                <li>نظف الأرضيات والسطوح يومياً</li>
              </ol>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                طرق مكافحة الحشرات
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">المكافحة الطبيعية</h3>
              <p className="text-gray-700 mb-4">
                الطرق الطبيعية آمنة وفعالة للمكافحة الأولية:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>استخدام الخل الأبيض لطرد النمل</li>
                <li>زيت النعناع لطرد الصراصير</li>
                <li>الليمون لطرد الذباب</li>
                <li>الريحان لطرد البعوض</li>
                <li>القرنفل لطرد العث</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">المكافحة الكيميائية</h3>
              <p className="text-gray-700 mb-4">
                المبيدات الكيميائية تحتاج استخدام احترافي:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>استخدم مبيدات معتمدة من وزارة الصحة</li>
                <li>اقرأ تعليمات الاستخدام بعناية</li>
                <li>ارتدِ معدات الحماية المناسبة</li>
                <li>أبعد الأطفال والحيوانات الأليفة</li>
                <li>تهوية المكان بعد الاستخدام</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                مكافحة الحشرات حسب النوع
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">مكافحة الصراصير</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>نظف المطبخ والحمامات جيداً</li>
                <li>أغلق حاويات الطعام والشراب</li>
                <li>استخدم طعوم الصراصير</li>
                <li>رش المبيدات في الشقوق والزوايا</li>
                <li>استخدم الجل السام للصراصير</li>
                <li>أصلح تسريبات المياه</li>
              </ol>

              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">مكافحة النمل</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>حدد مسار النمل ومستعمرته</li>
                <li>استخدم طعوم النمل السامة</li>
                <li>رش المبيدات على مسار النمل</li>
                <li>أغلق نقاط الدخول</li>
                <li>نظف بقايا الطعام فوراً</li>
                <li>استخدم الخل لطرد النمل</li>
              </ol>

              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">مكافحة البق</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>اغسل الفراش والملابس بالماء الساخن</li>
                <li>استخدم المكنسة الكهربائية للتنظيف</li>
                <li>رش المبيدات على الأثاث والفراش</li>
                <li>استخدم بخاخات خاصة بالبق</li>
                <li>أغلف المراتب بغطاء واقي</li>
                <li>استخدم مصائد البق</li>
              </ol>

              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">مكافحة الفئران</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                <li>أغلق جميع نقاط الدخول</li>
                <li>استخدم مصائد الفئران</li>
                <li>ضع طعوم سامة في الأماكن المناسبة</li>
                <li>نظف المناطق المحيطة بالمنزل</li>
                <li>أصلح تسريبات المياه</li>
                <li>استخدم القطط كوسيلة طبيعية</li>
              </ol>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                جدول المكافحة الدورية
              </h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-right">الفترة</th>
                      <th className="border border-gray-300 p-3 text-right">نوع المكافحة</th>
                      <th className="border border-gray-300 p-3 text-right">المناطق المستهدفة</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">أسبوعياً</td>
                      <td className="border border-gray-300 p-3">فحص وتنظيف</td>
                      <td className="border border-gray-300 p-3">المطبخ، الحمامات، المداخل</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">شهرياً</td>
                      <td className="border border-gray-300 p-3">مكافحة وقائية</td>
                      <td className="border border-gray-300 p-3">جميع المناطق المعرضة</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">كل 3 أشهر</td>
                      <td className="border border-gray-300 p-3">مكافحة شاملة</td>
                      <td className="border border-gray-300 p-3">المنزل بالكامل</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-bold">عند الحاجة</td>
                      <td className="border border-gray-300 p-3">مكافحة طارئة</td>
                      <td className="border border-gray-300 p-3">المناطق المصابة</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                نصائح للمكافحة الآمنة في الرياض
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-3">التعامل مع المناخ الصحراوي</h3>
                  <ul className="text-blue-800 space-y-2">
                    <li>• رش المبيدات في الصباح الباكر</li>
                    <li>• تجنب الرش في الأيام الحارة</li>
                    <li>• استخدم مبيدات مقاومة للحرارة</li>
                    <li>• احفظ المبيدات في مكان بارد</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-900 mb-3">السلامة العامة</h3>
                  <ul className="text-green-800 space-y-2">
                    <li>• ارتدِ قفازات وكمامة أثناء الرش</li>
                    <li>• أبعد الأطفال والحيوانات</li>
                    <li>• تهوية المكان بعد الرش</li>
                    <li>• اغسل اليدين بعد الاستخدام</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                متى تحتاج خدمة مكافحة احترافية؟
              </h2>
              <p className="text-gray-700 mb-4">
                هناك مواقف تحتاج لخدمة مكافحة احترافية متخصصة:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>انتشار الحشرات بشكل كبير</li>
                <li>فشل الطرق المنزلية في المكافحة</li>
                <li>وجود حشرات خطيرة (العقارب، الثعابين)</li>
                <li>مكافحة شاملة للمباني التجارية</li>
                <li>حاجة لمكافحة متخصصة (البق، النمل الأبيض)</li>
                <li>مكافحة وقائية دورية</li>
              </ul>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-purple-900 mb-3">خدمة مكافحة الحشرات الاحترافية</h3>
                <p className="text-purple-800 mb-4">
                  نقدم خدمة مكافحة حشرات شاملة تستخدم أحدث التقنيات:
                </p>
                <ul className="text-purple-800 space-y-2">
                  <li>• فحص شامل للمنزل</li>
                  <li>• تحديد نوع الحشرات وطرق مكافحتها</li>
                  <li>• استخدام مبيدات آمنة ومعتمدة</li>
                  <li>• مكافحة شاملة لجميع أنواع الحشرات</li>
                  <li>• ضمان على جودة المكافحة</li>
                  <li>• متابعة دورية لمنع عودة الحشرات</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                الخلاصة
              </h2>
              <p className="text-gray-700 mb-6">
                مكافحة الحشرات ضرورة صحية لحماية عائلتك ومنزلك. باتباع هذا الدليل 
                والنصائح الاحترافية، يمكنك الوقاية من الحشرات ومكافحتها بفعالية. 
                تذكر أن الاستثمار في خدمة مكافحة احترافية يوفر عليك الوقت والجهد 
                ويضمن أفضل النتائج.
              </p>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">احصل على خدمة مكافحة حشرات احترافية</h3>
                <p className="text-gray-700 mb-4">
                  فريق شركة النظافة العصرية جاهز لتقديم خدمة مكافحة حشرات شاملة ومتخصصة.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:+966569131252"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors text-center"
                  >
                    احجز خدمة مكافحة الحشرات
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
        {/* <Footer /> */}
    </>
  )
} 