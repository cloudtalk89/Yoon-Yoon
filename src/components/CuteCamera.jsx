import React from "react";

export default function CuteCamera() {
  return (
    <div className="flex items-center justify-center p-4">
      <style>{`
        @keyframes cameraFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }

        @keyframes shutterTap {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }

        @keyframes lensMove {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(2px, -2px); }
          66% { transform: translate(-2px, 1px); }
        }

        @keyframes flashPulse {
          0%, 90% { opacity: 0; transform: scale(1); }
          92% { opacity: 1; transform: scale(1.2); }
          95% { opacity: 0; transform: scale(1); }
        }

        .camera-container {
          animation: cameraFloat 4s ease-in-out infinite;
          width: 250px;
          height: 250px;
        }

        .shutter-action {
          animation: shutterTap 2s ease-in-out infinite;
        }

        .inner-lens {
          animation: lensMove 5s ease-in-out infinite;
        }

        .flash-glow {
          animation: flashPulse 6s infinite;
          fill: #FFFFFF;
        }
      `}</style>

      <svg
        viewBox="0 0 200 200"
        className="camera-container"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft Drop Shadow */}
        <ellipse cx="100" cy="180" rx="50" ry="8" fill="rgba(0,0,0,0.1)" />

        <g className="camera-main">
          {/* Shutter Button */}
          <rect x="130" y="55" width="20" height="10" rx="4" fill="#FF85A1" className="shutter-action" />
          
          {/* Main Body - Rounded "Bread" Shape */}
          <rect x="45" y="65" width="110" height="95" rx="20" fill="#B9F3E4" />
          
          {/* Viewfinder Accent */}
          <rect x="55" y="75" width="25" height="18" rx="5" fill="#98D8C8" />
          <rect x="60" y="79" width="15" height="10" rx="2" fill="#E0F7F1" />

          {/* Flash Unit */}
          <rect x="115" y="75" width="25" height="15" rx="4" fill="#6EE7B7" />
          <circle cx="127.5" cy="82.5" r="5" className="flash-glow" />

          {/* Lens Assembly */}
          <circle cx="100" cy="115" r="35" fill="#FFFFFF" />
          <circle cx="100" cy="115" r="28" fill="#E2E8F0" />
          
          {/* Dark Glass Lens */}
          <g className="inner-lens">
            <circle cx="100" cy="115" r="22" fill="#2D3748" />
            {/* Glossy Highlights */}
            <circle cx="108" cy="107" r="6" fill="white" fillOpacity="0.2" />
            <circle cx="92" cy="122" r="3" fill="white" fillOpacity="0.1" />
          </g>

          {/* Small Decorative Hearts */}
          <text x="145" y="145" fontSize="12" opacity="0.8">💖</text>
          <text x="45" y="100" fontSize="10" opacity="0.6">✨</text>
        </g>
      </svg>
    </div>
  );
}