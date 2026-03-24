import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    category: "Contabilidade",
    date: "20 Mar 2026",
    title: "Mudanças no Simples Nacional: O que sua empresa precisa saber.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    link: "#"
  },
  {
    category: "Business Intelligence",
    date: "15 Mar 2026",
    title: "Como o BI pode reduzir custos operacionais em até 20%.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
    link: "#"
  },
  {
    category: "Gestão",
    date: "10 Mar 2026",
    title: "BPO Financeiro: A estratégia das empresas que mais crescem.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    link: "#"
  }
];

export function BlogSection({ isDark }) {
  return (
    <section className={`py-24 transition-colors duration-500 relative overflow-hidden border-t 
      ${isDark ? 'bg-[#020617] border-white/5' : 'bg-white border-slate-100'}`}>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className={`font-mono text-xs tracking-[0.4em] uppercase mb-4 transition-colors
              ${isDark ? 'text-cyan-400' : 'text-cyan-600 font-bold'}`}>
              Insights & Notícias
            </h2>
            <h3 className={`text-3xl md:text-5xl font-extrabold tracking-tight leading-tight transition-colors duration-500
              ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Mantenha-se à frente com <br />
              <span className={isDark ? 'text-gray-500' : 'text-slate-400'}>nosso conteúdo técnico.</span>
            </h3>
          </div>
          <button className={`px-8 py-3 rounded-full border font-semibold text-sm transition-all duration-300 self-start md:self-auto
            ${isDark 
              ? 'border-white/10 text-white hover:bg-white hover:text-[#020617]' 
              : 'border-slate-200 text-slate-700 hover:bg-slate-900 hover:text-white'}`}>
            Ver Blog Completo
          </button>
        </div>

        {/* Grid de Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer text-left"
            >
              {/* Container da Imagem */}
              <div className={`relative h-64 mb-6 rounded-2xl overflow-hidden border shadow-2xl transition-colors duration-500
                ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                
                {/* Overlay Gradiente */}
                <div className={`absolute inset-0 bg-gradient-to-t to-transparent opacity-60 group-hover:opacity-40 transition-opacity
                  ${isDark ? 'from-[#020617]/80' : 'from-slate-900/40'}`} />
                
                {/* Badge de Categoria */}
                <span className={`absolute top-4 left-4 px-3 py-1 backdrop-blur-md border text-[10px] font-mono tracking-widest uppercase rounded-lg transition-all
                  ${isDark 
                    ? 'bg-[#020617]/80 border-white/10 text-cyan-400' 
                    : 'bg-white/90 border-slate-200 text-cyan-700 font-bold'}`}>
                  {post.category}
                </span>
              </div>

              {/* Conteúdo do Texto */}
              <div className="space-y-3 px-2">
                <span className={`text-xs font-mono uppercase tracking-widest block transition-colors
                  ${isDark ? 'text-gray-600' : 'text-slate-400 font-medium'}`}>
                  {post.date}
                </span>
                <h4 className={`text-xl font-bold transition-colors duration-300 leading-snug
                  ${isDark ? 'text-white group-hover:text-cyan-400' : 'text-slate-800 group-hover:text-cyan-600'}`}>
                  {post.title}
                </h4>
                <div className={`flex items-center gap-2 pt-4 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0
                  ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  Ler artigo <span>→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}