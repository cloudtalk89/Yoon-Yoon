import React from "react";

export default function MusicCharacter() {
  return (
    <div className="flex items-center justify-center">
      <style>{`
        @keyframes vibe {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes blink {
          0%, 90%, 100% { opacity: 1; }
          95% { opacity: 0; }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        @keyframes floatUp {
          0% { opacity: 0; transform: translateY(10px) scale(0.5); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateY(-40px) scale(1.2); }
        }

        .vibe {
          animation: vibe 0.8s ease-in-out infinite;
          transform-origin: center;
        }

        .blink {
          animation: blink 4s infinite;
        }

        .pulse {
          animation: pulse 0.8s ease-in-out infinite;
          transform-origin: center;
        }

        .float {
          animation: floatUp 2s infinite ease-out;
        }
      `}</style>

      <svg
        viewBox="0 0 200 200"
        className="w-64 h-64"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* background glow */}
        <defs>
          <radialGradient id="grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF5F7" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFF5F7" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="100" cy="110" r="80" fill="url(#grad)" />

        {/* floating music notes */}
        <text
          x="160"
          y="80"
          fontSize="16"
          fill="#B983FF"
          className="float"
          style={{ animationDelay: "0s" }}
        >
          ♪
        </text>

        <text
          x="30"
          y="90"
          fontSize="14"
          fill="#B983FF"
          className="float"
          style={{ animationDelay: "1s" }}
        >
          ♫
        </text>

        {/* character */}
        <g className="vibe">
          {/* hair */}
          <path
            d="M50 110 Q40 60 100 40 Q160 60 150 110 L155 135 Q100 125 45 135 Z"
            fill="#4A3B33"
          />

          {/* face */}
          <path
            d="M60 100 Q60 150 100 150 Q140 150 140 100 Q140 55 100 55 Q60 55 60 100"
            fill="#FFE0D5"
          />

          {/* eyes */}
          <g className="blink">
            <circle cx="82" cy="105" r="5" fill="#333" />
            <circle cx="84" cy="103" r="1.5" fill="white" />
            <circle cx="118" cy="105" r="5" fill="#333" />
            <circle cx="120" cy="103" r="1.5" fill="white" />
          </g>

          {/* blush */}
          <ellipse cx="75" cy="122" rx="7" ry="3.5" fill="#FFADAD" opacity="0.5" />
          <ellipse cx="125" cy="122" rx="7" ry="3.5" fill="#FFADAD" opacity="0.5" />

          {/* mouth */}
          <path
            d="M97 130 Q100 133 103 130"
            fill="none"
            stroke="#555"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* hair highlight */}
          <path
            d="M60 85 Q75 65 100 70 Q125 65 140 85 L145 105 Q125 90 100 95 Q75 90 55 105 Z"
            fill="#5C4B40"
          />

          {/* headphones band */}
          <path
            d="M55 95 Q100 35 145 95"
            fill="none"
            stroke="#FF85A1"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* earcups */}
          <g className="pulse">
            <rect x="48" y="92" width="14" height="32" rx="7" fill="#FF85A1" />
            <rect x="138" y="92" width="14" height="32" rx="7" fill="#FF85A1" />

            <rect
              x="52"
              y="98"
              width="3"
              height="10"
              rx="1.5"
              fill="white"
              opacity="0.3"
            />
            <rect
              x="142"
              y="98"
              width="3"
              height="10"
              rx="1.5"
              fill="white"
              opacity="0.3"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}