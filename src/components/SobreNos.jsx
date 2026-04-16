import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, PieChart, ShieldCheck, Target, Award } from 'lucide-react';

// Use "export default" para que o App.jsx consiga importar sem chaves
export default function SobreNosPage() {
  return (
    <main className="bg-[#05070a] text-white min-h-screen pt-32 pb-20">
      
      {/* 1. HERO DA PÁGINA */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-cyan-400 font-semibold tracking-widest uppercase text-sm">Nossa História</span>
          <h1 className="text-5xl md:text-7xl font-extrabold mt-4 mb-6">
            Inteligência que <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">gera liberdade.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            A Ethan nasceu para integrar o que sempre deveria ter andado junto: contabilidade de precisão, gestão financeira estratégica e tecnologia de ponta.
          </p>
        </motion.div>
      </section>

      {/* 2. SEÇÃO: O TRIO ESTRATÉGICO (A que você mandou) */}
      <section className="max-w-7xl mx-auto px-6 mb-32 border-y border-white/5 py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Pilar Contábil */}
          <div className="space-y-4">
            <div className="text-cyan-400 font-bold flex items-center gap-2">
               <ShieldCheck size={20} /> Contabilidade
            </div>
            <h3 className="text-2xl font-bold">Conformidade e Segurança</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Garantimos que sua empresa esteja 100% regularizada perante o fisco, utilizando automação para eliminar erros manuais.
            </p>
          </div>

          {/* Pilar Financeiro */}
          <div className="space-y-4 p-8 bg-cyan-400/5 rounded-3xl border border-cyan-400/10">
            <div className="text-emerald-400 font-bold flex items-center gap-2">
               <Landmark size={20} /> Financeiro (BPO)
            </div>
            <h3 className="text-2xl font-bold">Gestão e Rentabilidade</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              O pilar financeiro da Ethan foca na saúde do seu caixa. Terceirizamos sua operação para que você tome decisões baseadas em números reais, não em intuição.
            </p>
          </div>

          {/* Pilar Tecnológico */}
          <div className="space-y-4">
            <div className="text-purple-400 font-bold flex items-center gap-2">
               <PieChart size={20} /> Tecnologia
            </div>
            <h3 className="text-2xl font-bold">Dados e Automação</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
               Nossa camada tech integra o financeiro e a contabilidade em dashboards inteligentes, dando a você uma visão 360º em tempo real.
            </p>
          </div>

        </div>
      </section>

      {/* 3. MISSÃO E VISÃO */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div className="p-10 bg-white/5 border border-white/10 rounded-[2rem]">
          <Target className="text-cyan-400 w-10 h-10 mb-6" />
          <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
          <p className="text-gray-400 leading-relaxed">
            Transformar o caos burocrático em clareza estratégica, permitindo que empreendedores foquem no que realmente importa: crescer.
          </p>
        </div>
        <div className="p-10 bg-white/5 border border-white/10 rounded-[2rem]">
          <Award className="text-cyan-400 w-10 h-10 mb-6" />
          <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
          <p className="text-gray-400 leading-relaxed">
            Ser o ecossistema financeiro e contábil mais tecnológico e confiável do Brasil, elevando o padrão de gestão das PMEs.
          </p>
        </div>
      </section>

    </main>
  );
}