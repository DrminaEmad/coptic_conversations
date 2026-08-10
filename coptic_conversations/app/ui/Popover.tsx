import { WordProps } from "./word"; // Adjust this import path to match your file structure
import EarSvg from "./EarSvg";



export interface WordPopoverProps {
  word: WordProps;
  setIsOpen: (isOpen: boolean) => void;
  handlePlayWordSound: (e: React.MouseEvent) => void;
  setFloatingRef: (node: HTMLDivElement | null) => void;
  floatingStyles: React.CSSProperties;
  getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown >;
  setArrowEl: (node: HTMLDivElement | null) => void;
  arrowX: number | undefined;
  arrowY: number | undefined;
}

export default function PopOver ({
  word,
  setIsOpen,
  handlePlayWordSound,
  setFloatingRef,
  floatingStyles,
  getFloatingProps,
  setArrowEl,
  arrowX,
  arrowY
}: WordPopoverProps) {

    return <div
              ref={setFloatingRef}
              style={floatingStyles}
              {...getFloatingProps()}
              className="z-50 flex flex-col gap-2 bg-background backdrop-blur-md text-foreground p-4 rounded-2xl shadow-xl border border-brand-primary/20 min-w-[240px] max-w-[340px] animate-in fade-in zoom-in-95 duration-100 relative"
            > 
              {/* X Close Button */}
              <div className="flex justify-end h-min">
                <button
                  onClick={() => setIsOpen(false)}
                  className=" text-xs font-black font-sans text-brand-muted/70 hover:text-brand-primary transition-colors leading-none rounded-lg hover:bg-brand-primary/10"
                  aria-label="Close popover"
                >
                  &times;
                </button>
              </div>
              {/* ─── HEADER ROW ─── */}
              <div className="flex items-center justify-between gap-6 w-full ">
                {/* Coptic Word & Audio Trigger Group */}
                <div className="flex items-center gap-2.5">
                  <span className="text-3xl font-coptic font-semibold tracking-wide text-brand-primary bg-brand-primary/15 px-2.5 py-1 rounded-xl">           
                    {word.coptic}
                  </span>
                </div>

                <button
                  onClick={handlePlayWordSound}
                  className="p-1.5 rounded-xl text-brand-accent hover:bg-brand-accent/10 transition-colors active:scale-95"
                  title="Play Audio"
                >
                  <EarSvg 
                    width={35} 
                    height={30} 
                    className="text-brand-accent"
                  />
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
          
    
}