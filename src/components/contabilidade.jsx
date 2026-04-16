import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, ShieldCheck, Laptop } from 'lucide-react';

export default function ContabilidadePage() {
  const diferenciais = [
    { 
      title: "Contabilidade Digital", 
      icon: <Laptop className="w-6 h-6 text-cyan-400" />, 
      text: "Acesse seus documentos e impostos de qualquer lugar, 24h por dia." 
    },
    { 
      title: "Compliance Fiscal", 
      icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />, 
      text: "Sua empresa 100% em dia com a Receita Federal e órgãos reguladores." 
    },
    { 
      title: "Redução de Custos", 
      icon: <BarChart3 className="w-6 h-6 text-cyan-400" />, 
      text: "Planejamento tributário inteligente para você pagar o mínimo de imposto legal." 
    }
  ];

  return (
    /* h-full e min-h-screen garantem que a página ocupe todo o espaço */
    <main className="bg-[#05070a] text-white min-h-screen pt-32 pb-20">
      
      {/* Seção Hero da Página de Contabilidade */}
      <section className="px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 font-semibold tracking-widest uppercase text-sm">Especialistas em Contabilidade</span>
          <h1 className="text-5xl md:text-7xl font-extrabold mt-4 leading-tight">
            Contabilidade <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">sem burocracia.</span>
          </h1>
          <p className="text-gray-400 mt-6 text-lg max-w-xl leading-relaxed">
            Esqueça a papelada. Oferecemos uma plataforma digital completa para você focar no que importa: o crescimento do seu negócio.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-cyan-600 hover:bg-cyan-500 px-10 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-cyan-500/25">
              Começar Agora
            </button>
          </div>
        </motion.div>

        {/* Dashboard Visual Tech */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-10 bg-cyan-500/10 blur-[120px] rounded-full"></div>
          <div className="relative bg-gray-900/40 backdrop-blur-3xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl">
             <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-cyan-400/10 rounded-2xl flex items-center justify-center border border-cyan-400/20">
                   <BarChart3 className="text-cyan-400 w-7 h-7" />
                </div>
                <div>
                   <h3 className="font-bold text-xl">Gestão em Tempo Real</h3>
                   <p className="text-sm text-gray-500">Sincronizado com sua conta</p>
                </div>
             </div>
             
             <div className="space-y-6">
                {[75, 45, 90].map((width, i) => (
                  <div key={i} className="h-3 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${width}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + (i * 0.2) }}
                      className={`h-full bg-gradient-to-r ${i === 2 ? 'from-blue-500 to-cyan-400' : 'from-cyan-500 to-blue-600'}`}
                    />
                  </div>
                ))}
             </div>
          </div>
        </motion.div>
      </section>

      {/* Grid de Diferenciais */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-3 gap-8">
          {diferenciais.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/[0.08] transition-all group"
            >
              <div className="mb-6 p-4 bg-cyan-400/10 w-fit rounded-2xl text-cyan-400 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Banner de Conversão (CTA) */}
      <section className="px-6 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-cyan-600/20 to-blue-900/20 border border-cyan-500/20 p-12 md:p-20 rounded-[3rem] text-center backdrop-blur-sm">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Sua empresa merece <br/> uma contabilidade inteligente.</h2>
          <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto">
            Junte-se a centenas de empresas que já transformaram sua gestão financeira com a nossa tecnologia.
          </p>
          <button className="bg-white text-black px-12 py-5 rounded-full font-black text-lg hover:bg-cyan-400 transition-colors shadow-2xl">
            Solicitar Proposta Grátis
          </button>
        </div>
      </section>
    </main>
  );
}