import Header from '../components/Header';
import '../sass/main.scss';
import Router from 'next/router';
// import NProgress from 'nprogress'; //nprogress module
// import 'nprogress/nprogress.css'; //styles of nprogress//Binding events.
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../components/Footer/Footer';
// NProgress.configure({ showSpinner: false });
// Router.events.on('routeChangeStart', () => NProgress.start());
// Router.events.on('routeChangeComplete', () => NProgress.done());
// Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps, navigations }) => {
  return (
    <>
      <Header navigations={navigations} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

MyApp.getInitialProps = async () => {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/navigations`);
  const navigations = await res.json();
  return { navigations: navigations };
};

export default MyApp;
