import React from "react";

export default function BirthdayCake() {
  return (
    <div className="flex items-center justify-center">
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes flicker {
          0%, 100% { transform: scale(1) translateY(0); opacity: 0.9; }
          50% { transform: scale(1.1) translateY(-2px); opacity: 1; }
        }

        @keyframes floatHeart {
          0% { opacity: 0; transform: translateY(0) scale(0.5); }
          30% { opacity: 1; }
          100% { opacity: 0; transform: translateY(-50px) scale(1.3) rotate(15deg); }
        }

        .cake-bounce {
          animation: bounce 2s ease-in-out infinite;
          transform-origin: center;
        }

        .flame-flicker {
          animation: flicker 0.6s ease-in-out infinite;
          transform-origin: bottom;
        }

        .heart-float {
          animation: floatHeart 2.5s infinite ease-out;
        }
      `}</style>

      <svg
        viewBox="0 0 200 200"
        className="w-64 h-64"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft Background Glow */}
        <defs>
          <radialGradient id="cakeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF9E6" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFF9E6" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="120" r="70" fill="url(#cakeGrad)" />

        {/* Floating Hearts/Sparkles */}
        <text x="40" y="80" fontSize="14" className="heart-float" style={{ animationDelay: "0s" }}>💖</text>
        <text x="150" y="60" fontSize="12" className="heart-float" style={{ animationDelay: "0.8s" }}>✨</text>
        <text x="160" y="100" fontSize="14" className="heart-float" style={{ animationDelay: "1.5s" }}>🌸</text>

        <g className="cake-bounce">
          {/* Cake Stand / Plate */}
          <rect x="40" y="155" width="120" height="8" rx="4" fill="#E0E0E0" />
          <rect x="70" y="163" width="60" height="4" rx="2" fill="#D1D1D1" />

          {/* Bottom Layer - Strawberry/Pink */}
          <rect x="50" y="110" width="100" height="45" rx="10" fill="#FFC2D1" />
          
          {/* Frosting Drip Effect */}
          <path 
            d="M50 120 Q50 130 60 130 Q70 130 75 120 Q80 110 90 120 Q100 130 110 130 Q120 130 125 120 Q130 110 140 120 Q150 130 150 120 L150 110 L50 110 Z" 
            fill="#FFE5EC" 
          />

          {/* Top Layer - Vanilla/Cream */}
          <rect x="60" y="80" width="80" height="35" rx="8" fill="#FFF0F3" />
          
          {/* Sprinkles */}
          <circle cx="75" cy="95" r="2" fill="#FF85A1" />
          <circle cx="100" cy="90" r="2" fill="#B983FF" />
          <circle cx="125" cy="98" r="2" fill="#FFD166" />
          <circle cx="90" cy="105" r="2" fill="#6EE7B7" />

          {/* Candle 1 (Left) */}
          <rect x="78" y="60" width="6" height="20" rx="2" fill="#B983FF" />
          <g className="flame-flicker" style={{ transformBox: 'fill-box' }}>
            <path d="M81 45 Q85 53 81 60 Q77 53 81 45" fill="#FFD166" />
          </g>

          {/* Candle 2 (Center) */}
          <rect x="97" y="55" width="6" height="25" rx="2" fill="#FF85A1" />
          <g className="flame-flicker" style={{ transformBox: 'fill-box', animationDelay: "0.2s" }}>
            <path d="M100 35 Q104 48 100 55 Q96 48 100 35" fill="#FFD166" />
          </g>

          {/* Candle 3 (Right) */}
          <rect x="116" y="60" width="6" height="20" rx="2" fill="#6EE7B7" />
          <g className="flame-flicker" style={{ transformBox: 'fill-box', animationDelay: "0.4s" }}>
            <path d="M119 45 Q123 53 119 60 Q115 53 119 45" fill="#FFD166" />
          </g>
        </g>
      </svg>
    </div>
  );
}