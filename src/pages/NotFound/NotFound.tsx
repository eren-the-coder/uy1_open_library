import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Oups ! La page que vous cherchez n'existe pas.</p>
    </section>
  );
};

export default NotFound;
