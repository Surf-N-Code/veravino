interface VeraVinoLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const VeraVinoLogo = ({ width = 140, height = 32, className = "" }: VeraVinoLogoProps) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 180 40" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Icon background */}
      <circle cx="20" cy="20" r="18" fill="rgb(30,58,43)"/>
      
      {/* Wine glass */}
      <path d="M13 12 L13 18 Q13 21 16 21 L24 21 Q27 21 27 18 L27 12 Z" fill="white" opacity="0.9"/>
      <rect x="19" y="21" width="2" height="5" fill="white" opacity="0.9"/>
      <rect x="17" y="26" width="6" height="1.5" fill="white" opacity="0.9"/>
      
      {/* Grapes */}
      <circle cx="24" cy="14" r="1.5" fill="white" opacity="0.9"/>
      <circle cx="22" cy="16" r="1.5" fill="white" opacity="0.9"/>
      <circle cx="26" cy="16" r="1.5" fill="white" opacity="0.9"/>
      <circle cx="24" cy="18" r="1.5" fill="white" opacity="0.9"/>
      
      {/* AI elements */}
      <circle cx="30" cy="22" r="1" fill="rgb(207,220,255)" opacity="0.8"/>
      <circle cx="32" cy="24" r="0.8" fill="rgb(207,220,255)" opacity="0.8"/>
      <circle cx="28" cy="24" r="0.8" fill="rgb(207,220,255)" opacity="0.8"/>
      <line x1="30" y1="22" x2="32" y2="24" stroke="rgb(207,220,255)" strokeWidth="0.8" opacity="0.6"/>
      <line x1="30" y1="22" x2="28" y2="24" stroke="rgb(207,220,255)" strokeWidth="0.8" opacity="0.6"/>
      
      {/* Text */}
      <text x="45" y="18" fontFamily="Inter, system-ui, -apple-system, sans-serif" fontSize="16" fontWeight="700" fill="rgb(30,58,43)">
        Vera Vino
      </text>
      <text x="45" y="30" fontFamily="Inter, system-ui, -apple-system, sans-serif" fontSize="8" fontWeight="500" fill="rgb(30,58,43)" opacity="0.7">
        AI-Weinberater
      </text>
    </svg>
  );
};

export default VeraVinoLogo;