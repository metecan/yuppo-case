import { useMemo } from 'react';
import { processMarkdownToHTML } from 'src/utils/markdownProcessor';
import { analyzeText, TextStatistics } from 'src/utils/textAnalysis';

export interface UseMarkdownPreviewReturn {
  htmlContent: string;
  textStats: TextStatistics;
}

export const useMarkdownPreview = (markdown: string): UseMarkdownPreviewReturn => {
  const htmlContent = useMemo(() => {
    try {
      return processMarkdownToHTML(markdown);
    } catch (error) {
      console.error('Markdown parsing error:', error);
      return '<p style="color: red;">Error parsing markdown</p>';
    }
  }, [markdown]);

  const textStats = useMemo(() => {
    return analyzeText(markdown);
  }, [markdown]);

  return {
    htmlContent,
    textStats,
  };
};
