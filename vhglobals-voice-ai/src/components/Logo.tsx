import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  textColor = 'text-[#0f172a]'
}) => {
  const sizeMap = {
    sm: { icon: 28, text: 'text-base font-extrabold tracking-tight' },
    md: { icon: 36, text: 'text-xl font-black tracking-tight' },
    lg: { icon: 46, text: 'text-2xl font-black tracking-tight' },
    xl: { icon: 60, text: 'text-3xl font-black tracking-tight' }
  };

  const { icon, text } = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision SVG rendering matching the uploaded VHGLOBALS 3D arrow monogram */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-sm transition-transform duration-300 hover:scale-105"
      >
        <defs>
          {/* Deep Navy/Blue for the left V stroke */}
          <linearGradient id="vhVLeft" x1="20" y1="40" x2="65" y2="125" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#123d6a" />
            <stop offset="50%" stopColor="#1b6099" />
            <stop offset="100%" stopColor="#2596be" />
          </linearGradient>

          {/* Cyan / Sky Blue for the dynamic rising arrow swoosh */}
          <linearGradient id="vhSwoosh" x1="45" y1="120" x2="135" y2="35" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1b6099" />
            <stop offset="40%" stopColor="#2596be" />
            <stop offset="85%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>

          {/* Solid Royal Cyan for the right H pillar & crossbar */}
          <linearGradient id="vhHRight" x1="90" y1="50" x2="130" y2="125" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e7da2" />
            <stop offset="100%" stopColor="#2596be" />
          </linearGradient>

          <filter id="vhDropShadow" x="0" y="0" width="160" height="160" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#2596be" floodOpacity="0.25" />
          </filter>
        </defs>

        <g filter="url(#vhDropShadow)">
          {/* Left stroke of V */}
          <path
            d="M 28 50 L 52 50 L 70 115 L 50 115 Z"
            fill="url(#vhVLeft)"
          />

          {/* Right vertical leg of H */}
          <path
            d="M 98 75 L 126 75 L 126 125 L 98 125 Z"
            fill="url(#vhHRight)"
          />

          {/* Horizontal crossbar of H connecting to right leg */}
          <path
            d="M 86 94 L 115 94 L 115 110 L 86 110 Z"
            fill="#1e7da2"
            opacity="0.9"
          />

          {/* The dynamic swoosh curving through V and rising over H with arrow */}
          <path
            d="M 50 115 
               C 65 110, 75 88, 92 78 
               C 105 70, 118 62, 126 44 
               L 115 42 
               L 142 34 
               L 138 62 
               L 128 55 
               C 120 72, 102 85, 84 94 
               C 70 102, 60 118, 50 115 Z"
            fill="url(#vhSwoosh)"
          />

          {/* Crisp highlight line on the swoosh */}
          <path
            d="M 54 113 C 68 106, 78 86, 95 76 C 108 68, 120 58, 126 44"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.65"
          />
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center tracking-tight">
            <span className={`${text} ${textColor} font-black`}>VH</span>
            <span className={`${text} text-[#2596be] font-black`}>GLOBALS</span>
          </div>
        </div>
      )}
    </div>
  );
};
