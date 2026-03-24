import React from 'react';
import { ShieldCheck, TrendingUp, Cpu, Users } from 'lucide-react';

export function FeaturesSection({ isDark }) {
  const features = [
    { title: "Segurança Fiscal", icon: <ShieldCheck className={`w-8 h-8 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />, desc: "Descritivo focado em resultados e conformidade estratégica." },
    { title: "Contabilidade Digital", icon: <Cpu className={`w-8 h-8 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />, desc: "Descritivo sobre tecnologia e agilidade nos processos." },
    { title: "Planejamento Tributário", icon: <TrendingUp className={`w-8 h-8 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />, desc: "Análise profunda para redução legal da carga tributária." },
    { title: "Suporte Consultivo", icon: <Users className={`w-8 h-8 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />, desc: "Mais que geradores de guias, somos parceiros estratégicos." },
  ];

  return (
    <section className="relative z-30 mt-0 md:-mt-32 pt-16 md:pt-0 px-6 pb-24 bg-transparent">
      <div className="max-w-7xl mx-auto">
        
        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((f, index) => (
            <div 
              key={index}
              className={`p-8 backdrop-blur-xl border rounded-2xl shadow-2xl transition-all duration-500 group hover:-translate-y-2
                ${isDark 
                  ? 'bg-gray-900/90 border-white/10' 
                  : 'bg-white/80 border-slate-200/60 shadow-slate-200/50'}`}
            >
              <div className={`mb-4 inline-block p-3 rounded-lg group-hover:scale-110 transition-all duration-300
                ${isDark ? 'bg-cyan-400/10' : 'bg-cyan-50'}`}>
                {f.icon}
              </div>
              
              <h3 className={`text-xl font-bold mb-2 transition-colors duration-500
                ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {f.title}
              </h3>
              
              <p className={`text-sm leading-relaxed transition-colors duration-500
                ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}