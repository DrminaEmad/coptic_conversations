'use client'

import { useState } from "react";


export type WordProps = { 
    coptic: string;
    arabic: string; 
    english: string 
}



const SingleWord = ({ word } : {word: WordProps}) => {
    const [show, setShow] = useState(false);
  let content;

  if (!show) {
    content = (
      <div className="flex flex-col items-center text-center p-2 rounded bg-zinc-100/50 dark:bg-zinc-900/50 min-w-[60px]">
        <div className="text-xl font-bold text-zinc-900 dark:text-white">{word.coptic}</div>
      </div>
    );
  } else {
    content = (    
      <div className="flex flex-col items-center text-center p-2 rounded bg-zinc-100/50 dark:bg-zinc-900/50 min-w-[60px]">
        <div className="text-xl font-bold text-zinc-900 dark:text-white">{word.coptic}</div>
        <div className="text-sm text-zinc-500" dir="rtl">{word.arabic}</div>
        <div className="text-xs text-zinc-400 italic">{word.english}</div>
      </div> 
    );
  }

  return <div 
              className="cursor-pointer select-none"
              onMouseEnter={() => setShow(true)} 
              onMouseLeave={() => setShow(false)}
         >
           {content}
         </div>
}

export default SingleWord