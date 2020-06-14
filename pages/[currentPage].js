import Home, { getStaticProps } from './';

export default Home;
export { getStaticProps };

export async function getStaticPaths() {
  const { API_URL } = process.env;
  const postCount = await fetch(`${API_URL}/posts/count`);
  const postCountData = await postCount.json();
  const lastPage = Math.ceil(postCountData / 3);
  const paths = Array(lastPage)
    .fill('')
    .map((_, index) => {
      if (index >= 1) {
        return { params: { currentPage: (index + 1).toString() } };
      } else {
        return { params: { currentPage: '' } };
      }
    });

  return {
    fallback: false,
    paths: paths,
  };
}
