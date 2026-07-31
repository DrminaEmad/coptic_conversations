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
    endTime: 2.0,
    words: [
      { coptic: "Ϩⲉⲙⲥⲓ", english: "sit down", arabic: "اجلس" },
    ]
  },
  {
    id: 2,
    startTime: 3.0,
    endTime: 9.0,
    words: [
      { coptic: "̀Ⲛⲑⲱⲛ", english: "where", arabic: "اين" },
    ]
  },
  {
    id: 3,
    startTime: 10.0,
    endTime: 14.0,
    words: [
      { coptic: "Ϩⲉⲙⲥⲓ", english: "set down", arabic: "اجلس" },
      { coptic: "̀Ⲙⲛⲁⲓ", english: "beside me", arabic: "بجانبي" }    ]
  },
  {
    id: 4,
    startTime: 15.0,
    endTime: 19.0,
    words: [
      { coptic: "Ϩⲓϫⲉⲛ", english: "on", arabic: "علي" },
      { coptic: "ⲟⲩ", english: "what", arabic: "ماذا" }
    ]
  },
  {
    id: 5,
    startTime: 23.0,
    endTime: 27.0, 
    words: [
      { coptic: "Ϩⲓϫⲉⲛ", english: "on", arabic: "علي" },
      { coptic: "ⲡⲓⲧⲟⲧⲥ", english: "the chair", arabic: "الكرسي" }
    ]
  },
];
