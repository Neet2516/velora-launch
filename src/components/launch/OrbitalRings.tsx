import React from 'react';
import { motion } from 'framer-motion';

interface OrbitalRingsProps {
  reducedMotion?: boolean;
}

/**
 * OrbitalRings
 * Subtle orbital energy rings encircling the prominent logo.
 * Continuous slow celestial rotation with master 13s timeline opacity modulation.
 */
export const OrbitalRings: React.FC<OrbitalRingsProps> = ({ reducedMotion = false }) => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,720px)] h-[min(90vw,720px)] pointer-events-none select-none z-10 flex items-center justify-center"
      // Master 13s opacity envelope: swells gently during resonance (2.5s), holds through climax, dissolves at 11.4s
      animate={
        reducedMotion
          ? { opacity: 0.3 }
          : {
              opacity: [0, 0, 0.45, 0.5, 0.5, 0.5, 0.5, 0, 0],
            }
      }
      transition={{
        duration: 13,
        repeat: Infinity,
        ease: 'linear',
        // Keyframe timeline mapping:
        // 0s(0), 2.2s(0.17), 3.5s(0.27), 5.0s(0.38), 7.5s(0.58), 10.0s(0.77), 11.4s(0.877), 12.5s(0.962), 13s(1.0)
        times: [0, 0.17, 0.27, 0.38, 0.58, 0.77, 0.877, 0.962, 1.0],
      }}
    >
      {/* Outer Ring: Slow Clockwise Continuous Rotation */}
      <motion.div
        animate={reducedMotion ? {} : { rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full border border-dashed border-[#7692FF]/22"
      >
        {/* Luminous satellite bead */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#ABD2FA] shadow-[0_0_12px_#ABD2FA,0_0_20px_#7692FF]" />
      </motion.div>

      {/* Inner Ring: Counter-Clockwise Continuous Rotation */}
      <motion.div
        animate={reducedMotion ? {} : { rotate: -360 }}
        transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[16%] rounded-full border border-dotted border-[#ABD2FA]/25"
      >
        {/* Second satellite bead */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#7692FF] shadow-[0_0_10px_#7692FF]" />
      </motion.div>
    </motion.div>
  );
};
