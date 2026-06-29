"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { conversationData } from "../lib/data";
import TranscriptSegmentRow from "./TranscriptSegmentRow";

export default function TranscriptAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSegmentId, setActiveSegmentId] = useState<string | number | null>(null);

  // Centralized time tracker for all rows
  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const handleTimeUpdate = () => {
      const time = audioElement.currentTime;

      const match = conversationData.find(
        (seg) => time >= seg.startTime && time <= seg.endTime
      );

      const nextActiveId = match ? match.id : null;
      setActiveSegmentId((prevId) => (prevId !== nextActiveId ? nextActiveId : prevId));
    };

    audioElement.addEventListener("timeupdate", handleTimeUpdate);
    return () => audioElement.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log("Interaction required:", err));
    }
    setIsPlaying(!isPlaying);
  };

  // Jump to specific timestamp and auto-play if paused
  const handleSeek = useCallback((startTime: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = startTime;
    
    if (!isPlaying) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log("Interaction required:", err));
    }
  }, [isPlaying]);

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white dark:bg-zinc-950 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col gap-8">
      
      {/* 🎧 1. AUDIO ELEMENT */}
      <audio 
        ref={audioRef}
        src="/audio/conversation_lesson1.mp3"
        onEnded={() => setIsPlaying(false)}
        className="hidden"
      />

      {/* 🕹️ 2. MASTER CONTROLS HEADBAR */}
      <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Lesson 1: Introduction</h2>
          <p className="text-sm text-zinc-500">Listen and follow along carefully</p>
        </div>
        <button 
          onClick={togglePlay}
          className="flex items-center gap-2 bg-[#0071FF] text-white px-6 py-3 rounded-full font-semibold cursor-pointer transition-transform active:scale-95 hover:opacity-95"
        >
          {isPlaying ? "⏸️ Pause Dialogue" : "▶️ Play Dialogue"}
        </button>
      </div>

      {/* 📄 3. ISOLATED TEXT SCROLL PANEL */}
      <div className="flex flex-col gap-6 max-h-112.5 overflow-y-auto pr-2">
        {conversationData.map((segment) => (
          <TranscriptSegmentRow 
            key={segment.id} 
            segment={segment} 
            isActive={activeSegmentId === segment.id}
            onSeek={handleSeek} // Pass down the jump function
          />
        ))}
      </div>

    </div>
  );
}







// "use client";

// import { useRef, useState } from "react";
// import { conversationData } from "../lib/data";
// import TranscriptSegmentRow from "./TranscriptSegmentRow"; // Import the child component

// export default function TranscriptAudioPlayer() {
//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const togglePlay = () => {
//     if (!audioRef.current) return;
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play().catch(err => console.log("Interaction required:", err));
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className="w-full max-w-3xl mx-auto p-6 bg-white dark:bg-zinc-950 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col gap-8">
      
//       {/* 🎧 1. AUDIO ELEMENT (Kept here so it has a high-level reference container) */}
//       <audio 
//         ref={audioRef}
//         src="/audio/conversation_lesson1.mp3"
//         onEnded={() => setIsPlaying(false)}
//         className="hidden"
//       />

//       {/* 🕹️ 2. MASTER CONTROLS HEADBAR (Now renders exactly ONCE when clicking play/pause) */}
//       <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-4">
//         <div>
//           <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Lesson 1: Introduction</h2>
//           <p className="text-sm text-zinc-500">Listen and follow along carefully</p>
//         </div>
//         <button 
//           onClick={togglePlay}
//           className="flex items-center gap-2 bg-[#0071FF] text-white px-6 py-3 rounded-full font-semibold cursor-pointer transition-transform active:scale-95 hover:opacity-95"
//         >
//           {isPlaying ? "⏸️ Pause Dialogue" : "▶️ Play Dialogue"}
//         </button>
//       </div>

//       {/* 📄 3. ISOLATED TEXT SCROLL PANEL */}
//       <div className="flex flex-col gap-6 max-h-112.5 overflow-y-auto pr-2">
//         {conversationData.map((segment) => (
//           <TranscriptSegmentRow 
//             key={segment.id} 
//             segment={segment} 
//             audioRef={audioRef} // Pass down the element connection pointer directly
//           />
//         ))}
//       </div>

//     </div>
//   );
// }
