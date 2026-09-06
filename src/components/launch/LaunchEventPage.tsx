import React, { useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import { AmbientBackground } from './AmbientBackground';
import { LaunchLogo } from './LaunchLogo';
import { WelcomeText } from './WelcomeText';
import { LaunchTitle } from './LaunchTitle';
import { AudioController } from './AudioController';

/**
 * LaunchEventPage
 * Standalone, single-purpose, full-screen Launch Event Motion Screen.
 * Authentic extension of the Velora brand:
 * - Continuous, uninterrupted cinematic background video (animated_video.mp4)
 * - Single cursive Velora foreground identity (no duplicate infinity logo)
 * - Clean 3-tier visual hierarchy: VELORA -> WELCOME TO -> LAUNCH EVENT
 * - Synchronized 13-second narrative with full composition hold (9.5s - 11.8s)
 * - Very smooth fade/dissolve (11.8s - 13.0s) and seamless restart
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
      className="fixed inset-0 w-screen h-[100dvh] bg-[#050c26] text-white overflow-hidden select-none flex items-center justify-center cursor-default"
      style={{ contain: 'strict' }}
      aria-label="Velora Global Launch Event Motion Screen"
    >
      {/* 1. Authentic Atmospheric Background (Continuous, Uninterrupted Playback) */}
      <AmbientBackground />

      {/* 2. Interactive Audio Experience Controller */}
      <AudioController reducedMotion={shouldReduceMotion} />

      {/* 3. Golden-Ratio Centered Stage for Master 13s Narrative */}
      <div className="relative z-10 w-full max-w-[1200px] max-h-[90vh] px-4 sm:px-8 flex flex-col items-center justify-center text-center">
        {/* Tier 1: Editorial Subtitle: WELCOME TO THE */}
        <WelcomeText reducedMotion={shouldReduceMotion} />

        {/* Tier 2: Authentic Velora Brand Hero: VELORA */}
        <LaunchLogo reducedMotion={shouldReduceMotion} />

        {/* Tier 3: Dramatic Climax Headline: LAUNCH EVENT */}
        <LaunchTitle reducedMotion={shouldReduceMotion} />
      </div>
    </main>
  );
};

export default LaunchEventPage;

