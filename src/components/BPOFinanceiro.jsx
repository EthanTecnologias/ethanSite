import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, PieChart, TrendingUp, ShieldCheck, Clock, FileSpreadsheet, FileText, CreditCard, BarChart } from 'lucide-react';

export default function BPOFinanceiroPage() {
  const entregas = [
    {
      title: "Contas a Pagar e Receber",
      desc: "Gestão completa do seu fluxo de caixa, garantindo que nenhum prazo seja perdido.",
      icon: <Wallet className="text-emerald-400 w-6 h-6" />
    },
    {
      title: "Conciliação Bancária",
      desc: "Batimento diário de todas as suas entradas e saídas com precisão cirúrgica.",
      icon: <FileSpreadsheet className="text-emerald-400 w-6 h-6" />
    },
    {
      title: "Relatórios de Performance",
      desc: "Dashboards mensais com indicadores (DRE, EBITDA) para decisões estratégicas.",
      icon: <PieChart className="text-emerald-400 w-6 h-6" />
    },
    {
      title: "Faturamento Automático",
      desc: "Emissão de notas e boletos sem que você precise abrir portais de prefeitura.",
      icon: <FileText className="text-emerald-400 w-6 h-6" />
    }
  ];

  return (
    <main className="bg-[#05070a] text-white min-h-screen pt-32 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-emerald-400 font-semibold tracking-widest uppercase text-sm">Terceirização Financeira</span>
          <h1 className="text-5xl md:text-7xl font-extrabold mt-4 leading-tight">
            Seu financeiro no <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">piloto automático.</span>
          </h1>
          <p className="text-gray-400 mt-6 text-lg max-w-xl leading-relaxed">
            Nós cuidamos da burocracia, dos pagamentos e dos relatórios enquanto você foca em escalar seu negócio com dados reais.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-emerald-600 hover:bg-emerald-500 px-10 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-emerald-500/25">
              Falar com Especialista
            </button>
          </div>
        </motion.div>

        {/* Elemento Visual - Gráfico de Crescimento */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-10 bg-emerald-500/10 blur-[120px] rounded-full"></div>
          <div className="relative bg-gray-900/40 backdrop-blur-3xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl">
             <div className="flex items-center justify-between mb-8">
                <div>
                   <h3 className="font-bold text-xl text-emerald-400">Fluxo de Caixa</h3>
                   <p className="text-sm text-gray-500">Projeção para os próximos 30 dias</p>
                </div>
                <TrendingUp className="text-emerald-400 w-8 h-8" />
             </div>
             <div className="flex items-end gap-3 h-48">
                {[40, 70, 55, 90, 65, 85, 100].map((height, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="flex-1 bg-gradient-to-t from-emerald-600 to-cyan-400 rounded-t-lg"
                  />
                ))}
             </div>
          </div>
        </motion.div>
      </section>

      {/* 2. GRID DE SERVIÇOS 360º */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Gestão Financeira 360º</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Tudo o que sua empresa precisa para ter uma controladoria profissional sem precisar contratar um CFO interno.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {entregas.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-emerald-500/30 transition-all group"
            >
              <div className="mb-6 p-4 bg-emerald-400/10 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. SEÇÃO DE MÉTRICAS (PROVA DE VALOR) */}
      <section className="bg-emerald-950/10 border-y border-white/5 py-20 mb-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div whileInView={{ scale: [0.9, 1] }}>
                <h4 className="text-emerald-400 text-4xl font-black mb-2">+20h</h4>
                <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Poupadas por mês</p>
            </motion.div>
            <motion.div whileInView={{ scale: [0.9, 1] }}>
                <h4 className="text-emerald-400 text-4xl font-black mb-2">100%</h4>
                <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Conformidade Bancária</p>
            </motion.div>
            <motion.div whileInView={{ scale: [0.9, 1] }}>
                <h4 className="text-emerald-400 text-4xl font-black mb-2">R$ 0</h4>
                <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Multas por Atraso</p>
            </motion.div>
            <motion.div whileInView={{ scale: [0.9, 1] }}>
                <h4 className="text-emerald-400 text-4xl font-black mb-2">DRE</h4>
                <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Relatórios em Tempo Real</p>
            </motion.div>
        </div>
      </section>

      {/* 4. CTA FINAL (CONVERSÃO) */}
      <section className="px-6 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-emerald-900/30 to-black border border-emerald-500/20 p-12 md:p-20 rounded-[3rem] text-center shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">Pronto para escalar sua <br /> <span className="text-emerald-400">gestão financeira?</span></h2>
          <p className="text-gray-300 mb-10 text-lg max-w-xl mx-auto leading-relaxed">
            Agende um diagnóstico gratuito e descubra como nosso ecossistema de BI e Controladoria pode maximizar seus lucros.
          </p>
          <button className="bg-emerald-500 text-white px-12 py-5 rounded-full font-black text-xl hover:bg-emerald-400 hover:scale-105 transition-all shadow-lg shadow-emerald-500/30">
            Falar com um Especialista
          </button>
        </motion.div>
      </section>
    </main>
  );
}