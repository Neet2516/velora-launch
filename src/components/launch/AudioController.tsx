import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

interface AudioControllerProps {
  reducedMotion?: boolean;
}

export const AudioController: React.FC<AudioControllerProps> = ({ reducedMotion = false }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const [isSoundActive, setIsSoundActive] = useState(false);
  const [frequencyData, setFrequencyData] = useState<number[]>([25, 45, 30]);

  // Initialize Web Audio API Analyser for real-time reactive visualizer
  const setupWebAudio = useCallback(() => {
    if (!audioRef.current || audioContextRef.current) return;

    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 64;
      analyser.smoothingTimeConstant = 0.8;

      const source = ctx.createMediaElementSource(audioRef.current);
      source.connect(analyser);
      analyser.connect(ctx.destination);

      audioContextRef.current = ctx;
      analyserRef.current = analyser;
    } catch {
      // Fallback gracefully if Web Audio is restricted
    }
  }, []);

  // Update frequency data for equalizer bars & CSS pulse
  useEffect(() => {
    if (reducedMotion) return;

    const dataArray = new Uint8Array(16);

    const updateVisuals = () => {
      if (analyserRef.current && isSoundActive) {
        analyserRef.current.getByteFrequencyData(dataArray);

        const bands = [
          Math.max(20, Math.round((dataArray[1] / 255) * 100)),
          Math.max(30, Math.round((dataArray[3] / 255) * 100)),
          Math.max(20, Math.round((dataArray[5] / 255) * 100)),
        ];
        setFrequencyData(bands);

        // Update root CSS pulse property for beat reactivity
        const bassLevel = (dataArray[1] + dataArray[2]) / (255 * 2);
        const pulse = 1 + bassLevel * 0.12;
        document.documentElement.style.setProperty('--audio-scale', pulse.toFixed(3));
        document.documentElement.style.setProperty('--audio-glow', (0.35 + bassLevel * 0.65).toFixed(2));
      } else {
        document.documentElement.style.setProperty('--audio-scale', '1');
        document.documentElement.style.setProperty('--audio-glow', '0.4');
      }

      animationFrameRef.current = requestAnimationFrame(updateVisuals);
    };

    animationFrameRef.current = requestAnimationFrame(updateVisuals);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isSoundActive, reducedMotion]);

  // Seamless automatic background audio initialization without permission popups
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.75;

    const tryAutoplay = () => {
      if (!audio) return;
      setupWebAudio();
      if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }

      const p = audio.play();
      if (p !== undefined) {
        p.then(() => {
          setIsSoundActive(true);
        }).catch(() => {
          // Autoplay blocked by browser policy without gesture; wait for first passive interaction
          audio.muted = true;
          audio.play().then(() => {
            // Playing muted in background
          }).catch(() => {});
        });
      }
    };

    tryAutoplay();

    // Unlock sound seamlessly on any subtle user interaction without showing prompts
    const handleFirstGesture = () => {
      if (!audio) return;
      setupWebAudio();
      if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }
      audio.muted = false;
      audio.play().then(() => {
        setIsSoundActive(true);
      }).catch(() => {});

      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener('pointerdown', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('wheel', handleFirstGesture);
    };

    window.addEventListener('pointerdown', handleFirstGesture, { passive: true, once: true });
    window.addEventListener('keydown', handleFirstGesture, { passive: true, once: true });
    window.addEventListener('touchstart', handleFirstGesture, { passive: true, once: true });
    window.addEventListener('wheel', handleFirstGesture, { passive: true, once: true });

    return () => {
      cleanupListeners();
    };
  }, [setupWebAudio]);

  // Toggle Sound ON / OFF
  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    setupWebAudio();
    if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }

    if (isSoundActive) {
      audio.muted = true;
      audio.pause();
      setIsSoundActive(false);
    } else {
      audio.muted = false;
      audio.play().then(() => {
        setIsSoundActive(true);
      }).catch(() => {});
    }
  };

  return (
    <>
      {/* HTML5 Audio Element */}
      <audio
        ref={audioRef}
        autoPlay
        loop
        preload="auto"
        src="/audio/launch.mp3"
      >
        <source src="/audio/launch.mp3" type="audio/mp3" />
        <source src="/audio/Aylex%20-%20Adrenaline%20Drive%20(freetouse.com).mp3" type="audio/mp3" />
      </audio>

      {/* Small Sound ON / OFF Button in Bottom-Left */}
      <nav 
        aria-label="Sound Toggle"
        className="fixed bottom-5 left-5 sm:bottom-6 sm:left-7 z-50 pointer-events-auto"
      >
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onClick={toggleSound}
          aria-label={isSoundActive ? 'Turn sound off' : 'Turn sound on'}
          className={`flex items-center gap-2.5 px-3 py-1.5 rounded-full backdrop-blur-xl border transition-all duration-300 cursor-pointer select-none group shadow-lg ${
            isSoundActive
              ? 'bg-[#091540]/85 border-[#7692FF]/40 text-[#ABD2FA] hover:border-[#ABD2FA]/80 shadow-[0_0_16px_rgba(118,146,255,0.25)]'
              : 'bg-[#050c26]/80 border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/25 shadow-[0_0_10px_rgba(0,0,0,0.3)]'
          }`}
          title={isSoundActive ? 'Sound ON — Click to mute' : 'Sound OFF — Click to unmute'}
        >
          {isSoundActive ? (
            <>
              {/* Mini animated equalizer bars */}
              <div className="flex items-end gap-[2px] h-3 w-3 justify-center">
                {frequencyData.map((height, i) => (
                  <span
                    key={i}
                    className="w-[1.8px] rounded-full bg-gradient-to-t from-[#7692FF] to-[#ABD2FA] transition-all duration-75"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>

              <Volume2 className="w-3.5 h-3.5 text-[#ABD2FA] group-hover:scale-110 transition-transform" />

              <span className="font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-[#ABD2FA]">
                SOUND ON
              </span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-400 group-hover:scale-110 transition-all" />

              <span className="font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-slate-400 group-hover:text-slate-200">
                SOUND OFF
              </span>
            </>
          )}
        </motion.button>
      </nav>
    </>
  );
};

export default AudioController;
