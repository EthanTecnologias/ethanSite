import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AboutSection } from "./components/AboutSection";
import { ContactFooter } from "./components/ContactFooter";
import { FeaturesSection } from "./components/FeaturesSection";
import { AccountingHero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProcessSection } from "./components/ProcessSection";
import { ServicesSection } from "./components/ServicesSection";
import { StatsSection } from "./components/StatsSection";
import ContabilidadePage from "./components/contabilidade";
import BPOFinanceiroPage from "./components/BPOFinanceiro";
import TecnologiaPage from "./components/Tecnologia";
import BlogPage from "./blog";
import { WhatsAppButton } from "./components/WhatsAppButton";
import SobreNosPage from "./components/SobreNos";
// Componente para forçar a página a começar do topo ao mudar de rota
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// ... seus imports

export function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Navbar />
      
      <Routes>
        <Route path="/" element={
          <main>
            <AccountingHero />
            <FeaturesSection />
            <StatsSection />
            <AboutSection />
            <ServicesSection />
            <ProcessSection />
          </main>
        } />

        {/* Ajustei o nome da rota para ficar mais fácil e sem erros de digitação */}
        <Route path="/contabilidade" element={<ContabilidadePage />} />
        <Route path="/financeiro" element={<BPOFinanceiroPage />} /> 
        <Route path="/tecnologia" element={<TecnologiaPage />} /> 
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/sobre" element={<SobreNosPage />} />
        
      </Routes>

      <ContactFooter />
      <WhatsAppButton />
    </Router>
  );
}