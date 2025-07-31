import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">عذراً، المقال غير موجود</h2>
      <p className="text-gray-600 mb-8">
        لم نتمكن من العثور على المقال الذي تبحث عنه. ربما تم حذفه أو نقله إلى مكان آخر.
      </p>
      <Link
        href="/blog"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
      >
        العودة إلى المدونة
      </Link>
    </div>
  )
} 