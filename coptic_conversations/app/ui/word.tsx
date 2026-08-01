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
          className="z-50 flex flex-col gap-4 bg-background backdrop-blur-md text-foreground p-4 rounded-2xl shadow-xl border border-brand-primary/20 min-w-[240px] max-w-[340px] animate-in fade-in zoom-in-95 duration-100 relative"
        >
          {/* ─── HEADER ROW ─── */}
          <div className="flex items-center justify-between gap-6 w-full pr-1">
            {/* Coptic Word & Audio Trigger Group */}
            <div className="flex items-center gap-2.5">
              <span className="text-3xl font-coptic font-semibold tracking-wide text-brand-primary bg-brand-primary/15 px-2.5 py-1 rounded-xl">           
                {word.coptic}
              </span>
              <button
                onClick={handlePlayWordSound}
                className="p-1.5 rounded-xl text-brand-accent hover:bg-brand-accent/10 transition-colors active:scale-95"
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
              className="absolute top-3.5 right-3.5 text-2xl font-sans text-brand-muted/70 hover:text-brand-primary transition-colors p-1 leading-none rounded-lg hover:bg-brand-primary/10"
              aria-label="Close popover"
            >
              &times;
            </button>
          </div>

          {/* ─── TRANSLATIONS SIDE-BY-SIDE ─── */}
          <div className="grid grid-cols-2 gap-3 items-center w-full border-t border-brand-primary/15 pt-3.5">
            {/* English Translation */}
            <div className="text-center pr-3 border-r border-brand-primary/15 h-full flex items-center justify-center">
              <span className="text-sm font-sans text-foreground/80 italic font-medium line-clamp-2">
                {word.english}
              </span>
            </div>

            {/* Arabic Translation */}
            <div className="text-center pl-3 h-full flex items-center justify-center" dir="rtl">
              <span className="text-base font-arabic font-semibold text-foreground/90 line-clamp-2">        
                {word.arabic}
              </span>
            </div>
          </div>

          {/* ─── POINTER ARROW ─── */}
          <div 
            ref={setArrowEl} 
            className="w-2.5 h-2.5 bg-transparent  dark:bg-[#18191b] pointer-events-none "
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
