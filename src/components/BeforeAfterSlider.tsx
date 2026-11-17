import React, { useState } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  caption: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel,
  afterLabel,
  caption,
}) => {
  const [position, setPosition] = useState(52);

  return (
    <div className="space-y-3">
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-[#0B1D36]/10 bg-slate-100 select-none">
        {/* After Image (Full Background) */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Before Image (Clipped via CSS clipPath so zero layout shift) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 bg-[#0B1D36]/85 text-white text-xs font-medium px-2.5 py-1 rounded">
          {beforeLabel}
        </div>
        <div className="absolute top-3 right-3 bg-[#C69C4D] text-[#0B1D36] text-xs font-semibold px-2.5 py-1 rounded">
          {afterLabel}
        </div>

        {/* Divider line + handle */}
        <div
          className="absolute inset-y-0 w-0.5 bg-white shadow pointer-events-none"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white text-[#0B1D36] shadow-lg border border-[#0B1D36]/15 flex items-center justify-center">
            <MoveHorizontal className="w-4 h-4" />
          </div>
        </div>

        {/* Accessible Range Overlay */}
        <input
          type="range"
          min={5}
          max={95}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label="Comparer avant et après"
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        />
      </div>
      <p className="text-xs text-slate-600">{caption}</p>
    </div>
  );
};
