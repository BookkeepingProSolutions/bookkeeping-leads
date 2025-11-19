import Image from "next/image";
import Hero from "@/components/Hero";
import EbookCards from "@/components/EbookCards";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Hero />
      <EbookCards />
      <ContactForm />
      <Footer />
    </main>
  );
}
