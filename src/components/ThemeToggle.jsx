import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const playSpaceSound = (isGoingDark) => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = 'sine';

    if (isGoingDark) {
      // Dark mode: Deep, descending spacey hum
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.4);
      gainNode.gain.setValueAtTime(0.4, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
    } else {
      // Light mode: Bright, ascending ping
      osc.frequency.setValueAtTime(200, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.3);
      gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
    }

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start();
    // Use timeout to close context and free up resources
    osc.stop(ctx.currentTime + 0.5);
    setTimeout(() => {
      if (ctx.state !== 'closed') ctx.close();
    }, 600);
  } catch (e) {
    console.error("Audio playback failed", e);
  }
};

export default function ThemeToggle({ className = "" }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return document.documentElement.classList.contains('dark') || window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const handleToggle = () => {
    const nextMode = !isDark;
    setIsDark(nextMode);
    playSpaceSound(nextMode);
  };

  return (
    <button
      onClick={handleToggle}
      className={`flex shrink-0 items-center w-14 h-7 p-1 rounded-full bg-slate-200 dark:bg-zinc-800 border border-black/10 dark:border-white/10 shadow-inner transition-colors duration-500 cursor-pointer ${className}`}
      aria-label="Toggle Dark Mode"
    >
      <div
        className={`w-5 h-5 rounded-full bg-white dark:bg-zinc-900 shadow-lg flex items-center justify-center transform transition-transform duration-500 ease-in-out ${isDark ? 'translate-x-7' : 'translate-x-0'
          }`}
      >
        {isDark ? (
          <Moon size={12} className="text-amber-400" />
        ) : (
          <Sun size={12} className="text-amber-500" />
        )}
      </div>
    </button>
  );
}
