import React from 'react';
import animatedVideo from '../../../assets/animated_video.mp4';

/**
 * AmbientBackground
 * Cinematic atmospheric background for the Launch Event screen.
 * Reuses the authentic animated_video.mp4 with tuned opacity (85%) so the
 * global skyline and financial atmosphere are clearly recognizable,
 * balanced with soft radial ambient gradients and directional vignettes
 * to guarantee sharp contrast for the foreground typography.
 */
export const AmbientBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden"
      style={{ contain: 'paint layout' }}
    >
      {/* 1. Deepest Cosmic Navy Base (#050c26) */}
      <div className="absolute inset-0 bg-[#050c26]" />

      {/* 2. Authentic Velora Ambient Video Loop (Tuned for clear visibility of the atmosphere) */}
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

      {/* 3. Soft Radial Cosmic Ambient Nebula (Preserves Velora navy-cobalt aura) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-[1300px] h-[580px] bg-gradient-to-tr from-[#1B2CC1]/15 via-[#7692FF]/10 to-transparent rounded-full blur-[150px] pointer-events-none" />

      {/* 4. Subtle Cyber Grid (10% opacity) */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none" />

      {/* 5. Soft Directional Edge Transitions (Keeps text legible while video breathes) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050c26]/35 via-transparent to-[#050c26]/35 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050c26]/25 via-transparent to-[#050c26]/40 pointer-events-none" />

      {/* 6. Minimal Cinematic Radial Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 85% at 50% 50%, transparent 40%, rgba(5, 12, 38, 0.15) 70%, rgba(5, 12, 38, 0.65) 100%)',
        }}
      />
    </div>
  );
};
