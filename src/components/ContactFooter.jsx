import React from 'react';
import { motion } from 'framer-motion';

export function ContactFooter() {
  return (
    <section id="contato" className="relative py-24 bg-[#020617] overflow-hidden font-sans">
      
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

      {/* 2. SEÇÃO DE CONTATO COM FORMULÁRIO */}
      <div className="max-w-7xl mx-auto px-6 mb-24 grid lg:grid-cols-2 gap-16">
        
        {/* Lado Esquerdo: Formulário */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2rem]"
        >
          <h4 className="text-2xl font-bold text-white mb-2">Envie uma mensagem</h4>
          <p className="text-gray-400 mb-8 text-sm">Entraremos em contato em menos de 24 horas úteis.</p>
          
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Nome completo" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-cyan-400 transition-colors" />
              <input type="email" placeholder="E-mail corporativo" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-cyan-400 transition-colors" />
            </div>
            <input type="text" placeholder="Assunto" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-cyan-400 transition-colors" />
            <textarea placeholder="Como podemos ajudar seu negócio?" rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-cyan-400 transition-colors resize-none"></textarea>
            <button className="w-full py-4 bg-white/10 hover:bg-cyan-400 text-white hover:text-black font-bold rounded-xl transition-all duration-300 border border-white/10 hover:border-cyan-400">
              Enviar Mensagem
            </button>
          </form>
        </motion.div>

        {/* Lado Direito: Infos de Contato & Localização */}
        <div className="flex flex-col justify-center">
          <h4 className="text-3xl font-bold text-white mb-6">Canais de <span className="text-cyan-400">atendimento</span></h4>
          <p className="text-gray-400 mb-10 leading-relaxed">
            Estamos localizados no principal polo tecnológico, mas atendemos empresas em todo o território nacional através da nossa plataforma digital.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-400/10 rounded-lg text-cyan-400">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <p className="text-white font-bold">Telefone & WhatsApp</p>
                <p className="text-gray-500">+55 (11) 99999-9999</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-400/10 rounded-lg text-cyan-400">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <p className="text-white font-bold">E-mail</p>
                <p className="text-gray-500">contato@ethan.com.br</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-400/10 rounded-lg text-cyan-400">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <p className="text-white font-bold">Escritório Central</p>
                <p className="text-gray-500">Av. Paulista, 1000 - São Paulo, SP</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. RODAPÉ (FOOTER) */}
      <footer className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-left">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-black text-2xl tracking-tighter uppercase">
              Ethan<span className="text-cyan-400">Control</span>
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
              Inteligência financeira e contabilidade estratégica para empresas de alta performance.
            </p>
          </div>

          {/* Links de Serviços */}
          <div>
            <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Serviços</h5>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="/financeiro" className="hover:text-cyan-400 transition-colors">BPO Financeiro</a></li>
              <li><a href="/contabilidade" className="hover:text-cyan-400 transition-colors">Contabilidade</a></li>
              <li><a href="/tecnologia" className="hover:text-cyan-400 transition-colors">Tecnologia</a></li>
            </ul>
          </div>

          {/* Espaçador para manter o grid */}
          <div className="hidden md:block"></div>

          {/* Redes Sociais */}
          <div className="flex flex-col">
            <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Redes Sociais</h5>
            <div className="flex gap-3">
              <a href="#" className="p-3 rounded-xl bg-white/5 text-gray-400 hover:bg-cyan-400 hover:text-[#020617] transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="p-3 rounded-xl bg-white/5 text-gray-400 hover:bg-cyan-400 hover:text-[#020617] transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/5 text-gray-600 text-[10px] uppercase tracking-[0.3em] gap-4">
          <p>© 2026 ETHAN CONTROL - TODOS OS DIREITOS RESERVADOS.</p>
          <p className="opacity-50 hover:opacity-100 transition-opacity italic">Evoluindo sua gestão</p>
        </div>
      </footer>
    </section>
  );
}