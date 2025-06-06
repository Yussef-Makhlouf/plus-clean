import Image from 'next/image'
import SectionHeader from './SectionHeader'

const galleryImages = [
  '/placeholder.svg?height=300&width=400',
  '/placeholder.svg?height=300&width=400',
  '/placeholder.svg?height=300&width=400',
  '/placeholder.svg?height=300&width=400',
  '/placeholder.svg?height=300&width=400',
  '/placeholder.svg?height=300&width=400',
]

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <SectionHeader title="معرض أعمالنا" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image 
                src={image} 
                alt={`Gallery image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

