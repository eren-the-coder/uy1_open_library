import styles from './Post.module.css';
import { FaDownload } from 'react-icons/fa';
import { HiMiniCalendarDateRange } from 'react-icons/hi2';

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
            <span className={`${styles.bubble} ${styles.bubbleDate}`}>
              <HiMiniCalendarDateRange size={24} color="#1d4ed8"
                style={{
                  marginRight: "5px",
                }}
              />
              {date}
            </span>
          </div>
          {hasDownload && (
            <div className={styles.actions}>
              <button className={`btn ${styles.downloadBtn}`} onClick={handleDownload}>
                <FaDownload size={15} color="#fff" style={{
                  marginRight: "5px",
                }} />
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