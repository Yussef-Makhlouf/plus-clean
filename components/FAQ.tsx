'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "ما هي مواعيد العمل لديكم؟",
    answer: "نعمل على مدار الساعة طوال أيام الأسبوع. يمكنك حجز موعد في أي وقت يناسبك."
  },
  {
    question: "هل تستخدمون منتجات تنظيف آمنة للبيئة؟",
    answer: "نعم، نحن نستخدم منتجات تنظيف صديقة للبيئة وآمنة للأطفال والحيوانات الأليفة."
  },
  {
    question: "كم من الوقت تستغرق عملية التنظيف العادية؟",
    answer: "يعتمد ذلك على حجم المساحة ونوع الخدمة. عادة ما تستغرق عملية التنظيف المنزلي من 2 إلى 4 ساعات."
  },
  {
    question: "هل أحتاج إلى توفير معدات التنظيف الخاصة بي؟",
    answer: "لا، نحن نوفر جميع المعدات والمنظفات اللازمة. ما عليك سوى توفير الوصول إلى المكان المراد تنظيفه."
  },
  {
    question: "هل لديكم ضمان على خدماتكم؟",
    answer: "نعم، نحن نقدم ضمان الرضا على جميع خدماتنا. إذا لم تكن راضيًا عن النتيجة، سنعيد التنظيف مجانًا."
  }
]

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#1976D2]">الأسئلة الشائعة</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-right">{item.question}</AccordionTrigger>
              <AccordionContent className="text-right">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

