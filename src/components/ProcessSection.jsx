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

export function ProcessSection() {
  return (
    <section className="py-24 bg-[#020617] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 text-center">
          <h2 className="text-cyan-400 font-mono text-xs tracking-[0.4em] uppercase mb-4">Fluxo de Trabalho</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Sua empresa em <span className="text-gray-500">4 etapas simples.</span>
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
              className="relative group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 transition-all duration-500"
            >
              {/* Número de fundo estilizado */}
              <span className="absolute -top-4 -right-4 text-7xl font-black text-white/[0.03] group-hover:text-cyan-400/[0.05] transition-colors">
                {step.number}
              </span>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full border border-cyan-400/30 flex items-center justify-center text-cyan-400 font-bold mb-6 group-hover:bg-cyan-400 group-hover:text-gray-900 transition-all">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
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