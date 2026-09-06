import React from 'react';
import { motion } from 'framer-motion';

interface LaunchTitleProps {
  reducedMotion?: boolean;
}

/**
 * LaunchTitle
 * Climax title revealing "LAUNCH EVENT" at 7.0s - 9.5s.
 * Uses elegant display typography (font-semibold/bold instead of excessive font-black),
 * authentic Velora gradient (white -> ice #C8DEFC -> periwinkle #7692FF),
 * and an extended full composition hold through 11.8s.
 * 
 * 13s Timeline:
 * - 0s–7s: Hidden
 * - 7s–9.5s: Blur-to-focus reveal using [0.16, 1, 0.3, 1] ease
 * - 9.5s–11.8s: FULL COMPOSITION HOLD (audience reads comfortably)
 * - 11.8s–13s: Smooth dissolve into restart
 */
export const LaunchTitle: React.FC<LaunchTitleProps> = ({ reducedMotion = false }) => {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center select-none pointer-events-none z-20 mt-1 sm:mt-2"
      animate={
        reducedMotion
          ? {
              opacity: [0, 0, 1, 1, 0],
            }
          : {
              opacity: [0, 0, 1, 1, 0],
              scale:   [0.92, 0.92, 1.0, 1.0, 1.02],
              y:       [16, 16, 0, 0, -6],
              filter:  [
                'blur(10px)',
                'blur(10px)',
                'blur(0px)',
                'blur(0px)',
                'blur(8px)',
              ],
            }
      }
      transition={{
        duration: 13,
        repeat: Infinity,
        ease: [0.16, 1, 0.3, 1],
        // Keyframes: 0s(0), 7.0s(0.538), 9.5s(0.731), 11.8s(0.908), 13.0s(1.0)
        times: [0, 0.538, 0.731, 0.908, 1.0],
      }}
    >
      {/* Title Container with Overflow-Hidden for Specular Sheen Sweep */}
      <div className="relative overflow-hidden px-4 py-1.5">
        <h1 className="font-display font-semibold sm:font-bold text-[clamp(2.6rem,7.5vw,6.4rem)] uppercase tracking-[0.16em] sm:tracking-[0.20em] leading-[1.05] text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-[#C8DEFC] to-[#7692FF] filter drop-shadow-[0_0_32px_rgba(118,146,255,0.7)] drop-shadow-[0_4px_16px_rgba(5,12,38,0.95)]">
          LAUNCH EVENT
        </h1>

        {/* Specular Light Sheen: Sweeps across letters at 8.2s - 9.6s during reveal */}
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
              times: [0, 0.631, 0.738, 1.0],
            }}
          >
            <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[2px]" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

