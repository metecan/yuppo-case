import { IEditorLayoutProps } from './EditorLayout.types';
import styles from './EditorLayout.module.scss';

const EditorLayout = (props: IEditorLayoutProps) => {
  const { children } = props;

  return <div className={styles.editorLayout}>{children}</div>;
};

export default EditorLayout;
