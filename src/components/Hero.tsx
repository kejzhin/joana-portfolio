import { useState, useEffect } from 'react';
import { avatarPhoto } from '../data/portfolioData';
import { Floating3DDiamond, WallStickyNote, FloatingHeartBadge, Floating3DPebble } from './Floating3DObjects';

interface HeroProps {
  onContactClick: () => void;
}

// 3D Puzzle piece configuration (3x3 grid)
interface PuzzlePieceDef {
  id: number;
  row: number;
  col: number;
  // Dispersed 3D spatial coordinates before assembly
  startX: number;
  startY: number;
  startZ: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  delayMs: number;
}

const PUZZLE_PIECES: PuzzlePieceDef[] = [
  // Row 0
  { id: 0, row: 0, col: 0, startX: -140, startY: -120, startZ: 220, rotX: 45, rotY: -70, rotZ: -25, delayMs: 150 },
  { id: 1, row: 0, col: 1, startX: 0, startY: -160, startZ: -240, rotX: -80, rotY: 20, rotZ: 10, delayMs: 320 },
  { id: 2, row: 0, col: 2, startX: 140, startY: -130, startZ: 190, rotX: 50, rotY: 75, rotZ: 25, delayMs: 220 },
  // Row 1
  { id: 3, row: 1, col: 0, startX: -160, startY: 10, startZ: -180, rotX: 20, rotY: -85, rotZ: -15, delayMs: 400 },
  { id: 4, row: 1, col: 1, startX: 0, startY: 0, startZ: 320, rotX: -35, rotY: 40, rotZ: 45, delayMs: 50 }, // Center pops from front
  { id: 5, row: 1, col: 2, startX: 160, startY: 15, startZ: -190, rotX: -25, rotY: 85, rotZ: 15, delayMs: 480 },
  // Row 2
  { id: 6, row: 2, col: 0, startX: -130, startY: 140, startZ: -210, rotX: 65, rotY: -55, rotZ: 20, delayMs: 280 },
  { id: 7, row: 2, col: 1, startX: 15, startY: 170, startZ: 240, rotX: 85, rotY: -15, rotZ: -10, delayMs: 580 },
  { id: 8, row: 2, col: 2, startX: 135, startY: 135, startZ: -200, rotX: -60, rotY: 65, rotZ: -20, delayMs: 360 },
];

