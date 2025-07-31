'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import SectionHeader from './SectionHeader';
import { HelpCircle, Info, Clock, CheckCircle2, Shield, Leaf, Users, Star, Zap, ShieldCheck, Award } from 'lucide-react';

const faqItems = [
  {
    question: "ما هي مواعيد العمل لديكم في الرياض؟",
    answer: (
      <div>
        <p>نعمل على مدار الساعة، 7 أيام في الأسبوع، بما في ذلك أيام العطل الرسمية، لنكون في خدمتكم دائمًا. سواء كنت في حي العليا، الملز، أو النسيم، يمكنك حجز موعد تنظيف في الوقت الذي يناسبك، وسنصل إليك بسرعة لتقديم خدماتنا المتميزة.</p>
        <div className="flex items-center gap-2 mt-2 text-blue-700"><Clock className="w-5 h-5" /> <span>خدمة متوفرة 24/7 في جميع أحياء الرياض</span></div>
      </div>
    )
  },
  {
    question: "هل تستخدمون منتجات تنظيف آمنة للبيئة؟",
    answer: (
      <div>
        <p>بالتأكيد، نحن ملتزمون باستخدام منتجات تنظيف صديقة للبيئة وآمنة تمامًا للأطفال والحيوانات الأليفة. هذه المنتجات معتمدة صحيًا ومصممة للحفاظ على سلامتكم وبيئتكم، سواء كنا ننظف المنازل، الكنب، أو السجاد في الرياض.</p>
        <div className="flex items-center gap-2 mt-2 text-green-700"><Leaf className="w-5 h-5" /> <span>مواد تنظيف خضراء وآمنة</span></div>
      </div>
    )
  },
  {
    question: "كم من الوقت تستغرق عملية التنظيف العادية؟",
    answer: (
      <div>
        <p>تختلف المدة حسب حجم المكان ونوع الخدمة. على سبيل المثال، تنظيف شقة صغيرة قد يستغرق من ساعتين إلى 4 ساعات، بينما تنظيف الفلل أو التنظيف العميق قد يحتاج إلى وقت إضافي. نحن نضمن إنجاز العمل بكفاءة في جميع أحياء الرياض.</p>
        <div className="flex items-center gap-2 mt-2 text-yellow-700"><Info className="w-5 h-5" /> <span>مدة مرنة حسب احتياجاتك</span></div>
      </div>
    )
  },
  {
    question: "هل أحتاج إلى توفير معدات التنظيف الخاصة بي؟",
    answer: (
      <div>
        <p>لا داعي لذلك! نحن نأتي مجهزين بكافة الأدوات والمعدات المتطورة اللازمة لتنظيف منازلكم، فللكم، أو حتى خزانات المياه. كل ما تحتاجه هو تحديد الموعد وفتح الباب لفريقنا المحترف في الرياض.</p>
        <div className="flex items-center gap-2 mt-2 text-cyan-700"><CheckCircle2 className="w-5 h-5" /> <span>أدوات حديثة نوفرها لك</span></div>
      </div>
    )
  },
  {
    question: "هل لديكم ضمان على خدماتكم؟",
    answer: (
      <div>
        <p>نعم، نقدم ضمان رضا 100% على جميع خدمات التنظيف. إذا لم تكن النتيجة مرضية بالنسبة لك، سنعاود التنظيف مجانًا حتى تكون سعيدًا تمامًا. نحن هنا لنضمن راحتك في كل زاوية من منزلك بالرياض.</p>
        <div className="flex items-center gap-2 mt-2 text-teal-700"><Shield className="w-5 h-5" /> <span>ضمان جودة وراحة بال</span></div>
      </div>
    )
  },
  {
    question: "ما هي تكلفة خدمات التنظيف لديكم؟",
    answer: (
      <div>
        <p>نقدم أسعارًا تنافسية تناسب الجميع: تنظيف الشقق يبدأ من 300 ريال، الفلل من 800 ريال، غسيل السجاد 4 ريال للمتر المربع، وتنظيف الكنب من 220 ريال. تواصلوا معنا للحصول على عرض سعر مخصص يلبي احتياجاتكم في الرياض.</p>
        <div className="flex items-center gap-2 mt-2 text-blue-700"><Info className="w-5 h-5" /> <span>أسعار شفافة ومناسبة</span></div>
      </div>
    )
  },
  {
    question: "هل تغطون جميع أحياء الرياض؟",
    answer: (
      <div>
        <p>نعم، نحن نصل إلى كل ركن في الرياض! من حي الروضة إلى السليمانية، ومن العزيزية إلى قرطبة، فريقنا جاهز لتقديم خدمات التنظيف بسرعة وكفاءة أينما كنت في المدينة.</p>
        <div className="flex items-center gap-2 mt-2 text-green-700"><Users className="w-5 h-5" /> <span>خدمة شاملة في كل الأحياء</span></div>
      </div>
    )
  },
  {
    question: "ما الخدمات المتخصصة التي تقدمونها؟",
    answer: (
      <div>
        <p>نقدم مجموعة واسعة من الخدمات المتخصصة تشمل تنظيف السجاد  تعقيم الخزانات، تلميع الأثاث، وتنظيف المكاتب. فريقنا يستخدم تقنيات حديثة لضمان نتائج مذهلة في كل مرة.</p>
        <div className="flex items-center gap-2 mt-2 text-yellow-700"><Star className="w-5 h-5" /> <span>تنظيف متخصص بجودة عالية</span></div>
      </div>
    )
  },
  {
    question: "كيف يمكنني حجز موعد للتنظيف؟",
    answer: (
      <div>
        <p>الحجز سهل وسريع! يمكنك زيارة موقعنا الإلكتروني أو التواصل معنا عبر الواتساب أو الاتصال على الرقم +966123456789. نحن جاهزون لمساعدتك في أي وقت، سواء لتنظيف منزل أو مكتب في الرياض.</p>
        <div className="flex items-center gap-2 mt-2 text-cyan-700"><Zap className="w-5 h-5" /> <span>حجز فوري بضغطة زر</span></div>
      </div>
    )
  },
  {
    question: "هل هناك عروض للعملاء الجدد؟",
    answer: (
      <div>
        <p>بالطبع! نوفر خصمًا خاصًا بنسبة 15% للعملاء الجدد على أول خدمة تنظيف، سواء كانت للمنازل، الفلل، أو السجاد. تحقق من موقعنا للحصول على أحدث العروض المتاحة في الرياض.</p>
        <div className="flex items-center gap-2 mt-2 text-teal-700"><Award className="w-5 h-5" /> <span>عروض مميزة لكم</span></div>
      </div>
    )
  }
]

export default function FAQ() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#e0f7fa]" aria-label="الأسئلة الشائعة - خدمات تنظيف في الرياض">
      <div className="container mx-auto px-6">
        <SectionHeader title="الأسئلة الشائعة حول خدمات التنظيف في الرياض" />
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