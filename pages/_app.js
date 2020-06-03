import Header from '../components/Header';
import '../sass/main.scss';
import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';
import { config } from '@fortawesome/fontawesome-svg-core'; // 👈
import '@fortawesome/fontawesome-svg-core/styles.css'; // 👈
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
config.autoAddCss = false; // 👈

import Footer from '../components/Footer/Footer';
const MyApp = ({ Component, pageProps, navigations }) => {
  return (
    <>
      <Header navigations={navigations} />
      <Component {...pageProps} />
      <Footer />
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
