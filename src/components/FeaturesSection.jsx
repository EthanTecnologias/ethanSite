import React from 'react';
import { ShieldCheck, TrendingUp, Cpu, Users } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    { title: "Segurança Fiscal", icon: <ShieldCheck className="w-8 h-8 text-cyan-400" />, desc: "Descritivo focado em resultados e conformidade estratégica." },
    { title: "Contabilidade Digital", icon: <Cpu className="w-8 h-8 text-cyan-400" />, desc: "Descritivo sobre tecnologia e agilidade nos processos." },
    { title: "Planejamento Tributário", icon: <TrendingUp className="w-8 h-8 text-cyan-400" />, desc: "Análise profunda para redução legal da carga tributária." },
    { title: "Suporte Consultivo", icon: <Users className="w-8 h-8 text-cyan-400" />, desc: "Mais que geradores de guias, somos parceiros estratégicos." },
  ];

  return (
    /* A MÁGICA RESPONSIVA ACONTECE AQUI:
       - mt-0 : No mobile, margem zero (segue o fluxo natural).
       - md:-mt-32 : Em desktop, puxamos para cima sobre a Hero.
       - pt-20 : Padding top alto no mobile para dar espaço após os CTAs.
       - md:pt-0 : Sem padding top no desktop (a margem negativa resolve).
    */
    <section className="relative z-30 mt-12 m pt-16 md:pt-0 px-6 pb-24 bg-transparent">
      <div className="max-w-7xl mx-auto">
        
        {/* Grid de Cards - Ajustando gap para mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((f, index) => (
            <div 
              key={index}
              className="p-8 bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="mb-4 inline-block p-3 bg-cyan-400/10 rounded-lg group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}