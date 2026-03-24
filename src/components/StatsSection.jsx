import React from 'react';

export function StatsSection() {
  const stats = [
    { label: "Anos de Experiência", value: "15+" },
    { label: "Clientes Ativos", value: "500+" },
    { label: "Impostos Recuperados", value: "R$ 12M" },
    { label: "Especialistas", value: "25" },
  ];

  return (
    <section className="relative py-20 bg-[#020617] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* TEXTO DE APOIO DA SEÇÃO */}
        <div className="text-center mb-20">
          <h2 className="text-cyan-400 font-mono text-xs md:text-sm tracking-[0.4em] uppercase mb-4 opacity-80">
            Nossa Trajetória
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Resultados sólidos construídos com <span className="text-gray-500">inteligência e transparência.</span>
          </h3>
          <p className="mt-6 text-gray-400 text-lg font-light max-w-2xl mx-auto">
            Mais do que números, apresentamos a segurança financeira que proporcionamos para centenas de empresas em todo o país.
          </p>
        </div>

        {/* GRID DE ESTATÍSTICAS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 md:gap-x-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="relative font-extrabold text-5xl md:text-6xl tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-transform duration-300 group-hover:scale-105">
                {stat.value}
                <div className="w-10 h-1 bg-cyan-400 mx-auto mt-2 rounded-full opacity-50 md:hidden" />
              </div>
              <div className="mt-4 font-light text-xs md:text-sm text-cyan-400/70 uppercase tracking-[0.25em] max-w-[150px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Linha decorativa final - Ajustada para maior sutileza */}
        <div className="mt-24 border-t border-white/5 w-full" />
      </div>
    </section>
  );
}