"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { conversationData } from "../lib/data";
import TranscriptSegmentRow from "./TranscriptSegmentRow";
import PlayButton from "./PlayButton";

export default function TranscriptAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // const activeTimeUpdateRef = useRef<(() => void) | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSegmentId, setActiveSegmentId] = useState<string | number | null>(null);
  const [translationMode, setTranslationMode] = useState<"english" | "arabic" | "none">("none");
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const targetEndTimeRef = useRef<number | null>(null);



  // controlling the auto scroll functionality 
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


  // handling the sound play functionality 

  // toggle sound on and off from the toggle button 
  const togglePlay = () => {
    if (!audioRef.current) return;

    targetEndTimeRef.current = null;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log("Interaction required:", err));
    }
    setIsPlaying(!isPlaying);
  };


  // Centralized time tracker for all rows so the active row get a different style 
  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const handleTimeUpdate = () => {
      const time = audioElement.currentTime;

      // const match = conversationData.find(
      //   (seg) => time >= seg.startTime && time <= seg.endTime
      // );
      if (targetEndTimeRef.current !== null && time >= targetEndTimeRef.current) {
        audioElement.pause();
        setIsPlaying(false);
        targetEndTimeRef.current = null;
      }

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


  // stop and continue sound playing after closing the word popover 
  const setAudioPlayback = useCallback((playing: boolean) => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.play().catch(err => console.log("Interaction required:", err));
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);


  // Jump to specific timestamp and auto-play if paused
  const handleSeek = useCallback((startTime: number, endTime: number =Infinity) => {
    if (!audioRef.current) return;

    targetEndTimeRef.current = endTime;
    audioRef.current.currentTime = startTime;
    
    audioRef.current.play()
      .then(() => setIsPlaying(true))
      .catch(err => console.log("Interaction required:", err));
  }, []);


  return (
      <div className="w-full max-w-3xl mx-auto p-6 bg-white dark:bg-zinc-950 rounded-2xl border border-brand-muted/20 shadow-sm flex flex-col gap-8">
      
      {/* 🎧 1. AUDIO ELEMENT */}
      <audio 
        ref={audioRef}
        src="/audio/the_lord_prayer.mp3"
        onEnded={() => setIsPlaying(false)}
        className="hidden"
      />

      {/* 🕹️ 2. MASTER CONTROLS HEADBAR */}
      <div className="flex items-center justify-between border-b border-brand-muted/15 pb-4">
        <div>
          <h2 className="text-xl font-bold text-brand-primary">الدرس الأول: مقدمة تعليمية</h2>
          <p className="text-sm text-brand-muted">استمع وتابع الكلمات بكل دقة وعناية</p>
        </div>
        
        <PlayButton togglePlay={togglePlay}>
          {isPlaying ? "⏸️ Pause Dialogue" : "▶️ Play Dialogue"}
        </PlayButton>

      </div>
      {/* 🌐 TRANSLATION CONTROLS SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-brand-muted/5 p-3 rounded-xl border border-brand-muted/10">
        <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider text-left">
          Translation Display
        </span>
        <div className="flex w-full sm:w-auto bg-brand-muted/10 dark:bg-zinc-900 p-1 rounded-lg gap-1">
          {(["english", "arabic", "none"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setTranslationMode(mode)}
              className={`flex-1 sm:flex-initial text-center px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer capitalize ${
                translationMode === mode
                  ? "bg-white dark:bg-zinc-800 text-brand-accent shadow-xs border border-brand-accent/20 font-bold"
                  : "text-brand-muted hover:text-brand-primary"
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
        className="flex flex-col gap-6 max-h-112.5 overflow-y-auto pr-2">
        {conversationData.map((segment) => (
        <div key={segment.id} data-id={segment.id} className="w-full">
          <TranscriptSegmentRow  
            segment={segment} 
            isActive={activeSegmentId === segment.id}
            onSeek={handleSeek} // Pass down the jump function
            isPlaying={isPlaying}
            setIsPlaying={setAudioPlayback}
            getCurrentAudioTime={() => audioRef.current?.currentTime || 0}
            translation={translationMode}
          />
          </div>
        ))}
      </div>

    </div>
  );
}





