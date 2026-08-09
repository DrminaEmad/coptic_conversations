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
} from "@floating-ui/react";
// import EarSvg from "./EarSvg";
import PopOver from "./Popover";
import { FloatingPortal } from "@floating-ui/react";


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
       className="inline-flex flex-col items-center justify-start p-2 rounded-xl bg-brand-muted/5 border border-brand-muted/10 transition-all duration-200 select-none  cursor-pointer active:scale-95">
      
      {/* 🔹 Core Target Language Text (Behaves like standard readable prose) */}
      <span className={` md:text-3xl font-coptic tracking-wide transition-colors duration-150 py-1 px-0.5 rounded-md ${
        isActiveRow 
          ? "text-brand-primary font-semibold bg-brand-primary/10" 
          : "text-foreground"
      }`}>
        {word.coptic}
      </span>
      
      {isOpen && (
        <FloatingPortal>
            <PopOver  
            word={word}
            setIsOpen={setIsOpen}
            handlePlayWordSound={handlePlayWordSound}
            setFloatingRef={setFloatingRef}
            floatingStyles={floatingStyles}
            getFloatingProps={getFloatingProps}
            setArrowEl={setArrowEl}
            arrowX={arrowX}
            arrowY={arrowY}
          />
        </FloatingPortal>
      )}

    </div>
  );
}
