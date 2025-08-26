'use client';

import { IEditorPreviewProps } from './EditorPreview.types';
import styles from './EditorPreview.module.scss';
import DownloadManager from 'src/components/common/DownloadManager';
import { useMarkdownPreview } from 'src/hooks/useMarkdownPreview.hooks';

const EditorPreview = (props: IEditorPreviewProps) => {
  const { markdown } = props;

  const { htmlContent, textStats } = useMarkdownPreview(markdown);
  const { wordCount, readingTime } = textStats;

  return (
    <div className={styles.editorPreview}>
      <div className={styles.header}>
        <h3 className={styles.title}>Preview</h3>
        <div className={styles.stats}>
          <span className={styles.stat}>{wordCount} words</span>
          <span className={styles.stat}>~{readingTime} min read</span>
          <DownloadManager />
        </div>
      </div>
      <div className={styles.content}>
        {markdown.trim() ? (
          <div className="markdown" dangerouslySetInnerHTML={{ __html: htmlContent }} />
        ) : (
          <div className={styles.placeholder}>
            <p>Start typing markdown to see the preview...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditorPreview;
