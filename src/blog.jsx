import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

export default function BlogPage() {
  const posts = [
    {
      title: "O impacto da IA na Contabilidade Digital em 2024",
      excerpt: "Descubra como a inteligência artificial está automatizando processos burocráticos e liberando tempo para consultoria estratégica.",
      date: "15 Abr, 2024",
      author: "Equipe Ethan",
      category: "Tecnologia",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Mudanças na Malha Fina: O que você precisa saber",
      excerpt: "Novas regras da Receita Federal aumentam a fiscalização sobre cruzamento de dados bancários. Saiba como se proteger.",
      date: "10 Abr, 2024",
      author: "Setor Fiscal",
      category: "Contabilidade",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <main className="bg-[#05070a] text-white min-h-screen pt-32 pb-20">
      <section className="px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-cyan-400 font-semibold tracking-widest uppercase text-sm">Update Semanal</span>
          <h1 className="text-5xl md:text-6xl font-extrabold mt-4">Ethan <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Insights</span></h1>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl">
            Notícias, guias e tendências sobre o universo contábil e tecnológico para manter sua empresa à frente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:border-cyan-500/30 transition-all group"
            >
              <div className="h-64 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-cyan-500/10 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Tag size={12} /> {post.category}
                  </span>
                  <span className="text-gray-500 text-xs flex items-center gap-1">
                    <Calendar size={12} /> {post.date}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{post.title}</h2>
                <p className="text-gray-400 mb-6 line-clamp-2">{post.excerpt}</p>
                <button className="flex items-center gap-2 text-white font-bold hover:gap-4 transition-all text-sm">
                  Ler matéria completa <ArrowRight size={16} className="text-cyan-400" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}