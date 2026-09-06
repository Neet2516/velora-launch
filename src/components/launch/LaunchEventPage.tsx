import React, { useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import { AmbientBackground } from './AmbientBackground';
import { RippleEffect } from './RippleEffect';
import { LaunchLogo } from './LaunchLogo';
import { WelcomeText } from './WelcomeText';
import { LaunchTitle } from './LaunchTitle';

/**
 * LaunchEventPage
 * Standalone, single-purpose, full-screen Launch Event Motion Screen.
 * Authentic extension of the Velora website:
 * - Uses animated_video.mp4 with .bg-radial-ambient and .bg-cyber-grid
 * - Reuses authentic Velora Infinity Logo + VeloraSignature lockup
 * - Reuses HeroSection blur-to-focus motion with [0.16, 1, 0.3, 1] easing
 * - Infinite 13-second loop with seamless boundary transition
 */
export const LaunchEventPage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion() ?? false;

  // Lock body overflow & scroll when this route is mounted
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <main
      className="fixed inset-0 w-screen h-[100dvh] bg-[#050c26] text-white overflow-hidden select-none flex items-center justify-center cursor-none"
      style={{ contain: 'strict' }}
      aria-label="Velora Global Launch Event Motion Screen"
    >
      {/* 1. Authentic Atmospheric Background (Continuous, Uninterrupted) */}
      <AmbientBackground />

      {/* 2. Golden-Ratio Centered Stage for Master 13s Narrative */}
      <div className="relative z-10 w-full max-w-[1300px] max-h-[90vh] px-4 sm:px-8 flex flex-col items-center justify-center">
        {/* Single Luminous Shockwave Ripple at Logo Resonance */}
        <RippleEffect reducedMotion={shouldReduceMotion} />

        {/* Velora Authentic Infinity Emblem + Signature Brand Lockup */}
        <LaunchLogo reducedMotion={shouldReduceMotion} />

        {/* Editorial Subtitle: WELCOME TO */}
        <WelcomeText reducedMotion={shouldReduceMotion} />

        {/* Dramatic Headline: LAUNCH EVENT with Specular Sheen */}
        <LaunchTitle reducedMotion={shouldReduceMotion} />
      </div>
    </main>
  );
};

export default LaunchEventPage;
