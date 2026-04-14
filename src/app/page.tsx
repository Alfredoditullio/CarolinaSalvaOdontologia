import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import SplashScreen from "@/components/SplashScreen";
import FloatingImages from "@/components/FloatingImages";

export default function Home() {
  return (
    <SplashScreen>
      <Navbar />
      <main className="relative">
        <FloatingImages />
        <Hero />
        <About />
        <Services />
        <Results />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </SplashScreen>
  );
}
