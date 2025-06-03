import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
// import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import RiyadhNeighborhoods from "@/components/RiyadhNeighborhoods";
import Services from "@/components/Services";
import ServicesImagesSection from "@/components/serviceWithImages";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutUs />
{/* <Gallery /> */}
<RiyadhNeighborhoods />
      <Pricing />
      <Services />
      <ServicesImagesSection />
      {/* <Testimonials /> */}
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}

