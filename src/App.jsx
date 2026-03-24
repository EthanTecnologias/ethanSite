import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

// 1. COMPONENTES GLOBAIS
import { Navbar } from "./components/Navbar";
import { ContactFooter } from "./components/ContactFooter";
import { CustomCursor } from "./components/CustomCursor";
import { AnimatedBackground } from "./components/AnimatedBackground";

// 2. SEÇÕES DA HOME
import { AccountingHero } from "./components/Hero";
import { FeaturesSection } from "./components/FeaturesSection";
import { StatsSection } from "./components/StatsSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { ProcessSection } from "./components/ProcessSection";
import { BlogSection } from "./components/BlogSection";
import { TestimonialsSection } from "./components/TestimonialsSection";

// 3. PÁGINA DE SERVIÇO E DADOS
import { ServicePage } from "./pages/ServicePage"; 
import { servicesData } from "./data/ServiceData";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  // Inicializa o tema com base no localStorage ou padrão 'dark'
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  // Aplica/Remove a classe 'dark' no documento para os componentes filhos reagirem
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className={`relative min-h-screen w-full transition-colors duration-500 font-sans
      ${isDark ? 'bg-[#020617] text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* FUNDO ANIMADO (Passamos o estado para ele suavizar as bolhas no modo claro) */}
      <AnimatedBackground isDark={isDark} />

      {/* UTILITÁRIOS */}
      <CustomCursor isDark={isDark} />
      <ScrollToTop />

      {/* BOTÃO TOGGLE TEMÁTICO (Design Pill Flutuante) */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className={`fixed bottom-8 right-8 z-[100] p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border flex items-center justify-center
          ${isDark 
            ? 'bg-white/10 border-white/20 text-cyan-400 hover:bg-white/20' 
            : 'bg-white/80 border-slate-200 text-cyan-600 hover:shadow-xl shadow-cyan-900/10'
          } backdrop-blur-lg`}
      >
        {isDark ? <Sun size={24} strokeWidth={1.5} /> : <Moon size={24} strokeWidth={1.5} />}
      </button>

      {/* NAVEGAÇÃO (Passamos o isDark para ela ajustar as cores internas) */}
      <Navbar isDark={isDark} />

      <Routes>
        <Route path="/" element={
          <main className="relative z-10 w-full">
            <AccountingHero isDark={isDark} />
            <FeaturesSection isDark={isDark} />
            <StatsSection isDark={isDark} />
            <AboutSection isDark={isDark} />
            <ServicesSection isDark={isDark} />
            <ProcessSection isDark={isDark} />
            <BlogSection isDark={isDark} />
            <TestimonialsSection isDark={isDark} />
          </main>
        } />

        <Route path="/servicos/bpo-financeiro" element={<ServicePage serviceData={servicesData.bpo} isDark={isDark} />} />
        <Route path="/servicos/contabilidade" element={<ServicePage serviceData={servicesData.contabilidade} isDark={isDark} />} />
        <Route path="/servicos/business-intelligence" element={<ServicePage serviceData={servicesData.bi} isDark={isDark} />} />
        <Route path="/servicos/controladoria" element={<ServicePage serviceData={servicesData.controladoria} isDark={isDark} />} />
        <Route path="/servicos/desenvolvimento-web" element={<ServicePage serviceData={servicesData.web} isDark={isDark} />} />

        <Route path="*" element={
          <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
            <h1 className={`text-6xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>404</h1>
            <p className="text-gray-500 mb-8 tracking-widest uppercase">Página não encontrada</p>
            <Link to="/" className="px-6 py-3 bg-cyan-500 text-white font-bold rounded-full hover:bg-cyan-400 transition-colors">
              Voltar para Home
            </Link>
          </div>
        } />
      </Routes>

      <ContactFooter isDark={isDark} />
    </div>
  );
}