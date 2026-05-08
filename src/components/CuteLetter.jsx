import React from "react";

export default function CuteLetter() {
  return (
    <div className="flex items-center justify-center p-4">
      <style>{`
        @keyframes letterFloat {
          0%, 100% { transform: translateY(0) rotate(-1deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }

        @keyframes heartPulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.15); opacity: 1; }
        }

        @keyframes starTwinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 0.9; transform: scale(1.2); }
        }

        @keyframes flapWiggle {
          0%, 100% { transform: rotateX(0deg); }
          50% { transform: rotateX(-5deg); }
        }

        .letter-container {
          animation: letterFloat 3.5s ease-in-out infinite;
          width: 250px;
          height: 250px;
          transform-origin: center;
        }

        .pulsing-heart {
          animation: heartPulse 2s ease-in-out infinite;
          transform-origin: center;
        }

        .twinkling-star {
          animation: starTwinkle 3s ease-in-out infinite;
          transform-origin: center;
        }

        .wiggle-flap {
          animation: flapWiggle 4s ease-in-out infinite;
          transform-origin: top;
        }
      `}</style>

      <svg
        viewBox="0 0 200 200"
        className="letter-container"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft Drop Shadow for Depth */}
        <ellipse cx="100" cy="185" rx="60" ry="10" fill="rgba(0,0,0,0.08)" />

        <g className="envelope-main">
          {/* Main Envelope Body - Soft Rounded Pink Rectangle */}
          <rect x="35" y="70" width="130" height="90" rx="15" fill="#FFC2D1" stroke="#FF9AA2" strokeWidth="1"/>

          {/* Decorative Dotted Border around the main body */}
          <rect x="40" y="75" width="120" height="80" rx="10" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="5 3" opacity="0.6"/>

          {/* Envelope Top Flap (the triangular part) */}
          <path d="M35 70 L100 120 L165 70 Z" fill="#FFE3E9" stroke="#FF9AA2" strokeWidth="1" className="wiggle-flap"/>
          {/* Small internal line for the flap edge detail */}
          <path d="M100 120 L165 70" fill="none" stroke="#FF9AA2" strokeWidth="1" opacity="0.4"/>

          {/* Cute Address Lines (placeholder) */}
          <rect x="50" y="130" width="60" height="3" rx="1.5" fill="#FFFFFF" opacity="0.7"/>
          <rect x="50" y="138" width="40" height="3" rx="1.5" fill="#FFFFFF" opacity="0.7"/>

          {/* Central Pulsing Heart 'Stamp' */}
          <g className="pulsing-heart">
            <path d="M100,90 C105,80 120,80 120,100 C120,115 100,125 100,125 C100,125 80,115 80,100 C80,80 95,80 100,90 Z" fill="#FF748C" />
            <ellipse cx="94" cy="94" rx="4" ry="6" fill="white" fillOpacity="0.3" transform="rotate(-30 94 94)"/> {/* Highlight */}
          </g>

          {/* Decorative Sparkles & Elements */}
          <g className="twinkling-star" style={{ animationDelay: '0s' }}>
            <text x="160" y="85" fontSize="18" fill="#FFDF7F">✨</text>
          </g>
          <g className="twinkling-star" style={{ animationDelay: '1s' }}>
            <circle cx="45" cy="90" r="3" fill="#A7F3D0" />
          </g>
          <g className="twinkling-star" style={{ animationDelay: '1.5s' }}>
            <circle cx="150" cy="145" r="2.5" fill="#BAE6FD" />
          </g>
          
          {/* A tiny written note decoration */}
          <text x="120" y="153" fontSize="10" fill="#FF748C" fontFamily="cursive" opacity="0.8">love</text>
        </g>
      </svg>
    </div>
  );
}