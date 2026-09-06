import React from 'react';
import { motion } from 'framer-motion';

interface LaunchTitleProps {
  reducedMotion?: boolean;
}

/**
 * LaunchTitle
 * Climax title revealing "Launch Event" in an authentic cursive signature script.
 * Signature Steps Sequence:
 * - Step 1: "Launch" writes in with cursive signature fluidity (4.5s - 5.8s)
 * - Step 2: "Event" writes in sequentially (5.6s - 6.9s)
 * - Step 3: Tapered signature underline flourish draws beneath (6.5s - 7.6s)
 * - Step 4: Specular light sheen sweeps across the signed title
 * - Full Composition Hold: Holds crisp through 11.8s
 * - Dissolve: Smooth fade into 13.0s restart
 */
export const LaunchTitle: React.FC<LaunchTitleProps> = ({ reducedMotion = false }) => {
  return (
    <div className="relative flex flex-col items-center justify-center select-none pointer-events-none z-20 mt-0 sm:mt-1">
      {/* Title Container: Cursive Signature with Stepped Handwriting Reveal */}
      <div className="relative overflow-hidden px-6 pt-1 pb-2 flex items-center justify-center gap-3 sm:gap-4.5">
        {/* Step 1: "Launch" in signature cursive */}
        <motion.span
          className="font-cursive text-[clamp(3.2rem,8.5vw,7.2rem)] leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ABD2FA] to-[#7692FF] filter drop-shadow-[0_2px_10px_rgba(5,12,38,0.95)] drop-shadow-[0_0_16px_rgba(118,146,255,0.4)] inline-block pr-1"
          animate={
            reducedMotion
              ? { opacity: [0, 0, 1, 1, 0] }
              : {
                  opacity: [0, 0, 1, 1, 0],
                  x:       [-12, -12, 0, 0, -6],
                  filter:  ['blur(8px)', 'blur(8px)', 'blur(0px)', 'blur(0px)', 'blur(6px)'],
                }
          }
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: [0.16, 1, 0.3, 1],
            // Step 1: "Launch" writes in at 4.5s - 5.8s
            times: [0, 0.346, 0.446, 0.908, 1.0],
          }}
        >
          Launch
        </motion.span>

        {/* Step 2: "Event" in signature cursive */}
        <motion.span
          className="font-cursive text-[clamp(3.2rem,8.5vw,7.2rem)] leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#ABD2FA] via-[#C8DEFC] to-white filter drop-shadow-[0_2px_10px_rgba(5,12,38,0.95)] drop-shadow-[0_0_16px_rgba(118,146,255,0.4)] inline-block pl-1"
          animate={
            reducedMotion
              ? { opacity: [0, 0, 1, 1, 0] }
              : {
                  opacity: [0, 0, 1, 1, 0],
                  x:       [12, 12, 0, 0, 6],
                  filter:  ['blur(8px)', 'blur(8px)', 'blur(0px)', 'blur(0px)', 'blur(6px)'],
                }
          }
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: [0.16, 1, 0.3, 1],
            // Step 2: "Event" writes in sequentially at 5.6s - 6.9s
            times: [0, 0.431, 0.531, 0.908, 1.0],
          }}
        >
          Event
        </motion.span>

        {/* Specular Light Sheen sweep across cursive letters */}
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
              // Sweeps across at 6.8s - 8.0s
              times: [0, 0.523, 0.615, 1.0],
            }}
          >
            <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent blur-[2px]" />
          </motion.div>
        )}
      </div>

      {/* Step 3: Signature Underline Flourish */}
      <svg
        viewBox="0 0 320 20"
        className="w-[75%] max-w-[340px] h-auto -mt-2 sm:-mt-3 overflow-visible pointer-events-none select-none"
      >
        <defs>
          <linearGradient id="sigUnderlineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="20%" stopColor="#7692FF" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#ABD2FA" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 12,10 C 80,16 160,4 230,12 C 265,15 285,10 305,6"
          stroke="url(#sigUnderlineGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          animate={
            reducedMotion
              ? { opacity: [0, 0, 0.9, 0.9, 0] }
              : {
                  pathLength: [0, 0, 1, 1, 0],
                  opacity:    [0, 0, 0.95, 0.95, 0],
                }
          }
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: [0.16, 1, 0.3, 1],
            // Step 3: Underline draws in right after Event finishes writing (6.5s - 7.6s)
            times: [0, 0.500, 0.585, 0.908, 1.0],
          }}
        />
      </svg>
    </div>
  );
};

