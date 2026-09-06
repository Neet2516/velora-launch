import React from 'react';
import { motion } from 'framer-motion';

interface LaunchLogoProps {
  reducedMotion?: boolean;
}

/**
 * LaunchLogo
 * Authentic Velora brand centerpiece for the Launch Event screen.
 * Displays crisp, clean Times New Roman serif letters with sharp metallic chrome sheen.
 * No heavy neon glow or excessive text-shadow.
 * 
 * 13s Foreground Timeline:
 * - 0s–1.8s: Hidden while "WELCOME TO THE" introduces
 * - 1.8s–4.2s: Elegant reveal (opacity 0 -> 1, scale 0.94 -> 1.0, blur 6px -> 0px)
 * - 4.2s–11.8s: Centered hero holding in full clarity
 * - 11.8s–13.0s: Very smooth fade/dissolve (opacity 1 -> 0, blur 0px -> 6px)
 * - 13.0s: Seamless restart
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
              scale:   [0.94, 0.94, 1.0, 1.0, 0.96],
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
        // Keyframes: 0s(0), 1.8s(0.138), 4.2s(0.323), 11.8s(0.908), 13.0s(1.0)
        times: [0, 0.138, 0.323, 0.908, 1.0],
      }}
    >
      {/* 1. Subtle, Clean Behind-Glow (Soft & restrained, zero blurry bloat) */}
      <motion.div
        className="absolute rounded-full pointer-events-none blur-2xl"
        style={{
          width: 'clamp(220px, 32vw, 380px)',
          height: 'clamp(80px, 14vw, 140px)',
          background:
            'radial-gradient(ellipse, rgba(171, 210, 250, 0.18) 0%, rgba(118, 146, 255, 0.08) 50%, transparent 80%)',
        }}
        animate={{
          opacity: [0, 0, 0.3, 0.3, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: 'easeInOut',
          times: [0, 0.138, 0.323, 0.908, 1.0],
        }}
      />

      {/* 2. Authentic Velora Brand Typography (Times New Roman Serif with Crisp Metallic Chrome Sheen) */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Specular sheen container for metallic letters */}
        <div className="relative overflow-hidden px-4 py-1">
          <h2 className="font-times font-bold text-[clamp(2.6rem,6.8vw,5.6rem)] uppercase tracking-[0.24em] sm:tracking-[0.30em] leading-none text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-[#EBF3FC] via-50% to-[#8EAFE2] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.75)] select-none pl-[0.24em] sm:pl-[0.30em]">
            VELORA
          </h2>

          {/* Specular Light Sheen sweep across metallic serif letters */}
          {!reducedMotion && (
            <motion.div
              className="absolute inset-0 pointer-events-none -skew-x-12"
              animate={{
                x: ['-140%', '-140%', '240%', '240%'],
                opacity: [0, 0.85, 0.85, 0],
              }}
              transition={{
                duration: 13,
                repeat: Infinity,
                ease: 'easeInOut',
                // Sweeps across as Velora settles (3.0s - 4.2s)
                times: [0, 0.231, 0.323, 1.0],
              }}
            >
              <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/45 to-transparent blur-[2px]" />
            </motion.div>
          )}
        </div>

        {/* Global Subtitle Rule: — GLOBAL — */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-1.5 sm:mt-2">
          <span className="h-[1.5px] w-10 sm:w-16 bg-gradient-to-r from-transparent via-[#00F0FF]/85 to-[#7692FF]" />
          <span className="font-sans font-semibold tracking-[0.45em] sm:tracking-[0.52em] text-[10.5px] sm:text-xs uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#ABD2FA] to-[#7692FF] drop-shadow-[0_0_8px_rgba(0,240,255,0.5)] pl-[0.45em] sm:pl-[0.52em]">
            GLOBAL
          </span>
          <span className="h-[1.5px] w-10 sm:w-16 bg-gradient-to-l from-transparent via-[#00F0FF]/85 to-[#7692FF]" />
        </div>
      </div>
    </motion.div>
  );
};

