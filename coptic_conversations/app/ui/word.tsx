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
import { DialogueWord } from "../lib/data";


interface SingleWordProps {
    word: DialogueWord;
    isActiveRow: boolean;
    isPlaying: boolean;
    setIsPlaying: (playing: boolean) => void;
    getCurrentAudioTime: () => number;
    onSeek: (startTime: number, endTime?: number) => void;
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
  const  currentTime = getCurrentAudioTime(); 

  // check if the word is currently being played :
  const activeWord = 
    word.startTime !== undefined && 
    word.endTime !== undefined && 
    currentTime >= word.startTime && 
    currentTime <= word.endTime;

  // stop sound playing when the word clicked 
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

    // Dedicated word audio clip trigger handler
    const handlePlayWordSound = (e: React.MouseEvent) => {
      e.stopPropagation(); // Avoid interaction bubble-closing the popover block
      if (word.startTime !== undefined && word.endTime !== null) {
        onSeek(word.startTime, word.endTime);
      } else {
        // Fallback: Replay current word timeline starting spot if word timestamps aren't populated
        onSeek(savedTimeRef.current);
      }
    };

    // Attach clicking and dismiss behavior hooks from floating UI 
    const click = useClick(context);

    const dismiss = useDismiss(context);

    const { x: arrowX, y: arrowY } = middlewareData.arrow || {};

    const setReferenceRef = (node: HTMLDivElement | null) => {
        if (node) refs.setReference(node);
      };

    const setFloatingRef = (node: HTMLDivElement | null) => {
      if (node) refs.setFloating(node);
    };

    const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss]);

    
  return (

    <div 
      ref={setReferenceRef}
    {...getReferenceProps({
      onClick: (e) => {
        e.stopPropagation(); // 🛑 BLOCKS sentence row from triggering a rewind!
      }
    })}
       className="inline-flex flex-col items-center justify-start  transition-all duration-200 select-none  cursor-pointer active:scale-95">
      
      {/* 🔹 Core Target Language Text (Behaves like standard readable prose) */}
      <span className={`font-coptic tracking-wide transition-colors duration-150 py-1 px-0.5 rounded-md ${
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
