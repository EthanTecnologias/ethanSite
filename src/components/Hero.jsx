import minhaImagemContabilidade from '../assets/img.jpg'; // O caminho relativo ao arquivo .jsx

export function AccountingHero() {
  // Clean Code: Centralizando configurações de texto para fácil manutenção
  const content = {
    title: 'Transforme a contabilidade da sua empresa com inteligência e precisão.',
    description: 'Deixe a burocracia conosco. Focamos em estratégia e conformidade tributária para impulsionar o crescimento sustentável do seu negócio, garantindo segurança financeira.',
    ctaPrimary: {
      text: 'Agendar Consultoria Gratuita',
      href: '#'
    },
    ctaSecondary: {
      text: 'Nossos Serviços',
      href: '#'
    }
  };

  return (
    // 1. Container Principal com a Imagem de Fundo (Responsividade: min-h-screen ou py-20/32)
    <section 
      className="relative w-full min-h-[90vh] bg-gray-950 text-white flex items-center justify-center overflow-hidden"
      // INSTRUÇÃO: Substitua o URL abaixo pela sua imagem de contabilidade.
      // Dica de Performance: Prefira imagens webp otimizadas.
      style={{
        backgroundImage: `url(${minhaImagemContabilidade})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* 2. Overlay Escuro (Garante o contraste do texto) */}
      {/* Ajuste o bg-black/70 para mais ou menos escuridão */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* 3. Container de Conteúdo (Centralizado e Responsivo) */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 md:py-32 text-center flex flex-col items-center">
        
        {/* Título Principal (H1 - Único por página para SEO) */}
        {/* Responsividade: text-4xl mobile -> text-6xl desktop */}
        <h1 className="max-w-4xl font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-6 animate-fade-in-up">
          {content.title}
        </h1>

        {/* Descrição (Parágrafo - Texto de corpo legível) */}
        <p className="max-w-3xl text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light">
          {content.description}
        </p>

        {/* 4. Grupo de Botões (CTA - Call to Action) */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          {/* Botão Primário (Estilo Azul Flowbite/Contabilidade) */}
          <a
            href={content.ctaPrimary.href}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 rounded-lg text-base font-semibold transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:scale-95"
          >
            {content.ctaPrimary.text}
            {/* Ícone de seta para indicar ação (SVG puro) */}
            <svg 
              className="w-5 h-5 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* Botão Secundário (Estilo Vazado/Contornos - Ex: Learn More) */}
          <a
            href={content.ctaSecondary.href}
            className="inline-flex items-center px-8 py-3.5 bg-white hover:bg-gray-100 rounded-lg text-base font-semibold text-gray-900 transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            {content.ctaSecondary.text}
          </a>
        </div>
      </div>
    </section>
  );
}