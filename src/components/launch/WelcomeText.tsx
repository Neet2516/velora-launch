import React from 'react';
import { motion } from 'framer-motion';

interface WelcomeTextProps {
  reducedMotion?: boolean;
}

/**
 * WelcomeText
 * Authentic editorial subtitle matching HeroSection slogan tier.
 * Enhanced readability with crisp text-white/95 & ice-blue glow.
 * Flanked by Velora's signature gradient hairlines.
 * Reveals smoothly at 4.8s using [0.16, 1, 0.3, 1] ease.
 */
export const WelcomeText: React.FC<WelcomeTextProps> = ({ reducedMotion = false }) => {
  return (
    <motion.div
      className="flex items-center justify-center gap-3 sm:gap-4 my-2.5 sm:my-3.5 select-none pointer-events-none z-20"
      animate={
        reducedMotion
          ? {
              opacity: [0, 0, 1, 1, 1, 0, 0],
            }
          : {
              opacity:       [0, 0, 1, 1, 1, 0, 0],
              y:             [14, 14, 0, 0, 0, -8, 14],
              letterSpacing: ['0.3em', '0.3em', '0.44em', '0.44em', '0.44em', '0.48em', '0.3em'],
            }
      }
      transition={{
        duration: 13,
        repeat: Infinity,
        ease: [0.16, 1, 0.3, 1],
        // 0s(0), 4.8s(0.369), 6.5s(0.500), 7.5s(0.577), 11.4s(0.877), 12.5s(0.962), 13s(1.0)
        times: [0, 0.369, 0.500, 0.577, 0.877, 0.962, 1.0],
      }}
    >
      {/* Left Hairline Gradient Rule */}
      <span className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent via-[#7692FF]/70 to-[#ABD2FA]" />

      {/* High-Readability Editorial Text */}
      <span className="font-sans font-normal text-sm sm:text-[15px] md:text-base tracking-[0.44em] text-white/95 uppercase drop-shadow-[0_2px_12px_rgba(5,12,38,0.98)] drop-shadow-[0_0_15px_rgba(171,210,250,0.5)]">
        WELCOME TO
      </span>

      {/* Right Hairline Gradient Rule */}
      <span className="h-[1px] w-10 sm:w-16 bg-gradient-to-l from-transparent via-[#7692FF]/70 to-[#ABD2FA]" />
    </motion.div>
  );
};
