import styles from '../sass/pageScss/index.module.scss';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Spinner from '../components/Spinner/Spinner';
const Card = dynamic(import('../components/Card/Card'));
const Slider = dynamic(import('../components/SliderPost/SliderPost'), {
  loading: () => <p>Loading...</p>,
});
const PageChanger = dynamic(import('../components/PageChanger/PageChanger'));

const Home = ({ posts, page, postSlider, postCountData }) => {
  const lastPage = Math.ceil(postCountData / 3);

  return (
    <div className="container">
      <div className="content">
        <Slider posts={postSlider} />
        {/* {isLoading ? (
          <div className={styles.cardContainer}>
            <div className={styles.Spinner}>
              <Spinner />
            </div>
          </div>
        ) : ( */}
        <div className={styles.cardContainer}>
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
        {/* )} */}

        <PageChanger page={page} lastPage={lastPage} />
      </div>
    </div>
  );
};
export default Home;

export async function getStaticProps(ctx) {
  const currentPage = ctx.params?.currentPage.toString();
  const currentPageNumber = +(currentPage || 1);
  const start = +currentPageNumber === 1 ? 0 : (+currentPageNumber - 1) * 3;
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/posts?_limit=3&_start=${start}`);
  const data = await res.json();
  const postCount = await fetch(`${API_URL}/posts/count`);
  const postCountData = await postCount.json();
  const allPost = await fetch(`${API_URL}/posts`);
  const sliderData = await allPost.json();

  return {
    props: {
      posts: data,
      page: +currentPageNumber,
      postSlider: sliderData,
      postCountData,
    },
  };
}

// export async function getStaticPaths() {
//   return {
//     fallback: false,
//     paths: [{ params: { currentPage: '2' } }],
//   };
// }

// export async function getServerSideProps({ query: { page = 1 } }) {
//   const start = +page === 1 ? 0 : (+page - 1) * 3;
//   const { API_URL } = process.env;
//   const res = await fetch(`${API_URL}/posts?_limit=3&_start=${start}`);
//   const data = await res.json();
//   const postCount = await fetch(`${API_URL}/posts/count`);
//   const postCountData = await postCount.json();
//   const allPost = await fetch(`${API_URL}/posts`);
//   const sliderData = await allPost.json();

//   return {
//     props: {
//       posts: data,
//       page: +page,
//       postSlider: sliderData,
//       postCountData,
//     },
//   };
// }
