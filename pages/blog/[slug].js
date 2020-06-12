import styles from '../../sass/pageScss/[slug].module.scss';
import MarkDown from 'react-markdown';
import { NextSeo } from 'next-seo';
export default function blog({ post }) {
  const SEO = {
    title: `Anshu Opinion | ${post.tittle}`,
    description: `Anshu Opinion | ${post.description}`,

    openGraph: {
      title: `Anshu Opinion | ${post.tittle}`,
      description: `Anshu Opinion | ${post.description}`,
    },
  };

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
    <>
      <NextSeo {...SEO} />
      <div className="container">
        <div className="content">
          {post && (
            <div className={styles.slug}>
              <h2>{post.tittle}</h2>
              <img src={API_URL + url} alt={post.post_image.name} />
              <MarkDown source={post.description} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/posts`);
  const posts = await res.json();

  const path = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
  return {
    paths: path,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/posts/?slug=${slug}`);
  const post = await res.json();
  return {
    props: {
      post: post[0],
    },
  };
}

// export async function getServerSideProps(context) {
//   const { API_URL } = process.env;
//   const { slug } = context.query;
//   const res = await fetch(`${API_URL}/posts/?slug=${slug}`);
//   const post = await res.json();
//   return {
//     props: {
//       post: post[0],
//     },
//   };
// }
