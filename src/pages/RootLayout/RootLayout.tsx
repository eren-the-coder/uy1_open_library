import Aside from '../../components/Aside/Aside';
import styles from './RootLayout.module.css';
import { Outlet } from "react-router-dom";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const RootLayout = () => {
  return (
    <div className="page">
      <Header />
      <main className={styles.main}>
        <Outlet />
        <Aside />
      </main>
      <Footer />
    </div>
    
  );
};

export default RootLayout;