import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import FindingsSection from "@/components/FindingsSection";
import AboutSection from "@/components/AboutSection";
import ConclusionSection from "@/components/ConclusionSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ImpactSection />
        <FindingsSection />
        <AboutSection />
        <ConclusionSection />
        <ContactSection />
      </main>
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Heleen Hendriksen
        </div>
      </footer>
    </div>
  );
};

export default Index;
