import Header from '../components/Header';
import '../sass/main.scss';
import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';
const MyApp = ({ Component, pageProps, navigations }) => {
  return (
    <>
      <Header navigations={navigations} />
      <Component {...pageProps} />
    </>
  );
};

const { publicRuntimeConfig } = getConfig();
MyApp.getInitialProps = async () => {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`);
  const navigations = await res.json();
  return { navigations: navigations };
};

export default MyApp;
