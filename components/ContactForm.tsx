'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    // Here you would typically send the form data to your server
    alert('تم إرسال رسالتك بنجاح!')
  }

  return (
    <section id="contact" className="py-20 bg-[#ECEFF1]">
      <div className="container mx-auto px-6">
        <h2 className="section-title">تواصل معنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="card p-6">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">الاسم</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-2">رقم الهاتف</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">الرسالة</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded h-32"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">إرسال الرسالة</button>
            </form>
          </div>
          <div>
            <div className="card p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">معلومات الاتصال</h3>
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 text-[#00897B] ml-2" />
                <span>شارع الملك فهد، الرياض، المملكة العربية السعودية</span>
              </div>
              <div className="flex items-center mb-2">
                <Phone className="w-5 h-5 text-[#00897B] ml-2" />
                <span>+966 12 345 6789</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#00897B] ml-2" />
                <span>info@cleaningcompany.com</span>
              </div>
            </div>
            <div className="card p-6 h-64">
              {/* Here you would typically embed a map */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                خريطة الموقع
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

