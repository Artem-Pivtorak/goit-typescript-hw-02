import { ClipLoader } from 'react-spinners';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <ClipLoader color="#1e90ff" size={60} />
    </div>
  );
};

export default Loader;
