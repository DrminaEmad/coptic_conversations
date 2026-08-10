// types/transcript.ts
export interface DialogueWord {
  coptic: string;
  english: string;
  arabic: string;
  startTime?:number;
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
      { coptic: "Ϩⲉⲙⲥⲓ", english: "sit down", arabic: "اجلس", startTime:0.0 },
    ]
  },
  {
    id: 2,
    startTime: 3.0,
    endTime: 9.0,
    words: [
      { coptic: "̀Ⲛⲑⲱⲛ", english: "where", arabic: "اين", startTime: 4.0 },
    ]
  },
  {
    id: 3,
    startTime: 10.0,
    endTime: 14.0,
    words: [
      { coptic: "Ϩⲉⲙⲥⲓ", english: "set down", arabic: "اجلس", startTime: 10.0 },
      { coptic: "̀Ⲙⲛⲁⲓ", english: "beside me", arabic: "بجانبي", startTime: 11.0 }    ]
  },
  {
    id: 4,
    startTime: 15.0,
    endTime: 19.0,
    words: [
      { coptic: "Ϩⲓϫⲉⲛ", english: "on", arabic: "علي" , startTime: 15.0},
      { coptic: "ⲟⲩ", english: "what", arabic: "ماذا", startTime: 16.0}
    ]
  },
  {
    id: 5,
    startTime: 23.0,
    endTime: 27.0, 
    words: [
      { coptic: "Ϩⲓϫⲉⲛ", english: "on", arabic: "علي" , startTime: 23.0},
      { coptic: "ⲡⲓⲧⲟⲧⲥ", english: "the chair", arabic: "الكرسي" , startTime: 24.0}
    ]
  },
];
