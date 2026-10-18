import { useEffect, useState } from 'react';

/**
 * High-performance 3D Floating Glass Cube
 * Built using native CSS 3D transforms with 6 frosted glass faces.
 */
export function Floating3DCube({
  size = 44,
  className = '',
  style = {},
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const half = size / 2;

  const faceStyle: React.CSSProperties = {
    position: 'absolute',
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    border: '1px solid rgba(225, 211, 202, 0.75)',
    boxShadow: 'inset 0 0 12px rgba(255, 255, 255, 0.5), 0 4px 10px rgba(43, 29, 32, 0.05)',
    backdropFilter: 'blur(2px)',
    WebkitBackdropFilter: 'blur(2px)',
    borderRadius: '6px',
  };

  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{
        perspective: '800px',
        width: `${size}px`,
        height: `${size}px`,
        ...style,
      }}
      aria-hidden="true"
    >
      <div
        className="w-full h-full preserve-3d animate-tumble-cube"
        style={{ transformOrigin: 'center center' }}
      >
        {/* Front */}
        <div style={{ ...faceStyle, transform: `translateZ(${half}px)` }} />
        {/* Back */}
        <div style={{ ...faceStyle, transform: `rotateY(180deg) translateZ(${half}px)` }} />
        {/* Right */}
        <div style={{ ...faceStyle, transform: `rotateY(90deg) translateZ(${half}px)` }} />
        {/* Left */}
        <div style={{ ...faceStyle, transform: `rotateY(-90deg) translateZ(${half}px)` }} />
        {/* Top */}
        <div style={{ ...faceStyle, transform: `rotateX(90deg) translateZ(${half}px)` }} />
        {/* Bottom */}
        <div style={{ ...faceStyle, transform: `rotateX(-90deg) translateZ(${half}px)` }} />
      </div>
    </div>
  );
}

/**
 * 3D Spherical Pearl with Photorealistic Lighting & Ambient Cast Shadow
 */
export function Floating3DSphere({
  size = 36,
  variant = 'rose',
  className = '',
  style = {},
}: {
  size?: number;
  variant?: 'rose' | 'linen' | 'gold';
  className?: string;
  style?: React.CSSProperties;
}) {
  const isRose = variant === 'rose';

  const gradient = isRose
    ? 'radial-gradient(circle at 32% 26%, #FFFFFF 0%, #F5D3D7 20%, #C4737C 60%, #7A343F 90%, #3B1B20 100%)'
    : 'radial-gradient(circle at 30% 26%, #FFFFFF 0%, #FAF5F1 25%, #E1D3CA 62%, #B89E90 90%, #6E5A52 100%)';

  const shadowColor = isRose
    ? 'rgba(196, 115, 124, 0.35)'
    : 'rgba(43, 29, 32, 0.16)';

  return (
    <div
      className={`pointer-events-none select-none relative animate-sphere-bob ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...style,
      }}
      aria-hidden="true"
    >
      {/* 3D Sphere Surface */}
      <div
        className="w-full h-full rounded-full transition-transform"
        style={{
          background: gradient,
          boxShadow: `inset -3px -5px 10px rgba(43, 29, 32, 0.3), 0 ${size * 0.35}px ${size * 0.6}px -4px ${shadowColor}`,
        }}
      />
      {/* Specular Glint */}
      <div
        className="absolute w-[28%] h-[28%] rounded-full bg-white/70 blur-[0.6px] pointer-events-none"
        style={{
          top: '16%',
          left: '22%',
        }}
      />
    </div>
  );
}

/**
 * 3D Celestial Torus Ring with Tilted Axis and Specular Rim
 */
export function Floating3DTorus({
  size = 46,
  className = '',
  style = {},
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{
        perspective: '600px',
        width: `${size}px`,
        height: `${size}px`,
        ...style,
      }}
      aria-hidden="true"
    >
      <div className="w-full h-full preserve-3d animate-torus-3d">
        <div
          className="w-full h-full rounded-full border-[5px] sm:border-[6px] border-[#C4737C]/60"
          style={{
            boxShadow:
              '0 8px 20px rgba(196, 115, 124, 0.22), inset 0 2px 4px rgba(255, 255, 255, 0.75)',
            background:
              'radial-gradient(circle, transparent 40%, rgba(225, 211, 202, 0.2) 65%, transparent 70%)',
          }}
        />
      </div>
    </div>
  );
}

/**
 * 3D Crystal Octahedron / Diamond Prism
 */
export function Floating3DDiamond({
  size = 38,
  className = '',
  style = {},
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{
        perspective: '700px',
        width: `${size}px`,
        height: `${size}px`,
        ...style,
      }}
      aria-hidden="true"
    >
      <div className="w-full h-full preserve-3d animate-diamond-3d flex items-center justify-center">
        <div
          className="w-[72%] h-[72%] rotate-45 rounded-lg border border-[#E1D3CA] bg-white/40 backdrop-blur-xs"
          style={{
            boxShadow:
              'inset 0 0 10px rgba(255, 255, 255, 0.6), 0 12px 24px -6px rgba(43, 29, 32, 0.12)',
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(225,211,202,0.3) 50%, rgba(196,115,124,0.18) 100%)',
          }}
        />
      </div>
    </div>
  );
}

/**
 * 3D Sculpted Organic Pebble Token
 */
export function Floating3DPebble({
  width = 48,
  height = 42,
  className = '',
  style = {},
}: {
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`pointer-events-none select-none animate-pebble-3d ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        ...style,
      }}
      aria-hidden="true"
    >
      <div
        className="w-full h-full blob-shape"
        style={{
          background:
            'linear-gradient(135deg, #FFFFFF 0%, #FAF5F1 30%, #E1D3CA 70%, #BFA79A 100%)',
          boxShadow:
            'inset 2px 3px 6px rgba(255, 255, 255, 0.85), inset -3px -4px 8px rgba(43, 29, 32, 0.12), 0 12px 24px -6px rgba(43, 29, 32, 0.12)',
        }}
      />
    </div>
  );
}

