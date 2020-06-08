import Card from '../components/Card/Card';
import fetch from 'isomorphic-unfetch';
import styles from '../sass/pageScss/index.module.scss';
import Slider from '../components/SliderPost/SliderPost';
import { useRouter } from 'next/router';
const Home = ({ posts, page }) => {
  const router = useRouter();
  return (
    <div className="container">
      <div className="content">
        <Slider posts={posts} />
        <div className={styles.cardContainer}>
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
        <button onClick={() => router.push(`/?page=${page + 1}`)}>Next</button>
      </div>
    </div>
  );
};
export default Home;
export async function getServerSideProps({ query: { page = 1 } }) {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/posts?_limit=3`);
  const data = await res.json();

  return {
    props: {
      posts: data,
      page: +page,
    },
  };
}
