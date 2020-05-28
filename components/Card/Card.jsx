import styles from './Card.module.scss';
import Link from 'next/link';
export default function Card({ post }) {
  const { API_URL } = process.env;
  return (
    <>
      <Link href="/blog/[id]" as={`/blog/${post.id}`}>
        <div className={styles.PostCard}>
          <img src={API_URL + post.post_image.url} alt={post.post_image.name} />
          <div className={styles.Body}>
            <h3>{post.tittle}</h3>
            <p dangerouslySetInnerHTML={{ __html: post.description.substring(0, 100) }} />
            <Link href="/blog/[id]" as={`/blog/${post.id}`}>
              <button>Read more</button>
            </Link>
          </div>
        </div>
      </Link>
    </>
  );
}
