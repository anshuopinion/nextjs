import Navigation from '../components/Navigation/Navigation';
import fetch from 'isomorphic-unfetch';
const Header = ({ navigations }) => {
  const { API_URL } = process.env;
  console.log(API_URL);
  return (
    <header>
      <Navigation navigations={navigations} />
    </header>
  );
};
export default Header;

export async function getServerSideProps() {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/navigations`);
  const data = await res.json();

  return {
    props: {
      navigations: data,
    },
  };
}
