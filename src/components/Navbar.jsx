import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'About', href: '#' },
    { name: 'Destinations', href: '#' },
    { name: 'Tours', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="fixed w-full z-50 top-4 px-4">
      {/* Container Principal Estilo Pill */}
      <div className="max-w-7xl mx-auto bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
        
        {/* Logo/Brand */}
        <div className="shrink-0">
          <span className="text-white text-2xl font-bold tracking-tighter">TOUR</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-all hover:text-cyan-400 ${
                link.active ? 'text-white' : 'text-gray-300'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          {/* Dropdown Simulado (como na imagem) */}
          <button className="flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors">
            More Pages
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Botão Get Started & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <button className="bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all shadow-lg hover:scale-105 active:scale-95">
            Get Started
          </button>

          {/* Hamburger Mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile com Animação de Altura */}
      <div className={`
        lg:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}
      `}>
        <div className="bg-black/80 backdrop-blur-lg border border-white/10 rounded-2xl p-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 px-4 text-gray-200 hover:bg-white/10 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}