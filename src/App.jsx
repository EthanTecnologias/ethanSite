import { AboutSection } from "./components/AboutSection";
import { ContactFooter } from "./components/ContactFooter";
import { CustomCursor } from "./components/CustomCursor";
import { FeaturesSection } from "./components/FeaturesSection";
import { AccountingHero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProcessSection } from "./components/ProcessSection";
import { ServicesSection } from "./components/ServicesSection";
import { StatsSection } from "./components/StatsSection";
export function App() {
  return (
    <>
    <AccountingHero />
    <CustomCursor />
    <Navbar />
    <FeaturesSection />
    <StatsSection />
    <AboutSection />
    <ServicesSection />
    <ProcessSection />
    <ContactFooter />
    </>
  )
}