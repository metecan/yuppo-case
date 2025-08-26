'use client';

import EditorTextarea from 'src/components/common/EditorTextarea';
import EditorPreview from 'src/components/common/EditorPreview';
import SEOMetadataForm from 'src/components/common/SEOMetadataForm';

import { useDocumentActions } from 'src/hooks/useDocumentActions.hooks';
import styles from './EditorPageContent.module.scss';

const EditorPageContent = () => {
  const { markdown, setMarkdown } = useDocumentActions();

  return (
    <>
      <SEOMetadataForm />
      <div className={styles.editorPageContent}>
        <EditorTextarea value={markdown} onChange={setMarkdown} placeholder="Welcome to Yuppo Markdown Editor" />
        <div className={styles.previewPane}>
          <EditorPreview markdown={markdown} />
        </div>
      </div>
    </>
  );
};

export default EditorPageContent;
