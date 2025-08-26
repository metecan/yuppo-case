export const fetchMarkdownFromUrl = async (url: string): Promise<string> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch markdown: ${response.status} ${response.statusText}`);
    }

    const markdownContent = await response.text();
    return markdownContent;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching markdown: ${error.message}`);
    }
    throw new Error('Unknown error occurred while fetching markdown');
  }
};

export const isValidMarkdownUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return false;
  }
};
