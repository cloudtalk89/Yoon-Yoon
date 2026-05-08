import React from "react";

export default function CuteMusicPlayer() {
  return (
    <div className="flex items-center justify-center p-2 ">
      <style>{`
        @keyframes playerFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes buttonPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); opacity: 0.85; }
        }

        @keyframes visualizerWave {
          0%, 100% { height: 10px; }
          50% { height: 22px; }
        }

        @keyframes musicNoteFly {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(25px, -35px) scale(0.5);
            opacity: 0;
          }
        }

        .player-container {
          animation: playerFloat 5s ease-in-out infinite;
          width: 300px;
          height: 300px;
        }

        .btn-animation {
          animation: buttonPulse 2s ease-in-out infinite;
          transform-origin: center;
        }

        .wave {
          animation: visualizerWave 1.5s ease-in-out infinite;
          transform-origin: bottom;
        }

        .wave-1 { animation-delay: 0s; }
        .wave-2 { animation-delay: 0.2s; }
        .wave-3 { animation-delay: 0.4s; }
        .wave-4 { animation-delay: 0.6s; }

        .note-animation {
          animation: musicNoteFly 3s linear infinite;
        }
      `}</style>

      <svg
        viewBox="0 0 400 400"
        className="player-container"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Center whole player */}
        <g transform="translate(50,40)">
          
          {/* Shadow */}
          <ellipse
            cx="150"
            cy="270"
            rx="70"
            ry="10"
            fill="rgba(0,0,0,0.1)"
          />

          {/* Main Body */}
          <path
            d="M70,80 H230 A20,20 0 0 1 250,100 V230 A20,20 0 0 1 230,250 H70 A20,20 0 0 1 50,230 V100 A20,20 0 0 1 70,80 Z"
            fill="#FFE082"
            stroke="#FFD54F"
            strokeWidth="2"
          />

          {/* Handle */}
          <path
            d="M110,80 V60 A15,15 0 0 1 125,45 H175 A15,15 0 0 1 190,60 V80"
            fill="none"
            stroke="#FFD54F"
            strokeWidth="5"
          />

          {/* Display */}
          <rect
            x="75"
            y="100"
            width="150"
            height="70"
            rx="10"
            fill="#FFFDE7"
          />

          {/* Decorations */}
          <text x="210" y="125" fontSize="15" opacity="0.8">
            💖
          </text>

          <text x="80" y="120" fontSize="12" opacity="0.6">
            ✨
          </text>

          {/* Visualizer */}
          <rect x="90" y="140" width="10" height="10" rx="2" fill="#81D4FA" className="wave wave-1" />
          <rect x="110" y="140" width="10" height="10" rx="2" fill="#4FC3F7" className="wave wave-2" />
          <rect x="130" y="140" width="10" height="10" rx="2" fill="#29B6F6" className="wave wave-3" />
          <rect x="150" y="140" width="10" height="10" rx="2" fill="#03A9F4" className="wave wave-4" />
          <rect x="170" y="140" width="10" height="10" rx="2" fill="#039BE5" className="wave wave-4" />
          <rect x="190" y="140" width="10" height="10" rx="2" fill="#0288D1" className="wave wave-3" />
          <rect x="210" y="140" width="10" height="10" rx="2" fill="#0277BD" className="wave wave-2" />

          {/* Rewind Button */}
          <circle
            cx="100"
            cy="200"
            r="15"
            fill="#EF9A9A"
            className="btn-animation"
          />
          <path d="M95,195 L105,200 L95,205 Z" fill="#FFF" />
          <path d="M100,195 L110,200 L100,205 Z" fill="#FFF" />

          {/* Play Button */}
          <circle
            cx="150"
            cy="200"
            r="20"
            fill="#E57373"
            className="btn-animation"
          />
          <path d="M145,190 L160,200 L145,210 Z" fill="#FFF" />

          {/* Forward Button */}
          <circle
            cx="200"
            cy="200"
            r="15"
            fill="#EF9A9A"
            className="btn-animation"
          />
          <path d="M195,195 L205,200 L195,205 Z" fill="#FFF" />
          <path d="M200,195 L210,200 L200,205 Z" fill="#FFF" />

          {/* Speaker Dots Left */}
          <circle cx="70" cy="225" r="2" fill="#FFB74D" />
          <circle cx="78" cy="225" r="2" fill="#FFB74D" />
          <circle cx="86" cy="225" r="2" fill="#FFB74D" />
          <circle cx="70" cy="233" r="2" fill="#FFB74D" />
          <circle cx="78" cy="233" r="2" fill="#FFB74D" />
          <circle cx="86" cy="233" r="2" fill="#FFB74D" />

          {/* Speaker Dots Right */}
          <circle cx="214" cy="225" r="2" fill="#FFB74D" />
          <circle cx="222" cy="225" r="2" fill="#FFB74D" />
          <circle cx="230" cy="225" r="2" fill="#FFB74D" />
          <circle cx="214" cy="233" r="2" fill="#FFB74D" />
          <circle cx="222" cy="233" r="2" fill="#FFB74D" />
          <circle cx="230" cy="233" r="2" fill="#FFB74D" />

          {/* Volume Knob */}
          <circle
            cx="150"
            cy="235"
            r="8"
            fill="#F48FB1"
            stroke="#F06292"
            strokeWidth="1"
          />
          <line
            x1="150"
            y1="231"
            x2="150"
            y2="239"
            stroke="#FFF"
            strokeWidth="1.5"
          />

          {/* Floating Music Notes */}
          <text
            x="260"
            y="80"
            fontSize="20"
            opacity="0"
            className="note-animation"
            style={{ animationDelay: "0s" }}
          >
            🎵
          </text>

          <text
            x="270"
            y="100"
            fontSize="18"
            opacity="0"
            className="note-animation"
            style={{ animationDelay: "1s" }}
          >
            🎶
          </text>

          <text
            x="250"
            y="120"
            fontSize="20"
            opacity="0"
            className="note-animation"
            style={{ animationDelay: "2s" }}
          >
            ♪
          </text>
        </g>
      </svg>
    </div>
  );
}