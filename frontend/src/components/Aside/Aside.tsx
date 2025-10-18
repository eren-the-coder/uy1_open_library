// components/Aside.js
import TeachingUnits from '../TeachingUnits/TeachingUnits';
// import AddPostForm from '../AddPostForm/AddPostForm';
import styles from './Aside.module.css';

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <TeachingUnits />
      {/* <AddPostForm /> */}
    </aside>
  );
};

export default Aside;