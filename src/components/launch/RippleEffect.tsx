import React from 'react';
import { motion } from 'framer-motion';

interface RippleEffectProps {
  reducedMotion?: boolean;
}

/**
 * RippleEffect
 * One single, soft, elegant expanding light wave at Logo Resonance (2.6s - 4.5s).
 * Radiates outward from the infinity nexus with subtle periwinkle illumination.
 */
export const RippleEffect: React.FC<RippleEffectProps> = ({ reducedMotion = false }) => {
  if (reducedMotion) return null;

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 pointer-events-none select-none z-10 flex items-center justify-center">
      {/* Single Soft Luminous Expanding Wave */}
      <motion.div
        className="w-full h-full rounded-full border border-[#7692FF]/40"
        style={{
          boxShadow: '0 0 32px rgba(118, 146, 255, 0.35), inset 0 0 20px rgba(171, 210, 250, 0.15)',
        }}
        animate={{
          scale:   [0.2, 0.2, 0.35, 1.35, 2.2, 0.2, 0.2],
          opacity: [0,   0,   0.65, 0.35, 0,   0,   0  ],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: [0.16, 1, 0.3, 1],
          // Active between 2.6s (0.200) and 4.5s (0.346)
          times: [0, 0.200, 0.235, 0.300, 0.346, 0.380, 1.0],
        }}
      />
    </div>
  );
};
