import Navigation from '../components/Navigation/Navigation';
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
