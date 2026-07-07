"use client";

export type WordProps = { 
  coptic: string;
  arabic: string; 
  english: string;
};

export default function SingleWord({ word }: { word: WordProps }) {
  return (
    <div className="group relative inline-flex flex-col items-center justify-start p-2 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 transition-all duration-200 select-none min-w-[70px] hover:shadow-md hover:-translate-y-0.5">
      
      {/* 🔹 Core Target Language display */}
      <span className="text-2xl font-coptic tracking-wide text-zinc-800 dark:text-zinc-200 group-hover:text-[#0071FF] transition-colors duration-150">
        {word.coptic}
      </span>

      {/* 🔹 Smooth Hover Reveal Overlay Container */}
      <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-200 ease-out w-full mt-0 group-hover:mt-1.5 overflow-hidden">
        <div className="flex flex-col items-center gap-0.5 min-h-0 text-center w-full">
          <span className="text-sm font-arabic font-medium text-zinc-600 dark:text-zinc-300 w-full" dir="rtl">
            {word.arabic}
          </span>
          <span className="text-xs font-sans text-zinc-400 dark:text-zinc-500 italic">
            {word.english}
          </span>
        </div>
      </div>

    </div>
  );
}
