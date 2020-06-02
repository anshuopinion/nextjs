import styles from '../../sass/[slug].module.scss';
import fetch from 'isomorphic-unfetch';

export default function blog({ post }) {
  const { API_URL } = process.env;

  const {
    post_image: [
      {
        formats: {
          large: { url },
        },
      },
    ],
  } = post;

  return (
    <div className={styles.container}>
      {post && (
        <div>
          <h2>{post.tittle}</h2>
          <img src={API_URL + url} alt={post.post_image.name} />
          <p>{post.description}</p>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { API_URL } = process.env;
  const { slug } = context.query;
  const res = await fetch(`${API_URL}/posts/?slug=${slug}`);
  const post = await res.json();
  return {
    props: {
      post: post[0],
    },
  };
}
