import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Materials from "@/components/Materials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Materials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
