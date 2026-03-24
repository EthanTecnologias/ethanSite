import React from 'react';
import { motion } from 'framer-motion';

export function AboutSection({ isDark }) {
  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-500 
      ${isDark ? 'bg-[#020617]' : 'bg-slate-50'}`}>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* COLUNA 1: FOTO COM EFEITO TECH */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Moldura Decorativa (Glow de fundo) */}
            <div className={`absolute -inset-4 rounded-3xl blur-2xl transition-opacity duration-500 opacity-30 group-hover:opacity-60
              ${isDark ? 'bg-gradient-to-tr from-cyan-500/20 to-transparent' : 'bg-cyan-500/10'}`} 
            />
            
            <div className={`relative rounded-2xl overflow-hidden border aspect-[4/5] lg:aspect-square shadow-2xl transition-colors duration-500
              ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
              
              <img 
                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2000" 
                alt="Profissional Responsável"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />

              {/* Overlay de Vidro no rodapé da imagem */}
              <div className={`absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t to-transparent
                ${isDark ? 'from-[#020617]' : 'from-white/90'}`}>
                <p className={`font-bold text-xl transition-colors duration-500
                  ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Nome do Sócio
                </p>
                <p className={`text-sm font-mono tracking-widest uppercase transition-colors
                  ${isDark ? 'text-cyan-400' : 'text-cyan-600 font-semibold'}`}>
                  CEO & Founder
                </p>
              </div>
            </div>
          </motion.div>

          {/* COLUNA 2: TEXTO E CONTEÚDO */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center text-left"
          >
            <h2 className={`font-mono text-sm tracking-[0.3em] uppercase mb-4 transition-colors
              ${isDark ? 'text-cyan-400' : 'text-cyan-600 font-bold'}`}>
              Nossa Essência
            </h2>
            
            <h3 className={`text-4xl md:text-5xl font-extrabold mb-8 tracking-tight leading-tight transition-colors duration-500
              ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Unindo tradição contábil à <span className={isDark ? 'text-gray-500' : 'text-slate-400'}>inovação digital.</span>
            </h3>
            
            <div className={`space-y-6 text-lg leading-relaxed font-light transition-colors duration-500
              ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
              <p>
                Com mais de 15 anos no mercado, entendemos que contabilidade não é apenas sobre números, mas sobre a viabilidade de sonhos e o crescimento de parcerias sólidas.
              </p>
              <p>
                Nossa missão é simplificar a complexidade tributária brasileira através de tecnologia proprietária e um atendimento consultivo que coloca você no controle total do seu patrimônio.
              </p>
            </div>

            {/* Assinatura ou Associações */}
            <div className="mt-12 flex items-center gap-8">
               <div className="flex flex-col">
                  <span className={`font-bold italic text-2xl font-serif transition-colors
                    ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    Assinatura Aqui
                  </span>
                  <span className={`text-xs uppercase tracking-widest mt-1
                    ${isDark ? 'text-gray-600' : 'text-slate-400'}`}>
                    Sócio Diretor
                  </span>
               </div>
               
               <div className={`h-12 w-px transition-colors
                 ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />
               
               <div className="flex gap-4 opacity-40">
                  <div className={`w-10 h-10 rounded-full transition-colors
                    ${isDark ? 'bg-white/10' : 'bg-slate-200 border border-slate-300'}`} />
                  <div className={`w-10 h-10 rounded-full transition-colors
                    ${isDark ? 'bg-white/10' : 'bg-slate-200 border border-slate-300'}`} />
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}