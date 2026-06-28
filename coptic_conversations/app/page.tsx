import TranscriptAudioPlayer from "./ui/TranscriptAudioPlayer";

export default function Home() {
  return (
    /* 🚀 FIXED: Added md:col-span-full to force the box to break out of the 280px column constraints */
    /* 🚀 FIXED: Added w-full max-w-none to let the parent layout fill the remaining fraction grid space */
    <div className="md:col-span-full flex-1 w-full bg-zinc-50 font-sans dark:bg-black p-4 sm:p-8 md:ml-48 min-h-[calc(100vh-64px)] flex justify-center items-start pt-6 md:pt-12">
      
      {/* 🚀 FIXED: Wrapped main in a flexible width bounds box to let it breath across wide viewports */}
      <main className="w-full max-w-3xl bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-sm min-w-0">
        
        <TranscriptAudioPlayer />
        
      </main>

    </div>
  );
}





// const paragraph = [
//   {
//     sentence1: [
//       { coptic: "Ⲓⲁⲃⲁⲥⲕⲣⲓⲡⲧ", english: "JavaScript", arabic: "جافا سكريبت" },
//       { coptic: "ⲟⲩⲟⲛ", english: "is", arabic: "تكون" },
//       { coptic: "ⲟⲩ", english: "an", arabic: "أداة تعريف" },
//       { coptic: "ϣⲡⲏⲣⲉ", english: "awesome", arabic: "رائعة" },
//       { coptic: "ⲁⲥⲡⲓ", english: "language", arabic: "لغة" }
//     ]
//   },
//   {
//     sentence2: [
//       { coptic: "Ⲛⲓⲥⲕⲉⲩⲏ", english: "Objects", arabic: "الكائنات" },
//       { coptic: "ⲭⲱ", english: "store", arabic: "تخزن" },
//       { coptic: "ⲉⲧϩⲏⲡ", english: "nested", arabic: "متداخلة" },
//       { coptic: "ⲛⲓⲙⲉⲧⲣⲉϥϣⲱⲡ", english: "data", arabic: "بيانات" }
//     ]
//   },
//   {
//     sentence3: [
//       { coptic: "Ⲡⲓⲧⲩⲡⲟⲥ", english: "Code", arabic: "البرمجية" },
//       { coptic: "ⲁⲙⲟϣⲓ", english: "runs", arabic: "تشتغل" },
//       { coptic: "ⲉⲙⲁϣⲱ", english: "very", arabic: "بشكل جداً" },
//       { coptic: "ⲁⲥⲱⲓ", english: "fast", arabic: "سريع" }
//     ]
//   }
// ];