import { useRef, useState } from 'react';
import { IEditorTextareaProps } from './EditorTextarea.types';
import { calculateLineCount, calculateWordCount, calculateCharacterCount } from 'src/utils/textAnalysis';
import { fetchMarkdownFromUrl } from 'src/utils/markdownFetcher';
import useTabIndentation from 'src/hooks/useTabIndentation.hooks';
import styles from './EditorTextarea.module.scss';
import Button from '../Button';
import { useDocumentStore } from 'src/stores/document.store';

const EditorTextarea = (props: IEditorTextareaProps) => {
  const { value, onChange, placeholder = 'Enter your markdown here...' } = props;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { handleKeyDown } = useTabIndentation({ value, onChange });
  const { setMarkdown } = useDocumentStore();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  const handleAutofill = async () => {
    const markdownUrl =
      'https://gist.githubusercontent.com/metecan/f81a63010b36e875bf6fd2b4cd2649ea/raw/d860f7fa4be3c03f8d3b80494abbb4fa60c90cd5/example-markdown.md';

    setIsLoading(true);
    try {
      const markdownContent = await fetchMarkdownFromUrl(markdownUrl);
      setMarkdown(markdownContent);
      onChange(markdownContent);

      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    } catch (error) {
      console.error('Failed to fetch markdown:', error);

      const fallbackContent =
        '# Sample Markdown\n\nThis is an example of markdown content.\n\n- Item 1\n- Item 2\n- Item 3\n\n```javascript\nconsole.log("Hello, world!");\n```';
      setMarkdown(fallbackContent);
      onChange(fallbackContent);

      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    } finally {
      setIsLoading(false);
    }
  };

  const lineCount = calculateLineCount(value);
  const wordCount = calculateWordCount(value);
  const characterCount = calculateCharacterCount(value);

  return (
    <div className={styles.editorTextarea}>
      <div className={styles.header}>
        <h3 className={styles.title}>Markdown Editor</h3>
        <div className={styles.stats}>
          <span className={styles.stat}>{lineCount} lines</span>
          <span className={styles.stat}>{wordCount} words</span>
          <span className={styles.stat}>{characterCount} characters</span>
          {characterCount <= 0 && (
            <Button variant="primary" size="small" onClick={handleAutofill} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Example Autofill'}
            </Button>
          )}
        </div>
      </div>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={styles.textarea}
        spellCheck={false}
      />
    </div>
  );
};

export default EditorTextarea;
