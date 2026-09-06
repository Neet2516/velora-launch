import React from 'react';
import { motion } from 'framer-motion';

interface WelcomeTextProps {
  reducedMotion?: boolean;
}

/**
 * WelcomeText
 * Authentic editorial subtitle with refined typography.
 * Displays "WELCOME TO THE" introducing the headline sentence:
 * "WELCOME TO THE VELORA LAUNCH EVENT".
 * 
 * 13s Timeline:
 * - 0s–2.0s: Elegant introductory reveal using [0.16, 1, 0.3, 1] ease
 * - 2.0s–11.8s: Anchored clearly during full composition narrative & hold
 * - 11.8s–13.0s: Smooth dissolve into restart
 */
export const WelcomeText: React.FC<WelcomeTextProps> = ({ reducedMotion = false }) => {
  return (
    <motion.div
      className="flex items-center justify-center gap-3 sm:gap-4 mb-2 sm:mb-3 select-none pointer-events-none z-20"
      animate={
        reducedMotion
          ? {
              opacity: [0, 1, 1, 1, 0],
            }
          : {
              opacity: [0, 1, 1, 1, 0],
              filter:  [
                'blur(4px)',
                'blur(0px)',
                'blur(0px)',
                'blur(0px)',
                'blur(4px)',
              ],
            }
      }
      transition={{
        duration: 13,
        repeat: Infinity,
        ease: [0.16, 1, 0.3, 1],
        // Keyframes: 0s(0), 2.0s(0.154), 9.0s(0.692), 11.8s(0.908), 13.0s(1.0)
        times: [0, 0.154, 0.692, 0.908, 1.0],
      }}
    >
      {/* Left Hairline Gradient Rule */}
      <span className="h-[1.5px] w-10 sm:w-20 md:w-28 bg-gradient-to-r from-transparent via-[#7692FF]/65 to-[#ABD2FA]" />

      {/* High-Readability Editorial Text - Scaled Up */}
      <span className="font-sans font-normal text-sm sm:text-base md:text-lg lg:text-xl tracking-[0.38em] sm:tracking-[0.45em] text-white/95 uppercase drop-shadow-[0_2px_12px_rgba(5,12,38,0.98)] drop-shadow-[0_0_15px_rgba(171,210,250,0.55)] pl-[0.38em] sm:pl-[0.45em]">
        WELCOME TO THE
      </span>

      {/* Right Hairline Gradient Rule */}
      <span className="h-[1.5px] w-10 sm:w-20 md:w-28 bg-gradient-to-l from-transparent via-[#7692FF]/65 to-[#ABD2FA]" />
    </motion.div>
  );
};

