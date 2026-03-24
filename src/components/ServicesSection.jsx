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

export function ServicesSection() {
  return (
    /* Ajuste de Espaçamento: 
       Troquei 'mt-10' por 'py-24' para dar respiro entre as seções e 
       removi o '-mt-32' se estiver usando o About Me logo acima.
    */
    <section className="relative z-30 py-24 px-6 bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER DA SEÇÃO */}
        <div className="mb-16">
          <h2 className="text-cyan-400 font-mono text-xs tracking-[0.4em] uppercase mb-4 opacity-80">
            Nossos Serviços
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl">
            Sua empresa merece uma <br />
            <span className="text-gray-500">gestão de alta performance.</span>
          </h3>
        </div>

        {/* GRID DE CARDS: 
            Ajustado para 'lg:grid-cols-5' para acomodar os 5 serviços em linha no desktop.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((s, index) => (
            <motion.div 
              key={index}
              className="group relative p-6 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md overflow-hidden transition-all duration-500"
              whileHover={{ y: -10 }}
            >
              {/* Efeito Glow no Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Detalhe da Borda Lateral */}
              <div className="absolute left-0 top-1/4 h-1/2 w-[2px] bg-cyan-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center" />

              <div className="relative z-10">
                {/* Ícone */}
                <div className="mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(s.icon, { size: 28, strokeWidth: 1.5 })}
                </div>

                <h3 className="text-white font-bold text-lg mb-3 tracking-tight leading-snug">
                  {s.title}
                </h3>
                
                <p className="text-gray-400 text-xs leading-relaxed font-light">
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