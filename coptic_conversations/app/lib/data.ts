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
          "english": "saying",
          "arabic": "قائلين",
          "startTime": 0.0,
          "endTime": 2.0
        },
        {
          "coptic": "Ⲡⲉⲛⲓⲱⲧ",
          "english": "Our Father",
          "arabic": "أبانا",
          "startTime": 2.5,
          "endTime": 4.0
        },
        {
          "coptic": "ⲉⲧϦⲉⲛ",
          "english": "who is in",
          "arabic": "الذي في",
          "startTime": 4.5,
          "endTime": 6.0
        },
        {
          "coptic": "ⲛⲓⲫⲏⲟⲩⲓ̀",
          "english": "the heavens",
          "arabic": "السموات",
          "startTime": 6.5,
          "endTime": 8.0
        },
        {
          "coptic": "ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ",
          "english": "hallowed be",
          "arabic": "ليتقدس",
          "startTime": 8.5,
          "endTime": 11.0
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
          "english": "(subject marker)",
          "arabic": "اسمك",
          "startTime": 12.0,
          "endTime": 12.5
        },
        {
          "coptic": "ⲡⲉⲕⲣⲁⲛ",
          "english": "your name",
          "arabic": "اسمك",
          "startTime": 13,
          "endTime": 15
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
          "english": "(subject marker)",
          "arabic": "ملكوتك",
          "startTime": 20,
          "endTime": 20.5
        },
        {
          "coptic": "ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ",
          "english": "your kingdom",
          "arabic": "ملكوتك",
          "startTime": 21.0,
          "endTime": 23.0
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
          "endTime": 26.0
        },
        {
          "coptic": "ⲙⲁⲣⲉϥϣⲱⲡⲓ",
          "english": "let it be done",
          "arabic": "لتكن",
          "startTime": 26.5,
          "endTime": 30.5
        },
        {
          "coptic": "ⲙ̀ⲫⲣⲏϯ",
          "english": "as / like",
          "arabic": "كما",
          "startTime": 31.0,
          "endTime": 34.0
        },
        {
          "coptic": "Ϧⲉⲛ",
          "english": "in",
          "arabic": "في",
          "startTime": 35.0,
          "endTime": 36.0
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
          "endTime": 39
        },
        {
          "coptic": "ϩⲓϫⲉⲛ",
          "english": "on",
          "arabic": "على",
          "startTime": 40.0,
          "endTime": 41.5
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
          "endTime": 48.0
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
          "startTime": 50.0,
          "endTime": 51.0
        },
        {
          "coptic": "ⲙⲏⲓϥ",
          "english": "give it",
          "arabic": "أعطنا",
          "startTime": 51.5,
          "endTime": 53.0
        },
        {
          "coptic": "ⲛⲁⲛ",
          "english": "to us",
          "arabic": "إيانا",
          "startTime": 53.5,
          "endTime": 55.0
        },
        {
          "coptic": "ⲙ̀ⲫⲟⲟⲩ",
          "english": "today",
          "arabic": "اليوم",
          "startTime": 55.5,
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
          "arabic": "اترك",
          "startTime": 59.5,
          "endTime": 60.0
        },
        {
          "coptic": "ⲛⲏⲉⲧⲉⲣⲟⲛ",
          "english": "our debts",
          "arabic": "ما علينا",
          "startTime": 60.5,
          "endTime": 62.0
        },
        {
          "coptic": "ⲛⲁⲛ",
          "english": "to us",
          "arabic": "لنا",
          "startTime": 62.5,
          "endTime": 63.0
        },
        {
          "coptic": "ⲉ̀ⲃⲟⲗ",
          "english": "away",
          "arabic": "خارجاً",
          "startTime": 63.5,
          "endTime": 64.0
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
          "startTime": 64.5,
          "endTime": 67.0
        },
        {
          "coptic": "ϩⲱⲛ",
          "english": "we also",
          "arabic": "نحن أيضاً",
          "startTime": 67.5,
          "endTime": 68
        },
        {
          "coptic": "ⲛ̀ⲧⲉⲛⲭⲱ",
          "english": "we forgive",
          "arabic": "نترك",
          "startTime": 68.5,
          "endTime": 69.5
        },
        {
          "coptic": "ⲉ̀ⲃⲟⲗ",
          "english": "away",
          "arabic": "خارجاً",
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
          "startTime": 76.5,
          "endTime": 77.0
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
          "endTime": 80.0
        },
        {
          "coptic": "ⲙ̀ⲡⲉⲣⲉⲛⲧⲉⲛ",
          "english": "lead us not",
          "arabic": "لا تدخلنا",
          "startTime": 80.5,
          "endTime": 82.0
        },
        {
          "coptic": "ⲉ̀Ϧⲟⲩⲛ",
          "english": "into",
          "arabic": "في",
          "startTime": 82.5,
          "endTime": 83.0
        },
        {
          "coptic": "ⲉ̀ⲡⲓⲣⲁⲥⲙⲟⲥ",
          "english": "temptation",
          "arabic": "تجربة",
          "startTime": 83.5,
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
          "startTime": 86.5,
          "endTime": 89.0
        },
        {
          "coptic": "ⲛⲁϩⲙⲉⲛ",
          "english": "deliver us",
          "arabic": "نجنا",
          "startTime": 89.5,
          "endTime": 90.0
        },
        {
          "coptic": "ⲉ̀ⲃⲟⲗϩⲁ",
          "english": "from",
          "arabic": "من",
          "startTime": 90.5,
          "endTime": 91.0
        },
        {
          "coptic": "ⲡⲓⲡⲉⲧϩⲱⲟⲩ",
          "english": "the evil one",
          "arabic": "الشرير",
          "startTime": 91.5,
          "endTime": 93.5
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
          "english": "in / through",
          "arabic": "بـ",
          "startTime": 93.5,
          "endTime": 94.5
        },
        {
          "coptic": "Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ",
          "english": "Christ",
          "arabic": "المسيح",
          "startTime": 95.0,
          "endTime": 97.0
        },
        {
          "coptic": "Ⲓⲏⲥⲟⲩⲥ",
          "english": "Jesus",
          "arabic": "يسوع",
          "startTime": 97.5,
          "endTime": 98.0
        },
        {
          "coptic": "Ⲡⲉⲛϭⲟⲓⲥ",
          "english": "our Lord",
          "arabic": "ربنا",
          "startTime": 98.5,
          "endTime": 101.0
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
          "startTime": 101.5,
          "endTime": 102.0
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
          "startTime": 103.5,
          "endTime": 104.0
        },
        {
          "coptic": "ϯⲙⲉⲧⲟⲩⲣⲟ",
          "english": "the kingdom",
          "arabic": "الملك",
          "startTime": 104.5,
          "endTime": 106.0
        },
        {
          "coptic": "ⲛⲉⲙ",
          "english": "and",
          "arabic": "و",
          "startTime": 106.5,
          "endTime": 107.0
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
          "startTime": 109.5,
          "endTime": 110.0
        },
        {
          "coptic": "ⲡⲓⲱⲟⲩ",
          "english": "the glory",
          "arabic": "المجد",
          "startTime": 110.1,
          "endTime": 111.0
        },
        {
          "coptic": "ϣⲁ",
          "english": "unto",
          "arabic": "إلى",
          "startTime": 111.2,
          "endTime": 112.0
        },
        {
          "coptic": "ⲉⲛⲉϩ",
          "english": "eternity",
          "arabic": "الأبد",
          "startTime": 112.5,
          "endTime": 114.0
        },
        {
          "coptic": "Ⲁ̀ⲙⲏⲛ",
          "english": "Amen",
          "arabic": "آمين",
          "startTime": 114.1,
          "endTime": 115.0
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
          "startTime": 115.5,
          "endTime": 118.0
        },
        {
          "coptic": "ⲙ̀Ⲫⲓⲱⲧ",
          "english": "to the Father",
          "arabic": "للآب",
          "startTime": 118.5,
          "endTime": 120.0
        },
        {
          "coptic": "ⲛⲉⲙ",
          "english": "and",
          "arabic": "و",
          "startTime": 120.5,
          "endTime": 121.0
        },
        {
          "coptic": "ⲡ̀Ϣⲏⲣⲓ",
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
          "endTime": 123.6
        },
        {
          "coptic": "ⲡⲓⲠⲛⲉⲩⲙⲁ",
          "english": "the Spirit",
          "arabic": "الروح",
          "startTime": 123.7,
          "endTime": 126.0
        },
        {
          "coptic": "Ⲉⲑⲟⲩⲁⲛⲃ",
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
          "endTime": 132.0
        },
        {
          "coptic": "ⲛ̀ⲥⲏⲟⲩ",
          "english": "times",
          "arabic": "كل أوان",
          "startTime": 132.5,
          "endTime": 134.0
        },
        {
          "coptic": "ⲛⲓⲲⲉⲛ",
          "english": "all",
          "arabic": "وكل",
          "startTime": 134.4,
          "endTime": 136.0
        },
        {
          "coptic": "ⲛⲉⲙ",
          "english": "and",
          "arabic": "و",
          "startTime": 137.0,
          "endTime": 137.5
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
          "startTime": 139.0,
          "endTime": 140.0
        },
        {
          "coptic": "ⲛ̀ⲧⲉ",
          "english": "of",
          "arabic": "الدهور",
          "startTime": 140.3,
          "endTime": 140.6
        },
        {
          "coptic": "ⲛⲓⲉⲛⲉϩ",
          "english": "the ages",
          "arabic": "كلها",
          "startTime": 140.7,
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
