import React from "react";

export default function CuteAnimatedGift() {
  return (
    <div className="flex items-center justify-center p-4">
      {/* CSS Animations */}
      <style>{`
        @keyframes containerFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes lidWiggle {
          0%, 100% { transform: rotate(0deg) translate(0, 0); }
          10% { transform: rotate(-2deg) translate(-1px, -1px); }
          20% { transform: rotate(2deg) translate(1px, -1px); }
          30% { transform: rotate(-2deg) translate(-1px, 0); }
          40% { transform: rotate(0deg) translate(0, 0); }
        }

        @keyframes heartPulse {
          0%, 100% { transform: scale(1) translate(0, 0); opacity: 1; }
          50% { transform: scale(1.4) translate(-2px, -2px); opacity: 0; }
        }

        @keyframes sparkTwinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1); }
        }

        .gift-container {
          animation: containerFloat 3.5s ease-in-out infinite;
          transform-origin: center bottom;
        }

        .lid-group {
          animation: lidWiggle 5s ease-in-out infinite;
          transform-origin: center center;
        }

        .float-heart {
          animation: heartPulse 3s ease-in-out infinite;
          fill: #FF7EB9;
        }

        .gift-sparkle {
          animation: sparkTwinkle 4s ease-in-out infinite;
          fill: #FFD700; /* Gold Sparkle */
        }
      `}</style>

      {/* SVG Asset */}
      <svg
        viewBox="0 0 200 200"
        className="w-64 h-64 gift-container"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft Drop Shadow */}
        <ellipse
          cx="100"
          cy="185"
          rx="55"
          ry="7"
          fill="rgba(0,0,0,0.1)"
        />

        {/* Main Box Body */}
        <rect
          x="50"
          y="85"
          width="100"
          height="85"
          rx="12"
          fill="#FFB7D5" /* Pastel Pink */
        />

        {/* Inner Box Shadow Detail */}
        <path
          d="M 50 110 Q 100 125 150 110"
          stroke="rgba(0,0,0,0.05)"
          strokeWidth="3"
          fill="none"
        />

        {/* Main Vertical Ribbon (Body) */}
        <rect
          x="90"
          y="85"
          width="20"
          height="85"
          fill="#54CFFF" /* Sky Blue Ribbon */
        />

        {/* Lid Group (Includes Bow & Sparkle) */}
        <g className="lid-group">
          {/* Lid Rectangle */}
          <rect
            x="45"
            y="65"
            width="110"
            height="25"
            rx="10"
            fill="#FF8DC3" /* Slightly Darker Pink Lid */
          />

          {/* Lid Ribbon Detail */}
          <rect
            x="90"
            y="65"
            width="20"
            height="25"
            fill="#54CFFF" /* Sky Blue */
          />

          {/* The Bow Loops */}
          <path
            d="M 100 65 Q 80 30 65 50 Q 85 60 100 65 M 100 65 Q 120 30 135 50 Q 115 60 100 65"
            fill="#54CFFF"
            stroke="#1C92D2"
            strokeWidth="1"
          />
          {/* Bow Center Knot */}
          <circle cx="100" cy="65" r="7" fill="#54CFFF" stroke="#1C92D2" />

          {/* Floating Sparkle/Shine on Lid */}
          <circle
            cx="135"
            cy="55"
            r="4"
            className="gift-sparkle"
            style={{ animationDelay: '1.5s' }}
          />
        </g>

        {/* Decorative Floating Hearts */}
        <text x="160" y="100" fontSize="16" opacity="0.8">💝</text>
        
        {/* Animated Floating Hearts */}
        <path d="M 60 60 Q 55 50 60 45 Q 65 50 60 60" className="float-heart" />
        <path d="M 160 140 Q 155 130 160 125 Q 165 130 160 140" className="float-heart" style={{ animationDelay: '1s' }}/>
        
        {/* Cute Face (Below Lid) */}
        <circle cx="85" cy="120" r="3.5" fill="#4B5563" /> {/* Left Eye */}
        <circle cx="115" cy="120" r="3.5" fill="#4B5563" /> {/* Right Eye */}
        
        {/* Winking Left Eye */}
        <circle cx="85" cy="120" r="2.5" fill="#FFB7D5" />
        
        {/* Blushing Cheeks */}
        <circle cx="78" cy="128" r="6" fill="#FFA3C9" fillOpacity="0.6"/>
        <circle cx="122" cy="128" r="6" fill="#FFA3C9" fillOpacity="0.6"/>

        {/* Cute Smile */}
        <path
          d="M 92 135 Q 100 142 108 135"
          stroke="#4B5563"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />

      </svg>
    </div>
  );
}