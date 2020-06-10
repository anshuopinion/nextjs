import Card from '../components/Card/Card';
import fetch from 'isomorphic-unfetch';
import styles from '../sass/pageScss/index.module.scss';
import Slider from '../components/SliderPost/SliderPost';
import PageChanger from '../components/PageChanger/PageChanger';
const Home = ({ posts, page, postSlider, postCountData }) => {
  const lastPage = Math.ceil(postCountData / 3);

  return (
    <div className="container">
      <div className="content">
        <Slider posts={postSlider} />
        <div className={styles.cardContainer}>
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
        <PageChanger page={page} lastPage={lastPage} />
      </div>
    </div>
  );
};
export default Home;
export async function getServerSideProps({ query: { page = 1 } }) {
  const start = +page === 1 ? 0 : (+page - 1) * 3;
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
      page: +page,
      postSlider: sliderData,
      postCountData,
    },
  };
}
