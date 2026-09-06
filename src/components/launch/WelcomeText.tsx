import React from 'react';
import { motion } from 'framer-motion';

interface WelcomeTextProps {
  reducedMotion?: boolean;
}

/**
 * WelcomeText
 * Authentic editorial subtitle with refined typography.
 * Uses font-light, refined letter spacing (0.38em), and crisp text-white/95.
 * 
 * 13s Timeline:
 * - 0s–5s: Hidden
 * - 5s–7s: Elegant reveal using [0.16, 1, 0.3, 1] ease
 * - 7s–9.5s: Fully visible while LAUNCH EVENT reveals
 * - 9.5s–11.8s: FULL COMPOSITION HOLD
 * - 11.8s–13s: Smooth dissolve into restart
 */
export const WelcomeText: React.FC<WelcomeTextProps> = ({ reducedMotion = false }) => {
  return (
    <motion.div
      className="flex items-center justify-center gap-3 sm:gap-4 my-2 sm:my-3 select-none pointer-events-none z-20"
      animate={
        reducedMotion
          ? {
              opacity: [0, 0, 1, 1, 1, 0],
            }
          : {
              opacity: [0, 0, 1, 1, 1, 0],
              y:       [10, 10, 0, 0, 0, -4],
              filter:  [
                'blur(6px)',
                'blur(6px)',
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
        // Keyframes: 0s(0), 5.0s(0.385), 7.0s(0.538), 9.5s(0.731), 11.8s(0.908), 13.0s(1.0)
        times: [0, 0.385, 0.538, 0.731, 0.908, 1.0],
      }}
    >
      {/* Left Hairline Gradient Rule */}
      <span className="h-[1px] w-8 sm:w-14 bg-gradient-to-r from-transparent via-[#7692FF]/55 to-[#ABD2FA]/80" />

      {/* High-Readability Editorial Text */}
      <span className="font-sans font-light text-xs sm:text-sm md:text-[15px] tracking-[0.38em] text-white/95 uppercase drop-shadow-[0_2px_12px_rgba(5,12,38,0.98)] drop-shadow-[0_0_12px_rgba(171,210,250,0.45)]">
        WELCOME TO
      </span>

      {/* Right Hairline Gradient Rule */}
      <span className="h-[1px] w-8 sm:w-14 bg-gradient-to-l from-transparent via-[#7692FF]/55 to-[#ABD2FA]/80" />
    </motion.div>
  );
};

