import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Zap, Landmark, BarChart3, ShieldCheck, Code2 } from 'lucide-react';

export function Navbar({ isDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'BPO Financeiro', href: '/servicos/bpo-financeiro', icon: Zap },
    { name: 'Contabilidade', href: '/servicos/contabilidade', icon: Landmark },
    { name: 'Business Intelligence', href: '/servicos/business-intelligence', icon: BarChart3 },
    { name: 'Controladoria', href: '/servicos/controladoria', icon: ShieldCheck },
    { name: 'Desenvolvimento Web', href: '/servicos/desenvolvimento-web', icon: Code2 },
  ];

  return (
    <nav className="fixed w-full z-[100] top-4 px-4 transition-all duration-500">
      <div className={`max-w-7xl mx-auto backdrop-blur-md border rounded-full px-6 py-3 flex items-center justify-between shadow-2xl transition-all duration-500
        ${isDark 
          ? 'bg-black/40 border-white/10 shadow-black/40' 
          : 'bg-white/70 border-slate-200 shadow-slate-200/50'}`}>
        
        {/* Logo */}
        <Link to="/" className="shrink-0 group">
          <span className={`text-2xl font-bold tracking-tighter transition-colors duration-500
            ${isDark ? 'text-white group-hover:text-cyan-400' : 'text-slate-900 group-hover:text-cyan-600'}`}>
            TOUR
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className={`text-sm font-medium transition-all
            ${isDark ? 'text-gray-300 hover:text-cyan-400' : 'text-slate-600 hover:text-cyan-600'}`}>
            INÍCIO
          </Link>
          
          {/* DROPDOWN DE SERVIÇOS */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className={`flex items-center text-sm font-medium transition-all gap-1
              ${isDark ? 'text-gray-300 hover:text-cyan-400' : 'text-slate-600 hover:text-cyan-600'}`}>
              SERVIÇOS
              <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Menu Suspenso */}
            <div className={`
              absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300
              ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}
            `}>
              <div className={`backdrop-blur-xl border rounded-2xl p-2 w-64 shadow-2xl transition-all duration-500
                ${isDark 
                  ? 'bg-black/90 border-white/10' 
                  : 'bg-white/95 border-slate-200 shadow-xl'}`}>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className={`flex items-center gap-3 px-4 py-3 text-sm rounded-xl transition-all group
                      ${isDark 
                        ? 'text-gray-300 hover:text-cyan-400 hover:bg-white/5' 
                        : 'text-slate-600 hover:text-cyan-700 hover:bg-slate-50'}`}
                  >
                    <service.icon size={18} className={`transition-colors ${isDark ? 'text-cyan-400/50 group-hover:text-cyan-400' : 'text-cyan-600/50 group-hover:text-cyan-600'}`} />
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="#" className={`text-sm font-medium transition-all
            ${isDark ? 'text-gray-300 hover:text-cyan-400' : 'text-slate-600 hover:text-cyan-600'}`}>
            SOBRE NÓS
          </Link>
          <Link to="#" className={`text-sm font-medium transition-all
            ${isDark ? 'text-gray-300 hover:text-cyan-400' : 'text-slate-600 hover:text-cyan-600'}`}>
            BLOG
          </Link>
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <button className={`hidden sm:block text-xs font-bold px-6 py-2.5 rounded-full transition-all active:scale-95 uppercase tracking-wider
            ${isDark 
              ? 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_20px_rgba(8,145,178,0.3)]' 
              : 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg shadow-cyan-600/20'}`}>
            ÁREA DO CLIENTE
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-full transition-colors ${isDark ? 'text-white hover:bg-white/5' : 'text-slate-900 hover:bg-slate-100'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className={`
        lg:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${isOpen ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'}
      `}>
        <div className={`backdrop-blur-lg border rounded-2xl p-4 space-y-1 transition-all duration-500
          ${isDark ? 'bg-black/90 border-white/10' : 'bg-white/95 border-slate-200 shadow-xl'}`}>
          <Link to="/" className={`block py-3 px-4 rounded-xl transition-colors
            ${isDark ? 'text-gray-200 hover:bg-white/5' : 'text-slate-700 hover:bg-slate-50'}`}>INÍCIO</Link>
          
          <div className={`py-2 border-y ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
            <span className={`block px-4 text-[10px] font-bold tracking-widest uppercase mb-2
              ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>Nossos Serviços</span>
            {services.map((service) => (
              <Link
                key={service.name}
                to={service.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 py-3 px-4 text-sm transition-colors
                  ${isDark ? 'text-gray-300 hover:text-white' : 'text-slate-600 hover:text-cyan-700'}`}
              >
                <service.icon size={16} />
                {service.name}
              </Link>
            ))}
          </div>

          <Link to="#" className={`block py-3 px-4 rounded-xl transition-colors
            ${isDark ? 'text-gray-200 hover:bg-white/5' : 'text-slate-700 hover:bg-slate-50'}`}>SOBRE NÓS</Link>
          <Link to="#" className={`block py-3 px-4 rounded-xl transition-colors
            ${isDark ? 'text-gray-200 hover:bg-white/5' : 'text-slate-700 hover:bg-slate-50'}`}>BLOG</Link>
        </div>
      </div>
    </nav>
  );
}