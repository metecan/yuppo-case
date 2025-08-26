import { useDocumentStore } from 'src/stores/document.store';

export const useDocumentActions = () => {
  const {
    markdown,
    metadata,
    setMarkdown,
    setTitle,
    setDescription,
    setAuthor,
    setKeywords,
    resetDocument,
    autoGenerateTitleFromMarkdown,
  } = useDocumentStore();

  return {
    // Document state
    markdown,
    metadata,

    // Document actions
    setMarkdown,
    setTitle,
    setDescription,
    setAuthor,
    setKeywords,
    resetDocument,
    autoGenerateTitleFromMarkdown,

    updateDocument: (updates: {
      markdown?: string;
      title?: string;
      description?: string;
      author?: string;
      keywords?: string[];
    }) => {
      if (updates.markdown !== undefined) setMarkdown(updates.markdown);
      if (updates.title !== undefined) setTitle(updates.title);
      if (updates.description !== undefined) setDescription(updates.description);
      if (updates.author !== undefined) setAuthor(updates.author);
      if (updates.keywords !== undefined) setKeywords(updates.keywords);
    },
  };
};
