import { processMarkdownToHTML } from './markdownProcessor';
import generateHTMLHead, { SEOMetadata } from './htmlMetadata';
import getDocumentStyles from './documentStyles';

export interface DocumentGeneratorOptions {
  markdown: string;
  metadata: SEOMetadata;
}

const generateCompleteHTMLDocument = (options: DocumentGeneratorOptions): string => {
  const { markdown, metadata } = options;

  const htmlContent = processMarkdownToHTML(markdown);
  const headSection = generateHTMLHead(metadata);
  const styles = getDocumentStyles();

  return `<!DOCTYPE html>
<html lang="en">
${headSection}
    <style>
${styles}
    </style>
</head>
<body>
    ${htmlContent}
</body>
</html>`;
};

export default generateCompleteHTMLDocument;
