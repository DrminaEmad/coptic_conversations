"use client";

import { memo } from "react";
import { TranscriptSegment } from "../lib/data";

interface RowProps {
  segment: TranscriptSegment;
  isActive: boolean;
  onSeek: (startTime: number) => void; // Added click action handler type
}

const TranscriptSegmentRow = memo(({ segment, isActive, onSeek }: RowProps) => {
  return (
    <div 
      onClick={() => onSeek(segment.startTime)} // Triggers timeline jump on click
      className={`p-4 rounded-xl transition-all duration-300 border cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-900/40 select-none ${
        isActive 
          ? "bg-blue-50/50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900 shadow-sm scale-[1.01] hover:bg-blue-50/50 dark:hover:bg-blue-950/20" 
          : "bg-transparent border-transparent opacity-60 hover:opacity-100"
      }`}
    >
      {/* Coptic Main Sentence Layer */}
      <div className="flex flex-wrap gap-x-3 gap-y-1 mb-2">
        {segment.words.map((word, index) => (
          <span 
            key={index} 
            className={`text-2xl font-coptic tracking-wide ${
              isActive ? "text-[#0071FF] font-medium" : "text-zinc-800 dark:text-zinc-200"
            }`}
          >
            {word.coptic}
          </span>
        ))}
      </div>

      {/* Auxiliary Sub-Translations (English & Arabic) */}
      <div className="flex flex-col gap-0.5 text-sm font-sans text-zinc-500 dark:text-zinc-400">
        <p>🇬🇧 {segment.words.map(w => w.english).join(" ")}</p>
        <p className="text-right font-arabic">🇪🇬 {segment.words.map(w => w.arabic).join(" ")}</p>
      </div>
    </div>
  );
});

TranscriptSegmentRow.displayName = "TranscriptSegmentRow";
export default TranscriptSegmentRow;









// "use client";

// import { useEffect, useState, RefObject } from "react";
// import { TranscriptSegment } from "../lib/data";

// interface RowProps {
//   segment: TranscriptSegment;
//   audioRef: RefObject<HTMLAudioElement | null>;
// }

// export default function TranscriptSegmentRow({ segment, audioRef }: RowProps) {
//   const [isActive, setIsActive] = useState(false);

//   useEffect(() => {
//     const audioElement = audioRef.current;
//     if (!audioElement) return;

//     // High-frequency listener function assigned to this specific row block
//     const checkTime = () => {
//       const time = audioElement.currentTime;
//       const match = time >= segment.startTime && time <= segment.endTime;
      
//       // State changes ONLY when moving into or out of this paragraph's timeline
//       setIsActive((prev) => (prev !== match ? match : prev));
//     };

//     audioElement.addEventListener("timeupdate", checkTime);
//     return () => audioElement.removeEventListener("timeupdate", checkTime);
//   }, [audioRef, segment.startTime, segment.endTime]);

//   return (
//     <div 
//       className={`p-4 rounded-xl transition-all duration-300 border ${
//         isActive 
//           ? "bg-blue-50/50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900 shadow-sm scale-[1.01]" 
//           : "bg-transparent border-transparent opacity-60"
//       }`}
//     >
//       {/* Coptic Main Sentence Layer */}
//       <div className="flex flex-wrap gap-x-3 gap-y-1 mb-2">
//         {segment.words.map((word, index) => (
//           <span 
//             key={index} 
//             className={`text-2xl font-coptic tracking-wide ${
//               isActive ? "text-[#0071FF] font-medium" : "text-zinc-800 dark:text-zinc-200"
//             }`}
//           >
//             {word.coptic}
//           </span>
//         ))}
//       </div>

//       {/* Auxiliary Sub-Translations (English & Arabic) */}
//       <div className="flex flex-col gap-0.5 text-sm font-sans text-zinc-500 dark:text-zinc-400">
//         <p>🇬🇧 {segment.words.map(w => w.english).join(" ")}</p>
//         <p className="text-right font-arabic">🇪🇬 {segment.words.map(w => w.arabic).join(" ")}</p>
//       </div>
//     </div>
//   );
// }
