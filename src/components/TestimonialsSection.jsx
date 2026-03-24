import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Ricardo Mendes",
    role: "CEO na TechFlow",
    content: "A transição para o BPO Financeiro deles mudou nosso jogo. Hoje temos clareza total do fluxo de caixa e decisões baseadas em BI real.",
    avatar: "https://i.pravatar.cc/150?u=ricardo"
  },
  {
    name: "Beatriz Soares",
    role: "Fundadora da Studio Criativo",
    content: "Finalmente uma contabilidade que fala a língua do empreendedor digital. Processos ágeis e suporte que realmente resolve.",
    avatar: "https://i.pravatar.cc/150?u=beatriz"
  },
  {
    name: "Marcos Oliveira",
    role: "Diretor na Logix S.A",
    content: "O planejamento tributário que realizaram nos economizou 15% de carga tributária no primeiro ano. Extremamente profissionais.",
    avatar: "https://i.pravatar.cc/150?u=marcos"
  }
];

export function TestimonialsSection({ isDark }) {
  return (
    <section className={`py-24 transition-colors duration-500 relative overflow-hidden border-t 
      ${isDark ? 'bg-[#020617] border-white/5' : 'bg-slate-50 border-slate-200'}`}>
      
      {/* Efeito de luz decorativo ao fundo */}
      <div className={`absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] blur-[120px] rounded-full pointer-events-none transition-colors duration-500
        ${isDark ? 'bg-cyan-500/5' : 'bg-cyan-500/10 opacity-50'}`} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <h2 className={`font-mono text-xs tracking-[0.4em] uppercase mb-4 transition-colors
            ${isDark ? 'text-cyan-400' : 'text-cyan-600 font-bold'}`}>
            Depoimentos
          </h2>
          <h3 className={`text-3xl md:text-5xl font-extrabold tracking-tight transition-colors duration-500
            ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Quem confia em nossa <span className={isDark ? 'text-gray-500' : 'text-slate-400'}>gestão.</span>
          </h3>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-3xl border backdrop-blur-sm flex flex-col justify-between transition-all duration-500 group
                ${isDark 
                  ? 'bg-white/[0.02] border-white/10 hover:bg-white/[0.04]' 
                  : 'bg-white/70 border-slate-200 shadow-xl shadow-slate-200/50 hover:bg-white/90'}`}
            >
              {/* Aspas decorativas (SVG Puro) */}
              <div className={`mb-6 transition-colors duration-500
                ${isDark ? 'text-cyan-400/20 group-hover:text-cyan-400' : 'text-cyan-600/20 group-hover:text-cyan-600'}`}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.56929 13 5.017 13H3.017V21H5.017Z"/></svg>
              </div>

              <p className={`text-lg italic font-light leading-relaxed mb-8 transition-colors duration-500
                ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-colors
                  ${isDark ? 'border-cyan-400/30' : 'border-cyan-600/20'}`}>
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div>
                  <h4 className={`font-bold text-sm transition-colors
                    ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.name}</h4>
                  <p className={`text-[10px] uppercase tracking-widest transition-colors
                    ${isDark ? 'text-cyan-400' : 'text-cyan-600 font-bold'}`}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}