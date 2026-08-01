"use client";

import { memo } from "react";
import { TranscriptSegment } from "../lib/data";
import SingleWord from './word';
import { englishSentence, arabicSentence } from "../lib/helper";
import EarSvg from "./EarSvg"

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
      className={`p-4 rounded-xl transition-all duration-300 border cursor-pointer select-none flex items-center justify-between gap-4 ${
        isActive 
          ? "bg-brand-primary/5 dark:bg-brand-primary/10 border-brand-primary/20 shadow-xs scale-[1.01]" 
          : "bg-transparent border-transparent opacity-60 hover:opacity-100 hover:bg-brand-muted/5"
      }`}
    >
      {/* Coptic Main Sentence Layer */}
      <div className="flex-1 flex flex-col justify-center">
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
            <div className="mt-3 pt-2.5 border-t border-brand-muted/15 transition-all duration-300">
              <p 
                dir={translation === 'arabic' ? 'rtl' : 'ltr'}
                className={`leading-relaxed tracking-wide font-sans ${
                  translation === 'arabic'
                    ? "text-xl md:text-2xl text-brand-accent font-medium text-right leading-loose"
                    : "text-lg md:text-xl text-brand-muted font-normal text-left"
              }`}
              >
                {displaySentence}
              </p>
            </div>
          )}
                <div className="flex items-center justify-center px-1 shrink-0">

        </div>

      </div>
        <EarSvg 
            width={50} 
            height={80} 
            className={`transition-colors duration-300 ${
              isActive 
                ? "text-brand-accent animate-pulse" 
                : "text-brand-muted/80 group-hover:text-brand-muted/70"
            }`}
          />
      </div>
  );
});

TranscriptSegmentRow.displayName = "TranscriptSegmentRow";
export default TranscriptSegmentRow;






