import Header from '../components/Header';
import '../sass/main.scss';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress//Binding events.
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../components/Footer/Footer';
NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
const MyApp = ({ Component, pageProps, navigations }) => {
  return (
    <>
      <DefaultSeo {...SEO} />

      <Header />

      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
