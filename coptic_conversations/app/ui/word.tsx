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
import EarSvg from "./EarSvg";


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
       className="inline-flex flex-col items-center justify-start p-2 rounded-xl bg-brand-muted/5 border border-brand-muted/10 transition-all duration-200 select-none min-w-[70px] cursor-pointer active:scale-95">
      
      {/* 🔹 Core Target Language Text (Behaves like standard readable prose) */}
      <span className={`text-3xl font-coptic tracking-wide transition-colors duration-150 py-1 px-0.5 rounded-md ${
        isActiveRow 
          ? "text-brand-primary font-semibold bg-brand-primary/10" 
          : "text-foreground"
      }`}>
        {word.coptic}
      </span>
      
      {isOpen && (
    <FloatingPortal>
      <div
        ref={setFloatingRef}
        style={floatingStyles}
        {...getFloatingProps()}
        className="z-50 flex flex-col gap-3 bg-zinc-950 dark:bg-zinc-900 text-foreground px-4 py-3.5 rounded-2xl shadow-xl border border-brand-primary/20 min-w-[200px] max-w-[280px] animate-in fade-in zoom-in-95 duration-100"
      >
        {/* ─── HEADER ROW ─── */}
        <div className="flex items-center justify-between gap-4 w-full">
          {/* Coptic Word & Audio Trigger Group */}
          <div className="flex items-center gap-2">
            <span className="text-3xl font-coptic font-semibold tracking-wide text-brand-primary bg-brand-primary/10 px-2 py-0.5 rounded-lg">
              {word.coptic}
            </span>
            <button
              onClick={handlePlayWordSound}
              className="p-1 rounded-lg text-brand-accent hover:bg-brand-accent/10 transition-colors active:scale-95"
              title="Play Audio"
            >
              <EarSvg 
                width={24} 
                height={30} 
                className="text-brand-accent"
              />
            </button>
          </div>

          {/* X Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-xl font-sans text-muted-foreground hover:text-foreground transition-colors p-1 leading-none rounded-md hover:bg-brand-muted/10"
            aria-label="Close popover"
          >
            &times;
          </button>
        </div>

        {/* ─── TRANSLATIONS SIDE-BY-SIDE ─── */}
        <div className="grid grid-cols-2 gap-2 items-center w-full border-t border-brand-muted/10 pt-2.5">
          {/* English Translation */}
          <div className="text-center pr-2 border-r border-brand-muted/15 h-full flex items-center justify-center">
            <span className="text-sm font-sans text-zinc-300 italic line-clamp-2">
              {word.english}
            </span>
          </div>

          {/* Arabic Translation */}
          <div className="text-center pl-2 h-full flex items-center justify-center" dir="rtl">
            <span className="text-base font-arabic font-medium text-zinc-100 line-clamp-2">
              {word.arabic}
            </span>
          </div>
        </div>

        {/* ─── POINTER ARROW ─── */}
        <div 
          ref={setArrowEl} 
          className="w-2 h-2 bg-zinc-950 dark:bg-zinc-900 rotate-45 border-r border-b border-brand-primary/20"
          style={{
            position: 'absolute',
            left: arrowX != null ? `${arrowX}px` : '',
            top: arrowY != null ? `${arrowY}px` : '',
          }}
        />
      </div>
    </FloatingPortal>
      )}

    </div>
  );
}
