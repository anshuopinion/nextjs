import Card from '../components/Card/Card';
import fetch from 'isomorphic-unfetch';
import styles from '../sass/index.module.scss';
import Slider from '../components/SliderPost/SliderPost';
const Home = ({ posts }) => {
  return (
    <div className="container">
      <Slider posts={posts} />
      <div className={styles.cardContainer}>
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
export default Home;
export async function getServerSideProps() {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/posts`);
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}
