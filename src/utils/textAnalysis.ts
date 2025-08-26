export interface TextStatistics {
  wordCount: number;
  readingTime: number;
  lineCount: number;
  characterCount: number;
}

export interface TextAnalysisOptions {
  wordsPerMinute?: number;
}

export const calculateWordCount = (text: string): number => {
  return text.split(/\s+/).filter((word: string) => word.length > 0).length;
};

export const calculateLineCount = (text: string): number => {
  return text.split('\n').length;
};

export const calculateCharacterCount = (text: string): number => {
  return text.length;
};

export const calculateReadingTime = (wordCount: number, wordsPerMinute: number = 200): number => {
  const time = Math.ceil(wordCount / wordsPerMinute);
  return time > 0 ? time : 1;
};

export const analyzeText = (text: string, options: TextAnalysisOptions = {}): TextStatistics => {
  const { wordsPerMinute = 200 } = options;
  const wordCount = calculateWordCount(text);
  const readingTime = calculateReadingTime(wordCount, wordsPerMinute);
  const lineCount = calculateLineCount(text);
  const characterCount = calculateCharacterCount(text);

  return {
    wordCount,
    readingTime,
    lineCount,
    characterCount,
  };
};
