import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Importação crucial para SPA

export function ContactFooter({ isDark }) {
  return (
    <section className={`relative py-24 transition-colors duration-500 overflow-hidden font-sans
      ${isDark ? 'bg-[#020617]' : 'bg-slate-50'}`}>
      
      {/* 1. CARD DE CONVERSÃO (CTA) */}
      <div className="max-w-5xl mx-auto px-6 mb-24">
        <motion.div 
          whileHover={{ y: -5 }}
          className={`relative p-12 rounded-[2.5rem] border text-center overflow-hidden shadow-2xl transition-all duration-500
            ${isDark 
              ? 'bg-gradient-to-br from-cyan-600/20 to-blue-900/10 border-white/10' 
              : 'bg-gradient-to-br from-cyan-50 to-blue-100 border-cyan-100 shadow-cyan-900/5'}`}
        >
          {/* Efeito de luz de fundo */}
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 blur-[120px] pointer-events-none transition-colors
            ${isDark ? 'bg-cyan-500/10' : 'bg-cyan-400/30'}`} />

          <h3 className={`relative z-10 text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight transition-colors
            ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Pronto para escalar sua <br />
            <span className={isDark ? 'text-cyan-400' : 'text-cyan-600'}>gestão financeira?</span>
          </h3>
          
          <p className={`relative z-10 text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed transition-colors
            ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
            Agende um diagnóstico gratuito e descubra como nosso ecossistema de BI e Controladoria pode maximizar seus lucros.
          </p>

          <button className={`relative z-10 px-10 py-4 font-bold rounded-full transition-all duration-300 scale-100 hover:scale-105 active:scale-95
            ${isDark 
              ? 'bg-cyan-400 hover:bg-cyan-300 text-[#020617] shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-cyan-400/60' 
              : 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg shadow-cyan-600/20'}`}>
            Falar com um Especialista
          </button>
        </motion.div>
      </div>

      {/* 2. RODAPÉ (FOOTER) */}
      <footer className={`max-w-7xl mx-auto px-6 pt-12 border-t transition-colors
        ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-left">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <h4 className={`font-black text-2xl tracking-tighter transition-colors
              ${isDark ? 'text-white' : 'text-slate-900'}`}>
              NOME<span className={isDark ? 'text-cyan-400' : 'text-cyan-600'}>LOGO</span>
            </h4>
            <p className={`text-sm leading-relaxed max-w-[240px] transition-colors
              ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>
              Inteligência financeira e contabilidade estratégica para empresas de alta performance.
            </p>
          </div>

          {/* Links de Serviços - CORRIGIDOS PARA LINK */}
          <div>
            <h5 className={`font-bold mb-6 text-sm uppercase tracking-widest transition-colors
              ${isDark ? 'text-white' : 'text-slate-900'}`}>Serviços</h5>
            <ul className={`space-y-4 text-sm transition-colors
              ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>
              <li><Link to="/servicos/bpo-financeiro" className="hover:text-cyan-500 transition-colors">BPO Financeiro</Link></li>
              <li><Link to="/servicos/contabilidade" className="hover:text-cyan-500 transition-colors">Contabilidade</Link></li>
              <li><Link to="/servicos/business-intelligence" className="hover:text-cyan-500 transition-colors">Business Intelligence</Link></li>
              <li><Link to="/servicos/controladoria" className="hover:text-cyan-500 transition-colors">Controladoria</Link></li>
              <li><Link to="/servicos/desenvolvimento-web" className="hover:text-cyan-500 transition-colors">Desenvolvimento WEB</Link></li>
            </ul>
          </div>

          {/* Contato Direto */}
          <div>
            <h5 className={`font-bold mb-6 text-sm uppercase tracking-widest transition-colors
              ${isDark ? 'text-white' : 'text-slate-900'}`}>Contato</h5>
            <ul className={`space-y-4 text-sm transition-colors
              ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>
              <li className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isDark ? "text-cyan-400" : "text-cyan-600"}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                contato@empresa.com.br
              </li>
              <li className={`flex items-center gap-2 font-medium transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isDark ? "text-cyan-400" : "text-cyan-600"}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +55 (11) 99999-9999
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="flex flex-col">
            <h5 className={`font-bold mb-6 text-sm uppercase tracking-widest transition-colors
              ${isDark ? 'text-white' : 'text-slate-900'}`}>Redes Sociais</h5>
            <div className="flex gap-3">
              {/* LinkedIn */}
              <a href="#" className={`p-3 rounded-xl transition-all duration-300
                ${isDark 
                  ? 'bg-white/5 text-gray-400 hover:bg-cyan-400 hover:text-[#020617]' 
                  : 'bg-slate-200 text-slate-600 hover:bg-cyan-600 hover:text-white'}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" className={`p-3 rounded-xl transition-all duration-300
                ${isDark 
                  ? 'bg-white/5 text-gray-400 hover:bg-cyan-400 hover:text-[#020617]' 
                  : 'bg-slate-200 text-slate-600 hover:bg-cyan-600 hover:text-white'}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              {/* WhatsApp */}
              <a href="#" className={`p-3 rounded-xl transition-all duration-300
                ${isDark 
                  ? 'bg-white/5 text-gray-400 hover:bg-cyan-400 hover:text-[#020617]' 
                  : 'bg-slate-200 text-slate-600 hover:bg-cyan-600 hover:text-white'}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`flex flex-col md:flex-row justify-between items-center py-8 border-t text-[10px] uppercase tracking-[0.3em] gap-4 transition-colors
          ${isDark ? 'border-white/5 text-gray-600' : 'border-slate-200 text-slate-400'}`}>
          <p>© 2026 NOME DA EMPRESA - TODOS OS DIREITOS RESERVADOS.</p>
          <p className="opacity-50 hover:opacity-100 transition-opacity cursor-default">DESIGN & DEV BY YOU</p>
        </div>
      </footer>
    </section>
  );
}