export default function Hero({ onContactClick }: HeroProps) {
  // Staged 3D Puzzle Animation Lifecycle
  const [piecesAssembled, setPiecesAssembled] = useState(false);
  const [puzzleSealed, setPuzzleSealed] = useState(false);
  const [sheenSwept, setSheenSwept] = useState(false);
  const [isFullySettled, setIsFullySettled] = useState(false);
  
  // Left column text states (smooth horizontal glide from left once image is fully shown)
  const [showHi, setShowHi] = useState(false);
  const [showJoan, setShowJoan] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showDesc, setShowDesc] = useState(false);
  const [showCta, setShowCta] = useState(false);

  // High-fidelity 3D Mouse Parallax Tracking
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Stage 1: The 3D puzzle pieces start flying in and rotating into their slots (~300ms)
    const t0 = setTimeout(() => {
      setPiecesAssembled(true);
    }, 300);

    // Stage 2: All 3D puzzle pieces lock together; the unified seamless photo layer takes over (~2200ms)
    const t1 = setTimeout(() => {
      setPuzzleSealed(true);
    }, 2200);

    // Stage 3: A radiant specular 3D light sheen sweeps across the assembled surface (~2500ms)
    const t2 = setTimeout(() => {
      setSheenSwept(true);
    }, 2500);

    // Stage 4: 3D Image is fully shown, locked in, and begins continuous 3D ambient floating physics (~2900ms)
    const t3 = setTimeout(() => {
      setIsFullySettled(true);
    }, 2900);

    // Stage 5: Sequenced typography smoothly glides in from the left side
    // 5a. "Hi I am Joan" glides in (~3000ms)
    const t4 = setTimeout(() => {
      setShowHi(true);
      setShowJoan(true);
    }, 3000);

    // 5b. "Your Virtual Administrative and Executive Assistant." glides in (~3600ms)
    const t6 = setTimeout(() => {
      setShowTitle(true);
    }, 3600);

    // 5c. Description paragraph glides in (~4300ms)
    const t7 = setTimeout(() => {
      setShowDesc(true);
    }, 4300);

    // 5d. "Contact" button glides in (~4900ms)
    const t8 = setTimeout(() => {
      setShowCta(true);
    }, 4900);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t6);
      clearTimeout(t7);
      clearTimeout(t8);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsHovered(false);
  };

  // Exact Marlon organic pebble blob border-radius styling
  const marlonBlobRadius = '46% 54% 52% 48% / 36% 44% 56% 64%';

  // Calculate dynamic 3D tilt angles & shadow offset
  const tiltX = isHovered ? mousePos.y * -16 : 0;
  const tiltY = isHovered ? mousePos.x * 18 : 0;
  const shadowX = isHovered ? mousePos.x * -30 : 0;
  const shadowY = isHovered ? mousePos.y * -30 + 20 : 20;

  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF5F1] to-[#F5E6E6]">
      {/* 3D Floating Decorative Ambient Objects */}
      <div className="absolute top-10 left-6 sm:left-14 pointer-events-none z-0 opacity-70 hidden sm:block">
        <Floating3DDiamond size={36} />
      </div>
      <div className="absolute bottom-8 left-1/4 pointer-events-none z-0 opacity-60 hidden md:block">
        <Floating3DPebble width={42} height={36} />
      </div>



      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[500px]">
          
          {/* Left Column: Sequenced Horizontal Slide-In from Left */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-7 z-10 order-2 lg:order-1">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-extrabold tracking-tight text-[#2B1D20] leading-[1.12]">
                {/* 1. "Hi, I'm Joan" */}
                <span
                  className={`block transition-all duration-1000 ease-out transform ${
                    showHi ? 'opacity-100 translate-x-0 filter-none' : 'opacity-0 -translate-x-16 blur-[2px]'
                  }`}
                >
                  Hi, I&apos;m{' '}
                  <span className="text-[#C4737C] inline-block font-extrabold">
                    Joan
                  </span>
                </span>

                {/* 2. "Your Virtual Administrative and Executive Assistant." */}
                <span
                  className={`block text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-[#2B1D20] font-bold tracking-tight mt-2.5 leading-[1.2] transition-all duration-1000 ease-out transform ${
                    showTitle ? 'opacity-100 translate-x-0 filter-none' : 'opacity-0 -translate-x-16 blur-[2px]'
                  }`}
                >
                  Your Virtual Administrative and Executive Assistant.
                </span>
              </h1>
            </div>

            {/* 4. Description paragraph smoothly slides in from the left */}
            <p
              className={`text-base sm:text-lg text-[#614C50] max-w-xl font-normal leading-relaxed text-balance transition-all duration-1000 ease-out transform ${
                showDesc ? 'opacity-100 translate-x-0 filter-none' : 'opacity-0 -translate-x-16 blur-[1px]'
              }`}
            >
              Empowering busy entrepreneurs, executives, and remote teams with proactive administrative support, inbox & calendar management, customer care, and reliable daily operations.
            </p>

            {/* 5. Primary Action Button: "Contact" with dusty mauve rose (#C4737C) */}
            <div
              className={`pt-2 transition-all duration-1000 ease-out transform ${
                showCta ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
              }`}
            >
              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center px-9 py-3.5 text-base font-semibold text-white bg-[#C4737C] hover:bg-[#AF5E67] active:bg-[#8F454E] rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <span>Contact</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3D Picture Presentation - perfectly proportioned and not oversized */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative order-1 lg:order-2 -mt-2 lg:-mt-8 lg:-translate-y-4">
            
            {/* 3D Perspective Stage - Refined compact dimensions to ensure natural proportions */}
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-[240px] h-[260px] sm:w-[320px] sm:h-[340px] md:w-[360px] md:h-[380px] flex items-center justify-center cursor-pointer perspective-1200"
            >
              
              {/* Dynamic 3D Cast Ambient Glow & Drop Shadow on the Ground Plane */}
              <div
                className="absolute w-[85%] h-[80%] rounded-full blur-2xl -z-20 transition-all duration-500 ease-out pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(196,115,124,0.32) 0%, rgba(43,29,32,0.15) 60%, transparent 100%)',
                  transform: `translate3d(${shadowX}px, ${shadowY}px, -50px) scale(${isHovered ? 1.06 : 0.96})`,
                  opacity: piecesAssembled ? 0.9 : 0,
                }}
              />

              {/* 3D Root Transform Node with True Depth Preservation */}
              <div
                className={`relative w-full h-full flex items-center justify-center preserve-3d transition-transform ${
                  isHovered ? 'duration-150 ease-out' : 'duration-700 ease-out'
                } ${isFullySettled && !isHovered ? 'animate-float-3d' : ''}`}
                style={{
                  transform: `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
                }}
              >
                
                {/* 3D Ambient Aura (translateZ: -30px) */}
                <div
                  className={`absolute -inset-4 bg-[#C4737C]/20 blur-xl transition-all duration-1200 ease-out pointer-events-none ${
                    piecesAssembled ? 'opacity-90 scale-100' : 'opacity-0 scale-75'
                  }`}
                  style={{
                    borderRadius: marlonBlobRadius,
                    transform: 'translateZ(-30px)',
                  }}
                />

                {/* 3D Organic Pebble Frame in Warm Almond Linen (#E1D3CA) (translateZ: 0px) */}
                <div
                  className={`relative w-full h-full overflow-hidden select-none shadow-xl preserve-3d transition-all duration-1000 ${
                    puzzleSealed ? 'bg-[#E1D3CA]' : 'bg-transparent'
                  }`}
                  style={{
                    borderRadius: marlonBlobRadius,
                    transform: 'translateZ(0px)',
                    boxShadow: puzzleSealed
                      ? '0 20px 40px -10px rgba(43,29,32,0.2), inset 0 2px 4px rgba(255,255,255,0.6)'
                      : 'none',
                  }}
                >
                  
                  {/* Organic Background Fill in Linen Swatch (#E1D3CA) - appears seamlessly once puzzle is sealed */}
                  <div
                    className={`absolute inset-0 bg-[#E1D3CA] transition-opacity duration-900 ${
                      puzzleSealed ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  {/* Soft Radial Vignette */}
                  <div
                    className={`absolute inset-0 bg-radial from-transparent via-transparent to-[#2B1D20]/12 pointer-events-none z-10 transition-opacity duration-700 ${
                      puzzleSealed ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  {/* 3D PUZZLE STAGE: Both the background organic shape AND the portrait pieces assemble in 3D space */}
                  <div
                    className={`absolute inset-0 preserve-3d transition-opacity duration-700 ${
                      puzzleSealed ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}
                  >
                    <div className="w-full h-full relative preserve-3d">
                      {PUZZLE_PIECES.map((piece) => {
                        const isSet = piecesAssembled;
                        return (
                          <div
                            key={piece.id}
                            className="absolute preserve-3d overflow-hidden"
                            style={{
                              width: '33.334%',
                              height: '33.334%',
                              left: `${piece.col * 33.333}%`,
                              top: `${piece.row * 33.333}%`,
                              transform: isSet
                                ? 'translate3d(0px, 0px, 20px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)'
                                : `translate3d(${piece.startX * 1.25}px, ${piece.startY * 1.25}px, ${piece.startZ}px) rotateX(${piece.rotX}deg) rotateY(${piece.rotY}deg) rotateZ(${piece.rotZ}deg) scale(0.65)`,
                              opacity: isSet ? 1 : 0,
                              filter: isSet ? 'none' : 'blur(2px)',
                              transition: `transform 1200ms cubic-bezier(0.18, 0.95, 0.28, 1.05) ${piece.delayMs}ms, opacity 900ms ease-out ${piece.delayMs}ms, filter 900ms ease-out ${piece.delayMs}ms`,
                              boxShadow: isSet ? '0 0 1px rgba(0,0,0,0.15)' : '0 20px 35px rgba(43,29,32,0.45)',
                            }}
                          >
                            {/* Shape Backing Shard in Linen (#E1D3CA) animating with the tile */}
                            <div className="absolute inset-0 bg-[#E1D3CA] -z-10" />

                            {/* Portrait portion on top of the shape tile */}
                            <img
                              src={avatarPhoto}
                              alt=""
                              className="absolute w-[300%] h-[300%] max-w-none object-cover object-[center_16%]"
                              style={{
                                left: `${-piece.col * 100}%`,
                                top: `${-piece.row * 100}%`,
                              }}
                              referrerPolicy="no-referrer"
                            />

                            {/* Piece 3D border seam edge during puzzle flight */}
                            <div className="absolute inset-0 border border-[#FAF5F1]/60 pointer-events-none" />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* UNIFIED SEAMLESS PORTRAIT (Crossfades in once puzzle is sealed) */}
                  <div
                    className={`w-full h-full relative preserve-3d transition-all duration-900 ease-out ${
                      puzzleSealed ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                    style={{
                      transform: 'translateZ(24px)',
                    }}
                  >
                    {/* Natural human framing: object-[center_16%] without excessive zoom */}
                    <img
                      src={avatarPhoto}
                      alt="Joan Saluta - Administrative Executive"
                      className="w-full h-full object-cover object-[center_16%] scale-[1.03] filter brightness-[1.01] contrast-[1.02] transition-transform duration-500 ease-out"
                      style={{
                        transform: isHovered
                          ? `translate(${mousePos.x * 8}px, ${mousePos.y * 8}px) scale(1.05)`
                          : 'translate(0px, 0px) scale(1.03)',
                      }}
                      referrerPolicy="no-referrer"
                    />

                    {/* Specular Flare Sweep across the assembled 3D surface */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none transition-transform duration-1000 ease-in-out z-20 ${
                        sheenSwept ? 'translate-x-[220%]' : '-translate-x-[220%]'
                      }`}
                    />

                    {/* Interactive Specular Glare reacting to cursor tracking */}
                    <div
                      className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-25"
                      style={{
                        background: `radial-gradient(circle 240px at ${(mousePos.x + 0.5) * 100}% ${(mousePos.y + 0.5) * 100}%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.06) 50%, transparent 100%)`,
                        opacity: isHovered ? 0.9 : 0.2,
                      }}
                    />
                  </div>

                  {/* 3D Inset Beveled Rim Highlight */}
                  <div
                    className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 z-30 ${
                      isFullySettled ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      borderRadius: marlonBlobRadius,
                      boxShadow: 'inset 0 0 0 1.5px rgba(255, 255, 255, 0.45), inset 0 -3px 8px rgba(43,29,32,0.1)',
                    }}
                  />

                </div>
              </div>

            </div>

            <div className={`transition-all duration-1000 ${puzzleSealed ? 'opacity-100' : 'opacity-0'}`}>
                {/* Wall Pinned Sticky Note ("Good Things Take Time") positioned at top-left of the profile picture */}
                <WallStickyNote className="-top-6 -left-6 sm:-top-8 sm:-left-12 scale-[0.6] sm:scale-100" />

                {/* 3D Heart Badge positioned at top-right of the profile picture */}
                <FloatingHeartBadge size={52} className="-top-6 -right-6 sm:-top-8 sm:-right-10" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
