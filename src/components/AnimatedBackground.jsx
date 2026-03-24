import React from 'react';
import { motion } from 'framer-motion';

const bubbles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: Math.random() * 120 + 60,
  x: Math.random() * 100,
  delay: Math.random() * 10,
  duration: Math.random() * 20 + 20,
  opacity: Math.random() * 0.15 + 0.08, // Opacidade equilibrada
}));

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-[#020617] pointer-events-none">
      {/* Vinheta para profundidade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_100%)] z-[1]" />

      <svg width="100%" height="100%" className="absolute inset-0 z-0 opacity-60">
        <defs>
          <radialGradient id="bubbleGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
        </defs>

        {bubbles.map((b) => (
          <motion.circle
            key={b.id}
            r={b.size}
            cx={`${b.x}%`}
            fill="url(#bubbleGlow)"
            initial={{ cy: "120%", opacity: 0 }}
            animate={{ 
              cy: "-20%", 
              opacity: [0, b.opacity, 0],
            }}
            transition={{
              delay: b.delay,
              duration: b.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}