/**
 * 3D Floating Heart with Glossy Surface and Soft Glow
 */
export function Floating3DHeart({
  size = 40,
  className = '',
  style = {},
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`pointer-events-none select-none relative animate-sphere-bob ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...style,
      }}
      aria-hidden="true"
    >
      <div
        className="w-full h-full flex items-center justify-center transform hover:scale-110 transition-transform"
        style={{
          filter: 'drop-shadow(0 12px 20px rgba(196, 115, 124, 0.35))',
        }}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-full h-full"
          fill="url(#heartGradientHero)"
        >
          <defs>
            <radialGradient id="heartGradientHero" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor="#F5D3D7" />
              <stop offset="70%" stopColor="#C4737C" />
              <stop offset="100%" stopColor="#7A343F" />
            </radialGradient>
          </defs>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
      {/* Specular Glint */}
      <div
        className="absolute w-[25%] h-[25%] rounded-full bg-white/85 blur-[0.6px] pointer-events-none"
        style={{
          top: '22%',
          left: '28%',
        }}
      />
    </div>
  );
}

/**
 * Wall Pinned Sticky Note ("Good Things Take Time") with 3D Pushpin (Interactive)
 */
export function WallStickyNote({
  className = '',
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  const [clickedCount, setClickedCount] = useState(0);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setClickedCount(prev => prev + 1);
  };

  return (
    <div
      className={`absolute pointer-events-auto select-none z-35 cursor-pointer group ${className}`}
      style={{
        transform: 'rotate(-3deg)',
        ...style,
      }}
      onClick={handleClick}
      title="Click for motivation!"
    >
      {/* 3D Pushpin at Top Center */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-40 w-5 h-5 rounded-full bg-gradient-to-br from-[#FFFFFF] via-[#E2959E] to-[#8C3A45] shadow-[0_4px_8px_rgba(43,29,32,0.35)] border border-white/60 flex items-center justify-center group-hover:scale-110 transition-transform">
        <div className="w-1.5 h-1.5 rounded-full bg-white/90 shadow-inner -top-0.5 -left-0.5 relative" />
      </div>

      {/* Sticky Note Paper */}
      <div
        className="w-[120px] sm:w-[130px] px-3 pt-3 pb-2 bg-[#F4D9DD] border border-[#E8C2C9] rounded-sm shadow-[0_12px_25px_rgba(43,29,32,0.18),inset_0_1px_3px_rgba(255,255,255,0.7)] backdrop-blur-xs relative transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_16px_35px_rgba(43,29,32,0.25)] active:scale-95"
        style={{
          boxShadow: '0 12px 30px rgba(43,29,32,0.15), inset 0 2px 4px rgba(255,255,255,0.6), inset 0 -4px 8px rgba(160,80,90,0.1)',
        }}
      >
        <div className="text-center font-serif text-[#3D2227] leading-tight select-none">
          <p className="text-[10px] sm:text-xs font-normal tracking-wide opacity-90">
            {clickedCount === 0 ? "Good" : "💡 Note"}
          </p>
          <p className="text-xs sm:text-sm font-bold tracking-tight my-0.5">
            {clickedCount === 0 ? "Things" : (clickedCount % 2 === 1 ? "Trust The" : "Keep")}
          </p>
          <p className="text-[10px] sm:text-xs font-normal tracking-wide opacity-90">
            {clickedCount === 0 ? "Take Time" : "Process"}
          </p>
        </div>
        <div className="mt-1.5 text-center text-[#9E4D58] text-[10px] font-medium tracking-wide flex items-center justify-center space-x-1 select-none">
          <span>♥</span>
          <span className="opacity-75">({clickedCount === 0 ? "tap" : `${clickedCount}`})</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 3D Heart Notification Badge (Interactive, triggers animation on click)
 */
export function FloatingHeartBadge({
  size = 52,
  className = '',
  style = {},
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 800); // Animation duration

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newHeart = { id: Date.now(), x, y };
    setHearts(prev => [...prev.slice(-5), newHeart]);
  };

  return (
    <div
      className={`absolute pointer-events-auto select-none z-35 cursor-pointer group ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...style,
      }}
      onClick={handleClick}
      title="Click to send love!"
    >
      {/* 3D Speech Bubble / Badge Background */}
      <div
        className={`w-full h-full rounded-2xl flex items-center justify-center relative shadow-[0_14px_30px_rgba(196,115,124,0.35)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 active:scale-95 ${isAnimating ? 'animate-bounce' : ''}`}
        style={{
          background: 'linear-gradient(135deg, #E598A2 0%, #C4737C 50%, #8C3A45 100%)',
          boxShadow: '0 12px 28px rgba(140,58,69,0.3), inset 0 2px 5px rgba(255,255,255,0.6), inset 0 -3px 6px rgba(60,20,25,0.25)',
        }}
      >
        {/* Speech tail at bottom left */}
        <div
          className="absolute -bottom-1.5 left-3 w-3 h-3 bg-[#C4737C] transform rotate-45 rounded-xs"
          style={{
            boxShadow: '2px 2px 4px rgba(140,58,69,0.2)',
          }}
        />

        {/* White 3D Heart */}
        <div className={`w-[52%] h-[52%] flex items-center justify-center filter drop-shadow-[0_2px_4px_rgba(60,20,25,0.25)] ${isAnimating ? 'animate-ping' : ''}`}>
          <svg viewBox="0 0 24 24" className="w-full h-full" fill="#FFFFFF">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>

      {/* Motion Sparkles / Streaks */}
      <div className={`absolute -top-2.5 -right-3.5 flex flex-col space-y-1 transform rotate-12 pointer-events-none transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-3.5 h-1 bg-[#D4838F] rounded-full shadow-xs" />
        <div className="w-5 h-1 bg-[#C4737C] rounded-full shadow-xs translate-x-1" />
        <div className="w-2.5 h-1 bg-[#E598A2] rounded-full shadow-xs" />
      </div>

      {/* Floating mini hearts on click */}
      {hearts.map(h => (
        <span
          key={h.id}
          className="absolute text-pink-600 font-bold text-lg pointer-events-none animate-ping select-none z-50"
          style={{
            left: `${h.x}px`,
            top: `${h.y}px`,
            animationDuration: '600ms',
          }}
        >
          💖
        </span>
      ))}
    </div>
  );
}

/**
 * Interactive Parallax Layer:
 * Listens to mouse position on desktop and subtly offsets floating objects
 */
export function useMouseParallax(factor = 15) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = ((e.clientX / innerWidth) - 0.5) * factor;
      const y = ((e.clientY / innerHeight) - 0.5) * factor;
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [factor]);

  return offset;
}
