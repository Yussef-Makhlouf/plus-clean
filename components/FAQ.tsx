'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import SectionHeader from './SectionHeader';
import { HelpCircle, Info, Clock, CheckCircle2, Shield, Leaf } from 'lucide-react';

const faqItems = [
  {
    question: "ما هي مواعيد العمل لديكم؟",
    answer: (
      <div>
        <p>نعمل على مدار الساعة طوال أيام الأسبوع، بما في ذلك العطل الرسمية. يمكنك حجز موعد في أي وقت يناسبك، وسنكون جاهزين لخدمتك في أسرع وقت ممكن.</p>
        <div className="flex items-center gap-2 mt-2 text-blue-700"><Clock className="w-5 h-5" /> <span>خدمة 24/7</span></div>
      </div>
    )
  },
  {
    question: "هل تستخدمون منتجات تنظيف آمنة للبيئة؟",
    answer: (
      <div>
        <p>نعم، نحن نستخدم منتجات تنظيف صديقة للبيئة وآمنة للأطفال والحيوانات الأليفة. جميع المواد معتمدة من الجهات الصحية وتضمن حماية البيئة وصحة عائلتك.</p>
        <div className="flex items-center gap-2 mt-2 text-green-700"><Leaf className="w-5 h-5" /> <span>منتجات صديقة للبيئة</span></div>
      </div>
    )
  },
  {
    question: "كم من الوقت تستغرق عملية التنظيف العادية؟",
    answer: (
      <div>
        <p>يعتمد ذلك على حجم المساحة ونوع الخدمة المطلوبة. عادة ما تستغرق عملية التنظيف المنزلي من 2 إلى 4 ساعات، بينما قد تستغرق خدمات التنظيف العميق أو التعقيم وقتاً أطول حسب الحاجة.</p>
        <div className="flex items-center gap-2 mt-2 text-yellow-700"><Info className="w-5 h-5" /> <span>تقدير الوقت حسب الخدمة</span></div>
      </div>
    )
  },
  {
    question: "هل أحتاج إلى توفير معدات التنظيف الخاصة بي؟",
    answer: (
      <div>
        <p>لا، نحن نوفر جميع المعدات والمنظفات اللازمة. فريقنا مجهز بالكامل بأحدث الأدوات لضمان أفضل نتيجة. كل ما عليك هو توفير الوصول إلى المكان المراد تنظيفه فقط.</p>
        <div className="flex items-center gap-2 mt-2 text-cyan-700"><CheckCircle2 className="w-5 h-5" /> <span>معداتنا متطورة وحديثة</span></div>
      </div>
    )
  },
  {
    question: "هل لديكم ضمان على خدماتكم؟",
    answer: (
      <div>
        <p>نعم، نحن نقدم ضمان الرضا على جميع خدماتنا. إذا لم تكن راضيًا عن النتيجة، سنعيد التنظيف مجانًا حتى تحقق الرضا الكامل. هدفنا هو سعادتك وراحتك.</p>
        <div className="flex items-center gap-2 mt-2 text-teal-700"><Shield className="w-5 h-5" /> <span>ضمان رضا 100%</span></div>
      </div>
    )
  },
]

export default function FAQ() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#e0f7fa]">
      <div className="container mx-auto px-6">
        <SectionHeader title="الأسئلة الشائعة" />
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto mt-12">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-2xl shadow-lg mb-6 border border-teal-100 overflow-hidden">
              <AccordionTrigger className="text-right text-lg font-bold px-6 py-4 flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-[#00897B]" />
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-right px-6 pb-6 text-gray-700 text-base leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

