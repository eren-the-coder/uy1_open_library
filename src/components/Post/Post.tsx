import styles from './Post.module.css';

interface PostProps {
  title: string;
  description: string;
  date: string;
  type: any;
  hasPreview: boolean;
  hasDownload: boolean;
}

const Post = ({ title, description, date, type, hasPreview, hasDownload }: PostProps) => {
  const handleDownload = () => {
    console.log('Téléchargement du document:', title);
  };

  const getTypeColor = (type: string) => {
    const colors: any = {
      'Communiqué': styles.typeCommunique,
      'Cours': styles.typeCours,
      'TD': styles.typeTD,
      'TP': styles.typeTP
    };
    return colors[type] || styles.typeDefault;
  };

  return (
    <article className={styles.post}>
      {hasPreview && (
        <div className={styles.preview}>Aperçu PDF</div>
      )}
      <div className={styles.typeBadge}>
        <span className={`${styles.type} ${getTypeColor(type)}`}>
          {type}
        </span>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.metadatas}>
          <div className="bubbles">
            <span className={`${styles.bubble} ${styles.bubbleDate}`}>{date}</span>
          </div>
          {hasDownload && (
            <div className={styles.actions}>
              <button className={`btn ${styles.downloadBtn}`} onClick={handleDownload}>
                Télécharger
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default Post;