import TinyEditorComponent from '@/component/tinyEditorComponent';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>

      <TinyEditorComponent />
    </div>
  );
}
