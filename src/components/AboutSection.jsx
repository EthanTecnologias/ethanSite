import React from 'react';
import { motion } from 'framer-motion';
// Importe sua foto aqui
// import fotoPerfil from './assets/perfil.jpg';

export function AboutSection() {
  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
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
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/5] lg:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2000" // Substitua por 'fotoPerfil'
                alt="Profissional Responsável"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              {/* Overlay de Vidro sutil no rodapé da imagem */}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#020617] to-transparent">
                <p className="text-white font-bold text-xl">Nome do Sócio</p>
                <p className="text-cyan-400 text-sm font-mono tracking-widest uppercase">CEO & Founder</p>
              </div>
            </div>
          </motion.div>

          {/* COLUNA 2: TEXTO E CONTEÚDO */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase mb-4">
              Ethan Group
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight leading-tight">
              Unindo tradição contábil à <span className="text-gray-500">inovação digital.</span>
            </h3>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                Com mais de 5 anos no mercado, entendemos que contabilidade não é apenas sobre números, mas sobre a viabilidade de sonhos e o crescimento de parcerias sólidas.
              </p>
              <p>
                Nossa missão é simplificar a complexidade tributária brasileira através de tecnologia proprietária e um atendimento consultivo que coloca você no controle total do seu patrimônio.
              </p>
            </div>

            {/* Assinatura ou Associações (Opcional) */}
            <div className="mt-12 flex items-center gap-8">
               <div className="flex flex-col">
                  <span className="text-white font-bold italic text-2xl font-serif">Assinatura Aqui</span>
                  <span className="text-gray-600 text-xs uppercase tracking-widest mt-1">Sócio Diretor</span>
               </div>
               <div className="h-12 w-px bg-white/10" />
               <div className="flex gap-4 opacity-50">
                  {/* Logos de conselhos (CRC, etc) */}
                  <div className="w-10 h-10 bg-white/10 rounded-full" />
                  <div className="w-10 h-10 bg-white/10 rounded-full" />
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}