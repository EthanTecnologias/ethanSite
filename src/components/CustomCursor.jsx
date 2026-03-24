import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export function CustomCursor() {
  // Estados para gerenciar as interações visuais
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Valores de Movimento do Framer (para o centro do elemento)
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Configuração da "Mola" (Spring) para suavizar o movimento
  // Aumentei stiffness e damping para uma resposta mais rápida e precisa,
  // diminuindo a sensação de atraso (bug visual)
  const springConfig = { stiffness: 600, damping: 35, mass: 0.2 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // 1. Atualiza a posição do cursor (usando useMotionValue para performance)
    const moveCursor = (e) => {
      // Definimos a posição X e Y EXATAS do mouse
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // 2. Detecta se o mouse está sobre elementos clicáveis (links, botões)
    const checkInteractions = (e) => {
      const target = e.target;
      // Verificação defensiva se o target existe (importante em JS)
      if (!target) return;
      
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button');
      
      setIsHovering(isClickable);
    };

    // 3. Efeitos de clique
    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    // Adicionando os listeners ao objeto window
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', checkInteractions);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Cleanup: Remove os listeners ao desmontar o componente para evitar bugs de memória
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', checkInteractions);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  // Define se o cursor deve estar no modo "ativo" (preenchido/pequeno)
  const isActive = isHovering || isClicking;

  return (
    // motion.div para renderizar e animar o cursor
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
      // Configuração de Estilo Inicial (Vazado)
      initial={{ 
        width: 32, 
        height: 32, 
        backgroundColor: 'rgba(34, 211, 238, 0)', // Transparente
        border: '2px solid rgba(34, 211, 238, 1)' // Cyan 400
      }}
      // Animação de Transição entre os estados (Vazado <-> Preenchido)
      animate={{
        width: isActive ? 16 : 32,
        height: isActive ? 16 : 32,
        backgroundColor: isActive ? 'rgba(34, 211, 238, 1)' : 'rgba(34, 211, 238, 0)',
        border: isActive ? '2px solid rgba(34, 211, 238, 0)' : '2px solid rgba(34, 211, 238, 1)'
      }}
      // Configuração da Transição de Escala/Cor (suave)
      transition={{ 
        type: 'spring', 
        stiffness: 400, 
        damping: 25 
      }}
      // Estilo de Posição (Vinculado à mola e centralizado)
      style={{
        x: smoothX,
        y: smoothY,
        // CORREÇÃO DO BUG DE CORTE:
        // Centraliza o elemento exatamente sob a ponta do mouse
        translateX: '-50%',
        translateY: '-50%'
      }}
    />
  );
}