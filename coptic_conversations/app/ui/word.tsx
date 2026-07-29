"use client";

export type WordProps = { 
  coptic: string;
  arabic: string; 
  english: string;
};

interface SingleWordProps {
    word: WordProps;
    isActiveRow: boolean;
}

export default function SingleWord({ word, isActiveRow }: SingleWordProps) {
  return (
    <div className="group relative inline-flex flex-col items-center justify-start p-2 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 transition-all duration-200 select-none min-w-[70px] hover:shadow-md hover:-translate-y-0.5">
      
      {/* 🔹 Core Target Language Text (Behaves like standard readable prose) */}
      <span className={`text-3xl font-coptic tracking-wide transition-colors duration-150 py-1 px-0.5 rounded-md ${
        isActiveRow 
          ? "text-blue-600 dark:text-blue-400 font-medium bg-blue-50/30 dark:bg-blue-950/20" 
          : "text-zinc-800 dark:text-zinc-200 group-hover:text-blue-500"
      }`}>
        {word.coptic}
      </span>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-30 pointer-events-none opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 ease-out">
        <div className="flex flex-col items-center gap-1 bg-zinc-900 dark:bg-zinc-800 text-white px-3 py-2 rounded-xl shadow-xl border border-zinc-800 dark:border-zinc-700 min-w-[100px]">
          
          {/* Arabic translation layer */}
          <span className="text-sm font-arabic font-medium text-zinc-100 w-full text-center whitespace-nowrap" dir="rtl">
            {word.arabic}
          </span>
          
          {/* English translation layer */}
          <span className="text-xs font-sans text-zinc-300 italic whitespace-nowrap">
            {word.english}
          </span>

          {/* Small visual anchor arrow at the bottom of the tooltip */}
          <div className="w-2 h-2 bg-zinc-900 dark:bg-zinc-800 rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2 border-r border-b border-zinc-800 dark:border-zinc-700" />
        </div>
      </div>

    </div>
  );
}
