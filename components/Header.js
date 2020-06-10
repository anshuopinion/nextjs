import Navigation from '../components/Navigation/Navigation';
const Header = ({ navigations }) => {
  return (
    <header>
      <Navigation navigations={navigations} />
    </header>
  );
};
export default Header;
