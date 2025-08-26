import { marked } from 'marked';
import hljs from 'highlight.js';

export interface MarkdownProcessorOptions {
  gfm?: boolean;
  breaks?: boolean;
}

export const processMarkdownToHTML = (
  markdown: string,
  options: MarkdownProcessorOptions = { gfm: true, breaks: true },
): string => {
  try {
    marked.setOptions(options);

    let rawHtml = marked(markdown) as string;

    rawHtml = rawHtml.replace(/<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g, (match, lang, code) => {
      try {
        const highlighted = hljs.highlight(code, { language: lang }).value;
        return `<pre class="hljs"><code class="language-${lang}">${highlighted}</code></pre>`;
      } catch {
        return match;
      }
    });

    return sanitizeHTML(rawHtml);
  } catch (error) {
    console.error('HTML generation error:', error);
    return '<p>Error generating HTML</p>';
  }
};

export const sanitizeHTML = (html: string): string => {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '');
};
