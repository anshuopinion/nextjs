import styles from './Card.module.scss';
import Link from 'next/link';
export default function Card({ post }) {
  const { API_URL } = process.env;
  const {
    post_image: [
      {
        formats: {
          thumbnail: { url },
        },
      },
    ],
  } = post;

  return (
    <>
      <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
        <div className={styles.PostCard}>
          {post.post_image && <img src={API_URL + url} alt={post.post_image.name} />}
          <div className={styles.Body}>
            <h3>{post.tittle}</h3>
            <p dangerouslySetInnerHTML={{ __html: post.description.substring(0, 100) }} />
            <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
              <button>Read more</button>
            </Link>
          </div>
        </div>
      </Link>
    </>
  );
}
