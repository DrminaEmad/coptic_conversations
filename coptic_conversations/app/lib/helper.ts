import { TranscriptSegment } from "../lib/data";



export const arabicSentence = (translation : "english" | "arabic" | "none" ,segment: TranscriptSegment): string => {
    // 1. Map through the words array to extract just the arabic strings
    if (translation !== 'arabic'||!segment.words || segment.words.length === 0) return "";
    
    const arabicWords = segment.words.map(word => word.arabic);
    
    // 2. Join them with a standard space
    const standardSentence = arabicWords.join(" ");
    
    // 3. Prepend the Right-to-Left Mark (\u200F) 
    // This tells text engines to treat spaces and punctuation as RTL text.
    return `\u200F${standardSentence}`;
  }
  

  
  export const englishSentence = (translation : "english" | "arabic" | "none" ,segment: TranscriptSegment): string => {
  // 1. Return an empty string immediately if there are no words
  if (translation !== 'english' ||!segment.words || segment.words.length === 0){ return ""};

  // 2. Map through the array to extract just the english strings
  const englishWords = segment.words.map(word => word.english.trim());
  
  // 3. Join them together with a standard space
  let sentence = englishWords.join(" ");
  
  // 4. Clean up formatting: Capitalize the first letter
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
  
  // 5. Clean up formatting: Ensure the sentence ends with a period
  if (!sentence.endsWith(".") && !sentence.endsWith("?") && !sentence.endsWith("!")) {
    sentence += ".";
  }
  
  return sentence;
}