import React from 'react';
import { motion } from 'framer-motion';

interface ParticleDef {
  id: number;
  x: number; // initial % across screen
  y: number; // initial % down screen
  size: number; // in px
  color: string;
  duration: number; // seconds
  delay: number; // seconds
  driftX: number; // px horizontal drift
  driftY: number; // px vertical drift
}

// Fixed-seed particles to ensure ZERO runtime DOM allocation/destruction
const STATIC_PARTICLES: ParticleDef[] = [
  { id: 1, x: 22, y: 35, size: 2.2, color: '#ABD2FA', duration: 11.5, delay: -2.4, driftX: 18, driftY: -35 },
  { id: 2, x: 74, y: 28, size: 1.8, color: '#7692FF', duration: 14.0, delay: -5.1, driftX: -22, driftY: -42 },
  { id: 3, x: 48, y: 62, size: 2.5, color: '#ffffff', duration: 9.8, delay: -1.2, driftX: 14, driftY: -28 },
  { id: 4, x: 15, y: 70, size: 1.6, color: '#7692FF', duration: 13.2, delay: -6.0, driftX: -15, driftY: -30 },
  { id: 5, x: 82, y: 65, size: 2.0, color: '#ABD2FA', duration: 12.0, delay: -3.8, driftX: 20, driftY: -38 },
  { id: 6, x: 38, y: 20, size: 1.5, color: '#ABD2FA', duration: 15.0, delay: -8.0, driftX: -12, driftY: -25 },
  { id: 7, x: 62, y: 80, size: 2.2, color: '#ffffff', duration: 10.5, delay: -4.5, driftX: 16, driftY: -32 },
  { id: 8, x: 29, y: 48, size: 1.8, color: '#7692FF', duration: 13.8, delay: -7.2, driftX: -18, driftY: -36 },
  { id: 9, x: 68, y: 42, size: 2.4, color: '#ABD2FA', duration: 12.5, delay: -2.0, driftX: 22, driftY: -40 },
  { id: 10, x: 88, y: 30, size: 1.4, color: '#7692FF', duration: 16.0, delay: -9.5, driftX: -10, driftY: -22 },
  { id: 11, x: 12, y: 22, size: 2.0, color: '#ffffff', duration: 11.0, delay: -3.3, driftX: 15, driftY: -28 },
  { id: 12, x: 54, y: 15, size: 1.6, color: '#ABD2FA', duration: 14.5, delay: -6.8, driftX: -14, driftY: -34 },
  { id: 13, x: 79, y: 82, size: 2.0, color: '#7692FF', duration: 12.8, delay: -1.7, driftX: 18, driftY: -30 },
  { id: 14, x: 42, y: 75, size: 1.5, color: '#ABD2FA', duration: 15.2, delay: -8.5, driftX: -16, driftY: -26 },
  { id: 15, x: 92, y: 55, size: 2.2, color: '#ffffff', duration: 10.2, delay: -4.0, driftX: 12, driftY: -32 },
  { id: 16, x: 8, y: 58, size: 1.8, color: '#7692FF', duration: 13.5, delay: -5.7, driftX: -15, driftY: -38 },
];

/**
 * AmbientParticles
 * Renders a fixed set of slow, understated floating stardust motes.
 * Decoupled from the 13-second loop so particles drift smoothly without sudden resets.
 */
export const AmbientParticles: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none select-none z-[1] overflow-hidden">
      {STATIC_PARTICLES.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
          animate={{
            x: [0, p.driftX, 0],
            y: [0, p.driftY, 0],
            opacity: [0.15, 0.65, 0.25, 0.15],
            scale: [0.9, 1.2, 0.95, 0.9],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};
