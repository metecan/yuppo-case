'use client';

import { useState } from 'react';
import Button from 'src/components/common/Button';
import styles from './SEOMetadataForm.module.scss';
import SettingsIcon from 'src/components/icons/Settings';
import CloseIcon from 'src/components/icons/Close';
import AddIcon from 'src/components/icons/Add';
import { useDocumentActions } from 'src/hooks/useDocumentActions.hooks';

const SEOMetadataForm = () => {
  const { metadata, setTitle, setDescription, setAuthor, setKeywords } = useDocumentActions();

  const [isSEOFormExpanded, setIsSEOFormExpanded] = useState(false);
  const [newKeyword, setNewKeyword] = useState('');

  const handleFieldChange = (field: string, value: string | string[]) => {
    switch (field) {
      case 'title':
        setTitle(value as string);
        break;
      case 'description':
        setDescription(value as string);
        break;
      case 'author':
        setAuthor(value as string);
        break;
      case 'keywords':
        setKeywords(value as string[]);
        break;
    }
  };

  const toggleSEOFormExpanded = () => setIsSEOFormExpanded(!isSEOFormExpanded);

  const handleAddKeyword = () => {
    if (newKeyword.trim() && !metadata.keywords.includes(newKeyword.trim())) {
      const updatedKeywords = [...metadata.keywords, newKeyword.trim()];
      handleFieldChange('keywords', updatedKeywords);
      setNewKeyword('');
    }
  };

  const handleRemoveKeyword = (index: number) => {
    const updatedKeywords = metadata.keywords.filter((_, i) => i !== index);
    handleFieldChange('keywords', updatedKeywords);
  };

  return (
    <div className={styles.seoMetadataForm}>
      <div className={styles.header}>
        <h3 className={styles.title}>Blog SEO Settings</h3>
        <Button
          variant="secondary"
          size="small"
          icon={isSEOFormExpanded ? <CloseIcon /> : <SettingsIcon />}
          onClick={toggleSEOFormExpanded}
        >
          {isSEOFormExpanded ? 'Close' : 'Settings'}
        </Button>
      </div>

      {isSEOFormExpanded && (
        <div className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="title" className={styles.label}>
              Blog Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              className={styles.input}
              value={metadata.title}
              onChange={e => handleFieldChange('title', e.target.value)}
              placeholder="Enter blog title..."
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="description" className={styles.label}>
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className={styles.textarea}
              value={metadata.description}
              onChange={e => handleFieldChange('description', e.target.value)}
              placeholder="Brief description of your blog..."
              rows={3}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="author" className={styles.label}>
              Author
            </label>
            <input
              id="author"
              name="author"
              type="text"
              className={styles.input}
              value={metadata.author}
              onChange={e => handleFieldChange('author', e.target.value)}
              placeholder="Author name..."
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Keywords</label>
            <div className={styles.keywordContainer}>
              <div className={styles.keywordInput}>
                <input
                  type="text"
                  className={styles.input}
                  value={newKeyword}
                  onChange={e => setNewKeyword(e.target.value)}
                  placeholder="Add keyword..."
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddKeyword();
                    }
                  }}
                />
                <Button
                  variant="secondary"
                  size="small"
                  icon={<AddIcon />}
                  onClick={handleAddKeyword}
                  disabled={!newKeyword.trim()}
                  type="button"
                >
                  Add
                </Button>
              </div>
              {metadata.keywords.length > 0 && (
                <div className={styles.keywords}>
                  {metadata.keywords.map((keyword, index) => (
                    <span key={index} className={styles.keyword}>
                      {keyword}
                      <button className={styles.removeKeyword} onClick={() => handleRemoveKeyword(index)} type="button">
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SEOMetadataForm;
