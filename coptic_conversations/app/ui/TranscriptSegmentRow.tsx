"use client";

import { memo } from "react";
import { TranscriptSegment } from "../lib/data";
import SingleWord from './word';
import { englishSentence, arabicSentence } from "../lib/helper";

interface RowProps {
  segment: TranscriptSegment;
  isActive: boolean;
  onSeek: (startTime: number) => void; // Added click action handler type
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  getCurrentAudioTime: () => number;
  translation: "english" | "arabic" | "none"
}

const TranscriptSegmentRow = memo(({  
  segment,   
  isActive, 
  onSeek,   
  isPlaying,
  setIsPlaying,
  getCurrentAudioTime, translation  }: RowProps) => {
  
  const displaySentence = 
  translation === 'arabic' ? arabicSentence(translation, segment) :
  translation === 'english' ? englishSentence(translation, segment) : 
  null;


  return (
    <div 
      onClick={() => onSeek(segment.startTime)} // Triggers timeline jump on click
      className={`p-4 rounded-xl transition-all duration-300 border cursor-pointer select-none ${
        isActive 
          ? "bg-blue-50/50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900 shadow-sm scale-[1.01]" 
          : "bg-transparent border-transparent opacity-60 hover:opacity-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
      }`}
    >
      {/* Coptic Main Sentence Layer */}
      <div className="flex flex-wrap gap-x-3 gap-y-1 mb-2">
        {segment.words.map((word, index) => (
          <div 
            key={`${word.coptic}-${index}`}  
            className="inline-block"
          >
          <SingleWord
            word={word}
            isActiveRow={isActive} 
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            getCurrentAudioTime={getCurrentAudioTime}
            onSeek={onSeek}
          />            
          </div>
        ))}
      </div>
        {displaySentence && (
          <div className="mt-3 pt-2.5 border-t border-zinc-100 dark:border-zinc-800/60 transition-all duration-300">
            <p 
              dir={translation === 'arabic' ? 'rtl' : 'ltr'}
              className={`leading-relaxed tracking-wide font-sans ${
                translation === 'arabic'
                  ? "text-xl md:text-2xl text-emerald-700 dark:text-emerald-400 font-medium text-right leading-loose"
                  : "text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-normal text-left"
              }`}
            >
              {displaySentence}
            </p>
          </div>
        )}
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
