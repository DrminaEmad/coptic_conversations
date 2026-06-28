// import Image from "next/image";
import Paragraph from "./ui/paragraph";


export default function Home() {

const paragraph = [
  {
    sentence1: [
      { coptic: "Ⲓⲁⲃⲁⲥⲕⲣⲓⲡⲧ", english: "JavaScript", arabic: "جافا سكريبت" },
      { coptic: "ⲟⲩⲟⲛ", english: "is", arabic: "تكون" },
      { coptic: "ⲟⲩ", english: "an", arabic: "أداة تعريف" },
      { coptic: "ϣⲡⲏⲣⲉ", english: "awesome", arabic: "رائعة" },
      { coptic: "ⲁⲥⲡⲓ", english: "language", arabic: "لغة" }
    ]
  },
  {
    sentence2: [
      { coptic: "Ⲛⲓⲥⲕⲉⲩⲏ", english: "Objects", arabic: "الكائنات" },
      { coptic: "ⲭⲱ", english: "store", arabic: "تخزن" },
      { coptic: "ⲉⲧϩⲏⲡ", english: "nested", arabic: "متداخلة" },
      { coptic: "ⲛⲓⲙⲉⲧⲣⲉϥϣⲱⲡ", english: "data", arabic: "بيانات" }
    ]
  },
  {
    sentence3: [
      { coptic: "Ⲡⲓⲧⲩⲡⲟⲥ", english: "Code", arabic: "البرمجية" },
      { coptic: "ⲁⲙⲟϣⲓ", english: "runs", arabic: "تشتغل" },
      { coptic: "ⲉⲙⲁϣⲱ", english: "very", arabic: "بشكل جداً" },
      { coptic: "ⲁⲥⲱⲓ", english: "fast", arabic: "سريع" }
    ]
  }
];


  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Paragraph paragraph={paragraph} />
      </main>
    </div>
  );
}


// // types/transcript.ts
// export interface DialogueWord {
//   coptic: string;
//   english: string;
//   arabic: string;
// }

// export interface TranscriptSegment {
//   id: number;
//   startTime: number;  // Time in seconds when segment starts
//   endTime: number;    // Time in seconds when segment ends
//   words: DialogueWord[];
// }

// // Example data array inside your database or route page
// export const conversationData: TranscriptSegment[] = [
//   {
//     id: 1,
//     startTime: 0.0,
//     endTime: 3.5,
//     words: [
//       { coptic: "Ⲓⲁⲃⲁⲥⲕⲓⲡⲧ", english: "JavaScript", arabic: "جافا سكريبت" },
//       { coptic: "ⲟⲩⲟⲛ", english: "is", arabic: "تكون" }
//     ]
//   },
//   {
//     id: 2,
//     startTime: 3.6,
//     endTime: 7.2,
//     words: [
//       { coptic: "Ⲛⲓⲥⲕⲉⲩⲏ", english: "Objects", arabic: "الكائنات" },
//       { coptic: "ⲭⲱ", english: "store", arabic: "تخزن" }
//     ]
//   }
// ];
