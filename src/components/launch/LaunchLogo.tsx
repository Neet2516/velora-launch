import React from 'react';
import { motion } from 'framer-motion';

interface LaunchLogoProps {
  reducedMotion?: boolean;
}

/**
 * LaunchLogo
 * Authentic Velora brand centerpiece for the Launch Event screen.
 * Clean, simple sans-serif typography in original white & ice-blue colors.
 * Completely removed any sliding light bars/sheen.
 */
export const LaunchLogo: React.FC<LaunchLogoProps> = ({ reducedMotion = false }) => {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center pointer-events-none select-none z-20 my-1 sm:my-2"
      animate={
        reducedMotion
          ? {
              opacity: [0, 0, 1, 1, 0],
            }
          : {
              opacity: [0, 0, 1, 1, 0],
              scale:   [0.96, 0.96, 1.0, 1.0, 0.98],
              filter:  [
                'blur(5px)',
                'blur(5px)',
                'blur(0px)',
                'blur(0px)',
                'blur(5px)',
              ],
            }
      }
      transition={{
        duration: 13,
        repeat: Infinity,
        ease: [0.16, 1, 0.3, 1],
        times: [0, 0.138, 0.300, 0.908, 1.0],
      }}
    >
      {/* 1. Subtle, Clean Ambient Behind-Glow (Cobalt & Ice) */}
      <div
        className="absolute rounded-full pointer-events-none blur-3xl"
        style={{
          width: 'clamp(320px, 48vw, 620px)',
          height: 'clamp(120px, 20vw, 220px)',
          background:
            'radial-gradient(ellipse, rgba(171, 210, 250, 0.28) 0%, rgba(118, 146, 255, 0.14) 45%, transparent 75%)',
        }}
      />

      {/* 2. Authentic Velora Brand Typography (Mount Sagilite Font - Scaled Up) */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h2 className="font-sagilite text-[clamp(4.2rem,11.5vw,9.6rem)] uppercase tracking-[0.18em] sm:tracking-[0.24em] leading-none text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-[#f0f6ff] to-[#ABD2FA] filter drop-shadow-[0_0_24px_rgba(171,210,250,0.7)] drop-shadow-[0_0_48px_rgba(118,146,255,0.45)] drop-shadow-[0_4px_20px_rgba(5,12,38,0.98)] select-none pl-[0.18em] sm:pl-[0.24em]">
          VELORA
        </h2>

        {/* Global Subtitle Rule: — GLOBAL — (Original colors) */}
        <div className="flex items-center justify-center gap-3 mt-2 sm:mt-2.5">
          <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#7692FF]/80" />
          <span className="font-sans font-semibold tracking-[0.48em] text-[#ABD2FA] text-[11px] sm:text-xs uppercase leading-none drop-shadow-[0_0_8px_rgba(171,210,250,0.5)] pl-[0.48em]">
            GLOBAL
          </span>
          <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#1B2CC1]/80" />
        </div>
      </div>
    </motion.div>
  );
};

export default LaunchLogo;
