import React from 'react';
import { motion } from 'framer-motion';

interface LaunchTitleProps {
  reducedMotion?: boolean;
}

/**
 * LaunchTitle
 * Dramatic focal climax revealing "LAUNCH EVENT" at 7.2s.
 * Uses the exact HeroSection blur-to-focus motion:
 * scale: 0.75 -> 1.0, filter: blur(12px) -> blur(0px) using [0.16, 1, 0.3, 1] ease.
 * Intentional vertical spacing and high-contrast typography.
 */
export const LaunchTitle: React.FC<LaunchTitleProps> = ({ reducedMotion = false }) => {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center select-none pointer-events-none z-20 mt-2 sm:mt-3"
      // Master Title Motion:
      // - 0s-7.2s: Dormant (opacity: 0, scale: 0.75, blur: 12px)
      // - 7.2s-8.8s: Dramatic blur-to-focus reveal using [0.16, 1, 0.3, 1]
      // - 8.8s-11.4s: Regal hold
      // - 11.4s-12.5s: Atmospheric dissolve into dark space
      // - 12.6s-13.0s: Resets to initial hidden state
      animate={
        reducedMotion
          ? {
              opacity: [0, 0, 1, 1, 1, 0, 0],
            }
          : {
              opacity: [0, 0, 1, 1, 1, 0, 0],
              scale:   [0.75, 0.75, 1.0, 1.0, 1.0, 1.03, 0.75],
              y:       [16, 16, 0, 0, 0, -6, 16],
              filter:  [
                'blur(12px)',
                'blur(12px)',
                'blur(0px)',
                'blur(0px)',
                'blur(0px)',
                'blur(12px)',
                'blur(12px)',
              ],
            }
      }
      transition={{
        duration: 13,
        repeat: Infinity,
        ease: [0.16, 1, 0.3, 1],
        // Keyframe timeline mapping across 13s:
        // 0s(0), 7.2s(0.554), 8.8s(0.677), 10.0s(0.769), 11.4s(0.877), 12.5s(0.962), 13s(1.0)
        times: [0, 0.554, 0.677, 0.769, 0.877, 0.962, 1.0],
      }}
    >
      {/* Title Container with Overflow-Hidden for Specular Sheen Sweep */}
      <div className="relative overflow-hidden px-4 py-1.5">
        <h1 className="font-display font-black text-[clamp(2.8rem,7.5vw,6.6rem)] uppercase tracking-[0.22em] sm:tracking-[0.26em] leading-[1.08] text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ABD2FA] to-[#7692FF] filter drop-shadow-[0_0_35px_rgba(118,146,255,0.9)] drop-shadow-[0_4px_20px_rgba(5,12,38,0.95)]">
          LAUNCH EVENT
        </h1>

        {/* Specular Light Sheen: Sweeps across letters at 8.6s - 9.6s */}
        {!reducedMotion && (
          <motion.div
            className="absolute inset-0 pointer-events-none -skew-x-12"
            animate={{
              x: ['-140%', '-140%', '240%', '240%'],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: 'easeInOut',
              times: [0, 0.661, 0.738, 1.0],
            }}
          >
            <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/45 to-transparent blur-[2px]" />
          </motion.div>
        )}
      </div>

      {/* Sub-Tagline: Matching HeroSection Tier 3 Formula */}
      <motion.div
        className="flex items-center gap-3 mt-2 sm:mt-3"
        animate={{
          opacity: [0, 0, 0.9, 0.9, 0.9, 0, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: 'easeInOut',
          times: [0, 0.631, 0.700, 0.769, 0.877, 0.962, 1.0],
        }}
      >
        <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#7692FF]/70" />
        <span className="font-mono text-[10.5px] sm:text-xs tracking-[0.45em] text-[#7692FF] uppercase font-semibold drop-shadow-[0_0_8px_rgba(118,146,255,0.6)]">
          INFINITE OPPORTUNITIES · LIMITLESS WEALTH
        </span>
        <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#7692FF]/70" />
      </motion.div>
    </motion.div>
  );
};
