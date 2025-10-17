// components/Main.js
import Aside from '../Aside/Aside';
import Feed from '../Feed/Feed';
import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      <Feed />
      <Aside />
    </main>
  );
};

export default Main;