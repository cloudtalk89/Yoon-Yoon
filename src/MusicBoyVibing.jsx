import React from "react";

export default function MusicBoyVibing() {
  return (
    <div className="flex items-center justify-center">
      <style>{`
        @keyframes vibe {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        @keyframes headBob {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-3px) rotate(-1deg); }
        }

        @keyframes blink {
          0%, 92%, 100% { transform: scaleY(1); }
          96% { transform: scaleY(0.1); }
        }

        @keyframes float {
          0% { opacity: 0; transform: translateY(10px); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateY(-30px); }
        }

        .vibe {
          animation: vibe 0.7s ease-in-out infinite;
          transform-origin: center;
        }

        .head {
          animation: headBob 0.7s ease-in-out infinite;
          transform-origin: center;
        }

        .blink {
          animation: blink 4s infinite;
          transform-origin: center;
        }

        .float {
          animation: float 2s infinite ease-out;
        }
      `}</style>

      <svg viewBox="0 0 200 200" className="w-64 h-64">

        {/* soft glow background */}
        <defs>
          <radialGradient id="bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFEFF7" />
            <stop offset="100%" stopColor="#FFEFF7" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="100" cy="110" r="85" fill="url(#bg)" />

        {/* music notes */}
        <text x="150" y="75" fontSize="14" fill="#A855F7" className="float">
          ♪
        </text>
        <text x="45" y="90" fontSize="14" fill="#A855F7" className="float" style={{ animationDelay: "1s" }}>
          ♫
        </text>

        {/* body */}
        <g className="vibe">

          {/* hoodie */}
          <path
            d="M65 155 Q100 135 135 155 L145 200 L55 200 Z"
            fill="#60A5FA"
          />

          {/* head */}
          <g className="head">

            {/* hair (soft messy kawaii boy cut) */}
            <path
              d="M60 95 Q70 55 100 55 Q130 55 140 95 Q125 78 100 80 Q75 78 60 95 Z"
              fill="#3A2E2A"
            />

            {/* face */}
            <circle cx="100" cy="110" r="34" fill="#F6C7A6" />

            {/* eyes (kawaii but realistic size) */}
            <g className="blink">
              <ellipse cx="88" cy="108" rx="4.5" ry="6" fill="#222" />
              <ellipse cx="112" cy="108" rx="4.5" ry="6" fill="#222" />

              {/* eye shine */}
              <circle cx="87" cy="106" r="1.2" fill="white" />
              <circle cx="111" cy="106" r="1.2" fill="white" />
            </g>

            {/* cheeks (kawaii blush) */}
            <ellipse cx="82" cy="118" rx="5" ry="3" fill="#FCA5A5" opacity="0.6" />
            <ellipse cx="118" cy="118" rx="5" ry="3" fill="#FCA5A5" opacity="0.6" />

            {/* mouth (soft smile) */}
            <path
              d="M92 122 Q100 126 108 122"
              fill="none"
              stroke="#444"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </g>

          {/* headphones */}
          <path
            d="M60 105 Q100 35 140 105"
            fill="none"
            stroke="#FB7185"
            strokeWidth="6"
            strokeLinecap="round"
          />

          <g>
            <rect x="52" y="102" width="14" height="30" rx="7" fill="#FB7185" />
            <rect x="134" y="102" width="14" height="30" rx="7" fill="#FB7185" />
          </g>
        </g>

        {/* caption */}
        <text
          x="100"
          y="185"
          textAnchor="middle"
          fontSize="12"
          fill="#666"
        >
          kawaii boy vibing 🎧
        </text>
      </svg>
    </div>
  );
}