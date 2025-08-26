export const downloadFile = (content: string, filename: string, mimeType: string): void => {
  const blob = new Blob([content], { type: `${mimeType};charset=utf-8` });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const sanitizeFilename = (filename: string): string => {
  return filename.replace(/[^a-z0-9]/gi, '_').toLowerCase();
};

export const downloadHTML = (htmlContent: string, title: string): void => {
  const filename = `${sanitizeFilename(title)}.html`;
  downloadFile(htmlContent, filename, 'text/html');
};

export const downloadMarkdown = (markdownContent: string, title: string): void => {
  const filename = `${sanitizeFilename(title)}.md`;
  downloadFile(markdownContent, filename, 'text/markdown');
};
