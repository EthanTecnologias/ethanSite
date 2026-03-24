import React from 'react';

export function StatsSection({ isDark }) {
  const stats = [
    { label: "Anos de Experiência", value: "15+" },
    { label: "Clientes Ativos", value: "500+" },
    { label: "Impostos Recuperados", value: "R$ 12M" },
    { label: "Especialistas", value: "25" },
  ];

  return (
    <section className={`relative py-24 transition-colors duration-500 overflow-hidden
      ${isDark ? 'bg-[#020617]' : 'bg-white'}`}>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* TEXTO DE APOIO DA SEÇÃO */}
        <div className="text-center mb-20">
          <h2 className={`font-mono text-xs md:text-sm tracking-[0.4em] uppercase mb-4 transition-colors
            ${isDark ? 'text-cyan-400 opacity-80' : 'text-cyan-600 font-bold'}`}>
            Nossa Trajetória
          </h2>
          <h3 className={`text-3xl md:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl mx-auto transition-colors duration-500
            ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Resultados sólidos construídos com <span className={isDark ? 'text-gray-500' : 'text-slate-400'}>inteligência e transparência.</span>
          </h3>
          <p className={`mt-6 text-lg font-light max-w-2xl mx-auto transition-colors duration-500
            ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
            Mais do que números, apresentamos a segurança financeira que proporcionamos para centenas de empresas em todo o país.
          </p>
        </div>

        {/* GRID DE ESTATÍSTICAS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 md:gap-x-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className={`relative font-extrabold text-5xl md:text-6xl tracking-tighter transition-all duration-500 group-hover:scale-105
                ${isDark 
                  ? 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]' 
                  : 'text-slate-900 drop-shadow-sm'}`}>
                {stat.value}
                <div className={`w-10 h-1 mx-auto mt-2 rounded-full opacity-50 md:hidden transition-colors
                  ${isDark ? 'bg-cyan-400' : 'bg-cyan-600'}`} />
              </div>
              <div className={`mt-4 font-light text-xs md:text-sm uppercase tracking-[0.25em] max-w-[150px] transition-colors duration-500
                ${isDark ? 'text-cyan-400/70' : 'text-cyan-600 font-medium'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Linha decorativa final */}
        <div className={`mt-24 border-t w-full transition-colors
          ${isDark ? 'border-white/5' : 'border-slate-100'}`} />
      </div>
    </section>
  );
}