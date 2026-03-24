import React from 'react';
import { motion } from 'framer-motion';

export function ServicePage({ serviceData, isDark }) {
  // Fallback de segurança
  if (!serviceData) return null;

  const { title, subtitle, icon: Icon, description, benefits, process } = serviceData;

  return (
    <main className={`relative z-10 pt-32 pb-24 px-6 min-h-screen font-sans selection:bg-cyan-500/30 transition-colors duration-500
      ${isDark ? 'text-white bg-transparent' : 'text-slate-900 bg-slate-50'}`}>
      
      {/* 1. HERO SECTION */}
      <section className="max-w-5xl mx-auto mb-32 flex flex-col items-center text-center">
        
        {/* Ícone Refinado */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`mb-8 p-4 rounded-2xl border transition-all duration-500 shadow-2xl
            ${isDark 
              ? 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20 shadow-cyan-400/10' 
              : 'bg-white text-cyan-600 border-slate-200 shadow-slate-200'}`}
        >
          {Icon && <Icon size={38} strokeWidth={1.5} />}
        </motion.div>
        
        {/* Título e Subtítulo */}
        <h1 className={`text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-tight transition-colors duration-500
          ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {title} <br />
          <span className={`italic text-xl md:text-2xl font-light opacity-80 transition-colors
            ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>
            {subtitle}
          </span>
        </h1>
        
        {/* Descrição */}
        <p className={`max-w-2xl text-base md:text-lg font-light leading-relaxed mb-12 transition-colors duration-500
          ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
          {description}
        </p>

        {/* MOCKUP / IMAGEM DE DESTAQUE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`relative max-w-3xl w-full mb-12 p-1.5 rounded-2xl border backdrop-blur-xl shadow-2xl overflow-hidden group transition-all duration-500
            ${isDark ? 'border-white/5 bg-white/[0.02]' : 'border-slate-200 bg-white/50'}`}
        >
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200" 
            alt="Interface do Sistema" 
            className={`w-full h-auto rounded-xl transition-all duration-700
              ${isDark ? 'opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-90' : 'opacity-80 group-hover:opacity-100'}`}
          />
          <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-40 transition-colors
            ${isDark ? 'from-[#020617]' : 'from-slate-200'}`} />
        </motion.div>

        <button className={`px-8 py-3 font-bold rounded-full transition-all duration-300 scale-100 hover:scale-105 text-sm uppercase tracking-wider
          ${isDark 
            ? 'bg-cyan-400 hover:bg-cyan-300 text-[#020617] shadow-cyan-400/20 hover:shadow-cyan-400/50' 
            : 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg shadow-cyan-600/20'}`}>
          Falar com um Especialista
        </button>
      </section>

      {/* 2. BENEFÍCIOS */}
      <section className={`max-w-5xl mx-auto mb-32 border-t pt-20 transition-colors
        ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
        <div className="text-center mb-16">
          <h2 className={`font-mono text-[10px] tracking-[0.5em] uppercase mb-4 transition-colors
            ${isDark ? 'text-cyan-400 opacity-70' : 'text-cyan-600 font-bold'}`}>
            Diferenciais
          </h2>
          <h3 className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors
            ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Ganhos para sua <span className={isDark ? 'text-gray-500 italic font-light' : 'text-slate-400 italic font-light'}>operação</span>
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits?.map((b, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }}
              className={`relative p-7 rounded-[1.5rem] border backdrop-blur-md transition-all duration-500 group flex flex-col justify-between h-auto min-h-[220px]
                ${isDark 
                  ? 'bg-white/[0.01] border-white/5 hover:border-cyan-400/20' 
                  : 'bg-white border-slate-200 shadow-xl shadow-slate-200/30 hover:border-cyan-500/30'}`}
            >
              <div className="relative z-10 text-left">
                <h4 className={`text-lg font-bold mb-3 transition-colors
                  ${isDark ? 'text-white group-hover:text-cyan-400' : 'text-slate-800 group-hover:text-cyan-600'}`}>
                  {b.item}
                </h4>
                <p className={`text-xs md:text-sm leading-relaxed font-light line-clamp-4 transition-colors
                  ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>
                  {b.detail}
                </p>
              </div>
              <div className={`w-8 h-[2px] rounded-full mt-6 transition-all group-hover:w-full
                ${isDark ? 'bg-cyan-400 opacity-20 group-hover:opacity-100' : 'bg-cyan-600 opacity-20 group-hover:opacity-100'}`} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. PROCESSO */}
      <section className={`max-w-5xl mx-auto py-20 border-t transition-colors
        ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start text-left">
          <div className="lg:sticky lg:top-32">
            <h2 className={`font-mono text-[10px] tracking-[0.5em] uppercase mb-4
              ${isDark ? 'text-cyan-400' : 'text-cyan-600 font-bold'}`}>
              O Caminho
            </h2>
            <h3 className={`text-3xl md:text-4xl font-black mb-6 tracking-tighter transition-colors
              ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Como funciona a <br/><span className={isDark ? 'text-cyan-400' : 'text-cyan-600'}>implantação?</span>
            </h3>
            <p className={`font-light text-base leading-relaxed transition-colors
              ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>
              Estrutura focada em agilidade e zero fricção com seu time.
            </p>
          </div>
          
          <div className="space-y-10 pl-4">
            {process?.map((p, i) => (
              <div key={i} className="flex gap-6 group">
                <span className={`text-4xl font-black transition-colors
                  ${isDark ? 'text-white/5 group-hover:text-cyan-400/20' : 'text-slate-200 group-hover:text-cyan-600/10'}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h5 className={`text-lg font-bold mb-1 transition-colors
                    ${isDark ? 'text-white group-hover:text-cyan-400' : 'text-slate-800 group-hover:text-cyan-600'}`}>
                    {p.step}
                  </h5>
                  <p className={`text-sm leading-relaxed font-light transition-colors
                    ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}