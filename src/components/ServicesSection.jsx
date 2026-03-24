import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Landmark, BarChart3, ShieldCheck, Code2 } from 'lucide-react';

const services = [
  { 
    title: "BPO Financeiro", 
    icon: <Zap />, 
    desc: "Terceirização completa da gestão financeira para focar no seu core business." 
  },
  { 
    title: "Contabilidade", 
    icon: <Landmark />, 
    desc: "Conformidade total e consultoria estratégica para sua jornada empresarial." 
  },
  { 
    title: "Business Intelligence",
    icon: <BarChart3 />, 
    desc: "Análise de dados avançada para tomadas de decisão rápidas e precisas." 
  },
  { 
    title: "Controladoria", 
    icon: <ShieldCheck />, 
    desc: "Monitoramento e controle de processos para garantir a saúde do negócio." 
  },
  { 
    title: "Desenvolvimento WEB", 
    icon: <Code2 />, 
    desc: "Criação de ecossistemas digitais robustos e de alta performance." 
  },
];

export function ServicesSection({ isDark }) {
  return (
    <section className={`relative z-30 py-24 px-6 transition-colors duration-500
      ${isDark ? 'bg-[#020617]' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER DA SEÇÃO */}
        <div className="mb-16 text-left">
          <h2 className={`font-mono text-xs tracking-[0.4em] uppercase mb-4 transition-colors
            ${isDark ? 'text-cyan-400 opacity-80' : 'text-cyan-600 font-bold'}`}>
            Nossos Serviços
          </h2>
          <h3 className={`text-3xl md:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl transition-colors duration-500
            ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Sua empresa merece uma <br />
            <span className={isDark ? 'text-gray-500' : 'text-slate-400'}>gestão de alta performance.</span>
          </h3>
        </div>

        {/* GRID DE CARDS: 5 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((s, index) => (
            <motion.div 
              key={index}
              className={`group relative p-6 rounded-3xl border backdrop-blur-md overflow-hidden transition-all duration-500
                ${isDark 
                  ? 'bg-white/[0.03] border-white/10' 
                  : 'bg-white/80 border-slate-200 shadow-lg shadow-slate-200/50'}`}
              whileHover={{ y: -10 }}
            >
              {/* Efeito Glow no Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                ${isDark ? 'bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent' : 'bg-gradient-to-br from-cyan-50/50 to-transparent'}`} />
              
              {/* Detalhe da Borda Lateral */}
              <div className={`absolute left-0 top-1/4 h-1/2 w-[2px] transition-transform duration-500 origin-center scale-y-0 group-hover:scale-y-100
                ${isDark ? 'bg-cyan-400' : 'bg-cyan-600'}`} />

              <div className="relative z-10">
                {/* Ícone */}
                <div className={`mb-6 transition-transform duration-300 group-hover:scale-110
                  ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  {React.cloneElement(s.icon, { size: 28, strokeWidth: 1.5 })}
                </div>

                <h3 className={`font-bold text-lg mb-3 tracking-tight leading-snug transition-colors duration-500
                  ${isDark ? 'text-white' : 'text-slate-800'}`}>
                  {s.title}
                </h3>
                
                <p className={`text-xs leading-relaxed font-light transition-colors duration-500
                  ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}