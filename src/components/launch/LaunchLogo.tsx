import React from 'react';
import { motion } from 'framer-motion';
import { VeloraSignature } from '../brand/VeloraSignature';

interface LaunchLogoProps {
  reducedMotion?: boolean;
}

/**
 * LaunchLogo
 * Primary brand focal anchor for the Launch Event screen.
 * - Scaled up by ~30% for commanding visual presence
 * - Authentic vector path-tracing for the infinity loop (0.0s - 2.2s)
 * - Sequential illumination of the three ascending growth bars (2.2s - 2.6s)
 * - Luminous nexus glow pulse and VeloraSignature reveal at resonance (2.6s - 4.5s)
 * - Smooth upward glide using Velora's [0.16, 1, 0.3, 1] ease at 4.8s
 * - Regal hold through 11.4s, dissolving seamlessly into void at 11.4s - 12.6s
 */
export const LaunchLogo: React.FC<LaunchLogoProps> = ({ reducedMotion = false }) => {
  const infinityPath =
    'M60 35 C48 16, 26 14, 16 24 C5 34, 5 44, 16 52 C28 60, 48 54, 60 35 C72 16, 92 14, 104 24 C115 34, 115 44, 104 52 C92 60, 72 54, 60 35 Z';

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center pointer-events-none select-none z-20"
      // Master 13s Vertical Placement & Opacity Envelope:
      // - 0s-4.8s: Centered in stage (y: 0)
      // - 4.8s-6.2s: Glides smoothly upward (y: 0 -> -36px) using [0.16, 1, 0.3, 1]
      // - 6.2s-11.4s: Anchored in dominant upper position (-36px)
      // - 11.4s-12.5s: Dissolves into void (opacity: 1 -> 0)
      // - 12.6s-13.0s: Resets to (y: 0, opacity: 0)
      animate={
        reducedMotion
          ? {
              y: [0, 0, -32, -32, -32, 0, 0],
              opacity: [0, 1, 1, 1, 1, 0, 0],
            }
          : {
              y: [0, 0, 0, -36, -36, -36, -36, 0, 0],
              opacity: [0, 0.5, 1, 1, 1, 1, 0.9, 0, 0],
            }
      }
      transition={{
        duration: 13,
        repeat: Infinity,
        ease: [0.16, 1, 0.3, 1],
        times: [0, 0.046, 0.192, 0.369, 0.477, 0.769, 0.877, 0.962, 1.0],
      }}
    >
      {/* 1. Restrained Ambient Behind-Glow (Cobalt & Ice) */}
      <motion.div
        className="absolute rounded-full pointer-events-none blur-3xl"
        style={{
          width: 'clamp(260px, 35vw, 460px)',
          height: 'clamp(150px, 22vw, 280px)',
          background:
            'radial-gradient(ellipse, rgba(171, 210, 250, 0.45) 0%, rgba(118, 146, 255, 0.28) 40%, rgba(27, 44, 193, 0.12) 70%, transparent 100%)',
        }}
        animate={{
          scale:   [0.85, 1.05, 1.22, 1.1,  1.15, 0.85, 0.85],
          opacity: [0,    0.7,  0.95, 0.8,  0.8,  0,    0   ],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: 'easeInOut',
          // Resonance peak at 3.3s (0.254)
          times: [0, 0.192, 0.254, 0.462, 0.877, 0.962, 1.0],
        }}
      />

      {/* 2. Dominant Infinity Emblem - Primary Visual Focal Point (+30% Scale) */}
      <div className="relative z-10 w-[clamp(190px,26vw,315px)] h-auto flex items-center justify-center">
        <motion.div
          className="w-full h-full"
          animate={
            reducedMotion
              ? {}
              : {
                  filter: [
                    'drop-shadow(0 0 14px rgba(118, 146, 255, 0.5)) drop-shadow(0 0 24px rgba(171, 210, 250, 0.25))',
                    'drop-shadow(0 0 18px rgba(118, 146, 255, 0.65)) drop-shadow(0 0 32px rgba(171, 210, 250, 0.4))',
                    'drop-shadow(0 0 30px rgba(118, 146, 255, 0.9)) drop-shadow(0 0 50px rgba(171, 210, 250, 0.65))', // Resonance glow pulse
                    'drop-shadow(0 0 20px rgba(118, 146, 255, 0.65)) drop-shadow(0 0 35px rgba(171, 210, 250, 0.35))',
                    'drop-shadow(0 0 20px rgba(118, 146, 255, 0.65)) drop-shadow(0 0 35px rgba(171, 210, 250, 0.35))',
                    'drop-shadow(0 0 8px rgba(118, 146, 255, 0.2))',
                    'drop-shadow(0 0 0px transparent)',
                  ],
                }
          }
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.185, 0.254, 0.369, 0.877, 0.954, 1.0],
          }}
        >
          <svg
            viewBox="0 0 120 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto overflow-visible"
          >
            <defs>
              {/* Exact Brand Palette Gradient from VeloraLogo.tsx */}
              <linearGradient id="launchLogoGrad" x1="0%" y1="15%" x2="100%" y2="85%">
                <stop offset="0%" stopColor="#ABD2FA" />
                <stop offset="35%" stopColor="#7692FF" />
                <stop offset="70%" stopColor="#2539d9" />
                <stop offset="100%" stopColor="#1B2CC1" />
              </linearGradient>

              {/* Chart Bars Gradients */}
              <linearGradient id="launchBarA" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#7692FF" />
                <stop offset="100%" stopColor="#ABD2FA" />
              </linearGradient>
              <linearGradient id="launchBarB" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#2539d9" />
                <stop offset="100%" stopColor="#7692FF" />
              </linearGradient>
              <linearGradient id="launchBarC" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#1B2CC1" />
                <stop offset="100%" stopColor="#5271ea" />
              </linearGradient>

              {/* Refined SVG Glow Filter */}
              <filter id="launchGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Primary Infinity Loop Stroke: Elegantly draws in 0.15s - 2.2s */}
            <motion.path
              d={infinityPath}
              stroke="url(#launchLogoGrad)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#launchGlowFilter)"
              animate={
                reducedMotion
                  ? { pathLength: 1, opacity: [0, 1, 1, 1, 1, 0, 0] }
                  : {
                      pathLength: [0, 0, 1, 1, 1, 1, 1, 0, 0],
                      opacity:    [0, 0.4, 1, 1, 1, 1, 1, 0, 0],
                    }
              }
              transition={{
                duration: 13,
                repeat: Infinity,
                ease: 'linear',
                times: [0, 0.015, 0.169, 0.369, 0.769, 0.877, 0.954, 0.985, 1.0],
              }}
            />

            {/* Inner Highlight Line for 3D Sheen */}
            <motion.path
              d={infinityPath}
              stroke="#ffffff"
              strokeWidth="1.6"
              strokeOpacity="0.75"
              strokeLinecap="round"
              fill="none"
              animate={
                reducedMotion
                  ? { pathLength: 1, opacity: [0, 0.75, 0.75, 0.75, 0.75, 0, 0] }
                  : {
                      pathLength: [0, 0, 1, 1, 1, 1, 1, 0, 0],
                      opacity:    [0, 0.3, 0.75, 0.75, 0.75, 0.75, 0.6, 0, 0],
                    }
              }
              transition={{
                duration: 13,
                repeat: Infinity,
                ease: 'linear',
                times: [0, 0.023, 0.177, 0.369, 0.769, 0.877, 0.954, 0.985, 1.0],
              }}
            />

            {/* Ascending Chart Bar 1 (Left) - Illuminates sequentially at 2.15s */}
            <motion.rect
              x="52"
              y="40"
              width="3.5"
              height="7"
              rx="1"
              fill="url(#launchBarA)"
              style={{ transformOrigin: '53.75px 47px' }}
              animate={
                reducedMotion
                  ? { opacity: [0, 1, 1, 1, 1, 0, 0] }
                  : {
                      scaleY:  [0, 0, 1, 1, 1, 1, 0, 0],
                      opacity: [0, 0, 1, 1, 1, 1, 0, 0],
                    }
              }
              transition={{
                duration: 13,
                repeat: Infinity,
                ease: 'easeOut',
                times: [0, 0.165, 0.188, 0.369, 0.769, 0.877, 0.954, 1.0],
              }}
            />

            {/* Ascending Chart Bar 2 (Center) - Illuminates sequentially at 2.35s */}
            <motion.rect
              x="58.5"
              y="36"
              width="3.5"
              height="11"
              rx="1"
              fill="url(#launchBarB)"
              style={{ transformOrigin: '60.25px 47px' }}
              animate={
                reducedMotion
                  ? { opacity: [0, 1, 1, 1, 1, 0, 0] }
                  : {
                      scaleY:  [0, 0, 1, 1, 1, 1, 0, 0],
                      opacity: [0, 0, 1, 1, 1, 1, 0, 0],
                    }
              }
              transition={{
                duration: 13,
                repeat: Infinity,
                ease: 'easeOut',
                times: [0, 0.180, 0.204, 0.369, 0.769, 0.877, 0.954, 1.0],
              }}
            />

            {/* Ascending Chart Bar 3 (Right) - Illuminates sequentially at 2.55s */}
            <motion.rect
              x="65"
              y="31"
              width="3.5"
              height="16"
              rx="1"
              fill="url(#launchBarC)"
              style={{ transformOrigin: '66.75px 47px' }}
              animate={
                reducedMotion
                  ? { opacity: [0, 1, 1, 1, 1, 0, 0] }
                  : {
                      scaleY:  [0, 0, 1, 1, 1, 1, 0, 0],
                      opacity: [0, 0, 1, 1, 1, 1, 0, 0],
                    }
              }
              transition={{
                duration: 13,
                repeat: Infinity,
                ease: 'easeOut',
                times: [0, 0.196, 0.220, 0.369, 0.769, 0.877, 0.954, 1.0],
              }}
            />
          </svg>
        </motion.div>
      </div>

      {/* 3. Authentic VeloraSignature Cursive Brand Reveal (+30% Scale) */}
      <motion.div
        className="relative z-10 w-[clamp(240px,33vw,415px)] h-auto -mt-1 sm:-mt-2 flex flex-col items-center"
        animate={
          reducedMotion
            ? { opacity: [0, 0, 1, 1, 1, 0, 0] }
            : {
                opacity: [0, 0, 1, 1, 1, 0, 0],
                scale:   [0.92, 0.92, 1.0, 1.0, 1.0, 0.92, 0.92],
              }
        }
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: [0.16, 1, 0.3, 1],
          // Reveals smoothly at resonance (2.6s / 0.200), holds till 11.4s (0.877)
          times: [0, 0.200, 0.285, 0.769, 0.877, 0.954, 1.0],
        }}
      >
        <VeloraSignature className="w-full h-auto" animated={false} glow={true} />

        {/* Global Subtitle Rule (Exact VeloraLogo lockup) */}
        <div className="flex items-center justify-center gap-2.5 mt-0.5 sm:mt-1">
          <span className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent to-[#7692FF]/80" />
          <span className="font-sans font-semibold tracking-[0.45em] text-[#ABD2FA] text-[10px] sm:text-xs uppercase leading-none">
            GLOBAL
          </span>
          <span className="h-[1px] w-10 sm:w-16 bg-gradient-to-l from-transparent to-[#1B2CC1]/80" />
        </div>
      </motion.div>
    </motion.div>
  );
};
