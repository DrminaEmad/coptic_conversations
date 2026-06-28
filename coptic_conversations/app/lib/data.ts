// types/transcript.ts
export interface DialogueWord {
  coptic: string;
  english: string;
  arabic: string;
}

export interface TranscriptSegment {
  id: number;
  startTime: number;  // Time in seconds when segment starts
  endTime: number;    // Time in seconds when segment ends
  words: DialogueWord[];
}

// Example data array inside your database or route page
export const conversationData: TranscriptSegment[] = [
  {
    id: 1,
    startTime: 0.0,
    endTime: 3.5,
    words: [
      { coptic: "Ⲓⲁⲃⲁⲥⲕⲓⲡⲧ", english: "JavaScript", arabic: "جافا سكريبت" },
      { coptic: "ⲟⲩⲟⲛ", english: "is", arabic: "تكون" }
    ]
  },
  {
    id: 2,
    startTime: 3.6,
    endTime: 7.2,
    words: [
      { coptic: "Ⲛⲓⲥⲕⲉⲩⲏ", english: "Objects", arabic: "الكائنات" },
      { coptic: "ⲭⲱ", english: "store", arabic: "تخزن" }
    ]
  }
];
