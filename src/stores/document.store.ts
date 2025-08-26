import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface DocumentMetadata {
  title: string;
  description: string;
  author: string;
  keywords: string[];
}

export interface DocumentState {
  // Document content
  markdown: string;
  metadata: DocumentMetadata;

  // Actions
  setMarkdown: (markdown: string) => void;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setAuthor: (author: string) => void;
  setKeywords: (keywords: string[]) => void;
  updateMetadata: (metadata: Partial<DocumentMetadata>) => void;

  resetDocument: () => void;
  autoGenerateTitleFromMarkdown: () => void;
}

const initialState = {
  markdown: '',
  metadata: {
    title: 'Untitled Document',
    description: '',
    author: '',
    keywords: [] as string[],
  },
};

export const useDocumentStore = create<DocumentState>()(
  persist(
    (set, get) => ({
      ...initialState,

      setMarkdown: (markdown: string) => {
        set({ markdown });

        const state = get();
        if (state.metadata.title === 'Untitled Document' || !state.metadata.title.trim()) {
          state.autoGenerateTitleFromMarkdown();
        }
      },

      setTitle: (title: string) =>
        set(state => ({
          metadata: { ...state.metadata, title },
        })),

      setDescription: (description: string) =>
        set(state => ({
          metadata: { ...state.metadata, description },
        })),

      setAuthor: (author: string) =>
        set(state => ({
          metadata: { ...state.metadata, author },
        })),

      setKeywords: (keywords: string[]) =>
        set(state => ({
          metadata: { ...state.metadata, keywords },
        })),

      updateMetadata: (metadata: Partial<DocumentMetadata>) =>
        set(state => ({
          metadata: { ...state.metadata, ...metadata },
        })),

      resetDocument: () => set(initialState),

      autoGenerateTitleFromMarkdown: () => {
        const state = get();
        const firstHeading = state.markdown.match(/^#\s+(.+)$/m);
        if (firstHeading) {
          set(state => ({
            metadata: { ...state.metadata, title: firstHeading[1].trim() },
          }));
        }
      },
    }),
    {
      name: 'yuppo-document-storage',
      partialize: state => ({
        markdown: state.markdown,
        metadata: state.metadata,
      }),
    },
  ),
);
