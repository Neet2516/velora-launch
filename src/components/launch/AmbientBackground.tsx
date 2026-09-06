import React from 'react';
import animatedVideo from '../../../assets/animated_video.mp4';

/**
 * AmbientBackground
 * Cinematic atmospheric background for the Launch Event screen.
 * Reuses the authentic animated_video.mp4 with continuous, uninterrupted playback.
 * Maintains natural video visibility and atmosphere without synthetic grids or wireframes,
 * accented only with subtle Velora ambient glows and soft vignettes for typography contrast.
 */
export const AmbientBackground: React.FC = React.memo(() => {
  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden"
      style={{ contain: 'paint layout' }}
    >
      {/* 1. Deepest Cosmic Navy Base (#050c26) */}
      <div className="absolute inset-0 bg-[#050c26]" />

      {/* 2. Authentic Velora Ambient Video Loop (Continuous, independent of foreground) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover opacity-[0.82] will-change-transform"
      >
        <source src={animatedVideo} type="video/mp4" />
        <source src="/assets/animated_video.mp4" type="video/mp4" />
      </video>

      {/* 3. Soft Radial Cosmic Ambient Nebula */}
      <div
        className="absolute top-1/2 left-1/2 w-[95vw] max-w-[1300px] h-[580px] bg-gradient-to-tr from-[#1B2CC1]/20 via-[#7692FF]/15 to-transparent rounded-full blur-[150px] pointer-events-none"
        style={{
          transform: 'translate(-50%, -50%) scale(var(--audio-scale, 1))',
          opacity: 'calc(var(--audio-glow, 0.4) * 1.2)',
          transition: 'transform 0.08s ease-out, opacity 0.08s ease-out',
        }}
      />

      {/* 4. Soft Directional Edge Transitions (Keeps text legible while video breathes) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050c26]/30 via-transparent to-[#050c26]/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050c26]/20 via-transparent to-[#050c26]/35 pointer-events-none" />

      {/* 5. Minimal Cinematic Radial Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 85% at 50% 50%, transparent 40%, rgba(5, 12, 38, 0.15) 70%, rgba(5, 12, 38, 0.60) 100%)',
        }}
      />
    </div>
  );
});

AmbientBackground.displayName = 'AmbientBackground';

