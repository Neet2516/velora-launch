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
        className="absolute rounded-full pointer-events-none blur-2xl"
        style={{
          width: 'clamp(240px, 35vw, 420px)',
          height: 'clamp(90px, 15vw, 160px)',
          background:
            'radial-gradient(ellipse, rgba(171, 210, 250, 0.25) 0%, rgba(118, 146, 255, 0.12) 45%, transparent 75%)',
        }}
      />

      {/* 2. Authentic Velora Brand Typography (Clean, simple, professional sans-serif) */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h2 className="font-sans font-bold text-[clamp(2.8rem,7.2vw,5.8rem)] uppercase tracking-[0.24em] leading-none text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-[#f0f6ff] to-[#ABD2FA] filter drop-shadow-[0_0_18px_rgba(171,210,250,0.65)] drop-shadow-[0_0_35px_rgba(118,146,255,0.4)] drop-shadow-[0_4px_16px_rgba(5,12,38,0.95)] select-none pl-[0.24em]">
          VELORA
        </h2>

        {/* Global Subtitle Rule: — GLOBAL — (Original colors) */}
        <div className="flex items-center justify-center gap-2.5 mt-1.5 sm:mt-2">
          <span className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent to-[#7692FF]/80" />
          <span className="font-sans font-semibold tracking-[0.45em] text-[#ABD2FA] text-[10px] sm:text-xs uppercase leading-none drop-shadow-[0_0_8px_rgba(171,210,250,0.5)] pl-[0.45em]">
            GLOBAL
          </span>
          <span className="h-[1px] w-10 sm:w-16 bg-gradient-to-l from-transparent to-[#1B2CC1]/80" />
        </div>
      </div>
    </motion.div>
  );
};

export default LaunchLogo;
