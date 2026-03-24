import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    desc: "Analisamos sua situação fiscal e financeira atual sem custos."
  },
  {
    number: "02",
    title: "Onboarding",
    desc: "Integração digital rápida de todos os seus dados e contas."
  },
  {
    number: "03",
    title: "Execução",
    desc: "Gestão ativa, BPO e monitoramento em tempo real via BI."
  },
  {
    number: "04",
    title: "Escalabilidade",
    desc: "Relatórios mensais focados em redução de custos e lucro."
  }
];

export function ProcessSection({ isDark }) {
  return (
    <section className={`py-24 transition-colors duration-500 border-t relative overflow-hidden
      ${isDark ? 'bg-[#020617] border-white/5' : 'bg-slate-50 border-slate-200'}`}>
      
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 text-center">
          <h2 className={`font-mono text-xs tracking-[0.4em] uppercase mb-4 transition-colors
            ${isDark ? 'text-cyan-400' : 'text-cyan-600 font-bold'}`}>
            Fluxo de Trabalho
          </h2>
          <h3 className={`text-3xl md:text-5xl font-extrabold tracking-tight transition-colors duration-500
            ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Sua empresa em <span className={isDark ? 'text-gray-500' : 'text-slate-400'}>4 etapas simples.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group p-8 rounded-3xl border transition-all duration-500 text-left
                ${isDark 
                  ? 'bg-white/[0.02] border-white/5 hover:border-cyan-400/30 shadow-2xl shadow-black/20' 
                  : 'bg-white/60 border-slate-200 hover:border-cyan-500/30 shadow-xl shadow-slate-200/40'}`}
            >
              {/* Número de fundo estilizado */}
              <span className={`absolute -top-4 -right-4 text-7xl font-black transition-colors pointer-events-none
                ${isDark 
                  ? 'text-white/[0.03] group-hover:text-cyan-400/[0.05]' 
                  : 'text-slate-200/40 group-hover:text-cyan-500/10'}`}>
                {step.number}
              </span>

              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-full border flex items-center justify-center font-bold mb-6 transition-all
                  ${isDark 
                    ? 'border-cyan-400/30 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-gray-900' 
                    : 'border-cyan-500/40 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white shadow-sm'}`}>
                  {step.number}
                </div>
                
                <h4 className={`text-xl font-bold mb-4 transition-colors duration-500
                  ${isDark ? 'text-white' : 'text-slate-800'}`}>
                  {step.title}
                </h4>
                
                <p className={`text-sm leading-relaxed font-light transition-colors duration-500
                  ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}