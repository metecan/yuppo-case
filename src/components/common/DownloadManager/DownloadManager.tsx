'use client';

import Button from 'src/components/common/Button';
import styles from './DownloadManager.module.scss';

import DownloadIcon from 'src/components/icons/Download';
import generateCompleteHTMLDocument from 'src/utils/documentGenerator';
import { downloadHTML, downloadMarkdown } from 'src/utils/downloadHelpers';
import { useDocumentActions } from 'src/hooks/useDocumentActions.hooks';

const DownloadManager = () => {
  const { markdown, metadata } = useDocumentActions();

  const { title } = metadata;

  const generateFullHTML = () => {
    return generateCompleteHTMLDocument({
      markdown,
      metadata: {
        ...metadata,
        title: metadata.title || 'Untitled Document',
      },
    });
  };

  const handleDownloadHTML = () => {
    const htmlContent = generateFullHTML();
    downloadHTML(htmlContent, title);
  };

  const handleDownloadMarkdown = () => {
    downloadMarkdown(markdown, title);
  };

  return (
    <div className={styles.downloadManager}>
      <div className={styles.actions}>
        <Button
          variant="primary"
          size="small"
          onClick={handleDownloadHTML}
          disabled={!markdown.trim()}
          icon={<DownloadIcon />}
        >
          HTML
        </Button>

        <Button
          variant="secondary"
          size="small"
          onClick={handleDownloadMarkdown}
          disabled={!markdown.trim()}
          icon={<DownloadIcon />}
        >
          MD
        </Button>
      </div>
    </div>
  );
};

export default DownloadManager;
