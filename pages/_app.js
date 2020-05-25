
import Header from '../components/Header'

const MyApp = ({ Component, pageProps }) => (
  <>
    <Header/>
    <Component {...pageProps} />
  </>
);

export default MyApp;
