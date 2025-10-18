import Post from '../../components/Post/Post';
import styles from './Feed.module.css';

const Feed = () => {
  const posts = [
    {
      id: 1,
      title: "Titre du communiqué",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestiae excepturi consequatur sit praesentium veritatis earum quasi laboriosam deserunt, nemo expedita atque doloremque. Aliquid, magni eveniet sint voluptatem fuga dolor.",
      date: "25/10/25",
      type: "Communiqué",
      hasPreview: false,
      hasDownload: false
    },
    {
      id: 2,
      title: "Introduction à l'algorithmique",
      description: "Cours complet sur les bases de l'algorithmique avec exemples et exercices pratiques pour les débutants en programmation.",
      date: "20/10/25",
      type: "Cours",
      hasPreview: true,
      hasDownload: true
    },
    {
      id: 3,
      title: "Structures de données avancées",
      description: "Guide approfondi sur les structures de données complexes avec implémentations en Python et analyses de complexité.",
      date: "15/10/25",
      type: "TD",
      hasPreview: true,
      hasDownload: true
    }
  ];

  return (
    <section className={styles.feed}>
      <h1 className={styles.title}>Derniers posts</h1>
      <div className={styles.postsContainer}>
        {posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
};

export default Feed;