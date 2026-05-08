import React from "react";

export default function TransparentPhotoAlbum() {
  return (
    /* Removed bg-pink-50 to make the container transparent */
    <div className="flex items-center justify-center p-8">
      <style>{`
        @keyframes shuffle {
          0%, 100% { transform: rotate(-3deg) translateY(0); }
          50% { transform: rotate(3deg) translateY(-10px); }
        }

        @keyframes photoSlide {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-5px); }
        }

        @keyframes heartPop {
          0% { transform: scale(0) translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: scale(1.2) translateY(-30px); opacity: 0; }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .album-frame {
          animation: shuffle 3s ease-in-out infinite;
          transform-origin: center;
        }

        .inner-photo {
          animation: photoSlide 4s ease-in-out infinite;
        }

        .floating-heart {
          animation: heartPop 2s infinite ease-out;
        }

        .sparkle {
          animation: sparkle 1.5s infinite ease-in-out;
        }
      `}</style>

      <svg
        viewBox="0 0 200 200"
        className="w-64 h-64"
        xmlns="http://www.w3.org/2000/svg"
        fill="none" 
      >
        {/* Decorative Floating Elements */}
        <text x="30" y="50" fontSize="16" className="floating-heart" style={{ animationDelay: '0s' }}>❤️</text>
        <text x="160" y="60" fontSize="12" className="floating-heart" style={{ animationDelay: '0.5s' }}>✨</text>
        <text x="170" y="140" fontSize="14" className="floating-heart" style={{ animationDelay: '1.2s' }}>💖</text>

        {/* The "Back" Photo Card */}
        <rect 
          x="55" y="45" 
          width="90" height="110" 
          rx="4" 
          fill="#F3F4F6" 
          transform="rotate(-6 100 100)" 
          stroke="#E5E7EB"
          strokeWidth="0.5"
        />
        
        {/* The Main Photo Frame */}
        <g className="album-frame">
          {/* Polaroid Base */}
          <rect 
            x="50" y="40" 
            width="100" height="120" 
            rx="6" 
            fill="white" 
            filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))" 
          />
          
          {/* Photo Area with Clipping */}
          <defs>
            <clipPath id="photoClipTransparent">
              <rect x="58" y="48" width="84" height="84" rx="2" />
            </clipPath>
          </defs>
          
          <g clipPath="url(#photoClipTransparent)">
            <rect x="58" y="48" width="84" height="84" fill="#E0F2FE" />
            
            <g className="inner-photo">
              {/* Sun */}
              <circle cx="120" cy="65" r="8" fill="#FDE047" className="sparkle" />
              {/* Hills */}
              <path d="M50 132 Q80 80 110 132 T170 132" fill="#86EFAC" />
              <path d="M30 132 Q70 100 100 132 T150 132" fill="#4ADE80" opacity="0.7" />
              {/* Mini Tree */}
              <rect x="75" y="115" width="4" height="8" fill="#92400E" />
              <circle cx="77" cy="110" r="7" fill="#22C55E" />
            </g>
          </g>

          {/* Album UI Details */}
          <rect x="70" y="142" width="40" height="4" rx="2" fill="#F3F4F6" />
          <circle cx="130" cy="144" r="5" fill="#FF85A1" className="sparkle" />
        </g>

        {/* Corner Sparkle */}
        <path d="M150 40 L152 35 L157 33 L152 31 L150 26 L148 31 L143 33 L148 35 Z" fill="#FFD700" className="sparkle" />
      </svg>
    </div>
  );
}