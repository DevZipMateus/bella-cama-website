import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import VitrineCTA from "@/components/VitrineCTA";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <VitrineCTA />
        <Contact />
      </main>
    <Footer />
    <WhatsAppButton />
  </div>
  );
};

export default Index;
