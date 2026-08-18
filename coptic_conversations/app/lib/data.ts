// types/transcript.ts
export interface DialogueWord {
  coptic: string;
  english: string;
  arabic: string;
  startTime?:number;
  endTime?: number 
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
      "id": 1,
      "startTime": 0.0,
      "endTime": 11.0,
      "words": [
        {
          "coptic": "ϫⲉ",
          "english": ":",
          "arabic": ":",
          "startTime": 0.0,
          "endTime": 1.0
        },
        {
          "coptic": "Ⲡⲉⲛⲓⲱⲧ",
          "english": "Our Father",
          "arabic": "أبانا",
          "startTime": 0.95,
          "endTime": 4.0
        },
        {
          "coptic": "ⲉⲧϦⲉⲛ",
          "english": "who is in",
          "arabic": "الذي في",
          "startTime": 4.5,
          "endTime": 5.5
        },
        {
          "coptic": "ⲛⲓⲫⲏⲟⲩⲓ̀",
          "english": "the heavens",
          "arabic": "السموات",
          "startTime": 6.0,
          "endTime": 8.0
        },
        {
          "coptic": "ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ",
          "english": "hallowed be",
          "arabic": "ليتقدس",
          "startTime": 8.5,
          "endTime": 12.0
        }
      ]
    },
    {
      "id": 2,
      "startTime": 12.0,
      "endTime": 23.0,
      "words": [
        {
          "coptic": "ⲛ̀ϫⲉ",
          "english": " ",
          "arabic": " ",
          "startTime": 12.3,
          "endTime": 13.0
        },
        {
          "coptic": "ⲡⲉⲕⲣⲁⲛ",
          "english": "your name",
          "arabic": "اسمك",
          "startTime": 13.5,
          "endTime": 15.7
        },
        {
          "coptic": "ⲙⲁⲣⲉⲥⲓ̀",
          "english": "let it come",
          "arabic": "لتأتي",
          "startTime": 16,
          "endTime": 19
        },
        {
          "coptic": "ⲛ̀ϫⲉ",
          "english": " ",
          "arabic": " ",
          "startTime": 19.2,
          "endTime": 20.0
        },
        {
          "coptic": "ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ",
          "english": "your kingdom",
          "arabic": "ملكوتك",
          "startTime": 20.2,
          "endTime": 23.1
        }
      ]
    },
    {
      "id": 3,
      "startTime": 23.5,
      "endTime": 38.0,
      "words": [
        {
          "coptic": "ⲡⲉⲧⲉϩⲛⲁⲕ",
          "english": "your will",
          "arabic": "مشيئتك",
          "startTime": 23.5,
          "endTime": 26.7
        },
        {
          "coptic": "ⲙⲁⲣⲉϥϣⲱⲡⲓ",
          "english": "let it be done",
          "arabic": "لتكن",
          "startTime": 26.8,
          "endTime": 30.5
        },
        {
          "coptic": "ⲙ̀ⲫⲣⲏϯ",
          "english": "as / like",
          "arabic": "كما",
          "startTime": 31.0,
          "endTime": 34.5
        },
        {
          "coptic": "Ϧⲉⲛ",
          "english": "in",
          "arabic": "في",
          "startTime": 35.2,
          "endTime": 36.19
        },
        {
          "coptic": "ⲧ̀ⲫⲉ",
          "english": "heaven",
          "arabic": "السماء",
          "startTime": 36.5,
          "endTime": 38
        }
      ]
    },
    {
      "id": 4,
      "startTime": 38.5,
      "endTime": 45.0,
      "words": [
        {
          "coptic": "ⲛⲉⲙ",
          "english": "and",
          "arabic": "كذلك",
          "startTime": 38.5,
          "endTime": 39.4
        },
        {
          "coptic": "ϩⲓϫⲉⲛ",
          "english": "on",
          "arabic": "على",
          "startTime": 40.0,
          "endTime": 41.7
        },
        {
          "coptic": "ⲡⲓⲕⲁϩⲓ",
          "english": "the earth",
          "arabic": "الأرض",
          "startTime": 42.0,
          "endTime": 45.0
        }
      ]
    },
    {
      "id": 5,
      "startTime": 45.5,
      "endTime": 58.0,
      "words": [
        {
          "coptic": "ⲡⲉⲛⲱⲓⲕ",
          "english": "our bread",
          "arabic": "خبزنا",
          "startTime": 45.5,
          "endTime": 48.2
        },
        {
          "coptic": "ⲛ̀ⲧⲉ",
          "english": "of",
          "arabic": "الذي لـ",
          "startTime": 48.5,
          "endTime": 49.5
        },
        {
          "coptic": "ⲣⲁⲥϯ",
          "english": "tomorrow",
          "arabic": "الغد / الآتي",
          "startTime": 49.9,
          "endTime": 51.0
        },
        {
          "coptic": "ⲙⲏⲓϥ",
          "english": "give it",
          "arabic": "أعطنا",
          "startTime": 51.7,
          "endTime": 53.8
        },
        {
          "coptic": "ⲛⲁⲛ",
          "english": "to us",
          "arabic": "إيانا",
          "startTime": 54.0,
          "endTime": 55.5
        },
        {
          "coptic": "ⲙ̀ⲫⲟⲟⲩ",
          "english": "today",
          "arabic": "اليوم",
          "startTime": 55.7,
          "endTime": 58.0
        }
      ]
    },
    {
      "id": 6,
      "startTime": 58.5,
      "endTime": 64.0,
      "words": [
        {
          "coptic": "ⲟⲩⲟϩ",
          "english": "and",
          "arabic": "و",
          "startTime": 58.5,
          "endTime": 59.0
        },
        {
          "coptic": "ⲭⲁ",
          "english": "forgive",
          "arabic": "اغفر",
          "startTime": 59.5,
          "endTime": 59.54
        },
        {
          "coptic": "ⲛⲏⲉⲧⲉⲣⲟⲛ",
          "english": "our debts",
          "arabic": "ما علينا",
          "startTime": 59.6,
          "endTime": 62.0
        },
        {
          "coptic": "ⲛⲁⲛ",
          "english": "to us",
          "arabic": "لنا",
          "startTime": 62.3,
          "endTime": 62.9
        },
        {
          "coptic": "ⲉ̀ⲃⲟⲗ",
          "english": "away",
          "arabic": "خطايانا",
          "startTime": 63.5,
          "endTime": 64.9
        }
      ]
    },
    {
      "id": 7,
      "startTime": 64.5,
      "endTime": 77.0,
      "words": [
        {
          "coptic": "ⲙ̀ⲫⲣⲏϯ",
          "english": "as / like",
          "arabic": "كما",
          "startTime": 64.9,
          "endTime": 67.0
        },
        {
          "coptic": "ϩⲱⲛ",
          "english": "we also",
          "arabic": "نحن أيضاً",
          "startTime": 67.5,
          "endTime": 68.4
        },
        {
          "coptic": "ⲛ̀ⲧⲉⲛⲭⲱ",
          "english": "we forgive",
          "arabic": "نغفر",
          "startTime": 68.5,
          "endTime": 69.5
        },
        {
          "coptic": "ⲉ̀ⲃⲟⲗ",
          "english": "sins",
          "arabic": "خطايا",
          "startTime": 70.0,
          "endTime": 72.0
        },
        {
          "coptic": "ⲛⲏⲉⲧⲉ",
          "english": "those who",
          "arabic": "للمذنبين",
          "startTime": 73.0,
          "endTime": 75.0
        },
        {
          "coptic": "ⲟⲩⲟⲛ",
          "english": "have",
          "arabic": "إلينا",
          "startTime": 75.5,
          "endTime": 76.0
        },
        {
          "coptic": "ⲛ̀ⲧⲁⲛ",
          "english": "against us",
          "arabic": "علينا",
          "startTime": 76.1,
          "endTime": 77.2
        }
      ]
    }, 
    {
      "id": 8,
      "startTime": 79.0,
      "endTime": 86.0,
      "words": [
        {
          "coptic": "ⲟⲩⲟϩ",
          "english": "and",
          "arabic": "و",
          "startTime": 79.0,
          "endTime": 80.3
        },
        {
          "coptic": "ⲙ̀ⲡⲉⲣⲉⲛⲧⲉⲛ",
          "english": "lead us not",
          "arabic": "لا تدخلنا",
          "startTime": 80.5,
          "endTime": 82.3
        },
        {
          "coptic": "ⲉ̀Ϧⲟⲩⲛ",
          "english": "into",
          "arabic": "في",
          "startTime": 82.4,
          "endTime": 83.0
        },
        {
          "coptic": "ⲉ̀ⲡⲓⲣⲁⲥⲙⲟⲥ",
          "english": "temptation",
          "arabic": "تجربة",
          "startTime": 83.2,
          "endTime": 86.0
        }
      ]
    },
    {
      "id": 9,
      "startTime": 86.5,
      "endTime": 93.5,
      "words": [
        {
          "coptic": "ⲁⲗⲗⲁ",
          "english": "but",
          "arabic": "لكن",
          "startTime": 86.7,
          "endTime": 88.7
        },
        {
          "coptic": "ⲛⲁϩⲙⲉⲛ",
          "english": "save us",
          "arabic": "نجنا",
          "startTime": 88.9,
          "endTime": 90.1
        },
        {
          "coptic": "ⲉ̀ⲃⲟⲗϩⲁ",
          "english": "from",
          "arabic": "من",
          "startTime": 90.5,
          "endTime": 91.5
        },
        {
          "coptic": "ⲡⲓⲡⲉⲧϩⲱⲟⲩ",
          "english": "the evil one",
          "arabic": "الشرير",
          "startTime": 91.5,
          "endTime": 93.7
        }
      ]
    },
    {
      "id": 10,
      "startTime": 93.5,
      "endTime": 101,
      "words": [
        {
          "coptic": "Ϧⲉⲛ",
          "english": "in",
          "arabic": "بـ",
          "startTime": 94.0,
          "endTime": 95.0
        },
        {
          "coptic": "Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ",
          "english": "Christ",
          "arabic": "المسيح",
          "startTime": 95.0,
          "endTime": 97.65
        },
        {
          "coptic": "Ⲓⲏⲥⲟⲩⲥ",
          "english": "Jesus",
          "arabic": "يسوع",
          "startTime": 97.5,
          "endTime": 99.3
        },
        {
          "coptic": "Ⲡⲉⲛϭⲟⲓⲥ",
          "english": "our Lord",
          "arabic": "ربنا",
          "startTime": 99.3,
          "endTime": 101.5
        }
      ]
    },
    {
      "id": 11,
      "startTime": 101.5,
      "endTime": 115.0,
      "words": [
        {
          "coptic": "ϫⲉ",
          "english": "for",
          "arabic": "لأن",
          "startTime": 102.0,
          "endTime": 102.5
        },
        {
          "coptic": "ⲑⲱⲕ",
          "english": "thine",
          "arabic": "لك",
          "startTime": 102.5,
          "endTime": 103.0
        },
        {
          "coptic": "ⲧⲉ",
          "english": "is",
          "arabic": "هو",
          "startTime": 103.0,
          "endTime": 103.1
        },
        {
          "coptic": "ϯⲙⲉⲧⲟⲩⲣⲟ",
          "english": "the kingdom",
          "arabic": "الملك",
          "startTime": 103.3,
          "endTime": 106.0
        },
        {
          "coptic": "ⲛⲉⲙ",
          "english": "and",
          "arabic": "و",
          "startTime": 106.1,
          "endTime": 106.7
        },
        {
          "coptic": "ϯϫⲟⲙ",
          "english": "the power",
          "arabic": "القوة",
          "startTime": 107.5,
          "endTime": 109.0
        },
        {
          "coptic": "ⲛⲉⲙ",
          "english": "and",
          "arabic": "و",
          "startTime": 109.0,
          "endTime": 109.5
        },
        {
          "coptic": "ⲡⲓⲱⲟⲩ",
          "english": "the glory",
          "arabic": "المجد",
          "startTime": 109.7,
          "endTime": 111.7
        },
        {
          "coptic": "ϣⲁ",
          "english": "unto",
          "arabic": "إلى",
          "startTime": 111.8,
          "endTime": 112.5
        },
        {
          "coptic": "ⲉⲛⲉϩ",
          "english": "eternity",
          "arabic": "الأبد",
          "startTime": 112.5,
          "endTime": 113.7
        },
        {
          "coptic": "Ⲁ̀ⲙⲏⲛ",
          "english": "Amen",
          "arabic": "آمين",
          "startTime": 114.1,
          "endTime": 115.5
        }
      ]
    },
    {
      "id": 12,
      "startTime": 115.5,
      "endTime": 130.0,
      "words": [
        {
          "coptic": "Ⲡⲓⲱⲟⲩ",
          "english": "Glory",
          "arabic": "المجد",
          "startTime": 115.7,
          "endTime": 118.5
        },
        {
          "coptic": "ⲙ̀Ⲫⲓⲱⲧ",
          "english": "to the Father",
          "arabic": "للآب",
          "startTime": 118.9,
          "endTime": 120.5
        },
        {
          "coptic": "ⲛⲉⲙ",
          "english": "and",
          "arabic": "و",
          "startTime": 120.5,
          "endTime": 121.1
        },
        {
          "coptic": "ⲡ̀ϣⲏⲣⲓ",
          "english": "the Son",
          "arabic": "الابن",
          "startTime": 121.2,
          "endTime": 123.0
        },
        {
          "coptic": "ⲛⲉⲙ",
          "english": "and",
          "arabic": "و",
          "startTime": 123.1,
          "endTime": 123.8
        },
        {
          "coptic": "Ⲡⲓⲡⲛⲉⲩⲙⲁ",
          "english": "the Spirit",
          "arabic": "الروح",
          "startTime": 123.8,
          "endTime": 126.0
        },
        {
          "coptic": "Ⲉⲑⲟⲩⲁⲃ",
          "english": "Holy",
          "arabic": "القدس",
          "startTime": 126.5,
          "endTime": 130.0
        }
      ]
    },
    {
      "id": 13,
      "startTime": 130.5,
      "endTime": 145.0,
      "words": [
        {
          "coptic": "ϯⲛⲟⲩ",
          "english": "Now",
          "arabic": "الآن",
          "startTime": 130.0,
          "endTime": 131.5
        },
        {
          "coptic": "ⲛⲉⲙ",
          "english": "and",
          "arabic": "و",
          "startTime": 131.5,
          "endTime": 133.0
        },
        {
          "coptic": "ⲛ̀ⲥⲏⲟⲩ",
          "english": "times",
          "arabic": "كل أوان",
          "startTime": 133.1,
          "endTime": 134.5
        },
        {
          "coptic": "ⲛⲓⲃⲉⲛ",
          "english": "all",
          "arabic": "وكل",
          "startTime": 134.5,
          "endTime": 136.2
        },
        {
          "coptic": "ⲛⲉⲙ",
          "english": "and",
          "arabic": "و",
          "startTime": 136.3,
          "endTime": 137.2
        },
        {
          "coptic": "ϣⲁ",
          "english": "unto",
          "arabic": "إلى",
          "startTime": 137.5,
          "endTime": 138.5
        },
        {
          "coptic": "ⲉⲛⲉϩ",
          "english": "age",
          "arabic": "دهر",
          "startTime": 138.3,
          "endTime": 140.2
        },
        {
          "coptic": "ⲛ̀ⲧⲉ",
          "english": "of",
          "arabic": "الدهور",
          "startTime": 140.3,
          "endTime": 140.9
        },
        {
          "coptic": "ⲛⲓⲉⲛⲉϩ",
          "english": "the ages",
          "arabic": "كلها",
          "startTime": 141.0,
          "endTime": 145.0
        },
      ]
    }
  ]




