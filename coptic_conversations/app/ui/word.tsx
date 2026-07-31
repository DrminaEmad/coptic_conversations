"use client";

import { useState, useRef, useEffect } from "react";
import { 
  useFloating, 
  useInteractions, 
  useClick, 
  useDismiss, 
  offset, 
  flip, 
  shift,
  arrow,
  FloatingPortal 
} from "@floating-ui/react";



export interface WordProps  { 
  coptic: string;
  arabic: string; 
  english: string;
  startTime?: number; // Optional timestamp for word-specific audio triggers
};

interface SingleWordProps {
    word: WordProps;
    isActiveRow: boolean;
    isPlaying: boolean;
    setIsPlaying: (playing: boolean) => void;
    getCurrentAudioTime: () => number;
    onSeek: (startTime: number) => void;
}

export default function SingleWord({ word,
 isActiveRow,
   isPlaying, 
  setIsPlaying, 
  getCurrentAudioTime,
  onSeek
  }: SingleWordProps) {

  const [isOpen, setIsOpen] = useState(false);
  const [arrowEl, setArrowEl] = useState<HTMLDivElement | null>(null);
    
  // Keeps track of where the audio stopped instantly without trigger delays
  const savedTimeRef = useRef<number>(0);

  // Floating UI Setup Hook
  const { refs, floatingStyles, context, middlewareData  } = useFloating({
      open: isOpen,
      onOpenChange: setIsOpen,
      middleware: [
        offset(10),                  // Padding clearance from the word
        flip(),                      // Flip overlay to top or bottom if space is narrow
        shift(),                     // Prevent clipping off edge of horizontal mobile screen
        arrow({ element: arrowEl }) // Track custom tooltip visual pointer arrow
      ],
    });

  useEffect(() => {
      if (isOpen) {
        savedTimeRef.current = getCurrentAudioTime(); 
        setIsPlaying(false);                          
      } else {
        if (savedTimeRef.current > 0) {
          onSeek(savedTimeRef.current);
        }
      }
    }, [isOpen]);
    // Attach clicking and dismiss behavior hooks
    const click = useClick(context);
    const dismiss = useDismiss(context);

    // Add this line right below your "getFloatingProps" declaration:
    const { x: arrowX, y: arrowY } = middlewareData.arrow || {};

    const setReferenceRef = (node: HTMLDivElement | null) => {
        if (node) refs.setReference(node);
      };
    // ADD THIS LINE:
    const setFloatingRef = (node: HTMLDivElement | null) => {
      if (node) refs.setFloating(node);
    };

    const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss]);


    // Dedicated word audio clip trigger handler
    const handlePlayWordSound = (e: React.MouseEvent) => {
      e.stopPropagation(); // Avoid interaction bubble-closing the popover block
      if (word.startTime !== undefined) {
        onSeek(word.startTime);
      } else {
        // Fallback: Replay current word timeline starting spot if word timestamps aren't populated
        onSeek(savedTimeRef.current);
      }
    };



  return (

    <div 
      ref={setReferenceRef}
    {...getReferenceProps({
      onClick: (e) => {
        e.stopPropagation(); // 🛑 BLOCKS sentence row from triggering a rewind!
      }
    })}
      className="inline-flex flex-col items-center justify-start p-2 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 transition-all duration-200 select-none min-w-[70px] cursor-pointer active:scale-95">
      
      {/* 🔹 Core Target Language Text (Behaves like standard readable prose) */}
      <span className={`text-3xl font-coptic tracking-wide transition-colors duration-150 py-1 px-0.5 rounded-md ${
        isActiveRow 
          ? "text-blue-600 dark:text-blue-400 font-medium bg-blue-50/30 dark:bg-blue-950/20" 
          : "text-zinc-800 dark:text-zinc-200 "
      }`}>
        {word.coptic}
      </span>
      
      {isOpen && (
      <FloatingPortal>
        <div
          ref={setFloatingRef}
          style={floatingStyles}
          {...getFloatingProps()}
          className="z-50 flex flex-col items-center gap-2 bg-zinc-900 dark:bg-zinc-800 text-white px-4 py-3 rounded-2xl shadow-xl border border-zinc-800 dark:border-zinc-700 min-w-[140px] max-w-[240px] animate-in fade-in zoom-in-95 duration-100"
        >
          {/* Arabic translation layer */}
          <span className="text-base font-arabic font-medium text-zinc-100 w-full text-center" dir="rtl">
            {word.arabic}
          </span>
          
          {/* English translation layer */}
          <span className="text-sm font-sans text-zinc-300 italic text-center w-full pb-1 border-b border-zinc-800 dark:border-zinc-700">
            {word.english}
          </span>

          {/* Action Row Strip Buttons */}
          <div className="w-full flex justify-between items-center gap-3 pt-1">
            <button
              onClick={handlePlayWordSound}
              className="text-xs flex items-center gap-1 bg-zinc-800 dark:bg-zinc-700 hover:bg-zinc-700 dark:hover:bg-zinc-600 px-2 py-1 rounded-lg text-blue-400 font-medium transition-all active:scale-95"
            >
              🔊 Audio
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              Close
            </button>
          </div>

          {/* Floating dynamic calculated structural visual anchor pointer arrow */}
          <div 
            ref={setArrowEl} 
            className="w-2 h-2 bg-zinc-900 dark:bg-zinc-800 rotate-45 border-r border-b border-zinc-800 dark:border-zinc-700"
            style={{
              position: 'absolute',
              left: arrowX != null ? `${arrowX}px` : '',
              top: arrowY != null ? `${arrowY}px` : '',
            }}
          />        </div>
      </FloatingPortal>
      )}

    </div>
  );
}
