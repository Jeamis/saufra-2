import React, { useState } from 'react';
import { Sun, CloudRain, Wind } from 'lucide-react';

type LouverMode = 'soleil' | 'ventilation' | 'pluie';

const MODES: Record<
  LouverMode,
  { label: string; angle: number; description: string; lightOpacity: number }
> = {
  soleil: {
    label: 'Hiver / Lumière (110°)',
    angle: 62,
    description: 'Lames largement ouvertes pour laisser entrer la chaleur et la clarté dans le salon.',
    lightOpacity: 0.15,
  },
  ventilation: {
    label: 'Été bioclimatique (45°)',
    angle: 28,
    description: 'Brise rafraîchissante par convection naturelle tout en bloquant le soleil direct.',
    lightOpacity: 0.45,
  },
  pluie: {
    label: 'Fermeture étanche (0°)',
    angle: 0,
    description: 'Toiture hermétique protégeant le mobilier avec évacuation par les poteaux.',
    lightOpacity: 0.78,
  },
};

export const HeroPergolaLouverVisual: React.FC = () => {
  const [mode, setMode] = useState<LouverMode>('ventilation');
  const active = MODES[mode];

  return (
    <div className="bg-white rounded-2xl border border-[#0B1D36]/12 shadow-sm overflow-hidden">
      <div className="relative h-44 bg-gradient-to-b from-[#0B1D36] via-[#0D3456] to-[#174670] p-5 flex flex-col justify-between overflow-hidden">
        {/* Architectural pergola beam + animated GPU louvers */}
        <div className="flex items-center justify-between text-xs text-white/80 z-10">
          <span className="font-medium text-[#C69C4D]">Simulation lames orientables</span>
          <span className="tabular-nums">{active.label}</span>
        </div>

        {/* Louvers row */}
        <div className="relative z-10 my-auto py-3 border-y-2 border-[#C69C4D]/60 grid grid-cols-9 gap-2 items-center">
          {Array.from({ length: 9 }).map((_, idx) => (
            <div
              key={idx}
              className="h-3 bg-white/90 rounded-sm shadow-sm transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(240px) rotateX(${active.angle}deg)`,
              }}
            />
          ))}
        </div>

        {/* Light / shade intensity bar */}
        <div
          className="absolute inset-0 bg-[#0B1D36] pointer-events-none transition-opacity duration-300"
          style={{ opacity: active.lightOpacity * 0.45 }}
        />

        <p className="text-xs text-white/85 z-10 leading-snug">{active.description}</p>
      </div>

      <div className="p-3 bg-[#F8F9FB] grid grid-cols-3 gap-2">
        <button
          type="button"
          onClick={() => setMode('soleil')}
          className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
            mode === 'soleil'
              ? 'bg-[#0B1D36] text-white'
              : 'bg-white text-[#0B1D36]/80 border border-[#0B1D36]/10 hover:text-[#0B1D36]'
          }`}
        >
          <Sun className="w-3.5 h-3.5 text-[#C69C4D]" />
          <span>Lumière</span>
        </button>
        <button
          type="button"
          onClick={() => setMode('ventilation')}
          className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
            mode === 'ventilation'
              ? 'bg-[#0B1D36] text-white'
              : 'bg-white text-[#0B1D36]/80 border border-[#0B1D36]/10 hover:text-[#0B1D36]'
          }`}
        >
          <Wind className="w-3.5 h-3.5 text-[#C69C4D]" />
          <span>Brise</span>
        </button>
        <button
          type="button"
          onClick={() => setMode('pluie')}
          className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
            mode === 'pluie'
              ? 'bg-[#0B1D36] text-white'
              : 'bg-white text-[#0B1D36]/80 border border-[#0B1D36]/10 hover:text-[#0B1D36]'
          }`}
        >
          <CloudRain className="w-3.5 h-3.5 text-[#C69C4D]" />
          <span>Étanche</span>
        </button>
      </div>
    </div>
  );
};
