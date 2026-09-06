import React from 'react';
import { motion } from 'framer-motion';
import { VeloraSignature } from '../brand/VeloraSignature';

interface LaunchLogoProps {
  reducedMotion?: boolean;
}

/**
 * LaunchLogo
 * Primary brand identity focal anchor for the Launch Event screen.
 * Displays exclusively the cursive Velora signature as the top brand element.
 * 
 * 13s Foreground Timeline:
 * - 0–2.5s: Velora signature elegant reveal (opacity 0 -> 1, scale 0.94 -> 1.0, blur 8px -> 0px)
 * - 2.5–5s: Signature settles with subtle ambient glow pulse
 * - 5–7s: Anchored as "WELCOME TO" reveals below
 * - 7–9.5s: Anchored as "LAUNCH EVENT" reveals below
 * - 9.5–11.8s: FULL COMPOSITION HOLD - perfectly crisp & clearly legible
 * - 11.8–13s: Very smooth fade/dissolve (opacity 1 -> 0, blur 0px -> 6px)
 * - 13s: Seamless restart with 0s initial state
 */
export const LaunchLogo: React.FC<LaunchLogoProps> = ({ reducedMotion = false }) => {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center pointer-events-none select-none z-20"
      animate={
        reducedMotion
          ? {
              opacity: [0, 1, 1, 1, 1, 1, 0],
            }
          : {
              opacity: [0, 1, 1, 1, 1, 1, 0],
              scale:   [0.94, 1.0, 1.0, 1.0, 1.0, 1.0, 0.96],
              filter:  [
                'blur(8px)',
                'blur(0px)',
                'blur(0px)',
                'blur(0px)',
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
        // Keyframes: 0s(0), 2.5s(0.192), 5.0s(0.385), 7.0s(0.538), 9.5s(0.731), 11.8s(0.908), 13.0s(1.0)
        times: [0, 0.192, 0.385, 0.538, 0.731, 0.908, 1.0],
      }}
    >
      {/* 1. Restrained Ambient Behind-Glow (Cobalt & Ice) */}
      <motion.div
        className="absolute rounded-full pointer-events-none blur-3xl"
        style={{
          width: 'clamp(280px, 42vw, 540px)',
          height: 'clamp(140px, 22vw, 260px)',
          background:
            'radial-gradient(ellipse, rgba(171, 210, 250, 0.38) 0%, rgba(118, 146, 255, 0.22) 42%, rgba(27, 44, 193, 0.08) 75%, transparent 100%)',
        }}
        animate={{
          scale:   [0.85, 1.02, 1.15, 1.05, 1.05, 0.85],
          opacity: [0,    0.6,  0.88, 0.7,  0.7,  0   ],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: 'easeInOut',
          // Glow pulses during settle (2.5s - 5s) and holds through 11.8s
          times: [0, 0.192, 0.308, 0.385, 0.908, 1.0],
        }}
      />

      {/* 2. Authentic Cursive Velora Signature */}
      <div className="relative z-10 w-[clamp(270px,38vw,480px)] h-auto flex flex-col items-center justify-center">
        <VeloraSignature className="w-full h-auto" animated={false} glow={true} />
      </div>
    </motion.div>
  );
};