//  [
//   {
//     id: 1,
//     startTime: 0.0,
//     endTime: 2.0,
//     words: [
//       { coptic: "Ϩⲉⲙⲥⲓ", english: "sit down", arabic: "اجلس", startTime:0.0, endTime: 1.0 },
//     ]
//   },
//   {
//     id: 2,
//     startTime: 3.0,
//     endTime: 9.0,
//     words: [
//       { coptic: "̀Ⲛⲑⲱⲛ", english: "where", arabic: "اين", startTime: 4.0, endTime: 5.0 },
//     ]
//   },
//   {
//     id: 3,
//     startTime: 10.0,
//     endTime: 14.0,
//     words: [
//       { coptic: "Ϩⲉⲙⲥⲓ", english: "set down", arabic: "اجلس", startTime: 10.0, endTime: 11.0 },
//       { coptic: "̀Ⲙⲛⲁⲓ", english: "beside me", arabic: "بجانبي", startTime: 11.0, endTime: 12.0 }    ]
//   },
//   {
//     id: 4,
//     startTime: 15.0,
//     endTime: 19.0,
//     words: [
//       { coptic: "Ϩⲓϫⲉⲛ", english: "on", arabic: "علي" , startTime: 15.0, endTime: 16.0},
//       { coptic: "ⲟⲩ", english: "what", arabic: "ماذا", startTime: 16.0, endTime: 17.0}
//     ]
//   },
//   {
//     id: 5,
//     startTime: 23.0,
//     endTime: 27.0, 
//     words: [
//       { coptic: "Ϩⲓϫⲉⲛ", english: "on", arabic: "علي" , startTime: 23.0, endTime: 24.0},
//       { coptic: "ⲡⲓⲧⲟⲧⲥ", english: "the chair", arabic: "الكرسي" , startTime: 24.0, endTime: 25.0}
//     ]
//   },
// ];
