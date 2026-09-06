import React from 'react';
import { motion } from 'framer-motion';

interface LaunchTitleProps {
  reducedMotion?: boolean;
}

/**
 * LaunchTitle
 * Displays "Launch Event" in an authentic, luxury fancy cursive & handwritten signature font.
 * Completely removed any sliding bars, horizontal shifts, or sliding underlines.
 * Smooth, elegant fade-in with soft-focus reveal and radiant ambient glow.
 */
export const LaunchTitle: React.FC<LaunchTitleProps> = ({ reducedMotion = false }) => {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center select-none pointer-events-none z-20 mt-1 sm:mt-2"
      animate={
        reducedMotion
          ? { opacity: [0, 0, 1, 1, 0] }
          : {
              opacity: [0, 0, 1, 1, 0],
              scale:   [0.96, 0.96, 1.0, 1.0, 0.98],
              filter:  [
                'blur(6px)',
                'blur(6px)',
                'blur(0px)',
                'blur(0px)',
                'blur(6px)',
              ],
            }
      }
      transition={{
        duration: 13,
        repeat: Infinity,
        ease: [0.16, 1, 0.3, 1],
        times: [0, 0.360, 0.480, 0.908, 1.0],
      }}
    >
      {/* Cursive Handwritten Signature: "Launch Event" */}
      <div className="relative px-6 pt-1 pb-1 flex items-center justify-center gap-3 sm:gap-4">
        <span
          className="text-[clamp(3.6rem,9vw,7.6rem)] leading-[1.05] text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E5F0FF] to-[#ABD2FA] filter drop-shadow-[0_2px_12px_rgba(5,12,38,0.98)] drop-shadow-[0_0_22px_rgba(171,210,250,0.65)] drop-shadow-[0_0_38px_rgba(118,146,255,0.45)] font-normal tracking-wide"
          style={{ fontFamily: '"Alex Brush", "Great Vibes", "Betania Patmos", cursive' }}
        >
          Launch Event
        </span>
      </div>

      {/* Sub-Tagline: Authentic Velora Brand Formula */}
      <div className="flex items-center gap-3 mt-1 sm:mt-2">
        <span className="h-[1px] w-8 sm:w-14 bg-gradient-to-r from-transparent to-[#7692FF]/70" />
        <span className="font-mono text-[10px] sm:text-xs tracking-[0.42em] text-[#7692FF] uppercase font-semibold drop-shadow-[0_0_8px_rgba(118,146,255,0.6)]">
          INFINITE OPPORTUNITIES · LIMITLESS WEALTH
        </span>
        <span className="h-[1px] w-8 sm:w-14 bg-gradient-to-l from-transparent to-[#7692FF]/70" />
      </div>
    </motion.div>
  );
};

export default LaunchTitle;
