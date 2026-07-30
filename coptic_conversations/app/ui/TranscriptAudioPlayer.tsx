"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { conversationData } from "../lib/data";
import TranscriptSegmentRow from "./TranscriptSegmentRow";

export default function TranscriptAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSegmentId, setActiveSegmentId] = useState<string | number | null>(null);
  const [translationMode, setTranslationMode] = useState<"english" | "arabic" | "none">("english");
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Centralized time tracker for all rows
  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const handleTimeUpdate = () => {
      const time = audioElement.currentTime;

      // const match = conversationData.find(
      //   (seg) => time >= seg.startTime && time <= seg.endTime
      // );

      const matchingSegments = conversationData.filter((seg) => time >= seg.startTime);
      const match = matchingSegments[matchingSegments.length - 1];

      const nextActiveId = match ? match.id : null;
      setActiveSegmentId((prevId) => (prevId !== nextActiveId ? nextActiveId : prevId));
    };

    // Centralized event syncing to avoid interaction desync bugs
        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);

    audioElement.addEventListener("timeupdate", handleTimeUpdate);
    audioElement.addEventListener("play", handlePlay);
    audioElement.addEventListener("pause", handlePause);

    return () => {
      audioElement.removeEventListener("timeupdate", handleTimeUpdate);
      audioElement.removeEventListener("play", handlePlay);
      audioElement.removeEventListener("pause", handlePause);
    };

  }, []);


  useEffect(() => {
    if (activeSegmentId === null || !scrollContainerRef.current) return;

    // Find the child element inside the container matching our data-id attribute
    const activeElement = scrollContainerRef.current.querySelector(
      `[data-id="${activeSegmentId}"]`
    ) as HTMLElement;

    if (activeElement) {
      activeElement.scrollIntoView({
        behavior: "smooth",   // Creates the smooth animated glide effect
        block: "nearest",     // Intelligent positioning: moves it only if out of bounds
        inline: "nearest",
      });
    }
  }, [activeSegmentId]); 


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
  }, []);

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
{/* 🌐 TRANSLATION CONTROLS SECTION */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-zinc-50 dark:bg-zinc-900/50 p-3 rounded-xl border border-zinc-100 dark:border-zinc-800/80">
  <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider text-left">
    Translation Display
  </span>
  <div className="flex w-full sm:w-auto bg-zinc-200/60 dark:bg-zinc-800 p-1 rounded-lg gap-1">
    {(["english", "arabic", "none"] as const).map((mode) => (
      <button
        key={mode}
        onClick={() => setTranslationMode(mode)}
        className={`flex-1 sm:flex-initial text-center px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer capitalize ${
          translationMode === mode
            ? "bg-white dark:bg-zinc-700 text-[#0071FF] dark:text-white shadow-sm"
            : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
        }`}
      >
        {mode === "none" ? "Off" : mode}
      </button>
    ))}
  </div>
</div>
      {/* 📄 3. ISOLATED TEXT SCROLL PANEL */}
      <div 
        ref={scrollContainerRef}
        className="flex flex-col gap-6 max-h-[450px] overflow-y-auto pr-2">
        {conversationData.map((segment) => (
        <div key={segment.id} data-id={segment.id} className="w-full">
          <TranscriptSegmentRow  
            segment={segment} 
            isActive={activeSegmentId === segment.id}
            onSeek={handleSeek} // Pass down the jump function
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            getCurrentAudioTime={() => audioRef.current?.currentTime || 0}
          />
          </div>
        ))}
      </div>

    </div>
  );
}





