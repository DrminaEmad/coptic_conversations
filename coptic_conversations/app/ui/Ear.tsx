"use client";

interface EarSvgProps {
  width?: string | number;
  height?: string | number;
  className?: string;
}

export default function EarSvg({ 
  width = 100, 
  height = 100, 
  className = "text-zinc-700 dark:text-zinc-300" 
}: EarSvgProps) {
  return (
    <svg
      xmlns="http://w3.org"
      viewBox="0 0 100 100"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Outer helix and lobe of the ear */}
      <path d="M 45,15 C 75,10 90,35 85,55 C 80,72 65,85 50,85 C 40,85 35,78 42,70" />
      
      {/* Inner antihelix cartilage fold */}
      <path d="M 52,28 C 68,26 74,42 72,54 C 70,64 60,72 52,72" />
      
      {/* Concha and acoustic meatus (inner ear center detail) */}
      <path d="M 46,48 C 54,46 58,54 50,60" />
      
      {/* Tragus (the small bump in front of the ear canal) */}
      <path d="M 36,52 C 34,56 40,58 44,55" />
    </svg>
  );
}
