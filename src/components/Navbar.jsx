import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
/* IMPORTANTE: Importar o Link do react-router-dom */
import { Link } from 'react-router-dom'; 
import logoEthan from "../assets/ethan.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  /* AJUSTE: Removido o '#' para virarem rotas de páginas separadas */
  const serviços = [
    { name: 'Contabilidade Digital', desc: 'Conformidade e gestão fiscal', href: '/contabilidade' },
    { name: 'BPO Financeiro', desc: 'Terceirização do seu financeiro', href: '/financeiro' },
    { name: 'Tecnologia', desc: 'Sistemas Web', href: '/tecnologia' },
    
  ];

  const closeMenus = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 top-4 px-4">
      <div className="max-w-7xl mx-auto bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
        
        {/* Logo agora é um link para a Home */}
        <div className="shrink-0 flex items-center">
          <Link to="/" onClick={closeMenus}>
            <img src={logoEthan} alt="Logo" className="h-12 w-auto hover:scale-105 transition-transform" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium text-white hover:text-cyan-400 transition-colors">Home</Link>
          
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors py-2">
              Serviços
              <svg className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl"
                >
                  {serviços.map((item) => (
                    /* TROCADO: 'a' por 'Link' e 'href' por 'to' */
                    <Link 
                      key={item.name} 
                      to={item.href}
                      onClick={closeMenus}
                      className="block p-3 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="text-sm font-bold text-white group-hover:text-cyan-400">{item.name}</div>
                      <div className="text-xs text-gray-400">{item.desc}</div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/sobre" className="text-sm font-medium text-gray-300 hover:text-cyan-400">Sobre Nós</Link>
          <Link to="/blog" className="text-sm font-medium text-gray-300 hover:text-cyan-400">Blog</Link>
          <Link to="/contato" className="text-sm font-medium text-gray-300 hover:text-cyan-400">Contato</Link>
        </div>

        <button className="hidden sm:block bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-cyan-500/20">
          Saiba Mais!
        </button>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-2 bg-black/90 backdrop-blur-lg border border-white/10 rounded-2xl p-4 flex flex-col space-y-3 overflow-hidden"
          >
            {serviços.map(s => (
              <Link 
                key={s.name} 
                to={s.href} 
                onClick={closeMenus}
                className="text-gray-300 px-4 py-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                {s.name}
              </Link>
            ))}
            <Link to="/contato" onClick={closeMenus} className="text-gray-300 px-4 py-2 hover:bg-white/5 rounded-lg transition-colors">Contato</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}