import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe, Layout, Zap, Smartphone } from 'lucide-react';

export default function TecnologiaPage() {
  const solucoes = [
    {
      title: "Desenvolvimento Web",
      desc: "Sistemas robustos e escaláveis utilizando as tecnologias mais modernas do mercado.",
      icon: <Layout className="text-cyan-400 w-6 h-6" />
    },
    {
      title: "Automação de Processos",
      desc: "Integramos seu financeiro e contábil com robôs que eliminam tarefas repetitivas.",
      icon: <Zap className="text-cyan-400 w-6 h-6" />
    },
    {
      title: "Cloud Computing",
      desc: "Sua infraestrutura nas nuvens com segurança de nível bancário e alta disponibilidade.",
      icon: <Globe className="text-cyan-400 w-6 h-6" />
    }
  ];

  return (
    <main className="bg-[#05070a] text-white min-h-screen pt-32 pb-20 overflow-hidden">
      
      {/* Hero Tecnologia */}
      <section className="px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-cyan-400 font-semibold tracking-widest uppercase text-sm">Inovação & Desenvolvimento</span>
          <h1 className="text-5xl md:text-7xl font-extrabold mt-4 leading-tight">
            Transformamos <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">ideias em sistemas.</span>
          </h1>
          <p className="text-gray-400 mt-6 text-lg max-w-xl leading-relaxed">
            Criamos soluções tecnológicas personalizadas que conectam sua contabilidade ao futuro digital. Performance, segurança e escalabilidade.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-cyan-600 hover:bg-cyan-500 px-10 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-cyan-500/25">
              Iniciar Projeto
            </button>
          </div>
        </motion.div>

        {/* Visual Tech - Código/Interface */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-10 bg-purple-500/10 blur-[120px] rounded-full"></div>
          <div className="relative bg-black/40 backdrop-blur-3xl border border-white/10 p-6 rounded-[2rem] shadow-2xl font-mono text-sm overflow-hidden">
             <div className="flex gap-2 mb-4 border-b border-white/10 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
             </div>
             <div className="space-y-2">
                <p className="text-purple-400">const <span className="text-cyan-400">EthanSolution</span> = () =&gt; {"{"}</p>
                <p className="pl-4 text-gray-400">// Otimizando performance do cliente...</p>
                <p className="pl-4 text-white">return <span className="text-yellow-500">new System</span>({"{"}</p>
                <p className="pl-8 text-cyan-400">speed: <span className="text-white">"100ms"</span>,</p>
                <p className="pl-8 text-cyan-400">security: <span className="text-white">"Military Grade"</span>,</p>
                <p className="pl-8 text-cyan-400">scaling: <span className="text-white">true</span></p>
                <p className="pl-4 text-white">{"});"}</p>
                <p className="text-purple-400">{"};"}</p>
             </div>
          </div>
        </motion.div>
      </section>

      {/* Grid de Soluções */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-3 gap-8">
          {solucoes.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-10 bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-3xl hover:border-cyan-500/30 transition-all"
            >
              <div className="mb-6 p-4 bg-cyan-400/10 w-fit rounded-2xl text-cyan-400">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Seção Tech Stack */}
      <section className="py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-gray-500 uppercase tracking-[0.3em] text-sm mb-12">Nossa Stack Tecnológica</h2>
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-40">
             <Code2 size={48} />
             <Cpu size={48} />
             <Smartphone size={48} />
             <Globe size={48} />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-6 mt-32 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-cyan-900/40 to-black border border-cyan-500/20 p-12 rounded-[3rem] text-center">
          <h2 className="text-4xl font-bold mb-6 italic">Sua empresa está pronta para o <span className="text-cyan-400 underline italic">próximo nível?</span></h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">Desenvolvemos o software que você precisa para automatizar sua gestão e dominar o mercado.</p>
          <button className="bg-cyan-500 text-black px-12 py-5 rounded-full font-black text-lg hover:bg-cyan-400 transition-all shadow-xl shadow-cyan-500/20">
            Solicitar Orçamento de Sistema
          </button>
        </div>
      </section>
    </main>
  );
}