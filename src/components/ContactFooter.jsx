import React from 'react';
import { motion } from 'framer-motion';

export function ContactFooter() {
  return (
    <section className="relative py-24 bg-[#020617] overflow-hidden font-sans">
      
      {/* 1. CARD DE CONVERSÃO (CTA) */}
      <div className="max-w-5xl mx-auto px-6 mb-24">
        <motion.div 
          whileHover={{ y: -5 }}
          className="relative p-12 rounded-[2.5rem] bg-gradient-to-br from-cyan-600/20 to-blue-900/10 border border-white/10 text-center overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 blur-[120px] pointer-events-none" />

          <h3 className="relative z-10 text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Pronto para escalar sua <br />
            <span className="text-cyan-400">gestão financeira?</span>
          </h3>
          
          <p className="relative z-10 text-gray-400 text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Agende um diagnóstico gratuito e descubra como nosso ecossistema de BI e Controladoria pode maximizar seus lucros.
          </p>

          <button className="relative z-10 px-10 py-4 bg-cyan-400 hover:bg-cyan-300 text-[#020617] font-bold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-cyan-400/60 scale-100 hover:scale-105 active:scale-95">
            Falar com um Especialista
          </button>
        </motion.div>
      </div>

      {/* 2. RODAPÉ (FOOTER) */}
      <footer className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-left">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-black text-2xl tracking-tighter">
              NOME<span className="text-cyan-400">LOGO</span>
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
              Inteligência financeira e contabilidade estratégica para empresas de alta performance.
            </p>
          </div>

          {/* Links de Serviços */}
          <div>
            <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Serviços</h5>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">BPO Financeiro</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Contabilidade</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Business Intelligence</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Controladoria</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Desenvolvimento WEB</a></li>
            </ul>
          </div>

          {/* Contato Direto (Ícones em SVG Puro) */}
          <div>
            <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contato</h5>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                contato@empresa.com.br
              </li>
              <li className="flex items-center gap-2 text-white font-medium">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +55 (11) 99999-9999
              </li>
            </ul>
          </div>

          {/* Redes Sociais (SVG Puro) */}
          <div className="flex flex-col">
            <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Redes Sociais</h5>
            <div className="flex gap-3">
              {/* LinkedIn */}
              <a href="#" className="p-3 rounded-xl bg-white/5 text-gray-400 hover:bg-cyan-400 hover:text-[#020617] transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              
              {/* Instagram */}
              <a href="#" className="p-3 rounded-xl bg-white/5 text-gray-400 hover:bg-cyan-400 hover:text-[#020617] transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>

              {/* WhatsApp/Chat */}
              <a href="#" className="p-3 rounded-xl bg-white/5 text-gray-400 hover:bg-cyan-400 hover:text-[#020617] transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/5 text-gray-600 text-[10px] uppercase tracking-[0.3em] gap-4">
          <p>© 2026 NOME DA EMPRESA - TODOS OS DIREITOS RESERVADOS.</p>
          <p className="opacity-50 hover:opacity-100 transition-opacity">DESIGN & DEV BY YOU</p>
        </div>
      </footer>
    </section>
  );
}