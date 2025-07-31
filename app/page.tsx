import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RiyadhNeighborhoods from "@/components/RiyadhNeighborhoods";
import Services from "@/components/Services";
import ServicesImagesSection from "@/components/serviceWithImages";



export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutUs />
      <RiyadhNeighborhoods />
      <Services />
      <ServicesImagesSection />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}

